import React, { useState, useEffect } from 'react'
import axios from 'axios';
import MainPageItem from './MainPageItem';
import BookmarkItem from './BookmarkItem';


const MainPage = ({ bookmarkState, setBookmarkState }) => {
  const [res, setRes] = useState([])
  // const [bookMark, setBookMark] = useState([]);
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
  // useEffect(() => {
  //   const storedBookMark = JSON.parse(localStorage.getItem("bookmarks")) || [];
  //   setBookMark(storedBookMark)
  // }, [])

  // const handleBookMarks = () => {
  //   const newBookMarks = res

  //   setBookMark([newBookMarks]);
  //   localStorage.setItem('bookmarks', JSON.stringify([newBookMarks]));

  // }

  return (
    <>
      <h2 style={{ padding: "15px" }}>상품 페이지</h2>
      <MainPageItem itemList={res} bookmarkState={bookmarkState} setBookmarkState={setBookmarkState} />
      <h2 style={{ padding: "5px 10px" }}>북마크 리스트</h2>
      <BookmarkItem bookmarkState={bookmarkState} setBookmarkState={setBookmarkState} />
    </>
  )
}

export default MainPage