import React from 'react'

const Country = ({country}) => {
    if (!country){
  return null}


  return(
    <>
    <h3>Name: {country.name.official}</h3>
    <h4>Flag: {country.flag}</h4>
    <h5>Population: {country.population}</h5>
    </>
  )




}

export default Country