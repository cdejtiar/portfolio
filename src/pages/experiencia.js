// src/pages/experiencia.js
import { useState } from "react";
import { Dialog, DialogPanel } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import Head from "next/head";

const navigation = [
  { name: "Educación", href: "/educacion" },
  { name: "Experiencia", href: "/experiencia" },
  { name: "Habilidades", href: "/habilidades" },
  { name: "Mis Trabajos", href: "/trabajos" },
];

export default function Experiencia() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-white">
      <Head>
        <title>Experiencia | Camila Dejtiar</title>
        <meta name="description" content="Mi experiencia profesional" />
      </Head>
      
      {/* Header */}
      
      <div className="relative isolate px-6 pt-14 lg:px-8">
        {/* Efecto de fondo */}
        
        <div className="mx-auto max-w-4xl py-16 sm:py-20 lg:py-22">
          <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
            Experiencia Profesional
          </h1>
          
          <div className="mt-10 space-y-12">
            <div className="relative pl-8">
              <div className="absolute left-0 top-0 h-full w-0.5 bg-purple-600"></div>
              <div className="absolute left-0 top-0 h-4 w-4 -translate-x-1/2 rounded-full bg-purple-600"></div>
              
              <div className="pl-6">
                <h2 className="text-2xl font-semibold text-gray-800">Puesto de Trabajo</h2>
                <p className="mt-1 text-gray-600">Empresa | Fecha de inicio - Fecha de fin</p>
                <p className="mt-2 text-gray-500">Descripción de responsabilidades y logros.</p>
                <ul className="mt-2 list-disc pl-5 text-gray-600 space-y-1">
                  <li>Logro o responsabilidad 1</li>
                  <li>Logro o responsabilidad 2</li>
                  <li>Logro o responsabilidad 3</li>
                </ul>
              </div>
            </div>
            
            {/* Más items de experiencia */}
          </div>
        </div>
      </div>
    </div>
  );
}