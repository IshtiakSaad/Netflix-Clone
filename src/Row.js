import React, { useState, useEffect } from 'react';
import axios from './axios';
import './Row.css';

const base_URL = "https://image.tmdb.org/t/p/original/";

function Row({title, fetchURL, isLargeRow}) {
    const [movies, setMovies] = useState([])

    useEffect(() => {
        async function fetchData() {
            const request = await axios.get(fetchURL);
            setMovies(request.data.results);
            return request;
        }
        fetchData();
    }, [fetchURL]);


    return (
        <div className='row'>
            <h2>{title}</h2>

            <div className='row__posters'>
                {movies.map( movie => (
                    <img 
                        key = {movie.id}
                        className={`row__poster ${isLargeRow && "row_posterLarge"}`}
                        src={`${base_URL}${ isLargeRow ? movie.poster_path : movie.backdrop_path}`} 
                        alt={movie.original_name}
                    />
                ))}
            </div>
        </div>
    );
}

export default Row;
