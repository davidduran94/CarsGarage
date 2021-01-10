import React from "react";
import '../styles/carForm.css';

function CarForm(props : any){
    const style = {

    }

    let newCar = (evt : any) => {
        evt.preventDefault();
        let car:any = {};
        car.maker = evt.target.carMaker.value;
        car.model = evt.target.carModel.value;
        car.image = evt.target.carImg.value;
        car.description = evt.target.carDescription.value;
        car.km = evt.target.carKm.value;

        props.onNewCar(car);
    }

    return (
        <div className="container__form">
        <form onSubmit={newCar}>
            <div className="cont__info">
                <label>Maker</label>
                <input type="text" name="carMaker"/>
            </div>

            <div className="cont__info">
                <label>Model</label>
                <input type="text" name="carModel"/>
            </div>
 
            <div className="cont__info">
                <label>ImageURL</label>
                <input type="text" name="carImg"/>
            </div>

            <div className="cont__info">
                <label>Description</label>
                <input type="text" name="carDescription"/>
            </div>


            <div className="cont__info">
                <label>KMs</label>
                <input type="number" name="carKm"/>
            </div>

            <input className="button" type="submit" value="Add Car" />
        </form>
        </div>
    )
}

export default CarForm;