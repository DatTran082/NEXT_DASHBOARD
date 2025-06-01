import { useEffect, useState } from 'react';

// next
import { useRouter } from 'next/router';
// import Image from 'next/legacy/image';

// material-ui
import { Box, Button, Grid, Stack, Typography } from '@mui/material';

// import MapsView from 'sections/apps/games/MapsView';
import MapDetails from 'sections/apps/games/MapDetails';
import MatrixGraph from 'sections/apps/games/Graph';

// project import
import Layout from 'layout';
import Page from 'components/Page';
import Loader from 'components/Loader';
import MainCard from 'components/MainCard';

import { useDispatch } from 'react-redux';
import { gamesApi } from '../../../../api';

const Create = () => {
  const dispatch = useDispatch();
  const router = useRouter();
  const { id, data } = router.query;
  const [initdata, setInitdata] = useState(JSON.parse(data));
  const [loading, setLoading] = useState(true);

  const fetchData = async (mapId) => {
    const request = {
      request_time: new Date().toISOString(),
      data: mapId
    };
    const response = await gamesApi.treasureHunt.solvingMaps(request);

    if (response?.code == 0) {
      const { data } = response;

      return data;
    }
  };

  useEffect(() => {
    // console.log('Fetching invoice details for ID:', initdata);

    dispatch(() => setLoading(false));
  }, [id]);

  const handleSolveMap = async () => {
    const solution = await fetchData(initdata.mapId);

    setInitdata((prevData) => ({
      ...prevData,
      solutions: solution
    }));

    console.log('Solving map with solution:', initdata);
  };

  const buildMatrix = (rows, columns, cells) => {
    const matrix = Array.from({ length: rows }, () => Array(columns).fill(0));
    cells.forEach((cell) => {
      matrix[cell.rowIndex][cell.colIndex] = cell.value;
    });
    return matrix;
  };

  if (loading) return <Loader />;

  return (
    <Page title="Treasure Hunt Map Details">
      {
        <MainCard>
          <Grid container spacing={2}>
            {initdata && (
              <Grid item xs={12} sm={6}>
                <MainCard sx={{ minHeight: 168 }}>
                  <Grid container spacing={2}>
                    <Grid item xs={12} sm={8}>
                      <Stack spacing={2}>
                        <Typography variant="h5">Input:</Typography>
                        <Stack sx={{ width: '100%' }}>
                          <Typography variant="secondary">Name: {initdata.name}</Typography>
                          <Typography color="secondary">Rows(n): {initdata.rows}</Typography>
                          <Typography color="secondary">Columns(m): {initdata.columns}</Typography>
                          <Typography color="secondary">TreasureValue(p): {initdata.treasureValue}</Typography>
                        </Stack>
                      </Stack>
                    </Grid>
                  </Grid>
                </MainCard>
              </Grid>
            )}

            <Grid item xs={12} sm={6}>
              <MainCard sx={{ minHeight: 168 }}>
                <Grid container spacing={2}>
                  <Grid item xs={12} sm={8}>
                    <Stack spacing={2}>
                      <Typography variant="h5">Output:</Typography>
                      <Stack sx={{ width: '100%' }}>
                        <Typography variant="secondary">Name: {initdata?.name}</Typography>
                        <Typography color="secondary">Fuel: {initdata?.solutions?.fuel}</Typography>
                        <Typography color="secondary">
                          Path:{' '}
                          {Array.isArray(initdata?.solutions?.path) &&
                            initdata.solutions.path
                              .map((p) => `[${Array.isArray(p) ? `${p[0]}, ${p[1]}` : `${p.rowIndex}, ${p.colIndex}`}]`)
                              .join(' => ')}
                        </Typography>

                        {/* <Typography color="secondary">Solutions: {0}</Typography> */}
                      </Stack>
                    </Stack>
                  </Grid>
                </Grid>
              </MainCard>
            </Grid>

            <Grid item xs={12}>
              <Typography variant="h5">Matrix</Typography>
            </Grid>
            <Grid item xs={12}>
              <MapDetails data={initdata} />
              {/* <Divider /> */}
            </Grid>

            <Grid item xs={12}>
              <Typography variant="h5">Graph</Typography>
            </Grid>

            <Grid item xs={12}>
              <Stack spacing={1}>
                <Box sx={{ mt: 2, mb: 2 }}>
                  <MatrixGraph matrix={buildMatrix(initdata?.rows, initdata?.columns, initdata?.cells)} />
                </Box>
              </Stack>
            </Grid>
          </Grid>
          <Grid item xs={12} sm={6} sx={{ display: 'flex', justifyContent: 'flex-end' }}>
            <Button onClick={handleSolveMap} variant="contained" color="primary" sx={{ mt: { xs: 2, sm: 0 } }}>
              Solve Map
            </Button>
          </Grid>
        </MainCard>
      }
    </Page>
  );
};

Create.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};

export default Create;
