// const url = 'https://wft-geo-db.p.rapidapi.com/v1/geo/cities';

export const geoApiOptions = {
	method: 'GET',
	headers: {
		'x-rapidapi-key': 'cf0ff52b97msh59d2e9ccc16ca36p1f3a8ajsn68b863ca7d3e',
		'x-rapidapi-host': 'wft-geo-db.p.rapidapi.com'
	}
};

export const GEO_API_URL = "https://wft-geo-db.p.rapidapi.com/v1/geo"

export const WEATHER_API_URL = "https://api.openweathermap.org/data/2.5";

export const WEATHER_API_KEY = "41b025a29289fccf5da696fa97a30114";


// try {
// 	const response = await fetch(url, options);
// 	const result = await response.text();
// 	console.log(result);
// } catch (error) {
// 	console.error(error);
// }