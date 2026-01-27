import { motion } from "framer-motion"

export default function Projects() {
  return (
    <section id="projects" className="py-24 bg-white">
      <div className="max-w-5xl mx-auto px-6">
        
        {/* Título */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Proyectos
          </h2>
          <p className="text-gray-500">
            Algunos de los trabajos en los que estuve trabajando
          </p>
        </div>

        {/* Proyecto */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="grid md:grid-cols-2 gap-10 items-center"
        >
          
          {/* Imagen / preview */}
          <div className="w-full h-64 rounded-2xl bg-gray-100 flex items-center justify-center text-gray-400">
            Preview del proyecto
          </div>

          {/* Info */}
          <div>
            <h3 className="text-2xl font-semibold text-gray-900 mb-4">
              Portfolio personal
            </h3>

            <p className="text-gray-500 mb-6 leading-relaxed">
              Desarrollo de un portfolio personal utilizando React, Vite y
              Tailwind CSS, enfocado en una estructura limpia, diseño
              minimalista y buena experiencia de usuario.
            </p>

            <p className="text-gray-500 mb-8 leading-relaxed">
              El objetivo del proyecto fue crear una base escalable para
              mostrar proyectos, habilidades y facilitar el contacto,
              dejando preparada la posibilidad de agregar backend a futuro.
            </p>

            <div className="flex gap-4">
              <a
                href="https://github.com/FacuFagnano/Porfolio"
                target="_blank"
                rel="noreferrer"
                className="px-5 py-3 rounded-xl bg-sky-500 text-white font-medium hover:bg-sky-600 transition"
              >
                Ver código
              </a>

              <span className="px-5 py-3 rounded-xl border border-gray-300 text-gray-500">
                Demo en desarrollo
              </span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
