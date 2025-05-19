// src/pages/educacion.js
import { useState } from "react";
import { Dialog, DialogPanel } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import Head from "next/head";

const navigation = [
  { name: "Inicio", href: "/" },
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

      <header className="absolute inset-x-0 top-0 z-50">
        <nav
          aria-label="Global"
          className="flex items-center justify-between p-6 lg:px-8"
        >
          <div className="flex lg:flex-1">
            <a href="#" className="-m-1.5 p-1.5">
              <span className="sr-only">Camila Dejtiar</span>
            </a>
          </div>
          <div className="flex lg:hidden">
            <button
              type="button"
              onClick={() => setMobileMenuOpen(true)}
              className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
            >
              <span className="sr-only">Open main menu</span>
              <Bars3Icon aria-hidden="true" className="size-6" />
            </button>
          </div>
          <div className="hidden lg:flex lg:gap-x-12">
            {navigation.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="relative inline-block text-sm font-semibold text-gray-900 hover:text-purple-900 after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-0 after:bg-purple-900 after:transition-all after:duration-300 hover:after:w-full"
              >
                {item.name}
              </a>
            ))}
          </div>
          <div className="hidden lg:flex lg:flex-1 lg:justify-end">
            <a
              href="/contacto"
              className="relative inline-block text-sm font-semibold text-gray-900 hover:text-purple-900 after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-0 after:bg-purple-900 after:transition-all after:duration-300 hover:after:w-full"
            >
              Contáctame <span aria-hidden="true">&rarr;</span>
            </a>
          </div>
        </nav>
        <Dialog
          open={mobileMenuOpen}
          onClose={setMobileMenuOpen}
          className="lg:hidden"
        >
          <div className="fixed inset-0 z-50" />
          <DialogPanel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
            <div className="flex items-center justify-between">
              <a href="#" className="-m-1.5 p-1.5">
                <span className="sr-only">Camila Dejtiar</span>
                <img
                  alt=""
                  src="https://tailwindui.com/plus/img/logos/mark.svg?color=indigo&shade=600"
                  className="h-8 w-auto"
                />
              </a>
              <button
                type="button"
                onClick={() => setMobileMenuOpen(false)}
                className="-m-2.5 rounded-md p-2.5 text-gray-700"
              >
                <span className="sr-only">Close menu</span>
                <XMarkIcon aria-hidden="true" className="size-6" />
              </button>
            </div>
            <div className="mt-6 flow-root">
              <div className="-my-6 divide-y divide-gray-500/10">
                <div className="space-y-2 py-6">
                  {navigation.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      className="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-gray-900 hover:bg-gray-50"
                    >
                      {item.name}
                    </a>
                  ))}
                </div>
                <div className="py-6">
                  <a
                    href="/contacto"
                    className="-mx-3 block rounded-lg px-3 py-2.5 text-base/7 font-semibold text-gray-900 hover:bg-gray-50"
                  >
                    Contáctame
                  </a>
                </div>
              </div>
            </div>
          </DialogPanel>
        </Dialog>
      </header>

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

          <div className="mt-10 space-y-8">
            <div className="border-l-4 border-purple-600 pl-4">
              <h2 className="text-2xl font-semibold text-gray-800">
                Licenciatura en Tecnología Multimedial
              </h2>
              <p className="mt-2 text-gray-600">
                Universidad Maimónides, 2020 - Actualidad
              </p>
              <p className="mt-1 text-gray-500">
                Carrera de formación integral en tecnología, diseño y
                comunicación multimedial, orientada a la producción de
                contenidos digitales interactivos e innovadores.{" "}
              </p>

              <p className="mt-1 text-gray-500">
                El plan de estudios se organiza en cinco ejes principales: Arte,
                Comunicación y Cultura Digital, Gestión de Proyectos y Negocios
                Digitales, Programación y Tecnología Aplicada, Diseño para la
                Innovación y Lenguajes Multimediales Investigación.{" "}
              </p>

              <p className="mt-1 text-gray-500">
                A lo largo de la cursada se adquieren competencias en
                programación, diseño de interfaces, animación, videojuegos,
                producción audiovisual, sonido, marketing digital, UX/UI,
                comunicación digital y desarrollo de emprendimientos
                tecnológicos. El enfoque combina creatividad, pensamiento
                crítico y dominio técnico para impulsar proyectos multimediales
                de vanguardia.
              </p>
            </div>
            <div className="border-l-4 border-purple-600 pl-4">
              <h2 className="text-2xl font-semibold text-gray-800">
                Bachiller Técnico en Informática y Medios de Comunicación
                Digitales
              </h2>
              <p className="mt-2 text-gray-600">ORT Argentina, 2014 - 2018</p>
              <p className="mt-1 text-gray-500">Egresada con honores </p>
              <p className="mt-1 text-gray-500">
                Formación técnica orientada a preparar profesionales capaces de
                desempeñarse en múltiples roles del ámbito tecnológico, con
                sólidos conocimientos en desarrollo de software, diseño digital
                y análisis de sistemas. La especialización combina cuatro
                pilares fundamentales: Análisis, Desarrollo, Entorno y Diseño,
                formando egresados con un perfil cercano al de un desarrollador
                full stack.
              </p>
            </div>

            <div className="border-l-4 border-purple-600 pl-4">
              <h2 className="text-2xl font-semibold text-gray-800">
                Cursos Complementarios
              </h2>
              <ul className="mt-2 list-disc pl-5 text-gray-600 space-y-2">
                <li>Curso de Coordinación de Equipos - NOAM Argentina (2021)</li>
                <li>Curso de Líderes - NOAM Argentina y Comunidad Dor Jadash (2016 - 2018)</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
