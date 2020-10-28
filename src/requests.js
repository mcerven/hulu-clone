// API: https://www.themoviedb.org/settings/api
const baseUrl = 'https://api.themoviedb.org/3';
const apiKey = 'b5fe20025518c6ee92358aabf800f360';
const mediaType = 'movie';

export default {
    getTrending: `${baseUrl}/trending/${mediaType}/week?api_key=${apiKey}&language=en-US`,
    getTopRated: `${baseUrl}/${mediaType}/top_rated?api_key=${apiKey}&language=en-US`,
    getAction: `${baseUrl}/discover/${mediaType}?api_key=${apiKey}&with_genres=28`,
    getComedy: `${baseUrl}/discover/${mediaType}?api_key=${apiKey}&with_genres=35`,
    getHorror: `${baseUrl}/discover/${mediaType}?api_key=${apiKey}&with_genres=27`,
    getRomance: `${baseUrl}/discover/${mediaType}?api_key=${apiKey}&with_genres=10749`,
    getMystery: `${baseUrl}/discover/${mediaType}?api_key=${apiKey}&with_genres=9648`,
    getScifi: `${baseUrl}/discover/${mediaType}?api_key=${apiKey}&with_genres=878`,
    getWestern: `${baseUrl}/discover/${mediaType}?api_key=${apiKey}&with_genres=37`,
    getAnimation: `${baseUrl}/discover/${mediaType}?api_key=${apiKey}&with_genres=16`,
    getTvMovie: `${baseUrl}/discover/${mediaType}?api_key=${apiKey}&with_genres=10770`,
}