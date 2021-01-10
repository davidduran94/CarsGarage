import React from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios';
import CarForm from './components/CarForm';
import CarTable from './components/CarTable';
import { useState, useEffect } from 'react';

function App() {

  useEffect(() => {
    console.log("Actualiza data");
    let cars:any = []
    getCars();
  }, []);

  const [listCars, setListCars] = useState([]);

  const getCars = () => {
    axios.get(`http://localhost:3000/cars/`)
      .then( (cars) => {
        reciveData(cars.data);
      })
      .catch((err) => {
        errorOnSearch(err);
      });
    
  };

  const newCar = (item : any) => {
    console.log("saving ...", item);
    axios.post(`http://localhost:3000/cars/generate`, item)
      .then( (cars) => {
        console.log("cars::::" + cars)
        getCars();
      })
      .catch((err) => {
        errorOnSearch(err);
      });
    
  };

  const errorOnSearch = (err : any) => {
    console.log("Car err0r Found");
  }

  const reciveData = (data:any) => {
    console.log(data);
    setListCars(data.data);
  };


  return (
    <div className="App">
      <header className="">
       <h1>Car Garage</h1>
       <CarForm onNewCar={newCar}></CarForm>
       {
         listCars.length == 0 ? <h3>No cars captured yet</h3> : <h3></h3>
       }
      </header>

      <CarTable listCars={listCars}></CarTable>
    </div>
  );
}

export default App;
