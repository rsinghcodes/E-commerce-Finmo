import { CssBaseline } from '@mui/material';
import { Routes, Route } from 'react-router-dom';
// Pages
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
// utils
import PrivateRoute from './utils/PrivateRoute';
// Redux
import { store } from './redux/store';
import { setCurrentUser } from './redux/reducers/authSlice';

if (localStorage.persistantState) {
  const userData = JSON.parse(localStorage.persistantState);

  store.dispatch(setCurrentUser(userData));
}

function App() {
  return (
    <>
      <Routes>
        <Route element={<PrivateRoute />}>
          <Route path="/" element={<Home />} />
        </Route>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>{' '}
      <CssBaseline />
    </>
  );
}

export default App;
