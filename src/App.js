import logo from './logo.svg';
import './App.css';
import axion from 'axios';
import {useState} from 'react';


function App() {
  //
  const [listCars, setListCars] = useState([]);

  const getCars = (item) => {
    console.log("searching ...", item);
    
    axios.get(`https://pokeapi.co/api/v2/pokemon/${item}`)
      .then( (cars) => {
        reciveData(cars.data);
      })
      .catch((err) => {
        errorOnSearch(err);
      }); 
  };

  const reciveData = (data) => {
    console.log(data);
    setListPokemon((listCars) => [...listCars, data]);
  };


  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
