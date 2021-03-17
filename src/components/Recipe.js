import React, { useState } from "react";
import Ingredients from "./Ingredients";
const Recipe = ({ title, calories, image, ingredients }) => {
  // const Runner = () => {
  //   <Ingredients ingredient={ingredients} />;
  // };
  const [show, setShow] = useState(false);
  return (
    <div>
      <h1>{title}</h1>

      <img src={image} alt="" />
      <h2>Claories = {Math.round(calories)}</h2>

      {/* <ul>
        {ingredients.map((ingredient) => (
          <h3>{ingredient.text}</h3>
        ))}
      </ul> */}
      {show && <Ingredients ingredient={ingredients} />}
      <button className="btn" onClick={() => setShow((prev) => !prev)}>
        {" "}
        Ingredients{" "}
      </button>
    </div>
  );
};
export default Recipe;
