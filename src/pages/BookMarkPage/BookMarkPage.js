import React, { useEffect, useState } from 'react'
import classes from "./BookMarkPage.module.css"
import Filter from '../../components/Filter/Filter';
import Card from '../../components/Card/Card';


const BookMarkPage = ({ filter, setFilter, setBookmarks }) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const storage = JSON.parse(localStorage.getItem("bookmark"));
    if (filter === 'every') {
      return setData(storage)
    }
    setData(storage.filter((item) => item.type === filter))
  }, [filter])
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
    <>
      <Filter filter={filter} setFilter={setFilter} />
      <ul className={classes.itemList}>
        {data.map(item => {
          return (
            <Card item={item} key={`${item.id}`} handleBookmark={handleBookmark} />
          )
        })}
      </ul>
    </>
  )
}

export default BookMarkPage