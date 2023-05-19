import React from 'react'
import classes from "./Footer.module.css"

const Footer = () => {
  return (
    <>
      <footer className={classes.footer}>
        <div className={classes.firstLine}>개인정보 처리방침 | 이용 약관</div>
        <div className={classes.secondLine}>All rights reserved @ Codestates</div>
      </footer>
    </>
  )
}

export default Footer