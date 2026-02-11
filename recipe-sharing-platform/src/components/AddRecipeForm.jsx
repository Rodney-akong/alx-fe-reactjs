import { useState } from "react";

const AddRecipeForm = () => {
  const [title, setTitle] = useState("");
  const [ingredients, setIngredients] = useState("");
  const [steps, setSteps] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault(); // stops page from refreshing

    const ingredientList = ingredients
      .split(",")
      .map((item) => item.trim())
      .filter((item) => item !== "");

    // Validation checks
    if (!title || !ingredients || !steps) {
      setError("All fields are required.");
      return;
    }

    if (ingredientList.length < 2) {
      setError("Please enter at least two ingredients (separated by commas).");
      return;
    }

    setError("");

    const newRecipe = {
      id: Date.now(),
      title,
      ingredients: ingredientList,
      steps: steps.split("\n"),
    };

    console.log("New Recipe Submitted:", newRecipe);

    // Clear form after submit
    setTitle("");
    setIngredients("");
    setSteps("");
  };

  return (
    <div className="p-6 max-w-2xl mx-auto">
      <h1 className="text-2xl font-bold mb-4 text-center">
        Add New Recipe
      </h1>

      <form
        onSubmit={handleSubmit}
        className="bg-white shadow-lg rounded-lg p-6 space-y-4"
      >
        {error && (
          <p className="bg-red-100 text-red-700 p-2 rounded">
            {error}
          </p>
        )}

        <div>
          <label className="block font-semibold mb-1">
            Recipe Title
          </label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="w-full border rounded p-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
            placeholder="e.g. Jollof Rice"
          />
        </div>

        <div>
          <label className="block font-semibold mb-1">
            Ingredients (separate with commas)
          </label>
          <textarea
            value={ingredients}
            onChange={(e) => setIngredients(e.target.value)}
            className="w-full border rounded p-2 h-24 focus:outline-none focus:ring-2 focus:ring-blue-400"
            placeholder="Tomatoes, Rice, Oil, Pepper"
          />
        </div>

        <div>
          <label className="block font-semibold mb-1">
            Preparation Steps
          </label>
          <textarea
            value={steps}
            onChange={(e) => setSteps(e.target.value)}
            className="w-full border rounded p-2 h-32 focus:outline-none focus:ring-2 focus:ring-blue-400"
            placeholder="Step 1: Wash rice...\nStep 2: Cook tomatoes..."
          />
        </div>

        <button
          type="submit"
          className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600 transition"
        >
          Submit Recipe
        </button>
      </form>
    </div>
  );
};

export default AddRecipeForm;
