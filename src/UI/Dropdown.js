import React from 'react'
import classes from "./Dropdown.module.css"
import { Link } from 'react-router-dom'

const Dropdown = () => {
  return (
    <div className={classes.bubble}>
      <li>안녕하세요 !</li>
      <Link to="/cartlist"><li>📦 상품리스트 페이지</li></Link>
      <Link to="/bookmark"><li>⭐️ 북마크 페이지</li></Link>
    </div>
  )
}

export default Dropdown