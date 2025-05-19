// src/pages/habilidades.js
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

export default function Habilidades() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const skills = [
    { category: "Diseño", items: ["UI Design", "UX Research", "Prototipado", "Figma", "Adobe XD"] },
    { category: "Desarrollo", items: ["HTML/CSS", "JavaScript", "React", "Next.js", "Tailwind CSS"] },
    { category: "Soft Skills", items: ["Trabajo en equipo", "Comunicación", "Resolución de problemas"] },
  ];

  return (
    <div className="min-h-screen bg-white">
      <Head>
        <title>Habilidades | Camila Dejtiar</title>
        <meta name="description" content="Mis habilidades y competencias" />
      </Head>
      
      {/* Header */}
      
      <div className="relative isolate px-6 pt-14 lg:px-8">
        {/* Efecto de fondo */}
        
        <div className="mx-auto max-w-4xl py-16 sm:py-20 lg:py-22">
          <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
            Mis Habilidades
          </h1>
          
          <div className="mt-10 space-y-12">
            {skills.map((skillGroup) => (
              <div key={skillGroup.category} className="space-y-4">
                <h2 className="text-2xl font-semibold text-purple-800">{skillGroup.category}</h2>
                <div className="flex flex-wrap gap-3">
                  {skillGroup.items.map((skill) => (
                    <span 
                      key={skill}
                      className="inline-flex items-center rounded-full bg-purple-100 px-4 py-2 text-sm font-medium text-purple-800"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}