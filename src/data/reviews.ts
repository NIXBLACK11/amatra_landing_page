export interface Review {
  name: string;
  handle: string;
  rating: number;
  review: string;
  date: string;
  platform: 'App Store' | 'Google Play';
}

export const reviews: Review[] = [
  {
    name: 'Sarah M.',
    handle: '@sarah_fits',
    rating: 5,
    review: 'Finally an app that lets me see how my actual clothes look together before I get dressed. The AI outfit images are incredibly realistic. My wardrobe has never been so organised.',
    date: 'March 2025',
    platform: 'App Store',
  },
  {
    name: 'James K.',
    handle: '@jk_style',
    rating: 5,
    review: 'The copy outfit feature is genius. I found a look I loved in someone\'s post, copied it in one tap, and swapped the shoes for ones I already own. Done. This is how fashion apps should work.',
    date: 'February 2025',
    platform: 'App Store',
  },
  {
    name: 'Priya R.',
    handle: '@priya.wears',
    rating: 5,
    review: 'I\'ve tried every fashion app. Amatra is the only one that actually helps me use what I already own instead of just pushing me to buy more. The wardrobe gallery feature is so satisfying to fill up.',
    date: 'April 2025',
    platform: 'Google Play',
  },
  {
    name: 'Marcus T.',
    handle: '@marcus.threads',
    rating: 5,
    review: 'The community here is different — people genuinely care about style, not just aesthetics. Every post feels intentional. And knowing I can shop any piece directly from a post is a huge plus.',
    date: 'January 2025',
    platform: 'App Store',
  },
  {
    name: 'Lena H.',
    handle: '@lena.minimal',
    rating: 5,
    review: 'As someone with a capsule wardrobe, this app completely changed how I see my clothes. The AI puts together combinations I\'d never have thought of. Premium is absolutely worth it for unlimited creations.',
    date: 'March 2025',
    platform: 'App Store',
  },
  {
    name: 'Daniel W.',
    handle: '@daniw.fits',
    rating: 5,
    review: 'Beautiful, clean design. The app feels premium even on the free plan. The outfit composer is fast and the results look genuinely realistic. Downloaded it after seeing a friend\'s post and haven\'t looked back.',
    date: 'April 2025',
    platform: 'Google Play',
  },
];
