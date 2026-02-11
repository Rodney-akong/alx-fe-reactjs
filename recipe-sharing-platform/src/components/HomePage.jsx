import { useState, useEffect } from "react";
import recipes from "../data.json";

const HomePage = () => {
  const [recipeList, setRecipeList] = useState([]);

  useEffect(() => {
    setRecipeList(recipes);
  }, []);

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold text-center mb-6">
        Recipe Sharing Platform
      </h1>

      {/* ✅ FIXED GRID — includes sm */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {recipeList.map((recipe) => (
          <div
            key={recipe.id}
            className="bg-white shadow-md rounded-lg p-4 transition transform hover:scale-105 hover:shadow-xl"
          >
            <img
              src={recipe.image}
              alt={recipe.title}
              className="w-full h-48 object-cover rounded-md"
            />

            <h2 className="text-xl font-semibold mt-4">
              {recipe.title}
            </h2>

            <p className="text-gray-600 mt-2">
              {recipe.summary}
            </p>

            <button className="mt-4 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
              View Recipe
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HomePage;
