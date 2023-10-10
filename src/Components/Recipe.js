import React, { useEffect, useState } from 'react'

export default function Recipe() {
  const [recipe, setRecipe] = useState([]);
  const[itemsholder,setItemsholder] =useState("")
  const fetchdata = () => {
    fetch(
    `https://api.edamam.com/search?q=${itemsholder}&app_id=0c189348&app_key=4f283f154b45f9ce6a8bc705c518e076	&from=0&to=30&calories=591-722&health=alcohol-free`)
      .then(res => res.json())
      .then(data => {
        setRecipe(data.hits)
      })
  }
  useEffect(() => {
    fetchdata()
  }, [itemsholder
  ])
  return (<div>{
    recipe.map((val) => {
      return (<div>
      <div>
        <input type='text' placeholder='Search items here' onChange={(e)=>setItemsholder(e.target.value)}/>
         </div>
         <div>
        <h1>{val.recipe.title}</h1>
        <img src ={val.recipe.image}/>
      </div>
      </div>)
    })
  }
  </div>

  )
}
