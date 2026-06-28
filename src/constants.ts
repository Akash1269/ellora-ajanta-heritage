
export const ATTRACTION_NAMES = [
  'Bibi Ka Maqbara',
  'Ajanta Caves',
  'Ellora Caves',
  'Daulatabad Fort',
  'Grishneshwar Jyotirlinga Temple',
  'Panchakki (Water Mill)'
];

// Map configuration
export const MAP_CENTER: [number, number] = [19.8762, 75.3433];
export const MAP_ZOOM = 9;

// Image placeholder
export const PLACEHOLDER_IMAGE = 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="400" height="300" fill="%23d6d3d1"%3E%3Crect width="400" height="300"/%3E%3Ctext x="50%25" y="50%25" dominant-baseline="middle" text-anchor="middle" font-family="serif" font-size="18" fill="%2378716c"%3EImage unavailable%3C/text%3E%3C/svg%3E';

// Local image paths (served from public/images/)
const IMG = import.meta.env.BASE_URL + 'images/';

export const IMAGES = {
  hero: IMG + 'hero-bg.jpg',
  bibiKaMaqbara: IMG + 'bibi-ka-maqbara.jpg',
  ajantaCaves: IMG + 'ajanta-caves.jpg',
  elloraKailasa: IMG + 'ellora-kailasa.jpg',
  daulatabad: IMG + 'daulatabad-fort.jpg',
  grishneshwar: IMG + 'grishneshwar-temple.jpg',
  panchakki: IMG + 'panchakki.jpg',
  biryani: IMG + 'biryani.jpg',
  naan: IMG + 'naan.jpg',
  jalebi: IMG + 'jalebi.jpg',
  tahri: IMG + 'tahri.jpg',
  sheerKhurma: IMG + 'sheer-khurma.jpg',
  dalPeetha: IMG + 'dal-peetha.jpg',
  lonarLake: IMG + 'lonar-lake.jpg',
  caveInterior: IMG + 'cave-interior.jpg',
  cavePaintings: IMG + 'cave-paintings.jpg',
  templeCarvings: IMG + 'temple-carvings.jpg',
  elloraArchitecture: IMG + 'ellora-architecture.jpg',
  ajantaStupa: IMG + 'ajanta-stupa.jpg',
  daulatadabWalls: IMG + 'daulatabad-walls.jpg',
  elloraOverview: IMG + 'ellora-overview.jpg',
  paithaniWeaving: IMG + 'paithani-weaving.jpg',
  fortLandscape: IMG + 'fort-landscape.jpg',
  shirdiTemple: IMG + 'shirdi-temple.jpg',
  elloraSunset: IMG + 'ellora-sunset.jpg',
  jayakwadiDam: IMG + 'jayakwadi-dam.jpg',
  mhaismalHills: IMG + 'mhaismal-hills.jpg',
  gautalaSanctuary: IMG + 'gautala-sanctuary.jpg',
};
