import React from "react";

const styles = {
  crossedOut: {
    border: "2px solid",
    textDecoration: "line-through",
  },
};

function Item(props) {
  const handleCross = () => {
    props.crossOut(props.element.id);
  };

  const removeItem = () => {
    props.removeItem(props.element.id);
  };

  const editItem = (e) => {
    props.editItem(e.target.value, props.element.id);
  };

  return (
    <>
      <div style={{ display: "flex" }}>
        <input
          type="text"
          style={props.element.isCrossedOut ? styles.crossedOut : null}
          value={props.element.name}
          onChange={editItem}
        ></input>
        <button onClick={handleCross}>v</button>
        <button onClick={removeItem}>X</button>
        <br></br>
      </div>
    </>
  );
}

export default Item;
