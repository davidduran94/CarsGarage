import '../styles/carTable.css';
import React  from "react";
import Car from "./Car";


function CarTable(props : any){
    
    return (
        <table>
            <thead>
            </thead>
            <tbody>
                {props.listCars.map((value:any, index:number) => {
                    return (
                        <tr key={index}>
                            <Car data={value}></Car>
                        </tr>
                    )
                })}
            </tbody>
        </table>
    );
}

export default CarTable;