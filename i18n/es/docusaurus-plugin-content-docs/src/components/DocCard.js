import React from 'react';
import '../css/DocCard.css';


function DocCard(props) {
  return (
    <div className="doc-card">
      <a href={props.link}>
        <div className="doc-card-content">
          <b>{props.title}</b>
          <p>{props.description}</p>
        </div>
      </a>
    </div>
  );
}


export default DocCard;
