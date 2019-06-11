import React from 'react';
import styled from 'styled-components';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

const Nav = styled.div`
  top: 0em;
  height: 100vh;
  display: grid;
  grid-template-rows: 1fr 1fr 1fr;
  place-items: center;
  background: dodgerblue;
    transition: 300ms ease-out;
`;

const FloatBtn = styled.button`
  position: fixed;
  bottom: 1em;
  left: 1em;
  border: 0;
  border-radius: 50%;
`;

const Navbar = ({showNav, hide})=> (
    <Nav className={showNav? "show": "hide"}>
      <Link className="nav-item txt-md" to="/setting"><i class="fas fa-cog"></i></Link>
      <Link className="nav-item txt-md" to="/home"><i className="fas fa-home"></i></Link>
      <Link className="nav-item txt-md" to="/Simulation"><i className="fas fa-gamepad"></i></Link>
      <FloatBtn onClick={hide}><i class={ showNav? "fa fa-angle-left txt-md" : "fa fa-angle-right txt-md"}></i></FloatBtn>
    </Nav>
  );

export default Navbar;
