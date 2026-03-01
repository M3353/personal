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

export const artworks: ArtPiece[] = []
