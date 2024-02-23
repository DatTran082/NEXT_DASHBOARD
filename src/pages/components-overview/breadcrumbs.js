// material-ui
import { useTheme } from '@mui/material/styles';
import Grid from '@mui/material/Grid';

// project import
import Layout from 'layout';
import Page from 'components/Page';
import MainCard from 'components/MainCard';
import ComponentHeader from 'components/cards/ComponentHeader';
import Breadcrumb from 'components/@extended/Breadcrumbs';

import { ThemeMode } from 'config';
import navigation from 'menu-items';
import ComponentWrapper from 'sections/components-overview/ComponentWrapper';
import ComponentSkeleton from 'sections/components-overview/ComponentSkeleton';

// assets
import { RightOutlined } from '@ant-design/icons';

// ==============================|| COMPONENTS - BREADCRUMBS ||============================== //

const ComponentBreadcrumb = () => {
  const theme = useTheme();

  return (
    <Page title="Breadcrumbs">
      <ComponentSkeleton>
        <ComponentHeader
          title="Breadcrumbs"
          caption="Breadcrumbs allow users to make selections from a range of values."
          directory="src/pages/components-overview/breadcrumbs"
          link="https://mui.com/material-ui/react-breadcrumbs/"
        />
        <ComponentWrapper>
          <Grid container spacing={3}>
            <Grid item xs={12} lg={6}>
              <MainCard title="Basic">
                <Breadcrumb
                  navigation={navigation}
                  sx={{
                    mb: '0px !important',
                    bgcolor: theme.palette.mode === ThemeMode.DARK ? 'dark.main' : 'grey.50'
                  }}
                />
              </MainCard>
            </Grid>
            <Grid item xs={12} lg={6}>
              <MainCard title="Custom Separator">
                <Breadcrumb
                  navigation={navigation}
                  separator={RightOutlined}
                  sx={{
                    mb: '0px !important',
                    bgcolor: theme.palette.mode === ThemeMode.DARK ? 'dark.main' : 'grey.50'
                  }}
                />
              </MainCard>
            </Grid>
            <Grid item xs={12} md={6}>
              <MainCard title="With Title">
                <Breadcrumb
                  title
                  navigation={navigation}
                  separator={RightOutlined}
                  sx={{
                    mb: '0px !important',
                    bgcolor: theme.palette.mode === ThemeMode.DARK ? 'dark.main' : 'grey.50'
                  }}
                />
              </MainCard>
            </Grid>
            <Grid item xs={12} md={6}>
              <MainCard title="Title Bottom">
                <Breadcrumb
                  title
                  titleBottom
                  navigation={navigation}
                  separator={RightOutlined}
                  sx={{
                    mb: '0px !important',
                    bgcolor: theme.palette.mode === ThemeMode.DARK ? 'dark.main' : 'grey.50'
                  }}
                />
              </MainCard>
            </Grid>
            <Grid item xs={12} md={6}>
              <MainCard title="With Icons">
                <Breadcrumb
                  title
                  icons
                  navigation={navigation}
                  separator={RightOutlined}
                  sx={{
                    mb: '0px !important',
                    bgcolor: theme.palette.mode === ThemeMode.DARK ? 'dark.main' : 'grey.50'
                  }}
                />
              </MainCard>
            </Grid>
            <Grid item xs={12} md={6}>
              <MainCard title="Only Dashboard Icons">
                <Breadcrumb
                  title
                  icon
                  navigation={navigation}
                  separator={RightOutlined}
                  sx={{
                    mb: '0px !important',
                    bgcolor: theme.palette.mode === ThemeMode.DARK ? 'dark.main' : 'grey.50'
                  }}
                />
              </MainCard>
            </Grid>
            <Grid item xs={12} md={6}>
              <MainCard title="Collapsed Breadcrumbs">
                <Breadcrumb
                  title
                  maxItems={2}
                  navigation={navigation}
                  separator={RightOutlined}
                  sx={{
                    mb: '0px !important',
                    bgcolor: theme.palette.mode === ThemeMode.DARK ? 'dark.main' : 'grey.50'
                  }}
                />
              </MainCard>
            </Grid>
            <Grid item xs={12} md={6}>
              <MainCard title="No Card with Divider">
                <Breadcrumb title navigation={navigation} separator={RightOutlined} card={false} sx={{ mb: '0px !important' }} />
              </MainCard>
            </Grid>
            <Grid item xs={12} md={6}>
              <MainCard title="No Card & No Divider">
                <Breadcrumb
                  title
                  navigation={navigation}
                  separator={RightOutlined}
                  card={false}
                  divider={false}
                  sx={{ mb: '0px !important' }}
                />
              </MainCard>
            </Grid>
          </Grid>
        </ComponentWrapper>
      </ComponentSkeleton>
    </Page>
  );
};

ComponentBreadcrumb.getLayout = function getLayout(page) {
  return <Layout variant="component">{page}</Layout>;
};

export default ComponentBreadcrumb;
