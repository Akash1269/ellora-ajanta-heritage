

import React, { useEffect, useRef } from 'react';
import L from 'leaflet';
import type { MapLocation } from '../../types';

interface MapSectionProps {
  locations: MapLocation[];
}

export const MapSection: React.FC<MapSectionProps> = ({ locations }) => {
  const mapRef = useRef<HTMLDivElement>(null);
  const leafletMap = useRef<L.Map | null>(null);

  useEffect(() => {
    if (mapRef.current && !leafletMap.current) {
        // Initialize map centered on Aurangabad
        const map = L.map(mapRef.current).setView([19.8762, 75.3433], 9);
        leafletMap.current = map;

        // Add OpenStreetMap tile layer
        L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
            attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        }).addTo(map);

        // Fix default marker icon issue in simple setups
        const defaultIcon = L.icon({
            iconUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png',
            iconRetinaUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png',
            shadowUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png',
            iconSize: [25, 41],
            iconAnchor: [12, 41],
            popupAnchor: [1, -34],
            shadowSize: [41, 41]
        });

        // Add Markers
        locations.forEach(loc => {
            const marker = L.marker([loc.lat, loc.lng], { icon: defaultIcon }).addTo(map);
            
            const popupContent = `
                <div style="font-family: 'Lora', serif; width: 200px;">
                    ${loc.imageUrl ? `
                        <div style="width: 100%; height: 120px; overflow: hidden; border-radius: 4px; margin-bottom: 8px;">
                            <img src="${loc.imageUrl}" alt="${loc.name}" style="width: 100%; height: 100%; object-fit: cover;" />
                        </div>
                    ` : ''}
                    <h3 style="color: #b45309; font-size: 16px; margin: 0 0 4px 0; font-family: 'Rozha One', serif;">${loc.name}</h3>
                    ${loc.timings ? `
                        <p style="margin: 0 0 8px 0; font-size: 12px; color: #57534e;">
                            <span style="font-weight: bold;">Open:</span> ${loc.timings}
                        </p>
                    ` : ''}
                    <a href="https://www.google.com/maps/dir/?api=1&destination=${loc.lat},${loc.lng}" 
                       target="_blank" 
                       rel="noopener noreferrer"
                       style="display: block; text-align: center; background-color: #b45309; color: white; padding: 6px 12px; text-decoration: none; border-radius: 2px; font-size: 12px; font-weight: bold; text-transform: uppercase; letter-spacing: 0.5px;">
                        Get Directions
                    </a>
                </div>
            `;
            
            marker.bindPopup(popupContent);
        });
    }

    return () => {
       // Cleanup logic if needed, but for this single page app keeping map instance is usually fine
       // or remove on unmount to prevent memory leaks if component toggles
       if (leafletMap.current) {
         leafletMap.current.remove();
         leafletMap.current = null;
       }
    };
  }, [locations]);

  return (
    <section className="py-20 bg-[#fffaf0] border-t-2 border-stone-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
                <span className="text-amber-600 uppercase tracking-widest text-xs font-bold">Orientation</span>
                <h2 className="text-3xl sm:text-4xl font-heading text-stone-900 mt-2">Map of Wonders</h2>
                <div className="w-16 h-px bg-amber-500 mx-auto mt-4"></div>
            </div>
            
            <div className="relative p-2 bg-white border-2 border-stone-300 shadow-xl rounded-sm">
                {/* Map Container with Sepia filter for heritage look */}
                <div 
                    ref={mapRef} 
                    className="w-full h-[500px] z-0" 
                    style={{ filter: 'sepia(30%) contrast(105%)' }}
                ></div>
                
                {/* Decorative corners */}
                <div className="absolute top-0 left-0 w-8 h-8 border-t-4 border-l-4 border-amber-800 -mt-1 -ml-1"></div>
                <div className="absolute top-0 right-0 w-8 h-8 border-t-4 border-r-4 border-amber-800 -mt-1 -mr-1"></div>
                <div className="absolute bottom-0 left-0 w-8 h-8 border-b-4 border-l-4 border-amber-800 -mb-1 -ml-1"></div>
                <div className="absolute bottom-0 right-0 w-8 h-8 border-b-4 border-r-4 border-amber-800 -mb-1 -mr-1"></div>
            </div>
        </div>
    </section>
  );
};