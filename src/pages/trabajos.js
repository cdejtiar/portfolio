// src/pages/trabajos.js
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

export default function Trabajos() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const projects = [
    {
      title: "Proyecto 1",
      description: "Descripción breve del proyecto y su objetivo.",
      tags: ["UI Design", "React", "Figma"],
      image: "/images/project1.jpg"
    },
    // Más proyectos...
  ];

  return (
    <div className="min-h-screen bg-white">
      <Head>
        <title>Mis Trabajos | Camila Dejtiar</title>
        <meta name="description" content="Portfolio de mis proyectos" />
      </Head>
      
      {/* Header */}
      
      <div className="relative isolate px-6 pt-14 lg:px-8">
        {/* Efecto de fondo */}
        
        <div className="mx-auto max-w-6xl py-16 sm:py-20 lg:py-22">
          <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
            Mis Trabajos
          </h1>
          
          <div className="mt-10 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {projects.map((project) => (
              <div key={project.title} className="group relative overflow-hidden rounded-xl shadow-lg transition-all hover:shadow-xl">
                <div className="aspect-[4/3] w-full overflow-hidden bg-gray-200">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="h-full w-full object-cover transition-all group-hover:scale-105"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/70 to-transparent opacity-0 transition-opacity group-hover:opacity-100"></div>
                <div className="absolute inset-0 flex translate-y-60 flex-col justify-end p-6 transition-all group-hover:translate-y-0">
                  <h3 className="text-xl font-semibold text-white">{project.title}</h3>
                  <p className="mt-2 text-gray-300">{project.description}</p>
                  <div className="mt-3 flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span key={tag} className="rounded-full bg-purple-600/90 px-3 py-1 text-xs text-white">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}