import { useState } from 'react'
import { useRecipeStore } from './recipeStore'

const AddRecipeForm = () => {
  // Get the action from Zustand
  const addRecipe = useRecipeStore((state) => state.addRecipe)

  // Local state for form inputs
  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')

  const handleSubmit = (event) => {
    event.preventDefault()

    addRecipe({
      id: Date.now(),
      title,
      description,
    })

    // Clear the form
    setTitle('')
    setDescription('')
  }

  return (
    <form onSubmit={handleSubmit}>
      <h2>Add New Recipe</h2>

      <input
        type="text"
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />

      <br /><br />

      <textarea
        placeholder="Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />

      <br /><br />

      <button type="submit">Add Recipe</button>
    </form>
  )
}

export default AddRecipeForm
