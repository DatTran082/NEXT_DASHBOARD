import { useState } from 'react';

// next
import Image from 'next/legacy/image';

// material-ui
import { useTheme } from '@mui/material/styles';
import { AvatarGroup, Badge, Box, Divider, Grid, Stack, Tooltip, Typography } from '@mui/material';

// project import
import Layout from 'layout';
import Page from 'components/Page';
import MainCard from 'components/MainCard';
import ComponentHeader from 'components/cards/ComponentHeader';
import Avatar from 'components/@extended/Avatar';
import ComponentWrapper from 'sections/components-overview/ComponentWrapper';
import ComponentSkeleton from 'sections/components-overview/ComponentSkeleton';

// assets
import {
  CheckOutlined,
  DatabaseFilled,
  DeleteFilled,
  InfoCircleFilled,
  PlusOutlined,
  UserOutlined,
  WarningFilled,
  ZoomInOutlined,
  ZoomOutOutlined
} from '@ant-design/icons';

// ==============================|| COMPONENTS - AVATAR ||============================== //

const ComponentAvatar = () => {
  const theme = useTheme();

  const [open, setOpen] = useState(false);
  const [show, setShow] = useState(false);

  return (
    <Page title="Avatar">
      <ComponentSkeleton>
        <ComponentHeader
          title="Avatar"
          caption="Avatars are found throughout material design with uses in everything from tables to dialog menus."
          directory="src/pages/components-overview/avatars"
          link="https://mui.com/material-ui/react-avatar/"
        />
        <ComponentWrapper>
          <Grid container spacing={3}>
            <Grid item xs={12} lg={6}>
              <MainCard title="Basic">
                <Avatar alt="Basic">
                  <UserOutlined />
                </Avatar>
              </MainCard>
            </Grid>
            <Grid item xs={12} lg={6}>
              <MainCard title="Image">
                <Grid container spacing={1}>
                  <Grid item>
                    <Avatar alt="Avatar 1" src="/assets/images/users/avatar-1.png" />
                  </Grid>
                  <Grid item>
                    <Avatar alt="Avatar 2" src="/assets/images/users/avatar-2.png" />
                  </Grid>
                  <Grid item>
                    <Avatar alt="Avatar 3" src="/assets/images/users/avatar-3.png" />
                  </Grid>
                  <Grid item>
                    <Avatar alt="Avatar 4" src="/assets/images/users/avatar-4.png" />
                  </Grid>
                </Grid>
              </MainCard>
            </Grid>
            <Grid item xs={12} lg={6}>
              <MainCard title="Vector">
                <Grid container spacing={1}>
                  <Grid item>
                    <Avatar>
                      <Image src="/assets/images/users/vector-1.png" alt="Natacha" width={32} height={32} />
                    </Avatar>
                  </Grid>
                  <Grid item>
                    <Avatar color="error">
                      <Image alt="Natacha" src="/assets/images/users/vector-2.png" width={32} height={32} />
                    </Avatar>
                  </Grid>
                  <Grid item>
                    <Avatar color="warning">
                      <Image alt="Natacha" src="/assets/images/users/vector-3.png" width={32} height={32} />
                    </Avatar>
                  </Grid>
                  <Grid item>
                    <Avatar color="info">
                      <Image alt="Natacha" src="/assets/images/users/vector-4.png" width={32} height={32} />
                    </Avatar>
                  </Grid>
                </Grid>
              </MainCard>
            </Grid>
            <Grid item xs={12} lg={6}>
              <MainCard title="Letter">
                <Grid container spacing={1}>
                  <Grid item>
                    <Avatar alt="Natacha" size="sm">
                      U
                    </Avatar>
                  </Grid>
                  <Grid item>
                    <Avatar color="error" alt="Natacha" size="sm">
                      UI
                    </Avatar>
                  </Grid>
                  <Grid item>
                    <Avatar color="error" type="filled" alt="Natacha" size="sm">
                      A
                    </Avatar>
                  </Grid>
                </Grid>
              </MainCard>
            </Grid>
            <Grid item xs={12} lg={6}>
              <MainCard title="Variants">
                <Grid container spacing={1}>
                  <Grid item>
                    <Avatar alt="Natacha">
                      <UserOutlined />
                    </Avatar>
                  </Grid>
                  <Grid item>
                    <Avatar alt="Natacha" variant="rounded" type="combined">
                      <UserOutlined />
                    </Avatar>
                  </Grid>
                  <Grid item>
                    <Avatar alt="Natacha" variant="square" type="filled">
                      <UserOutlined />
                    </Avatar>
                  </Grid>
                  <Grid item>
                    <Avatar alt="Natacha">U</Avatar>
                  </Grid>
                  <Grid item>
                    <Avatar alt="Natacha" variant="rounded" type="combined">
                      U
                    </Avatar>
                  </Grid>
                  <Grid item>
                    <Avatar alt="Natacha" variant="square" type="filled">
                      U
                    </Avatar>
                  </Grid>
                </Grid>
              </MainCard>
            </Grid>
            <Grid item xs={12} lg={6}>
              <MainCard title="Outlined">
                <Grid container spacing={1}>
                  <Grid item>
                    <Avatar alt="Natacha" type="outlined">
                      <UserOutlined />
                    </Avatar>
                  </Grid>
                  <Grid item>
                    <Avatar alt="Natacha" variant="rounded" type="outlined">
                      <UserOutlined />
                    </Avatar>
                  </Grid>
                  <Grid item>
                    <Avatar alt="Natacha" variant="square" type="outlined">
                      <UserOutlined />
                    </Avatar>
                  </Grid>
                  <Grid item>
                    <Avatar alt="Natacha" type="outlined">
                      U
                    </Avatar>
                  </Grid>
                  <Grid item>
                    <Avatar alt="Natacha" variant="rounded" type="outlined">
                      U
                    </Avatar>
                  </Grid>
                  <Grid item>
                    <Avatar alt="Natacha" variant="square" type="outlined">
                      U
                    </Avatar>
                  </Grid>
                </Grid>
              </MainCard>
            </Grid>
            <Grid item xs={12} lg={6}>
              <MainCard title="Icon">
                <Grid container spacing={1}>
                  <Grid item>
                    <Avatar alt="Natacha" size="sm" type="filled">
                      <UserOutlined />
                    </Avatar>
                  </Grid>
                  <Grid item>
                    <Avatar alt="Natacha" size="sm" type="filled" color="success">
                      <ZoomInOutlined />
                    </Avatar>
                  </Grid>
                  <Grid item>
                    <Avatar alt="Natacha" size="sm" type="filled" color="error">
                      <ZoomOutOutlined />
                    </Avatar>
                  </Grid>
                  <Grid item>
                    <Avatar alt="Natacha" size="sm">
                      <PlusOutlined />
                    </Avatar>
                  </Grid>
                </Grid>
              </MainCard>
            </Grid>
            <Grid item xs={12} lg={6}>
              <MainCard title="With Badge">
                <Grid container spacing={1}>
                  <Grid item>
                    <Badge badgeContent={4} color="error" overlap="circular">
                      <Avatar alt="Natacha" type="filled" src="/assets/images/users/avatar-6.png" />
                    </Badge>
                  </Grid>
                  <Grid item>
                    <Badge color="error" overlap="circular" variant="dot">
                      <Avatar alt="Natacha" color="secondary" type="filled">
                        <UserOutlined />
                      </Avatar>
                    </Badge>
                  </Grid>
                  <Grid item>
                    <Badge color="error" overlap="circular" variant="dot">
                      <Avatar alt="Natacha" type="filled" src="/assets/images/users/avatar-2.png" />
                    </Badge>
                  </Grid>
                  <Grid item>
                    <Badge color="error" overlap="circular" variant="dot">
                      <Avatar alt="Natacha" type="outlined">
                        U
                      </Avatar>
                    </Badge>
                  </Grid>
                  <Grid item>
                    <Badge color="error" overlap="circular" variant="dot">
                      <Avatar>
                        <Image alt="Natacha" src="/assets/images/users/vector-2.png" width={40} height={40} />
                      </Avatar>
                    </Badge>
                  </Grid>
                  <Grid item>
                    <Badge color="success" variant="dot">
                      <Avatar alt="Natacha" variant="rounded" type="filled" src="/assets/images/users/avatar-1.png" />
                    </Badge>
                  </Grid>
                  <Grid item>
                    <Badge
                      overlap="circular"
                      anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
                      badgeContent={<Avatar size="badge" alt="Remy Sharp" src="/assets/images/users/avatar-6.png" />}
                    >
                      <Avatar alt="Travis Howard" src="/assets/images/users/avatar-1.png" />
                    </Badge>
                  </Grid>
                </Grid>
              </MainCard>
            </Grid>
            <Grid item xs={12} lg={6}>
              <MainCard title="Sizes">
                <Grid container spacing={1} alignItems="center">
                  <Grid item>
                    <Avatar size="xs" alt="Avatar 1" src="/assets/images/users/avatar-1.png" />
                  </Grid>
                  <Grid item>
                    <Avatar size="sm" alt="Avatar 2" src="/assets/images/users/avatar-2.png" />
                  </Grid>
                  <Grid item>
                    <Avatar size="md" alt="Avatar 3" src="/assets/images/users/avatar-3.png" />
                  </Grid>
                  <Grid item>
                    <Avatar size="lg" alt="Avatar 4" src="/assets/images/users/avatar-4.png" />
                  </Grid>
                  <Grid item>
                    <Avatar size="xl" alt="Avatar 5" src="/assets/images/users/avatar-5.png" />
                  </Grid>
                </Grid>
              </MainCard>
            </Grid>
            <Grid item xs={12} lg={6}>
              <MainCard title="Colors">
                <Grid container spacing={1}>
                  <Grid item>
                    <Avatar alt="Basic" type="filled">
                      <UserOutlined />
                    </Avatar>
                  </Grid>
                  <Grid item>
                    <Avatar alt="Basic" type="filled" color="secondary">
                      <DatabaseFilled />
                    </Avatar>
                  </Grid>
                  <Grid item>
                    <Avatar alt="Basic" type="filled" color="success">
                      <CheckOutlined />
                    </Avatar>
                  </Grid>
                  <Grid item>
                    <Avatar alt="Basic" type="filled" color="warning">
                      <WarningFilled />
                    </Avatar>
                  </Grid>
                  <Grid item>
                    <Avatar alt="Basic" type="filled" color="info">
                      <InfoCircleFilled />
                    </Avatar>
                  </Grid>
                  <Grid item>
                    <Avatar alt="Basic" type="filled" color="error">
                      <DeleteFilled />
                    </Avatar>
                  </Grid>
                </Grid>
              </MainCard>
            </Grid>
            <Grid item xs={12} lg={6}>
              <MainCard title="Fallbacks">
                <Grid container spacing={1}>
                  <Grid item>
                    <Avatar alt="Remy Sharp" src="/broken-image.jpg" color="error" type="filled">
                      B
                    </Avatar>
                  </Grid>
                  <Grid item>
                    <Avatar alt="Remy Sharp" src="/broken-image.jpg" color="error" type="outlined" />
                  </Grid>
                  <Grid item>
                    <Avatar src="/broken-image.jpg" color="error" />
                  </Grid>
                </Grid>
              </MainCard>
            </Grid>
            <Grid item xs={12} lg={6}>
              <MainCard title="Avatar Group">
                <Stack spacing={2}>
                  <Typography variant="subtitle1">Default</Typography>
                  <Box sx={{ width: 148 }}>
                    <AvatarGroup max={4}>
                      <Avatar alt="Trevor Henderson" src={`/assets/images/users/avatar-5.png`} />
                      <Avatar alt="Jone Doe" src={`/assets/images/users/avatar-6.png`} />
                      <Avatar alt="Lein Ket" src={`/assets/images/users/avatar-7.png`} />
                      <Avatar alt="Stebin Ben" src={`/assets/images/users/avatar-8.png`} />
                      <Avatar alt="Wungh Tend" src={`/assets/images/users/avatar-9.png`} />
                      <Avatar alt="Trevor Das" src={`/assets/images/users/avatar-10.png`} />
                    </AvatarGroup>
                  </Box>
                  <Divider sx={{ my: 2 }} />
                  <Typography variant="subtitle1">On Hover</Typography>
                  <Box sx={{ width: 186 }}>
                    <Tooltip
                      open={show}
                      placement="top-end"
                      title={
                        <AvatarGroup max={10}>
                          <Avatar alt="Trevor Henderson" src={`/assets/images/users/avatar-5.png`} />
                          <Avatar alt="Jone Doe" src={`/assets/images/users/avatar-6.png`} />
                          <Avatar alt="Lein Ket" src={`/assets/images/users/avatar-7.png`} />
                          <Avatar alt="Stebin Ben" src={`/assets/images/users/avatar-8.png`} />
                          <Avatar alt="Wungh Tend" src={`/assets/images/users/avatar-9.png`} />
                          <Avatar alt="Trevor Das" src={`/assets/images/users/avatar-10.png`} />
                        </AvatarGroup>
                      }
                    >
                      <AvatarGroup
                        sx={{ '& .MuiAvatarGroup-avatar': { bgcolor: theme.palette.primary.main, cursor: 'pointer' } }}
                        componentsProps={{
                          additionalAvatar: {
                            onMouseEnter: () => {
                              setShow(true);
                            },
                            onMouseLeave: () => {
                              setShow(false);
                            }
                          }
                        }}
                      >
                        <Avatar alt="Remy Sharp" src={`/assets/images/users/avatar-1.png`} />
                        <Avatar alt="Travis Howard" src={`/assets/images/users/avatar-2.png`} />
                        <Avatar alt="Cindy Baker" src={`/assets/images/users/avatar-3.png`} />
                        <Avatar alt="Agnes Walker" src={`/assets/images/users/avatar-4.png`} />
                        <Avatar alt="Trevor Henderson" src={`/assets/images/users/avatar-5.png`} />
                        <Avatar alt="Jone Doe" src={`/assets/images/users/avatar-6.png`} />
                        <Avatar alt="Lein Ket" src={`/assets/images/users/avatar-7.png`} />
                        <Avatar alt="Stebin Ben" src={`/assets/images/users/avatar-8.png`} />
                        <Avatar alt="Wungh Tend" src={`/assets/images/users/avatar-9.png`} />
                        <Avatar alt="Trevor Das" src={`/assets/images/users/avatar-10.png`} />
                      </AvatarGroup>
                    </Tooltip>
                  </Box>
                </Stack>
                <Divider sx={{ my: 2 }} />
                <Stack spacing={2}>
                  <Typography variant="subtitle1">On Click</Typography>
                  <Box sx={{ width: 222 }}>
                    <Tooltip
                      open={open}
                      placement="top-end"
                      title={
                        <AvatarGroup max={10}>
                          <Avatar alt="Jone Doe" src={`/assets/images/users/avatar-6.png`} />
                          <Avatar alt="Lein Ket" src={`/assets/images/users/avatar-7.png`} />
                          <Avatar alt="Stebin Ben" src={`/assets/images/users/avatar-8.png`} />
                          <Avatar alt="Wungh Tend" src={`/assets/images/users/avatar-9.png`} />
                          <Avatar alt="Trevor Das" src={`/assets/images/users/avatar-10.png`} />
                        </AvatarGroup>
                      }
                    >
                      <AvatarGroup
                        max={6}
                        sx={{ '& .MuiAvatarGroup-avatar': { bgcolor: theme.palette.primary.main, cursor: 'pointer' } }}
                        componentsProps={{
                          additionalAvatar: {
                            onClick: () => {
                              setOpen(!open);
                            }
                          }
                        }}
                      >
                        <Avatar alt="Remy Sharp" src={`/assets/images/users/avatar-1.png`} />
                        <Avatar alt="Travis Howard" src={`/assets/images/users/avatar-2.png`} />
                        <Avatar alt="Cindy Baker" src={`/assets/images/users/avatar-3.png`} />
                        <Avatar alt="Agnes Walker" src={`/assets/images/users/avatar-4.png`} />
                        <Avatar alt="Trevor Henderson" src={`/assets/images/users/avatar-5.png`} />
                        <Avatar alt="Jone Doe" src={`/assets/images/users/avatar-6.png`} />
                        <Avatar alt="Lein Ket" src={`/assets/images/users/avatar-7.png`} />
                        <Avatar alt="Stebin Ben" src={`/assets/images/users/avatar-8.png`} />
                        <Avatar alt="Wungh Tend" src={`/assets/images/users/avatar-9.png`} />
                        <Avatar alt="Trevor Das" src={`/assets/images/users/avatar-10.png`} />
                      </AvatarGroup>
                    </Tooltip>
                  </Box>
                </Stack>
              </MainCard>
            </Grid>
          </Grid>
        </ComponentWrapper>
      </ComponentSkeleton>
    </Page>
  );
};

ComponentAvatar.getLayout = function getLayout(page) {
  return <Layout variant="component">{page}</Layout>;
};

export default ComponentAvatar;
