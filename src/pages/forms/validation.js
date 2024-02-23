// material-ui
import { Grid, Stack } from '@mui/material';

// project imports
import Layout from 'layout';
import Page from 'components/Page';
import LoginForms from 'sections/forms/validation/LoginForms';
import InstantFeedback from 'sections/forms/validation/InstantFeedback';
import RadioGroupForms from 'sections/forms/validation/RadioGroupForms';
import CheckboxForms from 'sections/forms/validation/CheckboxForms';
import SelectForms from 'sections/forms/validation/SelectForms';
import AutoCompleteForm from 'sections/forms/validation/AutoCompleteForm';
import GoogleMapAutocomplete from 'sections/forms/validation/google-map-autocomplete';

// ==============================|| FORMS VALIDATION - FORMIK ||============================== //

const FormsValidation = () => (
  <Page title="Forms Validation">
    <Grid container spacing={2.5}>
      <Grid item xs={12} md={6}>
        <LoginForms />
      </Grid>
      <Grid item xs={12} md={6}>
        <InstantFeedback />
      </Grid>
      <Grid item xs={12} md={6}>
        <RadioGroupForms />
      </Grid>
      <Grid item xs={12} md={6}>
        <CheckboxForms />
      </Grid>
      <Grid item xs={12} md={6}>
        <Stack spacing={2.5}>
          <SelectForms />
          <AutoCompleteForm />
        </Stack>
      </Grid>
      <Grid item xs={12} md={6}>
        <GoogleMapAutocomplete />
      </Grid>
    </Grid>
  </Page>
);

FormsValidation.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};

export default FormsValidation;
