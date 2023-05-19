import React, { useState } from 'react'
import classes from "./MainPage.module.css"
import Card from '../Card/Card';

const MainPageItem = ({ itemList, setBookmarks }) => {

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
      {itemList?.map(item => {
        return (
          <Card item={item} key={`${item.id}`} handleBookmark={handleBookmark} />
        )
      })}
    </ul>
  );
}

export default MainPageItem;