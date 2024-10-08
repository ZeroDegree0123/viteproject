import { useState } from "react";

import "./ListGroup.css";

interface Props {
  items: string[];
  heading: string;
  // (item: string) => void
  onSelectItem: (item: string) => void;
}

function ListGroup({ items, heading, onSelectItem }: Props) {
  // Hook
  const [selectedIndex, setSelectedIndex] = useState(0);
  //  Event Handler

  const itemList = items.map((item, index) => (
    <li
      className={
        selectedIndex === index ? "list-group-item active" : "list-group-item"
      }
      key={item}
      onClick={() => {
        setSelectedIndex(index);
        onSelectItem(item);
      }}
    >
      {item}
    </li>
  ));

  return (
    <>
      <h1>{heading}</h1>
      {items.length === 0 && <p>No item found</p>}
      <ul className="list-group">{itemList}</ul>
    </>
  );
}

export default ListGroup;
