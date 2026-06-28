import React from 'react';

interface ImageCredit {
  image: string;
  description: string;
  photographer: string;
  source: string;
  sourceUrl: string;
  license: string;
  licenseUrl: string;
}

const WIKIMEDIA_CREDITS: ImageCredit[] = [
  {
    image: 'jayakwadi-dam.jpg',
    description: 'Jayakwadi Dam',
    photographer: 'Prasad P. Khangaonkar',
    source: 'Wikimedia Commons',
    sourceUrl: 'https://commons.wikimedia.org/wiki/File:Jayakwadi_Dam.jpg',
    license: 'CC BY-SA 3.0',
    licenseUrl: 'https://creativecommons.org/licenses/by-sa/3.0/',
  },
  {
    image: 'mhaismal-hills.jpg',
    description: 'Mhaismal Hill Station',
    photographer: 'Vipul Sable',
    source: 'Wikimedia Commons',
    sourceUrl: 'https://commons.wikimedia.org/wiki/File:Mhaismal_Aurangabaad_Hill_station.jpg',
    license: 'CC BY-SA 4.0',
    licenseUrl: 'https://creativecommons.org/licenses/by-sa/4.0/',
  },
  {
    image: 'gautala-sanctuary.jpg',
    description: 'Gautala Autramghat Wildlife Sanctuary',
    photographer: 'Photo Dharma',
    source: 'Wikimedia Commons',
    sourceUrl: 'https://commons.wikimedia.org/wiki/File:001_Gautala-Autramghat_Wildlife_Sanctuary_(33243645574).jpg',
    license: 'CC BY 2.0',
    licenseUrl: 'https://creativecommons.org/licenses/by/2.0/',
  },
  {
    image: 'shirdi-temple.jpg',
    description: 'Shirdi Sai Baba Temple',
    photographer: 'Nitin3009',
    source: 'Wikimedia Commons',
    sourceUrl: 'https://commons.wikimedia.org/wiki/File:Sri_Sai_Baba_Temple_,_Shirdi.jpg',
    license: 'CC BY-SA 4.0',
    licenseUrl: 'https://creativecommons.org/licenses/by-sa/4.0/',
  },
];

const PEXELS_IMAGES: { image: string; description: string }[] = [
  { image: 'hero-bg.jpg', description: 'Hero background — Ellora Caves aerial' },
  { image: 'ajanta-caves.jpg', description: 'Ajanta Caves exterior' },
  { image: 'ajanta-stupa.jpg', description: 'Ajanta stupa interior' },
  { image: 'bibi-ka-maqbara.jpg', description: 'Bibi Ka Maqbara' },
  { image: 'cave-interior.jpg', description: 'Cave interior' },
  { image: 'cave-paintings.jpg', description: 'Ajanta cave paintings' },
  { image: 'daulatabad-fort.jpg', description: 'Daulatabad Fort' },
  { image: 'daulatabad-walls.jpg', description: 'Daulatabad Fort walls' },
  { image: 'ellora-architecture.jpg', description: 'Ellora architecture detail' },
  { image: 'ellora-kailasa.jpg', description: 'Kailasa Temple, Ellora' },
  { image: 'ellora-overview.jpg', description: 'Ellora Caves overview' },
  { image: 'ellora-sunset.jpg', description: 'Ellora at sunset' },
  { image: 'fort-landscape.jpg', description: 'Fort landscape view' },
  { image: 'grishneshwar-temple.jpg', description: 'Grishneshwar Temple' },
  { image: 'lonar-lake.jpg', description: 'Lonar Crater Lake' },
  { image: 'panchakki.jpg', description: 'Panchakki (Water Mill)' },
  { image: 'paithani-weaving.jpg', description: 'Paithani silk weaving' },
  { image: 'temple-carvings.jpg', description: 'Temple carvings' },
  { image: 'biryani.jpg', description: 'Biryani' },
  { image: 'naan.jpg', description: 'Naan Qalia' },
  { image: 'jalebi.jpg', description: 'Imarti / Jalebi' },
  { image: 'tahri.jpg', description: 'Tahri (sweet rice)' },
  { image: 'sheer-khurma.jpg', description: 'Sheer Khurma' },
  { image: 'dal-peetha.jpg', description: 'Dal Peetha' },
];

const IMG_BASE = import.meta.env.BASE_URL + 'images/';

export const Credits: React.FC = () => {
  return (
    <div className="min-h-screen bg-parchment">
      {/* Header */}
      <section className="relative bg-ink text-white py-14 sm:py-18 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-ink via-ink/95 to-ink" />
        <div className="absolute inset-0 opacity-5 bg-jaali" />
        <div className="relative max-w-4xl mx-auto text-center">
          <div className="flex items-center justify-center gap-3 mb-4">
            <span className="h-px w-10 sm:w-16 bg-gold/50"></span>
            <span className="text-gold text-sm">◆</span>
            <span className="h-px w-10 sm:w-16 bg-gold/50"></span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-heading text-parchment">Image Credits</h1>
          <p className="mt-3 text-parchment/60 text-sm sm:text-base max-w-xl mx-auto">
            We gratefully acknowledge the photographers whose work brings this heritage experience to life.
          </p>
        </div>
      </section>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-16 space-y-12">
        {/* Wikimedia Commons — attribution required */}
        <section>
          <div className="flex items-center gap-3 mb-6">
            <h2 className="text-xl sm:text-2xl font-heading text-ink">Wikimedia Commons</h2>
            <span className="h-px flex-1 bg-gold/20"></span>
          </div>
          <p className="text-stone-warm text-xs sm:text-sm mb-6">
            These images are used under Creative Commons licenses and require attribution.
          </p>
          <div className="grid gap-4 sm:gap-5">
            {WIKIMEDIA_CREDITS.map((credit) => (
              <div
                key={credit.image}
                className="flex flex-col sm:flex-row gap-4 bg-white rounded-xl border border-gold/15 p-4 sm:p-5 shadow-sm"
              >
                <img
                  src={IMG_BASE + credit.image}
                  alt={credit.description}
                  className="w-full sm:w-36 h-24 sm:h-24 object-cover rounded-lg flex-shrink-0"
                  loading="lazy"
                />
                <div className="flex-1 min-w-0">
                  <h3 className="font-heading text-ink text-base sm:text-lg">{credit.description}</h3>
                  <p className="text-stone-warm text-xs sm:text-sm mt-1">
                    Photo by <span className="text-ink font-medium">{credit.photographer}</span>
                  </p>
                  <div className="flex flex-wrap gap-x-4 gap-y-1 mt-2 text-[11px] sm:text-xs text-stone-warm">
                    <a
                      href={credit.sourceUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gold hover:text-gold-light underline underline-offset-2"
                    >
                      {credit.source} ↗
                    </a>
                    <a
                      href={credit.licenseUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gold hover:text-gold-light underline underline-offset-2"
                    >
                      {credit.license} ↗
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Pexels */}
        <section>
          <div className="flex items-center gap-3 mb-6">
            <h2 className="text-xl sm:text-2xl font-heading text-ink">Pexels</h2>
            <span className="h-px flex-1 bg-gold/20"></span>
          </div>
          <p className="text-stone-warm text-xs sm:text-sm mb-6">
            These images are sourced from{' '}
            <a
              href="https://www.pexels.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gold hover:text-gold-light underline underline-offset-2"
            >
              Pexels
            </a>{' '}
            under the{' '}
            <a
              href="https://www.pexels.com/license/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gold hover:text-gold-light underline underline-offset-2"
            >
              Pexels License
            </a>
            , which allows free use without attribution. We thank all contributing photographers.
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3 sm:gap-4">
            {PEXELS_IMAGES.map((item) => (
              <div
                key={item.image}
                className="bg-white rounded-lg border border-gold/10 overflow-hidden shadow-sm"
              >
                <img
                  src={IMG_BASE + item.image}
                  alt={item.description}
                  className="w-full h-24 sm:h-28 object-cover"
                  loading="lazy"
                />
                <p className="px-2.5 py-2 text-[10px] sm:text-xs text-stone-warm leading-tight truncate">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* License note */}
        <section className="border-t border-gold/15 pt-8">
          <p className="text-[11px] sm:text-xs text-stone-warm/70 leading-relaxed max-w-2xl">
            All Creative Commons images may have been cropped or resized for web presentation.
            No modifications alter the original content. If you are a rights holder and have
            concerns, please{' '}
            <a
              href="https://github.com/Akash1269/ellora-ajanta-heritage/issues"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gold hover:text-gold-light underline underline-offset-2"
            >
              open an issue
            </a>{' '}
            on our repository.
          </p>
        </section>
      </div>
    </div>
  );
};
