import React, { useState } from 'react';
import { Segment, Grid } from 'semantic-ui-react';
import QuestionForm from './questionAddingForm';
import ChoicesForm from './ChoicesForm';

const Admin = () => {
  const [choices, setChoices] = useState(null);

  return (
    <Segment>
      <Grid columns={2}>
        <Grid.Row stretched>
          <Grid.Column>
            <QuestionForm choices={choices} />
          </Grid.Column>
          <Grid.Column>
            <ChoicesForm choiceFlag={choices} setChoices={setChoices} />
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </Segment>
  );
};
export default Admin;
