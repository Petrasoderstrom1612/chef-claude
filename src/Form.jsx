import React from 'react'

export const Form = () => {
  const [ingrediences, setIngrediences] = React.useState(["egg", "tomato", "basil"])

  const listOfIngredienses = ingrediences.map((oneIngredience) => {
    return <li key={oneIngredience} >{oneIngredience}</li>
  })
  
  const addIngredience = (e) => {
    e.preventDefault()
    const newIngredience = new FormData(submitform).get("ingredience")
    console.log(newIngredience)
    setIngrediences(prevIngrediences => [...prevIngrediences, newIngredience])
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
        <button onClick={addIngredience}>Add ingredient</button>
      </form>
      <ul>{listOfIngredienses}</ul>
    </main>
  )
}
