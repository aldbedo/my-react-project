import React, { useState } from 'react'

function Cars() {

    const [car, setCar] = useState({year: 2024,
                                    make: "Honda",
                                    model: "Civic"});

    function handleYearChange(event){

        setCar( c => ({...c, year: event.target.value}));
    }
    
    function handleMakeChange(event){

        setCar( c => ({...c, make: event.target.value}));
    }

    function handleModelChange(event){

        setCar( c => ({...c, model: event.target.value}));
    }

    return(
        <div>
            <p>Your favorite car is: {car.make} {car.model} {car.year}</p>

            <input type="number" value={car.year} onChange={handleYearChange}/><br/>
            <input type="text" value={car.make} onChange={handleMakeChange}/><br/>
            <input type="text" value={car.model} onChange={handleModelChange}/>
        </div>
    );
}

export default Cars