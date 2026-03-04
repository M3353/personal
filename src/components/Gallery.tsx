/**
 * Gallery - Shows category options and loads art dynamically
 */
import { useState } from 'react'
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
  const filtered = selected ? artworks.filter((a) => a.category === selected) : []

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
        <div className="space-y-8">
          {filtered.map((art) => (
            <div key={art.id} className="border-b border-gray-200 pb-6">
              <img
                src={art.imageUrl}
                alt={art.title}
                className="w-full mb-4"
              />
              <h2 className="text-lg font-semibold mb-1">{art.title}</h2>
              <p>{art.description}</p>
            </div>
          ))}
          {filtered.length === 0 && (
            <p>Coming soon!</p>
          )}
        </div>
      )}
    </PageWrapper>
  )
}
