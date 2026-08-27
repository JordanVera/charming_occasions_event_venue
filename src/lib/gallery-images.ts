export const GALLERY_IMAGES = [
  {
    id: 1,
    src: "/gallery/gallery-01.jpg",
    alt: "Charming Occasions event venue photo 1",
    category: "bridal-showers" as const,
    featured: true,
  },
  {
    id: 2,
    src: "/gallery/gallery-02.jpeg",
    alt: "Charming Occasions event venue photo 2",
    category: "baby-showers" as const,
    featured: true,
  },
  {
    id: 3,
    src: "/gallery/gallery-03.jpeg",
    alt: "Charming Occasions event venue photo 3",
    category: "bridal-showers" as const,
    featured: true,
  },
  {
    id: 4,
    src: "/gallery/gallery-04.jpeg",
    alt: "Charming Occasions event venue photo 4",
    category: "baby-showers" as const,
    featured: true,
  },
  {
    id: 5,
    src: "/gallery/gallery-05.jpeg",
    alt: "Charming Occasions event venue photo 5",
    category: "birthdays" as const,
    featured: true,
  },
  {
    id: 6,
    src: "/gallery/gallery-06.jpeg",
    alt: "Charming Occasions event venue photo 6",
    category: "bridal-showers" as const,
    featured: true,
  },
  {
    id: 7,
    src: "/gallery/gallery-07.jpg",
    alt: "Charming Occasions event venue photo 7",
    category: "baby-showers" as const,
  },
  {
    id: 8,
    src: "/gallery/gallery-08.jpeg",
    alt: "Charming Occasions event venue photo 8",
    category: "birthdays" as const,
  },
  {
    id: 9,
    src: "/gallery/gallery-09.jpeg",
    alt: "Charming Occasions event venue photo 9",
    category: "bridal-showers" as const,
  },
  {
    id: 10,
    src: "/gallery/gallery-10.jpeg",
    alt: "Charming Occasions event venue photo 10",
    category: "baby-showers" as const,
  },
] as const;

export type GalleryImage = (typeof GALLERY_IMAGES)[number];