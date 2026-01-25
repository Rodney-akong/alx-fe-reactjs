import { Link } from "react-router-dom"
import useRecipeStore from "./recipeStore"
import SearchBar from "./SearchBar"

const RecipeList = () => {
  const filteredRecipes = useRecipeStore(
    (state) => state.filteredRecipes
  )

  return (
    <div>
      <h2>Recipes</h2>

      <SearchBar />

      {filteredRecipes.length === 0 && <p>No recipes found</p>}

      {filteredRecipes.map((recipe) => (
        <div key={recipe.id}>
          <h3>{recipe.title}</h3>
          <p>{recipe.description}</p>
          <Link to={`/recipes/${recipe.id}`}>View Details</Link>
        </div>
      ))}
    </div>
  )
}

export default RecipeList
