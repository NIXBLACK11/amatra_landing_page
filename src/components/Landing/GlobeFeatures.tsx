"use client";

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTheme } from '@/context/ThemeContext';
import { Globe } from '../ui/Globe';
import { GlobeMarker } from '../ui/3d-globe';

// Sample data connecting markers to Hero images
const globeData = [
  {
    id: 1,
    lat: 42.9831,
    lng: 47.5046,
    label: "Dagestan, Russia",
    image: "/user/places/russia/model.png",
    flag: "🇷🇺",
    text: "Discovering the mountain spirit. Where heritage meets contemporary fashion in the heart of the Caucasus.",
    title: "Highland Grace"
  },
  {
    id: 2,
    lat: 30.0668,
    lng: 79.0193,
    label: "Uttarakhand, India",
    image: "/user/places/indian/model.png",
    flag: "🇮🇳",
    text: "Serenity in the Himalayas. A vibrant blend of colors inspired by the valley of flowers.",
    title: "Himalayan Bloom"
  },
  {
    id: 3,
    lat: 56.4907,
    lng: -4.2026,
    label: "Scotland",
    image: "/user/places/scotland/model.png",
    flag: "🏴󠁧󠁢󠁳󠁣󠁴󠁿",
    text: "Warm tartan patterns meet misty highlands. Discover the bold spirit of Scotland.",
    title: "Celtic Classic"
  }
];

// Combine data for markers
const markers: GlobeMarker[] = globeData.map(item => ({
  lat: item.lat,
  lng: item.lng,
  label: item.label,
  src: item.image, // Added the 'src' property to match the GlobeMarker type
}));

const GlobeFeatures: React.FC = () => {
    const { colors } = useTheme();
    const [activeLocation, setActiveLocation] = useState(globeData[0]);

    return (
        <section 
            className="relative w-full bg-opacity-50"
            style={{ 
                height: "80vh",
                backgroundColor: colors.background 
            }}
        >
             {/* Header Section */}
            <div className="text-center px-4 h-[15%]">
                <motion.h1 
                className="text-2xl md:text-4xl font-black mb-4 font-montserrat"
                style={{ color: colors.text }}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                >
                Try Global Styles with a sinle click
                </motion.h1>
            </div>

            <div className="flex flex-col lg:flex-row w-full h-[85%] px-4 md:px-12 gap-6">
                
                {/* Left Card 60% */}
                <motion.div 
                    className="w-full lg:w-3/5 h-1/2 lg:h-full rounded-3xl overflow-hidden relative shadow-2xl backdrop-blur-sm"
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                >
                    {/* Noise Background */}
                    <div
                        className="absolute inset-0 opacity-20 pointer-events-none"
                        style={{
                            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.6' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
                        }}
                    />

                    <AnimatePresence mode='wait'>
                        <motion.div 
                            key={activeLocation.label}
                            className="absolute inset-0 flex flex-col md:flex-row"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 0.4 }}
                        >
                            {/* Image Section */}
                            <div className="w-full h-2/5 md:w-1/2 md:h-full relative">
                                <img 
                                    src={activeLocation.image} 
                                    alt={activeLocation.title} 
                                    className="w-full h-full object-cover"
                                />
                            </div>

                            {/* Text Content */}
                            <div className="w-full h-3/5 md:w-1/2 md:h-full p-6 md:p-8 flex flex-col justify-center gap-4 md:gap-6">
                                <div className="flex items-center gap-3">
                                    <span className="text-3xl md:text-4xl">{activeLocation.flag}</span>
                                    <h2 
                                        className="text-2xl md:text-3xl font-bold font-montserrat"
                                        style={{ color: colors.text }}
                                    >
                                        {activeLocation.label}
                                    </h2>
                                </div>
                                
                                <div>
                                    <h3 
                                        className="text-lg md:text-xl font-semibold mb-2 font-montserrat"
                                        style={{ color: colors.brand }}
                                    >
                                        {activeLocation.title}
                                    </h3>
                                    <p 
                                        className="text-sm md:text-lg leading-relaxed font-dm-sans"
                                        style={{ color: colors.text }}
                                    >
                                        {activeLocation.text}
                                    </p>
                                </div>

                                <div className="mt-auto">
                                   <div className="flex -space-x-3">
                                        {[1,2,3].map((i) => (
                                            <div 
                                                key={i} 
                                                className="w-8 h-8 md:w-10 md:h-10 rounded-full border-2 border-white bg-gray-300"
                                                style={{ backgroundImage: `url(https://assets.aceternity.com/avatars/${i + 5}.webp)`, backgroundSize: 'cover' }}
                                            ></div>
                                        ))}
                                   </div>
                                   <p className="text-xs md:text-sm mt-2 opacity-70" style={{ color: colors.text }}>
                                       +128 others styling this
                                   </p>
                                </div>
                            </div>
                        </motion.div>
                    </AnimatePresence>
                </motion.div>

                {/* Right Globe 40% - We need to modify Globe to accept onHover properly or handle it here */}
                <div className="w-full lg:w-2/5 h-1/2 lg:h-full relative overflow-hidden">
                    <Globe
                        className="h-full"
                        markers={markers} 
                        onMarkerHover={(marker) => {
                            if (marker) {
                                const location = globeData.find(d => d.label === marker.label);
                                if (location) {
                                    setActiveLocation(location);
                                }
                            }
                        }}
                    />
                </div>
            </div>
        </section>
    );
}

export default GlobeFeatures;
