import React, { Component } from 'react';
import NewsHeadline from './NewsHeadline';
import newsFetcher from '../lib/NewsFetcher'
import '../App.css';

class ReadingListRenderer extends Component {
  constructor(props) {
    super(props);
    
    this.state = {
      news: newsFetcher.getReadingList()
    }

    this.removeFromReadingList = this.removeFromReadingList.bind(this)
  }

  removeFromReadingList(id) {
    const news = newsFetcher.removeFromReadingList(this.state.news[id])
    this.setState({news})
  }

  render() {
    let arr = this.state.news.map((article, index) =>
      <NewsHeadline 
        key={index} index={index} image={article.urlToImage} headline={article.title}
        description={article.description} articleLink={article.url}
        removeFromReadingList={this.removeFromReadingList} isInReadingList={true}
      />
    )
    return (
      <div>
        { arr.length ? arr : <h3 id="nothing-here">Looks like there's nothing here.</h3> }
      </div>
    );
  }
}

export default ReadingListRenderer;
