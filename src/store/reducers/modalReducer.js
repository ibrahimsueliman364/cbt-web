import { MODAL_OPEN, MODAL_ClOSE } from '../actions/modalActions';

const initialState = null;

const modalReducer = (state = initialState, action) => {
  switch (action.type) {
    case MODAL_OPEN:
      const { modalType, modalProps } = action.payload;
      return { modalType, modalProps };

    case MODAL_ClOSE:
      return null;
    default:
      return state;
  }
};

export default modalReducer;
