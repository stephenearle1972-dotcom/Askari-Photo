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
    { publicId: 'askari/awards/cheetah-family-climbing-tree-masai-mara', title: 'Cheetah Family on Fallen Tree, Masai Mara', aspect: 'portrait' },
    { publicId: 'askari/awards/GY8F6108-Edit', title: 'Ostrich Chick Among Adult\'s Legs on Burnt Ground', aspect: 'landscape' },
    { publicId: 'askari/awards/IMG_2967-Edit-Edit-Edit-3', title: 'African Spoonbill Erupting from Water', aspect: 'portrait' },
    { publicId: 'askari/awards/IMG_7673-Edit', title: 'Cape Vulture & Black-backed Jackal', aspect: 'portrait' },
    { publicId: 'askari/awards/53240470-468404837', title: 'Spoonbill in Flight', aspect: 'landscape' },
  ],

  Mammals: [
    { publicId: 'askari/wildlife/20101011_6129', title: 'Cheetah Mother with Cubs', aspect: 'landscape' },
    { publicId: 'askari/wildlife/EF8A0504', title: 'Elephant Bull Mud-bathing', aspect: 'landscape' },
    { publicId: 'askari/wildlife/EF8A0517', title: 'Elephant Calf Walking', aspect: 'landscape' },
    { publicId: 'askari/wildlife/EF8A2983', title: 'Lion Male Snarling', aspect: 'landscape' },
    { publicId: 'askari/wildlife/EF8A8300', title: 'Lioness Drinking with Reflection', aspect: 'landscape' },
    { publicId: 'askari/wildlife/GY8F0826', title: 'Lion Male Walking', aspect: 'landscape' },
    { publicId: 'askari/wildlife/GY8F0842', title: 'Lion Male Walking — Open Grassland', aspect: 'landscape' },
    { publicId: 'askari/wildlife/GY8F1326', title: 'Lion Among Springbok', aspect: 'landscape' },
    { publicId: 'askari/wildlife/GY8F1899', title: 'White Rhino Calf at Full Gallop', aspect: 'landscape' },
    { publicId: 'askari/wildlife/GY8F5890', title: 'Zebra Pair Portrait', aspect: 'landscape' },
    { publicId: 'askari/wildlife/GY8F7836', title: 'White Rhino Walking', aspect: 'landscape' },
    { publicId: 'askari/wildlife/IMG_0031', title: 'Elephant Bull Frontal', aspect: 'portrait' },
    { publicId: 'askari/wildlife/IMG_1725', title: 'Elephant Bull Browsing', aspect: 'landscape' },
    { publicId: 'askari/wildlife/IMG_9737', title: 'Elephants Play-fighting in River', aspect: 'landscape' },
    { publicId: 'askari/wildlife/IMG_9745', title: 'Elephant Bulls Sparring in River — Close Contact', aspect: 'landscape' },
    { publicId: 'askari/wildlife/IMG_9778', title: 'Zebra Yawning', aspect: 'landscape' },
  ],

  Birdlife: [
    { publicId: 'askari/birdlife/GY8F8687', title: 'Hippopotamus Threat Display with Hamerkop', aspect: 'portrait' },
    { publicId: 'askari/birdlife/GY8F9280-Edit', title: 'Yellow-billed Kite Coming in to Land', aspect: 'landscape' },
    { publicId: 'askari/wildlife/20100814_5320-Edit-2', title: 'African Spoonbill in Flight', aspect: 'landscape' },
    { publicId: 'askari/wildlife/GY8F0422', title: 'Long-tailed Widowbird at Sunset', aspect: 'landscape' },
    { publicId: 'askari/wildlife/GY8F9284-Edit', title: 'Grey Heron in Motion — Long Exposure Study', aspect: 'landscape' },
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
    { publicId: 'askari/black-white/heron-silhouette-in-flight-backlit-01', title: 'Heron in Flight — Backlit Golden Wings', aspect: 'landscape' },
    { publicId: 'askari/black-white/EF8A0973-Edit', title: 'Elephant Bull — Monochrome Close-up', aspect: 'landscape' },
    { publicId: 'askari/black-white/EF8A2310-Edit', title: 'Lion Male Portrait — Striking Monochrome', aspect: 'portrait' },
    { publicId: 'askari/black-white/EF8A4422-Edit', title: 'Greater Kudu Bull with Oxpecker', aspect: 'landscape' },
    { publicId: 'askari/black-white/EF8A5330-Edit', title: 'Plains Zebra Head Study', aspect: 'portrait' },
    { publicId: 'askari/black-white/EF8A6327-Edit', title: 'Waterberg Bush Road — Black & White Landscape', aspect: 'portrait' },
    { publicId: 'askari/black-white/EF8A7921-Edit', title: 'Plains Zebra — Isolated Portrait', aspect: 'landscape' },
    { publicId: 'askari/black-white/EF8A8319-Edit', title: 'Cape Buffalo Bull — Frontal Charge', aspect: 'landscape' },
    { publicId: 'askari/black-white/EF8A9381-Edit', title: 'White Rhino Profile Study', aspect: 'landscape' },
    { publicId: 'askari/black-white/GY8F0370-Edit', title: 'Giraffe Walking — Waterberg', aspect: 'landscape' },
    { publicId: 'askari/black-white/GY8F3869-Edit', title: 'Leopard Descending Tree at Night', aspect: 'portrait' },
    { publicId: 'askari/black-white/GY8F4476-Edit', title: 'Elephant Bull Walking — Side Profile', aspect: 'landscape' },
    { publicId: 'askari/black-white/GY8F5271-Edit-Edit', title: 'Zebra Stallions Sparring', aspect: 'portrait' },
    { publicId: 'askari/black-white/GY8F9172-Edit', title: 'Lion Brothers — Head Rubbing', aspect: 'portrait' },
    { publicId: 'askari/black-white/IMG_0178-Edit', title: 'Elephant Skin & Tusk — Abstract Detail', aspect: 'portrait' },
    { publicId: 'askari/black-white/IMG_2071-Edit-Edit-2', title: 'Elephant Mother & Calf Walking', aspect: 'portrait' },
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
    title: 'Heron in Flight — Backlit Golden Wings',
    basePrice: 1200,
    description: 'A heron in flight with wings backlit by golden light, revealing translucent feather detail. Archival museum-quality print.',
  },
  {
    id: 'bw-7',
    publicId: 'askari/black-white/EF8A0973-Edit',
    title: 'Elephant Bull — Monochrome Close-up',
    basePrice: 1200,
    description: 'An imposing elephant bull facing the camera head-on, ears spread wide, shot through low bush. Museum-quality archival print with exceptional tonal range.',
  },
  {
    id: 'bw-8',
    publicId: 'askari/black-white/EF8A2310-Edit',
    title: 'Lion Male Portrait — Striking Monochrome',
    basePrice: 1200,
    description: 'A regal male lion at rest, rendered in rich high-contrast black and white. Printed on heavyweight archival fine art paper.',
  },
  {
    id: 'bw-9',
    publicId: 'askari/black-white/EF8A4422-Edit',
    title: 'Greater Kudu Bull with Oxpecker',
    basePrice: 1200,
    description: 'A greater kudu bull with magnificent spiral horns, oxpeckers perched on his back, in fine-art monochrome. Museum-quality archival print.',
  },
  {
    id: 'bw-10',
    publicId: 'askari/black-white/EF8A5330-Edit',
    title: 'Plains Zebra Head Study',
    basePrice: 1200,
    description: 'A tight head and neck portrait of a plains zebra in fine-art monochrome, revealing exquisite stripe detail. Premium archival fine art print.',
  },
  {
    id: 'bw-11',
    publicId: 'askari/black-white/EF8A6327-Edit',
    title: 'Waterberg Bush Road — Black & White Landscape',
    basePrice: 1200,
    description: 'A lone zebra on a winding bush road leading toward a rocky koppie in the Waterberg. Printed on museum-grade archival paper.',
  },
  {
    id: 'bw-12',
    publicId: 'askari/black-white/EF8A7921-Edit',
    title: 'Plains Zebra — Isolated Portrait',
    basePrice: 1200,
    description: 'A plains zebra rendered in clean fine-art monochrome against a white background. Archival museum-quality print.',
  },
  {
    id: 'bw-13',
    publicId: 'askari/black-white/EF8A8319-Edit',
    title: 'Cape Buffalo Bull — Frontal Charge',
    basePrice: 1200,
    description: 'A Cape buffalo bull walking directly toward the camera, massive boss and intense gaze in high-contrast monochrome. Heavyweight archival paper.',
  },
  {
    id: 'bw-14',
    publicId: 'askari/black-white/EF8A9381-Edit',
    title: 'White Rhino Profile Study',
    basePrice: 1200,
    description: 'A white rhinoceros in full side profile, prominent horn on display, in clean fine-art monochrome. Museum-quality archival fine art print.',
  },
  {
    id: 'bw-15',
    publicId: 'askari/black-white/GY8F0370-Edit',
    title: 'Giraffe Walking — Waterberg',
    basePrice: 1200,
    description: 'A giraffe in mid-stride, elegant long legs captured in fine-art monochrome against a white background. Printed on premium archival paper.',
  },
  {
    id: 'bw-16',
    publicId: 'askari/black-white/GY8F3869-Edit',
    title: 'Leopard Descending Tree at Night',
    basePrice: 1200,
    description: 'A leopard descending a tree trunk in darkness, piercing eyes locked on the camera. Museum-quality archival print with exceptional tonal depth.',
  },
  {
    id: 'bw-17',
    publicId: 'askari/black-white/GY8F4476-Edit',
    title: 'Elephant Bull Walking — Side Profile',
    basePrice: 1200,
    description: 'A mature elephant bull in side profile with large tusks, rendered in clean fine-art monochrome. Premium archival fine art print.',
  },
  {
    id: 'bw-18',
    publicId: 'askari/black-white/GY8F5271-Edit-Edit',
    title: 'Zebra Stallions Sparring',
    basePrice: 1200,
    description: 'Two plains zebra stallions rearing and biting in a dramatic sparring display. Museum-quality archival paper.',
  },
  {
    id: 'bw-19',
    publicId: 'askari/black-white/GY8F9172-Edit',
    title: 'Lion Brothers — Head Rubbing',
    basePrice: 1200,
    description: 'Two male lions walking side by side, heads pressed together in an intimate bonding moment. Archival museum-quality print with rich detail.',
  },
  {
    id: 'bw-20',
    publicId: 'askari/black-white/IMG_0178-Edit',
    title: 'Elephant Skin & Tusk — Abstract Detail',
    basePrice: 1200,
    description: 'An extreme close-up of an elephant eye, wrinkled skin texture, and tusk tip in dramatic monochrome. Printed on heavyweight archival paper.',
  },
  {
    id: 'bw-21',
    publicId: 'askari/black-white/IMG_2071-Edit-Edit-2',
    title: 'Elephant Mother & Calf Walking',
    basePrice: 1200,
    description: 'An elephant mother and her small calf walking toward the camera in high-key black and white. Museum-quality archival print.',
  },
  {
    id: 'bw-22',
    publicId: 'askari/wildlife/GY8F8547-Edit',
    title: 'Elephant Herd at Waterhole — Wide View',
    basePrice: 1200,
    description: 'A large elephant breeding herd gathered at a waterhole in the dry bushveld. Panoramic archival museum-quality print.',
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
    id: 'colour-9',
    publicId: 'askari/wildlife/IMG_9123-Edit',
    title: 'Elephant Cow & Calf — Waterberg Dusk',
    basePrice: 1200,
    description: 'An elephant cow and her calf walking together through the Waterberg bush in soft, misty light. Museum-quality archival print with exceptional tonal depth.',
  },
  {
    id: 'colour-10',
    publicId: 'askari/wildlife/GY8F0979',
    title: 'Zebra Mare & Foal in Motion',
    basePrice: 1200,
    description: 'A zebra mare and foal galloping through open grassland, the foal running energetically alongside. Premium archival fine art print.',
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
    title: 'African Fish Eagle Landing on Water',
    basePrice: 1200,
    description: 'An African fish eagle skimming low over the water, talons extended for the catch. Vivid colour fine art print on archival paper.',
  },
  {
    id: 'colour-17',
    publicId: 'askari/birdlife/common-ostrich-chick-close-up-burnt-01',
    title: 'Ostrich Chick Sheltering Beneath Adult',
    basePrice: 1200,
    description: 'An ostrich chick sheltering on burnt ground beneath the legs of an adult, with delicate spiky plumage. Museum-quality archival print capturing tender detail.',
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
    alt: 'Leopard resting on fallen tree in the Waterberg',
  },
  {
    publicId: 'askari/wildlife/EF8A1304',
    text: "Patience is the most important piece of equipment. The bush rewards those who wait.",
    alt: 'Elephant cow guiding calf at dusk',
  },
  {
    publicId: 'askari/wildlife/GY8F8469',
    text: "Conservation isn't just a cause — it's the reason every image matters.",
    alt: 'Leopard in tree canopy, black and white study',
  },
];
