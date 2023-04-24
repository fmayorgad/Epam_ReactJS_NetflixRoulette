import './App.css';
import { MovieListPage } from './Pages/MovieListPage/MovieListPage';

function App() {

  const genreList = [
    { id: 0, name: 'all' },
    { id: 1, name: 'drama' },
    { id: 2, name: 'terror' },
    { id: 3, name: 'comedy' },
    { id: 4, name: 'documentary' },
    { id: 5, name: 'crime' },
  ]

  const movieProps = {
    urlImage: 'https://lumiere-a.akamaihd.net/v1/images/image_b88fdde2.jpeg?region=0,0,540,810&width=480',
    name: 'Titanic in the desert',
    releaseYear: 2033,
    genres: ['Drama', 'Action', 'Romance'],
    rating: 9.4,
    duration: '2h 40min',
    description: 'this is a good movie'
  };

  const onSearch = function (input) {
    console.log(input);
  }

  const onSelectGenre = function (genre) {
    console.log(genre)
  }

  const onSelectMovieTile = function (genre) {
    console.log(genre)
  }

  return (
    <div className="App">
      {/* <SearchForm onSearch={onSearch} searchQuery='Drama' />
      <GenreSelector selectedGenre={0} genreList={genreList} onSelectGenre={onSelectGenre} />
      <MovieTile onSelectMovieTile={onSelectMovieTile} {...movieProps}/> */}
      <MovieListPage />
    </div>
  );
}

export default App;
