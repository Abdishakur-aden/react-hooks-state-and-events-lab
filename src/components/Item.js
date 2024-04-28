import React, { useState } from "react";

function Item({ name, category }) {
  const [xxx, setxxx] = useState(true)
  function handleClick (){
    setxxx(!xxx)
  }
  return (
    <li className={xxx ? "" : "in-cart"}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button className="add" onClick={handleClick}>{xxx ? "Remove from Cart" : "Add to Cart"}</button>
    </li>
  );
}

export default Item;

