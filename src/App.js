import './App.css';
import { Counter } from './Components/Counter/Counter';
import { SearchForm } from './Components/SearchForm/SearchForm';
import {GenreSelector} from './Components/GenreSelector/GenreSelector'

function App() {

  const genreList = [
    { id: 0, name: 'all' },
    { id: 1, name: 'drama' },
    { id: 2, name: 'terror' },
    { id: 3, name: 'comedy' },
    { id: 4, name: 'documentary' },
    { id: 5, name: 'crime' },
  ]

  const onSearch = function (input) {
    console.log(input);
  }

  const onSelectGenre = function (genre) {
    console.log(genre)
  }

  return (
    <div className="App">
      <Counter initialValue={0} />
      <SearchForm onSearch={onSearch} searchQuery='Drama' />
      <GenreSelector selectedGenre={0}  genreList={genreList} onSelectGenre={onSelectGenre}  />
    </div>
  );
}

export default App;
