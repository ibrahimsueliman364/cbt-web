export const SETQUESTIONDATA = 'SETQUESTIONDATA';

export const getQusetionData = (activeItem) => {
  return async (dispatch) => {
    try {
      const response = await fetch(
        `http://localhost:3001/questions?subjectName=${activeItem}`,
        {
          method: 'GET',
          headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
          },
        }
      );

      const resData = await response.json();

      // unsorted arrays

      const topicNames = [];
      const years = [];

      for (const item of resData) {
        topicNames.push(item.topicName);
        years.push(item.year);
      }

      //below arrays is for storing unique values of the previous arrays

      const distinctTopicNames = topicNames.filter(
        (value, index, self) => self.indexOf(value) === index
      );
      const distinctyears = years.filter(
        (value, index, self) => self.indexOf(value) === index
      );
      dispatch({
        type: SETQUESTIONDATA,
        topicNames: distinctTopicNames,
        years: distinctyears,
      });
    } catch (error) {
      console.log(error);
    }
  };
};

export const addQuestion = (data) => {
  return async (dispatch) => {
    try {
      await fetch('http://localhost:3001/questions', {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });
    } catch (error) {
      console.log(error);
    }
  };
};
