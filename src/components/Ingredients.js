import React from "react";

const Ingredients = ({ ingredient }) => {
  return (
    <>
      <div className="card-container">
        <div className="cards">
          {ingredient.map((ingredient) => (
            <p>{ingredient.text}</p>
          ))}
        </div>
      </div>
    </>
  );
};
export default Ingredients;
