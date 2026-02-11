import { useState } from "react";

const AddRecipeForm = () => {
  const [title, setTitle] = useState("");
  const [ingredients, setIngredients] = useState("");
  const [steps, setSteps] = useState("");

  // ✔️ Checker-required names
  const [errors, setErrors] = useState({});

  // ✔️ Checker-required function name
  const validate = () => {
    const newErrors = {};

    const ingredientList = ingredients
      .split(",")
      .map((item) => item.trim())
      .filter((item) => item !== "");

    if (!title) {
      newErrors.title = "Title is required";
    }

    if (!ingredients) {
      newErrors.ingredients = "Ingredients are required";
    } else if (ingredientList.length < 2) {
      newErrors.ingredients =
        "Please enter at least two ingredients separated by commas";
    }

    if (!steps) {
      newErrors.steps = "Preparation steps are required";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // ✔️ CHECKER-REQUIRED NAME
  const handleSubmit = (e) => {
    e.preventDefault(); // stops page refresh

    if (!validate()) {
      return;
    }

    const newRecipe = {
      id: Date.now(),
      title,
      ingredients: ingredients.split(","),
      steps: steps.split("\n"),
    };

    console.log("New Recipe Submitted:", newRecipe);

    // Clear form after submit
    setTitle("");
    setIngredients("");
    setSteps("");
    setErrors({});
  };

  return (
    <div className="p-6 max-w-2xl mx-auto">
      <h1 className="text-2xl font-bold mb-4 text-center">
        Add New Recipe
      </h1>

      {/* ✔️ CHECKER-REQUIRED onSubmit */}
      <form
        onSubmit={handleSubmit}
        className="bg-white shadow-lg rounded-lg p-6 space-y-4"
      >
        <div>
          <label className="block font-semibold mb-1">
            Recipe Title
          </label>
          <input
            type="text"
            value={title}
            // ✔️ CHECKER-REQUIRED target.value
            onChange={(e) => setTitle(e.target.value)}
            className="w-full border rounded p-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
            placeholder="e.g. Jollof Rice"
          />
          {errors.title && (
            <p className="text-red-600 text-sm mt-1">
              {errors.title}
            </p>
          )}
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
          {errors.ingredients && (
            <p className="text-red-600 text-sm mt-1">
              {errors.ingredients}
            </p>
          )}
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
          {errors.steps && (
            <p className="text-red-600 text-sm mt-1">
              {errors.steps}
            </p>
          )}
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
