import { motion } from "framer-motion"
import { FaGithub, FaLinkedin, FaWhatsapp } from "react-icons/fa"

export default function Contact() {
  return (
    <section id="contact" className="py-24 bg-gray-50">
      <div className="max-w-5xl mx-auto px-6 text-center">
        {/* Título */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Contacto
          </h2>

          <p className="text-gray-500 mb-12 max-w-xl mx-auto">
            ¿Tenés un proyecto en mente o simplemente querés ponerte en contacto?
            Estoy abierto a nuevas oportunidades y colaboraciones.
          </p>
        </motion.div>

        {/* CTA + Íconos */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex flex-col items-center gap-10"
        >
          {/* Email */}
          <a
            href="mailto:facu.fagnano@gmail.com"
            className="px-8 py-4 rounded-xl bg-sky-500 text-white font-medium hover:bg-sky-600 transition"
          >
            Enviarme un email
          </a>

          {/* Íconos */}
          <div className="flex gap-6">
            {/* GitHub */}
            <div className="relative group">
              <motion.a
                href="https://github.com/FacuFagnano"
                target="_blank"
                rel="noreferrer"
                aria-label="GitHub"
                className="flex h-12 w-12 items-center justify-center rounded-full border border-gray-200 bg-white text-gray-600 shadow-sm"
                whileHover={{ y: -6, scale: 1.12 }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: "spring", stiffness: 400, damping: 20 }}
              >
                <FaGithub size={22} />
              </motion.a>

              <span className="pointer-events-none absolute -top-11 left-1/2 -translate-x-1/2 rounded-md bg-gray-900 px-3 py-1 text-xs text-white opacity-0 transition group-hover:opacity-100">
                GitHub
              </span>
            </div>

            {/* LinkedIn */}
            <div className="relative group">
              <motion.a
                href="https://www.linkedin.com/"
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn"
                className="flex h-12 w-12 items-center justify-center rounded-full border border-gray-200 bg-white text-gray-600 shadow-sm"
                whileHover={{ y: -6, scale: 1.12 }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: "spring", stiffness: 400, damping: 20 }}
              >
                <FaLinkedin size={22} />
              </motion.a>

              <span className="pointer-events-none absolute -top-11 left-1/2 -translate-x-1/2 rounded-md bg-gray-900 px-3 py-1 text-xs text-white opacity-0 transition group-hover:opacity-100">
                LinkedIn
              </span>
            </div>

            {/* WhatsApp */}
            <div className="relative group">
              <motion.a
                href="https://wa.me/61409829781?text=Hola%2C%20tengo%20una%20idea%20sobre%20una%20p%C3%A1gina%20web%20y%20quisiera%20pedirte%20presupuesto"
                target="_blank"
                rel="noreferrer"
                aria-label="WhatsApp"
                className="flex h-12 w-12 items-center justify-center rounded-full border border-gray-200 bg-white text-gray-600 shadow-sm hover:text-green-500"
                whileHover={{ y: -6, scale: 1.12 }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: "spring", stiffness: 400, damping: 20 }}
              >
                <FaWhatsapp size={22} />
              </motion.a>

              <span className="pointer-events-none absolute -top-11 left-1/2 -translate-x-1/2 rounded-md bg-gray-900 px-3 py-1 text-xs text-white opacity-0 transition group-hover:opacity-100">
                WhatsApp
              </span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
