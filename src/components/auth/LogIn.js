import React, { useCallback, useReducer } from 'react';
import Input from '../Input';
import { useDispatch } from 'react-redux';
import { signIn } from '../../store/actions/authActions';
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

const LogIn = () => {
  const dispatch = useDispatch();

  const [formState, dispatchFormState] = useReducer(formReducer, {
    inputValues: {
      registrationNumber: '',
      password: '',
    },
    inputValidities: {
      registrationNumber: false,
      password: false,
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

  const handleSubmit = async (event) => {
    if (!formState.formIsValid) {
      alert('No input!');
      return;
    }
    event.preventDefault();

    try {
      await dispatch(signIn(formState.inputValues));
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <div>
        <Segment>
          <form class='ui form'>
            <Input
              id='registrationNumber'
              type='text'
              label='Reg Number'
              required
              errortext='Please enter a valid registration Number'
              onInputChange={inputChangeHandler}
              initialValue=''
            />
            <br />
            <br />
            <Input
              id='password'
              type='password'
              label='Password'
              required
              minLength={7}
              errortext='Please enter a valid password.'
              onInputChange={inputChangeHandler}
              initialValue=''
            />
            <br />
            <br />
            <input
              type='submit'
              value='Submit'
              className='ui button'
              onClick={handleSubmit}
            />
          </form>
        </Segment>
      </div>
    </div>
  );
};

export default LogIn;
