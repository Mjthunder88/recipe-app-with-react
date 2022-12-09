import React, { useState } from "react";
import { Formik } from "formik";
import classes from '../../UI/NewRecipeScreen.module.css'

// ! Need to get inputs for ingreidents to show on screen 
// ! need it to collect the type of radio button they enter 

const NewRecipeScreen = () => {

  const [ingredients, setIngredients] = useState([])
  const [name, setName] = useState('')
  const [quantity, setQuantity] = useState('')

  const initialValues = {
    type: "",
    recipeName: "",
    imageURL: "",
    prepTime: "",
    cookTime: "",
    serves: "",
    ingredients: [],
    instructions: ""
  }

  const onSubmit = (values) => {
    values.ingredients = ingredients
    console.log(values)
  }

  const addIngredient = (event) => {
    setIngredients(ingredients => {
      return [...ingredients, { name, quantity}]
    })
    setName('')
    setQuantity('')
  }

  const ingredientNameHandler = event => {
    setName(event.target.value)
  }

  const ingredientQuantityHandler = event => {
    setQuantity(event.target.value)
  }


  return (
    <section>
      <h1>Tell us about your Recipe!</h1>
      <Formik initialValues={initialValues} onSubmit={onSubmit}>{({values, handleChange, handleSubmit}) => {
        return (
          <form onSubmit={handleSubmit}>
          <div className={classes.top_inputs}>
          <input type="text" 
          placeholder="Name" 
          value={values.recipeName} 
          onChange={handleChange} 
          name="recipeName" />
          <input type="text" 
          placeholder="Image URL" 
          value={values.imageURL} 
          onChange={handleChange} 
          name="imageURL" />
          </div>
          <div className={classes.radio_btns}>
          <label htmlFor="cook">
          <input type="radio" placeholder="Cook" value={values.type} onChange={handleChange} name="type"/>
            Cook
            </label>
          <label htmlFor="bake">
          <input type="radio" placeholder="Bake" value={values.type} onChange={handleChange} name="type"/>
            Bake
            </label>
          <label htmlFor="drink">
          <input type="radio" placeholder="Drink" value={values.type} onChange={handleChange} name="type"/>
            Drink
            </label>
          </div>
          <div className={classes.middle_inputs}>
          <input type="text" 
          placeholder="Prep Time" 
          value={values.prepTime} 
          onChange={handleChange} 
          name="prepTime"
           className={classes.small_inputs} />
          <input type="text" 
          placeholder="Cook Time" 
          value={values.cookTime} 
          onChange={handleChange} 
          name="cookTime"
          className={classes.small_inputs}
           />
          <input type="text" 
          placeholder="Serves"
          value={values.serves} 
          onChange={handleChange} 
          name="serves"
          className={classes.small_inputs}/>
          </div>
          <div className={classes.bottom_inputs}>
          <input type="text"
           placeholder="Ingredient" 
           value={name} 
           onChange={ingredientNameHandler} />
          <input type="text" 
          placeholder="Quantity" 
          value={quantity} 
          onChange={ingredientQuantityHandler} />
          <button type="button" onClick={addIngredient} className={classes.orange_btn}>Add Another</button>
          </div>
          <textarea name="instructions" id="11" cols="30" rows="10" placeholder="What are the instructions?"></textarea>
          <button className={classes.submit_btn}>Save</button>
        </form>
        )
      }}</Formik>
    </section>
  );
};

export default NewRecipeScreen;
