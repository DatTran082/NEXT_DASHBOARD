// material-ui
import { Container, Grid } from '@mui/material';

// project imports
import Layout from 'layout';
import Page from 'components/Page';
import ContactForm from 'sections/contact-us/ContactForm';
import ContactHeader from 'sections/contact-us/ContactHeader';

// ==============================|| CONTACT US - MAIN ||============================== //

const ContactUS = () => (
  <Page title="Contact Us">
    <Grid container spacing={12} justifyContent="center" alignItems="center" sx={{ mb: 12 }}>
      <Grid item xs={12}>
        <ContactHeader />
      </Grid>
      <Grid item xs={12} sm={10} lg={9}>
        <Container maxWidth="lg" sx={{ px: { xs: 0, sm: 2 } }}>
          <ContactForm />
        </Container>
      </Grid>
    </Grid>
  </Page>
);

ContactUS.getLayout = function getLayout(page) {
  return <Layout variant="simple">{page}</Layout>;
};

export default ContactUS;
