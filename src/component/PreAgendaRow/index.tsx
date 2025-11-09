// components/PreAgendaRow.tsx

import React from 'react';

// Mendefinisikan tipe data untuk props AgendaRow
interface AgendaRowProps {
  kegiatan: string;
  tanggal: string;
  waktu: string;
  tempat: string;
  pelaksana: string;
  catatan: string;
}
const PreAgendaRow = ({ kegiatan, tanggal, waktu, tempat, pelaksana, catatan }: AgendaRowProps) => {
  return (
    <div className="grid grid-cols-6 gap-4 p-4 text-gray-800 bg-gray-50 hover:bg-yellow-100 transition-colors duration-400 transform hover:scale-105">
      <div className="text-center text-xs font-bold">{kegiatan}</div>
      <div className="text-center ">{tanggal}</div>
      <div className="text-center">{waktu}</div>
      <div className="text-center">{tempat}</div>
      <div className="text-center">{pelaksana}</div>
      <div className="text-center">{catatan}</div>
    </div>
  );
};

export default PreAgendaRow;