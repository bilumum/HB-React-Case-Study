/* eslint-disable no-param-reassign */
/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
import React, { useState, useEffect } from 'react';

export const LinkContext = React.createContext();

export const LinkProvider = (props) => {
  const [links, setLink] = useState(() => {
    const linkItemsData = JSON.parse(localStorage.getItem('linkItems'));

    if (linkItemsData) {
      linkItemsData.forEach((linkItem) => {
        linkItem.addedDate = new Date(linkItem.addedDate);
        linkItem.lastVotedDate = new Date(linkItem.lastVotedDate);
      });
      return linkItemsData;
    }

    return [];
  });

  useEffect(() => {
    localStorage.setItem('linkItems', JSON.stringify(links));
  }, [links]);

  const addNewLink = (linkItem) => {
    setLink(() => [...links, linkItem]);
  };

  const deleteLink = (linkItem) => {
    const linkItems = links.filter((e) => e.addedDate !== linkItem.addedDate);
    setLink(linkItems);
  };

  const upVoteLink = (linkItem) => {
    const linkItems = links.filter((e) => e.addedDate !== linkItem.addedDate);
    linkItem.points += 1;
    linkItem.lastVotedDate = new Date();
    setLink(() => [...linkItems, linkItem]);
  };

  const downVoteLink = (linkItem) => {
    const linkItems = links.filter((e) => e.addedDate !== linkItem.addedDate);
    linkItem.points -= 1;
    linkItem.lastVotedDate = new Date();
    setLink(() => [...linkItems, linkItem]);
  };

  return (
    <LinkContext.Provider value={{
      links, addNewLink, deleteLink, upVoteLink, downVoteLink,
    }}
    >
      {props.children}
    </LinkContext.Provider>
  );
};
