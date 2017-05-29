import React, { Component } from 'react';
import NewsHeadline from './NewsHeadline';
import newsFetcher from '../lib/NewsFetcher'
import '../App.css';

let articles = { "the-next-web" : [
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
],
"bbc-news": [
{
"author": "BBC News",
"title": "Manchester attack: 'Immense progress' made by police",
"description": "Police say they have \"got hold of a large part\" of a Manchester terror network.",
"url": "http://www.bbc.co.uk/news/uk-40056102",
"urlToImage": "https://ichef.bbci.co.uk/news/1024/cpsprodpb/13E4A/production/_96228418_2089902a-5612-463e-9bff-8ae39e02e573.jpg",
"publishedAt": "2017-05-26T18:29:42+00:00"
},
{
"author": "BBC News",
"title": "General election 2017: Corbyn pressed on Trident renewal",
"description": "Labour leader tells Andrew Neil nuclear weapons will be part of defence review if his party wins power.",
"url": "http://www.bbc.co.uk/news/election-2017-40065876",
"urlToImage": "https://ichef.bbci.co.uk/news/1024/cpsprodpb/DFA5/production/_96235275_ada6bcb2-31e8-4c31-86df-fd428d949bc5.jpg",
"publishedAt": "2017-05-26T17:24:06+00:00"
},
{
"author": "BBC News",
"title": "Egypt Coptic Christians killed in bus attack",
"description": "Gunmen opened fire on the bus in Minya province, south of Cairo, as it headed to a monastery.",
"url": "http://www.bbc.co.uk/news/world-middle-east-40059307",
"urlToImage": "https://ichef.bbci.co.uk/news/1024/cpsprodpb/8130/production/_96227033_mediaitem96227030.jpg",
"publishedAt": "2017-05-26T15:30:29+00:00"
},
{
"author": "BBC News",
"title": "Manchester attack victim 'helped me to enjoy life'",
"description": "The mother of Manchester attack victim Martyn Hett says all her memories of him are of smiling.",
"url": "http://www.bbc.co.uk/news/av/uk-40066439/manchester-attack-victim-helped-me-to-enjoy-life",
"urlToImage": "https://ichef.bbci.co.uk/news/1024/cpsprodpb/118A3/production/_96234817_p0543dwd.jpg",
"publishedAt": "2017-05-26T18:04:49+00:00"
},
{
"author": "BBC News",
"title": "Katie Hopkins to leave LBC 'immediately'",
"description": "She and LBC \"have agreed\" that she will leave the radio station, one year after she first joined.",
"url": "http://www.bbc.co.uk/news/entertainment-arts-40057165",
"urlToImage": "https://ichef-1.bbci.co.uk/news/1024/cpsprodpb/E486/production/_96220585_hopkinspa.jpg",
"publishedAt": "2017-05-26T12:00:33+00:00"
},
{
"author": "BBC News",
"title": "UK achieves solar power record as temperatures soar",
"description": "National Grid says nearly a quarter of all electricity generation came from solar power at one point on Friday.",
"url": "http://www.bbc.co.uk/news/business-40058074",
"urlToImage": "https://ichef.bbci.co.uk/news/1024/cpsprodpb/155E2/production/_96222578_gettyimages-106668049.jpg",
"publishedAt": "2017-05-26T15:05:33+00:00"
},
{
"author": "BBC News",
"title": "Damon Smith jailed for planting failed Tube bomb",
"description": "Damon Smith claimed he left the device on the Jubilee line train as a prank.",
"url": "http://www.bbc.co.uk/news/uk-england-london-40059351",
"urlToImage": "https://ichef-1.bbci.co.uk/news/1024/cpsprodpb/E87F/production/_95891595_mediaitem95891593.jpg",
"publishedAt": "2017-05-26T12:17:36+00:00"
},
{
"author": "BBC News",
"title": "Cliff Richard settles with police over sex abuse reports",
"description": "Sir Cliff had sought \"substantial\" compensation after coverage of a sexual assault investigation.",
"url": "http://www.bbc.co.uk/news/uk-40059252",
"urlToImage": "https://ichef-1.bbci.co.uk/news/1024/cpsprodpb/123E0/production/_92102747_mediaitem92102746.jpg",
"publishedAt": "2017-05-26T15:24:41+00:00"
},
{
"author": "BBC News",
"title": "Tories and Labour not being honest with voters: IFS",
"description": "The Institute for Fiscal Studies says the Conservatives and Labour should own up on economic plans.",
"url": "http://www.bbc.co.uk/news/business-40057115",
"urlToImage": "https://ichef-1.bbci.co.uk/news/1024/cpsprodpb/797E/production/_96220113_gettyimages-664508872.jpg",
"publishedAt": "2017-05-26T14:38:47+00:00"
},
{
"author": "BBC News",
"title": "G7 summit agrees on countering terrorism but not climate change",
"description": "The summit in Sicily is the first attended by President Trump, with clear differences on display.",
"url": "http://www.bbc.co.uk/news/world-europe-40055027",
"urlToImage": "https://ichef-1.bbci.co.uk/news/1024/cpsprodpb/566B/production/_96232122_039721947-1.jpg",
"publishedAt": "2017-05-26T17:46:31+00:00"
}
],
"bloomberg": [
{
"author": "Chris Strohm",
"title": "FBI Scrutiny of Kushner Brings Russia Probe Into the White House",
"description": "FBI scrutiny of Jared Kushner, President Donald Trump’s son-in-law and senior adviser, brings the sprawling probe into Russia’s role during and after last year’s campaign into the heart of the White House.",
"url": "https://www.bloomberg.com/politics/articles/2017-05-26/fbi-scrutiny-of-kushner-brings-russia-probe-into-the-white-house",
"urlToImage": "https://assets.bwbx.io/images/users/iqjWHBFdfxIU/iZssDSqANl4M/v0/1200x745.jpg",
"publishedAt": "2017-05-26T18:07:08.99Z"
},
{
"author": "",
"title": "Boehner: Aside From Foreign Affairs, Trump’s Term a ‘Complete Disaster’",
"description": "Former House Speaker John Boehner says that aside from international affairs and foreign policy, President Donald Trump's time in office has so far been a \"complete disaster.\"",
"url": "https://www.bloomberg.com/politics/articles/2017-05-26/boehner-trump-s-term-disaster-aside-from-foreign-affairs",
"urlToImage": "https://assets.bwbx.io/images/users/iqjWHBFdfxIU/iJoY97763wRs/v0/1200x675.jpg",
"publishedAt": "2017-05-26T15:12:44.679Z"
},
{
"author": "Josh Wingrove, Flavia Krause-Jackson",
"title": "G-7 Leaders Embrace Brevity As Trump Cuts Goals Down to Size",
"description": "Group of Seven leaders are preparing to sign off on a substantially pared-down statement at the close of their meeting, an indication of persisting divisions on climate change and trade between Donald Trump and the six other leaders.",
"url": "https://www.bloomberg.com/politics/articles/2017-05-26/g-7-leaders-agree-to-disagree-as-common-goals-cut-down-to-size",
"urlToImage": "https://assets.bwbx.io/images/users/iqjWHBFdfxIU/ipAIwUqyOkUE/v0/1200x675.jpg",
"publishedAt": "2017-05-26T15:51:38.739Z"
},
{
"author": "Anthony Capaccio",
"title": "Suddenly There's Another Littoral Ship in Trump's Budget Plans",
"description": "The White House budget office and the Navy are rushing to find an extra $600 million to buy a second Littoral Combat Ship after including only one in the budget that President Donald Trump proposed this week.",
"url": "https://www.bloomberg.com/politics/articles/2017-05-26/suddenly-there-s-another-littoral-ship-in-trump-s-budget-plans",
"urlToImage": "https://assets.bwbx.io/images/users/iqjWHBFdfxIU/icw9Eh9Xl.T4/v0/1200x675.jpg",
"publishedAt": "2017-05-26T15:21:06.269Z"
},
{
"author": "Eric Roston",
"title": "Climate Change Is Making It Harder to Sleep",
"description": "About a third of Americans already toss and turn. Warming temperatures will spread the insomnia.",
"url": "https://www.bloomberg.com/news/articles/2017-05-26/climate-change-is-making-it-harder-to-sleep",
"urlToImage": "https://assets.bwbx.io/images/users/iqjWHBFdfxIU/ipqsXDxMK1x0/v0/1200x733.jpg",
"publishedAt": "2017-05-26T18:00:07.066Z"
},
{
"author": "Alan Levin",
"title": "New Airport Scanners Could End Bans on Laptops and Liquids",
"description": "Manufacturers of airport security equipment have a message for travelers who fear they will have to give up laptops and tablet computers on international flights: They have a solution.",
"url": "https://www.bloomberg.com/politics/articles/2017-05-26/new-airport-scanners-could-end-bans-on-laptops-and-liquids",
"urlToImage": "https://assets.bwbx.io/images/users/iqjWHBFdfxIU/its15ciW2vq0/v0/1200x800.jpg",
"publishedAt": "2017-05-26T17:00:05.34Z"
},
{
"author": "Dalia Fahmy",
"title": "BMW, Mercedes Become Latest Carmakers Caught in Trump Crossfire",
"description": "BMW, Mercedes-Benz and VW are getting their turn in the crosshairs of U.S. President Donald Trump, who’s making a habit out of attacking the visible -- and free trade-dependent -- auto industry.",
"url": "https://www.bloomberg.com/politics/articles/2017-05-26/trump-blasts-german-carmakers-u-s-sales-and-threatens-barriers",
"urlToImage": "https://assets.bwbx.io/images/users/iqjWHBFdfxIU/iC.wtDmJCKzw/v0/1200x707.jpg",
"publishedAt": "2017-05-26T08:11:43.452Z"
},
{
"author": "Ben Bartenstein, Isabella Cota",
"title": "Investors Pour Money Into Brazil After Political Scandal Creates an Opening",
"description": "Emerging-market stock pickers are using the corruption scandal surrounding Brazil President Michel Temer as an opportunity to pile into a market they already loved.",
"url": "https://www.bloomberg.com/news/articles/2017-05-26/templeton-to-salient-eyeing-brazil-as-inflows-gush-after-selloff",
"urlToImage": "https://assets.bwbx.io/images/users/iqjWHBFdfxIU/ikNVew.vES8k/v2/1200x675.png",
"publishedAt": "2017-05-26T15:54:03.689Z"
},
{
"author": "Benjamin Bain, Elizabeth Dexheimer",
"title": "Wall Street May Get a New Chance to Gut Obama's Broker-Conflict Rule",
"description": "The finance industry may get a fresh opportunity to chip away at an Obama-era rule that cracked down on Wall Street conflicts of interest, as the Securities and Exchange Commission is considering reviewing the responsibilities that brokers have to their clients.",
"url": "https://www.bloomberg.com/news/articles/2017-05-26/wall-street-may-get-new-chance-to-gut-obama-broker-conflict-rule",
"urlToImage": "https://assets.bwbx.io/images/users/iqjWHBFdfxIU/iCOscASA8Crc/v0/1200x669.jpg",
"publishedAt": "2017-05-26T17:11:28.575Z"
},
{
"author": "Lindsey Rupp, Kim Bhasin",
"title": "How Polarizing Is Ivanka’s Fashion Label? Very",
"description": "But that’s not all: While liberals really don’t like the brand, conservatives are merely lukewarm.",
"url": "https://www.bloomberg.com/news/articles/2017-05-26/how-polarizing-is-ivanka-s-fashion-label",
"urlToImage": "https://assets.bwbx.io/images/users/iqjWHBFdfxIU/iAvpiwgvpw24/v1/1200x912.jpg",
"publishedAt": "2017-05-26T15:00:07.607Z"
}
]
}

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
    return (
      <div>
        {this.state.news.map(article => <NewsHeadline image={article.urlToImage} headline={article.title} description={article.description} articleLink={article.url}/>)}
      </div>
    );
  }
}

export default HeadlineRenderer;
