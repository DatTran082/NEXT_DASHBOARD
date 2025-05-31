import { useState } from 'react';
import PropTypes from 'prop-types';
import {
  Box,
  Button,
  DialogActions,
  DialogContent,
  DialogTitle,
  Divider,
  Grid,
  InputLabel,
  Stack,
  TextField,
  Typography
} from '@mui/material';
import * as Yup from 'yup';
import { useFormik, FormikProvider } from 'formik';
import gamesApi from '../../../api/games-api';

const getInitialMatrix = (n, m) => Array.from({ length: n }, () => Array(m).fill(0));

const AddMap = ({ onSubmit, onCancel }) => {
  const [dimensions, setDimensions] = useState({ n: 5, m: 5 });

  const formik = useFormik({
    initialValues: {
      name: 'test-map',
      n: 3,
      m: 3,
      p: 9,
      matrix: [
        [1, 2, 4],
        [3, 5, 6],
        [7, 8, 9]
      ]
    },
    validationSchema: Yup.object().shape({
      name: Yup.string().required('Name is required'),
      n: Yup.number().min(1, 'Min 1 row').max(20, 'Max 20 rows').required('Rows (n) required'),
      m: Yup.number().min(1, 'Min 1 column').max(500, 'Max 500 columns').required('Columns (m) required'),
      p: Yup.number()
        .min(1, 'Min level is 1')
        .test('max-p', 'p <= n * m', function (value) {
          const { n, m } = this.parent;
          return value <= n * m;
        })
        .required('Max Level (p) required'),
      matrix: Yup.array().of(Yup.array().of(Yup.number()))
    }),
    // onSubmit: (values, { setSubmitting }) => {
    //   console.log('Form maps Values:', values);

    //   onSubmit && onSubmit(values);
    //   setSubmitting(false);
    // },
    onSubmit: (values, actions) => handleCreate(values, actions)
  });

  const { values, errors, touched, handleSubmit, setFieldValue, getFieldProps } = formik; //isSubmitting

  const handleCreate = async (values, actions) => {
    console.log('Creating new map with values:', values);
    try {
      const request = {
        request_time: new Date().toISOString(),
        data: values
      };

      const response = await gamesApi.treasureHunt.createMap(request);
      // const response = {
      //   data: [
      //     {
      //       mapId: 35,
      //       name: '20250531141210',
      //       rows: 3,
      //       columns: 3,
      //       maxLevel: 9,
      //       createdAt: '2025-05-31T14:12:10.960169+07:00',
      //       cells: [
      //         {
      //           cellId: 418,
      //           mapId: 35,
      //           rowIndex: 0,
      //           colIndex: 0,
      //           value: 1
      //         },
      //         {
      //           cellId: 419,
      //           mapId: 35,
      //           rowIndex: 0,
      //           colIndex: 1,
      //           value: 2
      //         },
      //         {
      //           cellId: 420,
      //           mapId: 35,
      //           rowIndex: 0,
      //           colIndex: 2,
      //           value: 4
      //         },
      //         {
      //           cellId: 421,
      //           mapId: 35,
      //           rowIndex: 1,
      //           colIndex: 0,
      //           value: 3
      //         },
      //         {
      //           cellId: 422,
      //           mapId: 35,
      //           rowIndex: 1,
      //           colIndex: 1,
      //           value: 5
      //         },
      //         {
      //           cellId: 423,
      //           mapId: 35,
      //           rowIndex: 1,
      //           colIndex: 2,
      //           value: 6
      //         },
      //         {
      //           cellId: 424,
      //           mapId: 35,
      //           rowIndex: 2,
      //           colIndex: 0,
      //           value: 7
      //         },
      //         {
      //           cellId: 425,
      //           mapId: 35,
      //           rowIndex: 2,
      //           colIndex: 1,
      //           value: 8
      //         },
      //         {
      //           cellId: 426,
      //           mapId: 35,
      //           rowIndex: 2,
      //           colIndex: 2,
      //           value: 9
      //         }
      //       ],
      //       solutions: []
      //     }
      //   ],
      //   code: 0,
      //   message: 'Map created successfully'
      // };
      if (response.code == 0) {
        console.log('actions', actions);

        onSubmit && onSubmit(values);
        actions.setSubmitting(false);
        actions.resetForm();
      } else {
        console.log('Map:', response.data);
      }
    } catch (error) {
      console.error('Error creating map:', error);
      actions.setErrors({ submit: 'Failed to create map. Please try again.' });
    } finally {
      // actions.setSubmitting(false);
    }
  };

  // Update matrix size when n or m changes
  const handleDimensionChange = (field, value) => {
    const n = field === 'n' ? value : values.n;
    const m = field === 'm' ? value : values.m;
    setFieldValue(field, value);
    setDimensions({ n, m });
    setFieldValue('matrix', getInitialMatrix(n, m));
  };

  // Handle matrix cell change
  const handleMatrixChange = (i, j, val) => {
    const newMatrix = values.matrix.map((row, rowIdx) =>
      rowIdx === i ? row.map((cell, colIdx) => (colIdx === j ? Number(val) : cell)) : row
    );
    setFieldValue('matrix', newMatrix);

    console.log(dimensions);
  };

  return (
    <FormikProvider value={formik}>
      {/* <Form autoComplete="off" noValidate onSubmit={handleSubmit}> */}
      <form noValidate onSubmit={handleSubmit}>
        <DialogTitle>New Map</DialogTitle>
        <Divider />
        <DialogContent sx={{ p: 2.5 }}>
          <Grid container spacing={3}>
            <Grid item xs={12}>
              <Stack spacing={1.25}>
                <InputLabel htmlFor="map-name">Name</InputLabel>
                <TextField
                  fullWidth
                  id="map-name"
                  placeholder="Enter Map Name"
                  {...getFieldProps('name')}
                  error={Boolean(touched.name && errors.name)}
                  helperText={touched.name && errors.name}
                />
              </Stack>
            </Grid>
            <Grid item xs={4}>
              <Stack spacing={1.25}>
                <InputLabel htmlFor="map-n">Rows (n)</InputLabel>
                <TextField
                  type="number"
                  id="map-n"
                  {...getFieldProps('n')}
                  onChange={(e) => handleDimensionChange('n', Number(e.target.value))}
                  inputProps={{ min: 1, max: 20 }}
                  error={Boolean(touched.n && errors.n)}
                  helperText={touched.n && errors.n}
                />
              </Stack>
            </Grid>
            <Grid item xs={4}>
              <Stack spacing={1.25}>
                <InputLabel htmlFor="map-m">Columns (m)</InputLabel>
                <TextField
                  type="number"
                  id="map-m"
                  {...getFieldProps('m')}
                  onChange={(e) => handleDimensionChange('m', Number(e.target.value))}
                  inputProps={{ min: 1, max: 500 }}
                  error={Boolean(touched.m && errors.m)}
                  helperText={touched.m && errors.m}
                />
              </Stack>
            </Grid>
            <Grid item xs={4}>
              <Stack spacing={1.25}>
                <InputLabel htmlFor="map-p">Max Level (p)</InputLabel>
                <TextField
                  type="number"
                  id="map-p"
                  {...getFieldProps('p')}
                  inputProps={{ min: 1, max: values.n * values.m }}
                  error={Boolean(touched.p && errors.p)}
                  helperText={touched.p && errors.p}
                />
              </Stack>
            </Grid>
            <Grid item xs={12}>
              <Typography variant="subtitle1" sx={{ mb: 1 }}>
                Matrix
              </Typography>
              <Box sx={{ overflowX: 'auto' }}>
                <Grid container spacing={1}>
                  {Array.from({ length: values.n }).map((_, i) => (
                    <Grid item xs={12} key={i}>
                      <Stack direction="row" spacing={1}>
                        {Array.from({ length: values.m }).map((_, j) => (
                          <TextField
                            key={j}
                            type="number"
                            value={values.matrix[i]?.[j] ?? 0}
                            onChange={(e) => handleMatrixChange(i, j, e.target.value)}
                            inputProps={{ min: 0, max: values.p }}
                            sx={{ width: 60 }}
                          />
                        ))}
                      </Stack>
                    </Grid>
                  ))}
                </Grid>
              </Box>
            </Grid>
          </Grid>
        </DialogContent>
        <Divider />
        <DialogActions sx={{ p: 2.5 }}>
          <Button color="error" onClick={onCancel}>
            Cancel
          </Button>
          <Button type="submit" variant="contained" disabled={Object.keys(formik.errors).length !== 0}>
            Add
          </Button>
        </DialogActions>
        {/* </Form> */}
      </form>
    </FormikProvider>
  );
};

AddMap.propTypes = {
  onSubmit: PropTypes.func,
  onCancel: PropTypes.func
};

export default AddMap;
