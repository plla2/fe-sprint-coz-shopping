import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import Main from './pages/Main';
import CartListPage from './pages/CartListPage';
import BookMarkPage from './pages/BookMarkPage';
import { useState } from 'react';
import Footer from './components/Footer';

function App() {
  const bookmarkRender = JSON.parse(localStorage.getItem("bookmark"));
  const [bookmarkState, setBookmarkState] = useState(bookmarkRender)

  return (
    <BrowserRouter>
      <div>
        <Header />
        <Routes>
          <Route path='/' element={<Main bookmarkState={bookmarkState} setBookmarkState={setBookmarkState} />} />
          <Route path="/cartlist" element={<CartListPage />} />
          <Route path="/bookmark" element={<BookMarkPage />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
