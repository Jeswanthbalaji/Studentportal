import React, { useEffect, useState } from 'react'

export default function Products() {
  const [products, setProducts] = useState([]);
  const fetchdata = () => {
    fetch(" https://fakestoreapi.com/products")
      .then(res => res.json())
      .then(data => {
        console.log(data)
        setProducts(data)
      })             
  }
  useEffect(() => {
    fetchdata()
  }, [])
  return (
    <div>
      {
        products.map((val) => {
          return (<div>
            <h1>Id:{val.id}</h1>
            <h1>Title:{val.title}</h1>
            <img src={val.image} />
            <h2>Category{val.category}</h2>
            <h2>Rating:{val.rating.rate}</h2>
            <h3>Count:{val.rating.count}</h3>
            <h3>Description:{val.description}</h3>

          </div>)

        })
      }
    </div>
  )
}
