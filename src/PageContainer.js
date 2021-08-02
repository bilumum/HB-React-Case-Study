/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
import React from 'react';
import './App.scss';

function PageContainer(props) {
  return (
    <div className="container container_custom">
      {props.children}
    </div>
  );
}

export default PageContainer;
