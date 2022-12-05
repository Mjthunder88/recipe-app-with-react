import React, { useEffect, useState } from 'react'
import AdBanner from './AdBanner'
import axios from 'axios'

const HomeScreen = () => {  


  const [recipeList, setRecipeList] = useState([])

  const recipes = () => {
    axios.get('https://recipes.devmountain.com/recipes')
    .then((response) => {
      console.log(response.data)
      setRecipeList(response.data)
    }).catch((error) => console.log(error))
  }

  useEffect(() => {
   recipes()
  }, [])

  return (
    <div>
      <AdBanner />
      {/* Much code from Part 2 will be placed around here. Do your best! */}
    </div>
  )
}

export default HomeScreen