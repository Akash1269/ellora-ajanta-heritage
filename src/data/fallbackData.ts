

import type { HomeContent, Attraction, Place, ItinerarySummary, ItineraryDetail, HistoryContent } from '../types';

export const FALLBACK_HOME_CONTENT: HomeContent = {
  historyTimeline: [
    { year: "2nd Century BCE", title: "Ajanta Caves Initiated", description: "Buddhist monks begin carving the magnificent prayer halls and monasteries into the basalt rock cliffs." },
    { year: "1610 AD", title: "City Founded", description: "Malik Ambar establishes the city of Khirki (later Aurangabad), creating an intricate water system known as Neher-e-Ambari." },
    { year: "1653 AD", title: "Mughal Capital", description: "Aurangzeb makes the city his capital during his viceroyalty, renaming it Aurangabad and commissioning the Bibi Ka Maqbara." },
    { year: "1983 AD", title: "UNESCO Status", description: "The Ajanta and Ellora Caves are declared UNESCO World Heritage Sites, bringing global recognition." }
  ],
  seasons: [
    {
      name: "Winter",
      type: "Peak Season",
      months: "October - March",
      temperature: "10°C - 25°C",
      description: "The air is crisp and cool. This is the perfect time for day-long excursions to the caves and climbing the Daulatabad Fort without fatigue."
    },
    {
      name: "Monsoon",
      type: "Shoulder Season",
      months: "June - September",
      temperature: "20°C - 32°C",
      description: "The region transforms into lush greenery. The waterfalls at Ellora and Ajanta come alive, offering spectacular views, though humidity is higher."
    },
    {
      name: "Summer",
      type: "Low Season",
      months: "April - May",
      temperature: "25°C - 42°C",
      description: "Temperatures can soar during the day. Ideal for budget travelers or those focusing on indoor museums, early morning temple visits, and evening strolls."
    }
  ],
  travelInfo: [
    { mode: "Flight", details: "Aurangabad Airport (IXU) connects directly to Mumbai, Delhi, and Hyderabad." },
    { mode: "Train", details: "Aurangabad Station (AWB) is a major hub on the South Central Railway with links to major metros." },
    { mode: "Road", details: "Excellent connectivity via the Samruddhi Mahamarg expressway reduces travel time from major cities." }
  ],
  nearbyPlaces: [
    { name: "Ellora Caves", distance: "29 km", description: "Monumental rock-cut caves featuring the monolithic Kailasa Temple." },
    { name: "Daulatabad Fort", distance: "16 km", description: "A formidable hill fortress with a complex defense system and dark passages." },
    { name: "Grishneshwar Temple", distance: "30 km", description: "One of the 12 sacred Jyotirlinga shrines dedicated to Lord Shiva." },
    { name: "Paithan", distance: "56 km", description: "Ancient capital known for the Jayakwadi Dam and exquisite Paithani sarees." }
  ],
  foodItems: [
    { name: "Naan Qalia", description: "A signature dish of slow-cooked meat curry (Qalia) served with golden, fluffy bread (Naan)." },
    { name: "Tahri", description: "A fragrant, spiced rice dish with meat, distinct from Biryani, popular in the Marathwada region." },
    { name: "Imarti", description: "A flower-shaped, deep-fried sweet made from lentil flour and soaked in sugar syrup." },
    { name: "Mawa Jalebi", description: "A rich, dark brown variation of Jalebi made with condensed milk (khoya)." }
  ],
  mapLocations: [
    { 
        name: "Bibi Ka Maqbara", 
        lat: 19.901509, 
        lng: 75.320194, 
        timings: "8:00 AM - 8:00 PM",
        imageUrl: "https://picsum.photos/seed/bibi-maqbara/200/150"
    },
    { 
        name: "Ajanta Caves", 
        lat: 20.55186, 
        lng: 75.703252, 
        timings: "9:00 AM - 5:00 PM (Mon Closed)",
        imageUrl: "https://picsum.photos/seed/ajanta-caves/200/150"
    },
    { 
        name: "Ellora Caves", 
        lat: 20.026838, 
        lng: 75.177144, 
        timings: "6:00 AM - 6:00 PM (Tue Closed)",
        imageUrl: "https://picsum.photos/seed/ellora-caves/200/150"
    },
    { 
        name: "Daulatabad Fort", 
        lat: 19.944813, 
        lng: 75.214828, 
        timings: "8:00 AM - 6:00 PM",
        imageUrl: "https://picsum.photos/seed/daulatabad-fort/200/150"
    },
    { 
        name: "Grishneshwar Temple", 
        lat: 20.023415, 
        lng: 75.168962, 
        timings: "5:30 AM - 9:30 PM",
        imageUrl: "https://picsum.photos/seed/grishneshwar-temple/200/150"
    },
    { 
        name: "Panchakki", 
        lat: 19.886419, 
        lng: 75.316828, 
        timings: "7:00 AM - 9:00 PM",
        imageUrl: "https://picsum.photos/seed/panchakki/200/150"
    },
    { 
        name: "Aurangabad Airport", 
        lat: 19.8633, 
        lng: 75.3992, 
        timings: "24 Hours",
        imageUrl: "https://picsum.photos/seed/aurangabad-airport/200/150"
    }
  ]
};

export const FALLBACK_ATTRACTIONS: Record<string, Omit<Attraction, 'imageUrl'>> = {
  'Bibi Ka Maqbara': {
    name: "Bibi Ka Maqbara",
    description: "Often called the 'Taj of the Deccan', this beautiful mausoleum was built by Azam Shah in memory of his mother, Dilras Banu Begum. It bears a striking resemblance to the Taj Mahal but has its own distinct charm and architectural character.",
    history: "Commissioned in 1660 by the Mughal Emperor Aurangzeb's son, Azam Shah. It stands as a key symbol of the Mughal presence in the Deccan region.",
    bestTimeToVisit: "Morning hours (8 AM - 11 AM) for the best lighting and fewer crowds.",
    keyFeatures: ["Intricate Marble Lattice Work", "Charbagh Garden Layout", "Stucco Plaster detailing", "Mughal Architecture"]
  },
  'Ajanta Caves': {
    name: "Ajanta Caves",
    description: "A set of 29 rock-cut Buddhist cave monuments dating from the 2nd century BCE to about 480 CE. Famous for their stunning mural paintings and sculptures that are masterpieces of Buddhist religious art.",
    history: "Rediscovered in 1819 by a British officer, these caves served as retreats for Buddhist monks during the monsoon.",
    bestTimeToVisit: "November to February; closed on Mondays.",
    keyFeatures: ["Ancient Fresco Paintings", "Chaitya Halls", "Sculptures of Buddha", "Horseshoe-shaped Gorge"]
  },
  'Ellora Caves': {
    name: "Ellora Caves",
    description: "A UNESCO World Heritage Site featuring Buddhist, Hindu, and Jain monuments cut from the rock. The Kailasa Temple (Cave 16) is the largest monolithic rock excavation in the world.",
    history: "Built between the 6th and 10th centuries by the Rashtrakuta and Yadava dynasties, symbolizing religious harmony.",
    bestTimeToVisit: "June to September (Monsoon) or Winter; closed on Tuesdays.",
    keyFeatures: ["Kailasa Temple (Monolith)", "Religious Harmony (Hindu, Buddhist, Jain)", "Multi-story Caves", "Intricate Carvings"]
  },
  'Daulatabad Fort': {
    name: "Daulatabad Fort",
    description: "A historic fortified citadel located atop a conical hill. Known for its strategic ingenuity and the 'Andhari' (Dark Passage), a labyrinth designed to confuse enemies.",
    history: "Originally the capital of the Yadavas (Devagiri), it was briefly the capital of the Tughlaq dynasty under Muhammad bin Tughlaq.",
    bestTimeToVisit: "Early morning to avoid the heat while climbing.",
    keyFeatures: ["Chand Minar", "Andhari (Dark Passage)", "Cannons", "Moat and Drawbridge"]
  },
  'Grishneshwar Jyotirlinga Temple': {
    name: "Grishneshwar Temple",
    description: "The last or 12th Jyotirlinga on earth. This ancient pilgrimage site is revered by Shiva devotees and features beautiful pre-historic architectural style.",
    history: "Reconstructed in the 18th century by Ahilyabai Holkar, the queen of the Maratha Malwa kingdom.",
    bestTimeToVisit: "Mahashivratri or early mornings for Darshan.",
    keyFeatures: ["Jyotirlinga Shrine", "Red Stone Architecture", "Carvings of Dashavatar", "Spiritual Ambiance"]
  },
  'Panchakki (Water Mill)': {
    name: "Panchakki",
    description: "A 17th-century water mill used to grind grain for pilgrims. It displays the scientific thought process of medieval Indian architecture, powered by water brought from 6km away.",
    history: "Built by Turktaz Khan in 1695, dedicated to the memory of the Sufi saint Baba Shah Musafir.",
    bestTimeToVisit: "Afternoon; cool and shaded.",
    keyFeatures: ["Ancient Water Engineering", "Library of Manuscripts", "Banyan Tree", "Reservoir"]
  }
};

export const FALLBACK_PLACES: { hotels: Place[], restaurants: Place[] } = {
  hotels: [
    { name: "Vivanta Aurangabad", description: "A palace-style hotel set in landscaped gardens, offering a blend of Mughal architecture and modern luxury.", specialty: "Heritage Luxury" },
    { name: "WelcomHotel Rama International", description: "Sprawling property with lush greenery, providing a resort-like feel in the heart of the city.", specialty: "Wellness & Spa" },
    { name: "Lemon Tree Hotel", description: "Contemporary hotel with fresh interiors, known for its efficiency and close proximity to the airport.", specialty: "Modern Comfort" },
    { name: "The Meadows Resort", description: "A boutique resort offering a tranquil escape with cottage-style accommodations.", specialty: "Nature Retreat" }
  ],
  restaurants: [
    { name: "Bhoj Thali Restaurant", description: "Famous for its unlimited Rajasthani and Gujarati thalis, offering a true feast.", specialty: "Vegetarian Thali" },
    { name: "Green Leaf", description: "A popular choice for pure vegetarian fine dining with a wide variety of North Indian dishes.", specialty: "North Indian Veg" },
    { name: "Kareem's", description: "The go-to place for authentic Mughlai cuisine, kebabs, and rich curries.", specialty: "Mughlai Non-Veg" },
    { name: "Naivedya", description: "Known for its consistent quality and elegant ambiance, serving a mix of Indian and Continental.", specialty: "Multi-Cuisine" }
  ]
};

export const FALLBACK_ITINERARIES: ItinerarySummary[] = [
  { 
    title: "The Classic Heritage", 
    summary: "A focused weekend trip covering the UNESCO sites of Ajanta and Ellora along with Daulatabad Fort.",
    duration: "2 Days",
    theme: "History & Architecture",
    imageUrl: "https://picsum.photos/seed/kailasa-temple/400/300"
  },
  { 
    title: "Spiritual Sojourn", 
    summary: "A blend of devotion and history, visiting Grishneshwar, Shirdi, and the Mughal monuments.",
    duration: "3 Days",
    theme: "Spiritual",
    imageUrl: "https://picsum.photos/seed/grishneshwar-shiva/400/300"
  },
  { 
    title: "The Leisure Traveler", 
    summary: "A relaxed exploration including Paithan, local craft markets, food tours, and all major monuments.",
    duration: "4 Days",
    theme: "Culture & Leisure",
    imageUrl: "https://picsum.photos/seed/paithani-saree/400/300"
  },
  {
    title: "Photographer's Paradise",
    summary: "A curated route for golden hour shots, architectural details, and landscape vistas.",
    duration: "3 Days",
    theme: "Photography",
    imageUrl: "https://picsum.photos/seed/bibi-maqbara-sunset/400/300"
  }
];

export const FALLBACK_ITINERARY_DETAILS: Record<string, ItineraryDetail> = {
  "The Classic Heritage": {
    title: "The Classic Heritage",
    days: [
      { 
        day: 1, 
        title: "The Ajanta Odyssey", 
        activities: [
          { time: "07:00 AM", title: "Depart for Ajanta", description: "Start early to beat the heat. The drive is approximately 100km (2.5 hours).", type: "travel", duration: "2.5 Hrs" },
          { time: "09:30 AM", title: "Arrival at Ajanta Viewpoint", description: "Stop at the viewpoint for a panoramic shot of the horseshoe-shaped gorge.", type: "sightseeing", imageUrl: "https://picsum.photos/seed/ajanta-view/300/200" },
          { time: "10:00 AM", title: "Explore Caves 1, 2, 9, 10", description: "Witness the world-famous Padmapani painting in Cave 1 and the Chaitya halls.", type: "sightseeing", imageUrl: "https://picsum.photos/seed/ajanta-painting/300/200" },
          { time: "01:30 PM", title: "Lunch Break", description: "Enjoy a thali meal at the MTDC restaurant near the visitor center.", type: "meal", duration: "1 Hr" },
          { time: "02:30 PM", title: "Explore Caves 16, 17, 26", description: "See the Reclining Buddha statue and intricate Jataka tales.", type: "sightseeing" },
          { time: "05:00 PM", title: "Return Journey", description: "Drive back to Aurangabad city.", type: "travel", duration: "2.5 Hrs" },
          { time: "08:00 PM", title: "Dinner at Green Leaf", description: "Relax with authentic vegetarian North Indian cuisine.", type: "meal" }
        ] 
      },
      { 
        day: 2, 
        title: "Ellora & The Fort", 
        activities: [
            { time: "08:00 AM", title: "Travel to Daulatabad", description: "A short 30 min drive to the fortress.", type: "travel" },
            { time: "08:30 AM", title: "Daulatabad Fort Trek", description: "Climb the Chand Minar and navigate the dark passages (Andhari).", type: "sightseeing", imageUrl: "https://picsum.photos/seed/daulatabad-fort/300/200" },
            { time: "11:30 AM", title: "Travel to Ellora", description: "Proceed to Ellora Caves (30 mins away).", type: "travel" },
            { time: "12:00 PM", title: "Kailasa Temple (Cave 16)", description: "Spend dedicated time at the world's largest monolithic excavation.", type: "sightseeing", imageUrl: "https://picsum.photos/seed/kailasa-temple-detail/300/200" },
            { time: "02:00 PM", title: "Lunch", description: "Local Maharashtrian cuisine at a dhaba nearby.", type: "meal" },
            { time: "04:30 PM", title: "Bibi Ka Maqbara", description: "Return to city and visit the 'Mini Taj' at golden hour.", type: "sightseeing", imageUrl: "https://picsum.photos/seed/bibi-maqbara-evening/300/200" },
            { time: "07:30 PM", title: "Shopping at Gul Mandi", description: "Explore the local market for Himroo shawls.", type: "shopping" }
        ] 
      }
    ]
  },
  "Spiritual Sojourn": {
    title: "Spiritual Sojourn",
    days: [
      { 
        day: 1, 
        title: "The Jyotirlinga Darshan", 
        activities: [
            { time: "06:00 AM", title: "Travel to Grishneshwar", description: "Early morning drive to avoid queues.", type: "travel" },
            { time: "07:00 AM", title: "Grishneshwar Temple", description: "Darshan at one of the 12 Jyotirlingas.", type: "sightseeing", imageUrl: "https://picsum.photos/seed/grishneshwar-temple/300/200" },
            { time: "10:00 AM", title: "Bhadra Maruti", description: "Visit the reclining Hanuman temple at Khuldabad.", type: "sightseeing" },
            { time: "01:00 PM", title: "Lunch", description: "Simple satvik meal.", type: "meal" },
            { time: "03:00 PM", title: "Valley of Sufi Saints", description: "Visit the tombs of Aurangzeb and Malik Ambar.", type: "sightseeing" }
        ] 
      },
      { 
        day: 2, 
        title: "Shirdi Sai Baba", 
        activities: [
            { time: "06:00 AM", title: "Depart for Shirdi", description: "Approx 110km drive (3 hours).", type: "travel" },
            { time: "10:00 AM", title: "Sai Baba Temple", description: "Darshan and visit to Dwarkamai.", type: "sightseeing", imageUrl: "https://picsum.photos/seed/shirdi-temple/300/200" },
            { time: "02:00 PM", title: "Prasad/Lunch", description: "Lunch at the temple Bhojanalaya.", type: "meal" },
            { time: "06:00 PM", title: "Return to Aurangabad", description: "Relaxing drive back.", type: "travel" }
        ] 
      },
      {
        day: 3,
        title: "City Spirituals",
        activities: [
            { time: "09:00 AM", title: "Panchakki", description: "Visit the ancient water mill and attached Dargah.", type: "sightseeing", imageUrl: "https://picsum.photos/seed/panchakki/300/200" },
            { time: "11:00 AM", title: "Siddharth Garden", description: "A peaceful stroll and visit to the Zoo.", type: "rest" },
            { time: "01:00 PM", title: "Farewell Lunch", description: "Try the famous Naan Qalia.", type: "meal", imageUrl: "https://picsum.photos/seed/naan-qalia/300/200" }
        ]
      }
    ]
  },
  "The Leisure Traveler": {
    title: "The Leisure Traveler",
    days: [
        { day: 1, title: "Arrival & Ease", activities: [{time: "02:00 PM", title: "Check-in", description: "Relax at Vivanta or Rama International.", type: "rest"}, {time: "05:00 PM", title: "Salim Ali Lake", description: "Bird watching and sunset.", type: "sightseeing"}, {time: "08:00 PM", title: "Fine Dining", description: "Dinner at the hotel.", type: "meal"}]},
        { day: 2, title: "Weaves & Water", activities: [{time: "09:00 AM", title: "Drive to Paithan", description: "Scenic drive to the ancient capital.", type: "travel"}, {time: "11:00 AM", title: "Paithani Center", description: "Watch master weavers create gold-threaded sarees.", type: "shopping", imageUrl: "https://picsum.photos/seed/paithani-weaving/300/200"}, {time: "01:00 PM", title: "Jayakwadi Dam", description: "Picnic lunch by the Nath Sagar reservoir.", type: "meal"}, {time: "04:00 PM", title: "Dnyneshwar Garden", description: "Stroll through the gardens inspired by Vrindavan.", type: "rest"}]},
        { day: 3, title: "Caves & History", activities: [{time: "09:00 AM", title: "Ellora Caves", description: "Leisurely tour of the key caves.", type: "sightseeing"}, {time: "02:00 PM", title: "Lunch", description: "Local cuisine.", type: "meal"}, {time: "05:00 PM", title: "Bibi Ka Maqbara", description: "Evening photography session.", type: "sightseeing"}]},
        { day: 4, title: "Market & Departure", activities: [{time: "10:00 AM", title: "Prozone Mall or Local Markets", description: "Last minute shopping.", type: "shopping"}, {time: "12:00 PM", title: "Departure", description: "Transfer to Airport/Station.", type: "travel"}]}
    ]
  },
  "Photographer's Paradise": {
    title: "Photographer's Paradise",
    days: [
        { day: 1, title: "Mughal Architecture", activities: [{time: "04:30 PM", title: "Bibi Ka Maqbara", description: "Capture the golden hour lighting on the marble.", type: "sightseeing", imageUrl: "https://picsum.photos/seed/bibi-maqbara-detail/300/200"}, {time: "06:30 PM", title: "Soneri Mahal", description: "Blue hour photography at the Golden Palace.", type: "sightseeing"}]},
        { day: 2, title: "Ellora Textures", activities: [{time: "06:00 AM", title: "Depart for Ellora", description: "Catch early light.", type: "travel"}, {time: "07:00 AM", title: "Kailasa Temple", description: "Shoot the intricate carvings before crowds arrive.", type: "sightseeing", imageUrl: "https://picsum.photos/seed/kailasa-carvings/300/200"}, {time: "12:00 PM", title: "Cave 32 (Jain)", description: "Detailed ceiling paintings.", type: "sightseeing"}]},
        { day: 3, title: "Ajanta Murals", activities: [{time: "09:00 AM", title: "Cave 1 & 2", description: "Tripods permitted with permission. Focus on mural details.", type: "sightseeing", imageUrl: "https://picsum.photos/seed/ajanta-fresco/300/200"}, {time: "02:00 PM", title: "Viewpoint Trek", description: "Wide angle landscape shots of the waghur river and caves.", type: "sightseeing"}]}
    ]
  }
};

export const FALLBACK_HISTORY: HistoryContent = {
  title: "The Living History of Aurangabad",
  introduction: "The city now known as Chhatrapati Sambhajinagar (formerly Aurangabad) is one of India's most historically layered cities. Situated in the Deccan Plateau of Maharashtra, it has been shaped by over two millennia of rulers, religions, artisans, and traders — from Buddhist monks carving prayer halls into volcanic rock, to Mughal emperors establishing imperial capitals, to Maratha warriors fighting for sovereignty. Every street, monument, and flavor tells a chapter of this grand saga.",
  eras: [
    {
      era: "Ancient",
      period: "2nd Century BCE – 6th Century CE",
      title: "The Age of the Cave Temples",
      summary: "Buddhist monks, drawn by the remote volcanic horseshoe-shaped gorge of the Waghora River, began excavating the Ajanta Caves around 200 BCE. These caves served as monsoon retreats (viharas) and prayer halls (chaityas) along ancient trade routes connecting the western ports to the Deccan interior.",
      details: [
        "The earliest caves (9, 10, 12, 13, 15A) belong to the Hinayana phase of Buddhism, featuring austere prayer halls without Buddha images — only stupas as focal points of devotion.",
        "The Satavahana dynasty (230 BCE – 220 CE) patronized these early excavations, funding them through taxes on the thriving trade between Roman ports on the Konkan coast and the cities of the Deccan.",
        "After a hiatus of nearly three centuries, the Vakataka dynasty under King Harishena (c. 460–478 CE) commissioned the most spectacular later caves (1, 2, 16, 17), introducing the Mahayana phase with its iconic murals depicting Jataka tales and the life of the Buddha.",
        "The paintings at Ajanta represent the finest surviving examples of ancient Indian art — executed with mineral pigments on lime plaster, they capture the full spectrum of court life, nature, mythology, and spiritual aspiration.",
        "These caves were eventually abandoned as Buddhism declined in the region, and were swallowed by the jungle until their dramatic rediscovery in 1819 by British officer John Smith during a tiger hunt."
      ],
      keyFigures: ["Satavahana Kings", "Vakataka King Harishena", "Buddhist Sangha monks"],
      monuments: ["Ajanta Caves (30 rock-cut caves)", "Cave 1 — Bodhisattva Padmapani mural", "Cave 26 — Mahaparinirvana sculpture"]
    },
    {
      era: "Early Medieval",
      period: "6th – 10th Century CE",
      title: "Ellora: Where Three Faiths Met in Stone",
      summary: "While Ajanta faded into obscurity, a new wave of rock-cut architecture emerged 100 km away at Ellora. Here, the Chalukya, Rashtrakuta, and Yadava dynasties carved 34 caves representing Buddhism, Hinduism, and Jainism side by side — a remarkable testament to India's tradition of religious pluralism.",
      details: [
        "The Buddhist caves (1–12) were excavated first under the Chalukya dynasty (6th–7th century), featuring multi-story monasteries with elaborate carvings of Buddha, Tara, and other Bodhisattvas.",
        "The Hindu caves (13–29) followed under the Rashtrakutas, culminating in Cave 16 — the Kailasa Temple — an engineering marvel carved top-down from a single basalt cliff face. It is estimated that 200,000 tonnes of rock were removed over decades of sustained labor.",
        "The Kailasa Temple was commissioned by Rashtrakuta King Krishna I (c. 756–773 CE) as a representation of Mount Kailash, the abode of Lord Shiva. It features intricate panels depicting scenes from the Ramayana and Mahabharata.",
        "The Jain caves (30–34) were carved under the Yadava dynasty (9th–10th century), reflecting the ascetic aesthetics of Digambara Jainism with exquisite ceiling paintings and detailed carvings of Tirthankaras.",
        "Ellora's coexistence of three religions in one complex is unique in world heritage, demonstrating the tolerance and cultural exchange that characterized medieval Deccan society."
      ],
      keyFigures: ["Chalukya dynasty", "Rashtrakuta King Krishna I", "Yadava rulers", "Dantidurga"],
      monuments: ["Ellora Caves (34 caves)", "Kailasa Temple (Cave 16)", "Indra Sabha (Jain Cave 32)", "Vishwakarma Cave (Buddhist Cave 10)"]
    },
    {
      era: "Late Medieval",
      period: "14th – 16th Century",
      title: "Daulatabad: The Impregnable Fortress",
      summary: "The citadel of Devagiri (later Daulatabad) dominated the region as a virtually unconquerable hill fortress. Its strategic importance attracted conquerors from Delhi, and for a brief extraordinary period, it became the capital of the entire Delhi Sultanate.",
      details: [
        "Originally called Devagiri ('Hill of the Gods'), the fortress was the capital of the Yadava dynasty until its fall to Alauddin Khilji's forces in 1296 CE. The Yadavas had accumulated enormous wealth from Deccan trade.",
        "In 1327, Sultan Muhammad bin Tughlaq made the audacious decision to shift his entire capital from Delhi to Daulatabad — forcing the entire population of Delhi to march 1,500 km south. The experiment ended in disaster within two years, with thousands perishing on the journey.",
        "The fortress's ingenious defenses include a moat once filled with crocodiles, a dark spiral passage designed to disorient invaders, boiling-oil traps, and walls rising from a 200-foot conical hill that made siege ladders useless.",
        "The Chand Minar, a 60-meter tower standing at the entrance, was built in 1435 by Alauddin Bahmani to celebrate his conquest — modeled after Delhi's Qutub Minar but with its own distinct Deccani character.",
        "Daulatabad remained strategically vital through the Bahmani, Nizam Shahi, and Mughal periods, changing hands multiple times and accumulating layers of fortification from each ruler."
      ],
      keyFigures: ["Yadava King Ramachandra", "Alauddin Khilji", "Muhammad bin Tughlaq", "Alauddin Bahmani"],
      monuments: ["Daulatabad Fort", "Chand Minar", "Bharatmata Mandir", "Dark Passage (Andheri)"]
    },
    {
      era: "Sultanate",
      period: "16th – 17th Century",
      title: "Malik Ambar and the Birth of a City",
      summary: "The city of Aurangabad owes its very existence to Malik Ambar — an Ethiopian-born slave who rose to become the most powerful minister of the Ahmadnagar Sultanate. His military genius, administrative reforms, and urban planning transformed a small settlement called Khirki into a thriving capital.",
      details: [
        "Malik Ambar (1548–1626) was born in Ethiopia, enslaved, and sold multiple times before arriving in the Deccan. He rose through military ranks to become the regent (Peshwa) of the Nizam Shahi sultanate of Ahmadnagar.",
        "He founded the city of Khirki (later Fatehpur, then Aurangabad) around 1610, designing an advanced water supply system — the Neher (aqueduct) — that channeled water from the Dudhna river through underground channels and siphons to the city.",
        "His guerrilla warfare tactics against the Mughals were so effective that even Emperor Jahangir could not subdue the Deccan during Ambar's lifetime. He pioneered the use of mobile, light cavalry against the heavy Mughal armies.",
        "After Ambar's death, his son Fateh Khan renamed the city Fatehpur. The Nizam Shahi kingdom weakened rapidly, eventually falling to Mughal forces in 1636.",
        "Ambar's water engineering legacy — the nahar system — continued to supply the city for over 300 years and influenced Mughal hydraulic projects across India."
      ],
      keyFigures: ["Malik Ambar (Peshwa)", "Murtaza Nizam Shah II", "Fateh Khan", "Emperor Jahangir"],
      monuments: ["Malik Ambar's Tomb (Khuldabad)", "Neher Water System", "Nauras Baag", "Killa Arrak"]
    },
    {
      era: "Mughal",
      period: "1653 – 1707 CE",
      title: "Aurangzeb's Imperial Capital",
      summary: "When Mughal prince Aurangzeb was appointed Viceroy of the Deccan in 1653, he made this city his base — renaming it Aurangabad. After becoming Emperor, he returned in 1682 to conduct his obsessive Deccan campaigns, and never left. The city became the de facto Mughal capital for the last 25 years of his reign.",
      details: [
        "Aurangzeb first arrived as a young prince-governor in 1636 and was enchanted by the city. He expanded it significantly during his viceroyalty (1653–1658), commissioning mosques, gardens, and administrative buildings.",
        "The Bibi Ka Maqbara — often called the 'Taj of the Deccan' — was built in 1660 by Aurangzeb's son Azam Shah in memory of his mother, Dilras Banu Begum. While inspired by the Taj Mahal, its use of stucco instead of pure marble reflects the depleted Mughal treasury after Shah Jahan's extravagance.",
        "From 1682 until his death in 1707, Aurangzeb governed the entire Mughal Empire from Aurangabad while waging endless wars against the Marathas. The city's population swelled to over 750,000 — larger than London at the time.",
        "The Panchakki (water mill) complex, powered by an underground water channel from a spring 6 km away, showcases the engineering sophistication of this era. It was built for the Sufi saint Baba Shah Musafir.",
        "Aurangzeb died in Ahmednagar in 1707 and was buried in a modest grave in nearby Khuldabad — by his own wish, paid for only by the earnings from his personal Quran copying and cap-stitching. His tomb's deliberate simplicity stands in stark contrast to the grandeur of earlier Mughal rulers."
      ],
      keyFigures: ["Emperor Aurangzeb", "Prince Azam Shah", "Dilras Banu Begum", "Baba Shah Musafir"],
      monuments: ["Bibi Ka Maqbara", "Panchakki", "Delhi Gate & Jama Masjid", "52 Gates of Aurangabad", "Aurangzeb's Tomb (Khuldabad)"]
    },
    {
      era: "Maratha & Nizam",
      period: "1707 – 1947",
      title: "Maratha Valor and Nizam Sovereignty",
      summary: "After Aurangzeb's death, the Mughal Empire rapidly fragmented. The Marathas and the Nizam of Hyderabad competed for control of the Deccan, with Aurangabad caught between these powers. The Asaf Jahi dynasty eventually controlled the city for over 200 years as part of the Hyderabad State.",
      details: [
        "The Maratha leader Chhatrapati Shivaji Maharaj had established a formidable kingdom in the 17th century, and his successors — the Peshwas — expanded deep into Mughal territory. The city changed hands multiple times between 1720 and 1760.",
        "Queen Ahilyabai Holkar of Indore rebuilt the ancient Grishneshwar Temple near Ellora in the 1770s — one of the twelve Jyotirlingas — after it had been destroyed during Islamic invasions. The temple remains an active pilgrimage site.",
        "Nizam-ul-Mulk Asaf Jah I established the independent Hyderabad State in 1724, and Aurangabad became its initial capital before the seat moved to Hyderabad city. The Nizam administration left distinctive architectural marks including the Soneri Mahal.",
        "During British India, the Hyderabad State retained internal autonomy as a princely state. Aurangabad served as a divisional headquarters, developing educational institutions and modest industry.",
        "After Indian independence in 1947, the Nizam initially resisted integration. In 1948, Operation Polo (Police Action) brought Hyderabad State into the Indian Union. Aurangabad was assigned to Bombay State and later became part of Maharashtra in 1960."
      ],
      keyFigures: ["Chhatrapati Shivaji Maharaj", "Ahilyabai Holkar", "Nizam-ul-Mulk Asaf Jah I", "Nizam Osman Ali Khan"],
      monuments: ["Grishneshwar Temple", "Soneri Mahal", "Himayat Baag", "Salim Ali Lake"]
    },
    {
      era: "Modern",
      period: "1960 – Present",
      title: "Heritage City Reborn",
      summary: "In the post-independence era, Aurangabad emerged as the tourism capital of Maharashtra, home to three UNESCO World Heritage Sites. In 2023, the city was officially renamed Chhatrapati Sambhajinagar, honoring the Maratha warrior-king. Today it balances industrial growth with heritage preservation.",
      details: [
        "The Ajanta Caves were designated a UNESCO World Heritage Site in 1983, followed by Ellora Caves in the same year. These recognitions brought international attention and conservation funding.",
        "The city developed as a major industrial center with the establishment of the Waluj and Chikalthana MIDCs, attracting automotive, pharmaceutical, and brewing industries while maintaining its heritage identity.",
        "The Ajanta-Ellora International Film Festival and various heritage walks have revitalized cultural tourism, attracting over 4 million visitors annually to the combined cave sites.",
        "In 2023, the Maharashtra government renamed the city from Aurangabad to Chhatrapati Sambhajinagar, honoring Sambhaji Maharaj (1657–1689), the eldest son of Shivaji who was martyred by Aurangzeb.",
        "Ongoing conservation efforts include the Archaeological Survey of India's restoration projects, climate-controlled viewing galleries at Ajanta, and the proposed Ajanta-Ellora Heritage Corridor connecting both sites."
      ],
      keyFigures: ["Sambhaji Maharaj (honored)", "Archaeological Survey of India", "UNESCO"],
      monuments: ["Ajanta Caves (UNESCO)", "Ellora Caves (UNESCO)", "Daulatabad Fort", "Bibi Ka Maqbara"]
    }
  ],
  culinaryHistory: {
    title: "A Cuisine Forged by Empires",
    description: "The food of Aurangabad is a living chronicle of its rulers. Each dynasty left behind recipes, techniques, and ingredients that blended with local Maharashtrian traditions to create a unique culinary identity — richly Mughlai yet distinctly Deccani.",
    influences: [
      { name: "Mughlai Legacy", detail: "The royal kitchens of Aurangzeb's court introduced naan-e-qalia (spiced lamb curry with wheat bread), biryani cooked in the dum style, and the famous Aurangabadi naan — a large, thick bread stuffed with dry fruits and kneaded with milk and butter." },
      { name: "Hyderabadi Fusion", detail: "Two centuries of Nizam rule brought Hyderabadi influences: the tangy tamarind-based curries, haleem (slow-cooked wheat and meat porridge served during Ramadan), and the tradition of elaborate iftar spreads that persist today." },
      { name: "Marathwada Roots", detail: "The local Maharashtrian base provides jowar (sorghum) rotis, zunka-bhakar (gram flour curry with millet bread), and the fiery Kolhapuri-influenced spice blends that give Aurangabadi non-veg its distinctive heat." },
      { name: "Street Food Culture", detail: "The Gul Mandi and Shahganj areas preserve centuries-old food traditions: tahri (spiced yellow rice), khichdi with kababs, paan from families that have served since Mughal times, and the famous mutton dalcha served with bagarkhani bread." }
    ]
  },
  legacy: {
    title: "The Unbroken Thread",
    content: "From the meditative silence of a Buddhist prayer hall carved two thousand years ago, to the echoing azaan from a Mughal-era mosque, to the temple bells of a Maratha shrine — Aurangabad's heritage is not a museum piece but a living tapestry. Buddhists, Hindus, Jains, Muslims, Marathas, and modern Indians have all inscribed their stories onto this landscape. The city does not merely preserve history; it inhabits it."
  }
};
