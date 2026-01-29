import { FiExternalLink, FiCode } from "react-icons/fi"
import projectImg from "../../assets/projects.jpg"
import { useLanguage } from "../../context/LanguageContext"


export default function Projects() {
    const { t } = useLanguage()
  return (
    <section id="projects" className="py-24 bg-white dark:bg-gray-950">
      <div className="max-w-5xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4 dark:text-gray-100">{t.projects.title}</h2>
          <p className="text-gray-500 max-w-xl mx-auto dark:text-gray-300">
            {t.projects.subtitle}
          </p>
        </div>

        {/* Projects grid */}
        <div className="grid gap-8 md:grid-cols-2 justify-items-center">
          {/* Project card */}
          <div className="group w-full max-w-xl md:col-span-2 rounded-2xl border border-gray-200 overflow-hidden transition hover:shadow-xl hover:-translate-y-1 hover:border-sky-200 hover:ring-2 hover:ring-sky-100">
            {/* Image */}
            <div className="h-56 overflow-hidden">
              <img
                src={projectImg}
                alt="Portfolio personal - Proyecto web"
                className="w-full h-full object-cover transition duration-300 group-hover:scale-[1.03] group-hover:brightness-95"
                loading="lazy"
              />
            </div>

            {/* Content */}
            <div className="p-6">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100">
                {t.projects.cardTitle}
              </h3>

              <p className="mt-2 text-sm text-gray-600 leading-relaxed dark:text-gray-300">
                {t.projects.cardDesc}
              </p>

              {/* Tech */}
              <div className="mt-4 mb-6 flex flex-wrap gap-2">
                {["React", "Vite", "Tailwind CSS", "Frontend"].map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 text-xs rounded-full 
                    bg-sky-50 text-sky-700 border border-sky-100
                    transition-all duration-200
                    hover:-translate-y-0.5
                    group-hover:bg-sky-100 group-hover:text-sky-800"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* Actions */}
              <div className="flex gap-4">
                <a
                  href="https://github.com/FacuFagnano"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-sky-500 text-white font-medium hover:bg-sky-600 transition"
                >
                  <FiCode className="text-lg" />
                  {t.projects.code}
                </a>

                <span className="inline-flex items-center gap-2 px-6 py-3 rounded-xl border border-gray-300 text-gray-400 cursor-not-allowed">
                  <FiExternalLink className="text-lg" />
                  {t.projects.demo}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
