import React, { useEffect, useState } from 'react'

export default function Country() {
  const[country,setCountry] = useState([]);
  // const[]
  const fetchdata =()=>{
    fetch("https://restcountries.com/v3.1/all")
    .then(res=>res.json())
    .then(data=>{
      console.log("before",data)
      setCountry(data)
    })
  }
  useEffect(()=>{
    fetchdata()
  },[])
  return (
    <div> {
            country.map((val)=>{
              return (<div>
                <h1></h1>
                <h1>{val.capital}</h1>
                <img src={val.flags.png}/>
                </div>)
            })


          }
    </div>
  )
}
