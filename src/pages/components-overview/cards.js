import NextLink from 'next/link';

// material-ui
import { useTheme } from '@mui/material/styles';
import { CardContent, CardMedia, Divider, Grid, Link, ToggleButton, ToggleButtonGroup, Typography } from '@mui/material';

// project import
import Layout from 'layout';
import Page from 'components/Page';
import MainCard from 'components/MainCard';
import IconButton from 'components/@extended/IconButton';
import ComponentHeader from 'components/cards/ComponentHeader';
import ComponentWrapper from 'sections/components-overview/ComponentWrapper';
import ComponentSkeleton from 'sections/components-overview/ComponentSkeleton';
import CardTabs from 'sections/components-overview/cards/CardTabs';

// assets
import { EditOutlined, EllipsisOutlined, MoreOutlined, SettingOutlined } from '@ant-design/icons';

const mediaImage = '/assets/images/component/card-media.png';

// ==============================|| COMPONENTS - CARD ||============================== //

const ComponentCard = () => {
  const theme = useTheme();

  const cardAction = (
    <ToggleButtonGroup
      fullWidth
      color="primary"
      exclusive
      aria-label="text alignment"
      size="small"
      sx={{
        p: 1,
        '& .MuiToggleButton-root': {
          borderRadius: 0,
          p: 0.75,
          '&:not(.Mui-selected)': {
            borderTopColor: 'transparent',
            borderBottomColor: 'transparent'
          },
          '&:first-of-type': {
            borderLeftColor: 'transparent'
          },
          '&:last-of-type': {
            borderRightColor: 'transparent'
          },
          '&:hover': {
            bgcolor: 'transparent',
            color: theme.palette.primary.main
          }
        }
      }}
    >
      <ToggleButton value="web" aria-label="web">
        <SettingOutlined />
      </ToggleButton>
      <ToggleButton value="android" aria-label="android">
        <EditOutlined />
      </ToggleButton>
      <ToggleButton value="ios" aria-label="ios">
        <EllipsisOutlined />
      </ToggleButton>
    </ToggleButtonGroup>
  );

  return (
    <Page title="Cards">
      <ComponentSkeleton>
        <ComponentHeader
          title="Card"
          caption="Cards contain content and actions about a single subject."
          directory="src/pages/components-overview/cards"
          link="https://mui.com/material-ui/react-card/"
        />
        <ComponentWrapper>
          <Grid container spacing={3}>
            <Grid item xs={12} lg={6}>
              <MainCard title="Basic">
                <Grid container spacing={3}>
                  <Grid item xs={12} md={6}>
                    <MainCard border={false} boxShadow shadow={theme.customShadows.z1} sx={{ height: '100%' }}>
                      <Typography variant="h6">Card Subtitle</Typography>
                      <Typography variant="caption" color="textSecondary">
                        This is card description
                      </Typography>
                    </MainCard>
                  </Grid>
                  <Grid item xs={12} md={6}>
                    <MainCard title="Card Title" border={false} boxShadow shadow={theme.customShadows.z1} sx={{ height: '100%' }}>
                      <Typography variant="h6">Card Subtitle</Typography>
                      <Typography variant="caption" color="textSecondary">
                        This is card description
                      </Typography>
                    </MainCard>
                  </Grid>
                </Grid>
              </MainCard>
            </Grid>
            <Grid item xs={12} lg={6}>
              <MainCard title="Outlined">
                <Grid container spacing={3}>
                  <Grid item xs={12} md={6}>
                    <MainCard sx={{ height: '100%' }}>
                      <Typography variant="h6">Card Subtitle</Typography>
                      <Typography variant="caption" color="textSecondary">
                        This is card description
                      </Typography>
                    </MainCard>
                  </Grid>
                  <Grid item xs={12} md={6}>
                    <MainCard title="Card Title" sx={{ height: '100%' }}>
                      <Typography variant="h6">Card Subtitle</Typography>
                      <Typography variant="caption" color="textSecondary">
                        This is card description
                      </Typography>
                    </MainCard>
                  </Grid>
                </Grid>
              </MainCard>
            </Grid>
            <Grid item xs={12} xl={6}>
              <MainCard title="Action">
                <Grid container spacing={3}>
                  <Grid item xs={12}>
                    <MainCard
                      title="Card Title"
                      secondary={
                        <NextLink href="/" passHref legacyBehavior>
                          <Link color="primary">More</Link>
                        </NextLink>
                      }
                    >
                      <Typography variant="h5" color="textSecondary" gutterBottom>
                        Card Subtitle
                      </Typography>
                      <Typography variant="body1">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque non libero dignissim.
                      </Typography>
                    </MainCard>
                  </Grid>
                  <Grid item xs={12} md={6}>
                    <MainCard
                      title="Card Title"
                      secondary={
                        <IconButton size="small" color="secondary">
                          <MoreOutlined style={{ fontSize: '1.15rem' }} />
                        </IconButton>
                      }
                    >
                      <Typography variant="h5" color="textSecondary" gutterBottom>
                        Card Subtitle
                      </Typography>
                      <Typography variant="body1">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque non libero dignissim, viverra augue eu, semper
                        ligula. Mauris purus sem.
                      </Typography>
                    </MainCard>
                  </Grid>
                  <Grid item xs={12} md={6}>
                    <MainCard
                      title="Card Title"
                      secondary={
                        <IconButton size="small" color="secondary">
                          <MoreOutlined style={{ fontSize: '1.15rem' }} />
                        </IconButton>
                      }
                      content={false}
                    >
                      <CardContent>
                        <Typography variant="h5" color="textSecondary" gutterBottom>
                          Card Subtitle
                        </Typography>
                        <Typography variant="body1">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</Typography>
                      </CardContent>
                      <Divider />
                      {cardAction}
                    </MainCard>
                  </Grid>
                </Grid>
              </MainCard>
            </Grid>
            <Grid item xs={12} xl={6}>
              <MainCard title="Media">
                <Grid container spacing={3}>
                  <Grid item xs={12} sm={6} lg={4}>
                    <MainCard content={false}>
                      <CardMedia component="img" image={mediaImage} alt="green iguana" />
                      <CardContent>
                        <Typography variant="h5" color="textSecondary" gutterBottom>
                          Card Subtitle
                        </Typography>
                        <Typography variant="body1">
                          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque non libero dignissim, viverra augue eu.
                        </Typography>
                      </CardContent>
                      <Divider />
                      {cardAction}
                    </MainCard>
                  </Grid>
                  <Grid item xs={12} sm={6} lg={4}>
                    <MainCard
                      title="Card Title"
                      secondary={
                        <IconButton size="small" color="secondary">
                          <MoreOutlined style={{ fontSize: '1.15rem' }} />
                        </IconButton>
                      }
                      content={false}
                    >
                      <CardMedia component="img" image={mediaImage} />
                      <CardContent>
                        <Typography variant="h5" color="textSecondary" gutterBottom>
                          Card Subtitle
                        </Typography>
                        <Typography variant="body1">
                          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque non libero dignissim, viverra augue eu,
                        </Typography>
                      </CardContent>
                    </MainCard>
                  </Grid>
                  <Grid item xs={12} sm={6} lg={4}>
                    <MainCard
                      title="Card Title"
                      secondary={
                        <IconButton size="small" color="secondary">
                          <MoreOutlined style={{ fontSize: '1.15rem' }} />
                        </IconButton>
                      }
                      content={false}
                    >
                      <CardMedia component="img" image={mediaImage} alt="green iguana" />
                      <CardContent>
                        <Typography variant="h5" color="textSecondary" gutterBottom>
                          Card Subtitle
                        </Typography>
                        <Typography variant="body1">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</Typography>
                      </CardContent>
                      <Divider />
                      {cardAction}
                    </MainCard>
                  </Grid>
                </Grid>
              </MainCard>
            </Grid>
            <Grid item xs={12} lg={6}>
              <MainCard title="Complex Interaction">
                <Grid container spacing={3}>
                  <Grid item xs={12}>
                    <MainCard content={false}>
                      <CardTabs />
                    </MainCard>
                  </Grid>
                  <Grid item xs={12}>
                    <MainCard
                      title="Card Title"
                      divider={false}
                      content={false}
                      secondary={
                        <NextLink href="/" passHref legacyBehavior>
                          <Link color="primary">More</Link>
                        </NextLink>
                      }
                    >
                      <CardTabs activeTab={2} />
                    </MainCard>
                  </Grid>
                </Grid>
              </MainCard>
            </Grid>
          </Grid>
        </ComponentWrapper>
      </ComponentSkeleton>
    </Page>
  );
};

ComponentCard.getLayout = function getLayout(page) {
  return <Layout variant="component">{page}</Layout>;
};

export default ComponentCard;
