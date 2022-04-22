import { CssBaseline } from '@mui/material';
import { Routes, Route } from 'react-router-dom';
// Pages
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import Product from './pages/Product';
import Cart from './pages/Cart';
import Checkout from './pages/Checkout';
// utils
import PrivateRoute from './utils/PrivateRoute';
// Redux
import { store } from './redux/store';
import { setCurrentUser } from './redux/reducers/authSlice';

if (localStorage.persistantState) {
  if (localStorage.getItem('authenticated') == true) {
    const userData = JSON.parse(localStorage.persistantState);

    store.dispatch(setCurrentUser(userData));
  }
}

function App() {
  return (
    <>
      <Routes>
        <Route element={<PrivateRoute />}>
          <Route path="/" element={<Home />} />
        </Route>
        <Route element={<PrivateRoute />}>
          <Route path="/product/:id" element={<Product />} />
        </Route>
        <Route element={<PrivateRoute />}>
          <Route path="/cart" element={<Cart />} />
        </Route>
        <Route element={<PrivateRoute />}>
          <Route path="/checkout" element={<Checkout />} />
        </Route>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
      <CssBaseline />
    </>
  );
}

export default App;
