import React from 'react';
import { Modal } from 'semantic-ui-react';
import { useDispatch } from 'react-redux';
import { closeModal } from '../../store/actions/modalActions';
import LogIn from '../auth/LogIn';

const RegistrationModal = () => {
  const dispatch = useDispatch();
  return (
    <Modal size='mini' open={true} onClose={() => dispatch(closeModal())}>
      <Modal.Header>Log In</Modal.Header>
      <Modal.Content>
        <LogIn />
      </Modal.Content>
    </Modal>
  );
};

export default RegistrationModal;
