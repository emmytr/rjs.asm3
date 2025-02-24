import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import CartPage from './Pages/CartPage/CartPage';
import HomePage from './Pages/HomePage/HomePage';
import DetailPage from './Pages/DetailPage/DetailPage';
import ShopPage from './Pages/ShopPage/ShopPage';
import CheckoutPage from './Pages/CheckoutPage/CheckoutPage';
import LoginPage from './Pages/Auth/LoginPage';
import RegisterPage from './Pages/Auth/RegisterPage';
import Layout from './Navigation/Layout';

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/shop' element={<ShopPage />} />
          <Route path='/detail/:id' element={<DetailPage />} />
          <Route path='/cart' element={<CartPage />} />
          <Route path='/checkout' element={<CheckoutPage />} />
          <Route path='/login' element={<LoginPage />} />
          <Route path='/register' element={<RegisterPage />} />
        </Routes >
      </Layout>
    </Router >

  );
}

export default App;
