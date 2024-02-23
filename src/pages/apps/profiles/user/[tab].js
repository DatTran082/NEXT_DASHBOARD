import { useRef } from 'react';

// next
import { useRouter } from 'next/router';

// material-ui
import { Grid } from '@mui/material';

// project import
import Layout from 'layout';
import Page from 'components/Page';
import ProfileCard from 'sections/apps/profiles/user/ProfileCard';
import ProfileTabs from 'sections/apps/profiles/user/ProfileTabs';
import TabPersonal from 'sections/apps/profiles/user/TabPersonal';
import TabPayment from 'sections/apps/profiles/user/TabPayment';
import TabPassword from 'sections/apps/profiles/user/TabPassword';
import TabSettings from 'sections/apps/profiles/user/TabSettings';

// ==============================|| PROFILE - USER ||============================== //

const UserProfile = () => {
  const inputRef = useRef(null);

  const focusInput = () => {
    inputRef.current?.focus();
  };

  const router = useRouter();
  const { tab } = router.query;

  return (
    <Page title="User Profile">
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <ProfileCard focusInput={focusInput} />
        </Grid>
        <Grid item xs={12} md={3}>
          <ProfileTabs focusInput={focusInput} />
        </Grid>
        <Grid item xs={12} md={9}>
          {tab === 'personal' && <TabPersonal />}
          {tab === 'payment' && <TabPayment />}
          {tab === 'password' && <TabPassword />}
          {tab === 'settings' && <TabSettings />}
        </Grid>
      </Grid>
    </Page>
  );
};

UserProfile.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};

export default UserProfile;
