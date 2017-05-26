import React, { Component } from 'react';
import { Thumbnail, Button, Col } from 'react-bootstrap';
import NewsHeadline from './components/NewsHeadline';
import './App.css';

let img = "https://cdn1.tnwcdn.com/wp-content/blogs.dir/1/files/2017/05/Magikarp-Jump.jpg";
let headline = "Magikarp Jump, the latest mobile Pokémon game, is out today";
let description = "The Pokémon Company just released Magikarp Jump, a mobile game starring the world's least-loved finned Pokémon. To use the developer's own words, \"What is this world coming ..."
let article = "https://thenextweb.com/gaming/2017/05/25/magikarp-jump-latest-mobile-pokemon-game-today/";

let articles = [
  {
    "author": "Melissa Thompson",
    "title": "Smart glass technology is making wearable computers accessible",
    "description": "If you thought that wearable computing was the stuff of science fiction movies, companies like Vuzix are bringing this technology to life. With a Smart Glasses range for enterprise ...",
    "url": "https://thenextweb.com/contributors/2017/05/26/smart-glass-technology-making-wearable-computers-accessible/",
    "urlToImage": "https://cdn2.tnwcdn.com/wp-content/blogs.dir/1/files/2017/05/person-844258_1920.jpg",
    "publishedAt": "2017-05-26T19:36:43Z"
  },
  {
    "author": "Rachel Kaser",
    "title": "Court rules against model over body-shaming Snap",
    "description": "Former Playboy model Dani Mathers was sentenced to community service by a judge this week for a Snap she took of another woman.\r\n\r\nWhile at an LA Fitness gym last July, Mathers took ...",
    "url": "https://thenextweb.com/apps/2017/05/26/court-rules-model-body-shaming-snap/",
    "urlToImage": "https://cdn0.tnwcdn.com/wp-content/blogs.dir/1/files/2016/06/Snapchat.jpg",
    "publishedAt": "2017-05-26T19:14:22Z"
  },
  {
    "author": "Alice Bonasio",
    "title": "Is VR The Future of Filmmaking?",
    "description": "The question of how Virtual Reality will transform creative industries such as Film is a big one, but Cannes certainly seemed like an appropriate place to tackle it.\r\n\r\nSo in between ...",
    "url": "https://thenextweb.com/contributors/2017/05/26/vr-future-filmmaking/",
    "urlToImage": "https://cdn1.tnwcdn.com/wp-content/blogs.dir/1/files/2017/05/Tree-02-Still.jpg",
    "publishedAt": "2017-05-26T17:53:08Z"
  },
  {
    "author": "Rachel Kaser",
    "title": "Ubisoft drops five Far Cry 5 trailers, reveals release date",
    "description": "The new trailers -- yes, trailers -- for Far Cry 5 hit YouTube today, giving more details about the series' first American entry.\r\n\r\nThree of the five trailers focus on in-game characters, ...",
    "url": "https://thenextweb.com/gaming/2017/05/26/ubisoft-drops-five-far-cry-5-trailers-reveals-release-date/",
    "urlToImage": "https://cdn1.tnwcdn.com/wp-content/blogs.dir/1/files/2017/05/Far-Cry-5.png",
    "publishedAt": "2017-05-26T17:51:20Z"
  },
  {
    "author": "TNW Deals",
    "title": "Learn how to use Adobe apps to create the coolest digital design work ever, for just $31",
    "description": "The Adobe Creative Suite packs in so many features to service so many different types of creative pursuits that sometimes it’s easy to lose track of how much just one of those ...",
    "url": "https://thenextweb.com/offers/2017/05/26/learn-use-adobe-apps-create-coolest-digital-design-work-ever-just-31/",
    "urlToImage": "https://cdn3.tnwcdn.com/wp-content/blogs.dir/1/files/2017/05/1iUQmQ1.jpg",
    "publishedAt": "2017-05-26T17:30:05Z"
  },
  {
    "author": "Matt Navarra",
    "title": "The social media wrap up of TNW Conference 2017",
    "description": "Last Friday (19th May), another unforgettable chapter of TNW Conference 2017 came to a close in Amsterdam.\r\n\r\nWith the likes of Imran Khan (Chief Strategist, @Snapchat), David Karp ...",
    "url": "https://thenextweb.com/insider/2017/05/26/tnw-conference-social-2017/",
    "urlToImage": "https://cdn2.tnwcdn.com/wp-content/blogs.dir/1/files/2017/05/Image-uploaded-from-iOS-19.jpg",
    "publishedAt": "2017-05-26T17:07:24Z"
  },
  {
    "author": "Mix",
    "title": "Songwhip links to songs from Spotify, Apple Music and YouTube all at once",
    "description": "The sheer ubiquity of on-demand music streaming has made it easier than ever to play your favorite jams. Things, however, tend to get much messier when sharing songs with friends – ...",
    "url": "https://thenextweb.com/apps/2017/05/26/spotify-youtube-apple-music-one-link/",
    "urlToImage": "https://cdn2.tnwcdn.com/wp-content/blogs.dir/1/files/2017/05/Screen-Shot-2017-05-26-at-14.52.17.png",
    "publishedAt": "2017-05-26T16:14:32Z"
  },
  {
    "author": "Arend de Haas",
    "title": "Technology and big data are helping Cameroonians protect their forests",
    "description": "Deforestation is still increasing exponentially in tropical regions. Some of the worst regions in the world are the Amazon rainforest, South East Asia and Central Africa. Between ...",
    "url": "https://thenextweb.com/africa/2017/05/26/technology-big-data-helping-cameroonians-protect-forests/",
    "urlToImage": "https://cdn1.tnwcdn.com/wp-content/blogs.dir/1/files/2017/05/image-20170411-1900-zlyos.jpg",
    "publishedAt": "2017-05-26T14:35:28Z"
  },
  {
    "author": "Mix",
    "title": "This app uses artificial intelligence to turn design mockups into source code",
    "description": "While traditionally it has been the task of front-end developers to transform the work of designers from raw graphical user interface mockups to actual source code, this trend might ...",
    "url": "https://thenextweb.com/apps/2017/05/26/ai-raw-design-turn-source-code/",
    "urlToImage": "https://cdn2.tnwcdn.com/wp-content/blogs.dir/1/files/2017/05/Screen-Shot-2017-05-26-at-13.13.51.png",
    "publishedAt": "2017-05-26T14:20:25Z"
  },
  {
    "author": "Mix",
    "title": "Google launches animation tool so you can turn boring data into cool GIFs",
    "description": "Google wants to be the Giphy for turning boring data into awesome animated illustrations – sort of.\r\n\r\nThe search engine titan announced it has launched a handy animation tool that ...",
    "url": "https://thenextweb.com/google/2017/05/26/google-data-gif-maker/",
    "urlToImage": "https://cdn2.tnwcdn.com/wp-content/blogs.dir/1/files/2017/05/Screen-Shot-2017-05-26-at-11.36.53.png",
    "publishedAt": "2017-05-26T12:43:11Z"
  }
]

class App extends Component {
  render() {
    return (
      <div>
        {articles.map(article => <NewsHeadline image={article.urlToImage} headline={article.title} description={article.description} articleLink={article.url}/>)}
      </div>
    );
  }
}

export default App;
