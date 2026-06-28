

import React, { useEffect, useRef, useState } from 'react';
import type L from 'leaflet';
import type { MapLocation } from '../../types';
import { MAP_CENTER, MAP_ZOOM } from '../../constants';

interface MapSectionProps {
  locations: MapLocation[];
}

function createPopupContent(loc: MapLocation): HTMLDivElement {
  const container = document.createElement('div');
  container.style.fontFamily = "'Spectral', serif";
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
  title.style.cssText = "color: #b8860b; font-size: 16px; margin: 0 0 4px 0; font-family: 'Cormorant Garamond', serif; font-weight: 600;";
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
  link.style.cssText = 'display: block; text-align: center; background-color: #8B4513; color: white; padding: 6px 12px; text-decoration: none; border-radius: 9999px; font-size: 12px; font-weight: 500; letter-spacing: 0.5px;';
  container.appendChild(link);

  return container;
}

export const MapSection: React.FC<MapSectionProps> = ({ locations }) => {
  const mapRef = useRef<HTMLDivElement>(null);
  const leafletMap = useRef<L.Map | null>(null);
  const markersRef = useRef<L.Marker[]>([]);
  const [isVisible, setIsVisible] = useState(false);

  // Intersection Observer: only load Leaflet when map container is in viewport
  useEffect(() => {
    if (!mapRef.current) return;
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setIsVisible(true); observer.disconnect(); } },
      { rootMargin: '200px' }
    );
    observer.observe(mapRef.current);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isVisible || !mapRef.current) return;

    let cancelled = false;

    import('leaflet').then((leaflet) => {
      if (cancelled || !mapRef.current) return;
      const L = leaflet.default;

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

      const defaultIcon = L.divIcon({
        className: 'custom-heritage-marker',
        html: `<svg width="28" height="36" viewBox="0 0 40 52" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M20 0C9 0 0 9 0 20c0 15 20 32 20 32s20-17 20-32C40 9 31 0 20 0z" fill="#8B4513"/>
          <path d="M20 2C10.1 2 2 10.1 2 20c0 13.5 18 28.5 18 28.5S38 33.5 38 20C38 10.1 29.9 2 20 2z" fill="#CD853F"/>
          <polyline points="12,22 20,12 28,22" fill="none" stroke="#FFF8DC" stroke-width="3.5" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>`,
        iconSize: [28, 36],
        iconAnchor: [14, 36],
        popupAnchor: [0, -32]
      });

      // Add markers using DOM-based popups (XSS-safe)
      locations.forEach((loc) => {
        const marker = L.marker([loc.lat, loc.lng], { icon: defaultIcon }).addTo(map);
        marker.bindPopup(createPopupContent(loc));
        markersRef.current.push(marker);
      });
    });

    return () => {
      cancelled = true;
      markersRef.current.forEach((marker) => marker.remove());
      markersRef.current = [];
      if (leafletMap.current) {
        leafletMap.current.remove();
        leafletMap.current = null;
      }
    };
  }, [isVisible, locations]);

  return (
    <section className="py-12 sm:py-16 lg:py-24 bg-parchment">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-8 sm:mb-10">
                <span className="text-gold uppercase tracking-widest text-xs font-bold">Orientation</span>
                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-heading text-ink mt-2">Map of Wonders</h2>
                <div className="flex items-center justify-center gap-3 mt-3 sm:mt-4">
                    <span className="h-px w-8 sm:w-10 bg-gold/30"></span>
                    <span className="text-gold/50 text-xs sm:text-sm">◆</span>
                    <span className="h-px w-8 sm:w-10 bg-gold/30"></span>
                </div>
            </div>
            
            <div className="relative p-1.5 bg-white border border-gold/20 shadow-lg rounded-xl overflow-hidden">
                <div 
                    ref={mapRef} 
                    className="w-full aspect-square sm:aspect-[4/3] z-0 rounded-lg" 
                    style={{ filter: 'sepia(20%) contrast(102%)' }}
                ></div>
            </div>
        </div>
    </section>
  );
};