import React, { useState, useEffect } from 'react'
import axios from 'axios';
import MainPageItem from './MainPageItem';
import BookmarkItem from './BookMarkItem';
import classes from "./MainPage.module.css"


const MainPage = ({ bookmarks, setBookmarks }) => {
  const [res, setRes] = useState([])
  useEffect(() => {
    axios.get('http://cozshopping.codestates-seb.link/api/v1/products?',
      {
        params: {
          count: 4
        }
      })
      .then(response => {
        setRes(response.data);
      });
  }, []);
  // console.log(res)

  return (
    <>
      <h2 className={classes.itemHead} >상품 리스트</h2>
      <MainPageItem itemList={res} bookmarks={bookmarks} setBookmarks={setBookmarks} />
      <h2 className={classes.bookItemHead} >북마크 리스트</h2>
      <BookmarkItem bookmarks={bookmarks} setBookmarks={setBookmarks} />
    </>
  )
}

export default MainPage