import PropTypes from 'prop-types';

// material-ui
// import { useTheme } from '@mui/material/styles';
import { Grid, Divider, Stack, TableCell, TableRow, Typography } from '@mui/material';

// third-party
// import { PatternFormat } from 'react-number-format';

// project import
import MainCard from 'components/MainCard';
import MapDetails from 'sections/apps/games/MapDetails';
// import Avatar from 'components/@extended/Avatar';
import Transitions from 'components/@extended/Transitions';

// assets
// import { EnvironmentOutlined, LinkOutlined, MailOutlined, PhoneOutlined } from '@ant-design/icons';
// import { useEffect, useState } from 'react';

// ==============================|| CUSTOMER - VIEW ||============================== //

// function buildMatrix(rows, columns, cells) {
//   const matrix = Array.from({ length: rows }, () => Array(columns).fill(0));
//   cells.forEach((cell) => {
//     matrix[cell.rowIndex][cell.colIndex] = cell.value;
//   });
//   return matrix;
// }

const MapsView = ({ data }) => {
  // const theme = useTheme();

  // const { name, rows, columns, treasureValue, createdAt, cells } = data;

  return (
    <TableRow sx={{ '&:hover': { bgcolor: `transparent !important` }, overflow: 'hidden' }}>
      <TableCell colSpan={8} sx={{ p: 2.5, overflow: 'hidden' }}>
        <Transitions type="slide" direction="down" in={true}>
          <Grid container spacing={2.5} sx={{ pl: { xs: 0, sm: 5, md: 6, lg: 10, xl: 12 } }}>
            <Grid item xs={12} sm={5} md={4} lg={4} xl={3}>
              <MainCard>
                <Grid container spacing={3}>
                  <Grid item xs={12}>
                    <Stack spacing={2.5} alignItems="center">
                      {/* <Avatar alt="Avatar 1" size="xl" src={`/assets/images/users/avatar-${data.avatar}.png`} /> */}
                      <Stack spacing={0.5} alignItems="center">
                        <Typography variant="h5">{data.name}</Typography>
                      </Stack>
                    </Stack>
                  </Grid>
                  <Grid item xs={12}>
                    <Divider />
                  </Grid>
                  <Grid item xs={12}>
                    <Stack direction="row" justifyContent="space-around" alignItems="center">
                      <Stack spacing={0.5} alignItems="center">
                        <Typography variant="h5">{data.rows}</Typography>
                        <Typography color="secondary">N</Typography>
                      </Stack>
                      <Divider orientation="vertical" flexItem />
                      <Stack spacing={0.5} alignItems="center">
                        <Typography variant="h5">{data.columns}</Typography>
                        <Typography color="secondary">M</Typography>
                      </Stack>
                      <Divider orientation="vertical" flexItem />
                      <Stack spacing={0.5} alignItems="center">
                        <Typography variant="h5">{data.treasureValue}</Typography>
                        <Typography color="secondary">P</Typography>
                      </Stack>
                    </Stack>
                  </Grid>
                </Grid>
              </MainCard>
            </Grid>
            <Grid item xs={12} sm={7} md={8} lg={8} xl={9}>
              <Stack spacing={2.5}>
                <MainCard title="Solution Details">{<MapDetails data={data} />}</MainCard>
              </Stack>
            </Grid>
          </Grid>
        </Transitions>
      </TableCell>
    </TableRow>
  );
};

MapsView.propTypes = {
  data: PropTypes.object
};

export default MapsView;
