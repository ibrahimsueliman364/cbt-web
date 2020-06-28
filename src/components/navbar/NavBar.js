import React, { useState, useEffect } from 'react';
import { Menu } from 'semantic-ui-react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import SignedInMenu from './SignedInMenu';
import NotSignedInMenu from './NotSignedInMenu';
import { useHistory } from 'react-router-dom';

const Navbar = () => {
  const [activeItem, setActiveItem] = useState('home');
  const token = useSelector((state) => state.auth.loginData.token);
  let history = useHistory();

  useEffect(() => {
    const handleSignIn = () => {
      history.push('/subjects');
    };
    token && handleSignIn();
  }, [token, history]);

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
