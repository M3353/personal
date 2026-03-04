/**
 * Navbar - Simple navigation with links to each page
 */
import { Link } from 'react-router-dom'

export default function Navbar() {
  return (
    <nav className="bg-[#F7F5F1]">
      <div className="max-w-2xl mx-auto px-4 h-30 flex items-center justify-between">
        <Link to="/" className="hover:underline">Home</Link>
        <Link to="/art/graphic-design" className="hover:underline">Gallery</Link>
      </div>
      <div className="max-w-3xl mx-auto border-b border-current"></div>
    </nav>
  )
}
