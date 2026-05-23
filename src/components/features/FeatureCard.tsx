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

function getTextColorForBackground(bg: string): string {
  const hex = bg.replace('#', '');
  if (hex.length !== 6) return '#000000';
  const r = parseInt(hex.substring(0, 2), 16);
  const g = parseInt(hex.substring(2, 4), 16);
  const b = parseInt(hex.substring(4, 6), 16);
  const luminance = (0.299 * r + 0.587 * g + 0.114 * b) / 255;
  return luminance > 0.45 ? '#000000' : '#ffffff';
}

export const FeatureCard: React.FC<FeatureCardProps> = ({
  title,
  description,
  image,
  height,
  delay,
  span,
  component,
  backgroundColor,
  link,
}) => {
  const { colors } = useTheme();

  const textColor = backgroundColor
    ? getTextColorForBackground(backgroundColor)
    : colors.text;

  return (
    <motion.div
      className="relative overflow-hidden shadow-sm group cursor-default"
      style={{ height }}
      onClick={() => {
        if (link) window.location.href = link;
      }}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay }}
    >
      {/* Arrow link indicator */}
      {link && (
        <div className="absolute top-4 right-4 z-20 p-2">
          <PiArrowUpRight size={20} style={{ color: textColor, opacity: 0.7 }} />
        </div>
      )}

      {/* Background */}
      {backgroundColor ? (
        <div className="absolute inset-0" style={{ backgroundColor }} />
      ) : (
        <>
          <div
            className="absolute inset-0"
            style={{ backgroundColor: `${colors.text}06` }}
          />
          <div
            className="absolute inset-0 opacity-[0.15]"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.6' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
            }}
          />
        </>
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
                className="text-base leading-relaxed font-geist-mono"
                style={{ color: textColor, opacity: 0.75 }}
              >
                {description}
              </p>
            </>
          )}
        </div>

        {image && !component && (
          <div className="w-full flex-1 min-h-0 mt-4 overflow-hidden">
            <img
              src={image}
              alt={title}
              className="w-full h-full object-cover"
              style={{ transform: 'scale(1.22)', transformOrigin: 'center center' }}
            />
          </div>
        )}
      </div>
    </motion.div>
  );
};
