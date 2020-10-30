import React from 'react';
import { Link } from "react-router-dom";

import { Local, Menu } from './style';

import logo from '../../assets/images/logo.png';

export default function Header() {

  return (
    <Local>
      <a href="/"><img   alt="" src={logo} height="35" width="170"/></a>
      
      <Menu>
        <Link  to="/" className="item">INÍCIO</Link> &ensp;
        <Link  to="/about" className="item">QUEM SOMOS</Link> &ensp;
        <Link  to="/clients" className="item">CLIENTES</Link> &ensp;
        <Link  to="/contact" className="item">FALE CONOSCO</Link> &ensp;
      </Menu>

    </Local>
  );
}
  