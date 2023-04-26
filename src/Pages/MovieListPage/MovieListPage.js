import React, { useState, useEffect, useRef } from "react";
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
    { id: 2, name: 'terror' },
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

const movieProps = [{
    urlImage: 'https://lumiere-a.akamaihd.net/v1/images/image_b88fdde2.jpeg?region=0,0,540,810&width=480',
    name: 'Titanic in the desert',
    releaseYear: 2033,
    genres: ['Drama', 'Action', 'Romance'],
    rating: 9.4,
    duration: '2h 40min',
    description: 'this is a good movie',
    id: 1
},
{
    urlImage: 'https://cdn.marvel.com/content/1x/antmanandthewaspquantumania_lob_crd_03.jpg',
    name: 'ANT MAN QUANTUMANIA',
    releaseYear: 2023,
    genres: ['Drama', 'Action'],
    rating: 6.4,
    duration: '1h 50min',
    description: 'Solo se sabe que Scott Lang será un personaje clave para este fin. Vemos en los tráilers que Kang negocia con Ant-Man para que ambos salgan beneficiados, pero al final el villano le traiciona.    Lang desea recuperar el tiempo perdido junto a su hija, mientras que el villano desea salir del mundo cuántico. Por este motivo, Kang envía al protagonista a conseguir un raro elemento en el microverso.',
    id: 2
}
];

export function MovieListPage(props) {

    const [searchValue, setSearchValue] = useState('');
    const [selectedGenre, setSelectedGenre] = useState(0);
    const [sortValue, setSortValue] = useState(1);
    const [selectedMovieTile, setselectedMovieTile] = useState(null);
    const [movieList, setMovieList] = useState(movieProps);
    let consumingFetch = false;
    let controller = new AbortController();

    const onSearch = function (input) {
        setSearchValue(input);
    }

    const onSelectGenre = function (genre) {
        setSelectedGenre(genre);
    }

    const onSort = function (sortValue) {
        setSortValue(sortValue);
    }

    const onSelectMovieTile = function (movie) {
        console.log(movie)
        setselectedMovieTile(movie);
    }

    const searchMovies = async function () {

        consumingFetch && controller.abort();

        consumingFetch = true;

        controller = new AbortController();
        const signal = controller.signal

        // Register a listenr.
        signal.addEventListener("abort", () => {
            console.log("aborted!")
        })
        const response = await fetch("http://localhost:4000/movies?searchBy=title", {
            signal: controller.signal
        });
        const movies = await response.json();

        console.log(movies)
    }

    useEffect(() => {
        searchMovies();
    }, []);

    return (
        <>
            <Header />
            <div className="mainBodyPage">
                <section>
                    {
                        selectedMovieTile ? <MovieDetails {...selectedMovieTile} />
                            : <SearchForm onSearch={onSearch} searchQuery='Drama' />
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