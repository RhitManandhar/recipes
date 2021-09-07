import React, { useState, useEffect } from "react"
import RecipeList from "./RecipeList"
import "../css/app.css"
import uuidv4 from "uuid/dist/v4"
import RecipeEdit from "./RecipeEdit"
import SearchRecipe from "./SearchRecipe"

export const RecipeContext = React.createContext()
const LOCAL_STORAGE_KEY = "cookingWithReact.recipes"

function App() {
  const [selectedRecipeId, setSelectedRecipeId] = useState()
  const [recipes, setRecipes] = useState(sampleRecipes)
  const selectedRecipe = recipes.find(
    (recipe) => recipe.id === selectedRecipeId
  )
  useEffect(() => {
    const recipeJSON = localStorage.getItem(LOCAL_STORAGE_KEY)
    if (recipeJSON != null) setRecipes(JSON.parse(recipeJSON))
  }, [])

  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(recipes))
  }, [recipes])

  const recipeContextValue = {
    handleRecipeAdd,
    handleRecipeDelete,
    handleRecipeSelect,
    handleRecipeChange,
  }
  function handleRecipeAdd() {
    const newRecipe = {
      id: uuidv4(),
      name: "",
      servings: 1,
      cookTime: "",
      instructions: "",
      ingredients: [
        {
          id: uuidv4(),
          name: "",
          amount: "",
        },
      ],
    }
    setSelectedRecipeId(newRecipe.id)
    setRecipes([...recipes, newRecipe])
  }
  function handleRecipeDelete(id) {
    if (selectedRecipeId !== null && selectedRecipeId === id) {
      setSelectedRecipeId(undefined)
    }
    setRecipes(recipes.filter((recipe) => recipe.id !== id))
  }
  function handleRecipeSelect(id) {
    setSelectedRecipeId(id)
  }
  function handleRecipeChange(id, recipe) {
    const newRecipes = [...recipes]
    const index = newRecipes.findIndex((r) => r.id === id)
    newRecipes[index] = recipe
    setRecipes(newRecipes)
  }
  return (
    <RecipeContext.Provider value={recipeContextValue}>
      <SearchRecipe recipes={recipes}></SearchRecipe>
      <RecipeList recipes={recipes} />
      {selectedRecipe && <RecipeEdit recipe={selectedRecipe} />}
    </RecipeContext.Provider>
  )
}

const sampleRecipes = [
  {
    id: 1,
    name: "Plain Chicken",
    servings: 3,
    cookTime: "1:45",
    instructions: "1.Put salt on 🐔\n 2. Put chicken in oven\n 3. Eat chicken",
    ingredients: [
      {
        id: 1,
        name: "🐔",
        amount: "2pounds",
      },
      {
        id: 2,
        name: "salt",
        amount: "2tbsp",
      },
    ],
  },
  {
    id: 2,
    name: "Plain Pork",
    servings: 5,
    cookTime: "2:45",
    instructions:
      "1.Put salt on pork\n 2. Put chicken in oven\n 3. Eat chicken",
    ingredients: [
      {
        id: 1,
        name: "pork",
        amount: "1pound",
      },
      {
        id: 2,
        name: "salt",
        amount: "5tbsp",
      },
    ],
  },
]
export default App
