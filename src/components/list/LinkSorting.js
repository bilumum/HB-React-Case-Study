/* eslint-disable max-len */
import React from 'react';
import { Form } from 'react-bootstrap';
import PropTypes from 'prop-types';

function LinkSorting(props) {
  const { SortType, OnSortChange } = props;

  const handleOnChange = (e) => {
    OnSortChange(e.target.value);
  };

  return (
    <div>
      <Form.Select aria-label="Default select example" style={{ maxWidth: '200px' }} onChange={handleOnChange}>
        <option>Sort (Default)</option>
        <option value="MV" selected={SortType === 'MV'}>Most Voted</option>
        <option value="LV" selected={SortType === 'LV'}>Less Voted</option>
      </Form.Select>
    </div>
  );
}

LinkSorting.propTypes = {
  SortType: PropTypes.string.isRequired,
  OnSortChange: PropTypes.func.isRequired,
};

export default LinkSorting;
