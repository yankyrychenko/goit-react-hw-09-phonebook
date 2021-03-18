import React, { useEffect, Suspense, lazy } from 'react';
import { Switch } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import AppBar from './components/AppBar/AppBar';
import Container from './components/Container';
import PrivateRoute from './components/PrivateRoute';
import PublicRoute from './components/PublicRoute';
import { authOperations } from './redux/auth';

const HomeView = lazy(() =>
  import('./views/HomeView.js' /* webpackChunkName: "home-view" */),
);
const LoginView = lazy(() =>
  import('./views/LoginView.js' /* webpackChunkName: "login-view" */),
);
const SignUpView = lazy(() =>
  import('./views/SignUpView.js' /* webpackChunkName: "signup-view" */),
);
const ContactsView = lazy(() =>
  import('./views/ContactsView.js' /* webpackChunkName: "contacts-view" */),
);

export default function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(authOperations.getCurrentUser());
  }, [dispatch]);

  return (
    <>
      <AppBar />

      <Suspense fallback={<p>Loading...</p>}>
        <Switch>
          <Container>
            <PublicRoute exact path="/">
              <HomeView />
            </PublicRoute>

            <PublicRoute path="/signup" restricted redirectTo="/contacts">
              <SignUpView />
            </PublicRoute>

            <PublicRoute path="/login" restricted redirectTo="/contacts">
              <LoginView />
            </PublicRoute>

            <PrivateRoute path="/contacts" redirectTo="/login">
              <ContactsView />
            </PrivateRoute>
          </Container>
        </Switch>
      </Suspense>
    </>
  );
}
