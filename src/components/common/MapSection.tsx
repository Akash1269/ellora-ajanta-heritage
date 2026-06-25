

import React, { useEffect, useRef } from 'react';
import L from 'leaflet';
import type { MapLocation } from '../../types';
import { MAP_CENTER, MAP_ZOOM } from '../../constants';

interface MapSectionProps {
  locations: MapLocation[];
}

function createPopupContent(loc: MapLocation): HTMLDivElement {
  const container = document.createElement('div');
  container.style.fontFamily = "'Lora', serif";
  container.style.width = '200px';

  if (loc.imageUrl) {
    const imgWrapper = document.createElement('div');
    imgWrapper.style.cssText = 'width: 100%; height: 120px; overflow: hidden; border-radius: 4px; margin-bottom: 8px;';
    const img = document.createElement('img');
    img.src = loc.imageUrl;
    img.alt = loc.name;
    img.style.cssText = 'width: 100%; height: 100%; object-fit: cover;';
    imgWrapper.appendChild(img);
    container.appendChild(imgWrapper);
  }

  const title = document.createElement('h3');
  title.textContent = loc.name;
  title.style.cssText = "color: #b45309; font-size: 16px; margin: 0 0 4px 0; font-family: 'Rozha One', serif;";
  container.appendChild(title);

  if (loc.timings) {
    const timingsP = document.createElement('p');
    timingsP.style.cssText = 'margin: 0 0 8px 0; font-size: 12px; color: #57534e;';
    const bold = document.createElement('span');
    bold.style.fontWeight = 'bold';
    bold.textContent = 'Open: ';
    timingsP.appendChild(bold);
    timingsP.appendChild(document.createTextNode(loc.timings));
    container.appendChild(timingsP);
  }

  const link = document.createElement('a');
  link.href = `https://www.google.com/maps/dir/?api=1&destination=${loc.lat},${loc.lng}`;
  link.target = '_blank';
  link.rel = 'noopener noreferrer';
  link.textContent = 'Get Directions';
  link.style.cssText = 'display: block; text-align: center; background-color: #b45309; color: white; padding: 6px 12px; text-decoration: none; border-radius: 2px; font-size: 12px; font-weight: bold; text-transform: uppercase; letter-spacing: 0.5px;';
  container.appendChild(link);

  return container;
}

export const MapSection: React.FC<MapSectionProps> = ({ locations }) => {
  const mapRef = useRef<HTMLDivElement>(null);
  const leafletMap = useRef<L.Map | null>(null);
  const markersRef = useRef<L.Marker[]>([]);

  useEffect(() => {
    if (!mapRef.current) return;

    // Initialize map if not already created
    if (!leafletMap.current) {
      const map = L.map(mapRef.current).setView(MAP_CENTER, MAP_ZOOM);
      leafletMap.current = map;

      L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      }).addTo(map);
    }

    const map = leafletMap.current;

    // Clear existing markers before adding new ones
    markersRef.current.forEach((marker) => marker.remove());
    markersRef.current = [];

    const defaultIcon = L.icon({
      iconUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png',
      iconRetinaUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png',
      shadowUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png',
      iconSize: [25, 41],
      iconAnchor: [12, 41],
      popupAnchor: [1, -34],
      shadowSize: [41, 41]
    });

    // Add markers using DOM-based popups (XSS-safe)
    locations.forEach((loc) => {
      const marker = L.marker([loc.lat, loc.lng], { icon: defaultIcon }).addTo(map);
      marker.bindPopup(createPopupContent(loc));
      markersRef.current.push(marker);
    });

    return () => {
      // Clean up markers on unmount or location change
      markersRef.current.forEach((marker) => marker.remove());
      markersRef.current = [];
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