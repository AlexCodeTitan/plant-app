import React from "react";
import { NavContainer } from "./Navbar.style";
import { Link } from "react-router-dom";
import { BiLeaf } from "react-icons/bi";
import Button from "../CustomButton/Button";

function NavBar() {
  return (
    <NavContainer>
      <a href="">Contact</a>
      <h1>
        <BiLeaf />
        <span>LeafLife</span>
      </h1>
      <Button>Download Now</Button>
    </NavContainer>
  );
}

export default NavBar;
