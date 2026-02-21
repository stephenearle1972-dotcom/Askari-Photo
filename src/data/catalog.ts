// Central image catalog for the Askari Photography website.
// All image data sourced from the verified species catalog and Cloudinary upload metadata.
// DEDUP RULE: No image appears in more than one section. Exception: hero image also in Awards.

export interface CatalogImage {
  publicId: string;
  title: string;
  aspect: 'portrait' | 'landscape';
}

// ── Gallery Categories (4 tabs: Awards, Mammals, Birdlife, Black & White) ──

export const galleryCategories: Record<string, CatalogImage[]> = {
  Awards: [
    { publicId: 'askari/awards/cheetah-family-climbing-tree-masai-mara', title: 'Cheetah Family Climbing Tree', aspect: 'portrait' },
    { publicId: 'askari/awards/GY8F6108-Edit', title: 'Ostrich Chick Portrait', aspect: 'landscape' },
    { publicId: 'askari/awards/IMG_2967-Edit-Edit-Edit-3', title: 'Sandpipers Fighting', aspect: 'portrait' },
    { publicId: 'askari/awards/IMG_7673-Edit', title: 'African Spoonbill Silhouette', aspect: 'portrait' },
    { publicId: 'askari/awards/53240470-468404837', title: 'Spoonbill in Flight', aspect: 'landscape' },
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

  'Black & White': [
    { publicId: 'askari/black-white/elephant-herd-at-waterhole-panoramic-bw-01', title: 'Elephant Herd Panoramic', aspect: 'landscape' },
    { publicId: 'askari/black-white/lion-male-resting-eye-through-grass-01', title: 'Lion Eye Through Grass', aspect: 'landscape' },
    { publicId: 'askari/black-white/elephant-cow-and-calf-misty-bw-01', title: 'Elephant Cow & Calf in Mist', aspect: 'landscape' },
    { publicId: 'askari/black-white/burchells-zebra-stallions-fighting-dust-01', title: 'Zebra Stallions Fighting', aspect: 'landscape' },
    { publicId: 'askari/black-white/plains-zebra-family-running-grassland-01', title: 'Zebra Family Running', aspect: 'landscape' },
    { publicId: 'askari/black-white/blue-wildebeest-herd-silhouette-sunset-01', title: 'Wildebeest Silhouette at Sunset', aspect: 'landscape' },
    { publicId: 'askari/black-white/heron-silhouette-in-flight-backlit-01', title: 'African Spoonbill Silhouette', aspect: 'landscape' },
    { publicId: 'askari/black-white/EF8A0973-Edit', title: 'Wildlife Portrait I', aspect: 'landscape' },
    { publicId: 'askari/black-white/EF8A2310-Edit', title: 'Wildlife Portrait II', aspect: 'portrait' },
    { publicId: 'askari/black-white/EF8A4422-Edit', title: 'Wildlife Landscape I', aspect: 'landscape' },
    { publicId: 'askari/black-white/EF8A5330-Edit', title: 'Wildlife Portrait III', aspect: 'portrait' },
    { publicId: 'askari/black-white/EF8A6327-Edit', title: 'Wildlife Portrait IV', aspect: 'portrait' },
    { publicId: 'askari/black-white/EF8A7921-Edit', title: 'Wildlife Panoramic', aspect: 'landscape' },
    { publicId: 'askari/black-white/EF8A8319-Edit', title: 'Wildlife Landscape II', aspect: 'landscape' },
    { publicId: 'askari/black-white/EF8A9381-Edit', title: 'Wildlife Landscape III', aspect: 'landscape' },
    { publicId: 'askari/black-white/GY8F0370-Edit', title: 'Wildlife Landscape IV', aspect: 'landscape' },
    { publicId: 'askari/black-white/GY8F3869-Edit', title: 'Wildlife Portrait V', aspect: 'portrait' },
    { publicId: 'askari/black-white/GY8F4476-Edit', title: 'Wildlife Landscape V', aspect: 'landscape' },
    { publicId: 'askari/black-white/GY8F5271-Edit-Edit', title: 'Wildlife Portrait VI', aspect: 'portrait' },
    { publicId: 'askari/black-white/GY8F9172-Edit', title: 'Wildlife Portrait VII', aspect: 'portrait' },
    { publicId: 'askari/black-white/IMG_0178-Edit', title: 'Wildlife Portrait VIII', aspect: 'portrait' },
    { publicId: 'askari/black-white/IMG_2071-Edit-Edit-2', title: 'Wildlife Portrait IX', aspect: 'portrait' },
  ],
};

export const galleryCategoryNames = Object.keys(galleryCategories);

// ── Fine Art B&W Prints (Shop) ──────────────────────────────────────────
// All 22 B&W images from askari/black-white/ folder. B&W ONLY.

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
  {
    id: 'bw-7',
    publicId: 'askari/black-white/EF8A0973-Edit',
    title: 'Bushveld Study I',
    basePrice: 1200,
    description: 'A striking black and white study from the African bushveld. Museum-quality archival print with exceptional tonal range.',
  },
  {
    id: 'bw-8',
    publicId: 'askari/black-white/EF8A2310-Edit',
    title: 'African Portrait I',
    basePrice: 1200,
    description: 'An evocative portrait composition rendered in rich black and white. Printed on heavyweight archival fine art paper.',
  },
  {
    id: 'bw-9',
    publicId: 'askari/black-white/EF8A4422-Edit',
    title: 'Savanna Moment I',
    basePrice: 1200,
    description: 'A compelling scene from the African savanna captured in dramatic monochrome. Museum-quality archival print.',
  },
  {
    id: 'bw-10',
    publicId: 'askari/black-white/EF8A5330-Edit',
    title: 'African Portrait II',
    basePrice: 1200,
    description: 'A powerful wildlife portrait in classic black and white. Premium archival fine art print with exquisite detail.',
  },
  {
    id: 'bw-11',
    publicId: 'askari/black-white/EF8A6327-Edit',
    title: 'African Portrait III',
    basePrice: 1200,
    description: 'An intimate wildlife portrait with rich tonal depth. Printed on museum-grade archival paper.',
  },
  {
    id: 'bw-12',
    publicId: 'askari/black-white/EF8A7921-Edit',
    title: 'Bushveld Panoramic',
    basePrice: 1200,
    description: 'A wide panoramic composition from the African bushveld rendered in dramatic monochrome. Archival museum-quality print.',
  },
  {
    id: 'bw-13',
    publicId: 'askari/black-white/EF8A8319-Edit',
    title: 'Savanna Moment II',
    basePrice: 1200,
    description: 'A captivating wildlife moment in the savanna, rendered in rich black and white. Heavyweight archival paper.',
  },
  {
    id: 'bw-14',
    publicId: 'askari/black-white/EF8A9381-Edit',
    title: 'Bushveld Study II',
    basePrice: 1200,
    description: 'A beautifully composed scene from the bushveld in classic monochrome. Museum-quality archival fine art print.',
  },
  {
    id: 'bw-15',
    publicId: 'askari/black-white/GY8F0370-Edit',
    title: 'Waterberg Study I',
    basePrice: 1200,
    description: 'A striking composition from the Waterberg region in dramatic black and white. Printed on premium archival paper.',
  },
  {
    id: 'bw-16',
    publicId: 'askari/black-white/GY8F3869-Edit',
    title: 'Waterberg Portrait I',
    basePrice: 1200,
    description: 'An evocative wildlife portrait from the Waterberg. Museum-quality archival print with exceptional tonal depth.',
  },
  {
    id: 'bw-17',
    publicId: 'askari/black-white/GY8F4476-Edit',
    title: 'Waterberg Study II',
    basePrice: 1200,
    description: 'A powerful scene from the Waterberg captured in rich monochrome. Premium archival fine art print.',
  },
  {
    id: 'bw-18',
    publicId: 'askari/black-white/GY8F5271-Edit-Edit',
    title: 'Waterberg Portrait II',
    basePrice: 1200,
    description: 'An intimate portrait composition from the Waterberg in classic black and white. Museum-quality archival paper.',
  },
  {
    id: 'bw-19',
    publicId: 'askari/black-white/GY8F9172-Edit',
    title: 'Waterberg Portrait III',
    basePrice: 1200,
    description: 'A striking wildlife portrait from the Waterberg region. Archival museum-quality print with rich detail.',
  },
  {
    id: 'bw-20',
    publicId: 'askari/black-white/IMG_0178-Edit',
    title: 'Kruger Portrait I',
    basePrice: 1200,
    description: 'A powerful portrait captured in the Greater Kruger in dramatic monochrome. Printed on heavyweight archival paper.',
  },
  {
    id: 'bw-21',
    publicId: 'askari/black-white/IMG_2071-Edit-Edit-2',
    title: 'Kruger Portrait II',
    basePrice: 1200,
    description: 'An evocative wildlife portrait from the Greater Kruger rendered in rich black and white. Museum-quality archival print.',
  },
];

// ── Colour Prints (Shop) ────────────────────────────────────────────────
// 18 colour images NOT used in Gallery, Behind Lens, Instagram, or Awards.

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
    description: "A powerful male lion mid-yawn, revealing the full might of Africa's apex predator. Museum-quality archival print.",
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
  // New additions from unused Cloudinary images
  {
    id: 'colour-8',
    publicId: 'askari/wildlife/GY8F8547-Edit',
    title: 'Elephant Herd at Sunset',
    basePrice: 1200,
    description: 'An elephant herd silhouetted against the golden light of sunset. Panoramic archival museum-quality print.',
  },
  {
    id: 'colour-9',
    publicId: 'askari/wildlife/IMG_9123-Edit',
    title: 'Wildlife in Golden Light',
    basePrice: 1200,
    description: 'A stunning wildlife scene bathed in warm golden light. Museum-quality archival print with exceptional tonal depth.',
  },
  {
    id: 'colour-10',
    publicId: 'askari/wildlife/GY8F0979',
    title: 'Lion Pride Resting',
    basePrice: 1200,
    description: 'A tranquil scene of a lion pride at rest in the African bushveld. Premium archival fine art print.',
  },
  {
    id: 'colour-11',
    publicId: 'askari/wildlife/IMG_5395',
    title: 'Lion Eye Through Grass',
    basePrice: 1200,
    description: 'The watchful eye of a male lion peering through golden grass. Vivid colour fine art print on archival paper.',
  },
  // New uploads from Website Ready
  {
    id: 'colour-12',
    publicId: 'askari/wildlife/leopard-in-tree-looking-at-camera-01',
    title: 'Leopard in Tree',
    basePrice: 1200,
    description: 'A leopard draped over a tree branch, eyes locked on the camera. Museum-quality archival print capturing raw predator presence.',
  },
  {
    id: 'colour-13',
    publicId: 'askari/wildlife/leopard-standing-on-branch-01',
    title: 'Leopard on Branch',
    basePrice: 1200,
    description: 'A leopard standing confidently on a branch, surveying its territory. Premium archival fine art print.',
  },
  {
    id: 'colour-14',
    publicId: 'askari/wildlife/african-elephant-family-walking-dusk-01',
    title: 'Elephant Family at Dusk',
    basePrice: 1200,
    description: 'An elephant family walking together through the golden light of dusk. Museum-quality archival print with exceptional warmth.',
  },
  {
    id: 'colour-15',
    publicId: 'askari/wildlife/lion-male-snarling-close-up-artistic-01',
    title: 'Lion Male Snarling Close-up',
    basePrice: 1200,
    description: 'An intense close-up of a snarling male lion, captured in dramatic artistic detail. Heavyweight archival paper.',
  },
  {
    id: 'colour-16',
    publicId: 'askari/birdlife/african-fish-eagle-in-flight-over-water-01',
    title: 'African Fish Eagle in Flight',
    basePrice: 1200,
    description: 'An African fish eagle soaring over the water with talons extended. Vivid colour fine art print on archival paper.',
  },
  {
    id: 'colour-17',
    publicId: 'askari/birdlife/common-ostrich-chick-close-up-burnt-01',
    title: 'Ostrich Chick Close-up',
    basePrice: 1200,
    description: 'An intimate close-up portrait of a young ostrich chick. Museum-quality archival print capturing delicate detail.',
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
