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
    let cars:any = [{
      "make":"Nissan",
      "model":"Versa",
      "estimatedate":"2021/12/01",
      "id":3341,
      "km":90000,
      "image":"https://images.kavak.services/images/32274/nissan-versa-sense2019-frontal-lateral-piloto-cercana-1610176416274.jpg?d=540x310",
      "description":" engine tuning ",
      },
      {
      "make":"Honda",
      "model":"Civic",
      "estimatedate":"2020/20/12",
      "id":3342,
      "km":90000,
      "description":" engine tuning ",
      "image":"https://images.kavak.services/images/4258/ford-fusion-sport-2017-frontal_lateral_piloto_cercana-1556934294750.jpg?d=540x310"
      } ,
      {
      "description":" oil change ",
      "make":" Volkswaguen",
      "model":"Tiguan",
      "km":13500,
      "id":3343,
      "image":"https://images.kavak.services/images/3983/bmw-serie-3-330e-sport-line-hibrido-2018-frontal_lateral_piloto_cercana-1555973196811.jpg?d=540x310"
      },
      {
      "description":" change of pads ",
      "make":" Nissan ",
      "model":"Sentra",
      "km":6000,
      "id":3344,
      "image":"https://images.kavak.services/images/32737/EXTERIOR-frontal_lateral_piloto_cercana-16100449236852.jpg?d=540x310"
      },
      {
      "description":" change of pads ",
      "make":"Volkswagen",
      "model":"Vento",
      "km":80050,
      "id":3345,
      "image":"https://images.kavak.services/images/32638/EXTERIOR-frontal_lateral_piloto_cercana-16092818413357.jpg?d=540x310"
      },
      {
      "description":"Change Transmission (CVT)",
      "make":"Chevrolet",
      "model":"Aveo NG",
      "estimatedate":"2021/09/07",
      "km":33460,
      "id":900,
      "image":"https://images.kavak.services/images/32247/EXTERIOR-frontal_lateral_piloto_cercana-16091714838490.jpg?d=540x310"
      },
      {
      "description":"Change ligths",
      "make":"Chevrolet",
      "model":"Spark",
      "km":16098,
      "id":3347,
      "image":"https://images.kavak.services/images/32244/hyundai-creta-gls2018-frontal-lateral-piloto-cercana-1610173728872.jpg?d=540x310"
      }]
    setListCars(cars);
  }, []);

  const [listCars, setListCars] = useState([]);

  const getCars = (item : any) => {
    console.log("searching ...", item);
    axios.get(`https://pokeapi.co/api/v2/pokemon/${item}`)
      .then( (cars) => {
        reciveData(cars.data);
      })
      .catch((err) => {
        errorOnSearch(err);
      });
    
  };

  const newCar = (item : any) => {
    console.log("saving ...", item);
    let newCar:any = [item, ...listCars]
    setListCars( newCar );
    axios.get(`https://pokeapi.co/api/v2/pokemon/${item}`)
      .then( (cars) => {
        //setListCars((listCars) => [...listCars, item]);
        reciveData(cars.data);
      })
      .catch((err) => {
        errorOnSearch(err);
      });
    
  };

  const errorOnSearch = (err : any) => {
    console.log("Car not Found");
  }

  const reciveData = (data:any) => {
    console.log(data);
    setListCars(data);
  };

  const handleSearch = (item:any) => {
    getCars(item);
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
