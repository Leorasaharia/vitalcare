import React from 'react';
import ReactDOM from 'react-dom';
import { Auth0Provider } from '@auth0/auth0-react';
import { ChakraProvider } from '@chakra-ui/react';
import { ThemeEditorProvider } from '@hypertheme-editor/chakra-ui';
import { BrowserRouter as Router, Redirect, Route, Switch } from 'react-router-dom';
import 'assets/css/App.css';
import LandingPage from 'components/LandingPage'; // Ensure this path is correct
import AdminLayout from 'layouts/admin';
import AuthLayout from 'layouts/auth';
import RtlLayout from 'layouts/rtl';
import theme from 'theme/theme';

const onRedirectCallback = (appState) => {
	window.history.replaceState(
		{},
		document.title,
		appState?.returnTo || window.location.pathname
	);
};

ReactDOM.render(
  <Auth0Provider
    domain="dev-3obyqfbxw4070tpv.us.auth0.com"
    clientId="A4VRPEr1FwZGwn3Y0nXeJRBWI2S2Flmr"
    authorizationParams={{
      redirect_uri: window.location.origin,
    }}
    onRedirectCallback={onRedirectCallback}
  >
    <ChakraProvider theme={theme}>
      <React.StrictMode>
        <ThemeEditorProvider>
          <Router>
            <Switch>
              <Route path="/" exact component={LandingPage} />
              {/* <Route path="/auth" component={AuthLayout} /> */}
			  <Route path="/admin" component={AdminLayout} />
              <Route path="/rtl" component={RtlLayout} />
              <Redirect from="/" to="/admin" />
            </Switch>
          </Router>
        </ThemeEditorProvider>
      </React.StrictMode>
    </ChakraProvider>
  </Auth0Provider>,
  document.getElementById('root')
);
