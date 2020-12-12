import { baseUrl, apiKey } from './requests';

const mediaType = 'movie';

export default [
    {
        id: 1,
        text: "Trending",
        getUrl: (page = 1) => `${baseUrl}/trending/${mediaType}/week?api_key=${apiKey}&page=${page}`,
    },
    {
        id: 2,
        text: "Top Rated",
        getUrl: (page = 1) => `${baseUrl}/${mediaType}/top_rated?api_key=${apiKey}&page=${page}`,
    },
    {
        id: 3,
        text: "Action",
        getUrl: (page = 1) => `${baseUrl}/discover/${mediaType}?api_key=${apiKey}&with_genres=28&page=${page}`,
    },
    {
        id: 4,
        text: "Comedy",
        getUrl: (page = 1) => `${baseUrl}/discover/${mediaType}?api_key=${apiKey}&with_genres=35&page=${page}`,
    },
    {
        id: 5,
        text: "Horror",
        getUrl: (page = 1) => `${baseUrl}/discover/${mediaType}?api_key=${apiKey}&with_genres=27&page=${page}`,
    },
    {
        id: 6,
        text: "Romance",
        getUrl: (page = 1) => `${baseUrl}/discover/${mediaType}?api_key=${apiKey}&with_genres=10749&page=${page}`,
    },
    {
        id: 7,
        text: "Mystery",
        getUrl: (page = 1) => `${baseUrl}/discover/${mediaType}?api_key=${apiKey}&with_genres=9648&page=${page}`,
    },
    {
        id: 8,
        text: "Sci-Fi",
        getUrl: (page = 1) => `${baseUrl}/discover/${mediaType}?api_key=${apiKey}&with_genres=878&page=${page}`,
    },
    {
        id: 9,
        text: "Western",
        getUrl: (page = 1) => `${baseUrl}/discover/${mediaType}?api_key=${apiKey}&with_genres=37&page=${page}`,
    },
    {
        id: 10,
        text: "Animation",
        getUrl: (page = 1) => `${baseUrl}/discover/${mediaType}?api_key=${apiKey}&with_genres=16&page=${page}`,
    },
    {
        id: 11,
        text: "TV Movie",
        getUrl: (page = 1) => `${baseUrl}/discover/${mediaType}?api_key=${apiKey}&with_genres=10770&page=${page}`,
    },
];