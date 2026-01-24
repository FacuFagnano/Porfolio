export default function Navbar() {
  return (
    <nav className="w-full px-6 py-4 flex justify-between items-center border-b border-gray-200">
      <span className="text-xl font-bold">Facu</span>

      <ul className="hidden md:flex gap-6 text-gray-700">
        <li className="cursor-pointer hover:text-black">Home</li>
        <li className="cursor-pointer hover:text-black">About</li>
        <li className="cursor-pointer hover:text-black">Projects</li>
        <li className="cursor-pointer hover:text-black">Contact</li>
      </ul>
    </nav>
  )
}
