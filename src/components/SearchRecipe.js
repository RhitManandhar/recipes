import React, { useRef } from "react"

export default function SearchRecipe({ recipes }) {
  const inputSearch = useRef()
  function searchItem(e) {
    inputSearch
  }
  return (
    <>
      <div className="search-box">
        <input type="text" placeholder="search for a recipe" />
      </div>
      {recipes.length != 0 && (
        <div>
          <span className="search-results">{recipes.map}</span>
        </div>
      )}
    </>
  )
}
