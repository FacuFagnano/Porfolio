export default function Navbar() {
  return (
    <nav className="w-full px-6 py-4 flex justify-between items-center border-b border-gray-200 fixed top-0 bg-white z-50">
      <span className="text-xl font-bold">Facu</span>

      <ul className="hidden md:flex gap-6 text-gray-700">
        <li>
          <a href="#home" className="hover:text-black">
            Home 
          </a>
        </li>
        <li>
          <a href="#about" className="hover:text-black">
            About 
          </a>
        </li>
        <li>
          <a href="#skills" className="hover:text-black">
            Skills 
          </a>
        </li>
        <li>
          <a href="#projects" className="hover:text-black">
            Projects 
          </a>
        </li>
        <li>
          <a href="#contact" className="hover:text-black">
            Contact 
          </a>
        </li>
      </ul>
    </nav>
  )
}
