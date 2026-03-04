/**
 * Art gallery data
 *
 * Each art piece has:
 * - id: unique identifier
 * - title: display name
 * - category: one of 'graphic-design' | 'digital' | 'traditional'
 * - imageUrl: path to the image (place images in public/art/ folder)
 * - description: brief description of the piece
 *
 * To add new artwork:
 * 1. Add your image to the public/art/ folder
 * 2. Add a new object to this array with the image path
 */

export interface ArtPiece {
  id: string
  title: string
  category: 'graphic-design' | 'digital' | 'traditional'
  imageUrl: string
  description: string
}

export const artworks: ArtPiece[] = [
  // Digital
  { id: 'digital-1', title: 'Barbie', category: 'digital', imageUrl: 'digital/barbie.png', description: '' },
  { id: 'digital-2', title: 'Dube', category: 'digital', imageUrl: 'digital/dube.jpeg', description: '' },
  { id: 'digital-3', title: 'Pokemon', category: 'digital', imageUrl: 'digital/pokemon.png', description: '' },
  { id: 'digital-4', title: 'Zelda', category: 'digital', imageUrl: 'digital/zelda.png', description: '' },
  { id: 'digital-5', title: 'Dead Cells', category: 'digital', imageUrl: 'digital/deadcells.png', description: '' },

  // Traditional
  { id: 'traditional-1', title: 'Untitled 1', category: 'traditional', imageUrl: 'traditional/1.png', description: '' },
  { id: 'traditional-2', title: 'Untitled 2', category: 'traditional', imageUrl: 'traditional/2.png', description: '' },
  { id: 'traditional-3', title: 'Untitled 3', category: 'traditional', imageUrl: 'traditional/3.png', description: '' },
  { id: 'traditional-4', title: 'Untitled 4', category: 'traditional', imageUrl: 'traditional/4.png', description: '' },
  { id: 'traditional-5', title: 'Untitled 5', category: 'traditional', imageUrl: 'traditional/5.png', description: '' },
  { id: 'traditional-6', title: 'Untitled 6', category: 'traditional', imageUrl: 'traditional/6.png', description: '' },
  { id: 'traditional-7', title: 'Untitled 7', category: 'traditional', imageUrl: 'traditional/7.png', description: '' },
  { id: 'traditional-8', title: 'Central Park', category: 'traditional', imageUrl: 'traditional/centralpark.png', description: '' },
  { id: 'traditional-9', title: 'Double', category: 'traditional', imageUrl: 'traditional/double.jpg', description: '' },
  { id: 'traditional-10', title: 'Figure', category: 'traditional', imageUrl: 'traditional/figure.png', description: '' },
  { id: 'traditional-11', title: 'Figure Laying', category: 'traditional', imageUrl: 'traditional/figurelaying.png', description: '' },
  { id: 'traditional-12', title: 'Figure Sitting', category: 'traditional', imageUrl: 'traditional/figuresitting.png', description: '' },
  { id: 'traditional-13', title: 'Gallery', category: 'traditional', imageUrl: 'traditional/gallery.png', description: '' },
  { id: 'traditional-14', title: 'The City', category: 'traditional', imageUrl: 'traditional/the_city.jpg', description: '' },
  { id: 'traditional-15', title: 'Thingie', category: 'traditional', imageUrl: 'traditional/thingie.png', description: '' },
  { id: 'traditional-16', title: 'Train', category: 'traditional', imageUrl: 'traditional/train.png', description: '' },
  { id: 'traditional-17', title: 'Window', category: 'traditional', imageUrl: 'traditional/window.png', description: '' },
]
