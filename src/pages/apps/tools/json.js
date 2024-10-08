//next
import Image from 'next/legacy/image';
import { useRouter } from 'next/router';

// material-ui
import { useTheme } from '@mui/material/styles';
import {
  Autocomplete,
  Box,
  Button,
  Divider,
  FormControl,
  FormHelperText,
  Grid,
  InputLabel,
  MenuItem,
  Select,
  Stack,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  TextField,
  Typography
} from '@mui/material';
import { DatePicker, LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';

// third party
import * as yup from 'yup';
import { v4 as UIDV4 } from 'uuid';
import { format } from 'date-fns';
import { FieldArray, Form, Formik } from 'formik';

// project import
import Layout from 'layout';
import Page from 'components/Page';
import MainCard from 'components/MainCard';

import { useDispatch, useSelector } from 'store';
import {
  customerPopup,
  toggleCustomerPopup,
  selectCountry,
  getInvoiceInsert,
  reviewInvoicePopup,
  getInvoiceList
} from 'store/reducers/invoice';

// assets
import { EditOutlined, PlusOutlined } from '@ant-design/icons';

// ==============================|| INVOICE - CREATE ||============================== //

const Create = () => {
  const theme = useTheme();
  const dispatch = useDispatch();
  const { open, isCustomerOpen, countries, country, lists, isOpen } = useSelector((state) => state.invoice);
  const router = useRouter();
  const notesLimit = 500;

  return (
    <Page title="Invoice Create">
      <MainCard>
        <Formik
          initialValues={{}}
          onSubmit={(values) => {
            console.log(values);
          }}
        >
          {({ handleBlur, errors, handleChange, handleSubmit, values, isValid, setFieldValue, touched }) => {
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
                        onClick={() =>
                          dispatch(
                            reviewInvoicePopup({
                              isOpen: true
                            })
                          )
                        }
                      >
                        Preview
                      </Button>
                      <Button variant="outlined" color="secondary" sx={{ color: 'secondary.dark' }}>
                        Save
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
