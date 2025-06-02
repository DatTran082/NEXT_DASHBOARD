// import { useState } from 'react';
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
import { useFormik, FormikProvider, Form } from 'formik';
// import Matrix from 'sections/apps/games/Matrix';
import gamesApi from '../../../api/games-api';

const getInitialMatrix = (n, m) => Array.from({ length: n }, () => Array(m).fill(0));

const AddMap = ({ callBack, onCancel }) => {
  // const [dimensions, setDimensions] = useState({ n: 5, m: 5 });

  const formik = useFormik({
    initialValues: {
      name: 'test-map',
      n: 3,
      m: 3,
      p: 3,
      matrix: [
        [3, 2, 3],
        [3, 3, 3],
        [2, 2, 1]
      ]
    },
    validationSchema: Yup.object().shape({
      name: Yup.string().required('Name is required'),
      n: Yup.number().min(1, 'Min 1 row').max(200, 'Max 200 rows').required('Rows (n) required'),
      m: Yup.number().min(1, 'Min 1 column').max(500, 'Max 500 columns').required('Columns (m) required'),
      p: Yup.number()
        .min(1, 'P >= 1')
        .test('max-p', 'P <= n * m', function (value) {
          const { n, m } = this.parent;
          return value <= n * m;
        })
        .required('Max Level (p) required'),
      matrix: Yup.array().of(Yup.array().of(Yup.number()))
    }),
    onSubmit: (values, actions) => handleCreate(values, actions)
  });

  const { values, errors, touched, handleSubmit, setFieldValue, getFieldProps } = formik; //isSubmitting

  const handleCreate = async (values, actions) => {
    try {
      const request = {
        request_time: new Date().toISOString(),
        data: values
      };
      console.log('gamesApi.treasureHunt.createMap.request:', request);

      const response = await gamesApi.treasureHunt.createMap(request);

      if (response.code == 0) {
        callBack && callBack(values);
        actions.resetForm();
        onCancel && onCancel();
      } else {
        // console.log('Map:', response.data);
      }
    } catch (error) {
      console.error('Error creating map:', error);
      actions.setErrors({ submit: 'Failed to create map. Please try again.' });
    } finally {
      actions.setSubmitting(false);
    }
  };

  const handleDimensionChange = (field, value) => {
    const n = field === 'n' ? value : values.n;
    const m = field === 'm' ? value : values.m;
    setFieldValue(field, value);
    setFieldValue('matrix', getInitialMatrix(n, m));
  };

  const handleMatrixChange = (i, j, val) => {
    const newMatrix = values.matrix.map((row, rowIdx) =>
      rowIdx === i ? row.map((cell, colIdx) => (colIdx === j ? Number(val) : cell)) : row
    );
    setFieldValue('matrix', newMatrix);
  };

  // const handleRandomMatrix = () => {
  //   const n = values.n;
  //   const m = values.m;
  //   const p = values.p;
  //   const randomMatrix = Array.from({ length: n }, () => Array.from({ length: m }, () => Math.floor(Math.random() * (p + 1))));
  //   setFieldValue('matrix', randomMatrix);
  // };

  const handleRandomMatrix = () => {
    const n = values.n;
    const m = values.m;
    const p = values.p;

    let flat = [];
    for (let i = 1; i <= Math.min(p, n * m); i++) {
      flat.push(i);
    }
    while (flat.length < n * m) {
      flat.push(Math.floor(Math.random() * p) + 1);
    }
    for (let i = flat.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [flat[i], flat[j]] = [flat[j], flat[i]];
    }
    const randomMatrix = [];
    for (let i = 0; i < n; i++) {
      randomMatrix.push(flat.slice(i * m, (i + 1) * m));
    }
    setFieldValue('matrix', randomMatrix);
  };

  return (
    <FormikProvider value={formik}>
      <Form autoComplete="off" noValidate onSubmit={handleSubmit}>
        {/* <form noValidate onSubmit={handleSubmit}> */}
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
                  inputProps={{ min: 1, max: 200 }}
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
                  <Grid item xs={12} sx={{ mb: 1 }}>
                    <Button variant="outlined" onClick={handleRandomMatrix}>
                      Random Fill Matrix
                    </Button>
                  </Grid>
                  {Array.from({ length: values.n }).map((_, i) => (
                    <Grid item xs={12} key={i}>
                      <Stack direction="row" spacing={1}>
                        {Array.from({ length: values.m }).map((_, j) => (
                          <TextField
                            key={j}
                            type="number"
                            value={values.matrix[i]?.[j] ?? 0}
                            onChange={(e) => {
                              console.log(`Matrix change:`, values);
                              handleMatrixChange(i, j, e.target.value);
                            }}
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
            {/* <Grid item xs={12}>
              <Typography variant="subtitle1" sx={{ mb: 1 }}>
                Matrix 2d
              </Typography>
              <Box sx={{ overflowX: 'auto' }}>
                <Grid container spacing={1}>
                  <Matrix data={[]} map2d={values?.matrix} />
                </Grid>
              </Box>
            </Grid> */}
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
      </Form>
      {/* </form> */}
    </FormikProvider>
  );
};

AddMap.propTypes = {
  onSubmit: PropTypes.func,
  onCancel: PropTypes.func
};

export default AddMap;
