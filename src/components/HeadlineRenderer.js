import React, { Component } from 'react';
import NewsHeadline from './NewsHeadline';
import newsFetcher from '../lib/NewsFetcher'
import '../App.css';

class HeadlineRenderer extends Component {
  constructor(props) {
    super(props);
    
    this.state = {
      news: [],
      readingList: newsFetcher.getReadingList(),
    }

    this.readLater = this.readLater.bind(this)
    this.removeFromReadingList = this.removeFromReadingList.bind(this)
  }

  componentDidMount() {
    newsFetcher.getNews(this.props.newsSource)
    .then(news => this.setState({news: news}))
  }

  componentWillReceiveProps(nextProps) {
    this.setState({news: []})
    newsFetcher.getNews(nextProps.newsSource)
    .then(news => this.setState({news: news})) 
  }

  readLater(id) {
    const readingList = newsFetcher.addToReadingList(this.state.news[id])
    this.setState({readingList})
  }

  removeFromReadingList(id) {
    const readingList = newsFetcher.removeFromReadingList(this.state.news[id])
    this.setState({readingList})
  }

  render() {
    let arr = this.state.news.map((article, index) => {
      const isInReadingList = this.state.readingList.find(a => a.title === article.title)
      return <NewsHeadline 
        key={index} index={index} image={article.urlToImage} headline={article.title}
        description={article.description} articleLink={article.url}
        readLater={this.readLater} removeFromReadingList={this.removeFromReadingList} isInReadingList={isInReadingList}
      />
    })
    return (
      <div>
        { arr }
      </div>
    );
  }
}

export default HeadlineRenderer;
