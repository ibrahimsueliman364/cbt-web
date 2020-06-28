import React, { Fragment } from 'react';
import { Menu, Button, Icon } from 'semantic-ui-react';
import { openModal } from '../../store/actions/modalActions';
import { useDispatch } from 'react-redux';

const NotSignedInMenu = () => {
  const dispatch = useDispatch();
  return (
    <Fragment>
      <Menu.Item
        onClick={() => {
          dispatch(openModal('LogInModal'));
        }}
        position='right'
      >
        <Button animated='fade'>
          <Button.Content visible>Sign In</Button.Content>
          <Button.Content hidden>
            <Icon name='sign-out' />
          </Button.Content>
        </Button>
      </Menu.Item>

      <Menu.Item
        onClick={() => {
          dispatch(openModal('RegisterationModal'));
        }}
      >
        <Button animated='fade'>
          <Button.Content visible>Sign Up</Button.Content>
          <Button.Content hidden>
            <Icon name='sign-out' />
          </Button.Content>
        </Button>
      </Menu.Item>
    </Fragment>
  );
};
export default NotSignedInMenu;
