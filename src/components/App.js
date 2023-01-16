import React, {useState} from "react";
import ShoppingList from "./ShoppingList";
import itemData from "../data/items";

function App() {
  // const appClass = false ? "App dark" : "App light";
  const [appClass, setAppClass] = useState(true)

  const handleOnClick = () => {
    setAppClass(!appClass)
  }

  return (
    <div onClick={handleOnClick} className={appClass ? "App light" : "App dark"}>
      <header>
        <h2>Shopster</h2>
        <button>{appClass ? 'Light Mode':'Dark Mode'} Dark Mode</button>
      </header>
      <ShoppingList items={itemData} />
    </div>
  );
}

export default App;
