import React from 'react'
import MainPage from '../components/MainPage'


const Main = ({ bookmarkState, setBookmarkState, itemList }) => {
  return (
    <>
      <MainPage bookmarkState={bookmarkState} setBookmarkState={setBookmarkState} />
    </>
  )
}

export default Main