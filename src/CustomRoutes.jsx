import { Route, Routes } from 'react-router';
import Home from './Home';
import React from 'react';
import CityWeather from './CityWeather';



const CustomRoutes = () => (
   
        <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/Projects/:Name' element={<CityWeather/>}></Route>
      </Routes>
    )
    


export default CustomRoutes;