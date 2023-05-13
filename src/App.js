import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import Main from './pages/Main';
import CartListPage from './pages/CartListPage';
import BookMarkPage from './pages/BookMarkPage';

function App() {
  return (
    <BrowserRouter>
      <div>
        <Header />
        <Routes>
          <Route path='/' element={<Main />} />
          <Route path="/cartlist" element={<CartListPage />} />
          <Route path="/bookmark" element={<BookMarkPage />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
