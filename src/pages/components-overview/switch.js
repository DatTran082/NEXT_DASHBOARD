// material-ui
import { Switch, FormControl, FormControlLabel, FormGroup, Grid } from '@mui/material';

// project import
import Layout from 'layout';
import Page from 'components/Page';
import MainCard from 'components/MainCard';
import ComponentHeader from 'components/cards/ComponentHeader';
import ComponentWrapper from 'sections/components-overview/ComponentWrapper';
import ComponentSkeleton from 'sections/components-overview/ComponentSkeleton';
import CustomizedSwitches from 'sections/components-overview/switch/CustomizedSwitches';

// ==============================|| COMPONENTS - SWITCH ||============================== //

const ComponentSwitch = () => (
  <Page title="Switch">
    <ComponentSkeleton>
      <ComponentHeader
        title="Switch"
        caption="Switches toggle the state of a single setting on or off."
        directory="src/pages/components-overview/switch"
        link="https://mui.com/material-ui/react-switch/"
      />
      <ComponentWrapper>
        <Grid container spacing={3}>
          <Grid item xs={12} lg={6}>
            <MainCard title="Basic">
              <Grid container spacing={0.5}>
                <Grid item>
                  <Switch defaultChecked />
                </Grid>
                <Grid item>
                  <Switch />
                </Grid>
                <Grid item>
                  <Switch defaultChecked disabled />
                </Grid>
                <Grid item>
                  <Switch disabled />
                </Grid>
              </Grid>
            </MainCard>
          </Grid>
          <Grid item xs={12} lg={6}>
            <MainCard title="Color">
              <Grid container spacing={0.5}>
                <Grid item>
                  <Switch defaultChecked />
                </Grid>
                <Grid item>
                  <Switch defaultChecked color="secondary" />
                </Grid>
                <Grid item>
                  <Switch defaultChecked color="success" />
                </Grid>
                <Grid item>
                  <Switch defaultChecked color="warning" />
                </Grid>
                <Grid item>
                  <Switch defaultChecked color="info" />
                </Grid>
                <Grid item>
                  <Switch defaultChecked color="error" />
                </Grid>
              </Grid>
            </MainCard>
          </Grid>
          <Grid item xs={12} lg={6}>
            <MainCard title="Sizes">
              <Grid container spacing={0.5} alignItems="center">
                <Grid item>
                  <Switch defaultChecked size="small" />
                </Grid>
                <Grid item>
                  <Switch defaultChecked />
                </Grid>
                <Grid item>
                  <Switch defaultChecked size="large" />
                </Grid>
              </Grid>
            </MainCard>
          </Grid>
          <Grid item xs={12} lg={6}>
            <MainCard title="With Form Group">
              <FormControl component="fieldset">
                <FormGroup aria-label="position" row>
                  <FormControlLabel control={<Switch defaultChecked />} label="Primary" labelPlacement="end" />
                  <FormControlLabel control={<Switch defaultChecked disabled />} label="Disabled" />
                  <FormControlLabel control={<Switch defaultChecked color="secondary" />} label="Secondary" />
                </FormGroup>
              </FormControl>
            </MainCard>
          </Grid>
          <Grid item xs={12} lg={6}>
            <MainCard title="Label Placement">
              <FormControl component="fieldset">
                <FormGroup aria-label="position" row sx={{ justifyContent: 'space-between' }}>
                  <FormControlLabel value="top" control={<Switch color="primary" />} label="Top" labelPlacement="top" />
                  <FormControlLabel
                    value="start"
                    control={<Switch color="primary" />}
                    label="Start"
                    labelPlacement="start"
                    sx={{ mr: 1 }}
                  />
                  <FormControlLabel value="bottom" control={<Switch color="primary" />} label="Bottom" labelPlacement="bottom" />

                  <FormControlLabel value="end" control={<Switch color="primary" />} label="End" labelPlacement="end" sx={{ ml: 1 }} />
                </FormGroup>
              </FormControl>
            </MainCard>
          </Grid>
          <Grid item xs={12} lg={6}>
            <CustomizedSwitches />
          </Grid>
        </Grid>
      </ComponentWrapper>
    </ComponentSkeleton>
  </Page>
);

ComponentSwitch.getLayout = function getLayout(page) {
  return <Layout variant="component">{page}</Layout>;
};

export default ComponentSwitch;
