import { useTheme } from "@/context/ThemeContext";
import { motion } from "framer-motion";
import { PiArrowUpRight } from "react-icons/pi";

interface FeatureCardProps {
  title: string;
  description: string;
  image?: string;
  height: string;
  delay: number;
  span?: boolean;
  component?: React.ReactNode;
  backgroundColor?: string;
  link?: string;
}

export const FeatureCard: React.FC<FeatureCardProps> = ({ title, description, image, height, delay, span, component, backgroundColor, link }) => {
  const { colors } = useTheme();
  
  const textColor = backgroundColor ? "#000000" : colors.text;
  
  return (
    <motion.div
      className="relative overflow-hidden shadow-lg backdrop-blur-sm group"
      style={{
        height: height
      }}
      onClick={() => {
        if (link) {
          window.open(link, "_blank");
        }
      }}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: delay }}
    >
      {/* Hover Arrow */}
      {link && (
        <div
          className="absolute top-4 right-4 z-20 p-2"
        >
          <PiArrowUpRight 
            size={20} 
          style={{ color: textColor }}
        />
        </div>
      )}
      {backgroundColor ? (
        <div
          className="absolute inset-0"
          style={{ backgroundColor: backgroundColor }}
        />
      ) : (
        <div
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.6' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
          }}
        />
      )}
      <div className="px-6 py-6 h-full flex flex-col relative z-10">
        <div className="flex-1">
          {component ? (
            <div className="h-full flex items-center justify-center">
              {component}
            </div>
          ) : (
            <>
              <h3 
                className="text-xl font-black font-montserrat mb-4"
                style={{ color: textColor }}
              >
                {title}
              </h3>
              <p 
                className="text-base leading-relaxed font-dm-sans"
                style={{ color: textColor }}
              >
                {description}
              </p>
            </>
          )}
        </div>
        {image && !component && (
          <div className="w-full h-48 mt-4 rounded-lg overflow-hidden">
            <img 
              src={image} 
              alt={title}
              className="w-full h-full object-cover"
            />
          </div>
        )}
      </div>
    </motion.div>
  );
};