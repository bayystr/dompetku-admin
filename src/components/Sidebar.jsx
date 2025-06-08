import React from 'react';
import { Link } from 'react-router-dom';

function Sidebar() {
  return (
    <aside className="bg-gray-100 w-64 min-h-screen p-4">
      <nav className="space-y-2">
        <Link to="/" className="block text-gray-800 hover:font-semibold">Dashboard</Link>
        <Link to="/user" className="block text-gray-800 hover:font-semibold">Pengguna</Link>
        <Link to="/produk" className="block text-gray-800 hover:font-semibold">Produk</Link>
      </nav>
    </aside>
  );
}

export default Sidebar;