export const nav = [
  ["about", "About"],
  ["reels", "Reels"],
  ["services", "Services"],
  ["packages", "Packages"],
  ["contact", "Contact"],
];
export const stats = [
  ["22+", "YEARS CRAFT"],
  ["180+", "FILMS & ADS"],
  ["45M+", "TOTAL REACH"],
];
export const features = [
  [
    "mask",
    "Actors & Talent",
    "Deep psychological staging and naturalistic dialogue delivery.",
  ],
  [
    "clap",
    "Lens & Grading",
    "Sensory amber tones, anamorphic flares, and tactile shadows.",
  ],
];
export const collaborators = ["Dar Nota", "Shahbandar"];
export const brands = ["Dar Nota", "Shahbandar"];
export const filters = ["All Works", ...brands];
const v = (id, brand, n) => ({
  id,
  brand,
  title: `${brand} · Reel ${n}`,
  video: `/reels/${id}.mp4`,
  poster: `/reels/${id}.jpg`,
});

export const reels = [
  v("video1_darnota", "Dar Nota", 1),
  v("video1_shahbandar", "Shahbandar", 1),
  v("video2_darnota", "Dar Nota", 2),
  v("video2_shahbandar", "Shahbandar", 2),
  v("video3_darnota", "Dar Nota", 3),
  v("video4_darnota", "Dar Nota", 4),
];
export const services = [
  [
    "camera",
    "Commercial Ad Directing",
    "Full-scale TV commercials, social-first reels, and disruptive brand manifests tailored for regional Middle Eastern & North African markets.",
  ],
  [
    "pen",
    "Screenwriting & Treatment",
    "Narrative architecture, character arcs, authentic colloquial dialogue, and detailed visual lookbooks that win executive greenlights.",
  ],
  [
    "card",
    "Talent Casting & Auditions",
    "Drawing upon 20+ years of network relations across Egypt’s film industry to discover and coax spellbinding performances from stars or non-actors.",
  ],
  [
    "hanger",
    "Fashion & Editorial Film",
    "High-fashion mood films, seasonal campaign lookbooks, and luxury timepiece showcases drenched in atmospheric natural lighting.",
  ],
];
export const steps = [
  [
    "Brief Discovery & Script Beat",
    "Deconstructing brand goals into emotional themes, storyboard frames, and location sceneries.",
  ],
  [
    "Pre-Production & Casting",
    "Location scouting across historical and urban Cairo, wardrobe styling, technical crew rigging, and rehearsals.",
  ],
  [
    "Principal Photography",
    "Disciplined set leadership, high precision camera blocking, and organic performance capture.",
  ],
  [
    "Editorial & Film Grading",
    "Audio mixing with authentic foley, rhythm-focused edit pacing, and signature celluloid color timing.",
  ],
];
export const packages = [
  {
    eyebrow: "SOCIAL SIGNATURE",
    title: "Single Cinematic Reel",
    pill: "Single Project",
    text: "Ideal for hero product launches, exclusive interviews, or brand manifesto drops requiring prestige quality.",
    items: [
      "1-Day Production Shoot in Cairo",
      "Full Treatment & Director Lookbook",
      "Color Grade & Custom Soundscape",
    ],
    cta: "Inquire for Reel",
    hot: false,
  },
  {
    eyebrow: "MOST REQUESTED",
    title: "Campaign Trilogy (3 Reels)",
    pill: "FullSuite",
    text: "Complete storytelling arc across multiple narratives, talent casting, and synchronized multi-platform formats.",
    items: [
      "3 Distinct 9:16 & 16:9 Master Cuts",
      "Talent Casting & Multi-day Staging",
      "Comprehensive Screenplay & Revision Rounds",
    ],
    cta: "Request Trilogy Package",
    hot: true,
  },
];
export const categories = [
  "Commercial TVC & Digital Campaign",
  "Fashion Film",
  "Short Narrative",
  "Casting & Talent Direction",
];
