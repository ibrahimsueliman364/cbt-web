import React from 'react';
import RegisterationModal from './registrationModal';
import LogInModal from './LogInModal';
import { useSelector } from 'react-redux';

const modalLookup = {
  RegisterationModal,
  LogInModal,
};

const ModalManager = () => {
  const currentModal = useSelector((state) => state.modals);

  let renderdModal;

  if (currentModal) {
    const { modalType, modalProps } = currentModal;
    const ModalComponent = modalLookup[modalType];

    renderdModal = <ModalComponent {...modalProps} />;
  }
  return <span>{renderdModal}</span>;
};

export default ModalManager;
