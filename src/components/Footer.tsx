/**
 * Footer - Simple footer with email icon
 */
export default function Footer() {
  return (
    <footer className="bg-[var(--color-bg)]">
      <div className="max-w-2xl mx-auto px-4 py-8 flex gap-4">
        <a href="mailto:li.jack98@gmail.com.com" className="hover:opacity-70">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
            <rect x="2" y="4" width="20" height="16" rx="2"></rect>
            <polyline points="22 6 12 13 2 6"></polyline>
          </svg>
        </a>
        <a href="https://boxd.it/5Fep3" target="_blank" rel="noopener noreferrer" className="hover:opacity-70">
          <img src={`${import.meta.env.BASE_URL}letterboxd.svg`} alt="Letterboxd" width="24" height="24" />
        </a>
      </div>
    </footer>
  )
}
