"use client"

import React from 'react';
import { motion } from 'framer-motion';
import { useTheme } from '@/context/ThemeContext';
import PostCard from '@/components/App/PostCard';

const Hero: React.FC = () => {
  const { colors } = useTheme();
  
  // Mock data for posts
  const posts = [
    {
      id: 1,
      username: "fashionista_sarah",
      userImage: "/user/head/head1.png",
      followers: 15420,
      postImage: "/user/post/post1.png",
      description: "Just discovered this amazing combination! The perfect blend of casual and chic. What do you guys think? 🤔✨",
      initialLikes: 342,
      initialComments: 28
    },
    {
      id: 2,
      username: "style_guru_mike",
      userImage: "/user/shirt/shirt1.png",
      followers: 8930,
      postImage: "/user/post/post2.png",
      description: "Monday mood: Business casual with a twist! This outfit really speaks to my professional side while keeping it fresh.",
      initialLikes: 189,
      initialComments: 15
    },
    {
      id: 3,
      username: "trendsetter_alex",
      userImage: "/user/jeans/jeans1.png",
      followers: 22100,
      postImage: "/user/post/post3.png",
      description: "Weekend vibes achieved! 🌟 This comfortable yet stylish look is perfect for brunch dates or casual strolls.",
      initialLikes: 567,
      initialComments: 42
    },
    {
      id: 4,
      username: "minimalist_jane",
      userImage: "/user/overlayer/overlayer1.png",
      followers: 12800,
      postImage: "/user/post/post4.png",
      description: "Less is more. Sometimes the simplest outfits make the biggest statements. What's your go-to minimal look?",
      initialLikes: 423,
      initialComments: 31
    }
  ];

  const handleLike = (liked: boolean, likeCount: number) => {
    console.log(`Post ${liked ? 'liked' : 'unliked'}, total likes: ${likeCount}`);
  };

  const handleComment = () => {
    console.log('Comment button clicked');
  };

  const handleBookmark = (bookmarked: boolean) => {
    console.log(`Post ${bookmarked ? 'bookmarked' : 'unbookmarked'}`);
  };

  const { toggleTheme } = useTheme();

  return (
    <section className="relative flex flex-col-reverse md:flex-row w-full min-h-screen">
      {/* Fixed Theme Switch Button */}
      <motion.button
        className="fixed bottom-6 left-6 z-50 p-3 rounded-full shadow-lg"
        style={{ backgroundColor: colors.brand }}
        onClick={toggleTheme}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
      >
        <svg 
          className="w-6 h-6" 
          fill="currentColor" 
          viewBox="0 0 24 24"
          style={{ color: colors.text }}
        >
          {colors.background === '#ffffff' ? (
            // Moon icon for dark mode
            <path d="M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 009.002-5.998z" />
          ) : (
            // Sun icon for light mode
            <path d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
          )}
        </svg>
      </motion.button>
      {/* LEFT – sticky */}
      <div className="w-full bg-red-800 md:w-3/5 order-2 md:order-1">
        <motion.div 
          className="sticky top-0 h-screen flex items-center justify-center"
          style={{ backgroundColor: colors.background }}
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="px-4">
            <motion.h1 
              className="text-7xl md:text-8xl font-black mb-6 tracking-tight rounded-2xl px-6 py-4"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              style={{ color: colors.text, backgroundColor: colors.brand }}
            >
              IMAGINE YOUR
              <br />
              STYLES
            </motion.h1>
            <motion.p 
              className="text-xl mb-8"
              style={{ color: colors.text }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              Amatra is a social app where you share outfits with links, mix & match with AI, and inspire others to copy your style.
            </motion.p>
            <motion.div 
              className="flex flex-col sm:flex-row gap-4" 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <motion.button 
                className="px-8 py-4 rounded-lg font-medium text-black text-lg"
                style={{ backgroundColor: colors.brand }}
                onClick={() => window.open('https://x.com/_AMATRA_', '_blank')}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Join Community
              </motion.button>
            </motion.div>
            <motion.div 
              className="mt-8"
              style={{ color: colors.text }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.8 }}
            >
              <p>🚀 Launching Soon for Android and iOS</p>
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* RIGHT – scrollable content */}
      <div className="w-full md:w-2/5 px-4 pt-20 space-y-6 scrollbar-hide order-1 md:order-2">
        {posts.map((post, index) => (
          <motion.div
            key={post.id}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 * index }}
          >
            <PostCard
              username={post.username}
              userImage={post.userImage}
              followers={post.followers}
              postImage={post.postImage}
              description={post.description}
              initialLikes={post.initialLikes}
              initialComments={post.initialComments}
              onLike={handleLike}
              onComment={handleComment}
              onBookmark={handleBookmark}
            />
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Hero;