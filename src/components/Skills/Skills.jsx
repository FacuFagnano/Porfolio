const skills = [
  "HTML",
  "CSS",
  "JavaScript",
  "React",
  "Tailwind CSS",
  "Git",
  "Responsive Design"
]

export default function Skills() {
  return (
    <section id="skills" className="py-24 px-6 bg-gray-50">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold text-gray-900 mb-10">Skills</h2>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
          {skills.map(skill => (
            <div
              key={skill}
              className="bg-white border border-gray-200 rounded-xl py-4 text-center text-gray-700 font-medium hover:shadow-md transition"
            >
              {skill}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
