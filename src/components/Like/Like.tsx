import React, { useState } from "react";
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";

interface Props {
  onClick: () => void;
}

const Like = ({ onClick }: Props) => {
  const [fill, setFill] = useState(false);

  const toggle = () => {
    setFill(!fill);
    onClick();
  };

  //   const handleClick = () => {
  //     setFill(!fill);
  //     console.log("change");
  //   };

  return (
    <>
      {fill ? (
        <AiFillHeart onClick={toggle} color="red" size={20} />
      ) : (
        <AiOutlineHeart onClick={toggle} color="red" size={20} />
      )}
    </>
  );
};

export default Like;
