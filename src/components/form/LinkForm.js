/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { useState, useContext } from 'react';
import {
  Form, Button,
} from 'react-bootstrap';
import { ArrowLeft } from 'react-bootstrap-icons';
import { useHistory } from 'react-router-dom';
import './LinkForm.scss';
import ToastContainer from 'react-bootstrap/ToastContainer';
import Toast from 'react-bootstrap/Toast';
import { LinkContext } from '../../context/LinkContext';
import Validation from './Validation';

function LinkForm() {
  const { addNewLink } = useContext(LinkContext);
  const [state, setState] = useState({
    linkName: '',
    linkValue: '',
    showSuccess: false,
    showValidation: false,
  });
  const history = useHistory();

  const handleClick = () => {
    if (state.linkName.length === 0 || state.linkValue.length === 0) {
      setState({ ...state, showValidation: true });
      return;
    }

    const newLink = {
      linkName: state.linkName,
      linkValue: state.linkValue,
      addedDate: new Date(),
      lastVotedDate: new Date(),
      points: 0,
    };
    addNewLink(newLink);
    setState({ ...state, showSuccess: true });
  };

  const handleInputChange = (e) => {
    if (e.target.id === 'txtLinkName') {
      setState({ ...state, linkName: e.target.value });
    } else if (e.target.id === 'txtLinkValue') {
      setState({ ...state, linkValue: e.target.value });
    }
  };

  return (

    <>
      <ToastContainer className="p-3" position="top-center">
        <Toast
          onClose={() => setState({ ...state, showSuccess: false })}
          show={state.showSuccess}
          delay={1200}
          autohide
          bg="success"
        >
          <Toast.Body>
            <b>{state.linkName}</b>
            {' '}
            added
          </Toast.Body>
        </Toast>
      </ToastContainer>
      <Validation
        showValidation={state.showValidation}
        onClose={() => setState({ ...state, showValidation: false })}
      />
      <div className="linkForm">
        <div className="backToList" onClick={() => history.goBack()} role="button" tabIndex="0">
          <ArrowLeft size={32} />
          <div className="flex-gap" />
          <span>Return to List</span>
        </div>
        <br />
        <h1>Add New Link</h1>
        <br />
        <br />
        <Form.Group className="mb-3" controlId="txtLinkName">
          <Form.Label>Link Name:</Form.Label>
          <Form.Control type="text" placeholder="e.g. Alphabet" onChange={handleInputChange} />
        </Form.Group>
        <Form.Group className="mb-3" controlId="txtLinkValue">
          <Form.Label>Link URL:</Form.Label>
          <Form.Control type="text" placeholder="e.g. http://abc.xyz" onChange={handleInputChange} />
        </Form.Group>
        <Button style={{ float: 'right' }} variant="dark" onClick={handleClick}>ADD</Button>
      </div>
    </>

  );
}

export default LinkForm;
