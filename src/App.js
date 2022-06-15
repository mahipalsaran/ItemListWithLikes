import "./styles.css";
import Counter from "./Counter";
import React, { useState } from "react";

export default function App() {
  const listArr = [
    { name: "Item1", votes: 40 },
    { name: "Item2", votes: 45 }
  ];
  const [list, setList] = useState([...listArr]);
  console.log("List is ::::::::", list);

  function handleUpdate(arg, i) {
    if (arg === "inc") {
      console.log("List::::", list);
      let newList = [...list];
      newList[i].votes = newList[i].votes + 1;
      setList(newList);
    } else {
      let newList = [...list];
      newList[i].votes = newList[i].votes - 1;
      setList(newList);
    }
  }

  return (
    <div className="App">
      {list.map((item, i) => (
        <Counter key={i} item={item} index={i} handleUpdate={handleUpdate} />
      ))}
    </div>
  );
}
