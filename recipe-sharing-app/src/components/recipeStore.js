import { create } from 'zustand'

export const useRecipeStore = create((set) => ({
  // STATE: this is the data
  recipes: [],

  // ACTION: add a new recipe
  addRecipe: (newRecipe) =>
    set((state) => ({
      recipes: [...state.recipes, newRecipe],
    })),

  // ACTION: replace all recipes
  setRecipes: (recipes) => set({ recipes }),
}))
