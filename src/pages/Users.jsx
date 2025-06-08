import React from 'react';

const penggunaDummy = [
  { nama: 'Bayu Segoro', email: 'bayu@gmail.com', saldo: 12000 },
  { nama: 'Rahma Putri', email: 'rahma@mail.com', saldo: 8500 },
  { nama: 'Rizky Maulana', email: 'rizky@bayyku.my.id', saldo: 45200 },
];

const Users = () => {
  return (
    <div className="p-4">
      <h2 className="text-xl font-bold mb-4">Daftar Pengguna</h2>
      <table className="w-full text-left border border-gray-300">
        <thead>
          <tr className="bg-gray-100">
            <th className="border px-4 py-2">Nama</th>
            <th className="border px-4 py-2">Email</th>
            <th className="border px-4 py-2">Saldo</th>
          </tr>
        </thead>
        <tbody>
          {penggunaDummy.map((user, index) => (
            <tr key={index}>
              <td className="border px-4 py-2">{user.nama}</td>
              <td className="border px-4 py-2">{user.email}</td>
              <td className="border px-4 py-2">Rp {user.saldo.toLocaleString()}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Users;
