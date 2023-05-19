import React, { useState } from 'react'
import classes from "./Header.module.css"
import logo from "../../assets/로고.png"
import logotext from "../../assets/쇼핑몰 이름.png"
import hambur from "../../assets/아이콘.png"
import { Link } from "react-router-dom"
import Dropdown from '../../UI/Dropdown';

const Header = () => {
  const [view, setView] = useState(false);
  return (
    <>
      <header className={classes.header}>
        <span className={classes.span}>
          <Link to="/"><img className={classes.logo} src={logo} alt="logo" /></Link>
          <Link to="/"><img src={logotext} alt="logotext" /></Link>
        </span>
        <img className={classes.hambur} src={hambur} alt="햄버거"
          onClick={() => { setView(!view) }}
        />
      </header>
      <span>{view && <Dropdown />}</span>
    </>
  )
}

export default Header