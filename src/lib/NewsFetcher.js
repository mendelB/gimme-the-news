let newsFetcher = {}
let cachedSources = []
let cachedNews = {}
if (!localStorage.getItem('readingList')) localStorage.setItem('readingList', JSON.stringify([]));
const BASE = "https://newsapi.org/v1"
const SOURCES_URL = BASE + "/sources?"
const NEWS = BASE + "/articles?source="
const API_TAIL = "&apiKey=" + process.env.REACT_APP_API_KEY


let configSources = sources => {
	sources.forEach(source => {
		let sourceObj = { name: source.name, id: source.id, favored: false }
		cachedSources.push(sourceObj)
	})
	localStorage.setItem('cachedSources', JSON.stringify(cachedSources))
	return cachedSources
}

let handleNews = (news) => {
	cachedNews[news.source] = news.articles
	return news.articles
}

newsFetcher.getSources = () => {
	let storage = localStorage.getItem('cachedSources');
	if (!storage) {
		console.log("Making API Call!")
		return fetch(SOURCES_URL + API_TAIL)
		.then(res => res.json())
		.then(res => configSources(res.sources))
	} else {
		cachedSources = JSON.parse(storage)
		return Promise.resolve(cachedSources)
	}
}

newsFetcher.getNews = source => {
	let news = cachedNews[source]
	if (news) return Promise.resolve(news);
	console.log("Making API Call!")
	return fetch(NEWS + source + API_TAIL)
	.then(res => res.json())
	.then(json => handleNews(json))
}

newsFetcher.mySources = () => {
	return newsFetcher.getSources().then((sources => sources.filter(s => s.favored ) ))
}

newsFetcher.updateSources = (sources) => {
	localStorage.setItem('cachedSources', JSON.stringify(sources))
}

newsFetcher.addToReadingList = (newsItem) => {
	let readingList = JSON.parse(localStorage.getItem('readingList'));
	readingList.push(newsItem)
	localStorage.setItem('readingList', JSON.stringify(readingList))
	console.log(readingList)
}

newsFetcher.removeFromReadingList = (newsItem) => {
	let readingList = JSON.parse(localStorage.getItem('readingList'));
	readingList = readingList.filter(news => news.title != newsItem.title);
	localStorage.setItem('readingList', JSON.stringify(readingList))
	return readingList
}

newsFetcher.getReadingList = () => {
	return JSON.parse(localStorage.getItem('readingList'))
}


export default newsFetcher;