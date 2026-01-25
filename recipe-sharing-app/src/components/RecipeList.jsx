import { Link } from "react-router-dom"
import useRecipeStore from "./recipeStore"
import SearchBar from "./SearchBar"

const RecipeList = () => {
  const filteredRecipes = useRecipeStore((state) => state.filteredRecipes)
  const favorites = useRecipeStore((state) => state.favorites)
  const addFavorite = useRecipeStore((state) => state.addFavorite)
  const removeFavorite = useRecipeStore((state) => state.removeFavorite)

  return (
    <div>
      <h2>Recipes</h2>
      <SearchBar />

      {filteredRecipes.length === 0 && <p>No recipes found</p>}

      {filteredRecipes.map((recipe) => {
        const isFavorite = favorites.includes(recipe.id)
        return (
          <div key={recipe.id}>
            <h3>{recipe.title}</h3>
            <p>{recipe.description}</p>
            <Link to={`/recipes/${recipe.id}`}>View Details</Link>

            {isFavorite ? (
              <button onClick={() => removeFavorite(recipe.id)}>
                Remove from Favorites
              </button>
            ) : (
              <button onClick={() => addFavorite(recipe.id)}>
                Add to Favorites
              </button>
            )}
          </div>
        )
      })}
    </div>
  )
}

export default RecipeList
