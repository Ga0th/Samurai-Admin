import 'styles/globals.css';
import PropTypes from 'prop-types';
import React from 'react';
import theme from 'component/layout/theme';
import { ThemeProvider } from '@mui/material';
import { SnackbarProvider } from 'component/snackbar';
import { ModalProvider } from 'component/modal';
// import { RouteGuard } from 'utils/RouteGuard';
function MyApp({ Component, pageProps }) {
  const Layout = Component.Layout ? Component.Layout : React.Fragment;
  return (
    // <RouteGuard>
    <ThemeProvider theme={theme}>
      <ModalProvider>
        <SnackbarProvider>
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </SnackbarProvider>
      </ModalProvider>
    </ThemeProvider>
    // </RouteGuard>
  );
}

MyApp.propTypes = {
  Component: PropTypes.any.isRequired,
  pageProps: PropTypes.any.isRequired
};

export default MyApp;
