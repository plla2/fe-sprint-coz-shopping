import React from 'react'
import classes from "./Footer.module.css"

const Footer = () => {
  return (
    <>
      <footer className={classes.footer}>
        <div className={classes.firstline}>개인정보 처리방침 | 이용 약관</div>
        <div className={classes.secondline}>All rights reserved @ Codestates</div>
      </footer>
    </>
  )
}

export default Footer