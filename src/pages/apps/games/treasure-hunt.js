import PropTypes from 'prop-types';
import { useCallback, useEffect, useMemo, useState, Fragment } from 'react';
import { useRouter } from 'next/router';

// material-ui
import { alpha, useTheme } from '@mui/material/styles';
import {
  Button,
  Chip,
  Dialog,
  Stack,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Tooltip,
  Typography,
  useMediaQuery
} from '@mui/material';

// third-party
import { PatternFormat } from 'react-number-format';
import { useFilters, useExpanded, useGlobalFilter, useRowSelect, useSortBy, useTable, usePagination } from 'react-table';

// project import
import Layout from 'layout';
import Page from 'components/Page';
import MainCard from 'components/MainCard';
import ScrollX from 'components/ScrollX';
import IconButton from 'components/@extended/IconButton';
import { PopupTransition } from 'components/@extended/Transitions';
import { HeaderSort, IndeterminateCheckbox, TablePagination } from 'components/third-party/ReactTable';

import AddMap from 'sections/apps/games/AddMaps';
// import AddCustomer from 'sections/apps/customer/AddCustomer';
import MapsView from 'sections/apps/games/MapsView';
import AlertCustomerDelete from 'sections/apps/customer/AlertCustomerDelete';

// import makeData from 'data/react-table';
import { renderFilterTypes, GlobalFilter } from 'utils/react-table';

// assets
import { PlusOutlined, EyeTwoTone } from '@ant-design/icons';
import { gamesApi } from '../../../api';
// import { set } from 'lodash';

// ==============================|| REACT TABLE ||============================== //

function TreasureMapTable({ columns, data, renderRowSubComponent, handleAdd, getHeaderProps }) {
  const theme = useTheme();
  const matchDownSM = useMediaQuery(theme.breakpoints.down('sm'));

  const filterTypes = useMemo(() => renderFilterTypes, []);
  // const sortBy = { id: 'fatherName', desc: false };

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    prepareRow,
    visibleColumns,
    rows,
    page,
    gotoPage,
    setPageSize,
    state: { globalFilter, pageIndex, pageSize, expanded },
    preGlobalFilteredRows,
    setGlobalFilter
    // setSortBy,
    // selectedFlatRows
  } = useTable(
    {
      columns,
      data,
      filterTypes,
      initialState: { pageIndex: 0, pageSize: 10 }
    },
    useGlobalFilter,
    useFilters,
    useSortBy,
    useExpanded,
    usePagination,
    useRowSelect
  );

  // useEffect(() => {
  //   if (matchDownSM) {
  //     setHiddenColumns(['age', 'contact', 'visits', 'email', 'status', 'avatar']);
  //   } else {
  //     setHiddenColumns(['avatar', 'email']);
  //   }
  //   // eslint-disable-next-line
  // }, [matchDownSM]);

  return (
    <>
      {/* <TableRowSelection selected={Object.keys(selectedRowIds).length} /> */}
      <Stack spacing={3}>
        <Stack
          direction={matchDownSM ? 'column' : 'row'}
          spacing={1}
          justifyContent="space-between"
          alignItems="center"
          sx={{ p: 3, pb: 0 }}
        >
          <GlobalFilter
            preGlobalFilteredRows={preGlobalFilteredRows}
            globalFilter={globalFilter}
            setGlobalFilter={setGlobalFilter}
            size="small"
          />
          <Stack direction={matchDownSM ? 'column' : 'row'} alignItems="center" spacing={1}>
            <Button variant="contained" startIcon={<PlusOutlined />} onClick={handleAdd} size="small">
              Add Maps
            </Button>
          </Stack>
        </Stack>
        <Table {...getTableProps()}>
          <TableHead>
            {headerGroups.map((headerGroup, index) => (
              <TableRow {...headerGroup.getHeaderGroupProps()} key={index} sx={{ '& > th:first-of-type': { width: '58px' } }}>
                {headerGroup.headers.map((column, i) => (
                  <TableCell {...column.getHeaderProps([{ className: column.className }, getHeaderProps(column)])} key={i}>
                    <HeaderSort column={column} sort />
                  </TableCell>
                ))}
              </TableRow>
            ))}
          </TableHead>
          <TableBody {...getTableBodyProps()}>
            {page.map((row, i) => {
              prepareRow(row);
              const rowProps = row.getRowProps();

              return (
                <Fragment key={i}>
                  <TableRow
                    {...row.getRowProps()}
                    onClick={() => {
                      row.toggleRowSelected();
                    }}
                    sx={{ cursor: 'pointer', bgcolor: row.isSelected ? alpha(theme.palette.primary.lighter, 0.35) : 'inherit' }}
                  >
                    {row.cells.map((cell, i) => (
                      <TableCell {...cell.getCellProps([{ className: cell.column.className }])} key={i}>
                        {cell.render('Cell')}
                      </TableCell>
                    ))}
                  </TableRow>
                  {row.isExpanded && renderRowSubComponent({ row, rowProps, visibleColumns, expanded })}
                </Fragment>
              );
            })}
            <TableRow sx={{ '&:hover': { bgcolor: 'transparent !important' } }}>
              <TableCell sx={{ p: 2, py: 3 }} colSpan={9}>
                <TablePagination gotoPage={gotoPage} rows={rows} setPageSize={setPageSize} pageSize={pageSize} pageIndex={pageIndex} />
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </Stack>
    </>
  );
}

TreasureMapTable.propTypes = {
  columns: PropTypes.array,
  data: PropTypes.array,
  getHeaderProps: PropTypes.func,
  handleAdd: PropTypes.func,
  renderRowSubComponent: PropTypes.any
};

// ==============================|| CUSTOMER - LIST ||============================== //

const CustomerCell = ({ row }) => {
  const { name } = row;

  return (
    <Stack direction="row" spacing={1.5} alignItems="center">
      <Stack spacing={0}>
        <Typography variant="subtitle1">{name}</Typography>
        <Typography variant="caption" color="textSecondary">
          {name}
        </Typography>
      </Stack>
    </Stack>
  );
};

CustomerCell.propTypes = {
  row: PropTypes.object
};

const ContactCell = ({ value }) => <PatternFormat displayType="text" format="+1 (###) ###-####" mask="_" defaultValue={value} />;

ContactCell.propTypes = {
  value: PropTypes.number
};

const StatusCell = ({ value }) => {
  switch (value) {
    case 'Relationship':
      return <Chip color="success" label="Solved" size="small" variant="light" />;
    case 'Single':
    default:
      return <Chip color="info" label="Pending" size="small" variant="light" />;
  }
};

StatusCell.propTypes = {
  value: PropTypes.string
};

const ActionsCell = (row, setCustomer, setCustomerDeleteId, handleClose, handleAdd, theme) => {
  const collapseIcon = <EyeTwoTone twoToneColor={theme.palette.secondary.main} />;
  const router = useRouter();
  const handleRedirect = () => {
    router.push({
      pathname: `/apps/games/details/${row.original?.mapId}`,
      query: { data: JSON.stringify(row.original) }
    });
  };

  return (
    <Stack direction="row" alignItems="center" justifyContent="center" spacing={0}>
      <Tooltip title="View">
        <IconButton
          color="secondary"
          onClick={(e) => {
            e.stopPropagation();
            handleRedirect(row.original.mapId);
          }}
        >
          {collapseIcon}
        </IconButton>
      </Tooltip>
      {/* <Tooltip title="Edit">
        <IconButton
          color="primary"
          onClick={(e) => {
            e.stopPropagation();
            setCustomer(row.values);
            handleAdd();
          }}
        >
          <EditTwoTone twoToneColor={theme.palette.primary.main} />
        </IconButton>
      </Tooltip>
      <Tooltip title="Delete">
        <IconButton
          color="error"
          onClick={(e) => {
            e.stopPropagation();
            handleClose();
            setCustomerDeleteId(row.values.fatherName);
          }}
        >
          <DeleteTwoTone twoToneColor={theme.palette.error.main} />
        </IconButton>
      </Tooltip> */}
    </Stack>
  );
};

ActionsCell.propTypes = {
  row: PropTypes.object,
  setCustomer: PropTypes.func,
  setCustomerDeleteId: PropTypes.func,
  handleClose: PropTypes.func,
  handleAdd: PropTypes.func,
  theme: PropTypes.array
};

// Section Cell and Header
const SelectionCell = ({ row }) => <IndeterminateCheckbox {...row.getToggleRowSelectedProps()} />;
const SelectionHeader = ({ getToggleAllPageRowsSelectedProps }) => (
  <IndeterminateCheckbox indeterminate {...getToggleAllPageRowsSelectedProps()} />
);

SelectionCell.propTypes = {
  row: PropTypes.object
};

SelectionHeader.propTypes = {
  getToggleAllPageRowsSelectedProps: PropTypes.func
};

const TreasureMapsPage = () => {
  const theme = useTheme();

  // const data = useMemo(() => makeData(5), []);
  const [maps, setMaps] = useState('');
  const [open, setOpen] = useState(false);
  const [customer, setCustomer] = useState(null);
  const [customerDeleteId, setCustomerDeleteId] = useState('');
  const [add, setAdd] = useState(false);

  const handleAdd = () => {
    setAdd(!add);
    if (customer && !add) setCustomer(null);
  };

  const handleMapCreated = () => {
    const fetch = async () => {
      const result = await fetchData();

      setMaps(result || []);

      // console.log('log from map CALLBACK: ');
    };
    fetch();
  };

  const fetchData = async () => {
    const response = await gamesApi.treasureHunt.getAllMaps({});
    // console.log('response: ', response, params);

    if (response?.code == 0) {
      const { data } = response;

      return data;
    }
  };

  useEffect(() => {
    const fetch = async () => {
      const result = await fetchData();

      setMaps(result || []);
    };
    fetch();
  }, []);

  const handleClose = () => {
    setOpen(!open);
  };

  const columns = useMemo(
    () => [
      {
        Header: 'Id',
        accessor: 'mapId',
        className: 'cell-center'
      },
      {
        Header: 'Name',
        accessor: 'name'
        // Cell: CustomerCell
      },
      {
        Header: 'rows (N)',
        accessor: 'rows',
        disableSortBy: true
      },
      {
        Header: 'columns (M)',
        accessor: 'columns'
      },
      {
        Header: 'Treasure Value (P)',
        accessor: 'treasureValue'
        // Cell: ContactCell
      },
      {
        Header: 'createdAt',
        accessor: 'createdAt',
        className: 'cell-right'
      },
      {
        Header: 'Status',
        accessor: 'cells',
        Cell: StatusCell
      },
      {
        Header: 'Actions',
        className: 'cell-center',
        disableSortBy: true,
        Cell: ({ row }) => ActionsCell(row, setCustomer, setCustomerDeleteId, handleClose, handleAdd, theme)
      }
    ],
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [theme]
  );

  const renderRowSubComponent = useCallback(
    ({ row }) => {
      // return <MapsView data={maps[Number(row.id)]} />;
      return <MapsView data={row.original} />;
    },
    [maps]
  );

  return (
    <Page title="Customer List">
      <MainCard content={false}>
        <ScrollX>
          {maps && (
            <TreasureMapTable
              columns={columns}
              data={maps}
              handleAdd={handleAdd}
              renderRowSubComponent={renderRowSubComponent}
              getHeaderProps={(column) => column.getSortByToggleProps()}
            />
          )}
        </ScrollX>
        <AlertCustomerDelete title={customerDeleteId} open={open} handleClose={handleClose} />
        {/* add customer dialog */}
        <Dialog
          maxWidth="sm"
          TransitionComponent={PopupTransition}
          keepMounted
          fullWidth
          onClose={handleAdd}
          open={add}
          sx={{ '& .MuiDialog-paper': { p: 0 }, transition: 'transform 225ms' }}
          aria-describedby="alert-dialog-slide-description"
        >
          {/* <AddCustomer customer={customer} onCancel={handleAdd} /> */}
          <AddMap callBack={handleMapCreated} onCancel={handleAdd} />
        </Dialog>
      </MainCard>
    </Page>
  );
};

TreasureMapsPage.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};

export default TreasureMapsPage;
