import axios from 'axios';

const movieBaseUrl = 'https://api.themoviedb.org/3';
const api_key = 'ebd17c8a2224cb338500df2b82ecc5b9';

const movieByGenreBaseURL='https://api.themoviedb.org/3/discover/movie?api_key='+api_key;
console.log("Movie by Genre URL: " + movieByGenreBaseURL);

    const getTrendingVideos = axios.get(movieBaseUrl + '/trending/all/day?api_key='+api_key);
    // const getMovieByGenreId=(id)=>
    // axios.get(movieByGenreBaseURL+"&with_genres="+id) // this method directly returns the axios get request
    const getMovieByGenreId = (id)=>{
        // console.log("The id inside the getMovieByGenreId is : ", id);
        return axios.get(movieByGenreBaseURL+'&with_genres='+id);
    }
    // const getMovieByGenreId = axios.get(movieByGenreBaseURL+'@with_genres='+id);

export default {
    getTrendingVideos,
    getMovieByGenreId,
}