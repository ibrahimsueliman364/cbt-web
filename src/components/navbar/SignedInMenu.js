import React, { useEffect, useState } from 'react';
import { Menu, Image, Dropdown } from 'semantic-ui-react';
import { useSelector, useDispatch } from 'react-redux';
import image from '../../user.jpg';
import { logout } from '../../store/actions/authActions';

const SignedInMenu = () => {
  const user = useSelector((state) => state.auth.loginData.user);
  const dispatch = useDispatch();

  const [avatar, setAvatar] = useState();

  useEffect(() => {
    const getProfilePic = async () => {
      try {
        const response = await fetch(
          `http://localhost:3001/users/${user._id}/avatar`,
          {
            method: 'GET',
            headers: {
              Accept: 'application/json',
              'Content-Type': 'image/png',
            },
          }
        );

        const resData = await response.blob();

        setAvatar(URL.createObjectURL(resData));
      } catch (error) {
        console.log(error);
      }
    };

    getProfilePic();
  }, [user._id]);

  return (
    <Menu.Item position='right'>
      <Image src={avatar || image} size='mini' circular />
      <Dropdown pointing='top left' text={user.name}>
        <Dropdown.Menu>
          <Dropdown.Item
            onClick={() => {
              dispatch(logout());
            }}
            text='Sign Out'
          />
        </Dropdown.Menu>
      </Dropdown>
    </Menu.Item>
  );
};

export default SignedInMenu;
