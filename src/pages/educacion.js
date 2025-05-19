// src/pages/educacion.js
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

export default function Educacion() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-white">
      <Head>
        <title>Educación | Camila Dejtiar</title>
        <meta name="description" content="Mi formación académica" />
      </Head>
      
      {/* Header (igual que en index) */}
      <header className="absolute inset-x-0 top-0 z-50">
        {/* ... mismo header que en tu index ... */}
      </header>

      {/* Contenido específico de la página */}
      <div className="relative isolate px-6 pt-14 lg:px-8">
        <div
          aria-hidden="true"
          className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
        >
          <div
            style={{
              clipPath:
                "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
            }}
            className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#6f3da7] to-[#defffc] opacity-40 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
          />
        </div>
        
        <div className="mx-auto max-w-2xl py-16 sm:py-20 lg:py-22">
          <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
            Educación
          </h1>
          
          {/* Aquí iría el contenido específico de educación */}
          <div className="mt-10 space-y-8">
            <div className="border-l-4 border-purple-600 pl-4">
              <h2 className="text-2xl font-semibold text-gray-800">Título Universitario</h2>
              <p className="mt-2 text-gray-600">Nombre de la Universidad, Año de graduación</p>
              <p className="mt-1 text-gray-500">Descripción breve del programa de estudios</p>
            </div>
            
            <div className="border-l-4 border-purple-600 pl-4">
              <h2 className="text-2xl font-semibold text-gray-800">Cursos Relevantes</h2>
              <ul className="mt-2 list-disc pl-5 text-gray-600 space-y-2">
                <li>Curso 1 - Institución (Año)</li>
                <li>Curso 2 - Institución (Año)</li>
                <li>Curso 3 - Institución (Año)</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}