// material-ui
import { Button, Grid, Typography } from '@mui/material';

// project import
import Layout from 'layout';
import Page from 'components/Page';
import MainCard from 'components/MainCard';
import ComponentHeader from 'components/cards/ComponentHeader';

import ComponentWrapper from 'sections/components-overview/ComponentWrapper';
import ComponentSkeleton from 'sections/components-overview/ComponentSkeleton';
import {
  ColorVariants,
  CustomComponent,
  Dense,
  DismissSnackBar,
  HideDuration,
  IconVariants,
  MaxSnackbar,
  PositioningSnackbar,
  PreventDuplicate,
  SnackBarAction,
  TransitionBar
} from 'sections/components-overview/notistack';

import { dispatch } from 'store';
import { openSnackbar } from 'store/reducers/snackbar';

// ==============================|| COMPONENTS - SNACKBAR ||============================== //

const ComponentSnackbar = () => {
  return (
    <Page title="Snackbar">
      <ComponentSkeleton>
        <ComponentHeader
          title="Snackbar"
          caption="Snackbars provide brief notifications. The component is also known as a toast."
          directory="src/pages/components-overview/snackbar"
          link="https://mui.com/material-ui/react-snackbar/"
        />
        <ComponentWrapper>
          <Grid container spacing={3}>
            <Grid item xs={12} lg={6}>
              <MainCard title="Basic">
                <Grid container spacing={2}>
                  <Grid item>
                    <Button
                      variant="contained"
                      onClick={() =>
                        dispatch(
                          openSnackbar({
                            open: true,
                            message: 'This is default message',
                            variant: 'alert',
                            close: false
                          })
                        )
                      }
                    >
                      Default
                    </Button>
                  </Grid>
                  <Grid item>
                    <Button
                      variant="contained"
                      color="secondary"
                      onClick={() =>
                        dispatch(
                          openSnackbar({
                            open: true,
                            message: 'This is secondary message',
                            variant: 'alert',
                            alert: { color: 'secondary' },
                            close: false
                          })
                        )
                      }
                    >
                      Secondary
                    </Button>
                  </Grid>
                  <Grid item>
                    <Button
                      variant="contained"
                      color="success"
                      onClick={() =>
                        dispatch(
                          openSnackbar({
                            open: true,
                            message: 'This is success message',
                            variant: 'alert',
                            alert: {
                              color: 'success'
                            },
                            close: false
                          })
                        )
                      }
                    >
                      Success
                    </Button>
                  </Grid>
                  <Grid item>
                    <Button
                      variant="contained"
                      color="warning"
                      onClick={() =>
                        dispatch(
                          openSnackbar({
                            open: true,
                            message: 'This is warning message',
                            variant: 'alert',
                            alert: {
                              color: 'warning'
                            },
                            close: false
                          })
                        )
                      }
                    >
                      Warning
                    </Button>
                  </Grid>
                  <Grid item>
                    <Button
                      variant="contained"
                      color="info"
                      onClick={() =>
                        dispatch(
                          openSnackbar({
                            open: true,
                            message: 'This is info message',
                            variant: 'alert',
                            alert: {
                              color: 'info'
                            },
                            close: false
                          })
                        )
                      }
                    >
                      Info
                    </Button>
                  </Grid>
                  <Grid item>
                    <Button
                      variant="contained"
                      color="error"
                      onClick={() =>
                        dispatch(
                          openSnackbar({
                            open: true,
                            message: 'This is error message',
                            variant: 'alert',
                            alert: {
                              color: 'error'
                            },
                            close: false
                          })
                        )
                      }
                    >
                      Error
                    </Button>
                  </Grid>
                </Grid>
              </MainCard>
            </Grid>
            <Grid item xs={12} lg={6}>
              <MainCard title="Outlined">
                <Grid container spacing={2}>
                  <Grid item>
                    <Button
                      variant="outlined"
                      onClick={() =>
                        dispatch(
                          openSnackbar({
                            open: true,
                            message: 'This is default message',
                            variant: 'alert',
                            alert: {
                              variant: 'outlined'
                            },
                            close: false
                          })
                        )
                      }
                    >
                      Default
                    </Button>
                  </Grid>
                  <Grid item>
                    <Button
                      variant="outlined"
                      color="secondary"
                      onClick={() =>
                        dispatch(
                          openSnackbar({
                            open: true,
                            message: 'This is secondary message',
                            variant: 'alert',
                            alert: {
                              variant: 'outlined',
                              color: 'secondary'
                            },
                            close: false
                          })
                        )
                      }
                    >
                      Secondary
                    </Button>
                  </Grid>
                  <Grid item>
                    <Button
                      variant="outlined"
                      color="success"
                      onClick={() =>
                        dispatch(
                          openSnackbar({
                            open: true,
                            message: 'This is success message',
                            variant: 'alert',
                            alert: {
                              variant: 'outlined',
                              color: 'success'
                            },
                            close: false
                          })
                        )
                      }
                    >
                      Success
                    </Button>
                  </Grid>
                  <Grid item>
                    <Button
                      variant="outlined"
                      color="warning"
                      onClick={() =>
                        dispatch(
                          openSnackbar({
                            open: true,
                            message: 'This is warning message',
                            variant: 'alert',
                            alert: {
                              variant: 'outlined',
                              color: 'warning'
                            },
                            close: false
                          })
                        )
                      }
                    >
                      Warning
                    </Button>
                  </Grid>
                  <Grid item>
                    <Button
                      variant="outlined"
                      color="info"
                      onClick={() =>
                        dispatch(
                          openSnackbar({
                            open: true,
                            message: 'This is info message',
                            variant: 'alert',
                            alert: {
                              variant: 'outlined',
                              color: 'info'
                            },
                            close: false
                          })
                        )
                      }
                    >
                      Info
                    </Button>
                  </Grid>
                  <Grid item>
                    <Button
                      variant="outlined"
                      color="error"
                      onClick={() =>
                        dispatch(
                          openSnackbar({
                            open: true,
                            message: 'This is error message',
                            variant: 'alert',
                            alert: {
                              variant: 'outlined',
                              color: 'error'
                            },
                            close: false
                          })
                        )
                      }
                    >
                      Error
                    </Button>
                  </Grid>
                </Grid>
              </MainCard>
            </Grid>
            <Grid item xs={12} lg={6}>
              <MainCard title="With Close">
                <Grid container spacing={2}>
                  <Grid item>
                    <Button
                      variant="contained"
                      onClick={() =>
                        dispatch(
                          openSnackbar({
                            open: true,
                            message: 'This is default message',
                            variant: 'alert'
                          })
                        )
                      }
                    >
                      Default
                    </Button>
                  </Grid>
                  <Grid item>
                    <Button
                      variant="contained"
                      color="secondary"
                      onClick={() =>
                        dispatch(
                          openSnackbar({
                            open: true,
                            message: 'This is secondary message',
                            variant: 'alert',
                            alert: {
                              color: 'secondary'
                            }
                          })
                        )
                      }
                    >
                      Secondary
                    </Button>
                  </Grid>
                  <Grid item>
                    <Button
                      variant="contained"
                      color="success"
                      onClick={() =>
                        dispatch(
                          openSnackbar({
                            open: true,
                            message: 'This is success message',
                            variant: 'alert',
                            alert: {
                              color: 'success'
                            }
                          })
                        )
                      }
                    >
                      Success
                    </Button>
                  </Grid>
                  <Grid item>
                    <Button
                      variant="contained"
                      color="warning"
                      onClick={() =>
                        dispatch(
                          openSnackbar({
                            open: true,
                            message: 'This is warning message',
                            variant: 'alert',
                            alert: {
                              color: 'warning'
                            }
                          })
                        )
                      }
                    >
                      Warning
                    </Button>
                  </Grid>
                  <Grid item>
                    <Button
                      variant="contained"
                      color="info"
                      onClick={() =>
                        dispatch(
                          openSnackbar({
                            open: true,
                            message: 'This is info message',
                            variant: 'alert',
                            alert: {
                              color: 'info'
                            }
                          })
                        )
                      }
                    >
                      Info
                    </Button>
                  </Grid>
                  <Grid item>
                    <Button
                      variant="contained"
                      color="error"
                      onClick={() =>
                        dispatch(
                          openSnackbar({
                            open: true,
                            message: 'This is error message',
                            variant: 'alert',
                            alert: {
                              color: 'error'
                            }
                          })
                        )
                      }
                    >
                      Error
                    </Button>
                  </Grid>
                </Grid>
              </MainCard>
            </Grid>
            <Grid item xs={12} lg={6}>
              <MainCard title="With Close + Action">
                <Grid container spacing={2}>
                  <Grid item>
                    <Button
                      variant="outlined"
                      onClick={() =>
                        dispatch(
                          openSnackbar({
                            open: true,
                            message: 'This is default message',
                            variant: 'alert',
                            alert: {
                              variant: 'outlined'
                            },
                            actionButton: true
                          })
                        )
                      }
                    >
                      Default
                    </Button>
                  </Grid>
                  <Grid item>
                    <Button
                      variant="outlined"
                      color="secondary"
                      onClick={() =>
                        dispatch(
                          openSnackbar({
                            open: true,
                            message: 'This is secondary message',
                            variant: 'alert',
                            alert: {
                              variant: 'outlined',
                              color: 'secondary'
                            },
                            actionButton: true
                          })
                        )
                      }
                    >
                      Secondary
                    </Button>
                  </Grid>
                  <Grid item>
                    <Button
                      variant="outlined"
                      color="success"
                      onClick={() =>
                        dispatch(
                          openSnackbar({
                            open: true,
                            message: 'This is success message',
                            variant: 'alert',
                            alert: {
                              variant: 'outlined',
                              color: 'success'
                            },
                            actionButton: true
                          })
                        )
                      }
                    >
                      Success
                    </Button>
                  </Grid>
                  <Grid item>
                    <Button
                      variant="outlined"
                      color="warning"
                      onClick={() =>
                        dispatch(
                          openSnackbar({
                            open: true,
                            message: 'This is warning message',
                            variant: 'alert',
                            alert: {
                              variant: 'outlined',
                              color: 'warning'
                            },
                            actionButton: true
                          })
                        )
                      }
                    >
                      Warning
                    </Button>
                  </Grid>
                  <Grid item>
                    <Button
                      variant="outlined"
                      color="info"
                      onClick={() =>
                        dispatch(
                          openSnackbar({
                            open: true,
                            message: 'This is info message',
                            variant: 'alert',
                            alert: {
                              variant: 'outlined',
                              color: 'info'
                            },
                            actionButton: true
                          })
                        )
                      }
                    >
                      Info
                    </Button>
                  </Grid>
                  <Grid item>
                    <Button
                      variant="outlined"
                      color="error"
                      onClick={() =>
                        dispatch(
                          openSnackbar({
                            open: true,
                            message: 'This is error message',
                            variant: 'alert',
                            alert: {
                              variant: 'outlined',
                              color: 'error'
                            },
                            actionButton: true
                          })
                        )
                      }
                    >
                      Error
                    </Button>
                  </Grid>
                </Grid>
              </MainCard>
            </Grid>
            <Grid item xs={12} lg={6}>
              <MainCard title="Position">
                <Grid container spacing={2}>
                  <Grid item>
                    <Button
                      variant="contained"
                      onClick={() =>
                        dispatch(
                          openSnackbar({
                            open: true,
                            anchorOrigin: { vertical: 'top', horizontal: 'left' },
                            message: 'This is an top-left message!'
                          })
                        )
                      }
                    >
                      Top-Left
                    </Button>
                  </Grid>
                  <Grid item>
                    <Button
                      variant="contained"
                      onClick={() =>
                        dispatch(
                          openSnackbar({
                            open: true,
                            anchorOrigin: { vertical: 'top', horizontal: 'center' },
                            message: 'This is an top-center message!'
                          })
                        )
                      }
                    >
                      Top-Center
                    </Button>
                  </Grid>
                  <Grid item>
                    <Button
                      variant="contained"
                      onClick={() =>
                        dispatch(
                          openSnackbar({
                            open: true,
                            anchorOrigin: { vertical: 'top', horizontal: 'right' },
                            message: 'This is an top-right message!'
                          })
                        )
                      }
                    >
                      Top-Right
                    </Button>
                  </Grid>
                  <Grid item>
                    <Button
                      variant="contained"
                      onClick={() =>
                        dispatch(
                          openSnackbar({
                            open: true,
                            anchorOrigin: { vertical: 'bottom', horizontal: 'right' },
                            message: 'This is an bottom-right message!'
                          })
                        )
                      }
                    >
                      Bottom-Right
                    </Button>
                  </Grid>
                  <Grid item>
                    <Button
                      variant="contained"
                      onClick={() =>
                        dispatch(
                          openSnackbar({
                            open: true,
                            anchorOrigin: { vertical: 'bottom', horizontal: 'center' },
                            message: 'This is an bottom-center message!'
                          })
                        )
                      }
                    >
                      Bottom-Center
                    </Button>
                  </Grid>
                  <Grid item>
                    <Button
                      variant="contained"
                      onClick={() =>
                        dispatch(
                          openSnackbar({
                            open: true,
                            anchorOrigin: { vertical: 'bottom', horizontal: 'left' },
                            message: 'This is an bottom-left message!'
                          })
                        )
                      }
                    >
                      Bottom-Left
                    </Button>
                  </Grid>
                </Grid>
              </MainCard>
            </Grid>
            <Grid item xs={12} lg={6}>
              <MainCard title="Transitions">
                <Grid container spacing={2}>
                  <Grid item>
                    <Button
                      variant="contained"
                      onClick={() =>
                        dispatch(
                          openSnackbar({
                            open: true,
                            message: 'This is an fade message!',
                            transition: 'Fade'
                          })
                        )
                      }
                    >
                      Default/Fade
                    </Button>
                  </Grid>
                  <Grid item>
                    <Button
                      variant="contained"
                      onClick={() =>
                        dispatch(
                          openSnackbar({
                            open: true,
                            message: 'This is an slide-left message!',
                            transition: 'SlideLeft'
                          })
                        )
                      }
                    >
                      Slide Left
                    </Button>
                  </Grid>
                  <Grid item>
                    <Button
                      variant="contained"
                      onClick={() =>
                        dispatch(
                          openSnackbar({
                            open: true,
                            message: 'This is an slide-up message!',
                            transition: 'SlideUp'
                          })
                        )
                      }
                    >
                      Slide Up
                    </Button>
                  </Grid>
                  <Grid item>
                    <Button
                      variant="contained"
                      onClick={() =>
                        dispatch(
                          openSnackbar({
                            open: true,
                            message: 'This is an slide-right message!',
                            transition: 'SlideRight'
                          })
                        )
                      }
                    >
                      Slide Right
                    </Button>
                  </Grid>
                  <Grid item>
                    <Button
                      variant="contained"
                      onClick={() =>
                        dispatch(
                          openSnackbar({
                            open: true,
                            message: 'This is an slide-down message!',
                            transition: 'SlideDown'
                          })
                        )
                      }
                    >
                      Slide Down
                    </Button>
                  </Grid>
                  <Grid item>
                    <Button
                      variant="contained"
                      onClick={() =>
                        dispatch(
                          openSnackbar({
                            open: true,
                            message: 'This is an grow message!',
                            transition: 'Grow'
                          })
                        )
                      }
                    >
                      Grow
                    </Button>
                  </Grid>
                </Grid>
              </MainCard>
            </Grid>
            <Grid item xs={12}>
              <Typography variant="h5" sx={{ mt: 2 }}>
                Extended - Notistack
              </Typography>
            </Grid>
            <Grid item xs={12} lg={6}>
              <ColorVariants />
            </Grid>
            <Grid item xs={12} lg={6}>
              <MaxSnackbar />
            </Grid>
            <Grid item xs={12} lg={6}>
              <IconVariants />
            </Grid>
            <Grid item xs={12} lg={6}>
              <HideDuration />
            </Grid>
            <Grid item xs={12} lg={6}>
              <SnackBarAction />
            </Grid>
            <Grid item xs={12} lg={6}>
              <DismissSnackBar />
            </Grid>
            <Grid item xs={12} lg={6}>
              <PreventDuplicate />
            </Grid>
            <Grid item xs={12} lg={6}>
              <TransitionBar />
            </Grid>
            <Grid item xs={12} lg={6}>
              <Dense />
            </Grid>
            <Grid item xs={12} lg={6}>
              <CustomComponent />
            </Grid>
            <Grid item xs={12} lg={6}>
              <PositioningSnackbar />
            </Grid>
          </Grid>
        </ComponentWrapper>
      </ComponentSkeleton>
    </Page>
  );
};

ComponentSnackbar.getLayout = function getLayout(page) {
  return <Layout variant="component">{page}</Layout>;
};

export default ComponentSnackbar;
