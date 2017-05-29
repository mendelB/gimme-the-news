let newsFetcher = {}
let cachedSources = []
const BASE = "https://newsapi.org/v1"
const SOURCES_URL = BASE + "/sources?"
const API_TAIL = "&apiKey=" + process.env.REACT_APP_API_KEY

let configSources = (sources) => {
	sources.forEach(source => {
		let sourceObj = { name: source.name, id: source.id }
		cachedSources.push(sourceObj)
	})
	return cachedSources
}

newsFetcher.getSources = () => {
	if (cachedSources.length < 1) {
		return fetch(SOURCES_URL + API_TAIL)
		.then(res => res.json())
		.then(res => configSources(res.sources))
	} else {
		return cachedSources
	}
}


export default newsFetcher;