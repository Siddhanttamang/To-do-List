const API_KEY= "2b180db299b1af61c7334e69190494f1";
const BASE_URl= "https://api.themoviedb.org/3";


export const getPopularMovies =async()=>{
    const response= await fetch(`${BASE_URl}/movie/popular?api_key=${API_KEY}`);
    const data = await response.json();
    return data.results;
}

export const searchMovies =async()=>{
    const response= await fetch(`${BASE_URl}/search/movie?api_key=${API_KEY}&query=${encodeURIComponent(
        query
    )}`
    );
    const data = await response.json();
    return data.results;
}