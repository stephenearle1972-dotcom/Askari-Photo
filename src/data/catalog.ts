// Central image catalog for the Askari Photography website.
// All image data sourced from the verified species catalog and Cloudinary upload metadata.
// DEDUP RULE: No image appears in more than one section. Exception: hero image also in Awards.

export interface CatalogImage {
  publicId: string;
  title: string;
  aspect: 'portrait' | 'landscape';
}

// ── Gallery Categories (3 tabs: Awards, Mammals, Birdlife) ──────────────
// B&W tab removed — those images live in the Fine Art Prints shop section.

export const galleryCategories: Record<string, CatalogImage[]> = {
  Awards: [
    { publicId: 'askari/awards/cheetah-family-climbing-tree-masai-mara', title: 'Cheetah Family Climbing Tree', aspect: 'portrait' },
    { publicId: 'askari/awards/GY8F6108-Edit', title: 'Ostrich Chick Portrait', aspect: 'landscape' },
    { publicId: 'askari/awards/IMG_2967-Edit-Edit-Edit-3', title: 'Sandpipers Fighting', aspect: 'portrait' },
    { publicId: 'askari/awards/IMG_7673-Edit', title: 'Jackal vs Cape Vulture', aspect: 'portrait' },
  ],

  Mammals: [
    { publicId: 'askari/wildlife/20101011_6129', title: 'Cheetah Mother with Cubs', aspect: 'landscape' },
    { publicId: 'askari/wildlife/EF8A0504', title: 'Elephant Bull Mud-bathing', aspect: 'landscape' },
    { publicId: 'askari/wildlife/EF8A0517', title: 'Elephant Calf Walking', aspect: 'landscape' },
    { publicId: 'askari/wildlife/EF8A2983', title: 'Lion Male Snarling', aspect: 'landscape' },
    { publicId: 'askari/wildlife/EF8A8300', title: 'Lioness Drinking with Reflection', aspect: 'landscape' },
    { publicId: 'askari/wildlife/GY8F0826', title: 'Lion Male Walking', aspect: 'landscape' },
    { publicId: 'askari/wildlife/GY8F0842', title: 'Lion Male Walking (2)', aspect: 'landscape' },
    { publicId: 'askari/wildlife/GY8F1326', title: 'Lion Among Springbok', aspect: 'landscape' },
    { publicId: 'askari/wildlife/GY8F1899', title: 'White Rhino Calf Running (2)', aspect: 'landscape' },
    { publicId: 'askari/wildlife/GY8F5890', title: 'Zebra Pair Portrait', aspect: 'landscape' },
    { publicId: 'askari/wildlife/GY8F7836', title: 'White Rhino Walking', aspect: 'landscape' },
    { publicId: 'askari/wildlife/IMG_0031', title: 'Elephant Bull Frontal', aspect: 'portrait' },
    { publicId: 'askari/wildlife/IMG_1725', title: 'Elephant Bull Browsing', aspect: 'landscape' },
    { publicId: 'askari/wildlife/IMG_9737', title: 'Elephants Play-fighting in River', aspect: 'landscape' },
    { publicId: 'askari/wildlife/IMG_9745', title: 'Elephants Play-fighting in River (2)', aspect: 'landscape' },
    { publicId: 'askari/wildlife/IMG_9778', title: 'Zebra Yawning', aspect: 'landscape' },
  ],

  Birdlife: [
    { publicId: 'askari/birdlife/GY8F8687', title: 'Hippopotamus & Hamerkop', aspect: 'portrait' },
    { publicId: 'askari/birdlife/GY8F9280-Edit', title: 'Yellow-billed Kite in Flight', aspect: 'landscape' },
    { publicId: 'askari/wildlife/20100814_5320-Edit-2', title: 'African Spoonbill in Flight', aspect: 'landscape' },
    { publicId: 'askari/wildlife/GY8F0422', title: 'Long-tailed Widowbird at Sunset', aspect: 'landscape' },
    { publicId: 'askari/wildlife/GY8F9284-Edit', title: 'Heron Motion Blur Artistic', aspect: 'landscape' },
    { publicId: 'askari/wildlife/IMG_2509', title: 'Collared Sunbird on Flowers', aspect: 'landscape' },
    { publicId: 'askari/wildlife/IMG_5223', title: 'Black-headed Heron Hunting Squirrel', aspect: 'landscape' },
  ],
};

export const galleryCategoryNames = Object.keys(galleryCategories);

// ── Fine Art B&W Prints (Shop) ──────────────────────────────────────────
// All 7 dedicated B&W images from askari/black-white/ folder.

export const fineArtPrints = [
  {
    id: 'bw-0',
    publicId: 'askari/black-white/elephant-herd-at-waterhole-panoramic-bw-01',
    title: 'Elephant Herd Panoramic',
    basePrice: 1200,
    description: 'A sweeping panoramic of an elephant herd gathered at the waterhole. Printed on archival museum-quality paper with rich tonal depth.',
  },
  {
    id: 'bw-1',
    publicId: 'askari/black-white/lion-male-resting-eye-through-grass-01',
    title: 'Lion Eye Through Grass',
    basePrice: 1200,
    description: 'The piercing eye of a male lion peering through tall grass. Museum-quality fine art print with exquisite detail.',
  },
  {
    id: 'bw-2',
    publicId: 'askari/black-white/elephant-cow-and-calf-misty-bw-01',
    title: 'Elephant Cow & Calf in Mist',
    basePrice: 1200,
    description: 'An intimate portrait of an elephant cow guiding her calf through the mist. Premium archival fine art print.',
  },
  {
    id: 'bw-3',
    publicId: 'askari/black-white/burchells-zebra-stallions-fighting-dust-01',
    title: 'Zebra Stallions Fighting',
    basePrice: 1200,
    description: "Two Burchell's zebra stallions locked in a dramatic dust-filled confrontation. Heavyweight archival paper with exceptional detail.",
  },
  {
    id: 'bw-4',
    publicId: 'askari/black-white/plains-zebra-family-running-grassland-01',
    title: 'Zebra Family Running',
    basePrice: 1200,
    description: 'A plains zebra family in full stride across open grassland. Museum-quality archival print capturing pure movement.',
  },
  {
    id: 'bw-5',
    publicId: 'askari/black-white/blue-wildebeest-herd-silhouette-sunset-01',
    title: 'Wildebeest Silhouette at Sunset',
    basePrice: 1200,
    description: 'A blue wildebeest herd silhouetted against a dramatic sunset. Fine art print on museum-grade archival paper.',
  },
  {
    id: 'bw-6',
    publicId: 'askari/black-white/heron-silhouette-in-flight-backlit-01',
    title: 'African Spoonbill Silhouette',
    basePrice: 1200,
    description: 'An African spoonbill in flight, silhouetted against a luminous backlit sky. Archival museum-quality print.',
  },
];

// ── Colour Prints (Shop) ────────────────────────────────────────────────
// 8 colour images NOT used in Gallery, Behind Lens, Instagram, or Awards.

export const colourPrints = [
  {
    id: 'colour-0',
    publicId: 'askari/wildlife/GY8F2917',
    title: 'Cheetah Mother & Cub Nuzzling',
    basePrice: 1200,
    description: 'A tender moment between a cheetah mother and her cub. Archival museum-quality print capturing pure wildlife intimacy.',
  },
  {
    id: 'colour-1',
    publicId: 'askari/wildlife/IMG_2402',
    title: 'Cape Buffalo Frontal Portrait',
    basePrice: 1200,
    description: "An intense frontal portrait of an old Cape buffalo bull, one of Africa's most formidable animals. Museum-quality fine art print.",
  },
  {
    id: 'colour-2',
    publicId: 'askari/wildlife/IMG_7729',
    title: 'Hippo with Terrapins',
    basePrice: 1200,
    description: 'A hippopotamus carrying helmeted terrapins on its back, reflected in still water. Museum-quality archival print.',
  },
  {
    id: 'colour-3',
    publicId: 'askari/wildlife/IMG_2568',
    title: 'Pied Kingfisher Hovering',
    basePrice: 1200,
    description: 'A pied kingfisher frozen mid-hover above the water, wings spread. Printed on archival museum-quality paper with stunning clarity.',
  },
  {
    id: 'colour-4',
    publicId: 'askari/birdlife/9393101-468405030-2',
    title: 'Red-billed Oxpecker on Rhino',
    basePrice: 1200,
    description: 'A red-billed oxpecker perched on the horn of a white rhinoceros. Vivid colour fine art print on archival paper.',
  },
  {
    id: 'colour-5',
    publicId: 'askari/wildlife/EF8A2819',
    title: 'Lion Male Yawning',
    basePrice: 1200,
    description: 'A powerful male lion mid-yawn, revealing the full might of Africa\'s apex predator. Museum-quality archival print.',
  },
  {
    id: 'colour-6',
    publicId: 'askari/wildlife/GY8F0659-Edit',
    title: 'Baboon Infant Portrait',
    basePrice: 1200,
    description: 'An intimate portrait of a young chacma baboon, eyes full of curiosity. Premium archival fine art print.',
  },
  {
    id: 'colour-7',
    publicId: 'askari/wildlife/GY8F1738',
    title: 'White Rhino Calf Running',
    basePrice: 1200,
    description: 'A white rhinoceros calf charging through golden grass. Printed on heavyweight archival paper with exceptional detail.',
  },
];

// ── Instagram Grid ──────────────────────────────────────────────────────
// 8 unique images not used in Gallery, Shop, or Behind Lens.

export const instagramGrid = [
  { publicId: 'askari/wildlife/EF8A0589', title: 'Cape Buffalo Profile Portrait' },
  { publicId: 'askari/wildlife/GY8F0535-Edit', title: 'Hippo Threat Display' },
  { publicId: 'askari/birdlife/GY8F9931-Edit', title: 'Swallow-tailed Bee-eater' },
  { publicId: 'askari/wildlife/20101011_2869', title: 'Cheetah Cubs Play-fighting' },
  { publicId: 'askari/birdlife/GY8F9803', title: 'African Fish Eagle' },
  { publicId: 'askari/wildlife/GY8F8784', title: 'Hamerkop with Fish' },
  { publicId: 'askari/wildlife/IMG_0189', title: 'African Cuckoo Perched' },
  { publicId: 'askari/wildlife/GY8F6065', title: 'Ostrich Chicks on Burnt Ground' },
];

// ── Behind the Lens ─────────────────────────────────────────────────────
// 3 unique images not used in Gallery, Shop, or Instagram.

export const behindLensBlocks = [
  {
    publicId: 'askari/wildlife/20100910_2400-Edit-5',
    text: "Every image begins with stillness. The bush reveals its secrets only to those who wait.",
  },
  {
    publicId: 'askari/wildlife/EF8A1304',
    text: "Patience is the most important piece of equipment. The bush rewards those who wait.",
  },
  {
    publicId: 'askari/wildlife/GY8F8469',
    text: "Conservation isn't just a cause — it's the reason every image matters.",
  },
];
