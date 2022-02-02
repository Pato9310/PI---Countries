import './App.css';
import React from 'react';
import { Route, Routes} from 'react-router-dom';
import LandingPage from './Components/LandingPage/LandingPage';
import Home from './Components/Home/Home';
import Countries from './Components/Countries/Countries';
import CountryDetail from './Components/CountryDetail/CountryDetail';
import TurismActivity from './Components/TurismActivity/TurismActivity';


function App() {
  return (
    <>
      <Routes>
        <Route exact path="/" element={<LandingPage/>}/>
        <Route exact path="/home" element={<Home/>}/>
        <Route exact path="/countries" element={<Countries/>}/>
        <Route exact path="/countries/:id" element={<CountryDetail/>}/>
        <Route path="/create-activity" element={<TurismActivity/>}/>
      </Routes>
    </>
  );
}

export default App;
