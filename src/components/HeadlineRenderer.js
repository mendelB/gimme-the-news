import React, { Component } from 'react';
import NewsHeadline from './NewsHeadline';
import newsFetcher from '../lib/NewsFetcher'
import '../App.css';

class HeadlineRenderer extends Component {
  constructor(props) {
    super(props);
    
    this.state = {
      news: []
    }

    this.readLater = this.readLater.bind(this)
  }

  componentDidMount() {
    this.props.readingList ?
    this.setState({news: newsFetcher.getReadingList()})
    :
    newsFetcher.getNews(this.props.newsSource)
    .then(news => this.setState({news: news}))
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.readingList) {
      this.setState({news: newsFetcher.getReadingList()})
    } else {
      this.setState({news: []})
      newsFetcher.getNews(nextProps.newsSource)
      .then(news => this.setState({news: news})) 
    }
  }

  readLater(id) {
    newsFetcher.addToReadingList(this.state.news[id])
  }

  render() {
    let arr = this.state.news.map((article, index) =>
      <NewsHeadline 
        key={index} index={index} image={article.urlToImage} headline={article.title}
        description={article.description} articleLink={article.url}
        readLater={this.readLater}
      />
    )
    return (
      <div>
        { arr }
      </div>
    );
  }
}

export default HeadlineRenderer;
