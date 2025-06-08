import React, { useState } from "react";

// Pages & Components
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

const Login = ({ onLogin }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    if (email === "bayychannel01@gmail.com" && password === "admin123") {
      onLogin(true);
    } else {
      alert("Login gagal. Email atau password salah.");
    }
  };

  return (
    <div className="h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-6 rounded-lg shadow-md w-full max-w-sm">
        <h2 className="text-2xl font-semibold mb-4 text-center">Login Admin</h2>
        <input
          type="email"
          placeholder="Email"
          className="w-full px-4 py-2 border mb-3 rounded"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          className="w-full px-4 py-2 border mb-4 rounded"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button
          onClick={handleLogin}
          className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600"
        >
          Login
        </button>
      </div>
    </div>
  );
};

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [activeMenu, setActiveMenu] = useState("dashboard");

  if (!isLoggedIn) {
    return <Login onLogin={setIsLoggedIn} />;
  }

  const renderPage = () => {
    switch (activeMenu) {
      case "dashboard":
        return <Dashboard />;
      case "users":
        return <Users />;
      case "transactions":
        return <Transactions />;
      default:
        return <Dashboard />;
    }
  };

  return (
    <div className="flex h-screen">
      <aside className="w-64 bg-gray-800 text-white flex flex-col">
        <div className="p-4 text-xl font-bold border-b border-gray-700">
          Dompetku Admin
        </div>
        <nav className="flex-1 p-4 space-y-2">
          <button
            onClick={() => setActiveMenu("dashboard")}
            className="block w-full text-left hover:bg-gray-700 p-2 rounded"
          >
            Dashboard
          </button>
          <button
            onClick={() => setActiveMenu("users")}
            className="block w-full text-left hover:bg-gray-700 p-2 rounded"
          >
            Pengguna
          </button>
          <button
            onClick={() => setActiveMenu("transactions")}
            className="block w-full text-left hover:bg-gray-700 p-2 rounded"
          >
            Transaksi
          </button>
        </nav>
        <div className="p-4 border-t border-gray-700">
          <button
            onClick={() => setIsLoggedIn(false)}
            className="w-full bg-red-500 py-2 rounded hover:bg-red-600"
          >
            Logout
          </button>
        </div>
      </aside>
      <main className="flex-1 bg-gray-100 overflow-auto">{renderPage()}</main>
    </div>
  );
}

export default App;
