export type PricingPackage = {
  id: string;
  name: string;
  price: string;
  priceNote?: string;
  description: string;
  features: string[];
  highlighted?: boolean;
};

export const VENUE_PACKAGES: PricingPackage[] = [
  {
    id: 'package-a',
    name: 'Package A',
    price: '$1,150',
    description:
      'Essential venue rental with furniture, backdrop, and audio — perfect for a beautifully hosted gathering.',
    features: [
      '4-hour venue rental (setup, breakdown, and event time)',
      '8 rectangle tables',
      '65 gold Chiavari chairs',
      '2 cocktail tables for desserts',
      '2 rectangle tables for food',
      'Wooden wall backdrop',
      'Bluetooth speaker',
    ],
  },
  {
    id: 'package-b',
    name: 'Package B',
    price: '$1,400',
    highlighted: true,
    description:
      'Everything in Package A plus styled décor, linens, and signature details that make your celebration shine.',
    features: [
      'Everything from Package A',
      'Table linens and table runners',
      'Custom centerpieces',
      'Decorative charger plates',
      'Balloon garland (up to 3 colors, 16 feet)',
      'Neon sign — Oh Baby, Happy Birthday, or Bride to Be',
      'Guest of honor egg chair',
      'Welcome sign',
    ],
  },
  {
    id: 'package-c',
    name: 'Package C',
    price: '$1,600',
    description:
      'Our most complete package — décor, dinnerware, and a drink station for a fully styled celebration.',
    features: [
      'Everything from Package A and B',
      'Gold plastic dinnerware for up to 65 guests',
      'Dinner plates, dessert plates, and silverware',
      'Drink station with sweet tea, water, and lemonade (2 gallons each)',
      'Cups included',
    ],
  },
];

export const ADD_ONS: PricingPackage[] = [
  {
    id: 'bartending',
    name: 'Bartending Service',
    price: '$250',
    description:
      'Professional in-house bartending for events serving alcohol. All alcohol must be served by our bartending team.',
    features: [
      '4-hour bartending service',
      'Host provides alcohol and mixers',
      'Required for any event serving alcohol',
    ],
  },
];

export const PRICING_NOTES = [
  'We welcome you to bring any type of food or caterer you would like.',
  'Please note that we do not have a kitchen onsite for food preparation.',
  'All alcohol must be served by our in-house bartending service.',
  'Packages are designed for gatherings of up to 65 guests.',
];
