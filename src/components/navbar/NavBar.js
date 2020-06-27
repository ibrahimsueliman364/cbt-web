import React, { useState } from 'react';
import { Menu } from 'semantic-ui-react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import SignedInMenu from './SignedInMenu';
import NotSignedInMenu from './NotSignedInMenu';

const Navbar = () => {
  const [activeItem, setActiveItem] = useState('home');
  const token = useSelector((state) => state.auth.loginData.token);

  return (
    <Menu pointing>
      <Menu.Item
        name='home'
        active={activeItem === 'home'}
        as={Link}
        to='/'
        onClick={() => setActiveItem('home')}
      />
      <Menu.Item
        name='Admin'
        active={activeItem === 'Admin'}
        as={Link}
        to='/admin'
        onClick={() => setActiveItem('Admin')}
      />

      {token ? <SignedInMenu /> : <NotSignedInMenu />}
    </Menu>
  );
};

export default Navbar;
