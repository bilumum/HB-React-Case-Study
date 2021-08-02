/* eslint-disable jsx-a11y/click-events-have-key-events */
import React from 'react';
import './LinkForm.scss';
import ToastContainer from 'react-bootstrap/ToastContainer';
import Toast from 'react-bootstrap/Toast';
import PropTypes from 'prop-types';

function Validation(props) {
  const { showValidation, onClose } = props;
  return (

    <>
      <ToastContainer className="p-3" position="top-center" style={{ color: 'white' }}>
        <Toast
          onClose={onClose}
          show={showValidation}
          delay={1200}
          autohide
          bg="danger"
        >
          <Toast.Body>
            Please enter all values...
          </Toast.Body>
        </Toast>
      </ToastContainer>
    </>

  );
}

Validation.propTypes = {
  showValidation: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
};

export default Validation;
