import { baseUrl, apiKey } from './requests';

const mediaType = 'movie';

export default [
    {
        path: "trending",
        text: "Trending",
        getUrl: (page = 1) => `${baseUrl}/trending/${mediaType}/week?api_key=${apiKey}&page=${page}`,
    },
    {
        path: "top-rated",
        text: "Top Rated",
        getUrl: (page = 1) => `${baseUrl}/${mediaType}/top_rated?api_key=${apiKey}&page=${page}`,
    },
    {
        path: "action",
        text: "Action",
        getUrl: (page = 1) => `${baseUrl}/discover/${mediaType}?api_key=${apiKey}&with_genres=28&page=${page}`,
    },
    {
        path: "comedy",
        text: "Comedy",
        getUrl: (page = 1) => `${baseUrl}/discover/${mediaType}?api_key=${apiKey}&with_genres=35&page=${page}`,
    },
    {
        path: "horror",
        text: "Horror",
        getUrl: (page = 1) => `${baseUrl}/discover/${mediaType}?api_key=${apiKey}&with_genres=27&page=${page}`,
    },
    {
        path: "romance",
        text: "Romance",
        getUrl: (page = 1) => `${baseUrl}/discover/${mediaType}?api_key=${apiKey}&with_genres=10749&page=${page}`,
    },
    {
        path: "mystery",
        text: "Mystery",
        getUrl: (page = 1) => `${baseUrl}/discover/${mediaType}?api_key=${apiKey}&with_genres=9648&page=${page}`,
    },
    {
        path: "scifi",
        text: "Sci-Fi",
        getUrl: (page = 1) => `${baseUrl}/discover/${mediaType}?api_key=${apiKey}&with_genres=878&page=${page}`,
    },
    {
        path: "western",
        text: "Western",
        getUrl: (page = 1) => `${baseUrl}/discover/${mediaType}?api_key=${apiKey}&with_genres=37&page=${page}`,
    },
    {
        path: "animation",
        text: "Animation",
        getUrl: (page = 1) => `${baseUrl}/discover/${mediaType}?api_key=${apiKey}&with_genres=16&page=${page}`,
    },
];