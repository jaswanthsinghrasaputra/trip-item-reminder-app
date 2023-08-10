import { useState } from "react";
import Logo from "./components/Logo";
import Form from "./components/Form";
import PackingList from "./components/PackingList";
import Stats from "./components/Stats";

// const initialItems = [
//   { id: 1, description: "Passports", quantity: 2, packed: false },
//   { id: 2, description: "Socks", quantity: 12, packed: false },
//   { id: 3, description: "Mouse", quantity: 21, packed: true },
// ];

function App() {
  const [items, setItems] = useState([
    // { id: 1, description: "Passports", quantity: 2, packed: false },
  ]);

  function AddItemsHandler(item) {
    setItems((items) => [...items, item]);
  }

  function DeleteItemHandler(id) {
    setItems((items) => items.filter((item) => item.id !== id));
  }

  function UpdateItemHandler(id) {
    setItems((items) =>
      items.map((item) =>
        item.id === id ? { ...item, packed: !item.packed } : item
      )
    );
  }
  function ClearListHandler() {
    const confirmed = window.confirm("Are you sure to delete..?");
    if (confirmed) setItems([]);
  }
  return (
    <div className="app">
      <Logo />
      <Form onAddItems={AddItemsHandler} />
      <PackingList
        items={items}
        onDeleteItems={DeleteItemHandler}
        onUpdateItems={UpdateItemHandler}
        onClearItems={ClearListHandler}
      />
      <Stats items={items} />
    </div>
  );
}

export default App;
