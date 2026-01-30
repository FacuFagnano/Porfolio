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
import { useLanguage } from "../../context/LanguageContext"

const groups = [
  {
    key: "frontend",
    skills: [
      { name: "HTML", icon: FaHtml5 },
      { name: "CSS / Tailwind", icon: FaCss3Alt },
      { name: "JavaScript", icon: FaJs },
      { name: "React", icon: FaReact },
      { name: "Angular", icon: FaAngular },
    ],
  },
  {
    key: "backend",
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
    key: "tools",
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
    <span className="inline-flex items-center gap-2 rounded-full border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 px-4 py-2 text-sm text-gray-700 dark:text-gray-200 shadow-sm hover:-translate-y-0.5 hover:shadow-md transition">
      <Icon className="text-gray-500 dark:text-gray-400" />
      {name}
    </span>
  )
}

function SkillCard({ title, skills }) {
  return (
    <motion.div
      className="rounded-2xl border border-gray-200 bg-white dark:bg-gray-950 dark:border-gray-800 p-6 shadow-sm hover:shadow-lg dark:hover:shadow-black/50 transition"
      variants={item}
    >
      <h3 className="text-lg font-semibold text-gray-900 mb-4 dark:text-gray-100">{title}</h3>
      <div className="flex flex-wrap justify-center gap-3">
        {skills.map((s) => (
          <SkillChip key={s.name} name={s.name} Icon={s.icon} />
        ))}
      </div>
    </motion.div>
  )
}

export default function Skills() {
  const { t } = useLanguage()
  return (
    <section id="skills" className="py-24 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-5xl mx-auto px-6 text-center">
        <h2 className="text-4xl font-bold text-gray-900 mb-4 dark:text-gray-100">{t.skills.title}</h2>
        <p className="text-gray-500 mb-12 dark:text-gray-400">
          {t.skills.subtitle}
        </p>

        <motion.div
          className="grid gap-8 md:grid-cols-3"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
        >
          {groups.map((g) => (
            <SkillCard key={g.key} title={t.skills.groups[g.key]} skills={g.skills} />
          ))}
        </motion.div>
      </div>
    </section>
  )
}
