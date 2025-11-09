// components/Header.tsx

import React from 'react';
import Image from 'next/image'; // Import komponen Image dari Next.js
import Link from 'next/link';

const Header = () => {
  return (
    <div className="bg-white p-3 rounded-2xl shadow-lg border-b-6 border-yellow-900 flex items-center space-x-4 justify-between">
      <div className="flex items-center space-x-4">
        <Image
          src="/logo_hst.png" // Ganti dengan path logo Anda
          alt="Logo Hulu Sungai Tengah"
          width={60} // Sesuaikan ukuran lebar
          height={60} // Sesuaikan ukuran tinggi
          className="" // Opsional: membuat logo berbentuk lingkaran
        />
        <div>
          <h1 className="text-4xl font-extrabold text-blue-950">E - Agenda</h1>
          <p className="text-blue-950 mt-1 text-sm md:text-base">Display Agenda Pemerintah Daerah Kabupaten Hulu Sungai Tengah</p>
        </div>
      </div>
      <Link href="//e-agenda.hstkab.go.id">
       <button className="px-6 py-2 bg-yellow-900 text-white font-bold rounded-2xl hover:bg-yellow-400 hover:text-blue-950 transition-colors duration-200 shadow-md">
        Login
      </button>
      </Link>
    </div>
  );
};

export default Header;