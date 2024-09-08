import React, { useEffect, useState } from 'react';

import Countries from './components/countries';
import Search from './components/search';
import './app.css'

const url="https://restcountries.com/v3.1/all";

function App() {
  const [isLoading,setIsLoading]=useState(true);
  const [error,setError]=useState(null);
  const [countries,setCountries]=useState([]);
  const [filterdCountry,setFilterdCountry]=useState(countries)

  const fetchData= async (url)=>{
    setIsLoading(true);

    try{
      const response=await fetch(url);
      const data=await response.json();
      setCountries(data);
      setIsLoading(false);
      setError(null);
      setFilterdCountry(data)
      
    }catch(error){
    setError(error);
    setIsLoading(false);

    }

  };

  useEffect(()=>{
  fetchData(url);
}, []);

const handleRemove=(name)=>{
const filter=filterdCountry.filter((country)=>country.name.common !==name);
setFilterdCountry(filter)
};

const handleChange=(textValue)=>{
let value=textValue.toLowerCase();
const newCountries=countries.filter((country)=>{
  const countryName=country.name.common.toLowerCase()
  return countryName.startsWith(value)
});
setFilterdCountry(newCountries);
};

  return (
    <>
    <h1>Country App</h1>
    <Search onSearch={handleChange} />
    {isLoading && <h2>Loading ...</h2>}
    {error && <h2>{error.message}</h2>}
  {countries &&  (<Countries   countries={filterdCountry} 
  onremoveCountry={handleRemove}
    />)}
   
    </>
  );
};

export default App;
