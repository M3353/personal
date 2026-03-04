/**
 * Navbar - Simple navigation with links to each page
 */
import { Link, useLocation } from 'react-router-dom'

export default function Navbar() {
  const location = useLocation()
  const isHome = location.pathname === '/'

  return (
    <nav className="bg-[var(--color-bg)]">
      <div className="max-w-2xl mx-auto px-4 h-30 flex items-center justify-between">
        <div>
          {!isHome && (
            <Link to="/" className="hover:opacity-70">
              <svg xmlns="http://www.w3.org/2000/svg" width="36" height="16" viewBox="0 0 36 16" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <line x1="34" y1="8" x2="2" y2="8"></line>
                <polyline points="9 15 2 8 9 1"></polyline>
              </svg>
            </Link>
          )}
        </div>
        <div className="flex gap-8">
          <a href={`${import.meta.env.BASE_URL}resume.pdf`} target="_blank" rel="noopener noreferrer" className="hover:underline">Resume</a>
          <Link to="/gallery" className="hover:underline">Gallery</Link>
        </div>
      </div>
      <div className="max-w-2xl mx-auto px-4"><div className="border-b-[1.5px] border-current"></div></div>
    </nav>
  )
}
