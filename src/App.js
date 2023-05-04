import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import AddTransaction from './pages/AddTransaction/Index';
import EditTransaction from './pages/EditTransaction/Index';
import Dashboard from './pages/Dashboard/Index';
import Login from './pages/Login/Index';
import { Provider } from 'react-redux';
import store, { persistor } from './redux/store';
import { PersistGate } from 'redux-persist/integration/react';
import PrivateRoute from './components/PrivateRoute/Index';
import PrivateRouteLogin from './components/PrivateRouteLogin/Index';

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <PersistGate persistor={persistor}>
          <BrowserRouter>
            <Routes>
              <Route path="/" element={
                <PrivateRoute main='entrar'>
                  <Dashboard />
                </PrivateRoute>
              }
              />
              <Route path="/add-transacao" element={
                <PrivateRoute main='entrar'>
                  <AddTransaction />
                </PrivateRoute>
              }
              />
              <Route path="/editar-transacao/:id" element={
                <PrivateRoute main='entrar'>
                  <EditTransaction />
                </PrivateRoute>
              }
              />
              <Route path="/entrar" element={
                <PrivateRouteLogin>
                  <Login />
                </PrivateRouteLogin>
              }
              />
            </Routes>
          </BrowserRouter>
        </PersistGate>
      </Provider>
    </div>
  );
}

export default App;
