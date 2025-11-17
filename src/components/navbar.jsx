import React from 'react';
import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <nav className="pt-5">
      <div className="flex items-center justify-center">
        <div className="hidden sm:ml-6 sm:block">
          <div className="flex items-center space-x-10 text-lg pr-20"> {/* font size increased */}

            <Link to="/fast-import" className="inline-block border border-white rounded-md px-3 py-1 font-medium text-gray-300 hover:text-white">
              Fast Import
            </Link>
            <Link to="/fast-carbone" className="inline-block border border-white rounded-md px-3 py-1 font-medium text-gray-300 hover:text-white">
              Fast Carbone
            </Link>
            <Link to="/showroom" className="inline-block border border-white rounded-md px-3 py-1 font-medium text-gray-300 hover:text-white">
              Showroom
            </Link>

            <Link to="/" className="flex items-center px-2">
              <img src="/Logo_Fast-Racing.png" alt="logo fast" className="h-15 w-auto" />
            </Link>

            <Link to="/streaming" className="inline-block border border-white rounded-md px-3 py-1 font-medium text-gray-300 hover:text-white">
              Streaming
            </Link>
            <Link to="/contact" className="inline-block border border-white rounded-md px-3 py-1 font-medium text-gray-300 hover:text-white">
              Nous trouver
            </Link>
            <Link to="/connexion" className="inline-block border border-white rounded-md px-3 py-1 font-medium text-gray-300 hover:text-white">
              Connexion
            </Link>

          </div>
        </div>
      </div>
    </nav>
  );
}
