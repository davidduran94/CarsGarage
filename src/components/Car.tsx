import "../styles/car.css"
import React from "react";
import axios from 'axios';

function Car(props:any){
    
    let changeStatusCar = (evt : any) => {
        //evt.preventDefault();
        let id = props.data.id;
        
        console.log("searching ...", id);        
        axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`)
        .then( (cars) => {
            //reciveData(cars.data);
        })
        .catch((err) => {
            //errorOnSearch(err);
        });  
    }

    return (
        <div className="poke">
            <img className="poke_img" width="200px" src={props.data.image} alt="car"/>
            <div className="info__car">
                <p className="poke_id">{props.data.id}</p>
                <p className="poke_name">{props.data.make}</p>
                <p className="poke_name">{props.data.model}</p>
            </div>
            <p className="poke_name">{props.data.description}</p>
            <p className="poke_name">{props.data.km}</p>
            <div>
                <p>¿En Mantenimiento?</p>
                <label className="switch"> 
                    <input onClick={changeStatusCar} disabled={props.data.status} type="checkbox"/>
                    <span className="slider round"></span>
                </label>
            </div>

        </div>
    )
}

export default Car;