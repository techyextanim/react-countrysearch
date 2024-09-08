import React from 'react'

import style from './country.module.css'

const Country = (props) => {
  
    
    const {name,flags,capital,population,area}=props.country;

    const handleRemoveCountry=(name)=>{
        props.onremoveCountry(name);
        
    };
  return (
   <article className={style.country}>
        <div>
        <img  className={style.flags} src={flags.png} alt={name.common}/>
        <h3>name :{name.common}</h3>
        <h3>population :{population}</h3>
        <h3>capital : {capital}</h3>
        <h3>area : {area}</h3>
        <button className={style.btn} onClick={()=>{
            handleRemoveCountry(name.common)
        }}>Remove Country</button>
        </div>

   </article>
  )
}

export default Country;
