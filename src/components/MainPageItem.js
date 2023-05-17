import React, { useState } from 'react'
import classes from "./MainPage.module.css"
import bookmark from "../assets/Property 1=off.png"
import Modal from '../UI/Modal/Modal';
import { styled } from 'styled-components';

const MainPageItem = ({ itemList, setBookmarks }) => {
  const [isOpen, setIsOpen] = useState(false);
  const onClickButton = () => {
    setIsOpen(true);
  }
  const handleBookmark = (item) => {
    const bookmark = JSON.parse(localStorage.getItem("bookmark")) || [];
    const itemIndex = bookmark.findIndex(x => x.id === item.id);
    const isExistingItem = itemIndex !== -1;

    let updatedBookmark;
    if (isExistingItem) {
      updatedBookmark = bookmark.filter((_, index) => index !== itemIndex);
    } else {
      updatedBookmark = [item, ...bookmark];
    }
    localStorage.setItem("bookmark", JSON.stringify(updatedBookmark));
    setBookmarks(updatedBookmark)
  }

  return (
    <ul className={classes.itemList}>
      {itemList.map(item => {
        switch (item.type) {
          case "Product":
            return (
              <li className={classes.item} key={item.id}>
                <span className={classes.imgBox}>
                  <AppWrap>
                    {isOpen && (<Modal bookmark={bookmark} title={item.title} img={item.image_url} open={isOpen} onClose={() => { setIsOpen(false) }} />)}
                    <img
                      className={classes.img}
                      src={item.image_url}
                      alt={item.title}
                      onClick={onClickButton}
                    />
                    <img
                      className={classes.bookmark}
                      src={bookmark}
                      alt='bookmark'
                      onClick={() => handleBookmark(item)}
                    />
                  </AppWrap>
                </span>
                <span className={classes.firstLine}>
                  <span className={classes.title}>{item.title}</span>
                  <span className={classes.percent}>
                    {item.discountPercentage}%
                  </span>
                </span>
                <span className={classes.follower}>
                  {item.price
                    .toString()
                    .replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",")}
                  원
                </span>
              </li>
            );
          case "Category":
            return (
              <li className={classes.item} key={item.id}>
                <span className={classes.imgBox}>
                  <img
                    className={classes.img}
                    src={item.image_url}
                    alt={item.title}
                  />
                  <img
                    className={classes.bookmark}
                    src={bookmark}
                    alt='bookmark'
                    onClick={() => handleBookmark(item)}
                  />
                </span>
                <span className={classes.Catetitle}>#{item.title}</span>
              </li>
            );
          case "Exhibition":
            return (
              <li className={classes.item} key={item.id}>
                <span className={classes.imgBox}>
                  <img
                    className={classes.img}
                    src={item.image_url}
                    alt={item.title}
                  />
                  <img
                    className={classes.bookmark}
                    src={bookmark}
                    alt='bookmark'
                    onClick={() => handleBookmark(item)} />
                </span>
                <span className={classes.title}>{item.title}</span>{" "}
                {item.sub_title}
              </li>
            );
          case "Brand":
            return (
              <li className={classes.item} key={item.id}>
                <span className={classes.imgBox}>
                  <img
                    className={classes.img}
                    src={item.brand_image_url}
                    alt={item.brand_name}
                  />
                  <img
                    className={classes.bookmark}
                    src={bookmark}
                    alt='bookmark'
                    onClick={() => handleBookmark(item)} />
                </span>
                <span className={classes.firstLine}>
                  <span className={classes.title}>{item.brand_name}</span>
                  <span className={classes.percent}>관심고객수</span>{" "}
                </span>
                <span className={classes.follower}>
                  {item.follower
                    .toString()
                    .replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",")}
                </span>
              </li>
            );
          default:
            return null;
        }
      })}
    </ul>
  );
}
const AppWrap = styled.div`
  /* text-align: center;
  margin: 50px auto; */
`;
export default MainPageItem;