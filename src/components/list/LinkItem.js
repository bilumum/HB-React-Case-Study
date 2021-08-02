/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { useContext, useState } from 'react';
import PropTypes from 'prop-types';
import './LinkItem.scss';
import { ArrowUp, ArrowDown, XCircleFill } from 'react-bootstrap-icons';
import Modal from 'react-bootstrap/Modal';
import { Button } from 'react-bootstrap';
import { LinkContext } from '../../context/LinkContext';

function LinkItem(props) {
  const { Link, OnDelete } = props;
  const { upVoteLink, downVoteLink, deleteLink } = useContext(LinkContext);
  const [isShownHoverContent, setIsShownHoverContent] = useState(false);
  const [showModal, setShowModal] = useState(false);

  const handleUpVoteClick = () => {
    upVoteLink(Link);
  };

  const handleDownVoteClick = () => {
    downVoteLink(Link);
  };

  const handleShowModal = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  const handleDeleteLink = () => {
    deleteLink(Link);
    OnDelete(Link);
  };

  return (
    <>
      <div className="linkItemContainer" onMouseEnter={() => setIsShownHoverContent(true)} onMouseLeave={() => setIsShownHoverContent(false)}>
        <div className="linkPointBox">
          <span className="point">{Link.points}</span>
          <span>POINTS</span>
        </div>
        <div className="linkInfoBox">
          <h3>{Link.linkName}</h3>
          <span className="text-muted link">{`(${Link.linkValue})`}</span>
          <div className="voteBox">
            <div className="up" onClick={handleUpVoteClick} role="button" tabIndex="0">
              <ArrowUp size={18} />
              <span>Up Vote</span>
            </div>
            <div className="down" onClick={handleDownVoteClick} role="button" tabIndex="0">
              <ArrowDown size={18} />
              <span>Down Vote</span>
            </div>
          </div>
        </div>
        <XCircleFill size={18} color="red" style={{ cursor: 'pointer', display: isShownHoverContent ? '' : 'none' }} onClick={handleShowModal} />
      </div>
      <Modal
        show={showModal}
        onHide={handleCloseModal}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Remove Link</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          Do you want to remove:
          {' '}
          { Link.linkName }
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseModal}>
            CANCEL
          </Button>
          <Button variant="primary" onClick={handleDeleteLink}>OK</Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

LinkItem.propTypes = {
  Link: PropTypes.objectOf(PropTypes.any).isRequired,
  OnDelete: PropTypes.func.isRequired,
};

export default LinkItem;
