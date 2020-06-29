import React, { useReducer } from 'react';
import {
  Grid,
  Segment,
  Divider,
  List,
  Checkbox,
  Button,
  Image,
  Input,
  Form,
} from 'semantic-ui-react';
import image from '../../src/user.jpg';
import { useSelector } from 'react-redux';

const data = [
  {
    id: 1,
    subjectName: 'English',
  },
  {
    id: 2,
    subjectName: 'Mathematics',
  },
  {
    id: 3,
    subjectName: 'Biology',
  },
  {
    id: 4,
    subjectName: 'Physics',
  },
  {
    id: 5,
    subjectName: 'Chemistry',
  },
];

const SubjectSelection = () => {
  const user = useSelector((user) => user.auth.loginData.user);
  return (
    <Segment>
      <Grid>
        <Grid.Row>
          <Grid.Column>
            <Segment.Group>
              <Segment textAlign='center' inverted color='green'>
                <h3>Practice for UTME</h3>
              </Segment>
              <Segment>
                <Divider horizontal>Select one or more Subjects</Divider>
                <List relaxed horizontal>
                  {data.map((item) => (
                    <List.Item key={item.id}>
                      <Checkbox label={item.subjectName}></Checkbox>
                    </List.Item>
                  ))}
                </List>
              </Segment>
            </Segment.Group>
          </Grid.Column>
        </Grid.Row>
      </Grid>

      <Grid columns={3}>
        <Grid.Row>
          <Grid.Column>
            <Segment></Segment>
          </Grid.Column>

          <Grid.Column>
            <Segment>
              <div>
                <Image
                  style={{ padding: 5 }}
                  src={image}
                  alt='img'
                  circular
                  size='small'
                  centered
                />
              </div>

              <div style={{ display: 'flex', justifyContent: 'center' }}>
                <Form>
                  <Form.Group>
                    <Form.Field
                      control='input'
                      label='Username (E.g Ahmad)'
                    ></Form.Field>
                  </Form.Group>
                </Form>
              </div>
              <div style={{ display: 'flex', justifyContent: 'center' }}>
                <Button color='red'>Start Exam</Button>
              </div>
            </Segment>
          </Grid.Column>

          <Grid.Column>
            <Segment textAlign='center'>
              <div>
                <Divider horizontal>Instructions</Divider>
              </div>
              <div>
                <Button color='teal'>Click to view Instructions</Button>
              </div>
            </Segment>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </Segment>
  );
};

export default SubjectSelection;
