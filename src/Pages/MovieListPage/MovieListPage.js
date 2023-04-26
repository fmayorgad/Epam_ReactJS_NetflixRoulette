import React, { useState, useEffect, useRef, useCallback } from "react";
import { SearchForm } from '../../Components/SearchForm/SearchForm';
import { GenreSelector } from '../../Components/GenreSelector/GenreSelector';
import { SortControl } from '../../Components/SortControl/SortControl';
import { MovieTile } from '../../Components/MovieTileComponent/MovieTile';
import { MovieDetails } from '../../Components/MovieDetails/MovieDetails';
import { Header } from '../../Components/Header/Header';
import './MovieListPage.css';

const genreList = [
    { id: 0, name: 'all' },
    { id: 1, name: 'drama' },
    { id: 2, name: 'horror' },
    { id: 3, name: 'comedy' },
    { id: 4, name: 'documentary' },
    { id: 5, name: 'crime' },
];

const sortOptions = [
    {
        id: 1,
        desc: 'Release Date'
    },
    {
        id: 2,
        desc: 'Title'
    }
];


export function MovieListPage(props) {

    const [searchValue, setSearchValue] = useState('');
    const [selectedGenre, setSelectedGenre] = useState(0);
    const [sortValue, setSortValue] = useState(1);
    const [selectedMovieTile, setselectedMovieTile] = useState(null);
    const [movieList, setMovieList] = useState([]);
    const [consumingFetch, setConsumingFetch] = useState(false);
    const [controller] = useState(new AbortController());
    const [queryParams] = useState(new URLSearchParams());
    const defaultSearch = 'Jumanji';

    const onSearch = function (input) {
        queryParams.set('searchBy', 'title');
        queryParams.set('search', input);
        console.log(input)
        setSearchValue(input);
    }

    const onSelectGenre = function (genre) {
        setSelectedGenre(genre);
        if (genre.id === 0) {
            queryParams.delete('searchBy');
            queryParams.delete('search');
        } else {
            queryParams.set('searchBy', 'genres');
            queryParams.set('search', genre.name);
        }
    }

    const onSort = function (sortValue) {
        setSortValue(sortValue);
    }

    const onSelectMovieTile = function (movie) {
        setselectedMovieTile(movie);
    }

    const searchMovies = useCallback(async () => {

        consumingFetch && controller.abort();

        setConsumingFetch(true);

        const signal = controller.signal

        //create queryparams
        //searchValue.length > 0 && queryParams.append('title', searchValue);

        const response = await fetch("http://localhost:4000/movies?" + queryParams.toString(), {
            signal: controller.signal
        });

        const movies = await response.json();

        let moviesmapped = movies.data.map(m => {
            let movie = {};
            movie.urlImage = m.poster_path;
            movie.name = m.title;
            movie.releaseYear = m.release_date;
            movie.genres = m.genres;
            movie.rating = m.vote_average;
            movie.duration = m.runtime;
            movie.description = m.overview;
            movie.id = m.id;
            return movie;
        });

        signal.addEventListener("abort", () => {
            console.log("aborted!")
        });

        setConsumingFetch(false);
        setMovieList(moviesmapped)
    });

    useEffect(() => {
        searchMovies();
    }, [searchValue, selectedGenre]);

    return (
        <>
            <Header />
            <div className="mainBodyPage">
                <section>
                    {
                        selectedMovieTile ? <MovieDetails {...selectedMovieTile} />
                            : <SearchForm onSearch={onSearch} searchQuery={defaultSearch} />
                    }
                </section>

                <section className="mainSection">
                    <div className="genresortContainer">
                        <GenreSelector selectedGenre={selectedGenre} genreList={genreList} onSelectGenre={onSelectGenre} />
                        <SortControl onChange={onSort} selected={sortValue} options={sortOptions} />
                    </div>

                    <div className="moviesContainer">
                        {
                            movieList.map(movie => {
                                return <MovieTile key={movie.id} {...movie} onSelectMovieTile={onSelectMovieTile} />
                            })
                        }
                    </div>
                </section>
            </div>
        </>
    )
}