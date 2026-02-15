import { Globe3D, GlobeMarker } from "@/components/ui/3d-globe";
import { useTheme } from "@/context/ThemeContext";

interface GlobeProps {
    markers: GlobeMarker[];
    onMarkerHover?: (marker: GlobeMarker | null) => void;
    className?: string;
}

export function Globe({markers, onMarkerHover, className}: GlobeProps) {
    const { colors } = useTheme();

    return (
      <Globe3D
        className={className}
        markers={markers}
        config={{
          atmosphereColor: "#4da6ff",
          atmosphereIntensity: 20,
          bumpScale: 5,
          autoRotateSpeed: 0.3,
          markerHoverColor: colors.brand,
        }}
        onMarkerClick={(marker) => {
          console.log("Clicked marker:", marker.label);
        }}
        onMarkerHover={(marker) => {
          if (onMarkerHover) {
             onMarkerHover(marker);
          }
          if (marker) {
            console.log("Hovering:", marker.label);
          }
        }}
      />
    );
  }