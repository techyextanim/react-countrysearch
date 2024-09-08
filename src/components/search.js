
import React,{useEffect, useState} from 'react'

import './search.module.css'

const Search = (props) => {

    const [search,setSearch]=useState("");

    const handleSearch=(e)=>{
        setSearch(e.target.value)
    }

    useEffect(()=>{
        props.onSearch(search)
    },[search])
  return (
    <div style={{textAlign:"center"}} >
      <input onChange={handleSearch} type='text' placeholder='Search Here' value={search} />
    </div>
  )
}

export default Search;
