import React from 'react';
import { Grid, Segment, Header, Icon } from 'semantic-ui-react';

const Contents = () => {
  return (
    <div className='seg'>
      <Segment placeholder color='green' inverted>
        <Grid textAlign='center'>
          <Grid.Row verticalAlign='middle'>
            <Grid.Column>
              <div>Over 13,000 UTME past questions Topic by Topic.</div>
              <div>
                Learn differently with JambSecret, practice until you can't get
                it wrong
              </div>
              <Header icon size='tiny'>
                <Icon name='tasks' color='grey' />
                Log In or Sign Up to Get Started Practicing
              </Header>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Segment>
    </div>
  );
};

export default Contents;
