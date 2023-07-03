import React from 'react'

const CountrySelect = ({countries, onCountrySelected}) => {


    const handleChange = event => {
        onCountrySelected(event.target.value)
    }
return (
    <select defaultValue='' onChange={handleChange}>
        <option>
            Choose a Country? 
        </option>
        {countries.map(country => {

        return(
        <option key={country.cca3} value={country.cca3}>
            {country.name.official}
        </option>
        )
})}

    </select>
    )}


export default CountrySelect