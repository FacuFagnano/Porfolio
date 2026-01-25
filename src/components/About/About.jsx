export default function About() {
  return (
    <section id="about" className="py-24 px-6 bg-white">
      <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        <div>
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Sobre mí</h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            Soy desarrollador web con foco en crear interfaces claras,
            modernas y funcionales. Me gusta contemplar las necesidades de las personas
            y crear un sistema acorde, funcional y práctico.

            Original:
            Soy desarrollador frontend con foco en crear interfaces claras,
            modernas y funcionales. Me gusta escribir código limpio, reusable
            y pensar cada detalle desde la experiencia del usuario.
          </p>
          <p className="text-gray-600 leading-relaxed">
            Tengo conocimiento en frontend y backend, así como en data base.

            Original: 
            Trabajo principalmente con React y disfruto transformar ideas en
            productos reales listos para producción.
          </p>
        </div>

        <div className="w-full h-64 md:h-80 bg-gray-100 rounded-xl flex items-center justify-center text-gray-400">
          Foto / Ilustración
        </div>
      </div>
    </section>
  )
}
