import React, { Fragment } from 'react';
import NavBar from '../components/navbar/NavBar';
import { Container } from 'semantic-ui-react';
import { Route, Switch } from 'react-router';
import HeaderTitle from '../components/HeaderTitle';
import Contents from '../components/Contents';
import Admin from '../components/Admin';
import ModalManager from './modals/ModalManager';

function MainRouter() {
  return (
    <Fragment>
      <ModalManager />
      <Container className='main'>
        <NavBar />
        <Switch>
          <Route path='/admin' component={Admin} />
          <Route path='/'>
            {' '}
            <HeaderTitle />
            <Contents />
          </Route>
        </Switch>
      </Container>
    </Fragment>
  );
}

export default MainRouter;
