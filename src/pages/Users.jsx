import React from 'react';

function User() {
  // Data dummy, nanti bisa diganti dengan API
  const users = [
    { id: 1, name: 'Bayu Segoro', email: 'bayychannel01@gmail.com' },
    { id: 2, name: 'Rizky Pratama', email: 'rizky@email.com' },
  ];

  return (
    <div className="p-4">
      <h2 className="text-xl font-semibold mb-4">Daftar Pengguna</h2>
      <table className="w-full text-left border">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-2 border">#</th>
            <th className="p-2 border">Nama</th>
            <th className="p-2 border">Email</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user, i) => (
            <tr key={user.id} className="hover:bg-gray-100">
              <td className="p-2 border">{i + 1}</td>
              <td className="p-2 border">{user.name}</td>
              <td className="p-2 border">{user.email}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default User;