import useActiveSection from "../../hooks/useActiveSection"

const links = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "projects", label: "Projects" },
  { id: "contact", label: "Contact" },
]

export default function Navbar() {
  const active = useActiveSection(links.map((l) => l.id))

  return (
    <nav className="w-full px-6 py-4 flex justify-between items-center border-b border-gray-200 fixed top-0 bg-white/80 backdrop-blur z-50">
      <a href="#home" className="text-xl font-bold text-gray-900">
        Facu<span className="text-sky-500">.</span>
      </a>

      <ul className="hidden md:flex gap-6 text-gray-700">
        {links.map((l) => {
          const isActive = active === l.id
          return (
            <li key={l.id}>
              <a
                href={`#${l.id}`}
                className={[
                  "transition",
                  isActive ? "text-sky-600 font-semibold" : "hover:text-sky-500",
                ].join(" ")}
              >
                {l.label}
              </a>
            </li>
          )
        })}
      </ul>
    </nav>
  )
}
