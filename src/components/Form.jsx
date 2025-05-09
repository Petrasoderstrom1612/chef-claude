import React from "react";
import Recipe from "./Recipe";
import ListOfIngrediences from "./ListOfIngrediences"

export const Form = () => {
  const [ingrediences, setIngrediences] = React.useState(["a","b","s","d"]);
  const [showRecipe, setShowRecipe] = React.useState(false)

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
       { ingrediences.length > 0 && <ListOfIngrediences ingrediences={ingrediences} toggleShowRecipe={toggleShowRecipe}/>} {/*If there are items in the array, display them*/}
      { showRecipe && <Recipe/>}
    </main>
  );
};
