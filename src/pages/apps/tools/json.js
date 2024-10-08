import { Button, Grid, InputLabel, Stack, TextField } from '@mui/material';
// third party
import { Form, Formik } from 'formik';

// project import
import Layout from 'layout';
import Page from 'components/Page';
import MainCard from 'components/MainCard';

// assets

// ==============================|| INVOICE - CREATE ||============================== //

const Create = () => {
  // const theme = useTheme();

  const notesLimit = 500;

  return (
    <Page title="Json formater">
      <MainCard>
        <Formik
          initialValues={{}}
          onSubmit={(values) => {
            console.log(values);
          }}
        >
          {({ handleChange, handleSubmit, values, isValid }) => {
            return (
              <Form onSubmit={handleSubmit}>
                <Grid container spacing={2}>
                  <Grid item xs={12}>
                    <Stack spacing={1}>
                      <InputLabel>Raw</InputLabel>
                      <TextField
                        placeholder="raw"
                        rows={6}
                        value={values.raw}
                        multiline
                        name="raw"
                        onChange={handleChange}
                        // inputProps={{
                        //   maxLength: notesLimit
                        // }}
                        sx={{
                          width: '100%',
                          '& .MuiFormHelperText-root': {
                            mr: 0,
                            display: 'flex',
                            justifyContent: 'flex-end'
                          }
                        }}
                      />
                    </Stack>
                  </Grid>
                  <Grid item xs={12} sm={6}></Grid>
                  <Grid item xs={12} sm={6}>
                    <Stack direction="row" justifyContent="flex-end" alignItems="flex-end" spacing={2} sx={{ height: '100%' }}>
                      <Button
                        variant="outlined"
                        color="secondary"
                        disabled={values.status === '' || !isValid}
                        sx={{ color: 'secondary.dark' }}
                        // onClick={() =>
                        //   dispatch(
                        //     reviewInvoicePopup({
                        //       isOpen: true
                        //     })
                        //   )
                        // }
                      >
                        Preview
                      </Button>
                      <Button variant="outlined" color="secondary" sx={{ color: 'secondary.dark' }}>
                        Convert
                      </Button>
                      <Button color="primary" variant="contained" type="submit">
                        Create & Send
                      </Button>
                    </Stack>
                  </Grid>
                  <Grid item xs={12}>
                    <Stack spacing={1}>
                      <InputLabel>result</InputLabel>
                      <TextField
                        placeholder="result"
                        rows={6}
                        disabled
                        value={values?.raw?.replaceAll(/\\/g, '').replaceAll(/"{/g, '{').replaceAll(/}"/g, '}')}
                        multiline
                        name="result"
                        onChange={handleChange}
                        inputProps={{
                          maxLength: notesLimit
                        }}
                        sx={{
                          width: '100%',
                          '& .MuiFormHelperText-root': {
                            mr: 0,
                            display: 'flex',
                            justifyContent: 'flex-end'
                          }
                        }}
                      />
                    </Stack>
                  </Grid>
                </Grid>
              </Form>
            );
          }}
        </Formik>
      </MainCard>
    </Page>
  );
};

Create.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};

export default Create;
