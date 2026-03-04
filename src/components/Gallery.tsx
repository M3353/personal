/**
 * Gallery - Shows category options and loads art dynamically
 */
import { useState, useEffect, useCallback } from 'react'
import { artworks } from '../data/art'
import PageWrapper from './PageWrapper'

type Category = 'graphic-design' | 'digital' | 'traditional'

const CATEGORIES: { id: Category; label: string }[] = [
  { id: 'graphic-design', label: 'Graphic Design' },
  { id: 'traditional', label: 'Traditional' },
  { id: 'digital', label: 'Digital' },
]

export default function Gallery() {
  const [selected, setSelected] = useState<Category | null>(null)
  const [focusedIndex, setFocusedIndex] = useState<number | null>(null)
  const filtered = selected ? artworks.filter((a) => a.category === selected) : []

  const goToPrev = useCallback(() => {
    if (focusedIndex !== null) {
      setFocusedIndex(focusedIndex === 0 ? filtered.length - 1 : focusedIndex - 1)
    }
  }, [focusedIndex, filtered.length])

  const goToNext = useCallback(() => {
    if (focusedIndex !== null) {
      setFocusedIndex(focusedIndex === filtered.length - 1 ? 0 : focusedIndex + 1)
    }
  }, [focusedIndex, filtered.length])

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (focusedIndex === null) return
      if (e.key === 'ArrowLeft') goToPrev()
      if (e.key === 'ArrowRight') goToNext()
      if (e.key === 'Escape') setFocusedIndex(null)
    }
    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [focusedIndex, goToPrev, goToNext])

  return (
    <PageWrapper>
      <div className="flex flex-col items-start gap-2 mb-8">
        {CATEGORIES.map((cat) => (
          <button
            key={cat.id}
            onClick={() => setSelected(cat.id)}
            className={`cursor-pointer ${selected === cat.id ? 'underline' : 'hover:underline'}`}
          >
            {cat.label}
          </button>
        ))}
      </div>

      {selected && (
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {filtered.map((art, index) => (
            <img
              key={art.id}
              src={`${import.meta.env.BASE_URL}${art.imageUrl}`}
              alt={art.title}
              className="w-full h-auto cursor-pointer transition-transform duration-200 hover:scale-105"
              onClick={() => setFocusedIndex(index)}
            />
          ))}
          {filtered.length === 0 && (
            <p>Coming soon!</p>
          )}
        </div>
      )}

      {focusedIndex !== null && (
        <div
          className="fixed inset-0 bg-black/70 flex items-center justify-center z-50 cursor-pointer"
          onClick={() => setFocusedIndex(null)}
        >
          <button
            onClick={(e) => { e.stopPropagation(); goToPrev() }}
            className="mx-8 p-4 text-white hover:opacity-70 cursor-pointer"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="16" viewBox="0 0 18 16" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
              <line x1="17" y1="8" x2="1" y2="8"></line>
              <polyline points="8 15 1 8 8 1"></polyline>
            </svg>
          </button>
          <img
            src={`${import.meta.env.BASE_URL}${filtered[focusedIndex].imageUrl}`}
            alt="Enlarged view"
            className="h-[80vh] w-auto object-contain"
            onClick={(e) => e.stopPropagation()}
          />
          <button
            onClick={(e) => { e.stopPropagation(); goToNext() }}
            className="mx-8 p-4 text-white hover:opacity-70 cursor-pointer"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="16" viewBox="0 0 18 16" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
              <line x1="1" y1="8" x2="17" y2="8"></line>
              <polyline points="10 1 17 8 10 15"></polyline>
            </svg>
          </button>
        </div>
      )}
    </PageWrapper>
  )
}
