import React from 'react'
import classes from '../../UI/RecipeCard.module.css'
import { useNavigate } from 'react-router-dom'

const RecipeCard = ({recipe}) => {

    const navigate = useNavigate()

    const recipeDetailHandler = () => {
        navigate(`/recipe-details/${recipe.recipe_id}`)
    }

    return (
        <main className={classes.main_body_container}>
        <div className={classes.card_container}>
            <img src={recipe.image_url} alt={recipe.recipe_name} className={classes.img} />
            <h2>{recipe.recipe_name}</h2>
            <button className={classes.button} onClick={recipeDetailHandler}>See More</button>
        </div>
        </main>
    )
}

export default RecipeCard