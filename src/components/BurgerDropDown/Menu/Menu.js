// Menu.js
import React from "react";
import { StyledMenu } from "./Menu.styled";
import { bool } from 'prop-types';
const Menu = ({ open }) => {
  return (
    <StyledMenu open={open}>
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <a href="/">About Me</a>
      <a href="/">Projects</a>
      <a href="/resume">Resume</a>

    
    </StyledMenu>
  );
};
Menu.propTypes = {
    open: bool.isRequired,
}
export default Menu;
