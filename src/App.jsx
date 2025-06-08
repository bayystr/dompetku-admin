import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Dashboard from './routes/pages/Dashboard';
import User from './routes/pages/User';
import Produk from './routes/pages/Produk';

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/user" element={<User />} />
          <Route path="/produk" element={<Produk />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;