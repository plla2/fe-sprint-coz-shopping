import React from 'react'
import classes from "./CartListPage.module.css"
import Filter from '../../components/Filter/Filter';
import Card from '../../components/Card/Card';

const CartListPage = ({ itemList2, setBookmarkState, filter, setFilter, setRes2 }) => {
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
    setBookmarkState(updatedBookmark)
  }

  return (
    <>
      <Filter setRes2={setRes2} itemList2={itemList2} filter={filter} setFilter={setFilter} />
      <ul className={classes.itemList}>
        {itemList2.map(item => {
          return (
            <Card item={item} key={`${item.id}`} handleBookmark={handleBookmark} />
          )
        })}
      </ul>
    </>
  )
}

export default CartListPage