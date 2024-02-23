import PropTypes from 'prop-types';
import { lazy, Suspense } from 'react';
import { useDispatch, useSelector } from 'react-redux';

// material-ui
import { styled } from '@mui/material/styles';
import LinearProgress from '@mui/material/LinearProgress';
import { Container, Toolbar } from '@mui/material';

// project import
import ComponentLayout from './ComponentLayout';
import MainLayout from './MainLayout';
import AuthGuard from 'utils/route-guard/AuthGuard';
import GuestGuard from 'utils/route-guard/GuestGuard';

// project import - store
import { openComponentDrawer } from 'store/reducers/menu';

const Header = lazy(() => import('./Header'));
const FooterBlock = lazy(() => import('./FooterBlock'));

// ==============================|| Loader ||============================== //

const LoaderWrapper = styled('div')(({ theme }) => ({
  position: 'fixed',
  top: 0,
  left: 0,
  zIndex: 2001,
  width: '100%',
  '& > * + *': {
    marginTop: theme.spacing(2)
  }
}));

const Loader = () => (
  <LoaderWrapper>
    <LinearProgress color="primary" />
  </LoaderWrapper>
);

// ==============================|| LAYOUTS - STRUCTURE ||============================== //

export default function Layout({ variant = 'main', children }) {
  const dispatch = useDispatch();

  const menu = useSelector((state) => state.menu);
  const { componentDrawerOpen } = menu;

  const handleDrawerOpen = () => {
    dispatch(openComponentDrawer({ componentDrawerOpen: !componentDrawerOpen }));
  };

  if (variant === 'landing' || variant === 'simple') {
    return (
      <Suspense fallback={<Loader />}>
        <Header layout={variant} />
        {children}
        <FooterBlock isFull={variant === 'landing'} />
      </Suspense>
    );
  }

  if (variant === 'component') {
    return (
      <Suspense fallback={<Loader />}>
        <Container maxWidth="lg" sx={{ px: { xs: 0, sm: 2 } }}>
          <Header handleDrawerOpen={handleDrawerOpen} layout="component" />
          <Toolbar sx={{ my: 2 }} />
          <ComponentLayout handleDrawerOpen={handleDrawerOpen} componentDrawerOpen={componentDrawerOpen}>
            {children}
          </ComponentLayout>
        </Container>
      </Suspense>
    );
  }

  if (variant === 'blank') {
    return children;
  }

  if (variant === 'auth') {
    return <GuestGuard>{children}</GuestGuard>;
  }

  return (
    <AuthGuard>
      <MainLayout>{children}</MainLayout>
    </AuthGuard>
  );
}

Layout.propTypes = {
  variant: PropTypes.string,
  children: PropTypes.node
};
