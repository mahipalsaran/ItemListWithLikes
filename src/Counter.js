import React from "react";

const Counter = (props) => {
  return (
    <div>
      <span>{props.item.name}</span>
      <button onClick={() => props.handleUpdate("inc", props.index)}>
        Like
      </button>
      <div>{props.item.votes}</div>
      <button onClick={() => props.handleUpdate("dec", props.index)}>
        UnLike
      </button>
    </div>
  );
};

export default Counter;
