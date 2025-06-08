import React, { useState } from "react";
import ReactDOM from "react-dom/client";

const Dashboard = () => (
  <div className="p-6">
    <h1 className="text-2xl font-bold">Dashboard</h1>
    <p>Selamat datang di Dompetku Admin Panel.</p>
  </div>
);

const Users = () => (
  <div className="p-6">
    <h1 className="text-2xl font-bold">Daftar Pengguna</h1>
    <p>Data pengguna akan ditampilkan di sini.</p>
  </div>
);

const Transactions = () => (
  <div className="p-6">
    <h1 className="text-2xl font-bold">Transaksi</h1>
    <p>Semua data transaksi ditampilkan di sini.</p>
  </div>
);

const TopUpGame = () => (
  <div className="p-6">
    <h1 className="text-2xl font-bold">Top Up Game</h1>
    <p>Fitur top up game akan ditampilkan di sini.</p>
  </div>
);

const Voucher = () => (
  <div className="p-6">
    <h1 className="text-2xl font-bold">Voucher</h1>
    <p>Fitur pembelian voucher akan ditampilkan di sini.</p>
  </div>
);

const TokenPLN = () => (
  <div className="p-6">
    <h1 className="text-2xl font-bold">Token PLN</h1>
    <p>Fitur pembelian token PLN akan ditampilkan di sini.</p>
  </div>
);

const Kuota = () => (
  <div className="p-6">
    <h1 className="text-2xl font-bold">Kuota Internet</h1>
    <p>Fitur pembelian kuota internet akan ditampilkan di sini.</p>
  </div>
);

const QRIS = () => (
  <div className="p-6">
    <h1 className="text-2xl font-bold">QRIS Merchant</h1>
    <p>Fitur pembuatan QRIS akan ditampilkan di sini.</p>
  </div>
);

const VirtualSIM = () => (
  <div className="p-6">
    <h1 className="text-2xl font-bold">Virtual SIM</h1>
    <p>Fitur beli nomor kosong untuk WhatsApp akan ditampilkan di sini.</p>
  </div>
);

const App = () => {
  const [page, setPage] = useState("Dashboard");

  const renderPage = () => {
    switch (page) {
      case "Dashboard":
        return <Dashboard />;
      case "Users":
        return <Users />;
      case "Transactions":
        return <Transactions />;
      case "TopUpGame":
        return <TopUpGame />;
      case "Voucher":
        return <Voucher />;
      case "TokenPLN":
        return <TokenPLN />;
      case "Kuota":
        return <Kuota />;
      case "QRIS":
        return <QRIS />;
      case "VirtualSIM":
        return <VirtualSIM />;
      default:
        return <Dashboard />;
    }
  };

  return (
    <div className="h-screen flex">
      <div className="w-64 bg-gray-800 text-white p-4 space-y-4">
        <h2 className="text-xl font-bold mb-4">Dompetku Admin</h2>
        <ul className="space-y-2">
          <li><button onClick={() => setPage("Dashboard")} className="hover:text-yellow-300">Dashboard</button></li>
          <li><button onClick={() => setPage("Users")} className="hover:text-yellow-300">Pengguna</button></li>
          <li><button onClick={() => setPage("Transactions")} className="hover:text-yellow-300">Transaksi</button></li>
          <li><button onClick={() => setPage("TopUpGame")} className="hover:text-yellow-300">Top Up Game</button></li>
          <li><button onClick={() => setPage("Voucher")} className="hover:text-yellow-300">Voucher</button></li>
          <li><button onClick={() => setPage("TokenPLN")} className="hover:text-yellow-300">Token PLN</button></li>
          <li><button onClick={() => setPage("Kuota")} className="hover:text-yellow-300">Kuota</button></li>
          <li><button onClick={() => setPage("QRIS")} className="hover:text-yellow-300">QRIS Merchant</button></li>
          <li><button onClick={() => setPage("VirtualSIM")} className="hover:text-yellow-300">Virtual SIM</button></li>
        </ul>
      </div>
      <div className="flex-1 bg-gray-100">{renderPage()}</div>
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
