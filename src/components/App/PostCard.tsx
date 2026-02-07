"use client"

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useTheme } from '@/context/ThemeContext';

interface PostCardProps {
  username: string;
  userImage: string;
  followers: number;
  postImage: string;
  description: string;
  initialLikes: number;
  initialComments: number;
  onLike?: (liked: boolean, likeCount: number) => void;
  onComment?: () => void;
  onBookmark?: (bookmarked: boolean) => void;
}

const PostCard: React.FC<PostCardProps> = ({
  username,
  userImage,
  followers,
  postImage,
  description,
  initialLikes,
  initialComments,
  onLike,
  onComment,
  onBookmark
}) => {
  const { colors, theme } = useTheme();
  const [isLiked, setIsLiked] = useState(false);
  const [likeCount, setLikeCount] = useState(initialLikes);
  const [isBookmarked, setIsBookmarked] = useState(false);

  const handleLike = () => {
    const newLikedState = !isLiked;
    const newLikeCount = newLikedState ? likeCount + 1 : likeCount - 1;
    
    setIsLiked(newLikedState);
    setLikeCount(newLikeCount);
    
    if (onLike) {
      onLike(newLikedState, newLikeCount);
    }
  };

  const handleComment = () => {
    if (onComment) {
      onComment();
    }
  };

  const handleBookmark = () => {
    const newBookmarkedState = !isBookmarked;
    setIsBookmarked(newBookmarkedState);
    
    if (onBookmark) {
      onBookmark(newBookmarkedState);
    }
  };

  return (
    <motion.div 
      className="rounded-2xl shadow-lg overflow-hidden"
      style={{ backgroundColor: colors.background }}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      whileHover={{ y: -2, boxShadow: "0 20px 40px rgba(0,0,0,0.1)" }}
    >
      {/* User Header */}
      <div className="p-4 flex items-center justify-between">
        <div className="flex items-center space-x-3">
          <motion.img 
            src={userImage} 
            alt={username}
            className="w-12 h-12 rounded-full object-cover"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.2 }}
          />
          <div>
            <motion.h3 
              className="font-semibold"
              style={{ color: colors.text }}
              whileHover={{ color: theme === 'light' ? '#3d3b3b' : '#c4c4c0' }}
              transition={{ duration: 0.2 }}
            >
              {username}
            </motion.h3>
            <p 
              className="text-sm"
              style={{ color: colors.text }}
            >
              {followers.toLocaleString()} followers
            </p>
          </div>
        </div>
        
        <motion.button
          onClick={handleBookmark}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          transition={{ duration: 0.2 }}
        >
          <svg 
            className="w-6 h-6" 
            fill={isBookmarked ? "currentColor" : "none"} 
            stroke="currentColor" 
            viewBox="0 0 24 24"
            style={{ color: isBookmarked ? colors.brand : colors.text }}
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z" />
          </svg>
        </motion.button>
      </div>

      {/* Post Image */}
      <div className="relative">
        <img 
          src={postImage} 
          alt="Post" 
          className="w-full object-contain"
          style={{ maxHeight: '600px' }}
        />
      </div>

      {/* Description */}
      <div className="p-4">
        <p 
          className="mb-4 leading-relaxed"
          style={{ color: colors.text }}
        >
          {description}
        </p>

        {/* Action Buttons */}
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-6">
            {/* Like Button */}
            <motion.button
              onClick={handleLike}
              className="flex items-center space-x-2"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              transition={{ duration: 0.2 }}
            >
              <svg 
                className="w-6 h-6" 
                fill={isLiked ? "currentColor" : "none"} 
                stroke="currentColor" 
                viewBox="0 0 24 24"
                style={{ color: isLiked ? '#e74c3c' : colors.text }}
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
              </svg>
              <motion.span 
                style={{ color: colors.text }}
                key={likeCount}
                initial={{ scale: 1.2 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.2 }}
              >
                {likeCount.toLocaleString()}
              </motion.span>
            </motion.button>

            {/* Comment Button */}
            <motion.button
              onClick={handleComment}
              className="flex items-center space-x-2"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              transition={{ duration: 0.2 }}
            >
              <svg 
                className="w-6 h-6" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
                style={{ color: colors.text }}
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
              </svg>
              <span style={{ color: colors.text }}>
                {initialComments.toLocaleString()}
              </span>
            </motion.button>
          </div>

          {/* Share Button */}
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            transition={{ duration: 0.2 }}
          >
            <svg 
              className="w-6 h-6" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
              style={{ color: colors.text }}
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m9.032 4.026a9.001 9.001 0 01-7.432 0m9.032-4.026A9.001 9.001 0 0112 3c-4.474 0-8.268 3.12-9.032 7.326m0 0A9.001 9.001 0 0012 21c4.474 0 8.268-3.12 9.032-7.326" />
            </svg>
          </motion.button>
        </div>
      </div>
    </motion.div>
  );
};

export default PostCard;
