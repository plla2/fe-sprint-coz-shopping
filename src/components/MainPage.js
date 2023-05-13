import React, { useState, useEffect } from 'react'
import axios from 'axios';
import MainPageItem from './MainPageItem';


const MainPage = () => {
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
  console.log(res)
  return (
    <>
      <h2>상품 페이지</h2>
      <MainPageItem itemList={res} />
    </>
  )
}

export default MainPage