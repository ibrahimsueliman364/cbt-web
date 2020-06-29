import React, { Fragment } from 'react';
import { Menu, Image, Header, Dropdown } from 'semantic-ui-react';
import { useSelector, useDispatch } from 'react-redux';
import image from '../../user.jpg';
import { logout } from '../../store/actions/authActions';

const SignedInMenu = () => {
  const user = useSelector((state) => state.auth.loginData.user);
  const dispatch = useDispatch()

  return (
    <Menu.Item position='right'>
      <Image src={user.avatar || image} size='mini' circular/>
      <Dropdown pointing='top left' text={user.name}>
        <Dropdown.Menu>
          <Dropdown.Item 
          onClick={() =>{
            dispatch(logout)
          }}
          text='Sign Out'
           />
        </Dropdown.Menu>
      </Dropdown>
    </Menu.Item>
    // <Fragment>
    //   <Menu.Item position='right'>
    //     <Image src={user.avatar || image} size='mini' circular />
    //   </Menu.Item>
    //   <Menu.Item position='right'>
    //     <Header size='tiny'>{user.name}</Header>
    //   </Menu.Item>
    // </Fragment>
  );
};
export default SignedInMenu;
