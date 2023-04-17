import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import AddTransaction from './pages/AddTransaction';
import Dashboard from './pages/Dashboard';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/add-transacao" element={<AddTransaction />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
