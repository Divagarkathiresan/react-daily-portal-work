import React from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LoginPage from './loginpage';
import Home from "./homepage";
import Orders from "./Orders";
import { OrderProvider } from './OrderContext';
function App() {
  return (
    <OrderProvider>
    <Router>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/home" element={<Home />} />
        <Route path="/order" element={<Orders />} />
      </Routes>
    </Router>
    </OrderProvider>
  );
}

export default App;
