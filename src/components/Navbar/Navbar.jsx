export default function Navbar() {
  return (
    <nav className="w-full px-6 py-4 flex justify-between items-center border-b border-gray-200 fixed top-0 bg-white z-50">
      <span className="text-xl font-bold text-gray-900">
        Facu<span className="text-sky-500">.</span>
      </span>

      <ul className="hidden md:flex gap-6 text-gray-700">
        <li>
          <a href="#home" className="hover:text-sky-400">
            Home 
          </a>
        </li>
        <li>
          <a href="#about" className="hover:text-sky-400">
            About 
          </a>
        </li>
        <li>
          <a href="#skills" className="hover:text-sky-400">
            Skills 
          </a>
        </li>
        <li>
          <a href="#projects" className="hover:text-sky-400">
            Projects 
          </a>
        </li>
        <li>
          <a href="#contact" className="hover:text-sky-400">
            Contact 
          </a>
        </li>
      </ul>
    </nav>
  )
}
