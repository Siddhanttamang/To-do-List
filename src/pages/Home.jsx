import  MovieCard  from "../compoments/MovieCard"
import { useState,useEffect } from "react"
import { searchMovies,getPopularMovies } from "../services/api";
import "../css/Home.css"
function Home(){
    
    const[searchQuery,setSearchQuery]=useState("");
    const[movies,setMovies]= useState([]);
    const[error,setError]=useState(null);
    const[loading,setLoading]=useState(true);
    
    useEffect(()=>{
        const loadPopularMovies= async()=>{
            try{
                const popularMovies= await getPopularMovies();
                setMovies(popularMovies);
            }
            catch(err){
                setError("failed to load movies..");
                console.log(err)


            }finally{
                setLoading(false)

            }
        }
        loadPopularMovies()
    },[]);
    const handleSearch=(e)=>{
        e.preventDefault();
        alert("searching "+searchQuery);
        setSearchQuery(searchQuery);
    }
    return (
    <div className="home">
        <form onSubmit={handleSearch} className="search-form">
            <input 
            type="text" 
            placeholder="Search for movies" 
            className="search-input"
            value={searchQuery}
            onChange={(e)=>setSearchQuery(e.target.value)}
            />
        <button className="search-button" type="submit">Search</button>
        </form>
        <div className="movie_grid">
            {movies.map((movie) =>( 
            movie.title.toLowerCase().startsWith(searchQuery)&&
            (<MovieCard movie={movie} key={movie.id}/>)
            
            ))}
        </div>

    </div>);
}

export default Home