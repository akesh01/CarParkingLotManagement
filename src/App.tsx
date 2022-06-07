import React from 'react';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ParkingLotCreation from './pages/ParkingLotCreation';
import CarDeregister from './pages/CarDeregister';

function App() {
      
  return (
    <div className="App">
      <h1>Car Parking Management</h1>
      <BrowserRouter>
        <Routes>
              <Route element={<ParkingLotCreation/>}  path='/'/>
              <Route  element={<CarDeregister/>} path='/carderegister'/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
