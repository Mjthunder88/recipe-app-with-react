import React, { useEffect, useState } from 'react'
import classes from '../../UI/DetailScreen.module.css'
import { useParams } from 'react-router-dom';
import axios from 'axios';

// ! Fix banner background picture so that it fits the size
// ! main screen is not displaying all the images? is that normal? 
// ! How do I get my footer to stay at the bottom. 
const DetailScreen = () => {  
  const {recipeId} = useParams()
  const [recipe, setRecipe] = useState('')

  useEffect(() => {
    axios.get(`https://recipes.devmountain.com/recipes/${recipeId}`)
    .then((response) => {
      setRecipe(response.data)
      // console.log(response.data)
    })
    .catch((error) => console.log(error))
  }, [])

  return (
    <section>
      <div style={{
        background: `linear-gradient(
          190deg,
          rgba(0, 0, 0, 0.8),
          rgba(0, 0, 0, 0.8)),
          url(${recipe.image_url})`,
        backgroundSize: "cover",
        width: "100%",
        height: "25em",
        marginBottom: "2rem",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundRepeat: "no-repeat"
      }}>
        <h1 className={classes.banner_title}>{recipe.recipe_name}</h1>
      </div>
      <main>
        <div className={classes.recipe_ingredients}>
          <h1>Recipe</h1>
          <h4>Prep Time: {recipe.prep_time}</h4>
          <h4>Cook Time: {recipe.cook_time}</h4>
          <h4>Serves: {recipe.serves}</h4>
          <h1>Ingredients</h1>
          {recipe.ingredients && recipe.ingredients.map((item) => {
            return <h4>{item.quantity} {item.ingredient}</h4>
          })}
          {}
        </div>
        <div className={classes.instructions_container}>
          <h1>Instructions</h1>
          <p>{recipe.instructions && JSON.parse(recipe.instructions)}</p>
        </div>
      </main>
    </section>
  );
};

export default DetailScreen;
