import React from 'react'
import MainPage from '../components/MainPage'


const Main = ({ bookmarks, setBookmarks, }) => {
  return (
    <>
      <MainPage bookmarks={bookmarks} setBookmarks={setBookmarks} />
    </>
  )
}

export default Main