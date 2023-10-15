import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Provider, useSelector } from 'react-redux';
import store, { persistor } from './redux/store';
import Home from './pages/Home/Index';
import Navbar from './components/home-components/Navbar/Index';
import Transactions from './pages/Transactions/Index';
import Accounts from './pages/Accounts/Index';
import Login from './pages/Login/Index';
import Register from './pages/Register/Index';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import { PersistGate } from 'redux-persist/integration/react';

const App = () => {
  
  return (
    <div>
      <Provider store={store}>
        <PersistGate persistor={persistor}>
          <BrowserRouter>
            {/* <Navbar /> */}
            <Routes>
              <Route path='/inicio' element={
                <PrivateRoute login='entrar'>
                  <Home />
                </PrivateRoute>
              }
              />
              <Route path='/lancamentos' element={
                <PrivateRoute login='entrar'>
                  <Transactions />
                </PrivateRoute>
              }
              />
              <Route path='/contas' element={
                <PrivateRoute login='entrar'>
                  <Accounts />
                </PrivateRoute>
              }
              />
              <Route path='/entrar' element={<Login />} />
              <Route path='/cadastrar' element={<Register />} />
            </Routes>
          </BrowserRouter>
        </PersistGate>
      </Provider>
    </div>
  )
}

export default App