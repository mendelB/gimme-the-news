import React, { Component } from 'react';
import '../App.css';

function NewsHeadline(props) {
  return (
    <div className="col-md-6 col-lg-4 col-xs-12 news-headline">
      <div className="card card-outline-info text-center">
        <a target="_blank" href={props.articleLink} className="article-link"></a>
        <img className="card-img-top news-thumbnail" src={props.image} alt="Card image cap"/>
        <div className="card-block">
          <h4 className="card-title headline">{props.headline}</h4>
          <p className="card-text">{props.description.split(" ").splice(0, 13).join(" ")+ "..."}</p>
        </div>
      </div>
    </div>
  );
}

export default NewsHeadline;
