"use client"

import React from 'react';
import { motion } from 'framer-motion';
import { useTheme } from '@/context/ThemeContext';
import { PiSun, PiMoon } from 'react-icons/pi';
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
    <section className="relative flex flex-col-reverse lg:flex-row w-full min-h-screen">
      {/* Fixed Theme Switch Button */}
      {/* <motion.button
        className="fixed bottom-6 left-6 z-50 p-3 rounded-full shadow-lg"
        style={{ backgroundColor: colors.brand }}
        onClick={toggleTheme}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
      >
        {colors.background === '#ffffff' ? (
          <PiMoon 
            className="w-6 h-6" 
            style={{ color: colors.text }}
          />
        ) : (
          <PiSun 
            className="w-6 h-6" 
            style={{ color: colors.text }}
          />
        )}
      </motion.button> */}
      {/* LEFT – sticky */}
      <div className="w-full lg:w-3/5 order-2 lg:order-1">
        <motion.div 
          className="sticky top-0 h-screen flex items-center justify-center"
          style={{ backgroundColor: colors.background }}
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="px-4">
            <motion.h1 
              className="text-7xl lg:text-[10rem] font-black mb-6 tracking-tight [text-shadow:_1px_0_0_currentColor,_-1px_0_0_currentColor,_0_1px_0_currentColor,_0_-1px_0_currentColor] font-montserrat"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              style={{ color: colors.text }}
            >
              IMAGINE YOU'R
              <br />
              STYLES
            </motion.h1>
            <motion.p 
              className="text-xl mb-8 font-geist-mono"
              style={{ color: colors.text }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              Amatra is a social app where you share outfits with links, mix & match with AI, and inspire others to copy your style.
            </motion.p>
            
            <motion.div 
              className="flex gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <motion.button
                className="w-40 h-16"
                onClick={() => window.open('https://apps.apple.com', '_blank')}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <img 
                  src="/download/appStore.png" 
                  alt="Download on App Store"
                  className="w-full h-full object-contain"
                />
              </motion.button>
              
              <motion.button
                className="w-40 h-16"
                onClick={() => window.open('https://play.google.com', '_blank')}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <img 
                  src="/download/googlePlay.png" 
                  alt="Get it on Google Play"
                  className="w-full h-full object-contain"
                />
              </motion.button>
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* RIGHT – scrollable content */}
      <div className="w-full lg:w-2/5 px-4 pt-20 space-y-6 scrollbar-hide order-1 lg:order-2">
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