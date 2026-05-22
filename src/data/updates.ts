export interface UpdateItem {
  date: string;
  title: string;
  description: string;
  status: 'launched' | 'coming-soon';
  version?: string;
}

export const updates: UpdateItem[] = [
  {
    date: '2024-03-30',
    title: 'Fashion Feed + Virtual Try On',
    description: 'Discover endless inspiration from fashion creators worldwide. Share your looks and build your style community with AR-powered virtual try-on technology.',
    status: 'coming-soon',
    version: 'v1.1',
  },
  {
    date: '2024-04-15',
    title: 'Better Feed',
    description: 'Enhanced social fashion feed with improved algorithms, better content discovery, and seamless integration with your personal style preferences.',
    status: 'coming-soon',
    version: 'v1.2',
  },
  {
    date: '2024-04-30',
    title: 'Messaging',
    description: 'Connect with fashion creators and friends through our integrated messaging system. Share style tips, collaborate on looks, and build your fashion network.',
    status: 'coming-soon',
    version: 'v1.3',
  },
];
