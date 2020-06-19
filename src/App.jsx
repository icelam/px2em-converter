import React, {
  lazy,
  Suspense
} from 'react';
import { Route, Router, Switch } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import Providers from '@providers';
import { GlobalStyle } from '@styles';
import { Loading, Page } from '@components';
import routes from '@routes';

const Converter = lazy(() => import(/* webpackChunkName: 'Converter' */ '@containers/Converter'));

const browserHistory = createBrowserHistory();

// Execute when user navigates between routes
const onRouteChange = (history) => {
  history.listen(() => {
    window.scrollTo(0, 0);
  });
};

onRouteChange(browserHistory);

const App = () => (
  <Providers>
    <div id="app">
      <GlobalStyle />
      <Router history={browserHistory}>
        <Suspense fallback={<Loading />}>
          <Page id="page">
            <Switch>
              <Route exact path={routes.home} component={Converter} />
              <Route component={Converter} />
            </Switch>
          </Page>
        </Suspense>
      </Router>
    </div>
  </Providers>
);

export default App;
