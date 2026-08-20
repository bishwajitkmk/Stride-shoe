// Full product catalogue for Stride.
// Everything the site knows about a shoe lives here and is rendered
// directly into /shop and /shop/:slug so a crawler can read it.

const products = [
  {
    id: 1,
    slug: "stride-runner",
    name: "Stride Runner",
    category: "Running",
    price: 79.99,
    color: "Black",
    sizes: [39, 40, 41, 42, 43, 44],
    available: true,
    description: "Lightweight running shoes designed for everyday training.",
    image: "/products/shoe-3.svg"
  },
  {
    id: 2,
    slug: "urban-walker",
    name: "Urban Walker",
    category: "Casual",
    price: 64.99,
    color: "White",
    sizes: [40, 41, 42, 43],
    available: true,
    description: "Comfortable everyday sneakers for walking and casual wear.",
    image: "/products/shoe-1.svg"
  },
  {
    id: 3,
    slug: "aero-run-x1",
    name: "AeroRun X1",
    category: "Running",
    price: 89.99,
    color: "Grey",
    sizes: [38, 39, 40, 41, 42, 45],
    available: true,
    description: "Breathable mesh upper with high-rebound cushioning for long distances.",
    image: "/products/shoe-1.svg"
  },
  {
    id: 4,
    slug: "velocity-pro",
    name: "Velocity Pro",
    category: "Running",
    price: 119.99,
    color: "Red",
    sizes: [41, 42, 43, 44],
    available: true,
    description: "Performance road running shoe built for speed and energetic strides.",
    image: "/products/shoe-1.svg"
  },
  {
    id: 5,
    slug: "street-one",
    name: "Street One",
    category: "Sneakers",
    price: 54.99,
    color: "Navy",
    sizes: [38, 39, 40, 41, 42, 43],
    available: true,
    description: "Minimalist everyday sneaker that pairs effortlessly with any outfit.",
    image: "/products/shoe-2.svg"
  },
  {
    id: 6,
    slug: "core-trainer",
    name: "Core Trainer",
    category: "Training",
    price: 74.99,
    color: "Black",
    sizes: [39, 40, 41, 42, 44],
    available: true,
    description: "Stable and flat platform designed for weightlifting and gym sessions.",
    image: "/products/shoe-2.svg"
  },
  {
    id: 7,
    slug: "flex-trainer-v2",
    name: "Flex Trainer V2",
    category: "Training",
    price: 69.99,
    color: "Blue",
    sizes: [40, 41, 42],
    available: false,
    description: "Flexible cross-training shoe perfect for HIIT and dynamic workouts.",
    image: "/products/shoe-2.svg"
  },
  {
    id: 8,
    slug: "daily-canvas",
    name: "Daily Canvas",
    category: "Casual",
    price: 44.99,
    color: "Cream",
    sizes: [36, 37, 38, 39, 40, 41],
    available: true,
    description: "Relaxed low-top canvas shoe ideal for weekends and slow days.",
    image: "/products/shoe-1.svg"
  },
  {
    id: 9,
    slug: "trail-x",
    name: "Trail X",
    category: "Running",
    price: 99.99,
    color: "Olive",
    sizes: [42, 43, 44, 45],
    available: true,
    description: "Rugged outdoor shoe with aggressive traction for uneven terrain.",
    image: "/products/shoe-3.svg"
  },
  {
    id: 10,
    slug: "classic-court",
    name: "Classic Court",
    category: "Sneakers",
    price: 79.99,
    color: "White",
    sizes: [39, 40, 41, 42, 43, 44],
    available: true,
    description: "Vintage-inspired court shoe featuring premium synthetic leather.",
    image: "/products/shoe-1.svg"
  },
  {
    id: 11,
    slug: "stride-phantom",
    name: "Stride Phantom",
    category: "Running",
    price: 129.99,
    color: "Black",
    sizes: [40, 41, 42, 43],
    available: true,
    description: "Ultra-lightweight marathon shoe featuring carbon-plate technology.",
    image: "/products/shoe-3.svg"
  },
  {
    id: 12,
    slug: "city-glide",
    name: "City Glide",
    category: "Casual",
    price: 59.99,
    color: "Beige",
    sizes: [37, 38, 39, 40],
    available: true,
    description: "Slip-on design with a memory foam footbed for maximum convenience.",
    image: "/products/shoe-1.svg"
  },
  {
    id: 13,
    slug: "apex-lifter",
    name: "Apex Lifter",
    category: "Training",
    price: 139.99,
    color: "Grey",
    sizes: [41, 42, 43, 44, 45],
    available: false,
    description: "Elevated heel and stiff sole for professional powerlifting.",
    image: "/products/shoe-2.svg"
  },
  {
    id: 14,
    slug: "metro-high-top",
    name: "Metro High-Top",
    category: "Sneakers",
    price: 84.99,
    color: "Black",
    sizes: [39, 40, 42, 43, 44],
    available: true,
    description: "Classic high-top silhouette with reinforced ankle support.",
    image: "/products/shoe-1.svg"
  },
  {
    id: 15,
    slug: "horizon-trekker",
    name: "Horizon Trekker",
    category: "Running",
    price: 109.99,
    color: "Orange",
    sizes: [40, 41, 42, 43, 44],
    available: true,
    description: "Water-resistant trail running shoe built for all-weather conditions.",
    image: "/products/shoe-2.svg"
  },
  {
    id: 16,
    slug: "lounge-slip-on",
    name: "Lounge Slip-On",
    category: "Casual",
    price: 49.99,
    color: "Grey",
    sizes: [38, 39, 40, 41, 42],
    available: true,
    description: "Soft knit upper that hugs your foot like a sock for indoor/outdoor lounging.",
    image: "/products/shoe-3.svg"
  },
  {
    id: 17,
    slug: "sprint-elite",
    name: "Sprint Elite",
    category: "Running",
    price: 149.99,
    color: "Neon Green",
    sizes: [42, 43, 44],
    available: true,
    description: "Track-ready spikes designed for sprinters looking to beat personal records.",
    image: "/products/shoe-1.svg"
  },
  {
    id: 18,
    slug: "heritage-leather",
    name: "Heritage Leather",
    category: "Sneakers",
    price: 95.00,
    color: "Brown",
    sizes: [40, 41, 42, 43, 44, 45],
    available: true,
    description: "Full-grain leather sneaker that develops a beautiful patina over time.",
    image: "/products/shoe-3.svg"
  },
  {
    id: 19,
    slug: "crossfit-pro",
    name: "CrossFit Pro",
    category: "Training",
    price: 115.99,
    color: "Navy",
    sizes: [39, 40, 41, 42],
    available: true,
    description: "Durable side-grip technology for rope climbs and intense lateral movements.",
    image: "/products/shoe-3.svg"
  },
  {
    id: 20,
    slug: "sunday-loafer",
    name: "Sunday Loafer",
    category: "Casual",
    price: 69.99,
    color: "Tan",
    sizes: [38, 39, 40, 41],
    available: false,
    description: "A modern take on the classic loafer, featuring a lightweight EVA sole.",
    image: "/products/shoe-2.svg"
  },
  {
    id: 21,
    slug: "nightfall-jogger",
    name: "Nightfall Jogger",
    category: "Running",
    price: 89.99,
    color: "Purple",
    sizes: [36, 37, 38, 39, 40],
    available: true,
    description: "Reflective detailing across the upper keeps you visible during night runs.",
    image: "/products/shoe-2.svg"
  },
  {
    id: 22,
    slug: "vintage-court",
    name: "Vintage Court",
    category: "Sneakers",
    price: 75.00,
    color: "Cream",
    sizes: [39, 40, 41, 42, 43, 44],
    available: true,
    description: "Off-white tones and exposed foam tongue for a true retro aesthetic.",
    image: "/products/shoe-3.svg"
  },
  {
    id: 23,
    slug: "powerstep-stability",
    name: "PowerStep",
    category: "Training",
    price: 85.99,
    color: "White",
    sizes: [41, 42, 43, 44],
    available: true,
    description: "Extra arch support and a firm heel counter for overpronators.",
    image: "/products/shoe-1.svg"
  },
  {
    id: 24,
    slug: "coastal-cruiser",
    name: "Coastal Cruiser",
    category: "Casual",
    price: 55.99,
    color: "Light Blue",
    sizes: [37, 38, 39, 40, 41],
    available: true,
    description: "Breathable canvas upper paired with a jute-wrapped midsole.",
    image: "/products/shoe-2.svg"
  },
  {
    id: 25,
    slug: "ultraboost-terra",
    name: "UltraBoost Terra",
    category: "Running",
    price: 135.00,
    color: "Olive/Black",
    sizes: [40, 41, 42, 43, 44, 45],
    available: true,
    description: "Maximum cushioning meets rugged durability for long trail expeditions.",
    image: "/products/shoe-3.svg"
  }
];


export const categories = [...new Set(products.map((p) => p.category))].sort();

export const allSizes = [
  ...new Set(products.flatMap((p) => p.sizes)),
].sort((a, b) => a - b);

export const getProductBySlug = (slug) =>
  products.find((product) => product.slug === slug);

export default products;
