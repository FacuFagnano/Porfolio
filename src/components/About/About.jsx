import { motion } from "framer-motion"

export default function About() {
  return (
    <section id="about" className="py-24 bg-white">
      <div className="max-w-5xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
        
        {/* Texto */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Sobre mí
          </h2>

          <p className="text-gray-500 mb-6 leading-relaxed">
            Me dedico al desarrollo web, con experiencia en la creación de
            interfaces y aplicaciones utilizando tecnologías modernas y buenas
            prácticas de programación.
          </p>

          <p className="text-gray-500 leading-relaxed">
            Mi formación y experiencia me permiten entender el flujo completo de
            una aplicación web, colaborar en equipos de trabajo y adaptarme
            fácilmente a distintos proyectos y entornos.
          </p>
        </motion.div>

        {/* Bloque visual */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="w-full h-72 rounded-2xl bg-gray-100 flex items-center justify-center text-gray-400"
        >
          Foto / Ilustración
        </motion.div>
      </div>
    </section>
  )
}
