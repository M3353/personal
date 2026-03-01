/**
 * Main App - Routes to different pages
 */
import { HashRouter, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Art from './components/Art'

function App() {
  return (
    <HashRouter>
      <div className="min-h-screen">
        <Navbar />
        <main>
          <Routes>
            <Route path="/" element={<Hero />} />
            <Route path="/art/graphic-design" element={<Art category="graphic-design" />} />
            <Route path="/art/digital" element={<Art category="digital" />} />
            <Route path="/art/traditional" element={<Art category="traditional" />} />
          </Routes>
        </main>
      </div>
    </HashRouter>
  )
}

export default App
