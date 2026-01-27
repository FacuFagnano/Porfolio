import { motion } from "framer-motion"

export default function Hero() {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center bg-white"
    >
      <div className="max-w-5xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
        
        {/* Texto */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-sky-500 font-medium mb-3">
            Desarrollador Web
          </p>

          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 leading-tight">
            Facundo Damián Fagnano
          </h1>

          <p className="text-xl text-gray-600 mt-6 max-w-xl">
            Diseño y desarrollo sitios web modernos, funcionales y pensados
            para ofrecer una excelente experiencia de usuario.
          </p>


          <div className="flex gap-4 mt-10">
            <a
              href="#projects"
              className="px-6 py-3 rounded-xl bg-sky-500 text-white font-medium hover:bg-sky-600 transition"
            >
              Ver proyectos
            </a>

            <a
              href="#contact"
              className="px-6 py-3 rounded-xl border border-gray-300 text-gray-700 hover:border-gray-500 transition"
            >
              Contacto
            </a>
          </div>
        </motion.div>

        {/* Visual */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          className="hidden md:flex justify-center"
        >
          <div className="w-72 h-72 rounded-full bg-gradient-to-br from-sky-400 to-sky-600 opacity-20" />
        </motion.div>
      </div>
    </section>
  )
}
