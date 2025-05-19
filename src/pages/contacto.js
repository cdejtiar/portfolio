// src/pages/contacto.js
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

export default function Contacto() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Lógica para enviar el formulario
    console.log('Formulario enviado:', formData);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  return (
    <div className="min-h-screen bg-white">
      <Head>
        <title>Contacto | Camila Dejtiar</title>
        <meta name="description" content="Formulario de contacto" />
      </Head>
      
      {/* Header */}
      
      <div className="relative isolate px-6 pt-14 lg:px-8">
        {/* Efecto de fondo */}
        
        <div className="mx-auto max-w-2xl py-16 sm:py-20 lg:py-22">
          <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
            Contáctame
          </h1>
          
          <div className="mt-10">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                  Nombre
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-purple-500 focus:ring-purple-500 p-2 border"
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-purple-500 focus:ring-purple-500 p-2 border"
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700">
                  Mensaje
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  value={formData.message}
                  onChange={handleChange}
                  required
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-purple-500 focus:ring-purple-500 p-2 border"
                />
              </div>
              
              <div>
                <button
                  type="submit"
                  className="rounded-md bg-purple-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2"
                >
                  Enviar Mensaje
                </button>
              </div>
            </form>
            
            <div className="mt-12 border-t border-gray-200 pt-8">
              <h2 className="text-lg font-medium text-gray-900">Otras formas de contacto</h2>
              <div className="mt-4 flex space-x-6">
                <a href="#" className="text-gray-400 hover:text-purple-600">
                  <span className="sr-only">LinkedIn</span>
                  {/* Icono de LinkedIn */}
                </a>
                <a href="#" className="text-gray-400 hover:text-purple-600">
                  <span className="sr-only">GitHub</span>
                  {/* Icono de GitHub */}
                </a>
                <a href="#" className="text-gray-400 hover:text-purple-600">
                  <span className="sr-only">Email</span>
                  {/* Icono de Email */}
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}