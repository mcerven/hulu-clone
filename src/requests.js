// API: https://www.themoviedb.org/settings/api
export const baseUrl = 'https://api.themoviedb.org/3';
export const apiKey = 'b5fe20025518c6ee92358aabf800f360';

export default {
    getMovieDetails: id => `${baseUrl}/movie/${id}?api_key=${apiKey}`,
    getMoviesByTitle: title => `${baseUrl}/search/movie?api_key=${apiKey}&language=en-US&query=${title}&page=1&include_adult=false`,
}
