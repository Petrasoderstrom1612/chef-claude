import React from "react";
import Recipe from "./Recipe";

export const Form = () => {
  const [ingrediences, setIngrediences] = React.useState([]);
  const [showRecipe, setShowRecipe] = React.useState(false)

  const listOfIngredienses = ingrediences.map((oneIngredience) => {
    return <li key={oneIngredience}>{oneIngredience}</li>;
  });

  const addIngredience = (formData) => {
    const newIngredience = formData.get("ingredience");
    console.log(newIngredience);
    setIngrediences((prevIngrediences) => [
      ...prevIngrediences,
      newIngredience,
    ]);
  };

  const toggleShowRecipe = () => {
    setShowRecipe(prevShowRecipe => !prevShowRecipe)
  }

  return (
    <main>
      <form
        className="add-ingredient-form"
        id="submitform"
        action={addIngredience}
      >
        <input
          type="text"
          placeholder="e.g. oregano"
          aria-label="Add ingredient"
          name="ingredience"
        />
        <button onClick={addIngredience}>Add ingredient</button>
      </form>
       { listOfIngredienses.length > 0 && <section> {/*If there are items in the array, display them*/}
        <h2>Ingredients on hand:</h2>
        <ul className="ingredients-list" aria-live="polite">
          {listOfIngredienses}
        </ul>
        { listOfIngredienses.length > 2 && <div className="get-recipe-container"> {/*Generate recipe made available with minimum of 3 ingredienses*/}
          <div>
            <h3>Ready for a recipe?</h3>
            <p>Generate a recipe from your list of ingredients.</p>
          </div>
          <button onClick={toggleShowRecipe}>Get a recipe</button>
        </div>}
      </section>}
      { showRecipe && <Recipe/>}
    </main>
  );
};
