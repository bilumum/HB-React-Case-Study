/* eslint-disable max-len */
import React from 'react';
import Pagination from 'react-bootstrap/Pagination';
import PropTypes from 'prop-types';

function LinkPaging(props) {
  const {
    Count, ActivePageIndex, OnChange, PageSize,
  } = props;
  const pageCount = Math.ceil(Count / PageSize);
  const pageItems = [];

  const handleClick = (index) => {
    OnChange(index);
  };

  // eslint-disable-next-line no-plusplus
  for (let number = 1; number <= pageCount; number++) {
    pageItems.push(
      <Pagination.Item key={number} active={number === ActivePageIndex} onClick={() => handleClick(number)}>
        {number}
      </Pagination.Item>,
    );
  }

  return (
    <div style={{ display: pageCount > 1 ? '' : 'none' }}>
      <Pagination size="sm">{pageItems}</Pagination>
    </div>
  );
}

LinkPaging.propTypes = {
  Count: PropTypes.number.isRequired,
  ActivePageIndex: PropTypes.number.isRequired,
  OnChange: PropTypes.func.isRequired,
  PageSize: PropTypes.number.isRequired,
};

export default LinkPaging;
