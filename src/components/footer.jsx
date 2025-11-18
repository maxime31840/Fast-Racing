import React from "react";

export default function Footer() {
  return (
    <footer className="w-full bg-black bg-opacity-50 py-10">
      <div className="max-w-7xl mx-auto px-6 flex justify-around text-white">
        <div className="text-center">
          <h5 className="mb-3 text-2xl font-bold"><a href="/fast-carbone">Fast Carbone</a></h5>
          <p className="text-lg">Vendredi de 14h à 18h</p>
          <p className="text-lg">Samedi à Dimanche de 9h à 18h</p>
        </div>
        <div className="text-center">
          <p className="mb-1 text-2xl font-bold"><a href="mailto:FastracinG@outlook.fr">FastracinG@outlook.fr</a></p>
          <p className="text-lg">+41 (0)76 467 96 69</p>
          <div className="flex justify-center gap-6 mt-3">
            <a href="/contact" className="hover:underline">Contact</a>
            <a href="#" className="hover:underline">Politique de confidentialité</a>
            <a href="#" className="hover:underline">Conditions d'utilisation</a>
          </div>
          <p className="mt-3 text-sm">2025 © Fast RacinG All rights reserved</p>
        </div>
        <div className="text-center">
          <h5 className="mb-3 text-2xl font-bold"><a href="/fast-import">Fast Import</a></h5>
          <p className="text-lg">Vendredi de 14h à 18h</p>
          <p className="text-lg">Samedi à Dimanche de 9h à 18h</p>
        </div>
      </div>
    </footer>
  );
}
