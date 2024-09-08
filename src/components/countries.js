import React from 'react'

import Country from './country';

import style from './countries.module.css'
import {v4 as uuidv4} from 'uuid';



const Countries = (props) => {
   
  return (
  <section className={style.countries}>
 {props.countries.map((country)=>{
    const countryNew={country,id:uuidv4()};
    return (<Country  onremoveCountry={props.onremoveCountry} {... countryNew} key={countryNew.id}/>);
 })}


  </section>
  );
};

export default Countries;
