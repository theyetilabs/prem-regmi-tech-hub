
import React, { useEffect, useRef } from "react";
// You can use a lightweight map (Mapbox-gl is recommended, but for demo, use a static map with SVG markers)
const locations = [
  { label: "Nepal", lat: 28.3949, lng: 84.1240 },
  { label: "USA", lat: 40.7128, lng: -74.0060 },
  { label: "Australia", lat: -33.8688, lng: 151.2093 }
];

const MAP_IMG = "https://upload.wikimedia.org/wikipedia/commons/8/83/Equirectangular_projection_SW.jpg";

const markerStyle = "absolute w-5 h-5 rounded-full border-2 border-black bg-white flex items-center justify-center shadow-lg";

const markerPositions = [
  { top: "58%", left: "64%" }, // Nepal approx
  { top: "34%", left: "30%" }, // USA approx
  { top: "69%", left: "88%" }, // Australia approx
];

const YetiLabsMap = () => (
  <div className="relative w-full max-w-2xl h-72 mx-auto mb-4 overflow-hidden rounded-lg border border-gray-200 bg-white shadow">
    <img src={MAP_IMG} alt="World Map" className="object-cover w-full h-full" draggable={false} />
    {locations.map((loc, idx) => (
      <div
        key={loc.label}
        style={{ top: markerPositions[idx].top, left: markerPositions[idx].left }}
        className={markerStyle}
      >
        <div className="bg-black w-2 h-2 rounded-full"></div>
        <span className="absolute left-6 top-1/2 -translate-y-1/2 text-xs font-mono bg-white px-2 py-1 border border-black rounded shadow">{loc.label}</span>
      </div>
    ))}
  </div>
);

export default YetiLabsMap;
