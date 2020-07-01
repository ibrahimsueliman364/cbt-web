import React, { useState, useEffect } from 'react';
import { Segment, Menu, Header, Form } from 'semantic-ui-react';
import { useDispatch, useSelector } from 'react-redux';
import { getQusetionData } from '../store/actions/questionActions';

const data = ['English', 'Mathematics', 'Biology', 'Physics', 'Chemistry'];

const SubjectSelection = () => {
  const [activeItem, setActiveItem] = useState('English');
  const questionData = useSelector((state) => state.questionsData);

  const yearOptions = questionData.years.map((item, index) => {
    return {
      key: index,
      value: item,
      text: item,
    };
  });
  const topicOptions = questionData.topicNames.map((item, index) => {
    return {
      key: index,
      value: item,
      text: item,
    };
  });

  const handleItemClick = (e, { name }) => setActiveItem(name);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getQusetionData(activeItem));
  }, [dispatch, activeItem]);

  // const formSubmit = (e) => {
  //   console.log(e);
  // };

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
          <Form
            onSubmit={(e) => {
              console.log(e);
            }}
          >
            <Form.Select
              label='Year'
              placeholder='Choose a Year'
              options={yearOptions}
            />

            <Form.Select
              label='Topic Name'
              placeholder='Choose a Topic'
              options={topicOptions}
            />
            <Form.Button>Proceed</Form.Button>
          </Form>
        </Segment>
      </div>
    </Segment>
  );
};

export default SubjectSelection;
