import React from 'react';
import { Menu, Image, Header } from 'semantic-ui-react';
import { useSelector } from 'react-redux';
import image from '../../user.jpg';

const SignedInMenu = () => {
  const user = useSelector((state) => state.auth.loginData.user);

  return (
    <Menu.Item position='right'>
      <Menu.Item>
        <Image src={user.avatar || image} size='mini' circular />
      </Menu.Item>
      <Menu.Item>
        <Header size='tiny'>{user.name}</Header>
      </Menu.Item>
    </Menu.Item>
  );
};
export default SignedInMenu;
