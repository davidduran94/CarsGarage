import "../styles/car.css"
import React from "react";
import axios from 'axios';

function Car(props:any){
    
    let changeStatusCar = (evt : any) => {
        //evt.preventDefault();
        let car = props.data;
        car.status = car.status ? false : true;
        console.log("searching ...", car);        
        axios.post(`http://localhost:3000/cars/update`, car)
        .then( (cars) => {
            evt.target.checked = car.status;
        })
        .catch((err) => {
            //errorOnSearch(err);
        });  
    }

    return (
        <div className="poke">
            <img className="poke_img" width="200px" src={props.data.image} alt="car"/>
            <div className="info__car">
                <p className="poke_id">{props.data._id}</p>
                <p className="poke_name">{props.data.make}</p>
                <p className="poke_name">{props.data.model}</p>
            </div>
            <p className="poke_name">{props.data.description}</p>
            <p className="poke_name">{props.data.km}</p>
            <p className="poke_name">{props.data.estimatedate}</p>
            <div>
                <p>¿En Mantenimiento?</p>
                <label className="switch"> 
                    <input onChange={changeStatusCar} checked={props.data.status} type="checkbox"/>
                    <span className="slider round"></span>
                </label>
            </div>

        </div>
    )
}

export default Car;