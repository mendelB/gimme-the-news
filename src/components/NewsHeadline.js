import React, { Component } from 'react';
import { Thumbnail, Button, Col } from 'react-bootstrap';
import '../App.css';

class NewsHeadline extends Component {
  render() {
    return (
      <Col md={4} xs={6} className="news-headline">
        <Thumbnail className="news-thumbnail" src={this.props.image} alt="242x200">
          <h3>{this.props.headline}</h3>
          <p className="description">{this.props.description.split(" ").splice(0, 13).join(" ")+ "..."}</p>
          <p>
            <a 
              target="_blank"
              href={this.props.articleLink}>
                <Button bsStyle="primary">Full Article</Button></a>
          </p>
        </Thumbnail>
      </Col>
    );
  }
}

export default NewsHeadline;
