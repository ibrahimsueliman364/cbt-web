import React, { useCallback, useReducer } from 'react';
import Input from './Input';
import { useDispatch } from 'react-redux';
import { Segment } from 'semantic-ui-react';
import { addQuestion } from '../store/actions/questionActions';
const FORM_INPUT_UPDATE = 'FORM_INPUT_UPDATE';

const formReducer = (state, action) => {
  if (action.type === FORM_INPUT_UPDATE) {
    const updatedValues = {
      ...state.inputValues,
      [action.input]: action.value,
    };
    const updatedValidities = {
      ...state.inputValidities,
      [action.input]: action.isValid,
    };
    let updatedFormIsValid = true;
    for (const key in updatedValidities) {
      updatedFormIsValid = updatedFormIsValid && updatedValidities[key];
    }
    return {
      formIsValid: updatedFormIsValid,
      inputValidities: updatedValidities,
      inputValues: updatedValues,
    };
  }
  return state;
};

const QuestionForm = (props) => {
  const dispatch = useDispatch();

  const [formState, dispatchFormState] = useReducer(formReducer, {
    inputValues: {
      subjectName: '',
      correctAnswer: '',
      year: 0,
      topicName: '',
    },
    inputValidities: {
      subjectName: false,
      correctAnswer: false,
      year: false,
      topicName: false,
    },
    formIsValid: false,
  });
  const inputChangeHandler = useCallback(
    (inputIdentifier, inputValue, inputValidity) => {
      dispatchFormState({
        type: FORM_INPUT_UPDATE,
        value: inputValue,
        isValid: inputValidity,
        input: inputIdentifier,
      });
    },
    [dispatchFormState]
  );

  const choices = props.choices;

  const handleSubmit = async (event) => {
    if (!formState.formIsValid) {
      alert('No input!');
      event.preventDefault();
      return;
    }
    if (choices == null) {
      alert('Select Choices before submitting');
      event.preventDefault();
      return;
    }
    event.preventDefault();

    const question = document.getElementById('question').value;
    const submitData = {
      ...formState.inputValues,
      choices: choices,
      question: question.trim(),
    };
    console.log(submitData);
    try {
      dispatch(addQuestion(submitData));
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <div>
        <Segment>
          <form className='ui form' id='formElem'>
            <Input
              id='subjectName'
              type='text'
              label='Subject Name'
              required
              errortext='Subject Name is Required'
              onInputChange={inputChangeHandler}
              initialvalue=''
            />

            <br />
            <br />
            <Input
              id='topicName'
              type='text'
              label='Topic Name'
              required
              errortext='Topic Name is Required'
              onInputChange={inputChangeHandler}
              initialvalue=''
            />
            <br />
            <br />

            <label>Question</label>
            <textarea name='Question' id='question' />
            <br />
            <br />
            <Input
              id='correctAnswer'
              type='text'
              label='The Correct Answer'
              errortext='corrent answer is Required'
              onInputChange={inputChangeHandler}
              initialvalue=''
            />
            <br />
            <br />
            <Input
              id='year'
              type='number'
              label='Year'
              required
              errortext='year is Required'
              onInputChange={inputChangeHandler}
              initialvalue=''
            />
            <br />
            <br />
            <label>Upload Image for the question if any</label>
            <input name='questionImage' id='questionImage' type='file' />
            <br />
            <br />
            {choices && (
              <input
                type='submit'
                value='Submit'
                className='ui button'
                onClick={handleSubmit}
              />
            )}
          </form>
        </Segment>
      </div>
    </div>
  );
};

export default QuestionForm;
