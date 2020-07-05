import React, { useState, useEffect } from 'react';
import { Segment, Menu, Header, Button } from 'semantic-ui-react';
import { useDispatch, useSelector } from 'react-redux';
import { getQusetionData } from '../store/actions/questionActions';

const data = ['English', 'Mathematics', 'Biology', 'Physics', 'Chemistry'];

const SubjectSelection = () => {
  const [activeItem, setActiveItem] = useState('English');
  const questionData = useSelector((state) => state.questionsData);

  const handleItemClick = (e, { name }) => setActiveItem(name);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getQusetionData(activeItem));
  }, [dispatch, activeItem]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const year = document.getElementById('year').value;
    const topicName = document.getElementById('tname').value;
    console.log(year, topicName);
  };

  return (
    <Segment>
      <Segment textAlign='center' inverted color='green'>
        <h3>Practice for UTME</h3>
      </Segment>

      <div className='ui horizontal  divider'>Select subjects</div>


      {/* <div>
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

          <form className='ui form'>
            <select className='select1' name='Year' id='year'>
              {questionData.years.map((item, index) => {
                return (
                  <option key={index} value={item}>
                    {item}
                  </option>
                );
              })}
            </select>

            <select className='select2' name='Topic Name' id='tname'>
              {questionData.topicNames.map((item, index) => {
                return (
                  <option key={index} value={item}>
                    {item}
                  </option>
                );
              })}
            </select>
            <Button onClick={handleSubmit}>Proceed</Button>
          </form>
        </Segment>
      </div> */}
    </Segment>
  );
};

export default SubjectSelection;
