import React, { useState } from "react";
import { Formik } from "formik";
import classes from "../../UI/NewRecipeScreen.module.css";
import axios from "axios";

// ! need it to collect the type of radio button they enter
// * I needed to change the value to a static value because they never change. The user can't type anything in to change that value.
// * "Bake", "Cook"

const NewRecipeScreen = () => {
  const [ingredients, setIngredients] = useState([]);
  const [name, setName] = useState("");
  const [quantity, setQuantity] = useState("");

  const initialValues = {
    type: "",
    recipeName: "",
    imageURL: "",
    prepTime: "",
    cookTime: "",
    serves: "",
    ingredients: [],
    instructions: "",
  };

  const onSubmit = (values) => {
    values.ingredients = ingredients;
    console.log(values);
    axios
      .post("https://recipes.devmountain.com/recipes/", values)
      .then((response) => {
        console.log(response.data)
        alert("Recipe has been added!");
      })
      .catch((error) => console.log(error));
  };

  const addIngredient = (event) => {
    setIngredients((ingredients) => {
      return [...ingredients, { name, quantity }];
    });
    setName("");
    setQuantity("");
  };

  const ingredientNameHandler = (event) => {
    setName(event.target.value);
  };

  const ingredientQuantityHandler = (event) => {
    setQuantity(event.target.value);
  };

  return (
    <section className={classes.new_recipe_section}>
      <h1>Tell us about your Recipe!</h1>
      <Formik initialValues={initialValues} onSubmit={onSubmit}>
        {({ values, handleChange, handleSubmit }) => {
          return (
            <form onSubmit={handleSubmit}>
              <div className={classes.top_inputs}>
                <input
                  type="text"
                  placeholder="Name"
                  value={values.recipeName}
                  onChange={handleChange}
                  name="recipeName"
                />
                <input
                  type="text"
                  placeholder="Image URL"
                  value={values.imageURL}
                  onChange={handleChange}
                  name="imageURL"
                />
              </div>
              <div className={classes.radio_btns}>
                <label htmlFor="cook">
                  <input
                    type="radio"
                    placeholder="Cook"
                    value="Cook"
                    onChange={handleChange}
                    name="type"
                    className={classes.big_button}
                  />
                  Cook
                </label>
                <label htmlFor="bake">
                  <input
                    type="radio"
                    placeholder="Bake"
                    value="Bake"
                    onChange={handleChange}
                    name="type"
                    className={classes.big_button}
                  />
                  Bake
                </label>
                <label htmlFor="drink">
                  <input
                    type="radio"
                    placeholder="Drink"
                    value="Drink"
                    onChange={handleChange}
                    name="type"
                    className={classes.big_button}
                  />
                  Drink
                </label>
              </div>
              <div className={classes.middle_inputs}>
                <input
                  type="text"
                  placeholder="Prep Time"
                  value={values.prepTime}
                  onChange={handleChange}
                  name="prepTime"
                  className={classes.small_inputs}
                />
                <input
                  type="text"
                  placeholder="Cook Time"
                  value={values.cookTime}
                  onChange={handleChange}
                  name="cookTime"
                  className={classes.small_inputs}
                />
                <input
                  type="text"
                  placeholder="Serves"
                  value={values.serves}
                  onChange={handleChange}
                  name="serves"
                  className={classes.small_inputs}
                />
              </div>
              <div className={classes.list_container}>
              <div className={classes.bottom_inputs}>
                <input
                  type="text"
                  placeholder="Ingredient"
                  value={name}
                  onChange={ingredientNameHandler}
                />
                <input
                  type="text"
                  placeholder="Quantity"
                  value={quantity}
                  onChange={ingredientQuantityHandler}
                />
              </div>
                <div className={classes.list}>
                <ul>
                  {ingredients.map((ing, index) => {
                    return <li key={index}>{ing.quantity + " " + ing.name}</li>;
                  })}
                </ul>
                </div>
              </div>
                <button
                  type="button"
                  onClick={addIngredient}
                  className={classes.orange_btn}
                >
                  Add Another
                </button>
              <textarea
                name="instructions"
                cols="30"
                rows="10"
                placeholder="What are the instructions?"
                value={values.instructions}
                onChange={handleChange}
              ></textarea>
              <button className={classes.submit_btn} type="submit">
                Save
              </button>
            </form>
          );
        }}
      </Formik>
    </section>
  );
};

export default NewRecipeScreen;
