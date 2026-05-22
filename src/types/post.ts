export interface OutfitComponent {
  imageUrl: string;
  productName: string;
  category: string;
}

export interface PostCardProps {
  username: string;
  outfitName: string;
  userImage: string;
  postImage: string;
  caption: string;
  initialLikes: number;
  initialComments: number;
  timeAgo: string;
  components?: OutfitComponent[];
  isCurrentUser?: boolean;
}
