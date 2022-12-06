import React, { useEffect, useState } from 'react'
import AdBanner from './AdBanner'
import axios from 'axios'
import RecipeCard from '../recipeCard/RecipeCard'
import classes from '../../UI/HomeScreen.module.css'
import {BiSearch} from 'react-icons/bi'

const HomeScreen = () => {  

  const [search, setSearch] = useState('')
  const [recipeList, setRecipeList] = useState([])

  const searchBarHandler = () => {
    recipeList.filter((recipe) => {
      let title = recipe.recipe_name.toLowerCase()
      let searchparams = search.toLowerCase()
      return title.includes(searchparams)
    })
    .map((recipe) => {
      return <RecipeCard recipe={recipe} />
    })
  }

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
// ! Need help putting search icon inside of an input 
// ! Need help with understanding the logic for the searchbar Handler 
  return (
    <div>
      <AdBanner />
      <span className={classes.search_bar}>
      <BiSearch size="1.5em" color="#DB7533" />
      <input 
      type="text" 
      placeholder='Search for a Recipe' 
      className={classes.input}
      value={search}
      onChange={(event) => setSearch(event.target.value)}
      />
      </span>
      <RecipeCard />
    </div>
  )
}

export default HomeScreen