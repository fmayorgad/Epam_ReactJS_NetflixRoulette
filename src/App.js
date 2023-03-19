import './App.css';
import {Counter} from './Components/Counter';
import {SearchForm} from './Components/SearchForm';

function App() {

  const onSearch = function(input){
    console.log(input);
  }

  return (
    <div className="App">
      <Counter initialValue='0'/>
      <SearchForm onSearch={onSearch} searchQuery='Drama' />
    </div>
  );
}

export default App;
