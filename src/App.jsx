import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

const Sidebar = () => (
  <div className="w-64 h-screen bg-gray-900 text-white p-5">
    <h1 className="text-2xl font-bold mb-8">Dompetku Admin</h1>
    <ul className="space-y-4">
      <li><Link to="/">Dashboard</Link></li>
      <li><Link to="/pengguna">Pengguna</Link></li>
      <li><Link to="/transaksi">Transaksi</Link></li>
      <li><Link to="/topup-game">Top Up Game</Link></li>
      <li><Link to="/voucher">Voucher</Link></li>
      <li><Link to="/token-pln">Token PLN</Link></li>
      <li><Link to="/kuota">Kuota</Link></li>
      <li><Link to="/qris-merchant">QRIS Merchant</Link></li>
      <li><Link to="/virtual-sim">Virtual SIM</Link></li>
    </ul>
  </div>
);

const Dashboard = () => (
  <div className="p-8">
    <h2 className="text-2xl font-bold mb-4">Dashboard</h2>
    <p>Selamat datang di Dompetku Admin Panel.</p>
  </div>
);

const Placeholder = ({ title }) => (
  <div className="p-8">
    <h2 className="text-2xl font-bold mb-4">{title}</h2>
    <p>Halaman {title} akan ditampilkan di sini.</p>
  </div>
);

const App = () => (
  <Router>
    <div className="flex">
      <Sidebar />
      <div className="flex-1 bg-gray-100 min-h-screen">
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/pengguna" element={<Placeholder title="Pengguna" />} />
          <Route path="/transaksi" element={<Placeholder title="Transaksi" />} />
          <Route path="/topup-game" element={<Placeholder title="Top Up Game" />} />
          <Route path="/voucher" element={<Placeholder title="Voucher" />} />
          <Route path="/token-pln" element={<Placeholder title="Token PLN" />} />
          <Route path="/kuota" element={<Placeholder title="Kuota" />} />
          <Route path="/qris-merchant" element={<Placeholder title="QRIS Merchant" />} />
          <Route path="/virtual-sim" element={<Placeholder title="Virtual SIM" />} />
        </Routes>
      </div>
    </div>
  </Router>
);

export default App;
