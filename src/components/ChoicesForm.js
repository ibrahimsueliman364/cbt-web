import React, { useCallback, useReducer } from 'react';
import Input from './Input';
import { Segment } from 'semantic-ui-react';
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

const ChoiceForm = (props) => {
  const [formState, dispatchFormState] = useReducer(formReducer, {
    inputValues: {
      choice1: null,
      choice2: null,
      choice3: null,
      choice4: null,
      choice5: null,
    },
    inputValidities: {
      choice1: true,
      choice2: true,
      choice3: true,
      choice4: true,
      choice5: true,
    },
    formIsValid: true,
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

  const handleSubmit = async (event) => {
    if (!formState.formIsValid) {
      alert('No input!');
      event.preventDefault();
      return;
    }
    event.preventDefault();
    const choices = [];
    for (const val in formState.inputValues) {
      if (formState.inputValues[val]) {
        choices.push(formState.inputValues[val].trim());
      }
    }

    props.setChoices(choices);
  };

  return (
    <div>
      <div>
        <Segment>
          <form className='ui form'>
            <Input
              id='choice1'
              style={{ width: 100 }}
              type='text'
              label='Choice A '
              errortext='choice 1 is Required'
              onInputChange={inputChangeHandler}
              initialvalue=''
            />
            <br />
            <br />
            <Input
              id='choice2'
              style={{ width: 100 }}
              type='text'
              label='Choice B '
              errortext='choice2 is Required'
              onInputChange={inputChangeHandler}
              initialvalue=''
            />
            <br />
            <br />
            <Input
              id='choice3'
              style={{ width: 100 }}
              type='text'
              label='Choice C '
              errortext='choice 3 Name is Required'
              onInputChange={inputChangeHandler}
              initialvalue=''
            />
            <br />
            <br />
            <Input
              id='choice4'
              style={{ width: 100 }}
              type='text'
              label='Choice D '
              errortext='choice 4 is Required'
              onInputChange={inputChangeHandler}
              initialvalue=''
            />
            <br />
            <br />
            <Input
              id='choice5'
              style={{ width: 100 }}
              type='text'
              label='Choice E '
              errortext='choice5 is Required'
              onInputChange={inputChangeHandler}
              initialvalue=''
            />
            <br />
            <br />
            {!props.choiceFlag && (
              <input
                type='submit'
                value='Continue'
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

export default ChoiceForm;
