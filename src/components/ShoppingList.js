import React, {useState} from "react";
import Item from "./Item";

function ShoppingList({ items }) {
  const[filterCart, setFilterCart] = useState("All");

  function handleOnChange(event) {
    setFilterCart(event.target.value);
  }

  const itemsList = items.filter((item)=> {
    if (filterCart === "All")
    return true;
    return item.category === filterCart
  })
  return (
    <div className="ShoppingList">
      <div className="Filter">
        <select name="filter" onChange={handleOnChange}>
          <option value="All">Filter by category</option>
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </div>
      <ul className="Items">
        {itemsList.map((item) => (
          <Item key={item.id} name={item.name} category={item.category} />
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;
