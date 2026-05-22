import type { PostCardProps } from '@/types/post';

export const heroPosts: PostCardProps[] = [
  {
    username: 'alex_fits',
    outfitName: 'Sunday Casual',
    userImage: '/user/head/head1.png',
    postImage: '/user/post/post1.png',
    caption: 'Perfect Sunday look — kept it light and breezy. The linen shirt is everything this season.',
    initialLikes: 342,
    initialComments: 28,
    timeAgo: '3h ago',
    components: [
      { imageUrl: '/user/shirt/shirt1.png', productName: 'Linen Shirt', category: 'Top' },
      { imageUrl: '/user/jeans/jeans1.png', productName: 'Slim Chinos', category: 'Bottoms' },
      { imageUrl: '/user/shoes/shoes1.png', productName: 'Clean Kicks', category: 'Footwear' },
    ],
  },
  {
    username: 'style_guru_mike',
    outfitName: 'Business Casual',
    userImage: '/user/shirt/shirt1.png',
    postImage: '/user/post/post2.png',
    caption: 'Monday energy. Keeping it clean and professional without sacrificing comfort. This combo is my go-to.',
    initialLikes: 189,
    initialComments: 15,
    timeAgo: '5h ago',
    components: [
      { imageUrl: '/user/overlayer/overlayer1.png', productName: 'Blazer', category: 'Outerwear' },
      { imageUrl: '/user/shirt/shirt1.png', productName: 'Oxford Shirt', category: 'Top' },
    ],
  },
  {
    username: 'trendsetter_alex',
    outfitName: 'Weekend Vibes',
    userImage: '/user/jeans/jeans1.png',
    postImage: '/user/post/post3.png',
    caption: 'Weekend ready 🌟 Comfortable but make it fashion. This combination never fails.',
    initialLikes: 567,
    initialComments: 42,
    timeAgo: '1d ago',
    components: [
      { imageUrl: '/user/jeans/jeans1.png', productName: 'Relaxed Jeans', category: 'Bottoms' },
      { imageUrl: '/user/shoes/shoes1.png', productName: 'White Sneakers', category: 'Footwear' },
    ],
  },
  {
    username: 'minimalist_jane',
    outfitName: 'Less is More',
    userImage: '/user/overlayer/overlayer1.png',
    postImage: '/user/post/post4.png',
    caption: 'Minimalism hits different when every piece is intentional. Quality over quantity — always.',
    initialLikes: 423,
    initialComments: 31,
    timeAgo: '2d ago',
    components: [
      { imageUrl: '/user/shirt/shirt1.png', productName: 'Essential Tee', category: 'Top' },
      { imageUrl: '/user/jeans/jeans1.png', productName: 'Straight Legs', category: 'Bottoms' },
      { imageUrl: '/user/shoes/shoes1.png', productName: 'Minimalist Shoe', category: 'Footwear' },
    ],
  },
];
