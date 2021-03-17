import { useEffect, useState } from "react";
import "./styles.css";
import Recipe from "./components/Recipe.js";

export default function App() {
  const APP_ID = "ae5d9002";
  const APP_KEY = "2c3d9b0dd50d8dc379a6663d754c5ec8	";
  const [recipes, setRecipes] = useState([]);
  const [search, setSearch] = useState("");
  const [query, setQuery] = useState("rice");
  const EXAMPLE_REQ = `https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`;

  useEffect(() => {
    getRecipies();
  }, [query]);

  const getRecipies = async () => {
    const response = await fetch(EXAMPLE_REQ);
    const data = await response.json();
    setRecipes(data.hits);
    console.log(data.hits);
  };
  const searchHandler = (e) => {
    setSearch(e.target.value);
  };
  const clickHandler = (e) => {
    e.preventDefault();
    setQuery(search);
    setSearch("");
  };
  return (
    <div className="App">
      <form className="search-form">
        <input
          onChange={searchHandler}
          className="search-bar"
          type="text"
          value={search}
        />
        <button className="search-button" type="submit" onClick={clickHandler}>
          search
        </button>
      </form>
      <div className="Main">
        <div className="card-container">
          {recipes.map((recipe) => (
            <div className="cards">
              <Recipe
                key={recipe.recipe.label}
                title={recipe.recipe.label}
                calories={recipe.recipe.calories}
                image={recipe.recipe.image}
                ingredients={recipe.recipe.ingredients}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
