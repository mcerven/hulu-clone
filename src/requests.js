// API: https://www.themoviedb.org/settings/api
export const baseUrl = 'https://api.themoviedb.org/3';
export const apiKey = 'b5fe20025518c6ee92358aabf800f360';

export default {
    getMovieDetails: id => `${baseUrl}/movie/${id}?api_key=${apiKey}`,
}
