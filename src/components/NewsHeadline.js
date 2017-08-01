import React, { Component } from 'react';
import '../App.css';

function NewsHeadline(props) {
  let handleClick = props.isInReadingList ?
    { 
      handler: (e) => props.removeFromReadingList(props.index),
      text: "Remove From Reading List" 
    }
  :
    {
      handler: (e) => props.readLater(props.index),
      text: "Read Later"
    }

  return (
    <div className="col-sm-5 col-md-4 col-xs-12 news-headline">
      <div className="card card-outline-info text-center">
        <img className="card-img-top news-thumbnail" src={props.image} alt="Card image cap"/>
        <div className="card-block">
          <h4 className="card-title headline">{props.headline}</h4>
          <p className="card-text">{props.description.split(" ").splice(0, 13).join(" ")+ "..."}</p>
        </div>
      </div>
      <div className="links">
        <a target="_blank" href={props.articleLink} className="btn btn-primary">Read Article</a>
        <button className="btn btn-info" onClick={handleClick.handler}>{handleClick.text}</button>
      </div>
    </div>
  );
}

export default NewsHeadline;
