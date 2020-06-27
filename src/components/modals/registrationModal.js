import React from 'react';
import { Modal } from 'semantic-ui-react';
import { useDispatch } from 'react-redux';
import { closeModal } from '../../store/actions/modalActions';
import SignUp from '../auth/SignUp';

const RegistrationModal = () => {
  const dispatch = useDispatch();
  return (
    <Modal size='mini' open={true} onClose={() => dispatch(closeModal())}>
      <Modal.Header>Register</Modal.Header>
      <Modal.Content>
        <SignUp />
      </Modal.Content>
    </Modal>
  );
};

export default RegistrationModal;
