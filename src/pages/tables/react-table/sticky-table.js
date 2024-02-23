import PropTypes from 'prop-types';
import { useMemo } from 'react';

// material-ui
import { Box, Chip, Grid } from '@mui/material';

// project import
import makeData from 'data/react-table';
import Avatar from 'components/@extended/Avatar';
import LinearWithLabel from 'components/@extended/progress/LinearWithLabel';
import StickyTable from 'sections/tables/react-table/StickyTable';
import Layout from 'layout';

// ==============================|| REACT TABLE - STICKY ||============================== //

const StatusCell = ({ value }) => {
  switch (value) {
    case 'Complicated':
      return <Chip color="error" label="Complicated" size="small" variant="light" />;
    case 'Relationship':
      return <Chip color="success" label="Relationship" size="small" variant="light" />;
    case 'Single':
    default:
      return <Chip color="info" label="Single" size="small" variant="light" />;
  }
};

StatusCell.propTypes = {
  value: PropTypes.string
};

const ProgressCell = ({ value }) => <LinearWithLabel value={value} sx={{ minWidth: 75 }} />;

ProgressCell.propTypes = {
  value: PropTypes.number
};

const CustomerCell = ({ value }) => <Avatar alt="Avatar 1" size="sm" src={`/assets/images/users/avatar-${!value ? 1 : value}.png`} />;

CustomerCell.propTypes = {
  value: PropTypes.number
};

const AddressCell = ({ value }) => <Box sx={{ minWidth: 200 }}>{value}</Box>;

AddressCell.propTypes = {
  value: PropTypes.string
};

const Sticky = () => {
  const data = useMemo(() => makeData(40), []);
  const columns = useMemo(
    () => [
      {
        Header: 'First Name',
        accessor: 'firstName'
      },
      {
        Header: 'Last Name',
        accessor: 'lastName'
      },
      {
        Header: 'Email',
        accessor: 'email'
      },
      {
        Header: 'Age',
        accessor: 'age',
        className: 'cell-right'
      },
      {
        Header: 'Role',
        accessor: 'role'
      },
      {
        Header: 'Visits',
        accessor: 'visits',
        className: 'cell-right'
      },
      {
        Header: 'Status',
        accessor: 'status',
        Cell: StatusCell
      },
      {
        Header: 'Profile Progress',
        accessor: 'progress',
        Cell: ProgressCell
      }
    ],
    []
  );

  const NewColumns = useMemo(
    () => [
      {
        Header: '#',
        Footer: '#',
        accessor: 'id',
        sticky: 'left',
        width: 80
      },
      {
        Header: 'Avatar',
        accessor: 'avatar',
        sticky: 'left',
        Cell: CustomerCell,
        width: 80
      },
      {
        Header: 'First Name',
        accessor: 'firstName',
        sticky: 'left',
        width: 120,
        defaultCanSort: true
      },
      {
        Header: 'Last Name',
        accessor: 'lastName',
        width: 120
      },
      {
        Header: 'Father Name',
        accessor: 'fatherName',
        width: 150
      },
      {
        Header: 'Email',
        accessor: 'email',
        width: 200
      },
      {
        Header: 'Age',
        accessor: 'age',
        className: 'cell-right'
      },
      {
        Header: 'Role',
        accessor: 'role',
        width: 120
      },
      {
        Header: 'Contact',
        accessor: 'contact'
      },
      {
        Header: 'Location',
        accessor: 'address',
        Cell: AddressCell,
        width: 200
      },
      {
        Header: 'Visits',
        accessor: 'visits',
        className: 'cell-right'
      },
      {
        Header: 'Status',
        accessor: 'status',
        Cell: StatusCell,
        width: 200
      },
      {
        Header: 'Profile Progress',
        accessor: 'progress',
        Cell: ProgressCell,
        width: 200
      }
    ],
    []
  );

  return (
    <Grid container spacing={3}>
      <Grid item xs={12}>
        <StickyTable title="Sticky Header" columns={columns} data={data.slice(0, 20)} />
      </Grid>
      <Grid item xs={12}>
        <StickyTable title="Sticky Column" columns={NewColumns} data={data.slice(0, 20)} />
      </Grid>
    </Grid>
  );
};

Sticky.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};

export default Sticky;
