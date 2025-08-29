// Données de l'application avec toutes les chaussures et métadonnées
const appData = {
  "shoes": [
    {
      "id": 1,
      "name": "Nike Vomero 18",
      "brand": "Nike",
      "price": 170,
      "originalPrice": 190,
      "image": "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=400",
      "gallery": ["https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=400", "https://images.unsplash.com/photo-1549298916-b41d501d3772?w=400"],
      "rating": 4.8,
      "reviews": 342,
      "weight": "280g",
      "drop": "10mm",
      "surfaces": ["route", "marathon"],
      "types": ["route", "endurance"],
      "budget_range": "150-200",
      "description": "Amorti ZoomX + ReactX pour sorties longues et confortables",
      "characteristics": ["Amorti maximal", "Confort longue distance", "Durabilité premium"],
      "technology": "ZoomX + ReactX + Air Zoom",
      "stock": 45,
      "sales": 128,
      "trending": true,
      "new": false,
      "aiScore": 95
    },
    {
      "id": 2,
      "name": "Hoka Clifton 10",
      "brand": "Hoka",
      "price": 150,
      "originalPrice": 150,
      "image": "https://images.unsplash.com/photo-1515955656352-a1fa3ffcd111?w=400",
      "gallery": ["https://images.unsplash.com/photo-1515955656352-a1fa3ffcd111?w=400", "https://images.unsplash.com/photo-1463100099107-aa0980c362e6?w=400"],
      "rating": 4.7,
      "reviews": 256,
      "weight": "250g",
      "drop": "5mm",
      "surfaces": ["route", "chemin"],
      "types": ["route", "quotidien"],
      "budget_range": "100-150",
      "description": "Chaussure polyvalente quotidienne ultra confortable",
      "characteristics": ["Ultra-légère", "Ventilation améliorée", "Adhérence renforcée"],
      "technology": "Mousse EVA améliorée",
      "stock": 32,
      "sales": 189,
      "trending": false,
      "new": true,
      "aiScore": 88
    },
    {
      "id": 3,
      "name": "Saucony Endorphin Speed 5",
      "brand": "Saucony",
      "price": 170,
      "originalPrice": 180,
      "image": "https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?w=400",
      "gallery": ["https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?w=400", "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400"],
      "rating": 4.9,
      "reviews": 421,
      "weight": "230g",
      "drop": "8mm",
      "surfaces": ["route", "piste"],
      "types": ["competition", "route"],
      "budget_range": "150-200",
      "description": "Hybride performance/confort avec plaque nylon révolutionnaire",
      "characteristics": ["Plaque nylon", "PWRRUN PB", "Polyvalent performance"],
      "technology": "PWRRUN PB + Plaque Nylon",
      "stock": 28,
      "sales": 267,
      "trending": true,
      "new": false,
      "aiScore": 97
    },
    {
      "id": 4,
      "name": "Adidas Boston 13",
      "brand": "Adidas",
      "price": 160,
      "originalPrice": 170,
      "image": "https://images.unsplash.com/photo-1551698618-1dfe5d97d256?w=400",
      "gallery": ["https://images.unsplash.com/photo-1551698618-1dfe5d97d256?w=400", "https://images.unsplash.com/photo-1600185365926-3a2ce3cdb9eb?w=400"],
      "rating": 4.6,
      "reviews": 198,
      "weight": "245g",
      "drop": "8mm",
      "surfaces": ["route"],
      "types": ["competition", "entrainement"],
      "budget_range": "150-200",
      "description": "Chaussure d'entraînement exigeante avec EnergyRods",
      "characteristics": ["Rigidité contrôlée", "EnergyRods", "Durabilité exceptionnelle"],
      "technology": "EnergyRods + Lightstrike Pro",
      "stock": 52,
      "sales": 143,
      "trending": false,
      "new": false,
      "aiScore": 84
    },
    {
      "id": 5,
      "name": "Asics Nimbus 27",
      "brand": "Asics",
      "price": 200,
      "originalPrice": 220,
      "image": "https://images.unsplash.com/photo-1463100099107-aa0980c362e6?w=400",
      "gallery": ["https://images.unsplash.com/photo-1463100099107-aa0980c362e6?w=400", "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400"],
      "rating": 4.8,
      "reviews": 387,
      "weight": "290g",
      "drop": "8mm",
      "surfaces": ["route", "chemin"],
      "types": ["route", "endurance"],
      "budget_range": "200+",
      "description": "Amorti premium pour coureurs longue distance exigeants",
      "characteristics": ["Amorti FF BLAST+", "Gel avant/arrière", "Mesh respirant premium"],
      "technology": "FF BLAST+ ECO + PureGEL",
      "stock": 38,
      "sales": 198,
      "trending": true,
      "new": false,
      "aiScore": 93
    },
    {
      "id": 6,
      "name": "New Balance Fresh Foam X More v6",
      "brand": "New Balance",
      "price": 180,
      "originalPrice": 190,
      "image": "https://images.unsplash.com/photo-1552346154-21d32810aba3?w=400",
      "gallery": ["https://images.unsplash.com/photo-1552346154-21d32810aba3?w=400", "https://images.unsplash.com/photo-1549298916-b41d501d3772?w=400"],
      "rating": 4.7,
      "reviews": 223,
      "weight": "305g",
      "drop": "4mm",
      "surfaces": ["route"],
      "types": ["route", "recovery"],
      "budget_range": "150-200",
      "description": "Confort maximal pour récupération et sorties douces",
      "characteristics": ["Fresh Foam X", "Amorti maximal", "Stabilité optimale"],
      "technology": "Fresh Foam X",
      "stock": 41,
      "sales": 167,
      "trending": false,
      "new": true,
      "aiScore": 85
    },
    {
      "id": 7,
      "name": "Brooks Cascadia 18",
      "brand": "Brooks",
      "price": 150,
      "originalPrice": 160,
      "image": "https://images.unsplash.com/photo-1544966503-7cc5ac882d5e?w=400",
      "gallery": ["https://images.unsplash.com/photo-1544966503-7cc5ac882d5e?w=400", "https://images.unsplash.com/photo-1606890737304-57a1ca8a5b62?w=400"],
      "rating": 4.5,
      "reviews": 312,
      "weight": "320g",
      "drop": "8mm",
      "surfaces": ["sentiers", "trail"],
      "types": ["trail", "randonnee"],
      "budget_range": "100-150",
      "description": "Trail accessible et confortable pour tous terrains",
      "characteristics": ["Semelle Pivot Post", "Protection pierres", "Adhérence multi-terrain"],
      "technology": "TrailTack + Pivot Post",
      "stock": 25,
      "sales": 234,
      "trending": false,
      "new": false,
      "aiScore": 82
    },
    {
      "id": 8,
      "name": "Salomon S-Lab Genesis",
      "brand": "Salomon",
      "price": 220,
      "originalPrice": 240,
      "image": "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400",
      "gallery": ["https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400", "https://images.unsplash.com/photo-1544966503-7cc5ac882d5e?w=400"],
      "rating": 4.8,
      "reviews": 156,
      "weight": "270g",
      "drop": "6mm",
      "surfaces": ["trail", "montagne"],
      "types": ["trail", "competition"],
      "budget_range": "200+",
      "description": "Performance trail haut de gamme pour terrains techniques",
      "characteristics": ["Contagrip MA", "EnergyCell+", "Design premium pro"],
      "technology": "EnergyCell+ + Contagrip MA",
      "stock": 18,
      "sales": 89,
      "trending": true,
      "new": true,
      "aiScore": 91
    },
    {
      "id": 9,
      "name": "Hoka Tecton X 3",
      "brand": "Hoka",
      "price": 200,
      "originalPrice": 210,
      "image": "https://images.unsplash.com/photo-1606890737304-57a1ca8a5b62?w=400",
      "gallery": ["https://images.unsplash.com/photo-1606890737304-57a1ca8a5b62?w=400", "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400"],
      "rating": 4.9,
      "reviews": 278,
      "weight": "285g",
      "drop": "5mm",
      "surfaces": ["trail", "montagne"],
      "types": ["trail", "competition"],
      "budget_range": "200+",
      "description": "Trail racing avec protection guêtre intégrée innovante",
      "characteristics": ["Guêtre intégrée", "Plaque carbone", "Grip technique ultra"],
      "technology": "Plaque carbone + Vibram Megagrip",
      "stock": 22,
      "sales": 145,
      "trending": true,
      "new": false,
      "aiScore": 94
    },
    {
      "id": 10,
      "name": "Nike Air Winflo 11",
      "brand": "Nike",
      "price": 110,
      "originalPrice": 130,
      "image": "https://images.unsplash.com/photo-1549298916-b41d501d3772?w=400",
      "gallery": ["https://images.unsplash.com/photo-1549298916-b41d501d3772?w=400", "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=400"],
      "rating": 4.3,
      "reviews": 445,
      "weight": "264g",
      "drop": "10mm",
      "surfaces": ["route", "salle"],
      "types": ["route", "debutant", "salle"],
      "budget_range": "100-150",
      "description": "Chaussure d'entrée accessible pour débuter en douceur",
      "characteristics": ["Prix accessible", "Polyvalente", "Confortable débutant"],
      "technology": "Nike Air + React",
      "stock": 67,
      "sales": 356,
      "trending": false,
      "new": false,
      "aiScore": 75
    },
    {
      "id": 11,
      "name": "Puma Deviate Nitro 3",
      "brand": "Puma",
      "price": 170,
      "originalPrice": 180,
      "image": "https://images.unsplash.com/photo-1600185365926-3a2ce3cdb9eb?w=400",
      "gallery": ["https://images.unsplash.com/photo-1600185365926-3a2ce3cdb9eb?w=400", "https://images.unsplash.com/photo-1551698618-1dfe5d97d256?w=400"],
      "rating": 4.6,
      "reviews": 189,
      "weight": "234g",
      "drop": "8mm",
      "surfaces": ["route", "salle"],
      "types": ["route", "salle"],
      "budget_range": "150-200",
      "description": "Chaussure versatile pour salle et route moderne",
      "characteristics": ["NITRO foam", "Plaque carbone", "Design contemporain"],
      "technology": "NITRO + Plaque carbone",
      "stock": 35,
      "sales": 123,
      "trending": false,
      "new": true,
      "aiScore": 79
    },
    {
      "id": 12,
      "name": "Mizuno Wave Rebellion Pro 3",
      "brand": "Mizuno",
      "price": 190,
      "originalPrice": 200,
      "image": "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400",
      "gallery": ["https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400", "https://images.unsplash.com/photo-1463100099107-aa0980c362e6?w=400"],
      "rating": 4.7,
      "reviews": 167,
      "weight": "220g",
      "drop": "8mm",
      "surfaces": ["route", "competition"],
      "types": ["competition", "route"],
      "budget_range": "150-200",
      "description": "Performance compétition avec plaque nylon-fibre de verre",
      "characteristics": ["Plaque Nylon-Verre", "ENERZY NXT", "Légèreté extrême"],
      "technology": "ENERZY NXT + Plaque composite",
      "stock": 29,
      "sales": 178,
      "trending": false,
      "new": false,
      "aiScore": 87
    }
  ],
  "running_types": [
    {
      "id": "route",
      "name": "Running Route/Marathon",
      "description": "Course sur routes et chemins goudronnés, marathons",
      "icon": "🏃‍♂️",
      "color": "#3b82f6"
    },
    {
      "id": "trail",
      "name": "Trail Running",
      "description": "Course en nature, sentiers, terrains variés",
      "icon": "🏔️",
      "color": "#10b981"
    },
    {
      "id": "salle",
      "name": "Running en Salle",
      "description": "Tapis de course, fitness, cross-training indoor",
      "icon": "🏋️‍♂️",
      "color": "#8b5cf6"
    },
    {
      "id": "randonnee",
      "name": "Randonnée",
      "description": "Marche sportive, randonnée rapide, trekking",
      "icon": "🥾",
      "color": "#f59e0b"
    },
    {
      "id": "competition",
      "name": "Compétition",
      "description": "Courses rapides, records personnels, 5K-marathon",
      "icon": "🏆",
      "color": "#ef4444"
    },
    {
      "id": "endurance",
      "name": "Endurance",
      "description": "Sorties longues, entraînement fond",
      "icon": "⏱️",
      "color": "#06b6d4"
    },
    {
      "id": "debutant",
      "name": "Débutant",
      "description": "Première chaussure, apprentissage",
      "icon": "🌟",
      "color": "#84cc16"
    },
    {
      "id": "recovery",
      "name": "Récupération",
      "description": "Sorties douces, récupération active",
      "icon": "💆‍♂️",
      "color": "#ec4899"
    },
    {
      "id": "entrainement",
      "name": "Entraînement",
      "description": "Séances variées, tempo, fractionné",
      "icon": "💪",
      "color": "#f97316"
    },
    {
      "id": "quotidien",
      "name": "Quotidien",
      "description": "Usage quotidien, polyvalent",
      "icon": "📅",
      "color": "#6366f1"
    }
  ],
  "budget_ranges": [
    {
      "id": "50-100",
      "label": "50€ - 100€",
      "description": "Budget entrée de gamme",
      "min": 50,
      "max": 100,
      "color": "#84cc16"
    },
    {
      "id": "100-150",
      "label": "100€ - 150€",
      "description": "Gamme intermédiaire",
      "min": 100,
      "max": 150,
      "color": "#3b82f6"
    },
    {
      "id": "150-200",
      "label": "150€ - 200€",
      "description": "Haut de gamme",
      "min": 150,
      "max": 200,
      "color": "#8b5cf6"
    },
    {
      "id": "200+",
      "label": "200€+",
      "description": "Premium/Pro",
      "min": 200,
      "max": 1000,
      "color": "#f59e0b"
    }
  ],
  "faq": [
    {
      "id": 1,
      "category": "shoes",
      "question": "Comment choisir ses chaussures de running ?",
      "answer": "Le choix dépend de votre type de foulée, terrain de pratique, budget et fréquence d'utilisation. Analysez votre usure actuelle, consultez un spécialiste si possible, et privilégiez le confort dès l'essayage.",
      "icon": "❓"
    },
    {
      "id": 2,
      "category": "tech",
      "question": "Quelle est la différence entre trail et route ?",
      "answer": "Les chaussures de trail ont une semelle plus crantée pour l'adhérence, une protection renforcée contre les pierres et racines. Les chaussures de route privilégient l'amorti sur asphalte et la légèreté.",
      "icon": "🏔️"
    },
    {
      "id": 3,
      "category": "maintenance",
      "question": "À quelle fréquence changer ses chaussures ?",
      "answer": "En général, entre 500-800km selon votre poids, foulée et terrain. Surveillez l'usure de la semelle, la perte d'amorti et l'apparition de douleurs inhabituelles.",
      "icon": "🔄"
    },
    {
      "id": 4,
      "category": "tech", 
      "question": "Que signifie le 'drop' d'une chaussure ?",
      "answer": "Le drop est la différence de hauteur entre le talon et l'avant-pied. Un drop élevé (10-12mm) convient aux attaqueurs talon, un drop faible (0-4mm) favorise l'attaque médio-pied.",
      "icon": "📏"
    },
    {
      "id": 5,
      "category": "shoes",
      "question": "Comment mesurer sa pointure exactement ?",
      "answer": "Mesurez vos pieds en fin de journée avec vos chaussettes de course. Ajoutez 1-1.5cm à votre orteil le plus long. Les pointures varient selon les marques.",
      "icon": "📐"
    },
    {
      "id": 6,
      "category": "tech",
      "question": "Pronation et supination : comment savoir ?",
      "answer": "Examinez l'usure de vos anciennes chaussures. Usure interne = surpronation, usure externe = supination. Une analyse de foulée chez un spécialiste est recommandée.",
      "icon": "👣"
    },
    {
      "id": 7,
      "category": "shoes",
      "question": "Quel budget pour débuter ?",
      "answer": "Comptez 100-150€ pour une première paire de qualité. Évitez l'entrée de gamme qui manque de durabilité. Un bon investissement initial évite les blessures et déceptions.",
      "icon": "💰"
    },
    {
      "id": 8,
      "category": "health",
      "question": "Comment éviter les ampoules ?",
      "answer": "Chaussures à la bonne taille, chaussettes techniques sans coutures, laçage adapté. Évitez le coton et les chaussures neuves en compétition.",
      "icon": "🩹"
    },
    {
      "id": 9,
      "category": "tech",
      "question": "Chaussures spéciales hiver ?",
      "answer": "Privilégiez une semelle adhérente, une construction moins aérée. Pour neige/glace, optez pour des crampons amovibles ou chaussures trail spécialisées.",
      "icon": "❄️"
    },
    {
      "id": 10,
      "category": "maintenance",
      "question": "Comment nettoyer ses chaussures ?",
      "answer": "Retirez semelles et lacets, brossez à sec, lavez à l'eau tiède avec une brosse douce. Séchage naturel, jamais de machine ou radiateur. Alternez avec une deuxième paire.",
      "icon": "🧽"
    },
    {
      "id": 11,
      "category": "shoes",
      "question": "Chaussures d'entraînement vs compétition ?",
      "answer": "Entraînement : durabilité et confort prioritaires. Compétition : légèreté et performance, mais durée de vie limitée. Réservez les chaussures de compétition aux courses importantes.",
      "icon": "🏆"
    },
    {
      "id": 12,
      "category": "shoes",
      "question": "Erreurs à éviter pour un premier achat ?",
      "answer": "Ne pas prendre sa pointure de ville, choisir uniquement sur l'esthétique, négliger son type de foulée, acheter la veille d'une course, omettre la période d'adaptation.",
      "icon": "⚠️"
    },
    {
      "id": 13,
      "category": "health",
      "question": "Douleurs au genou : que faire ?",
      "answer": "Vérifiez l'usure de vos chaussures, votre technique de course et surface d'entraînement. Consultez un médecin du sport si les douleurs persistent. Un bon échauffement est essentiel.",
      "icon": "🦵"
    },
    {
      "id": 14,
      "category": "tech",
      "question": "Qu'est-ce que la plaque carbone ?",
      "answer": "Plaque rigide intégrée qui améliore le retour d'énergie et l'efficacité de foulée. Idéale pour la performance mais nécessite adaptation. Plus efficace sur terrain plat.",
      "icon": "⚡"
    },
    {
      "id": 15,
      "category": "maintenance",
      "question": "Faut-il alterner plusieurs paires ?",
      "answer": "Oui, idéalement 2-3 paires en rotation. Cela prolonge leur durée de vie, permet un séchage complet et s'adapte aux différents types d'entraînement.",
      "icon": "🔄"
    },
    {
      "id": 16,
      "category": "health",
      "question": "Running pieds nus : bonne idée ?",
      "answer": "Transition très progressive nécessaire. Renforce les muscles du pied mais augmente le risque de blessures. Commencez par des exercices techniques avant de courir pieds nus.",
      "icon": "🦶"
    },
    {
      "id": 17,
      "category": "tech",
      "question": "Technologies d'amorti : lesquelles choisir ?",
      "answer": "Gel pour absorption des chocs, mousse EVA pour légèreté, Air pour réactivité. Le choix dépend de votre poids, style de course et préférences de sensation.",
      "icon": "🔬"
    },
    {
      "id": 18,
      "category": "shoes",
      "question": "Acheter en ligne ou en magasin ?",
      "answer": "Magasin recommandé pour un premier achat (essayage, conseils). En ligne possible si vous connaissez votre taille dans la marque. Vérifiez la politique de retour.",
      "icon": "🛒"
    }
  ],
  "social_media": [
    {
      "platform": "GitHub",
      "handle": "RunningZone/recommendations",
      "url": "https://github.com/runningzone",
      "icon": "💻",
      "description": "Code source et contributions open-source"
    },
    {
      "platform": "Instagram", 
      "handle": "@runningzone_official",
      "url": "https://instagram.com/runningzone_official",
      "icon": "📸",
      "description": "Photos quotidiennes et conseils visuels"
    },
    {
      "platform": "Twitter/X",
      "handle": "@RunningZoneFR", 
      "url": "https://twitter.com/RunningZoneFR",
      "icon": "🐦",
      "description": "Actualités running et tips express"
    },
    {
      "platform": "YouTube",
      "handle": "RunningZone Tutorials",
      "url": "https://youtube.com/@RunningZoneTutorials", 
      "icon": "📺",
      "description": "Tests détaillés et tutoriels vidéo"
    },
    {
      "platform": "TikTok",
      "handle": "@runningzonetips",
      "url": "https://tiktok.com/@runningzonetips",
      "icon": "🎵", 
      "description": "Conseils courts et tendances"
    },
    {
      "platform": "LinkedIn",
      "handle": "RunningZone Company",
      "url": "https://linkedin.com/company/runningzone",
      "icon": "💼",
      "description": "Actualités entreprise et partenariats"
    }
  ],
  "contact_info": {
    "email": "contact@runningzone.fr",
    "phone": "+33 1 42 86 95 27",
    "address": "123 Avenue des Champs-Élysées, 75008 Paris",
    "hours": {
      "weekdays": "9h00 - 18h00",
      "weekend": "10h00 - 16h00"
    },
    "response_time": "24h en moyenne"
  },
  "brands": [
    {"name": "Nike", "logo": "🏃‍♂️", "color": "#000"},
    {"name": "Adidas", "logo": "👟", "color": "#000"},
    {"name": "Hoka", "logo": "⛰️", "color": "#ff6b35"},
    {"name": "Asics", "logo": "🏃", "color": "#005eb8"},
    {"name": "New Balance", "logo": "⚖️", "color": "#d50000"},
    {"name": "Brooks", "logo": "🌊", "color": "#004d9f"},
    {"name": "Saucony", "logo": "🔥", "color": "#f47721"},
    {"name": "Salomon", "logo": "🏔️", "color": "#ffed00"},
    {"name": "Puma", "logo": "🐾", "color": "#000"},
    {"name": "Mizuno", "logo": "🌊", "color": "#0033a0"}
  ]
};

// État global de l'application Premium
let appState = {
  currentPage: 'home',
  selectedBudget: null,
  selectedBudgetValue: 150,
  selectedTypes: [],
  favorites: [],
  compareList: [],
  isLoggedIn: false,
  editingShoe: null,
  currentStep: 1,
  filteredShoes: [],
  lastSearch: '',
  theme: 'auto',
  sidebarCollapsed: false,
  contactMessages: []
};

// Initialisation de l'application Premium
document.addEventListener('DOMContentLoaded', function() {
  console.log('🚀 Initialisation de RunningZone Premium...');
  
  // Cacher le loading overlay immédiatement
  hideLoadingOverlay();
  
  try {
    initializeApp();
  } catch (error) {
    console.error('❌ Erreur lors de l\'initialisation:', error);
    hideLoadingOverlay();
    showToast('Erreur lors du chargement de l\'application', 'error');
  }
});

function initializeApp() {
  // Charger les données depuis localStorage
  loadAppStateFromStorage();
  
  // Configuration de base
  setupTheme();
  setupNavigation();
  setupBudgetSelector();
  setupTypesSelector();
  setupRecommendations();
  setupComparator();
  setupFavorites();
  setupContactForm();
  setupAdminPanel();
  setupModals();
  
  // Rendu initial des pages
  renderAllPages();
  
  // État initial
  updateFavoritesCount();
  updateMessagesCount();
  updateBreadcrumb();
  updateProgressFlow();
  
  showToast('RunningZone Premium chargé avec succès! 🎉', 'success');
  console.log('✅ RunningZone Premium ready!');
}

// === GESTION DU LOCALSTORAGE ===
function loadAppStateFromStorage() {
  try {
    const savedState = localStorage.getItem('runningzone_state');
    if (savedState) {
      const parsedState = JSON.parse(savedState);
      appState = { ...appState, ...parsedState };
    }
    
    // Charger les messages de contact
    const savedMessages = localStorage.getItem('runningzone_messages');
    if (savedMessages) {
      appState.contactMessages = JSON.parse(savedMessages);
    }
  } catch (error) {
    console.warn('Erreur lors du chargement depuis localStorage:', error);
  }
}

function saveAppStateToStorage() {
  try {
    const stateToSave = {
      favorites: appState.favorites,
      compareList: appState.compareList,
      selectedBudget: appState.selectedBudget,
      selectedBudgetValue: appState.selectedBudgetValue,
      selectedTypes: appState.selectedTypes,
      theme: appState.theme
    };
    localStorage.setItem('runningzone_state', JSON.stringify(stateToSave));
  } catch (error) {
    console.warn('Erreur lors de la sauvegarde:', error);
  }
}

function saveContactMessages() {
  try {
    localStorage.setItem('runningzone_messages', JSON.stringify(appState.contactMessages));
  } catch (error) {
    console.warn('Erreur lors de la sauvegarde des messages:', error);
  }
}

// === SYSTÈME DE THÈME ===
function setupTheme() {
  const themeToggle = document.getElementById('theme-toggle');
  
  // Appliquer le thème initial
  applyTheme(appState.theme);
  
  if (themeToggle) {
    themeToggle.addEventListener('click', toggleTheme);
  }
}

function toggleTheme() {
  const currentTheme = document.documentElement.getAttribute('data-color-scheme');
  const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
  
  appState.theme = newTheme;
  applyTheme(newTheme);
  saveAppStateToStorage();
  
  showToast(`Thème ${newTheme === 'dark' ? 'sombre' : 'clair'} activé`, 'info');
}

function applyTheme(theme) {
  if (theme === 'auto') {
    document.documentElement.removeAttribute('data-color-scheme');
  } else {
    document.documentElement.setAttribute('data-color-scheme', theme);
  }
}

// === NAVIGATION PREMIUM ===
function setupNavigation() {
  // Délégation d'événements pour la navigation
  document.addEventListener('click', handleNavigation);
  
  // Navbar toggle pour mobile
  const navToggle = document.querySelector('.navbar__toggle');
  if (navToggle) {
    navToggle.addEventListener('click', toggleMobileMenu);
  }
}

function handleNavigation(e) {
  // Navigation par attribut data-page
  const targetPage = e.target.closest('[data-page]')?.getAttribute('data-page');
  if (targetPage) {
    e.preventDefault();
    navigateToPage(targetPage);
    return;
  }
  
  // Boutons spéciaux
  if (e.target.id === 'restart-analysis' || e.target.closest('#restart-analysis')) {
    e.preventDefault();
    resetAnalysis();
    return;
  }
}

function navigateToPage(pageName) {
  console.log(`📍 Navigation vers: ${pageName}`);
  
  // Validation de la page
  const targetPage = document.getElementById(pageName);
  if (!targetPage) {
    console.error(`❌ Page non trouvée: ${pageName}`);
    return;
  }
  
  // Masquer toutes les pages
  document.querySelectorAll('.page').forEach(page => {
    page.classList.remove('active');
  });
  
  // Afficher la page cible
  targetPage.classList.add('active');
  appState.currentPage = pageName;
  
  // Mettre à jour la navigation active
  updateActiveNavLink(pageName);
  
  // Actions spécifiques par page
  handlePageSpecificActions(pageName);
  
  // Interface updates
  updateBreadcrumb();
  updateProgressFlow();
  window.scrollTo({ top: 0, behavior: 'smooth' });
  
  console.log(`✅ Page active: ${pageName}`);
}

function updateActiveNavLink(pageName) {
  document.querySelectorAll('.nav-link-premium').forEach(link => {
    link.classList.remove('active');
  });
  
  const activeLink = document.querySelector(`[data-page="${pageName}"].nav-link-premium`);
  if (activeLink) {
    activeLink.classList.add('active');
  }
}

function handlePageSpecificActions(pageName) {
  switch(pageName) {
    case 'budget':
      setTimeout(() => {
        updateBudgetStatus();
        enableContinueButton();
      }, 100);
      break;
      
    case 'types':
      setTimeout(() => {
        updateTypesStatus();
        updateTypeSelection();
      }, 100);
      break;
      
    case 'recommendations':
      if (appState.filteredShoes.length === 0) {
        generateRecommendations();
      }
      break;
      
    case 'favorites':
      renderFavorites();
      break;
      
    case 'compare':
      renderComparator();
      break;
      
    case 'contact':
      renderContactPage();
      break;
      
    case 'admin':
      if (!appState.isLoggedIn) {
        showAdminLogin();
      }
      break;
  }
}

function updateBreadcrumb() {
  const breadcrumb = document.getElementById('breadcrumb');
  if (!breadcrumb) return;
  
  const pageNames = {
    'home': '🏠 Accueil',
    'budget': '💰 Budget',
    'types': '🎯 Types de course',
    'recommendations': '⭐ Recommandations',
    'compare': '⚖️ Comparateur',
    'favorites': '❤️ Favoris',
    'contact': '📞 Contact',
    'admin': '⚙️ Administration'
  };
  
  const currentPageName = pageNames[appState.currentPage] || 'Page';
  
  if (appState.currentPage === 'home') {
    breadcrumb.innerHTML = `<span class="breadcrumb-item active">${currentPageName}</span>`;
  } else {
    breadcrumb.innerHTML = `
      <a href="#" class="breadcrumb-item" data-page="home">🏠 Accueil</a>
      <span class="breadcrumb-separator">›</span>
      <span class="breadcrumb-item active">${currentPageName}</span>
    `;
  }
}

function updateProgressFlow() {
  const steps = document.querySelectorAll('.flow-step');
  if (!steps.length) return;
  
  const stepMap = {
    'home': 1,
    'budget': 1,
    'types': 2,
    'recommendations': 3,
    'compare': 3,
    'favorites': 3
  };
  
  const currentStep = stepMap[appState.currentPage] || 1;
  appState.currentStep = currentStep;
  
  steps.forEach((step, index) => {
    const stepNumber = index + 1;
    step.classList.remove('active', 'completed');
    
    if (stepNumber < currentStep) {
      step.classList.add('completed');
    } else if (stepNumber === currentStep) {
      step.classList.add('active');
    }
  });
}

// === SÉLECTION DE BUDGET PREMIUM ===
function setupBudgetSelector() {
  const slider = document.getElementById('budget-slider');
  const budgetValue = document.getElementById('budget-value');
  const continueBtn = document.getElementById('continue-to-types');
  const insightMessage = document.getElementById('insight-message');
  
  if (slider && budgetValue) {
    // Initialisation
    slider.value = appState.selectedBudgetValue;
    budgetValue.textContent = `${appState.selectedBudgetValue}€`;
    
    // Événement slider
    slider.addEventListener('input', (e) => {
      const value = parseInt(e.target.value);
      appState.selectedBudgetValue = value;
      budgetValue.textContent = `${value}€`;
      
      // Déterminer la gamme de budget
      determineBudgetRange(value);
      updateBudgetButtons();
      updateBudgetStatus();
      enableContinueButton();
      
      // Conseil IA
      if (insightMessage) {
        updateBudgetInsight(value);
      }
      
      console.log(`💰 Budget: ${value}€, Gamme: ${appState.selectedBudget}`);
    });
  }
  
  if (continueBtn) {
    continueBtn.addEventListener('click', (e) => {
      e.preventDefault();
      
      if (!appState.selectedBudget) {
        determineBudgetRange(appState.selectedBudgetValue);
      }
      
      saveAppStateToStorage();
      showToast('Budget configuré avec succès! 🎯', 'success');
      navigateToPage('types');
    });
  }
  
  // Rendu initial des catégories de budget
  renderBudgetCategories();
}

function determineBudgetRange(value) {
  let newRange;
  if (value <= 100) {
    newRange = '100-150'; // Ajusté car pas de chaussures sous 100€
  } else if (value <= 150) {
    newRange = '100-150';
  } else if (value <= 200) {
    newRange = '150-200';
  } else {
    newRange = '200+';
  }
  
  appState.selectedBudget = newRange;
}

function updateBudgetInsight(value) {
  const insightMessage = document.getElementById('insight-message');
  if (!insightMessage) return;
  
  let message = '';
  
  if (value <= 120) {
    message = 'Budget d\'entrée idéal pour débuter. Chaussures polyvalentes et accessibles.';
  } else if (value <= 180) {
    message = 'Gamme intermédiaire parfaite. Excellent rapport qualité-prix avec technologies avancées.';
  } else if (value <= 250) {
    message = 'Budget premium. Accès aux dernières innovations et matériaux haut de gamme.';
  } else {
    message = 'Budget élite. Chaussures de compétition avec les technologies les plus avancées.';
  }
  
  insightMessage.textContent = message;
}

function renderBudgetCategories() {
  const grid = document.getElementById('budget-categories');
  if (!grid) return;
  
  grid.innerHTML = appData.budget_ranges.map(range => `
    <div class="budget-category" data-budget="${range.id}" onclick="selectBudgetRange('${range.id}')">
      <div class="category-label">${range.label}</div>
      <div class="category-description">${range.description}</div>
    </div>
  `).join('');
  
  updateBudgetButtons();
}

window.selectBudgetRange = function(budgetId) {
  appState.selectedBudget = budgetId;
  console.log(`💰 Gamme sélectionnée: ${budgetId}`);
  
  updateBudgetButtons();
  updateBudgetStatus();
  enableContinueButton();
  
  // Mettre à jour le slider
  const slider = document.getElementById('budget-slider');
  const budgetValue = document.getElementById('budget-value');
  
  if (slider && budgetValue) {
    let value = 150;
    switch(budgetId) {
      case '50-100': value = 75; break;
      case '100-150': value = 125; break;
      case '150-200': value = 175; break;
      case '200+': value = 225; break;
    }
    
    slider.value = value;
    appState.selectedBudgetValue = value;
    budgetValue.textContent = `${value}€`;
    
    const insightMessage = document.getElementById('insight-message');
    if (insightMessage) {
      updateBudgetInsight(value);
    }
  }
};

function updateBudgetButtons() {
  document.querySelectorAll('.budget-category').forEach(btn => {
    btn.classList.remove('selected');
  });
  
  if (appState.selectedBudget) {
    const selectedBtn = document.querySelector(`[data-budget="${appState.selectedBudget}"]`);
    if (selectedBtn) {
      selectedBtn.classList.add('selected');
    }
  }
}

function updateBudgetStatus() {
  const status = document.getElementById('budget-status');
  if (!status) return;
  
  if (appState.selectedBudget) {
    const range = appData.budget_ranges.find(r => r.id === appState.selectedBudget);
    status.innerHTML = `
      <span class="status-icon">✅</span>
      <span class="status-text">Budget optimal: ${range ? range.label : appState.selectedBudgetValue + '€'}</span>
    `;
    status.className = 'status-indicator success';
  } else {
    status.innerHTML = `
      <span class="status-icon">⚠️</span>
      <span class="status-text">Définissez votre budget pour continuer</span>
    `;
    status.className = 'status-indicator warning';
  }
}

function enableContinueButton() {
  const continueBtn = document.getElementById('continue-to-types');
  if (continueBtn) {
    continueBtn.disabled = false;
  }
}

// === SÉLECTION DE TYPES PREMIUM ===
function setupTypesSelector() {
  const generateBtn = document.getElementById('generate-recommendations');
  
  if (generateBtn) {
    generateBtn.addEventListener('click', (e) => {
      e.preventDefault();
      
      if (appState.selectedTypes.length > 0) {
        showLoadingOverlay('Analyse IA en cours...', 'Notre intelligence artificielle analyse vos préférences');
        
        setTimeout(() => {
          generateRecommendations();
          hideLoadingOverlay();
          navigateToPage('recommendations');
          showToast(`${appState.filteredShoes.length} recommandations générées! 🎯`, 'success');
        }, 2000);
      } else {
        showToast('Sélectionnez au moins un type de course 📝', 'warning');
      }
    });
  }
  
  renderTypesGrid();
}

function renderTypesGrid() {
  const grid = document.getElementById('types-grid');
  if (!grid) return;
  
  grid.innerHTML = appData.running_types.map(type => `
    <div class="type-card-premium" data-type="${type.id}" onclick="toggleTypeSelection('${type.id}')">
      <div class="type-icon-premium">${type.icon}</div>
      <h3 class="type-name-premium">${type.name}</h3>
      <p class="type-description-premium">${type.description}</p>
    </div>
  `).join('');
  
  updateTypeSelection();
}

window.toggleTypeSelection = function(typeId) {
  const index = appState.selectedTypes.indexOf(typeId);
  
  if (index > -1) {
    appState.selectedTypes.splice(index, 1);
    console.log(`➖ Type retiré: ${typeId}`);
  } else {
    if (appState.selectedTypes.length < 3) {
      appState.selectedTypes.push(typeId);
      console.log(`➕ Type ajouté: ${typeId}`);
    } else {
      showToast('Maximum 3 types de course sélectionnables 📏', 'warning');
      return;
    }
  }
  
  updateTypeSelection();
  updateTypesStatus();
  saveAppStateToStorage();
};

function updateTypeSelection() {
  const countElement = document.getElementById('selected-count');
  const generateBtn = document.getElementById('generate-recommendations');
  
  if (countElement) {
    countElement.textContent = appState.selectedTypes.length;
  }
  
  if (generateBtn) {
    generateBtn.disabled = appState.selectedTypes.length === 0;
  }
  
  // Mettre à jour l'affichage des cartes
  document.querySelectorAll('.type-card-premium').forEach(card => {
    const typeId = card.dataset.type;
    if (appState.selectedTypes.includes(typeId)) {
      card.classList.add('selected');
    } else {
      card.classList.remove('selected');
    }
  });
}

function updateTypesStatus() {
  const status = document.getElementById('types-status');
  if (!status) return;
  
  if (appState.selectedTypes.length > 0) {
    const typeNames = appState.selectedTypes.map(id => {
      const type = appData.running_types.find(t => t.id === id);
      return type ? type.name : id;
    }).join(', ');
    
    status.innerHTML = `
      <span class="status-icon">✅</span>
      <span class="status-text">${appState.selectedTypes.length} type(s): ${typeNames}</span>
    `;
    status.className = 'status-indicator success';
  } else {
    status.innerHTML = `
      <span class="status-icon">⚠️</span>
      <span class="status-text">Sélectionnez vos types de course préférés</span>
    `;
    status.className = 'status-indicator warning';
  }
}

// === SYSTÈME DE RECOMMANDATIONS IA ===
function setupRecommendations() {
  setupRecommendationFilters();
}

function generateRecommendations() {
  console.log('🧠 === GÉNÉRATION RECOMMANDATIONS IA ===');
  console.log('Budget:', appState.selectedBudget);
  console.log('Types:', appState.selectedTypes);
  
  // S'assurer qu'un budget est défini
  if (!appState.selectedBudget) {
    determineBudgetRange(appState.selectedBudgetValue);
  }
  
  const recommendations = filterAndScoreShoes();
  appState.filteredShoes = recommendations;
  
  console.log(`🎯 ${recommendations.length} recommandations générées`);
  
  renderRecommendations(recommendations);
  updateRecommendationsSummary();
}

function filterAndScoreShoes() {
  let shoes = [...appData.shoes];
  
  // 1. Filtre par budget
  if (appState.selectedBudget) {
    shoes = shoes.filter(shoe => shoe.budget_range === appState.selectedBudget);
  }
  
  // 2. Filtre par types avec logique étendue
  if (appState.selectedTypes.length > 0) {
    shoes = shoes.filter(shoe => {
      return appState.selectedTypes.some(selectedType => {
        return shoe.types.some(shoeType => {
          // Correspondances directes
          if (selectedType === shoeType) return true;
          
          // Correspondances étendues pour compatibilité
          const compatibilityMap = {
            'salle': ['route', 'debutant', 'quotidien'],
            'trail': ['randonnee'],
            'route': ['quotidien', 'endurance', 'recovery', 'debutant'],
            'competition': ['entrainement', 'route'],
            'randonnee': ['trail'],
            'endurance': ['route', 'recovery'],
            'debutant': ['route', 'quotidien'],
            'recovery': ['endurance', 'route'],
            'entrainement': ['competition', 'route'],
            'quotidien': ['route', 'debutant']
          };
          
          const compatibleTypes = compatibilityMap[selectedType] || [];
          return compatibleTypes.includes(shoeType);
        });
      });
    });
  }
  
  // 3. Calcul du score IA amélioré
  shoes = shoes.map(shoe => {
    let aiScore = shoe.aiScore || 80;
    
    // Bonus pour correspondance exacte des types
    const exactMatches = appState.selectedTypes.filter(type => shoe.types.includes(type));
    aiScore += exactMatches.length * 5;
    
    // Bonus pour les chaussures tendance
    if (shoe.trending) aiScore += 3;
    if (shoe.new) aiScore += 2;
    
    // Bonus pour note élevée
    aiScore += (shoe.rating - 4) * 10;
    
    // Bonus pour popularité (reviews)
    if (shoe.reviews > 300) aiScore += 2;
    
    return { ...shoe, calculatedAiScore: Math.min(100, aiScore) };
  });
  
  // 4. Tri par score IA
  shoes.sort((a, b) => b.calculatedAiScore - a.calculatedAiScore);
  
  return shoes;
}

function renderRecommendations(shoes) {
  const grid = document.getElementById('shoes-grid');
  const resultsInfo = document.getElementById('results-info');
  
  if (resultsInfo) {
    resultsInfo.textContent = `${shoes.length} chaussure${shoes.length > 1 ? 's' : ''} trouvée${shoes.length > 1 ? 's' : ''}`;
  }
  
  if (grid) {
    if (shoes.length === 0) {
      grid.innerHTML = `
        <div class="no-results">
          <div class="empty-icon">😔</div>
          <h3>Aucune chaussure trouvée</h3>
          <p>Essayez d'ajuster vos critères pour obtenir plus de résultats.</p>
          <div class="no-results-actions">
            <button class="btn-premium btn-primary" data-page="budget">Modifier budget</button>
            <button class="btn-premium btn-secondary" data-page="types">Modifier types</button>
          </div>
        </div>
      `;
    } else {
      grid.innerHTML = shoes.map(shoe => createShoeCardPremium(shoe)).join('');
    }
  }
}

function createShoeCardPremium(shoe) {
  const isFavorite = appState.favorites.includes(shoe.id);
  const isInCompare = appState.compareList.includes(shoe.id);
  const stars = '⭐'.repeat(Math.floor(shoe.rating));
  const aiScore = shoe.calculatedAiScore || shoe.aiScore;
  
  return `
    <div class="shoe-card-premium" data-shoe-id="${shoe.id}">
      <div class="shoe-image-premium">
        <img src="${shoe.image}" alt="${shoe.name}" onerror="this.style.display='none'">
        <div class="shoe-rating-premium">${stars} ${shoe.rating}</div>
        <button class="shoe-favorite-premium ${isFavorite ? 'active' : ''}" 
                onclick="toggleFavorite(${shoe.id})" 
                title="${isFavorite ? 'Retirer des favoris' : 'Ajouter aux favoris'}">
          ${isFavorite ? '❤️' : '🤍'}
        </button>
      </div>
      
      <div class="shoe-content-premium">
        <div class="shoe-brand-premium">${shoe.brand}</div>
        <h3 class="shoe-name-premium">${shoe.name}</h3>
        
        <div class="shoe-price-premium">
          ${shoe.price}€
          ${shoe.originalPrice && shoe.originalPrice > shoe.price ? 
            `<span class="original-price">${shoe.originalPrice}€</span>` : ''}
        </div>
        
        <p class="shoe-description-premium">${shoe.description}</p>
        
        <div class="shoe-specs-premium">
          <div class="spec-item-premium">
            <span>Poids:</span>
            <strong>${shoe.weight}</strong>
          </div>
          <div class="spec-item-premium">
            <span>Drop:</span>
            <strong>${shoe.drop}</strong>
          </div>
          <div class="spec-item-premium">
            <span>Score IA:</span>
            <strong>${aiScore}/100</strong>
          </div>
          <div class="spec-item-premium">
            <span>Avis:</span>
            <strong>${shoe.reviews}</strong>
          </div>
        </div>
        
        <div class="shoe-tags-premium">
          ${shoe.characteristics.slice(0, 3).map(char => 
            `<span class="shoe-tag-premium">${char}</span>`
          ).join('')}
        </div>
        
        <div class="shoe-actions-premium">
          <button class="btn-premium btn-outline" onclick="showShoeDetails(${shoe.id})">
            <span class="btn-icon">👁️</span>
            <span>Détails</span>
          </button>
          <button class="btn-premium btn-secondary ${isInCompare ? 'active' : ''}" 
                  onclick="toggleCompare(${shoe.id})"
                  title="${isInCompare ? 'Retirer de la comparaison' : 'Ajouter à la comparaison'}">
            <span class="btn-icon">⚖️</span>
            <span>${isInCompare ? 'Comparé' : 'Comparer'}</span>
          </button>
        </div>
      </div>
    </div>
  `;
}

function updateRecommendationsSummary() {
  const summary = document.getElementById('recommendations-summary');
  if (!summary) return;
  
  const budgetLabel = appData.budget_ranges.find(b => b.id === appState.selectedBudget)?.label || 'Non spécifié';
  const typesLabels = appState.selectedTypes.map(typeId => {
    const type = appData.running_types.find(t => t.id === typeId);
    return type ? type.name : typeId;
  }).join(', ');
  
  summary.innerHTML = `
    <div class="summary-content">
      <div class="summary-criteria">
        <strong>🎯 Vos critères :</strong> Budget ${budgetLabel} • Types: ${typesLabels}
      </div>
      <div class="summary-results">
        <strong>🧠 Analyse IA :</strong> ${appState.filteredShoes.length} chaussure${appState.filteredShoes.length > 1 ? 's' : ''} 
        correspond${appState.filteredShoes.length > 1 ? 'ent' : ''} parfaitement à votre profil
      </div>
    </div>
  `;
}

// === FILTRES ET RECHERCHE ===
function setupRecommendationFilters() {
  const searchInput = document.getElementById('search-input');
  const sortSelect = document.getElementById('sort-select');
  const advancedFiltersBtn = document.getElementById('advanced-filters');
  
  if (searchInput) {
    let searchTimeout;
    searchInput.addEventListener('input', (e) => {
      clearTimeout(searchTimeout);
      searchTimeout = setTimeout(() => {
        searchRecommendations(e.target.value);
      }, 300);
    });
  }
  
  if (sortSelect) {
    sortSelect.addEventListener('change', (e) => {
      sortRecommendations(e.target.value);
    });
  }
  
  if (advancedFiltersBtn) {
    advancedFiltersBtn.addEventListener('click', () => {
      showToast('Filtres avancés à venir! 🔧', 'info');
    });
  }
}

function searchRecommendations(searchTerm) {
  appState.lastSearch = searchTerm;
  const shoes = appState.filteredShoes;
  
  if (!searchTerm.trim()) {
    renderRecommendations(shoes);
    return;
  }
  
  const searchResults = shoes.filter(shoe => {
    const searchableText = [
      shoe.name,
      shoe.brand,
      shoe.description,
      shoe.technology,
      ...shoe.characteristics
    ].join(' ').toLowerCase();
    
    return searchableText.includes(searchTerm.toLowerCase());
  });
  
  renderRecommendations(searchResults);
  showToast(`${searchResults.length} résultat${searchResults.length > 1 ? 's' : ''} pour "${searchTerm}"`, 'info');
}

function sortRecommendations(sortType) {
  const shoes = [...appState.filteredShoes];
  
  let sortedShoes;
  
  switch(sortType) {
    case 'ai-score':
      sortedShoes = shoes.sort((a, b) => (b.calculatedAiScore || b.aiScore) - (a.calculatedAiScore || a.aiScore));
      break;
    case 'price-asc':
      sortedShoes = shoes.sort((a, b) => a.price - b.price);
      break;
    case 'price-desc':
      sortedShoes = shoes.sort((a, b) => b.price - a.price);
      break;
    case 'weight':
      sortedShoes = shoes.sort((a, b) => parseInt(a.weight) - parseInt(b.weight));
      break;
    case 'rating':
    default:
      sortedShoes = shoes.sort((a, b) => b.rating - a.rating);
      break;
  }
  
  renderRecommendations(sortedShoes);
}

// === SYSTÈME DE FAVORIS ===
function setupFavorites() {
  updateFavoritesCount();
}

window.toggleFavorite = function(shoeId) {
  const index = appState.favorites.indexOf(shoeId);
  
  if (index > -1) {
    appState.favorites.splice(index, 1);
    showToast('Retiré des favoris 💔', 'info');
  } else {
    appState.favorites.push(shoeId);
    showToast('Ajouté aux favoris ❤️', 'success');
  }
  
  updateFavoritesCount();
  saveAppStateToStorage();
  
  // Mettre à jour l'affichage si on est sur les recommandations
  if (appState.currentPage === 'recommendations' && appState.filteredShoes.length > 0) {
    renderRecommendations(appState.filteredShoes);
  }
  
  // Mettre à jour l'affichage si on est sur les favoris
  if (appState.currentPage === 'favorites') {
    renderFavorites();
  }
};

function updateFavoritesCount() {
  const countElement = document.getElementById('favorites-count');
  if (countElement) {
    countElement.textContent = appState.favorites.length;
    countElement.style.display = appState.favorites.length > 0 ? 'block' : 'none';
  }
}

function renderFavorites() {
  const grid = document.getElementById('favorites-grid');
  const totalElement = document.getElementById('favorites-total');
  const avgPriceElement = document.getElementById('favorites-avg-price');
  
  if (!grid) return;
  
  const favoriteShoes = appData.shoes.filter(shoe => appState.favorites.includes(shoe.id));
  
  // Mise à jour des statistiques
  if (totalElement) {
    totalElement.textContent = favoriteShoes.length;
  }
  
  if (avgPriceElement && favoriteShoes.length > 0) {
    const avgPrice = Math.round(favoriteShoes.reduce((sum, shoe) => sum + shoe.price, 0) / favoriteShoes.length);
    avgPriceElement.textContent = `${avgPrice}€`;
  }
  
  if (favoriteShoes.length === 0) {
    grid.innerHTML = `
      <div class="empty-favorites">
        <div class="empty-icon">💔</div>
        <h3>Aucun favori pour le moment</h3>
        <p>Ajoutez des chaussures à vos favoris depuis les recommandations</p>
        <button class="btn-premium btn-primary" data-page="recommendations">
          <span>Découvrir des chaussures</span>
        </button>
      </div>
    `;
  } else {
    grid.innerHTML = favoriteShoes.map(shoe => createShoeCardPremium(shoe)).join('');
  }
}

// === SYSTÈME DE COMPARAISON ===
function setupComparator() {
  // Configuration du comparateur
}

window.toggleCompare = function(shoeId) {
  const index = appState.compareList.indexOf(shoeId);
  
  if (index > -1) {
    appState.compareList.splice(index, 1);
    showToast('Retiré de la comparaison ⚖️', 'info');
  } else {
    if (appState.compareList.length >= 4) {
      showToast('Maximum 4 chaussures en comparaison 📏', 'warning');
      return;
    }
    
    appState.compareList.push(shoeId);
    showToast('Ajouté à la comparaison ⚖️', 'success');
  }
  
  saveAppStateToStorage();
  
  // Mettre à jour l'affichage
  if (appState.currentPage === 'recommendations' && appState.filteredShoes.length > 0) {
    renderRecommendations(appState.filteredShoes);
  }
  
  if (appState.currentPage === 'compare') {
    renderComparator();
  }
};

function renderComparator() {
  const selector = document.getElementById('compare-selector');
  const container = document.getElementById('compare-container');
  
  if (!selector || !container) return;
  
  // Rendu du sélecteur
  selector.innerHTML = appData.shoes.map(shoe => {
    const isSelected = appState.compareList.includes(shoe.id);
    return `
      <label class="compare-shoe-option ${isSelected ? 'selected' : ''}">
        <input type="checkbox" ${isSelected ? 'checked' : ''} 
               onchange="toggleCompare(${shoe.id})">
        <img src="${shoe.image}" alt="${shoe.name}" onerror="this.style.display='none'">
        <div class="shoe-info">
          <strong>${shoe.name}</strong>
          <span>${shoe.brand} - ${shoe.price}€</span>
        </div>
      </label>
    `;
  }).join('');
  
  // Rendu du tableau de comparaison
  if (appState.compareList.length === 0) {
    container.innerHTML = `
      <div class="empty-compare">
        <div class="empty-icon">⚖️</div>
        <h3>Commencez votre comparaison</h3>
        <p>Sélectionnez des chaussures ci-dessus pour voir la comparaison détaillée</p>
      </div>
    `;
  } else {
    const compareShoes = appData.shoes.filter(shoe => appState.compareList.includes(shoe.id));
    container.innerHTML = createComparisonTable(compareShoes);
  }
}

function createComparisonTable(shoes) {
  if (shoes.length === 0) return '';
  
  const fields = [
    { key: 'image', label: 'Photo', type: 'image' },
    { key: 'name', label: 'Nom', type: 'text' },
    { key: 'brand', label: 'Marque', type: 'text' },
    { key: 'price', label: 'Prix', type: 'price' },
    { key: 'rating', label: 'Note', type: 'rating' },
    { key: 'weight', label: 'Poids', type: 'text' },
    { key: 'drop', label: 'Drop', type: 'text' },
    { key: 'technology', label: 'Technologie', type: 'text' },
    { key: 'types', label: 'Types', type: 'array' }
  ];
  
  return `
    <div class="comparison-table">
      <table class="table-premium">
        <thead>
          <tr>
            <th>Critère</th>
            ${shoes.map(shoe => `<th>${shoe.name}</th>`).join('')}
          </tr>
        </thead>
        <tbody>
          ${fields.map(field => `
            <tr>
              <td><strong>${field.label}</strong></td>
              ${shoes.map(shoe => `
                <td>${formatComparisonValue(shoe[field.key], field.type)}</td>
              `).join('')}
            </tr>
          `).join('')}
        </tbody>
      </table>
    </div>
  `;
}

function formatComparisonValue(value, type) {
  switch(type) {
    case 'image':
      return `<img src="${value}" alt="Chaussure" style="width: 60px; height: 60px; object-fit: cover; border-radius: 8px;">`;
    case 'price':
      return `<strong>${value}€</strong>`;
    case 'rating':
      return `⭐ ${value}`;
    case 'array':
      if (Array.isArray(value)) {
        return value.join(', ');
      }
      return value;
    default:
      return value;
  }
}

// === DÉTAILS DES CHAUSSURES ===
window.showShoeDetails = function(shoeId) {
  const shoe = appData.shoes.find(s => s.id === shoeId);
  if (!shoe) return;
  
  const runningTypes = shoe.types.map(typeId => {
    const type = appData.running_types.find(t => t.id === typeId);
    return type ? type.name : typeId;
  }).join(', ');
  
  const details = `
🏃‍♂️ ${shoe.name} - ${shoe.brand}

💰 Prix: ${shoe.price}€ ${shoe.originalPrice && shoe.originalPrice > shoe.price ? `(au lieu de ${shoe.originalPrice}€)` : ''}
⭐ Note: ${shoe.rating}/5 (${shoe.reviews} avis)
⚖️ Poids: ${shoe.weight}
📐 Drop: ${shoe.drop}
🧠 Score IA: ${shoe.calculatedAiScore || shoe.aiScore}/100

🎯 Types compatibles: ${runningTypes}

📝 Description: ${shoe.description}

🔬 Technologie: ${shoe.technology}

✨ Caractéristiques: ${shoe.characteristics.join(', ')}

📦 Stock: ${shoe.stock} unités
📊 Ventes: ${shoe.sales}
${shoe.trending ? '🔥 Tendance' : ''} ${shoe.new ? '🆕 Nouveau' : ''}
  `;
  
  alert(details);
};

// === NOUVELLE SECTION CONTACT/FAQ PREMIUM ===
function renderContactPage() {
  // Rendre la FAQ
  renderFAQPremium();
  
  // Rendre les réseaux sociaux
  renderSocialMediaPremium();
  
  // Configuration de la recherche FAQ
  setupFAQSearch();
  
  // Configuration du formulaire de contact
  setupContactFormPremium();
  
  // Mettre à jour les statistiques
  updateContactStats();
  
  console.log('📞 Page Contact rendue avec succès');
}

function renderFAQPremium() {
  const faqList = document.getElementById('faq-list-premium');
  if (!faqList) return;
  
  faqList.innerHTML = appData.faq.map((item, index) => `
    <div class="faq-item-premium" data-faq="${index}" data-category="${item.category}">
      <button class="faq-question-premium" onclick="toggleFAQPremium(${index})">
        <div class="question-content">
          <span class="faq-category-badge">${getCategoryLabel(item.category)}</span>
          <span class="question-text">${item.question}</span>
        </div>
        <span class="faq-toggle-icon">▼</span>
      </button>
      <div class="faq-answer-premium">
        <p>${item.answer}</p>
      </div>
    </div>
  `).join('');
}

function getCategoryLabel(categoryId) {
  const labels = {
    'shoes': 'Chaussures',
    'tech': 'Technique', 
    'maintenance': 'Entretien',
    'health': 'Santé',
    'all': 'Toutes'
  };
  return labels[categoryId] || categoryId;
}

window.toggleFAQPremium = function(index) {
  const faqItem = document.querySelector(`[data-faq="${index}"]`);
  if (faqItem) {
    const isActive = faqItem.classList.contains('active');
    
    // Fermer toutes les autres FAQ
    document.querySelectorAll('.faq-item-premium.active').forEach(item => {
      if (item !== faqItem) {
        item.classList.remove('active');
      }
    });
    
    // Toggle la FAQ actuelle
    faqItem.classList.toggle('active', !isActive);
  }
};

function setupFAQSearch() {
  const searchInput = document.getElementById('faq-search');
  const clearBtn = document.getElementById('clear-faq-search');
  const categoryBtns = document.querySelectorAll('.category-btn');
  
  if (searchInput) {
    let searchTimeout;
    searchInput.addEventListener('input', (e) => {
      clearTimeout(searchTimeout);
      searchTimeout = setTimeout(() => {
        filterFAQ(e.target.value, getActiveCategory());
        toggleClearButton(e.target.value);
      }, 300);
    });
  }
  
  if (clearBtn) {
    clearBtn.addEventListener('click', () => {
      searchInput.value = '';
      filterFAQ('', getActiveCategory());
      toggleClearButton('');
      searchInput.focus();
    });
  }
  
  categoryBtns.forEach(btn => {
    btn.addEventListener('click', (e) => {
      const category = e.target.dataset.category;
      setActiveCategory(category);
      filterFAQ(searchInput ? searchInput.value : '', category);
    });
  });
}

function toggleClearButton(searchTerm) {
  const clearBtn = document.getElementById('clear-faq-search');
  if (clearBtn) {
    clearBtn.style.display = searchTerm.trim() ? 'block' : 'none';
  }
}

function getActiveCategory() {
  const activeBtn = document.querySelector('.category-btn.active');
  return activeBtn ? activeBtn.dataset.category : 'all';
}

function setActiveCategory(category) {
  document.querySelectorAll('.category-btn').forEach(btn => {
    btn.classList.remove('active');
  });
  
  const targetBtn = document.querySelector(`[data-category="${category}"]`);
  if (targetBtn) {
    targetBtn.classList.add('active');
  }
}

function filterFAQ(searchTerm, category) {
  const faqItems = document.querySelectorAll('.faq-item-premium');
  let visibleCount = 0;
  
  faqItems.forEach(item => {
    const itemCategory = item.dataset.category;
    const questionText = item.querySelector('.question-text').textContent.toLowerCase();
    const answerText = item.querySelector('.faq-answer-premium p').textContent.toLowerCase();
    
    const matchesCategory = category === 'all' || itemCategory === category;
    const matchesSearch = !searchTerm.trim() || 
                         questionText.includes(searchTerm.toLowerCase()) || 
                         answerText.includes(searchTerm.toLowerCase());
    
    if (matchesCategory && matchesSearch) {
      item.style.display = 'block';
      visibleCount++;
    } else {
      item.style.display = 'none';
      item.classList.remove('active'); // Fermer si masqué
    }
  });
  
  // Affichage du compteur de résultats
  showFAQResults(visibleCount, searchTerm);
}

function showFAQResults(count, searchTerm) {
  // Vous pouvez ajouter un élément pour afficher le nombre de résultats si nécessaire
  if (searchTerm.trim() && count === 0) {
    showToast('Aucune question trouvée 🔍', 'info');
  }
}

function setupContactFormPremium() {
  const form = document.getElementById('contact-form-premium');
  const nameInput = document.getElementById('contact-name');
  const emailInput = document.getElementById('contact-email');
  const subjectInput = document.getElementById('contact-subject');
  const messageInput = document.getElementById('contact-message');
  const charCounter = document.getElementById('char-count');
  const submitBtn = document.getElementById('contact-submit-btn');
  
  if (form) {
    form.addEventListener('submit', handleContactSubmitPremium);
  }
  
  // Validation en temps réel
  if (nameInput) {
    nameInput.addEventListener('blur', () => validateField(nameInput, 'name'));
    nameInput.addEventListener('input', () => clearFieldError(nameInput, 'name'));
  }
  
  if (emailInput) {
    emailInput.addEventListener('blur', () => validateField(emailInput, 'email'));
    emailInput.addEventListener('input', () => clearFieldError(emailInput, 'email'));
  }
  
  if (subjectInput) {
    subjectInput.addEventListener('blur', () => validateField(subjectInput, 'subject'));
    subjectInput.addEventListener('change', () => clearFieldError(subjectInput, 'subject'));
  }
  
  if (messageInput) {
    messageInput.addEventListener('blur', () => validateField(messageInput, 'message'));
    messageInput.addEventListener('input', (e) => {
      clearFieldError(messageInput, 'message');
      updateCharCounter(e.target.value.length, charCounter);
      
      // Limiter à 500 caractères
      if (e.target.value.length > 500) {
        e.target.value = e.target.value.substring(0, 500);
        updateCharCounter(500, charCounter);
      }
    });
  }
  
  // Newsletter
  const newsletterBtn = document.querySelector('.newsletter-btn');
  if (newsletterBtn) {
    newsletterBtn.addEventListener('click', handleNewsletterSubscription);
  }
}

function validateField(input, fieldType) {
  const errorElement = document.getElementById(`${fieldType}-error`);
  let isValid = true;
  let errorMessage = '';
  
  switch(fieldType) {
    case 'name':
      if (!input.value.trim()) {
        errorMessage = 'Le nom est requis';
        isValid = false;
      } else if (input.value.trim().length < 2) {
        errorMessage = 'Le nom doit contenir au moins 2 caractères';
        isValid = false;
      }
      break;
      
    case 'email':
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!input.value.trim()) {
        errorMessage = 'L\'email est requis';
        isValid = false;
      } else if (!emailRegex.test(input.value.trim())) {
        errorMessage = 'Format d\'email invalide';
        isValid = false;
      }
      break;
      
    case 'subject':
      if (!input.value) {
        errorMessage = 'Veuillez sélectionner un sujet';
        isValid = false;
      }
      break;
      
    case 'message':
      if (!input.value.trim()) {
        errorMessage = 'Le message est requis';
        isValid = false;
      } else if (input.value.trim().length < 10) {
        errorMessage = 'Le message doit contenir au moins 10 caractères';
        isValid = false;
      }
      break;
  }
  
  if (errorElement) {
    errorElement.textContent = isValid ? '' : `❌ ${errorMessage}`;
  }
  
  input.classList.toggle('error', !isValid);
  return isValid;
}

function clearFieldError(input, fieldType) {
  const errorElement = document.getElementById(`${fieldType}-error`);
  if (errorElement) {
    errorElement.textContent = '';
  }
  input.classList.remove('error');
}

function updateCharCounter(count, counter) {
  if (counter) {
    counter.textContent = count;
    counter.style.color = count > 450 ? 'var(--color-warning)' : 'var(--color-text-secondary)';
  }
}

function handleContactSubmitPremium(e) {
  e.preventDefault();
  
  const formData = {
    name: document.getElementById('contact-name').value.trim(),
    email: document.getElementById('contact-email').value.trim(),
    subject: document.getElementById('contact-subject').value,
    message: document.getElementById('contact-message').value.trim()
  };
  
  // Validation complète
  const nameValid = validateField(document.getElementById('contact-name'), 'name');
  const emailValid = validateField(document.getElementById('contact-email'), 'email');
  const subjectValid = validateField(document.getElementById('contact-subject'), 'subject');
  const messageValid = validateField(document.getElementById('contact-message'), 'message');
  
  if (!nameValid || !emailValid || !subjectValid || !messageValid) {
    showToast('Veuillez corriger les erreurs du formulaire ❌', 'error');
    return;
  }
  
  // Animation de soumission
  const submitBtn = document.getElementById('contact-submit-btn');
  const submitText = submitBtn.querySelector('.submit-text');
  const submitLoader = submitBtn.querySelector('.submit-loader');
  
  submitBtn.disabled = true;
  submitText.textContent = 'Envoi en cours...';
  submitLoader.classList.remove('hidden');
  
  // Simulation d'envoi
  setTimeout(() => {
    // Créer le message
    const message = {
      id: Date.now(),
      ...formData,
      timestamp: new Date().toISOString(),
      status: 'unread',
      date: new Date().toLocaleDateString('fr-FR'),
      time: new Date().toLocaleTimeString('fr-FR')
    };
    
    // Ajouter à la liste des messages
    appState.contactMessages.unshift(message);
    saveContactMessages();
    updateMessagesCount();
    
    // Réinitialiser le formulaire
    e.target.reset();
    document.getElementById('char-count').textContent = '0';
    
    // Réinitialiser le bouton
    submitBtn.disabled = false;
    submitText.textContent = 'Envoyer le message';
    submitLoader.classList.add('hidden');
    
    // Afficher le message de succès
    showFormSuccess();
    
    showToast('Message envoyé avec succès! 📨', 'success');
    console.log('💬 Message sauvegardé:', message);
  }, 2000);
}

function showFormSuccess() {
  const successElement = document.getElementById('form-success');
  if (successElement) {
    successElement.classList.remove('hidden');
    
    setTimeout(() => {
      successElement.classList.add('hidden');
    }, 5000);
  }
}

function handleNewsletterSubscription(e) {
  e.preventDefault();
  const emailInput = e.target.parentElement.querySelector('.newsletter-input');
  const email = emailInput.value.trim();
  
  if (!email) {
    showToast('Veuillez saisir votre email 📧', 'warning');
    return;
  }
  
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    showToast('Format d\'email invalide ❌', 'error');
    return;
  }
  
  // Animation
  const originalText = e.target.textContent;
  e.target.textContent = 'Abonnement...';
  e.target.disabled = true;
  
  setTimeout(() => {
    emailInput.value = '';
    e.target.textContent = originalText;
    e.target.disabled = false;
    showToast('Abonnement confirmé! 📬', 'success');
  }, 1500);
}

function renderSocialMediaPremium() {
  const socialGrid = document.getElementById('social-grid-premium');
  if (!socialGrid) return;
  
  socialGrid.innerHTML = appData.social_media.map(social => `
    <div class="social-card-premium">
      <div class="social-icon-premium">${social.icon}</div>
      <h3 class="social-platform-premium">${social.platform}</h3>
      <div class="social-handle-premium">${social.handle}</div>
      <p class="social-description-premium">${social.description}</p>
      <a href="${social.url}" target="_blank" rel="noopener noreferrer" class="social-link-premium">
        <span>Suivre</span>
        <span>→</span>
      </a>
    </div>
  `).join('');
}

function updateMessagesCount() {
  const countElement = document.getElementById('messages-count');
  const unreadCount = appState.contactMessages.filter(msg => msg.status === 'unread').length;
  
  if (countElement) {
    countElement.textContent = unreadCount;
    countElement.style.display = unreadCount > 0 ? 'block' : 'none';
  }
  
  // Mettre à jour le badge dans l'admin aussi
  const adminCountElement = document.getElementById('admin-messages-count');
  if (adminCountElement) {
    adminCountElement.textContent = unreadCount;
    adminCountElement.style.display = unreadCount > 0 ? 'block' : 'none';
  }
}

function updateContactStats() {
  const totalMessagesElement = document.getElementById('total-messages-stat');
  if (totalMessagesElement) {
    const totalMessages = appState.contactMessages.length;
    totalMessagesElement.textContent = `${totalMessages} message${totalMessages > 1 ? 's' : ''} reçu${totalMessages > 1 ? 's' : ''}`;
  }
}

// === PANEL D'ADMINISTRATION PREMIUM ===
function setupAdminPanel() {
  const loginForm = document.getElementById('login-form');
  const logoutBtn = document.getElementById('logout-btn');
  const sidebarToggle = document.getElementById('sidebar-toggle');
  
  if (loginForm) {
    loginForm.addEventListener('submit', handleAdminLogin);
  }
  
  if (logoutBtn) {
    logoutBtn.addEventListener('click', handleAdminLogout);
  }
  
  if (sidebarToggle) {
    sidebarToggle.addEventListener('click', toggleSidebar);
  }
  
  setupAdminNavigation();
  setupShoesManagement();
  setupMessagesManagement();
}

function handleAdminLogin(e) {
  e.preventDefault();
  
  const username = document.getElementById('admin-username').value;
  const password = document.getElementById('admin-password').value;
  
  if (username === 'admin' && password === 'admin123') {
    appState.isLoggedIn = true;
    showAdminPanel();
    showToast('Connexion réussie! Bienvenue Admin 👋', 'success');
  } else {
    showAdminLoginError('Identifiants incorrects');
    showToast('Identifiants incorrects ❌', 'error');
  }
}

function handleAdminLogout() {
  appState.isLoggedIn = false;
  hideAdminPanel();
  navigateToPage('home');
  showToast('Déconnexion réussie 👋', 'info');
}

function showAdminLoginError(message) {
  const errorDiv = document.getElementById('login-error');
  if (errorDiv) {
    errorDiv.textContent = message;
    errorDiv.classList.remove('hidden');
    
    setTimeout(() => {
      errorDiv.classList.add('hidden');
    }, 3000);
  }
}

function showAdminPanel() {
  document.getElementById('admin-login').classList.add('hidden');
  document.getElementById('admin-panel').classList.remove('hidden');
  
  updateAdminStats();
  renderShoesTable();
  renderAdminCharts();
  renderAnalytics();
  renderAdminMessages();
}

function hideAdminPanel() {
  document.getElementById('admin-login').classList.remove('hidden');
  document.getElementById('admin-panel').classList.add('hidden');
  
  document.getElementById('login-form').reset();
}

function showAdminLogin() {
  if (appState.isLoggedIn) {
    showAdminPanel();
  } else {
    hideAdminPanel();
  }
}

function toggleSidebar() {
  const sidebar = document.getElementById('admin-sidebar');
  if (sidebar) {
    sidebar.classList.toggle('collapsed');
    appState.sidebarCollapsed = !appState.sidebarCollapsed;
  }
}

function setupAdminNavigation() {
  document.addEventListener('click', (e) => {
    const adminTab = e.target.closest('[data-admin-tab]');
    if (adminTab) {
      const tabName = adminTab.getAttribute('data-admin-tab');
      switchAdminTab(tabName);
    }
  });
}

function switchAdminTab(tabName) {
  // Mettre à jour les liens de navigation
  document.querySelectorAll('.sidebar-link').forEach(link => {
    link.classList.remove('active');
  });
  
  const activeLink = document.querySelector(`[data-admin-tab="${tabName}"]`);
  if (activeLink) {
    activeLink.classList.add('active');
  }
  
  // Mettre à jour le contenu
  document.querySelectorAll('.admin-content').forEach(content => {
    content.classList.remove('active');
  });
  
  const targetContent = document.getElementById(`admin-${tabName}`);
  if (targetContent) {
    targetContent.classList.add('active');
  }
  
  // Mettre à jour le titre
  const pageTitle = document.getElementById('admin-page-title');
  if (pageTitle) {
    const titles = {
      'dashboard': 'Tableau de bord',
      'shoes': 'Gestion des chaussures',
      'messages': 'Gestion des messages',
      'analytics': 'Analytics avancées',
      'users': 'Gestion utilisateurs',
      'settings': 'Paramètres système'
    };
    pageTitle.textContent = titles[tabName] || 'Administration';
  }
  
  // Actions spécifiques par onglet
  if (tabName === 'analytics') {
    renderAnalytics();
  } else if (tabName === 'shoes') {
    renderShoesTable();
  } else if (tabName === 'messages') {
    renderAdminMessages();
  }
}

function updateAdminStats() {
  const totalShoes = appData.shoes.length;
  const avgPrice = Math.round(appData.shoes.reduce((sum, shoe) => sum + shoe.price, 0) / totalShoes);
  const avgRating = (appData.shoes.reduce((sum, shoe) => sum + shoe.rating, 0) / totalShoes).toFixed(1);
  const totalMessages = appState.contactMessages.length;
  const newMessages = appState.contactMessages.filter(msg => msg.status === 'unread').length;
  
  const elements = {
    'total-shoes': totalShoes,
    'avg-price': `${avgPrice}€`,
    'avg-rating': `${avgRating}/5`,
    'total-users': '1.2k',
    'shoes-count': totalShoes,
    'total-messages-kpi': totalMessages,
    'total-messages-count': totalMessages,
    'new-messages-count': newMessages
  };
  
  Object.entries(elements).forEach(([id, value]) => {
    const element = document.getElementById(id);
    if (element) {
      element.textContent = value;
    }
  });
  
  // Mettre à jour le trend des messages
  const messagesTrend = document.getElementById('messages-trend');
  if (messagesTrend) {
    if (totalMessages === 0) {
      messagesTrend.textContent = 'Système activé';
      messagesTrend.className = 'kpi-trend';
    } else {
      messagesTrend.textContent = `+${totalMessages} reçus`;
      messagesTrend.className = 'kpi-trend up';
    }
  }
}

// === GESTION DES MESSAGES ADMIN ===
function setupMessagesManagement() {
  const exportBtn = document.getElementById('export-messages-csv');
  const markAllReadBtn = document.getElementById('mark-all-read');
  
  if (exportBtn) {
    exportBtn.addEventListener('click', exportMessagesToCSV);
  }
  
  if (markAllReadBtn) {
    markAllReadBtn.addEventListener('click', markAllMessagesAsRead);
  }
}

function renderAdminMessages() {
  const messagesList = document.getElementById('admin-messages-list');
  if (!messagesList) return;
  
  if (appState.contactMessages.length === 0) {
    messagesList.innerHTML = `
      <div class="empty-messages">
        <div class="empty-icon">💬</div>
        <h3>Aucun message pour le moment</h3>
        <p>Les messages de contact apparaîtront ici</p>
      </div>
    `;
    return;
  }
  
  messagesList.innerHTML = appState.contactMessages.map(message => `
    <div class="message-item ${message.status === 'unread' ? 'unread' : ''}">
      <div class="message-header">
        <div class="message-meta">
          <div class="message-sender">${message.name}</div>
          <div class="message-email">${message.email}</div>
        </div>
        <div class="message-date">
          ${message.date} à ${message.time}
          <div class="message-status ${message.status}">${message.status === 'unread' ? 'Non lu' : 'Lu'}</div>
        </div>
      </div>
      
      <div class="message-subject">
        Sujet: ${getSubjectLabel(message.subject)}
      </div>
      
      <div class="message-content">
        ${message.message}
      </div>
      
      <div class="message-actions">
        ${message.status === 'unread' ? 
          `<button class="btn-premium btn-sm" onclick="markMessageAsRead(${message.id})">
            ✅ Marquer comme lu
          </button>` : ''
        }
        <button class="btn-premium btn-sm btn-secondary" onclick="deleteMessage(${message.id})">
          🗑️ Supprimer
        </button>
        <button class="btn-premium btn-sm btn-outline" onclick="replyToMessage(${message.id})">
          ↩️ Répondre
        </button>
      </div>
    </div>
  `).join('');
}

function getSubjectLabel(subjectValue) {
  const subjects = {
    'recommendation': '🎯 Question recommandations',
    'technical': '🔧 Support technique',
    'premium': '💎 Abonnement Premium',
    'partnership': '🤝 Partenariat marque',
    'bug': '🐛 Signaler un bug',
    'feedback': '💡 Suggestions d\'amélioration',
    'other': '📝 Autre'
  };
  return subjects[subjectValue] || subjectValue;
}

window.markMessageAsRead = function(messageId) {
  const message = appState.contactMessages.find(m => m.id === messageId);
  if (message) {
    message.status = 'read';
    saveContactMessages();
    updateMessagesCount();
    updateAdminStats();
    renderAdminMessages();
    showToast('Message marqué comme lu ✅', 'success');
  }
};

window.deleteMessage = function(messageId) {
  const message = appState.contactMessages.find(m => m.id === messageId);
  if (message && confirm(`Supprimer le message de ${message.name} ?`)) {
    const index = appState.contactMessages.findIndex(m => m.id === messageId);
    if (index > -1) {
      appState.contactMessages.splice(index, 1);
      saveContactMessages();
      updateMessagesCount();
      updateAdminStats();
      renderAdminMessages();
      showToast('Message supprimé 🗑️', 'success');
    }
  }
};

window.replyToMessage = function(messageId) {
  const message = appState.contactMessages.find(m => m.id === messageId);
  if (message) {
    // Simuler l'ouverture d'un client email
    const subject = encodeURIComponent(`Re: ${getSubjectLabel(message.subject)}`);
    const body = encodeURIComponent(`Bonjour ${message.name},\n\nMerci pour votre message concernant "${message.subject}".\n\n[Votre réponse ici]\n\nCordialement,\nL'équipe RunningZone`);
    
    window.open(`mailto:${message.email}?subject=${subject}&body=${body}`, '_blank');
    
    // Marquer comme lu automatiquement
    if (message.status === 'unread') {
      markMessageAsRead(messageId);
    }
  }
};

function markAllMessagesAsRead() {
  const unreadCount = appState.contactMessages.filter(m => m.status === 'unread').length;
  
  if (unreadCount === 0) {
    showToast('Aucun message non lu 📭', 'info');
    return;
  }
  
  appState.contactMessages.forEach(message => {
    if (message.status === 'unread') {
      message.status = 'read';
    }
  });
  
  saveContactMessages();
  updateMessagesCount();
  updateAdminStats();
  renderAdminMessages();
  
  showToast(`${unreadCount} message${unreadCount > 1 ? 's' : ''} marqué${unreadCount > 1 ? 's' : ''} comme lu ✅`, 'success');
}

function exportMessagesToCSV() {
  if (appState.contactMessages.length === 0) {
    showToast('Aucun message à exporter 📭', 'info');
    return;
  }
  
  const headers = ['ID', 'Date', 'Nom', 'Email', 'Sujet', 'Message', 'Statut'];
  const rows = appState.contactMessages.map(message => [
    message.id,
    `${message.date} ${message.time}`,
    message.name,
    message.email,
    getSubjectLabel(message.subject),
    message.message.replace(/\n/g, ' ').replace(/"/g, '""'),
    message.status === 'unread' ? 'Non lu' : 'Lu'
  ]);
  
  const csvContent = [headers, ...rows]
    .map(row => row.map(cell => `"${cell}"`).join(','))
    .join('\n');
  
  const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
  const link = document.createElement('a');
  const url = URL.createObjectURL(blob);
  
  link.setAttribute('href', url);
  link.setAttribute('download', `runningzone-messages-${new Date().toISOString().split('T')[0]}.csv`);
  link.style.visibility = 'hidden';
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
  
  showToast('Export CSV des messages terminé 📥', 'success');
}

// === GESTION DES CHAUSSURES ===
function setupShoesManagement() {
  const addBtn = document.getElementById('add-shoe-btn');
  const exportBtn = document.getElementById('export-csv');
  
  if (addBtn) {
    addBtn.addEventListener('click', () => {
      appState.editingShoe = null;
      showShoeModal();
    });
  }
  
  if (exportBtn) {
    exportBtn.addEventListener('click', exportShoesToCSV);
  }
  
  setupTableFilters();
}

function renderShoesTable() {
  const tbody = document.getElementById('shoes-table-body');
  if (!tbody) return;
  
  tbody.innerHTML = appData.shoes.map(shoe => `
    <tr>
      <td>${shoe.id}</td>
      <td><strong>${shoe.name}</strong></td>
      <td>${shoe.brand}</td>
      <td><strong>${shoe.price}€</strong></td>
      <td>⭐ ${shoe.rating}</td>
      <td>${shoe.stock || 'N/A'}</td>
      <td>
        <button class="btn-premium btn-sm" onclick="editShoe(${shoe.id})" title="Modifier">
          ✏️ Modifier
        </button>
        <button class="btn-premium btn-sm btn-secondary" onclick="deleteShoe(${shoe.id})" title="Supprimer">
          🗑️ Supprimer
        </button>
      </td>
    </tr>
  `).join('');
}

function setupTableFilters() {
  const searchInput = document.getElementById('table-search');
  const brandFilter = document.getElementById('brand-filter');
  
  if (searchInput) {
    searchInput.addEventListener('input', (e) => {
      filterShoesTable(e.target.value, brandFilter?.value || '');
    });
  }
  
  if (brandFilter) {
    // Peupler le filtre des marques
    const brands = [...new Set(appData.shoes.map(shoe => shoe.brand))].sort();
    brandFilter.innerHTML = '<option value="">Toutes marques</option>' +
      brands.map(brand => `<option value="${brand}">${brand}</option>`).join('');
    
    brandFilter.addEventListener('change', (e) => {
      filterShoesTable(searchInput?.value || '', e.target.value);
    });
  }
}

function filterShoesTable(searchTerm, brandFilter) {
  const rows = document.querySelectorAll('#shoes-table-body tr');
  
  rows.forEach(row => {
    const name = row.cells[1].textContent.toLowerCase();
    const brand = row.cells[2].textContent.toLowerCase();
    
    const matchesSearch = !searchTerm || name.includes(searchTerm.toLowerCase());
    const matchesBrand = !brandFilter || brand === brandFilter.toLowerCase();
    
    row.style.display = matchesSearch && matchesBrand ? '' : 'none';
  });
}

window.editShoe = function(shoeId) {
  const shoe = appData.shoes.find(s => s.id === shoeId);
  if (shoe) {
    appState.editingShoe = shoe;
    showShoeModal(shoe);
  }
};

window.deleteShoe = function(shoeId) {
  const shoe = appData.shoes.find(s => s.id === shoeId);
  const shoeName = shoe ? shoe.name : 'cette chaussure';
  
  if (confirm(`Êtes-vous sûr de vouloir supprimer "${shoeName}" ?\nCette action est irréversible.`)) {
    const index = appData.shoes.findIndex(s => s.id === shoeId);
    if (index > -1) {
      appData.shoes.splice(index, 1);
      renderShoesTable();
      updateAdminStats();
      showToast('Chaussure supprimée avec succès 🗑️', 'success');
    }
  }
};

function exportShoesToCSV() {
  const headers = ['ID', 'Nom', 'Marque', 'Prix', 'Note', 'Poids', 'Drop', 'Types'];
  const rows = appData.shoes.map(shoe => [
    shoe.id,
    shoe.name,
    shoe.brand,
    shoe.price,
    shoe.rating,
    shoe.weight,
    shoe.drop,
    shoe.types.join(';')
  ]);
  
  const csvContent = [headers, ...rows]
    .map(row => row.map(cell => `"${cell}"`).join(','))
    .join('\n');
  
  const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
  const link = document.createElement('a');
  const url = URL.createObjectURL(blob);
  
  link.setAttribute('href', url);
  link.setAttribute('download', 'runningzone-shoes.csv');
  link.style.visibility = 'hidden';
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
  
  showToast('Export CSV terminé 📥', 'success');
}

// === ANALYTICS AVANCÉES ===
function renderAnalytics() {
  renderTopShoes();
  renderTypesStats();
}

function renderTopShoes() {
  const container = document.getElementById('top-shoes');
  if (!container) return;
  
  const topShoes = [...appData.shoes]
    .sort((a, b) => (b.sales || 0) - (a.sales || 0))
    .slice(0, 5);
  
  container.innerHTML = topShoes.map((shoe, index) => `
    <div class="top-shoe-item">
      <span class="rank">#${index + 1}</span>
      <img src="${shoe.image}" alt="${shoe.name}" class="shoe-thumbnail">
      <div class="shoe-info">
        <strong>${shoe.name}</strong>
        <span>${shoe.sales || 0} ventes</span>
      </div>
    </div>
  `).join('');
}

function renderTypesStats() {
  const container = document.getElementById('types-stats');
  if (!container) return;
  
  const typesCounts = {};
  appData.shoes.forEach(shoe => {
    shoe.types.forEach(type => {
      typesCounts[type] = (typesCounts[type] || 0) + 1;
    });
  });
  
  const sortedTypes = Object.entries(typesCounts)
    .sort(([,a], [,b]) => b - a)
    .slice(0, 5);
  
  container.innerHTML = sortedTypes.map(([typeId, count]) => {
    const type = appData.running_types.find(t => t.id === typeId);
    return `
      <div class="type-stat-item">
        <span class="type-icon">${type?.icon || '👟'}</span>
        <div class="type-info">
          <strong>${type?.name || typeId}</strong>
          <span>${count} chaussures</span>
        </div>
      </div>
    `;
  }).join('');
}

function renderAdminCharts() {
  setTimeout(() => {
    renderBrandChart();
    renderPriceChart();
  }, 100);
}

function renderBrandChart() {
  const ctx = document.getElementById('brandChart');
  if (!ctx) return;
  
  if (window.brandChartInstance) {
    window.brandChartInstance.destroy();
  }
  
  const brands = {};
  appData.shoes.forEach(shoe => {
    brands[shoe.brand] = (brands[shoe.brand] || 0) + 1;
  });
  
  window.brandChartInstance = new Chart(ctx, {
    type: 'doughnut',
    data: {
      labels: Object.keys(brands),
      datasets: [{
        data: Object.values(brands),
        backgroundColor: ['#1FB8CD', '#FFC185', '#B4413C', '#ECEBD5', '#5D878F', '#DB4545', '#D2BA4C', '#964325']
      }]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        legend: {
          position: 'bottom'
        }
      }
    }
  });
}

function renderPriceChart() {
  const ctx = document.getElementById('priceChart');
  if (!ctx) return;
  
  if (window.priceChartInstance) {
    window.priceChartInstance.destroy();
  }
  
  const priceRanges = {
    '50-100€': 0,
    '100-150€': 0,
    '150-200€': 0,
    '200€+': 0
  };
  
  appData.shoes.forEach(shoe => {
    if (shoe.price <= 100) {
      priceRanges['50-100€']++;
    } else if (shoe.price <= 150) {
      priceRanges['100-150€']++;
    } else if (shoe.price <= 200) {
      priceRanges['150-200€']++;
    } else {
      priceRanges['200€+']++;
    }
  });
  
  window.priceChartInstance = new Chart(ctx, {
    type: 'bar',
    data: {
      labels: Object.keys(priceRanges),
      datasets: [{
        label: 'Nombre de chaussures',
        data: Object.values(priceRanges),
        backgroundColor: '#1FB8CD',
        borderColor: '#13343B',
        borderWidth: 1
      }]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      scales: {
        y: {
          beginAtZero: true,
          ticks: {
            stepSize: 1
          }
        }
      }
    }
  });
}

// === MODALES PREMIUM ===
function setupModals() {
  setupShoeModal();
}

function setupShoeModal() {
  const modal = document.getElementById('shoe-modal');
  const form = document.getElementById('shoe-form');
  
  // Fermeture de la modale
  document.addEventListener('click', (e) => {
    if (e.target.classList.contains('modal-close') || e.target.classList.contains('modal-backdrop')) {
      hideShoeModal();
    }
  });
  
  if (form) {
    form.addEventListener('submit', handleShoeFormSubmit);
  }
  
  renderShoeTypesCheckboxes();
}

function showShoeModal(shoe = null) {
  const modal = document.getElementById('shoe-modal');
  const modalTitle = document.getElementById('modal-title');
  
  if (shoe) {
    modalTitle.textContent = `Modifier: ${shoe.name}`;
    fillShoeForm(shoe);
  } else {
    modalTitle.textContent = 'Ajouter une nouvelle chaussure';
    clearShoeForm();
  }
  
  modal.classList.remove('hidden');
}

function hideShoeModal() {
  const modal = document.getElementById('shoe-modal');
  if (modal) {
    modal.classList.add('hidden');
  }
  clearShoeForm();
  appState.editingShoe = null;
}

function renderShoeTypesCheckboxes() {
  const container = document.getElementById('shoe-types-checkboxes');
  if (!container) return;
  
  container.innerHTML = appData.running_types.map(type => `
    <label class="checkbox-premium">
      <input type="checkbox" id="type-${type.id}" value="${type.id}">
      <span class="checkmark"></span>
      <span class="checkbox-label">${type.icon} ${type.name}</span>
    </label>
  `).join('');
}

function fillShoeForm(shoe) {
  document.getElementById('shoe-name').value = shoe.name;
  document.getElementById('shoe-brand').value = shoe.brand;
  document.getElementById('shoe-price').value = shoe.price;
  document.getElementById('shoe-rating').value = shoe.rating;
  document.getElementById('shoe-weight').value = shoe.weight;
  document.getElementById('shoe-drop').value = shoe.drop;
  document.getElementById('shoe-image').value = shoe.image;
  document.getElementById('shoe-description').value = shoe.description;
  document.getElementById('shoe-technology').value = shoe.technology;
  
  // Sélection des types
  appData.running_types.forEach(type => {
    const checkbox = document.getElementById(`type-${type.id}`);
    if (checkbox) {
      checkbox.checked = shoe.types.includes(type.id);
    }
  });
}

function clearShoeForm() {
  const form = document.getElementById('shoe-form');
  if (form) {
    form.reset();
  }
}

function handleShoeFormSubmit(e) {
  e.preventDefault();
  
  const formData = {
    name: document.getElementById('shoe-name').value,
    brand: document.getElementById('shoe-brand').value,
    price: parseInt(document.getElementById('shoe-price').value),
    rating: parseFloat(document.getElementById('shoe-rating').value),
    weight: document.getElementById('shoe-weight').value,
    drop: document.getElementById('shoe-drop').value,
    image: document.getElementById('shoe-image').value,
    description: document.getElementById('shoe-description').value,
    technology: document.getElementById('shoe-technology').value
  };
  
  // Récupération des types sélectionnés
  const selectedTypes = [];
  appData.running_types.forEach(type => {
    const checkbox = document.getElementById(`type-${type.id}`);
    if (checkbox && checkbox.checked) {
      selectedTypes.push(type.id);
    }
  });
  
  if (selectedTypes.length === 0) {
    showToast('Veuillez sélectionner au moins un type de course ⚠️', 'error');
    return;
  }
  
  formData.types = selectedTypes;
  formData.surfaces = selectedTypes;
  
  // Détermination automatique du budget range
  if (formData.price <= 100) {
    formData.budget_range = '100-150';
  } else if (formData.price <= 150) {
    formData.budget_range = '100-150';
  } else if (formData.price <= 200) {
    formData.budget_range = '150-200';
  } else {
    formData.budget_range = '200+';
  }
  
  // Valeurs par défaut
  formData.characteristics = ['Technologie avancée', 'Confort optimal', 'Performance'];
  formData.reviews = Math.floor(Math.random() * 300) + 50;
  formData.stock = Math.floor(Math.random() * 100) + 10;
  formData.sales = Math.floor(Math.random() * 200) + 20;
  formData.aiScore = Math.floor(Math.random() * 20) + 80;
  
  if (appState.editingShoe) {
    // Modification
    formData.id = appState.editingShoe.id;
    const index = appData.shoes.findIndex(s => s.id === appState.editingShoe.id);
    if (index > -1) {
      appData.shoes[index] = { ...appState.editingShoe, ...formData };
    }
    showToast(`${formData.name} modifiée avec succès! ✏️`, 'success');
  } else {
    // Ajout
    formData.id = Math.max(...appData.shoes.map(s => s.id)) + 1;
    formData.trending = false;
    formData.new = true;
    appData.shoes.push(formData);
    showToast(`${formData.name} ajoutée avec succès! ➕`, 'success');
  }
  
  hideShoeModal();
  renderShoesTable();
  updateAdminStats();
}

// === SYSTÈME DE NOTIFICATIONS TOAST ===
function showToast(message, type = 'info', duration = 4000) {
  const container = document.getElementById('toast-container');
  if (!container) return;
  
  const icons = {
    'success': '✅',
    'error': '❌',
    'warning': '⚠️',
    'info': 'ℹ️'
  };
  
  const toast = document.createElement('div');
  toast.className = `toast ${type}`;
  toast.innerHTML = `
    <span class="toast-icon">${icons[type] || icons.info}</span>
    <span class="toast-message">${message}</span>
    <button class="toast-close" onclick="this.parentElement.remove()">✕</button>
  `;
  
  container.appendChild(toast);
  
  // Animation d'entrée
  setTimeout(() => {
    toast.style.animation = 'slideIn 0.3s ease forwards';
  }, 10);
  
  // Suppression automatique
  setTimeout(() => {
    toast.style.animation = 'slideOut 0.3s ease forwards';
    setTimeout(() => {
      if (toast.parentElement) {
        toast.remove();
      }
    }, 300);
  }, duration);
}

// === LOADING OVERLAY ===
function showLoadingOverlay(title = 'Chargement...', subtitle = 'Veuillez patienter') {
  const overlay = document.getElementById('loading-overlay');
  const titleElement = overlay?.querySelector('.loading-title');
  const subtitleElement = overlay?.querySelector('.loading-subtitle');
  
  if (titleElement) titleElement.textContent = title;
  if (subtitleElement) subtitleElement.textContent = subtitle;
  
  if (overlay) {
    overlay.classList.remove('hidden');
  }
}

function hideLoadingOverlay() {
  const overlay = document.getElementById('loading-overlay');
  if (overlay) {
    overlay.classList.add('hidden');
  }
}

// === UTILITAIRES ===
function resetAnalysis() {
  appState.selectedBudget = null;
  appState.selectedBudgetValue = 150;
  appState.selectedTypes = [];
  appState.currentStep = 1;
  appState.filteredShoes = [];
  
  // Reset UI
  const slider = document.getElementById('budget-slider');
  const budgetValue = document.getElementById('budget-value');
  if (slider) slider.value = 150;
  if (budgetValue) budgetValue.textContent = '150€';
  
  updateBudgetButtons();
  updateTypeSelection();
  updateBudgetStatus();
  updateTypesStatus();
  
  saveAppStateToStorage();
  showToast('Analyse réinitialisée! 🔄', 'success');
  navigateToPage('home');
}

function renderAllPages() {
  // Cette fonction s'assure que toutes les pages sont correctement initialisées
  renderBudgetCategories();
  renderTypesGrid();
}

function toggleMobileMenu() {
  const menu = document.querySelector('.navbar__menu');
  if (menu) {
    menu.classList.toggle('active');
  }
}

console.log('🎉 RunningZone Premium - Tous les modules chargés!');