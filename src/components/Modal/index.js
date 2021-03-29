import React from 'react';

import { Container, ModalBody } from './styled';

const Modal = ({ modalStatus, setModalStatus, children }) => {
  const handleModalClick = (e) => {
    if (e.target.classList.contains('modalBg')) {
      setModalStatus(false);
    }
  };

  return (
    <Container className="modalBg" status={modalStatus} onClick={handleModalClick}>
      <ModalBody>{children}</ModalBody>
    </Container>
  );
};

export default Modal;
