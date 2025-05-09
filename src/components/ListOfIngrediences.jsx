import React from 'react'

const ListOfIngrediences = ({ingrediences, toggleShowRecipe}) => {

    console.log("ingrediences",ingrediences)

  const listOfIngredienses = ingrediences.map((oneIngredience) => {
    return <li key={oneIngredience}>{oneIngredience}</li>;
  });

  return (
    <section> 
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
      </section>
  )
}

export default ListOfIngrediences
