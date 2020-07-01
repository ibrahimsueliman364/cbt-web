import { SETQUESTIONDATA } from '../actions/questionActions';

const initialState = {
  topicNames: [],
  years: [],
};

const questionReducer = (state = initialState, action) => {
  switch (action.type) {
    case SETQUESTIONDATA:
      return {
        subjects: action.subjects,
        topicNames: action.topicNames,
        years: action.years,
      };
    default:
      return state;
  }
};

export default questionReducer;
