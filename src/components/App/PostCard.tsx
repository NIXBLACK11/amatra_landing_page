"use client"

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useTheme } from '@/context/ThemeContext';
import { PiHeart, PiHeartFill, PiChatCircle, PiBookmark, PiBookmarkFill, PiShare, PiCopySimple } from 'react-icons/pi';

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
  onCopy?: () => void;
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
  onBookmark,
  onCopy
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

  const handleCopy = () => {
    if (onCopy) onCopy();
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
          {isBookmarked ? (
            <PiBookmarkFill 
              className="w-6 h-6" 
              style={{ color: colors.brand }}
            />
          ) : (
            <PiBookmark 
              className="w-6 h-6" 
              style={{ color: colors.text }}
            />
          )}
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
          <div className="flex items-center space-x-4">
            {/* Like Button */}
            <motion.button
              onClick={handleLike}
              className="flex items-center space-x-2"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              transition={{ duration: 0.2 }}
            >
              {isLiked ? (
                <PiHeartFill 
                  className="w-6 h-6" 
                  style={{ color: '#e74c3c' }}
                />
              ) : (
                <PiHeart 
                  className="w-6 h-6" 
                  style={{ color: colors.text }}
                />
              )}
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
              <PiChatCircle 
                className="w-6 h-6" 
                style={{ color: colors.text }}
              />
              <span style={{ color: colors.text }}>
                {initialComments.toLocaleString()}
              </span>
            </motion.button>

            {/* Share Button (moved next to comment) */}
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              transition={{ duration: 0.2 }}
            >
              <PiShare 
                className="w-6 h-6" 
                style={{ color: colors.text }}
              />
            </motion.button>
          </div>

          {/* Copy Button (new right side action) */}
          <motion.button
            onClick={handleCopy}
            className="flex items-center gap-2 px-4 py-2 rounded-full font-bold text-xs"
            style={{ backgroundColor: colors.brand, color: '#000' }}
            whileHover={{ scale: 1.05, backgroundColor: colors.hoverBrand }}
            whileTap={{ scale: 0.95 }}
            transition={{ duration: 0.2 }}
          >
            <PiCopySimple className="w-4 h-4" />
            <span>COPY FIT</span>
          </motion.button>
        </div>
      </div>
    </motion.div>
  );
};

export default PostCard;
