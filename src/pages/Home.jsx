import  MovieCard  from "../compoments/MovieCard"
import Example from "../pages/Example"
import { useState } from "react"
function Home(){
    const handleSearch=()=>{
        alert("searching "+searchQuery)
    }
    const[searchQuery,setSearchQuery]=useState("");
    const movies=[
        {id:1,title:"John wick",release_date:"2022"},
        {id:2,title:"Avengers",release_date:"2023"},
        {id:3,title:"Naruto",release_date:"2020"},
        {id:4,title:"Dune",release_date:"2021"}
    ]
    return (
    <div className="home">
        <div className="example">
            <Example example={searchQuery}/>
        </div>
        <form onSubmit={handleSearch} className="search-form">
            <input 
            type="text" 
            placeholder="Search for movies" 
            className="search-input"
            onChange={(e)=>setSearchQuery(e.target.value)}
            />
        <button className="search-button" type="button">Search</button>
        </form>
        <div className="movie_grid">
            {movies.map((movie) =>(
                
            <MovieCard movie={movie} key={movie.id}/>
            
            ))}
        </div>

    </div>);
}

export default Home