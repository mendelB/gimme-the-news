import React, { Component } from 'react';
import '../App.css';

function NewsHeadline(props) {
  return (
    <div className="col-md-6 col-lg-4 col-xs-12 news-headline">
      <div className="card text-center">
        <img className="card-img-top news-thumbnail" src={props.image} alt="Card image cap"/>
        <div className="card-block">
          <h4 className="card-title">{props.headline}</h4>
          <p className="card-text">{props.description.split(" ").splice(0, 13).join(" ")+ "..."}</p>
          <a target="_blank" href={props.articleLink} className="btn btn-primary">Full Article</a>
        </div>
      </div>
    </div>
  );
}

export default NewsHeadline;
