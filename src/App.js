import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import Main from './pages/Main';
import CartListPage from './pages/CartListPage';
import BookMarkPage from './pages/BookMarkPage';
import { useEffect, useState } from 'react';
import Footer from './components/Footer';
import axios from 'axios';

function App() {
  const bookmarkRender = JSON.parse(localStorage.getItem("bookmark")) || [];
  const [bookmarks, setBookmarks] = useState(bookmarkRender)
  const [res2, setRes2] = useState([])
  const [filter, setFilter] = useState("every")
  useEffect(() => {
    axios.get('http://cozshopping.codestates-seb.link/api/v1/products?'
    )
      .then(response => {
        setRes2(response.data)
        if (filter === "every") {
          return setRes2(response.data);
        }
        const result = response.data.filter((el) => el.type === filter);
        setRes2(result)
      }
      );

  }, [filter]);


  return (
    <BrowserRouter>
      <div>
        <Header />
        <Routes>
          <Route path='/' element={<Main bookmarks={bookmarks} setBookmarks={setBookmarks} />} />
          <Route path="/products/list" element={<CartListPage filter={filter} setFilter={setFilter} setBookmarkState={setBookmarks} itemList2={res2} setRes2={setRes2} />} />
          <Route path="/bookmark" element={<BookMarkPage filter={filter} setFilter={setFilter} setBookmarks={setBookmarks} />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
