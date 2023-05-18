import React, { useEffect, useState } from 'react'
import classes from "./BookmarkItem.module.css"
import bookmarkon from "../assets/Property 1=on.png"
import Card from './Card';

const BookmarkItem = ({ bookmarks, setBookmarks }) => {
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
  const renderItem = bookmarks.slice(0, 4)
  return (
    <div>
      <ul className={classes.itemList}>
        {renderItem?.map(item => {
          return (
            <Card item={item} key={`${item.id}`} handleBookmark={handleBookmark} />
          )
        })}
      </ul>
    </div>
  )
}

export default BookmarkItem