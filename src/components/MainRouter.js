import React, { Fragment, useEffect } from 'react';
import NavBar from './navbar/NavBar';
import { Container } from 'semantic-ui-react';
import { Route, Switch } from 'react-router';
import HeaderTitle from './HeaderTitle';
import Contents from './Contents';
import Admin from './Admin';
import ModalManager from './modals/ModalManager';
import { useSelector, useDispatch } from 'react-redux';
import SubjectSelection from './SubjectSelection';
import { LOGIN } from '../store/actions/authActions';

function MainRouter() {
  const token = useSelector((state) => state.auth.loginData.token);
  const dispatch = useDispatch();

  useEffect(() => {
    const tryLogin = async () => {
      const userData = await localStorage.getItem('userData');

      if (!userData) {
        return;
      }
      const transformedData = JSON.parse(userData);

      const { token, user, expiryDate } = transformedData;
      const expirationDate = new Date(expiryDate);

      if (expirationDate <= new Date() || !token || !user) {
        return;
      }

      // const expirationTime = expirationDate.getTime() - new Date().getTime();

      dispatch({
        type: LOGIN,
        token: token,
        user: user,
      });
    };

    tryLogin();
  }, [dispatch]);
  return (
    <Fragment>
      <ModalManager />
      <Container className='main'>
        <NavBar />
        <Switch>
          {token && <Route path='/subjects' component={SubjectSelection} />}
          <Route path='/admin' component={Admin} />
          <Route path='/'>
            <HeaderTitle />
            <Contents />
          </Route>
        </Switch>
      </Container>
    </Fragment>
  );
}

export default MainRouter;
