"use client"

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useTheme } from '@/context/ThemeContext';
import {
  PiHeart, PiHeartFill,
  PiChatCircle,
  PiPaperPlaneTilt,
  PiBookmark, PiBookmarkFill,
  PiDotsThree,
  PiAperture,
} from 'react-icons/pi';
import type { OutfitComponent, PostCardProps } from '@/types/post';

export type { OutfitComponent, PostCardProps };

const PostCard: React.FC<PostCardProps> = ({
  username,
  outfitName,
  userImage,
  postImage,
  caption,
  initialLikes,
  initialComments,
  timeAgo,
  components = [],
  isCurrentUser = false,
}) => {
  const { colors, theme } = useTheme();
  const isLight = theme === 'light';
  const [isLiked, setIsLiked] = useState(false);
  const [likeCount, setLikeCount] = useState(initialLikes);
  const [isBookmarked, setIsBookmarked] = useState(false);
  const [captionExpanded, setCaptionExpanded] = useState(false);

  const handleLike = () => {
    setLikeCount(c => isLiked ? c - 1 : c + 1);
    setIsLiked(v => !v);
  };

  const separatorColor = isLight ? 'rgba(0,0,0,0.09)' : 'rgba(255,255,255,0.09)';
  const subTextColor = '#a3a3a3';
  const captionLong = caption.length > 90;

  return (
    <div style={{ backgroundColor: colors.background, borderTop: `1px solid ${separatorColor}` }}>
      {/* Header */}
      <div className="flex items-center justify-between px-3 py-2.5">
        <div className="flex items-center gap-2.5 min-w-0 flex-1">
          {/* Avatar with ring border — matches FeedItem avatarRing style */}
          <div
            className="flex-shrink-0 rounded-full flex items-center justify-center"
            style={{
              width: 38, height: 38,
              border: `1.5px solid ${colors.text}`,
              padding: 2,
            }}
          >
            <img
              src={userImage}
              alt={username}
              className="rounded-full object-cover w-full h-full"
            />
          </div>
          <div className="min-w-0">
            <p
              className="text-sm font-bold leading-tight truncate"
              style={{ color: colors.text, letterSpacing: '0.03em' }}
            >
              {username}
            </p>
            <p className="text-[11px] leading-tight truncate" style={{ color: subTextColor }}>
              {outfitName}
            </p>
          </div>
        </div>

        <div className="flex items-center gap-1.5 ml-2 flex-shrink-0">
          {!isCurrentUser && (
            <button
              className="flex items-center gap-1.5 rounded-lg text-xs font-bold"
              style={{
                backgroundColor: colors.text,
                color: colors.background,
                padding: '6px 11px',
                letterSpacing: '0.05em',
              }}
            >
              <PiAperture size={13} />
              Copy Outfit
            </button>
          )}
          <button className="p-1">
            <PiDotsThree size={22} style={{ color: colors.text, opacity: 0.4 }} />
          </button>
        </div>
      </div>

      {/* Image — 3:4 portrait ratio, matching app's SCREEN_WIDTH × 4/3 height */}
      <div style={{ aspectRatio: '3/4', width: '100%', overflow: 'hidden' }}>
        <img
          src={postImage}
          alt={`${username}'s outfit`}
          style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
        />
      </div>

      {/* Component Strip — ViewProductsStrip equivalent */}
      {components.length > 0 && (
        <div
          className="flex items-center gap-3 px-3 py-2.5 overflow-x-auto scrollbar-hide"
          style={{ borderBottom: `1px solid ${separatorColor}` }}
        >
          {components.map((comp, i) => (
            <div key={i} className="flex items-center gap-1.5 flex-shrink-0">
              <div
                className="rounded-full overflow-hidden flex-shrink-0"
                style={{
                  width: 26, height: 26,
                  border: `1px solid ${separatorColor}`,
                  backgroundColor: `${colors.text}08`,
                }}
              >
                <img
                  src={comp.imageUrl}
                  alt={comp.category}
                  className="w-full h-full object-cover"
                />
              </div>
              <span className="text-[11px] truncate max-w-[60px]" style={{ color: subTextColor }}>
                {comp.productName}
              </span>
            </div>
          ))}
          <span className="text-xs flex-shrink-0" style={{ color: subTextColor, opacity: 0.4 }}>›</span>
        </div>
      )}

      {/* Actions */}
      <div className="flex items-center justify-between px-2.5 pt-2.5 pb-1">
        <div className="flex items-center gap-4">
          <button onClick={handleLike}>
            <motion.div
              whileTap={{ scale: 1.4 }}
              transition={{ type: 'spring', stiffness: 500, damping: 10 }}
            >
              {isLiked
                ? <PiHeartFill size={27} style={{ color: '#e74c3c' }} />
                : <PiHeart size={27} style={{ color: colors.text, opacity: 0.75 }} />
              }
            </motion.div>
          </button>
          <button>
            <PiChatCircle size={26} style={{ color: colors.text, opacity: 0.75 }} />
          </button>
          <button>
            <PiPaperPlaneTilt size={25} style={{ color: colors.text, opacity: 0.75 }} />
          </button>
        </div>
        <button onClick={() => setIsBookmarked(v => !v)}>
          <motion.div
            whileTap={{ scale: 1.35 }}
            transition={{ type: 'spring', stiffness: 500, damping: 10 }}
          >
            {isBookmarked
              ? <PiBookmarkFill size={26} style={{ color: colors.text }} />
              : <PiBookmark size={26} style={{ color: colors.text, opacity: 0.75 }} />
            }
          </motion.div>
        </button>
      </div>

      {/* Stats */}
      {(likeCount > 0 || initialComments > 0) && (
        <div className="flex items-center gap-1.5 px-3 pt-2 pb-0.5">
          {likeCount > 0 && (
            <span className="text-[13.5px]" style={{ color: colors.text }}>
              <span className="font-bold">{likeCount.toLocaleString()}</span>
              {' '}{likeCount === 1 ? 'like' : 'likes'}
            </span>
          )}
          {likeCount > 0 && initialComments > 0 && (
            <span className="text-[13.5px] font-bold" style={{ color: subTextColor }}>·</span>
          )}
          {initialComments > 0 && (
            <span className="text-[13.5px]" style={{ color: subTextColor }}>
              {initialComments.toLocaleString()} {initialComments === 1 ? 'comment' : 'comments'}
            </span>
          )}
        </div>
      )}

      {/* Caption */}
      <div className="px-3 pt-1.5 pb-0.5">
        <p className="text-[13.5px] leading-snug" style={{ color: colors.text }}>
          <span className="font-bold">{username}</span>
          {'  '}
          {captionLong && !captionExpanded ? caption.slice(0, 90) : caption}
          {captionLong && !captionExpanded && '…'}
        </p>
        {captionLong && !captionExpanded && (
          <button
            onClick={() => setCaptionExpanded(true)}
            className="text-[13px] mt-0.5 block"
            style={{ color: subTextColor }}
          >
            more
          </button>
        )}
      </div>

      {/* Timestamp */}
      <p
        className="px-3 pb-5 pt-1.5"
        style={{
          color: subTextColor,
          fontSize: '10px',
          letterSpacing: '0.06em',
          textTransform: 'uppercase',
        }}
      >
        {timeAgo}
      </p>
    </div>
  );
};

export default PostCard;
