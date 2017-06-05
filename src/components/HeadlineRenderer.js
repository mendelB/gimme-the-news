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
  }

  componentDidMount() {
    newsFetcher.getNews(this.props.newsSource)
    .then(news => this.setState({news: news}))
  }

  componentWillReceiveProps(nextProps) {
    newsFetcher.getNews(nextProps.newsSource)
    .then(news => this.setState({news: news})) 
  }

  render() {
    let arr = this.state.news.map(article => <NewsHeadline image={article.urlToImage} headline={article.title} description={article.description} articleLink={article.url}/>)
    let arrays = []
    let size = 3  
    while (arr.length > 0) {
      arrays.push(arr.splice(0, size));
    }
    return (
      <div>
        {
          arrays.map(row => <div className="row">{row}</div>)
        }
      </div>
    );
  }
}

export default HeadlineRenderer;
