import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';

const API_key="316df403b7ce46c1b11191102220201";


const CityWeather= props =>
{  
    
    const {Name}= useParams();
    const [location, SetLocation ]=useState(Name);
      const [weatherr,setWeatherr]=useState({
         name : location,
     
      });
   
        const newloc =() =>
        {
            return({});
        }
    const update= async () =>
    {
        const waitres= await fetch(`http://api.weatherapi.com/v1/current.json?key=${API_key}&q=${location}&aqi=no`)
         const data= await waitres.json();
         const newweather= 
         {
             name : data.location.name ,
             icon : data.current.condition.icon ,
             tempreture : data.current.temp_c
             
         }
         setWeatherr(newweather);
    }
    useEffect(update, [Location]);
   return(

<div className='CityWeather-page'>

<img src={weatherr.icon} alt='help'/>
<h1>{weatherr.name}</h1> 
    <h2>{weatherr.tempreture} C°</h2>
   
    </div>
    )
}









export default CityWeather