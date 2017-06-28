let newsFetcher = {}
let cachedSources = []
let cachedNews = {}
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


export default newsFetcher;