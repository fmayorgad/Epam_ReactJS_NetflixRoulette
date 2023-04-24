import React, { useState, useEffect, useRef } from "react";
import { SearchForm } from '../../Components/SearchForm/SearchForm';
import { GenreSelector } from '../../Components/GenreSelector/GenreSelector';
import { SortControl } from '../../Components/SortControl/SortControl';
import { MovieTile } from '../../Components/MovieTileComponent/MovieTile';
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

const movieProps = {
    urlImage: 'https://lumiere-a.akamaihd.net/v1/images/image_b88fdde2.jpeg?region=0,0,540,810&width=480',
    name: 'Titanic in the desert',
    releaseYear: 2033,
    genres: ['Drama', 'Action', 'Romance'],
    rating: 9.4,
    duration: '2h 40min',
    description: 'this is a good movie'
};
export function MovieListPage(props) {

    const [searchValue, setSearchValue] = useState('');
    const [selectedGenre, setSelectedGenre] = useState(0);
    const [sortValue, setSortValue] = useState(1);
    const [selectedMovieTile, setselectedMovieTile] = useState(null);


    const onSearch = function (input) {
        setSearchValue(input);
    }

    const onSelectGenre = function (genre) {
        setSelectedGenre(genre);
    }

    const onSort = function (sortValue) {
        setSortValue(sortValue);
    }

    const onSelectMovieTile = function (genre) {
        console.log(genre)
    }

    useEffect(() => {
        console.log(props);
        console.log(searchValue);
    }, []);

    return (
        <>
            <div>
                <section>
                    <SearchForm onSearch={onSearch} searchQuery='Drama' />
                </section>

                <section>
                    <div className="genresortContainer">
                        <GenreSelector selectedGenre={selectedGenre} genreList={genreList} onSelectGenre={onSelectGenre} />
                        <SortControl onChange={onSort} selected={sortValue} options={sortOptions} />
                    </div>

                    <div>
                        <MovieTile {...movieProps} onSelectMovieTile={onSelectMovieTile} />
                    </div>
                </section>
            </div>
        </>
    )
}