import React from 'react'

export const Form = () => {
  const ingrediences = ["egg", "tomato", "basil"]

  const ingrediencesList = ingrediences.map((oneIngredience) => {
    return <li key={oneIngredience} >{oneIngredience}</li>
  })

  const addIngredience = (e) => {
    e.preventDefault()
    console.log("clicked")
    const formData = new FormData(submitform)
    const newIngredience = formData.get("ingredience")
    ingrediences.push(newIngredience)
    console.log(ingrediences)
  }

  return (
    <main>
      <form className='add-ingredient-form' id="submitform" onSubmit={addIngredience}>
        <input 
        type="text" 
        placeholder="e.g. oregano" 
        aria-label="Add ingredient"
        name="ingredience"
        />
        <button>Add ingredient</button>
      </form>
      <ul>{ingrediencesList}</ul>
    </main>
  )
}
