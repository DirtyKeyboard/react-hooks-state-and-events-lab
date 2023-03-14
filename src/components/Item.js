import React, {useState} from "react";

function Item({ name, category }) {
  const [inCart, toggleCart] = useState();
  /* Shopping Item
  <li className="">
        <span>{name}</span>
        <span className="category">{category}</span>
        <button className="add">Add to Cart</button>
      </li>
  */
 function handleClick(e) {
  toggleCart(!inCart)
 }
  return (
    <li className={inCart ? 'in-cart' : ''}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button className={inCart ? 'remove' : 'add'} onClick={handleClick}>{inCart ? 'Remove From Cart' : 'Add to Cart'}</button>
    </li>
  );
}

export default Item;
