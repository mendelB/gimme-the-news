let newsFetcher = {}
let cachedSources = []
let cachedNews = {}
const BASE = "https://newsapi.org/v1"
const SOURCES_URL = BASE + "/sources?"
const NEWS = BASE + "/articles?source="
const API_TAIL = "&apiKey=" + process.env.REACT_APP_API_KEY

let configSources = sources => {
	sources.forEach(source => {
		let sourceObj = { name: source.name, id: source.id }
		cachedSources.push(sourceObj)
	})
	return cachedSources
}

let handleNews = (news) => {
	cachedNews[news.source] = news.articles
	return news.articles
}

newsFetcher.getSources = () => {
	if (cachedSources.length < 1) {
		console.log("Making API Call!")
		return fetch(SOURCES_URL + API_TAIL)
		.then(res => res.json())
		.then(res => configSources(res.sources))
	} else {
		return cachedSources
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


export default newsFetcher;