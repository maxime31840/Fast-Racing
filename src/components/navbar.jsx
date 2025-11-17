import React from 'react';

export default function Navbar() {
  return (
    <nav className="pt-5">
      <div className="flex flex-1 items-center justify-center">
        <div className="hidden sm:ml-6 sm:block">
          <div className="flex items-center space-x-3">

            <a href="#" className="inline-block border border-white rounded-md px-3 py-1 text-sm font-medium text-gray-300 hover:text-white">
              Fast Import
            </a>
            <a href="#" className="inline-block border border-white rounded-md px-3 py-1 text-sm font-medium text-gray-300 hover:text-white">
              Fast Carbone
            </a>
            <a href="#" className="inline-block border border-white rounded-md px-3 py-1 text-sm font-medium text-gray-300 hover:text-white">
              Salle d'exposition
            </a>

            <a href="app.jsx" className="flex items-center px-2">
              <img src="/Logo_Fast-Racing.png" alt="logo fast" className="h-15 w-auto" />
            </a>

            <a href="#" className="inline-block border border-white rounded-md px-3 py-1 text-sm font-medium text-gray-300 hover:text-white">
              Streaming
            </a>
            <a href="#" className="inline-block border border-white rounded-md px-3 py-1 text-sm font-medium text-gray-300 hover:text-white">
              Nous trouver
            </a>
            <a href="../Connection.jsx" className="inline-block border border-white rounded-md px-3 py-1 text-sm font-medium text-gray-300 hover:text-white">
              Rapport
            </a>

          </div>
        </div>
      </div>
    </nav>
  );
}
