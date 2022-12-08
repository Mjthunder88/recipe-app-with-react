import React, { useEffect, useState } from 'react'
import AdBanner from './AdBanner'
import axios from 'axios'
import RecipeCard from '../recipeCard/RecipeCard'
import classes from '../../UI/HomeScreen.module.css'
import {BiSearch} from 'react-icons/bi'

const HomeScreen = () => {  

  const [search, setSearch] = useState('')
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


  const searchBarHandler = 
    recipeList.filter((recipe) => {
      let title = recipe.recipe_name.toLowerCase()
      let searchParams = search.toLowerCase()
      return title.includes(searchParams)
    })
    .map((recipe) => {
      return <RecipeCard key={recipe.recipe_id}  recipe={recipe} />
    })
  


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
      <section className={classes.card_container}>
      {searchBarHandler}
      </section>
    </div>
  )
}

export default HomeScreen