import React from 'react';
import { Header, Icon } from 'semantic-ui-react';

const HeaderTitle = () => {
  return (
    <div className='header'>
      <Header textAlign='center' as='h3' icon>
        <Icon name='student' color='green' />
        <div className='big-title'>Welcome To JambSecret</div>
        <Header.Subheader></Header.Subheader>
      </Header>
    </div>
  );
};

export default HeaderTitle;
