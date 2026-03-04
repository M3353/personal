/**
 * Art - Gallery page filtered by category
 */
import { artworks } from '../data/art'
import PageWrapper from './PageWrapper'

interface ArtProps {
  category: 'graphic-design' | 'digital' | 'traditional'
}

const TITLES: Record<string, string> = {
  'graphic-design': 'Graphic Design',
  'digital': 'Digital Art',
  'traditional': 'Traditional Art',
}

export default function Art({ category }: ArtProps) {
  const filtered = artworks.filter((a) => a.category === category)

  return (
    <PageWrapper>
      <h1 className="text-2xl font-bold mb-8">{TITLES[category]}</h1>
      <div className="space-y-2">
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
          <p>No artwork in this category yet.</p>
        )}
      </div>
    </PageWrapper>
  )
}
