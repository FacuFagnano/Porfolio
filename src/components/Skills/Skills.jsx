import { motion } from "framer-motion"
import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaAngular,
  FaPhp,
  FaLaravel,
  FaGitAlt,
  FaJava,
  FaTools,
} from "react-icons/fa"
import { SiDotnet, SiMysql, SiMongodb, SiVite } from "react-icons/si"

const groups = [
  {
    title: "Frontend",
    skills: [
      { name: "HTML", icon: FaHtml5 },
      { name: "CSS / Tailwind", icon: FaCss3Alt },
      { name: "JavaScript", icon: FaJs },
      { name: "React", icon: FaReact },
      { name: "Angular", icon: FaAngular },
    ],
  },
  {
    title: "Backend / DB",
    skills: [
      { name: "PHP", icon: FaPhp },
      { name: "Laravel", icon: FaLaravel },
      { name: ".NET", icon: SiDotnet },
      { name: "MySQL", icon: SiMysql },
      { name: "MongoDB", icon: SiMongodb },
      { name: "Java", icon: FaJava },
    ],
  },
  {
    title: "Tools / Other",
    skills: [
      { name: "Git & GitHub", icon: FaGitAlt },
      { name: "VS Code", icon: FaTools },
      { name: "Vite", icon: SiVite },
      { name: "Scrum", icon: FaTools },
      { name: "Customer Support", icon: FaTools },
      { name: "Problem Solving", icon: FaTools },
    ],
  },
]

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08 } },
}

const item = {
  hidden: { opacity: 0, y: 16 },
  show: { opacity: 1, y: 0 },
}

function SkillChip({ name, Icon }) {
  return (
    <span className="inline-flex items-center gap-2 rounded-full border border-gray-200 bg-white px-4 py-2 text-sm text-gray-700 shadow-sm hover:-translate-y-0.5 hover:shadow-md transition">
      <Icon className="text-gray-500" />
      {name}
    </span>
  )
}

function SkillCard({ title, skills }) {
  return (
    <motion.div
      className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm hover:shadow-lg transition"
      variants={item}
    >
      <h3 className="text-lg font-semibold text-gray-900 mb-4">{title}</h3>
      <div className="flex flex-wrap gap-3">
        {skills.map((s) => (
          <SkillChip key={s.name} name={s.name} Icon={s.icon} />
        ))}
      </div>
    </motion.div>
  )
}

export default function Skills() {
  return (
    <section id="skills" className="py-24 bg-gray-50">
      <div className="max-w-5xl mx-auto px-6 text-center">
        <h2 className="text-4xl font-bold text-gray-900 mb-4">Skills</h2>
        <p className="text-gray-500 mb-12">
          Tecnologías & Herramientas
        </p>

        <motion.div
          className="grid gap-8 md:grid-cols-3"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
        >
          {groups.map((g) => (
            <SkillCard key={g.title} title={g.title} skills={g.skills} />
          ))}
        </motion.div>
      </div>
    </section>
  )
}
