import React from 'react';
import Train from './Train';
import axios from 'axios'
import { useEffect, useState } from 'react';
import './App.css';




const AllTrains = () => {

    const [trains, setTrains] = useState([]);
    const headers = { 'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE2OTAwMDU0NTgsImNvbXBhbnlOYW1lIjoiVGFyaW4gQXBwIiwiY2xpZW50SUQiOiJmZDJjMzdmOS1jYWI2LTQ3MDItYmE1ZC02MTZhZTE2NDQ2ZjIiLCJvd25lck5hbWUiOiIiLCJvd25lckVtYWlsIjoiIiwicm9sbE5vIjoiMjAwMDMyMTUzMDA0NyJ9.ChFT082Ahm9qDj9Z5GLO9tlcpeUQCrVZKXCxQtKgtk0' };
    const trainsData = async () => {
        try{
        const country = await axios.get('http://20.244.56.144:80/train/trains', {headers});
        setTrains(country.data);
        console.log(country.data)
        }
        catch(err){
        console.log(err);
        }
    }
    useEffect(()=>{
        trainsData();
    },[]);

    const trainDetails = () => {
        <Train />
        console.log("hello");
    }

    return (
        <div className='alltrains'>

            {
               trains && trains.map((train) => {
                    return(
                        <div className='train' onClick={trainDetails} key={train.name}>
                        <h3>{train.trainName}</h3>
                        <h4>{train.price.AC}</h4>
                        </div>
                    )

                })
            }
           
        </div>
    );
}

export default AllTrains;