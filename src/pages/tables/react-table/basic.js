import { useMemo } from 'react';

// material-ui
import { Grid } from '@mui/material';

// project import
import Layout from 'layout';
import Page from 'components/Page';
import BasicTable from 'sections/tables/react-table/BasicTable';
import FooterTable from 'sections/tables/react-table/FooterTable';
import makeData from 'data/react-table';

// ==============================|| REACT TABLE - BASIC ||============================== //

const Basic = () => {
  const data = useMemo(() => makeData(20), []);

  return (
    <Page title="Basic Table">
      <Grid container spacing={3}>
        <Grid item xs={12} lg={6}>
          <BasicTable title="Basic Table" data={data.slice(0, 10)} />
        </Grid>
        <Grid item xs={12} lg={6}>
          <BasicTable title="Striped Table" data={data.slice(0, 10)} striped />
        </Grid>
        <Grid item xs={12}>
          <FooterTable data={data.slice(10, 19)} />
        </Grid>
      </Grid>
    </Page>
  );
};

Basic.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};

export default Basic;
