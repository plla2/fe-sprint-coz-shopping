import React from 'react'
import MainPage from '../components/MainPage'


const Main = ({ bookmarkState, setBookmarkState }) => {
  return (
    <>
      <MainPage bookmarkState={bookmarkState} setBookmarkState={setBookmarkState} />
    </>
  )
}

export default Main