// app/page.js

import React from 'react';
import Header from '@/component/Header';
import Footer from '@/component/Footer';
import PreAgendaTable from '@/component/PreAgendaTable'
import SplashLoader from '@/component/SplashLoader';
import RotateDeviceWarning from '@/component/RotateDeviceWarning';

export default function Home() {
  return (
    <>
      <RotateDeviceWarning />
      <SplashLoader duration={5000}>
        <div className="bg-yellow-400 min-h-screen p-4 flex flex-col">
          <div className="w-full">
            <Header />
          </div>

          <div className="">
            {/* Kontainer untuk dua tabel agenda (posisi atas-bawah) */}
            <div className="">
                <PreAgendaTable />
            </div>
          </div>
          <Footer />
        </div>
      </SplashLoader>
    </>
  );
}