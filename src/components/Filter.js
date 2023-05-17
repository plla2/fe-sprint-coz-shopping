import React from 'react'
import classes from "./Filter.module.css"
import everyImg from "../assets/전체.png"
import productImg from "../assets/상품.png"
import cateImg from "../assets/카테고리.png"
import exhibitionImg from "../assets/기획전.png"
import brandImg from "../assets/브랜드.png"

const Filter = ({ filter, setFilter }) => {
  const filterHandler = (type) => {
    setFilter(type);
  }

  return (
    <>
      <section className={classes.filterContainer}>
        <section className={classes.container}>
          <img className={classes.img} src={everyImg} alt="every" onClick={() => filterHandler("every")} />
          <div className={classes.textContainer} onClick={() => filterHandler("every")}>
            <div className={filter === 'every' ? classes.Text : classes.remainText}>전체</div>
          </div>
        </section>
        <section className={classes.container}>
          <img className={classes.img} src={productImg} alt="상품" onClick={() => filterHandler("Product")} />
          <div className={classes.textContainer} onClick={() => filterHandler("Product")}>
            <div className={filter === 'Product' ? classes.Text : classes.remainText}>상품</div>
          </div>
        </section>
        <section className={classes.container}>
          <img className={classes.img} src={cateImg} alt="카테고리" onClick={() => filterHandler("Category")} />
          <div className={classes.textContainer} onClick={() => filterHandler("Category")}>
            <div className={filter === 'Category' ? classes.Text : classes.remainText}>카테고리</div>
          </div>
        </section>
        <section className={classes.container}>
          <img className={classes.img} src={exhibitionImg} alt="기획전" onClick={() => filterHandler("Exhibition")} />
          <div className={classes.textContainer} onClick={() => filterHandler("Exhibition")}>
            <div className={filter === 'Exhibition' ? classes.Text : classes.remainText}>기획전</div>
          </div>
        </section>
        <section className={classes.container}>
          <img className={classes.img} src={brandImg} alt="브랜드" onClick={() => filterHandler("Brand")} />
          <div className={classes.textContainer} onClick={() => filterHandler("Brand")}>
            <div className={filter === 'Brand' ? classes.Text : classes.remainText}>브랜드</div>
          </div>
        </section>
      </section>
    </>
  )
}

export default Filter