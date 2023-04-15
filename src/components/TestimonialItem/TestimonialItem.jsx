import React from "react";
import { Item } from "./TestimonialItem.style";
import { BsStarFill } from "react-icons/bs";

function TestimonialItem({ title, text, name }) {
  return (
    <Item>
      <div>
        <h2>{title}</h2>
        <div>
          <BsStarFill />
          <BsStarFill />
          <BsStarFill />
          <BsStarFill />
          <BsStarFill />
        </div>
      </div>
      <p>"{text}"</p>
      <h3>{name}</h3>
    </Item>
  );
}

export default TestimonialItem;
