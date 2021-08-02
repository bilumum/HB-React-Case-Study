/* eslint-disable max-len */
import React, { useContext, useState, useEffect } from 'react';
import ToastContainer from 'react-bootstrap/ToastContainer';
import Toast from 'react-bootstrap/Toast';
import NewLink from './NewLink';
import LinkItem from './LinkItem';
import LinkPaging from './LinkPaging';
import LinkSorting from './LinkSorting';
import { LinkContext } from '../../context/LinkContext';

function LinkList() {
  const [activePageIndex, setActivePageIndex] = useState(1);
  const [sortType, setSortType] = useState();
  const [successMessage, setSuccessMessage] = useState({ showSuccess: false, deletedLink: {} });
  const { links } = useContext(LinkContext);
  const pageSize = 5;

  useEffect(() => {
    if (((activePageIndex - 1) * pageSize + 1) > links.length) {
      setActivePageIndex(activePageIndex - 1);
    }
  }, [activePageIndex, links.length]);

  const sortLinks = () => {
    if (sortType === 'MV') {
      return links.sort((a, b) => {
        if (a.points === b.points) {
          return b.lastVotedDate.getTime() - a.lastVotedDate.getTime();
        }

        return b.points - a.points;
      });
    } if (sortType === 'LV') {
      return links.sort((a, b) => {
        if (a.points === b.points) {
          return b.lastVotedDate.getTime() - a.lastVotedDate.getTime();
        }

        return a.points - b.points;
      });
    }

    return links.sort((a, b) => b.addedDate.getTime() - a.addedDate.getTime());
  };

  // eslint-disable-next-line max-len
  const sortedLinks = sortLinks();
  const paginatedLinks = sortedLinks.slice((activePageIndex - 1) * pageSize, activePageIndex * pageSize);

  const handlePageChange = (index) => {
    setActivePageIndex(index);
  };

  const handleSortChange = (selectedSortType) => {
    setSortType(selectedSortType);
  };

  const handleRemoList = (deletedLink) => {
    setSuccessMessage({ showSuccess: true, deletedLink });
  };

  return (
    <>
      <NewLink />
      <hr />
      <LinkSorting SortType={sortType} OnSortChange={handleSortChange} />
      <br />
      {
        paginatedLinks.map((link) => <LinkItem Link={link} key={link.addedDate.getTime()} OnDelete={handleRemoList} />)
      }
      <br />
      <LinkPaging Count={links.length} ActivePageIndex={activePageIndex} OnChange={handlePageChange} PageSize={pageSize} />
      <ToastContainer className="p-3" position="top-center">
        <Toast
          onClose={() => setSuccessMessage({ ...successMessage, showSuccess: false })}
          show={successMessage.showSuccess}
          delay={1200}
          autohide
          bg="success"
        >
          <Toast.Body>
            <b>{successMessage.deletedLink.linkName}</b>
            {' '}
            removed
          </Toast.Body>
        </Toast>
      </ToastContainer>
    </>
  );
}

export default LinkList;
