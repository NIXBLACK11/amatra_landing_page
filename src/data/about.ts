export interface Step {
  number: string;
  title: string;
  description: string;
}

export interface Value {
  title: string;
  description: string;
}

export const steps: Step[] = [
  {
    number: '01',
    title: 'Build Your Wardrobe',
    description: 'Upload photos of your clothing items — tops, bottoms, outerwear, headwear, footwear. Amatra organises everything into a clean digital wardrobe that lives in your pocket.',
  },
  {
    number: '02',
    title: 'Compose an Outfit',
    description: 'Select pieces from your wardrobe and let our AI compose a realistic full-body outfit image. Mix and match until the look feels right — no fitting room needed.',
  },
  {
    number: '03',
    title: 'Share & Inspire',
    description: 'Post your look to the Amatra community. Every piece in your outfit links to the real product. Followers can discover your style and copy the whole outfit with one tap.',
  },
];

export const values: Value[] = [
  {
    title: 'Fashion is personal.',
    description: 'Amatra doesn\'t tell you what to wear. We give you the tools to figure it out yourself — and the community to share it with.',
  },
  {
    title: 'AI for creativity, not replacement.',
    description: 'We use AI to visualise your ideas, not to generate generic looks. Your wardrobe, your choices, your style — AI just renders the vision.',
  },
  {
    title: 'Built for real wardrobes.',
    description: 'Not every wardrobe is a luxury closet. Amatra works with what you own — and helps you see it in a whole new way.',
  },
];
