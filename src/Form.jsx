import React from 'react'

export const Form = () => {
  const ingrediences = ["egg", "tomato", "basil"]

  const ingrediencesList = ingrediences.map((oneIngredience) => {
    return <li key={oneIngredience} >{oneIngredience}</li>
  })

  const addIngredience = (e) => {
    e.preventDefault()
    console.log("clicked")
  }

  return (
    <main>
      <form className='add-ingredient-form' onSubmit={addIngredience}>
        <input 
        type="text" 
        placeholder="e.g. oregano" 
        aria-label="Add ingredient"
        name="ingredient"
        />
        <button>Add ingredient</button>
      </form>
      <ul>{ingrediencesList}</ul>
    </main>
  )
}
