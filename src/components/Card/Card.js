import React, { useState } from 'react'
import classes from "./Card.module.css"
import bookmark from "../../assets/Property 1=off.png"
import bookmarkon from "../../assets/Property 1=on.png"
import Modal from '../../UI/Modal/Modal';


const Card = ({ item, handleBookmark, bookmarked }) => {
  const [isOpen, setIsOpen] = useState(false);
  const onClickButton = () => {
    setIsOpen(!isOpen);
  }

  return (
    <li className={classes.item}>
      {isOpen && <Modal onClose={() => { setIsOpen(false) }} img={item.image_url || item.brand_image_url} title={item.title || item.brand_name} />}
      <span className={classes.imgBox}>
        <img
          className={classes.img}
          src={item.image_url ? item.image_url : item.brand_image_url}
          alt={item.title}
          onClick={onClickButton}
        />
        <img
          className={classes.bookmark}
          src={bookmarked === true ? bookmarkon : bookmark}
          alt='bookmark'
          onClick={() => handleBookmark(item)}
        />
      </span>
      <span className={classes.firstLine}>
        {<span className={classes.title}>{item.title ? item.title : item.brand_name}</span>}
        {(() => {
          switch (item.type) {
            case "Brand":
              return <span className={classes.customer}>관심고객수</span>;
            case "Product":
              return (
                <span className={classes.percent}>
                  {item.discountPercentage}%
                </span>
              );
            default:
              return "";
          }
        })()}
      </span>
      <div className={classes.firstLine}>
        <span>{item.sub_title ? item.sub_title : ""}</span>
        <span className={classes.follower}>
          {(() => {
            switch (item.type) {
              case "Product":
                return `${item.price
                  .toString()
                  .replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",")}원`;
              case "Brand":
                return item.follower
                  .toString()
                  .replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",");
              default:
                return "";
            }
          })()}
        </span>
      </div>
    </li>
  )
}

export default Card