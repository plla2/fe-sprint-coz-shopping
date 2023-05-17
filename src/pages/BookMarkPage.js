import React, { useEffect, useState } from 'react'
import classes from "./BookMarkPage.module.css"
import Filter from '../components/Filter';
import bookmark from "../assets/Property 1=on.png"


const BookMarkPage = ({ filter, setFilter }) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const storage = JSON.parse(localStorage.getItem("bookmark"))
    if (filter === 'every') {
      return setData(storage)
    }
    setData(storage.filter((item) => item.type === filter))
  }, [filter])
  return (
    <>
      <Filter filter={filter} setFilter={setFilter} />
      <ul className={classes.itemList}>
        {data.map(item => {
          switch (item.type) {
            case "Product":
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
                    // onClick={() => handleBookmark(item)}
                    />
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
                    // onClick={() => handleBookmark(item)}
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
                    // onClick={() => handleBookmark(item)} 
                    />
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
                    // onClick={() => handleBookmark(item)} 
                    />
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
    </>
  )
}

export default BookMarkPage