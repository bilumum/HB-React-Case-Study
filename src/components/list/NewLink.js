import React from 'react';
import './NewLink.scss';
import { Plus } from 'react-bootstrap-icons';
import { useHistory } from 'react-router-dom';

function NewLink() {
  const history = useHistory();

  const handleNewLinkClick = () => {
    history.push({
      pathname: '/add',
    });
  };

  const handleKeyDown = () => {
    // No need to handle
  };

  return (
    <div className="submitLinkContainer" onClick={handleNewLinkClick} onKeyDown={handleKeyDown} role="button" tabIndex="0">
      <div className="submitLinkIcon">
        <Plus size={64} />
      </div>
      <div className="flex-gap" />
      <span className="submitLink">SUBMIT A LINK</span>
    </div>
  );
}

export default NewLink;
