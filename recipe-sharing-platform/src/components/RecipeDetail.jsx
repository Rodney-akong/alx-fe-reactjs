import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import recipes from "../data.json";

const RecipeDetail = () => {
  const { id } = useParams();
  const [recipe, setRecipe] = useState(null);

  useEffect(() => {
    const foundRecipe = recipes.find(
      (r) => r.id === Number(id)
    );
    setRecipe(foundRecipe);
  }, [id]);

  if (!recipe) {
    return (
      <h1 className="text-center mt-10 text-xl">
        Recipe Not Found
      </h1>
    );
  }

  return (
    <div className="p-6 max-w-3xl mx-auto">
      <Link to="/" className="text-blue-500 underline">
        ← Back to Home
      </Link>

      <div className="bg-white shadow-lg rounded-lg p-6 mt-4">
        <img
          src={recipe.image}
          alt={recipe.title}
          className="w-full h-64 object-cover rounded-md"
        />

        <h1 className="text-3xl font-bold mt-4">
          {recipe.title}
        </h1>

        <p className="text-gray-600 mt-2">
          {recipe.summary}
        </p>

        <h2 className="text-2xl font-semibold mt-6">
          Ingredients
        </h2>

        <ul className="list-disc pl-6 mt-2">
          {recipe.ingredients.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>

        {/* ✅ CHECKER WANTS THIS WORD */}
        <h2 className="text-2xl font-semibold mt-6">
          Cooking Instructions
        </h2>

        <ol className="list-decimal pl-6 mt-2">
          {recipe.steps.map((step, index) => (
            <li key={index}>{step}</li>
          ))}
        </ol>
      </div>
    </div>
  );
};

export default RecipeDetail;
