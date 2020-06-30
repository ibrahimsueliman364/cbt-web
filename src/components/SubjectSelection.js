import React, { useReducer, useState } from 'react';
import { Grid, Segment, Menu, Header, Select } from 'semantic-ui-react';
import image from '../../src/user.jpg';
import { useSelector } from 'react-redux';

const data = ['English', 'Mathematics', 'Biology', 'Physics', 'Chemistry'];
const countryOptions = [
  { key: 'af', value: 'af', text: 'Afghanistan' },
  { key: 'ax', value: 'ax', text: 'Aland Islands' },
  { key: 'al', value: 'al', text: 'Albania' },
  { key: 'dz', value: 'dz', text: 'Algeria' },
  { key: 'as', value: 'as', text: 'American Samoa' },
  { key: 'ad', value: 'ad', text: 'Andorra' },
  { key: 'ao', value: 'ao', text: 'Angola' },
  { key: 'ai', value: 'ai', text: 'Anguilla' },
  { key: 'ag', value: 'ag', text: 'Antigua' },
  { key: 'ar', value: 'ar', text: 'Argentina' },
  { key: 'am', value: 'am', text: 'Armenia' },
  { key: 'aw', value: 'aw', text: 'Aruba' },
  { key: 'au', value: 'au', text: 'Australia' },
  { key: 'at', value: 'at', text: 'Austria' },
  { key: 'az', value: 'az', text: 'Azerbaijan' },
  { key: 'bs', value: 'bs', text: 'Bahamas' },
  { key: 'bh', value: 'bh', text: 'Bahrain' },
  { key: 'bd', value: 'bd', text: 'Bangladesh' },
  { key: 'bb', value: 'bb', text: 'Barbados' },
  { key: 'by', value: 'by', text: 'Belarus' },
  { key: 'be', value: 'be', text: 'Belgium' },
  { key: 'bz', value: 'bz', text: 'Belize' },
  { key: 'bj', value: 'bj', text: 'Benin' },
];
const SubjectSelection = () => {
  const [activeItem, setActiveItem] = useState('English');
  const handleItemClick = (e, { name }) => setActiveItem(name);
  return (
    <Segment>
      <Segment.Group>
        <Segment textAlign='center' inverted color='green'>
          <h3>Practice for UTME</h3>
        </Segment>
      </Segment.Group>

      <div>
        <Menu attached='top' tabular>
          {data.map((item, index) => (
            <Menu.Item
              key={index}
              name={item}
              active={activeItem === item}
              onClick={handleItemClick}
            />
          ))}
        </Menu>

        <Segment attached='bottom'>
          <Header as='h4'>Filter By</Header>
          <Header as='h4'>Year:</Header>
          <Select placeholder='Select your country' options={countryOptions} />
          <Header as='h4'>Topic Name:</Header>
          <Select placeholder='Select your country' options={countryOptions} />
        </Segment>
      </div>
    </Segment>
  );
};

export default SubjectSelection;
