
import React from "react";

const locations = [
  { label: "Nepal", lat: 28.3949, lng: 84.1240 },
  { label: "USA", lat: 40.7128, lng: -74.0060 },
  { label: "Australia", lat: -33.8688, lng: 151.2093 }
];

const MAP_IMG = "https://upload.wikimedia.org/wikipedia/commons/8/83/Equirectangular_projection_SW.jpg";

// Improved marker style!
const markerStyle = "absolute flex flex-col items-center";
const glowDot = "w-5 h-5 rounded-full border-2 border-white bg-yeti-blue shadow-[0_0_20px_0_rgba(66,99,235,0.7)] animate-glow";
const labelStyle = "mt-2 text-xs font-mono font-bold tracking-wide bg-white/80 px-2 py-0.5 rounded shadow border border-black text-black animate-fade-in";

const markerPositions = [
  { top: "58%", left: "64%" }, // Nepal
  { top: "34%", left: "30%" }, // USA
  { top: "69%", left: "88%" }, // Australia
];

const YetiLabsMap = () => (
  <div className="relative w-full max-w-2xl h-72 mx-auto mb-4 overflow-hidden rounded-xl border border-gray-200 bg-white shadow-lg animate-fade-in">
    <img src={MAP_IMG} alt="World Map" className="object-cover w-full h-full" draggable={false} />
    {locations.map((loc, idx) => (
      <div
        key={loc.label}
        style={{ top: markerPositions[idx].top, left: markerPositions[idx].left }}
        className={markerStyle}
      >
        <div className={glowDot}></div>
        <span className={labelStyle}>{loc.label}</span>
      </div>
    ))}
  </div>
);

export default YetiLabsMap;
