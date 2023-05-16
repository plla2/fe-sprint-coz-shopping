import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import Main from './pages/Main';
import CartListPage from './pages/CartListPage';
import BookMarkPage from './pages/BookMarkPage';
import { useEffect, useState } from 'react';
import Footer from './components/Footer';
import axios from 'axios';
import Modal from './UI/Modal/Modal';
import { styled } from 'styled-components';

function App() {
  const bookmarkRender = JSON.parse(localStorage.getItem("bookmark"));
  const [bookmarkState, setBookmarkState] = useState(bookmarkRender)
  const [res2, setRes2] = useState([])
  useEffect(() => {
    axios.get('http://cozshopping.codestates-seb.link/api/v1/products?'
    )
      .then(response => {
        setRes2(response.data);
      });
  }, []);
  // console.log(res2)
  return (
    <BrowserRouter>
      <div>
        <Header />
        <Routes>
          <Route path='/' element={<Main bookmarkState={bookmarkState} setBookmarkState={setBookmarkState} />} />
          <Route path="/products/list" element={<CartListPage bookmarkState={bookmarkState} setBookmarkState={setBookmarkState} itemList2={res2} />} />
          <Route path="/bookmark" element={<BookMarkPage />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
