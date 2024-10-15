import React, { useState } from "react";

interface Props {
  children: string;
  maxChars?: number;
}

const Expandable = ({ maxChars = 100, children }: Props) => {
  const [open, setOpen] = useState(false);

  const handleClick = () => {
    setOpen(!open);
  };

  if (children.length <= maxChars) {
    return <p>{children}</p>;
  }
  const text = open ? children : children.substring(0, maxChars);
  return (
    <>
      <p>{text}...</p>
      <button onClick={handleClick}>{open ? "Less" : "More"}</button>
    </>
  );
};

export default Expandable;
