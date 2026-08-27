export const COMPANY = {
  name: 'Charming Occasions',
  shortName: 'Charming Occasions',
  tagline: 'Intimate Event Venue',
  phone: '832-973-0132',
  phoneHref: '+18329730132',
  email: 'charmingoccasionstx@gmail.com',
  address: '100 E NASA Pkwy, Suite 309',
  city: 'Webster, TX 77598',
  serviceArea: 'Bay Area Houston',
  maxGuests: 65,
  instagram: 'https://www.instagram.com/explore/locations/341236090001433/charming-occasions/',
  instagramHandle: '@charmingoccasions',
  facebook: 'https://www.facebook.com/charmingoccasionsevtx',
  website: 'https://www.charmingoccasionstx.com',
  googleUrl:
    'https://www.google.com/maps/search/?api=1&query=Charming+Occasions+100+E+NASA+Pkwy+Webster+TX+77598',
  googleRating: 5,
  reviewCount: 60,
};

export const NAV_LINKS = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about' },
  { label: 'Gallery', href: '/gallery' },
  { label: 'Pricing', href: '/pricing' },
  { label: 'Contact', href: '/contact' },
];

export const GALLERY_CATEGORIES = [
  { id: 'all', label: 'All' },
  { id: 'bridal-showers', label: 'Bridal Showers' },
  { id: 'baby-showers', label: 'Baby Showers' },
  { id: 'birthdays', label: 'Birthdays' },
] as const;

export type GalleryCategory = (typeof GALLERY_CATEGORIES)[number]['id'];

export {
  GALLERY_IMAGES,
  type GalleryImage,
} from './gallery-images';

export const ABOUT_CONTENT = {
  intro:
    'Welcome to Charming Occasions, your premier event venue in the heart of Bay Area Houston!',
  body:
    'Nestled in Webster on NASA Parkway, our intimate venue is perfect for gatherings of up to 65 guests. While we specialize in baby and bridal showers, we\'re passionate about hosting all types of events.',
  evolution:
    'At Charming Occasions, we offer all-inclusive packages that simplify your party planning. We handle every detail, so you can focus on enjoying your event without the stress or leftover supplies you\'ll never use again.',
};

export const VENUE_HIGHLIGHTS = [
  {
    title: 'All-Inclusive Packages',
    description:
      'From furniture and décor to setup and breakdown — our packages cover the essentials so you can celebrate with ease.',
  },
  {
    title: 'Intimate & Pinterest-Worthy',
    description:
      'A beautifully decorated, cozy space designed for showers, birthdays, and gatherings up to 65 guests.',
  },
  {
    title: 'Flexible Catering',
    description:
      'Bring any caterer or food you like. Please note we do not have an onsite kitchen for food preparation.',
  },
  {
    title: 'In-House Bartending',
    description:
      'All alcohol must be served by our in-house bartending service — add it to any package for $250.',
  },
];

export const REVIEWS = [
  {
    id: 1,
    name: 'Heatherly D.',
    event: 'Baby Shower',
    rating: 5,
    text: 'Carolina and Miss Soraya made our baby shower so memorable! We are forever thankful for all the little details! We know who to call every time we have an event!',
  },
  {
    id: 2,
    name: 'Guest Review',
    event: 'Private Event',
    rating: 5,
    text: 'My event was absolutely gorgeous and well organized from start to finish. The event package that I chose included custom decor, set up and clean up. I did not have to worry about any details aside from providing my own food.',
  },
  {
    id: 3,
    name: 'Guest Review',
    event: 'Celebration',
    rating: 5,
    text: 'One of the best places to have your events. Very friendly service and willing to help. When I came into the place, it looked so beautiful I could not ask for more. I got so many compliments from my guests.',
  },
] as const;

export const ACCENT = '#da8990';
export const ACCENT_HOVER = '#e8a8ae';
