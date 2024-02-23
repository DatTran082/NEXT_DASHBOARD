// material-ui
import { Grid, Stack } from '@mui/material';

// project import
import Layout from 'layout';
import Page from 'components/Page';
import ComponentHeader from 'components/cards/ComponentHeader';
import ComponentWrapper from 'sections/components-overview/ComponentWrapper';
import ComponentSkeleton from 'sections/components-overview/ComponentSkeleton';
import StaticDatePicker from 'sections/components-overview/date-time-picker/StaticDatePicker';
import SubComponentsPickers from 'sections/components-overview/date-time-picker/SubComponentsPickers';
import LandscapeDatePicker from 'sections/components-overview/date-time-picker/LandscapeDatePicker';
import BasicPickers from 'sections/components-overview/date-time-picker/BasicPickers';
import NativePickers from 'sections/components-overview/date-time-picker/NativePickers';
import LocalizedPicker from 'sections/components-overview/date-time-picker/LocalizedPicker';
import DateRangePicker from 'sections/components-overview/date-time-picker/DateRangePicker';
import CalendarsRangePicker from 'sections/components-overview/date-time-picker/CalendarsRangePicker';
import HelperText from 'sections/components-overview/date-time-picker/HelperText';
import DisabledPickers from 'sections/components-overview/date-time-picker/DisabledPickers';

// ===============================|| COMPONENT - DATE / TIME PICKER ||=============================== //

const ComponentDateTimePicker = () => (
  <Page title="Datetime Picker">
    <ComponentSkeleton>
      <ComponentHeader
        title="Date / Time Picker"
        caption="Date pickers let the user select a date."
        directory="src/pages/components-overview/date-time-picker"
        link="https://mui.com/x/react-date-pickers/getting-started/"
      />
      <ComponentWrapper>
        <Grid container spacing={3}>
          <Grid item xs={12} lg={6}>
            <Stack spacing={3}>
              <StaticDatePicker />
              <SubComponentsPickers />
              <LandscapeDatePicker />
            </Stack>
          </Grid>
          <Grid item xs={12} lg={6}>
            <Stack spacing={3}>
              <BasicPickers />
              <HelperText />
              <NativePickers />
              <LocalizedPicker />
              <DateRangePicker />
              <CalendarsRangePicker />
              <DisabledPickers />
            </Stack>
          </Grid>
        </Grid>
      </ComponentWrapper>
    </ComponentSkeleton>
  </Page>
);

ComponentDateTimePicker.getLayout = function getLayout(page) {
  return <Layout variant="component">{page}</Layout>;
};

export default ComponentDateTimePicker;
