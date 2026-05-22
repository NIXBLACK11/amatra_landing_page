export interface WhitepaperSection {
  tag: string;
  title: string;
  body: string;
}

export const whitepaperSections: WhitepaperSection[] = [
  {
    tag: '01 — The Problem',
    title: 'Fashion discovery is broken.',
    body: 'People struggle to visualise how their clothes work together. Shopping is disconnected from inspiration. Social platforms were built for everyone, so they serve no one in fashion particularly well. There is no dedicated space for outfit creation, sharing, and community — just generic feeds stuffed with fashion content.',
  },
  {
    tag: '02 — Our Solution',
    title: 'A social app built around the outfit.',
    body: 'Amatra puts the outfit at the centre of everything. Users upload their real wardrobe, compose looks with AI, and share posts where every piece links to a real product. Others can copy an entire outfit with one tap. The result is a focused, fashion-first community where discovery and inspiration lead directly to action.',
  },
  {
    tag: '03 — The Technology',
    title: 'AI that works with what you own.',
    body: "Unlike generic AI style tools, Amatra's AI composer works exclusively with the user's own wardrobe. You choose the pieces; the AI generates a realistic full-body outfit image. This keeps the creative control with the user and ensures outputs are immediately wearable — not aspirational fiction.",
  },
  {
    tag: '04 — Business Model',
    title: 'Free to start. Premium to grow.',
    body: 'Amatra is free to download with a limited number of AI outfit generations per month. Premium subscribers unlock unlimited creations, no ads, and priority generation. The freemium model ensures accessibility while funding ongoing AI improvements and infrastructure.',
  },
  {
    tag: '05 — Roadmap',
    title: "What's coming next.",
    body: 'Upcoming features include direct messaging between users, AR-powered virtual try-on, enhanced search and discovery, brand partnerships for sponsored outfit components, and expanded AI capabilities including multi-model support and seasonal style recommendations.',
  },
];
