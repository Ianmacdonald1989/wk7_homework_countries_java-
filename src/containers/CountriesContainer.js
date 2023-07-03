import React, { useState, useEffect } from 'react';
import './CountriesContainer.css';
import CountrySelect from '../components/CountrySelect';
import Country from '../components/Country';


const CountryContainer = () => {
    const [countries, setCountries] = useState([]);
    const [selectedCountryCCA3Code, setSelectedCountryCCA3Code] = useState('');
    

useEffect(() => {
    getCountries();
}, [])

    const getCountries = function(){
        fetch('https://restcountries.com/v3.1/all')
        .then(res => res.json())
        .then(countries => setCountries(countries))
    }

    const handleCountrySelected = cca3 => {
        setSelectedCountryCCA3Code(cca3)
    }

const totalPopulation = countries.reduce ((total, country) => {
   
  return total + country.population
}, 0)

console.log(totalPopulation)

    const selectedCountry = countries.find(country => country.cca3 === selectedCountryCCA3Code)

    return(
        <div>
            <CountrySelect countries={countries} onCountrySelected={handleCountrySelected}/>
            <Country country={selectedCountry}/>
            <p>Total Population: {totalPopulation}</p>
            
        </div>
    )
    }

export default CountryContainer;





