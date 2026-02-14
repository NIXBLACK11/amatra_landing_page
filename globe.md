Props
Globe3D
Prop	Type	Default	Description
markers	GlobeMarker[]	[]	Array of markers to display on the globe
config	Globe3DConfig	{}	Globe configuration options
className	string	-	Additional CSS classes
onMarkerClick	(marker: GlobeMarker) => void	-	Callback when a marker is clicked
onMarkerHover	(marker: GlobeMarker | null) => void	-	Callback when a marker is hovered
GlobeMarker
Prop	Type	Default	Description
lat	number	-	Latitude coordinate
lng	number	-	Longitude coordinate
src	string	-	Image source URL for the marker
label	string	-	Optional label for the marker
size	number	-	Optional custom size for the marker
Globe3DConfig
Prop	Type	Default	Description
radius	number	-	Globe radius
globeColor	string	-	Globe base color (used as fallback or tint)
textureUrl	string	-	URL to the Earth texture map
bumpMapUrl	string	-	URL to the bump/elevation map for terrain
showAtmosphere	boolean	-	Whether to show atmosphere glow
atmosphereColor	string	-	Atmosphere color
atmosphereIntensity	number	-	Atmosphere intensity
atmosphereBlur	number	-	Atmosphere blur/softness (higher = more diffuse)
bumpScale	number	-	Terrain bump scale (0 = flat, higher = more pronounced)
autoRotateSpeed	number	-	Auto rotate speed (0 = disabled)
enableZoom	boolean	-	Enable zoom
enablePan	boolean	-	Enable pan
minDistance	number	-	Min zoom distance
maxDistance	number	-	Max zoom distance
initialRotation	{ x: number; y: number }	-	Initial rotation
markerSize	number	-	Marker default size
showWireframe	boolean	-	Show wireframe overlay
wireframeColor	string	-	Wireframe color
ambientIntensity	number	-	Ambient light intensity
pointLightIntensity	number	-	Point light intensity
backgroundColor	string | null	-	Background color (null for transparent)