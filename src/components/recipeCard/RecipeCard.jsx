import React from 'react'
import rat from '../../assets/rat.jpg'
import classes from '../../UI/RecipeCard.module.css'

const RecipeCard = () => {
    return (
        <main className={classes.main_body_container}>
        <div className={classes.card_container}>
            <img src={rat} alt="food_ratatouille" className={classes.img} />
            <h2>Ratatouille</h2>
            <button className={classes.button}>See More</button>
        </div>
        </main>
    )
}

export default RecipeCard