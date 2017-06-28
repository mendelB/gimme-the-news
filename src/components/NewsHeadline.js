import React, { Component } from 'react';
import { Thumbnail, Button, Col } from 'react-bootstrap';
import '../App.css';

function NewsHeadline(props) {
  return (
    <Col md={4} xs={10} className="news-headline">
      <Thumbnail className="news-thumbnail" src={props.image} alt="242x200">
        <h3>{props.headline}</h3>
        <p className="description">{props.description.split(" ").splice(0, 13).join(" ")+ "..."}</p>
        <p>
          <a 
            target="_blank"
            href={props.articleLink}>
              <Button bsStyle="primary">Full Article</Button></a>
        </p>
      </Thumbnail>
    </Col>
  );
}

export default NewsHeadline;
