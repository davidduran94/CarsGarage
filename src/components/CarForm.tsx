import React from "react";
import '../styles/carForm.css';

function CarForm(props : any){
    const style = {

    }

    let searchCars = (evt : any) => {
        evt.preventDefault();
        let name_car = evt.target.carName.value;
        props.onNewCarSearch(name_car);
    }

    return (
        <div className="container__form">
        <form onSubmit={searchCars}>
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
                <input type="number" name="carKM"/>
            </div>

            <input className="button" type="submit" value="Add Car" />
        </form>
        </div>
    )
}

export default CarForm;