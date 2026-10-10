// svg_icons.js - Comprehensive SVG icons library replacing all assets
const SVG_ICONS = {
  // Hero Agricultural Landscape SVG
  hero: `<svg class="hero-bg-img" viewBox="0 0 1600 900" preserveAspectRatio="xMidYMid slice" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Sunrise over lush green agricultural farmlands">
    <defs>
      <linearGradient id="skyGrad" x1="0%" y1="0%" x2="0%" y2="100%">
        <stop offset="0%" stop-color="#0a2318"/>
        <stop offset="45%" stop-color="#14452f"/>
        <stop offset="75%" stop-color="#2d6a4f"/>
        <stop offset="90%" stop-color="#d97706"/>
        <stop offset="100%" stop-color="#fbbf24"/>
      </linearGradient>
      <radialGradient id="sunAura" cx="50%" cy="50%" r="50%">
        <stop offset="0%" stop-color="#fef08a" stop-opacity="0.95"/>
        <stop offset="35%" stop-color="#f59e0b" stop-opacity="0.7"/>
        <stop offset="70%" stop-color="#d97706" stop-opacity="0.25"/>
        <stop offset="100%" stop-color="#d97706" stop-opacity="0"/>
      </radialGradient>
      <linearGradient id="hillBack" x1="0%" y1="0%" x2="0%" y2="100%">
        <stop offset="0%" stop-color="#1b4332"/>
        <stop offset="100%" stop-color="#081c15"/>
      </linearGradient>
      <linearGradient id="hillMid" x1="0%" y1="0%" x2="0%" y2="100%">
        <stop offset="0%" stop-color="#2d6a4f"/>
        <stop offset="100%" stop-color="#0d2818"/>
      </linearGradient>
      <linearGradient id="fieldFore1" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stop-color="#40916c"/>
        <stop offset="100%" stop-color="#1b4332"/>
      </linearGradient>
      <linearGradient id="fieldFore2" x1="100%" y1="0%" x2="0%" y2="100%">
        <stop offset="0%" stop-color="#52b788"/>
        <stop offset="60%" stop-color="#2d6a4f"/>
        <stop offset="100%" stop-color="#081c15"/>
      </linearGradient>
      <linearGradient id="terraceGold" x1="0%" y1="0%" x2="100%" y2="0%">
        <stop offset="0%" stop-color="#b45309" stop-opacity="0.4"/>
        <stop offset="50%" stop-color="#f59e0b" stop-opacity="0.7"/>
        <stop offset="100%" stop-color="#b45309" stop-opacity="0.3"/>
      </linearGradient>
    </defs>
    <!-- Sky & Atmosphere -->
    <rect width="1600" height="900" fill="url(#skyGrad)"/>
    <!-- Sun & Radiance Rays -->
    <circle cx="800" cy="540" r="320" fill="url(#sunAura)"/>
    <circle cx="800" cy="540" r="85" fill="#fef9c3" opacity="0.95"/>
    <g opacity="0.2" stroke="#fef08a" stroke-width="2">
      <line x1="800" y1="540" x2="400" y2="200"/>
      <line x1="800" y1="540" x2="600" y2="150"/>
      <line x1="800" y1="540" x2="800" y2="100"/>
      <line x1="800" y1="540" x2="1000" y2="150"/>
      <line x1="800" y1="540" x2="1200" y2="200"/>
      <line x1="800" y1="540" x2="1400" y2="300"/>
      <line x1="800" y1="540" x2="200" y2="300"/>
    </g>
    <!-- Distant Mountains -->
    <path d="M0,600 Q300,520 600,560 T1200,530 Q1400,510 1600,570 L1600,900 L0,900 Z" fill="url(#hillBack)" opacity="0.9"/>
    <!-- Wind Turbines (Clean Energy) -->
    <g opacity="0.75" stroke="#ecfdf5" stroke-linecap="round">
      <!-- Turbine 1 -->
      <line x1="320" y1="540" x2="320" y2="430" stroke-width="3"/>
      <circle cx="320" cy="430" r="3" fill="#ecfdf5"/>
      <line x1="320" y1="430" x2="350" y2="390" stroke-width="2"/>
      <line x1="320" y1="430" x2="290" y2="460" stroke-width="2"/>
      <line x1="320" y1="430" x2="335" y2="475" stroke-width="2"/>
      <!-- Turbine 2 -->
      <line x1="420" y1="550" x2="420" y2="460" stroke-width="2.5"/>
      <circle cx="420" cy="460" r="2.5" fill="#ecfdf5"/>
      <line x1="420" y1="460" x2="445" y2="425" stroke-width="1.8"/>
      <line x1="420" y1="460" x2="395" y2="480" stroke-width="1.8"/>
      <!-- Turbine 3 -->
      <line x1="1250" y1="535" x2="1250" y2="445" stroke-width="2.8"/>
      <circle cx="1250" cy="445" r="2.8" fill="#ecfdf5"/>
      <line x1="1250" y1="445" x2="1225" y2="410" stroke-width="1.9"/>
      <line x1="1250" y1="445" x2="1275" y2="475" stroke-width="1.9"/>
    </g>
    <!-- Midground Rolling Crop Hills -->
    <path d="M0,640 Q400,570 850,620 T1600,600 L1600,900 L0,900 Z" fill="url(#hillMid)"/>
    <!-- Farm Terraces and Contour Furrows -->
    <path d="M150,620 Q550,650 950,630 T1600,660" stroke="url(#terraceGold)" stroke-width="6" fill="none"/>
    <path d="M0,680 Q500,640 1050,690 T1600,670" stroke="url(#terraceGold)" stroke-width="8" fill="none"/>
    <path d="M0,730 Q600,690 1200,740 T1600,720" stroke="url(#terraceGold)" stroke-width="10" fill="none"/>
    <!-- Foreground Lush Terrace Layers -->
    <path d="M0,690 Q500,620 1000,700 T1600,660 L1600,900 L0,900 Z" fill="url(#fieldFore1)" opacity="0.85"/>
    <path d="M0,770 Q600,680 1200,780 T1600,730 L1600,900 L0,900 Z" fill="url(#fieldFore2)"/>
    <!-- Foreground Stylized Crop Silhouette Rows -->
    <g opacity="0.5" stroke="#fef08a" stroke-width="2" stroke-linecap="round">
      <path d="M100,900 Q110,850 120,810 M120,810 Q105,790 90,780 M120,810 Q135,790 145,775 M120,810 L120,760"/>
      <path d="M220,900 Q230,860 240,820 M240,820 Q225,800 215,790 M240,820 Q255,800 265,785 M240,820 L240,770"/>
      <path d="M360,900 Q370,855 380,815 M380,815 Q365,795 350,785 M380,815 Q395,795 405,780 M380,815 L380,765"/>
      <path d="M1250,900 Q1260,855 1270,815 M1270,815 Q1255,795 1245,785 M1270,815 Q1285,795 1295,780 M1270,815 L1270,765"/>
      <path d="M1420,900 Q1430,850 1440,810 M1440,810 Q1425,790 1410,780 M1440,810 Q1455,790 1465,775 M1440,810 L1440,760"/>
    </g>
    <!-- Soft Mist Gradient Overlay -->
    <rect y="500" width="1600" height="400" fill="url(#terraceGold)" opacity="0.15"/>
  </svg>`,

  // Millet Graphic (for Featured Card in index.html)
  millet: `<svg class="product-img" viewBox="0 0 400 240" preserveAspectRatio="xMidYMid slice" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="bgMillet" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stop-color="#fef3c7"/>
        <stop offset="100%" stop-color="#fde68a"/>
      </linearGradient>
      <linearGradient id="goldGrain" x1="0%" y1="0%" x2="0%" y2="100%">
        <stop offset="0%" stop-color="#f59e0b"/>
        <stop offset="100%" stop-color="#b45309"/>
      </linearGradient>
      <linearGradient id="leafGrad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stop-color="#4ade80"/>
        <stop offset="100%" stop-color="#166534"/>
      </linearGradient>
    </defs>
    <rect width="400" height="240" fill="url(#bgMillet)"/>
    <circle cx="200" cy="120" r="85" fill="#fef9c3" opacity="0.6"/>
    <g transform="translate(200, 130) rotate(-15)">
      <!-- Main Stem -->
      <path d="M-20,90 Q-10,30 0,-30 Q5,-60 10,-80" stroke="#ca8a04" stroke-width="4.5" fill="none" stroke-linecap="round"/>
      <!-- Millet Head Grains -->
      <g fill="url(#goldGrain)" stroke="#78350f" stroke-width="0.8">
        <ellipse cx="6" cy="-80" rx="9" ry="12"/>
        <ellipse cx="-4" cy="-70" rx="10" ry="11"/>
        <ellipse cx="12" cy="-68" rx="10" ry="12"/>
        <ellipse cx="2" cy="-56" rx="11" ry="12"/>
        <ellipse cx="-10" cy="-52" rx="10" ry="11"/>
        <ellipse cx="14" cy="-50" rx="11" ry="11"/>
        <ellipse cx="5" cy="-38" rx="12" ry="11"/>
        <ellipse cx="-8" cy="-35" rx="10" ry="10"/>
        <ellipse cx="13" cy="-30" rx="11" ry="10"/>
        <ellipse cx="2" cy="-20" rx="11" ry="11"/>
        <ellipse cx="-6" cy="-15" rx="10" ry="10"/>
        <ellipse cx="10" cy="-10" rx="10" ry="10"/>
        <ellipse cx="1" cy="0" rx="10" ry="10"/>
      </g>
      <!-- Bristles / Beards -->
      <path d="M6,-85 L12,-100 M-4,-75 L-14,-90 M12,-73 L24,-88 M2,-60 L8,-78 M-10,-55 L-22,-70 M14,-53 L26,-68" stroke="#a16207" stroke-width="1.5" stroke-linecap="round"/>
      <!-- Long arching leaves -->
      <path d="M-15,60 C-50,40 -80,10 -100,-20 C-75,5 -45,25 -12,50 Z" fill="url(#leafGrad)"/>
      <path d="M-5,40 C35,20 70,0 95,-15 C70,12 35,32 -2,42 Z" fill="url(#leafGrad)"/>
    </g>
    <!-- Organic Nutrient Badge -->
    <g transform="translate(320, 45)">
      <circle cx="0" cy="0" r="26" fill="#15803d" opacity="0.9"/>
      <path d="M-10,-5 C-5,-15 5,-15 10,-5 C10,5 0,14 -10,-5 Z" fill="#bbf7d0"/>
      <text x="0" y="2" font-size="8" font-family="Inter, sans-serif" font-weight="700" fill="#ffffff" text-anchor="middle">100%</text>
      <text x="0" y="9" font-size="6" font-family="Inter, sans-serif" fill="#ffffff" text-anchor="middle">ORGANIC</text>
    </g>
  </svg>`,

  // Farmer Avatars
  avatarRambabu: `<svg class="testimonial-avatar" viewBox="0 0 100 100" style="width: 50px; height: 50px; border-radius: 50%;" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="bgRambabu" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stop-color="#065f46"/>
        <stop offset="100%" stop-color="#047857"/>
      </linearGradient>
      <linearGradient id="turbanGrad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stop-color="#fef08a"/>
        <stop offset="100%" stop-color="#d97706"/>
      </linearGradient>
    </defs>
    <circle cx="50" cy="50" r="50" fill="url(#bgRambabu)"/>
    <!-- Body/Kurta -->
    <path d="M15,96 Q50,75 85,96 L85,100 L15,100 Z" fill="#f8fafc"/>
    <!-- Traditional Kanduva (Scarf) -->
    <path d="M25,82 Q35,88 40,100 L30,100 Q25,88 20,85 Z" fill="#f59e0b"/>
    <path d="M75,82 Q65,88 60,100 L70,100 Q75,88 80,85 Z" fill="#f59e0b"/>
    <!-- Neck -->
    <rect x="43" y="60" width="14" height="15" rx="3" fill="#d97706" opacity="0.85"/>
    <!-- Face -->
    <ellipse cx="50" cy="50" rx="20" ry="22" fill="#f59e0b"/>
    <!-- Ears -->
    <ellipse cx="29" cy="51" rx="4" ry="6" fill="#d97706"/>
    <ellipse cx="71" cy="51" rx="4" ry="6" fill="#d97706"/>
    <!-- Eyes -->
    <ellipse cx="42" cy="46" rx="2.5" ry="2" fill="#1e293b"/>
    <ellipse cx="58" cy="46" rx="2.5" ry="2" fill="#1e293b"/>
    <!-- Mustache -->
    <path d="M38,58 Q50,56 62,58 Q56,64 50,60 Q44,64 38,58 Z" fill="#334155"/>
    <!-- Smile -->
    <path d="M44,63 Q50,67 56,63" stroke="#334155" stroke-width="1.8" fill="none" stroke-linecap="round"/>
    <!-- Farmer Turban/Pagri -->
    <path d="M26,38 C28,20 45,15 50,15 C55,15 72,20 74,38 C75,41 68,43 50,43 C32,43 25,41 26,38 Z" fill="url(#turbanGrad)"/>
    <path d="M32,24 Q50,30 68,24" stroke="#b45309" stroke-width="2" fill="none"/>
    <path d="M25,32 Q50,38 75,32" stroke="#b45309" stroke-width="2" fill="none"/>
  </svg>`,

  avatarLakshmi: `<svg class="testimonial-avatar" viewBox="0 0 100 100" style="width: 50px; height: 50px; border-radius: 50%;" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="bgLakshmi" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stop-color="#047857"/>
        <stop offset="100%" stop-color="#0d9488"/>
      </linearGradient>
    </defs>
    <circle cx="50" cy="50" r="50" fill="url(#bgLakshmi)"/>
    <!-- Hair bun background -->
    <circle cx="50" cy="38" r="26" fill="#1e293b"/>
    <!-- Saree Drape -->
    <path d="M15,96 Q50,76 85,96 L85,100 L15,100 Z" fill="#dc2626"/>
    <!-- Saree Pallu (Green/Gold Border) -->
    <path d="M25,78 Q45,86 60,100 L50,100 Q35,88 20,83 Z" fill="#16a34a"/>
    <path d="M27,80 Q45,88 58,100" stroke="#facc15" stroke-width="2" fill="none"/>
    <!-- Neck -->
    <rect x="43" y="60" width="14" height="15" rx="3" fill="#d97706" opacity="0.85"/>
    <!-- Face -->
    <ellipse cx="50" cy="49" rx="19" ry="21" fill="#f59e0b"/>
    <!-- Hair front curves -->
    <path d="M31,43 Q50,28 69,43 Q50,34 31,43 Z" fill="#0f172a"/>
    <!-- Traditional Bindi (Red) -->
    <circle cx="50" cy="41" r="2.5" fill="#b91c1c"/>
    <!-- Eyes -->
    <ellipse cx="43" cy="48" rx="2.5" ry="2" fill="#1e293b"/>
    <ellipse cx="57" cy="48" rx="2.5" ry="2" fill="#1e293b"/>
    <!-- Gentle Smile -->
    <path d="M44,58 Q50,64 56,58" stroke="#881337" stroke-width="2.2" fill="none" stroke-linecap="round"/>
    <!-- Small Earrings -->
    <circle cx="30" cy="53" r="2.5" fill="#facc15"/>
    <circle cx="70" cy="53" r="2.5" fill="#facc15"/>
  </svg>`,

  avatarVenkatesh: `<svg class="testimonial-avatar" viewBox="0 0 100 100" style="width: 50px; height: 50px; border-radius: 50%;" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="bgVenkatesh" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stop-color="#15803d"/>
        <stop offset="100%" stop-color="#22c55e"/>
      </linearGradient>
    </defs>
    <circle cx="50" cy="50" r="50" fill="url(#bgVenkatesh)"/>
    <!-- Shirt -->
    <path d="M15,96 Q50,75 85,96 L85,100 L15,100 Z" fill="#0284c7"/>
    <path d="M44,82 L50,92 L56,82 Z" fill="#f8fafc"/>
    <!-- Neck -->
    <rect x="43" y="60" width="14" height="15" rx="3" fill="#d97706" opacity="0.85"/>
    <!-- Face -->
    <ellipse cx="50" cy="51" rx="20" ry="22" fill="#f59e0b"/>
    <!-- Ears -->
    <ellipse cx="29" cy="52" rx="4" ry="6" fill="#d97706"/>
    <ellipse cx="71" cy="52" rx="4" ry="6" fill="#d97706"/>
    <!-- Eyes -->
    <ellipse cx="42" cy="49" rx="2.5" ry="2" fill="#1e293b"/>
    <ellipse cx="58" cy="49" rx="2.5" ry="2" fill="#1e293b"/>
    <!-- Modern Trim Mustache & Smile -->
    <path d="M42,59 Q50,61 58,59" stroke="#334155" stroke-width="2" stroke-linecap="round"/>
    <path d="M44,63 Q50,67 56,63" stroke="#334155" stroke-width="1.8" fill="none" stroke-linecap="round"/>
    <!-- Modern Agricultural Cap (Green) -->
    <path d="M28,38 C30,22 45,18 50,18 C55,18 70,22 72,38 Z" fill="#14532d"/>
    <!-- Cap Visor -->
    <path d="M24,38 Q50,45 78,36 Q86,41 78,44 Q50,49 22,43 Z" fill="#166534"/>
    <!-- Sprout Emblem on Cap -->
    <circle cx="50" cy="27" r="4.5" fill="#86efac"/>
  </svg>`,

  // 4 Showcase SVGs
  showcaseCoffeeCup: `<svg class="showcase-img" viewBox="0 0 400 240" preserveAspectRatio="xMidYMid slice" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="cupBg" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stop-color="#14532d"/>
        <stop offset="100%" stop-color="#052e16"/>
      </linearGradient>
      <linearGradient id="cupBody" x1="0%" y1="0%" x2="100%" y2="0%">
        <stop offset="0%" stop-color="#d97706"/>
        <stop offset="40%" stop-color="#fbbf24"/>
        <stop offset="100%" stop-color="#b45309"/>
      </linearGradient>
      <linearGradient id="cupSleeve" x1="0%" y1="0%" x2="100%" y2="0%">
        <stop offset="0%" stop-color="#15803d"/>
        <stop offset="50%" stop-color="#22c55e"/>
        <stop offset="100%" stop-color="#166534"/>
      </linearGradient>
      <linearGradient id="lidGrad" x1="0%" y1="0%" x2="0%" y2="100%">
        <stop offset="0%" stop-color="#f8fafc"/>
        <stop offset="100%" stop-color="#cbd5e1"/>
      </linearGradient>
    </defs>
    <rect width="400" height="240" fill="url(#cupBg)"/>
    <!-- Circular Ambient Glow -->
    <circle cx="200" cy="130" r="95" fill="#22c55e" opacity="0.12"/>
    <!-- Floating Rice Husk & Leaf Details -->
    <g opacity="0.4" fill="#86efac">
      <ellipse cx="70" cy="60" rx="8" ry="4" transform="rotate(-30 70 60)"/>
      <ellipse cx="330" cy="80" rx="9" ry="5" transform="rotate(40 330 80)"/>
      <ellipse cx="90" cy="180" rx="10" ry="4" transform="rotate(25 90 180)"/>
      <ellipse cx="320" cy="190" rx="7" ry="3" transform="rotate(-45 320 190)"/>
    </g>
    <!-- Steam Swirls -->
    <g stroke="#86efac" stroke-width="2.5" stroke-linecap="round" fill="none" opacity="0.75">
      <path d="M185,55 Q180,40 190,30 Q200,20 192,10"/>
      <path d="M205,50 Q215,35 205,25 Q195,15 205,5"/>
      <path d="M225,55 Q220,42 228,32 Q235,22 230,12"/>
    </g>
    <!-- Cup Shadow -->
    <ellipse cx="200" cy="210" rx="55" ry="10" fill="#022c22" opacity="0.7"/>
    <!-- Cup Body (Rice Husk Composite) -->
    <path d="M165,75 L175,200 Q200,206 225,200 L235,75 Z" fill="url(#cupBody)"/>
    <!-- Textured Rice Husk Granules -->
    <g fill="#78350f" opacity="0.35">
      <circle cx="185" cy="95" r="1.5"/><circle cx="215" cy="100" r="1.8"/>
      <circle cx="195" cy="120" r="1.2"/><circle cx="205" cy="165" r="1.5"/>
      <circle cx="180" cy="175" r="1.6"/><circle cx="218" cy="185" r="1.4"/>
      <circle cx="190" cy="190" r="1.3"/>
    </g>
    <!-- Protective Eco Sleeve (Green) -->
    <path d="M169,115 L172,165 Q200,171 228,165 L231,115 Q200,121 169,115 Z" fill="url(#cupSleeve)"/>
    <!-- Eco Stamp on Sleeve -->
    <circle cx="200" cy="140" r="15" fill="#f0fdf4"/>
    <path d="M195,145 C195,137 200,132 205,133 C205,139 202,146 195,145 Z" fill="#15803d"/>
    <path d="M196,144 Q202,137 204,134" stroke="#86efac" stroke-width="1" fill="none"/>
    <!-- Cup Rim & Drinking Lid -->
    <path d="M160,75 Q200,81 240,75 L240,68 Q200,74 160,68 Z" fill="url(#lidGrad)"/>
    <path d="M166,68 Q200,73 234,68 L232,60 Q200,64 168,60 Z" fill="url(#lidGrad)"/>
    <rect x="194" y="56" width="12" height="4" rx="2" fill="#94a3b8"/>
  </svg>`,

  showcasePlates: `<svg class="showcase-img" viewBox="0 0 400 240" preserveAspectRatio="xMidYMid slice" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="platesBg" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stop-color="#1c1917"/>
        <stop offset="100%" stop-color="#292524"/>
      </linearGradient>
      <linearGradient id="plateGrain" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stop-color="#fef08a"/>
        <stop offset="50%" stop-color="#d97706"/>
        <stop offset="100%" stop-color="#92400e"/>
      </linearGradient>
      <linearGradient id="bowlGrain" x1="0%" y1="0%" x2="0%" y2="100%">
        <stop offset="0%" stop-color="#fef3c7"/>
        <stop offset="100%" stop-color="#b45309"/>
      </linearGradient>
    </defs>
    <rect width="400" height="240" fill="url(#platesBg)"/>
    <circle cx="200" cy="120" r="100" fill="#15803d" opacity="0.15"/>
    <!-- Main Dinner Plate (Areca Palm / Husk Composite) -->
    <ellipse cx="185" cy="130" rx="95" ry="70" fill="url(#plateGrain)"/>
    <!-- Inner Recessed Rim -->
    <ellipse cx="185" cy="130" rx="75" ry="54" fill="#fde68a" stroke="#b45309" stroke-width="2"/>
    <!-- Leaf Texture Lines on Plate -->
    <g stroke="#92400e" stroke-width="1.2" opacity="0.4" fill="none">
      <path d="M125,130 Q185,135 245,130"/>
      <path d="M130,115 Q185,120 240,115"/>
      <path d="M130,145 Q185,150 240,145"/>
    </g>
    <!-- Eco Bowl (Placed on Top Left) -->
    <ellipse cx="150" cy="105" rx="42" ry="28" fill="#78350f" opacity="0.5"/>
    <ellipse cx="150" cy="100" rx="40" ry="25" fill="url(#bowlGrain)"/>
    <ellipse cx="150" cy="97" rx="32" ry="18" fill="#fde68a"/>
    <!-- Eco Wooden Spoon & Fork -->
    <!-- Fork -->
    <g transform="translate(295, 120) rotate(22)">
      <rect x="-4" y="-55" width="8" height="90" rx="4" fill="#fbbf24"/>
      <path d="M-8,-55 L8,-55 L6,-35 Q0,-30 -6,-35 Z" fill="#fbbf24"/>
      <line x1="-4" y1="-55" x2="-4" y2="-40" stroke="#78350f" stroke-width="1.5"/>
      <line x1="0" y1="-55" x2="0" y2="-40" stroke="#78350f" stroke-width="1.5"/>
      <line x1="4" y1="-55" x2="4" y2="-40" stroke="#78350f" stroke-width="1.5"/>
    </g>
    <!-- Spoon -->
    <g transform="translate(265, 135) rotate(15)">
      <rect x="-3" y="-50" width="6" height="85" rx="3" fill="#f59e0b"/>
      <ellipse cx="0" cy="-55" rx="10" ry="15" fill="#f59e0b"/>
      <ellipse cx="0" cy="-55" rx="7" ry="11" fill="#fde68a"/>
    </g>
    <!-- Fresh Green Leaf Accent -->
    <g transform="translate(195, 140)">
      <path d="M0,0 C-15,-20 5,-35 25,-25 C25,-5 10,15 0,0 Z" fill="#22c55e"/>
      <path d="M2,-2 Q14,-15 22,-23" stroke="#86efac" stroke-width="1.2" fill="none"/>
    </g>
  </svg>`,

  showcaseCarryBags: `<svg class="showcase-img" viewBox="0 0 400 240" preserveAspectRatio="xMidYMid slice" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="bagsBg" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stop-color="#064e3b"/>
        <stop offset="100%" stop-color="#022c22"/>
      </linearGradient>
      <linearGradient id="bagFront" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stop-color="#86efac"/>
        <stop offset="50%" stop-color="#4ade80"/>
        <stop offset="100%" stop-color="#16a34a"/>
      </linearGradient>
      <linearGradient id="cornGrad" x1="0%" y1="0%" x2="0%" y2="100%">
        <stop offset="0%" stop-color="#fef08a"/>
        <stop offset="100%" stop-color="#eab308"/>
      </linearGradient>
    </defs>
    <rect width="400" height="240" fill="url(#bagsBg)"/>
    <circle cx="210" cy="120" r="90" fill="#4ade80" opacity="0.15"/>
    <!-- Back Bag Silhouette -->
    <g transform="translate(140, 50)" opacity="0.6">
      <path d="M15,40 L10,150 Q50,155 90,150 L85,40 Z" fill="#15803d"/>
      <path d="M30,40 Q50,0 70,40" stroke="#15803d" stroke-width="7" fill="none" stroke-linecap="round"/>
    </g>
    <!-- Front Compostable Carry Bag -->
    <g transform="translate(180, 55)">
      <!-- Bag Handles -->
      <path d="M35,40 Q60,-5 85,40" stroke="#16a34a" stroke-width="9" fill="none" stroke-linecap="round"/>
      <path d="M35,40 Q60,-5 85,40" stroke="#86efac" stroke-width="4" fill="none" stroke-linecap="round"/>
      <!-- Bag Body -->
      <path d="M15,40 L5,160 Q60,168 115,160 L105,40 Z" fill="url(#bagFront)"/>
      <!-- Bag Fold Lines -->
      <path d="M15,40 L30,161 M105,40 L90,161" stroke="#15803d" stroke-width="1.5" opacity="0.4"/>
      <!-- Circular Compostable Badge on Bag -->
      <circle cx="60" cy="100" r="24" fill="#ffffff" opacity="0.95"/>
      <!-- 3-Arrow Recycling / Compostable Leaf Symbol -->
      <path d="M60,86 C67,86 72,92 70,98 L73,98 L68,104 L63,98 L66,98 C67,93 64,89 60,89 Z" fill="#15803d"/>
      <path d="M72,106 C69,112 62,114 56,111 L55,113 L51,107 L57,104 L56,107 C60,109 66,108 68,104 Z" fill="#15803d"/>
      <path d="M49,98 C50,91 56,87 62,87 L62,84 L67,90 L62,95 L62,92 C58,92 53,95 52,99 Z" fill="#15803d"/>
      <path d="M57,98 C57,94 60,91 63,91 C63,95 61,98 57,98 Z" fill="#22c55e"/>
    </g>
    <!-- Corn Starch Symbol Beside Bag -->
    <g transform="translate(85, 120)">
      <path d="M0,40 Q15,0 30,40 Z" fill="url(#cornGrad)"/>
      <path d="M-8,35 Q5,10 15,45" stroke="#15803d" stroke-width="3" fill="none"/>
      <path d="M38,35 Q25,10 15,45" stroke="#15803d" stroke-width="3" fill="none"/>
      <circle cx="15" cy="22" r="2" fill="#ca8a04"/><circle cx="15" cy="30" r="2" fill="#ca8a04"/>
    </g>
  </svg>`,

  showcaseBioBottles: `<svg class="showcase-img" viewBox="0 0 400 240" preserveAspectRatio="xMidYMid slice" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="fiberBg" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stop-color="#0f172a"/>
        <stop offset="100%" stop-color="#1e293b"/>
      </linearGradient>
      <linearGradient id="bottleBody" x1="0%" y1="0%" x2="100%" y2="0%">
        <stop offset="0%" stop-color="#38bdf8" stop-opacity="0.8"/>
        <stop offset="40%" stop-color="#bae6fd" stop-opacity="0.9"/>
        <stop offset="100%" stop-color="#0284c7" stop-opacity="0.8"/>
      </linearGradient>
      <linearGradient id="yarnSpool" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stop-color="#f59e0b"/>
        <stop offset="50%" stop-color="#d97706"/>
        <stop offset="100%" stop-color="#92400e"/>
      </linearGradient>
      <linearGradient id="caneGreen" x1="0%" y1="0%" x2="0%" y2="100%">
        <stop offset="0%" stop-color="#84cc16"/>
        <stop offset="100%" stop-color="#4d7c0f"/>
      </linearGradient>
    </defs>
    <rect width="400" height="240" fill="url(#fiberBg)"/>
    <circle cx="200" cy="120" r="95" fill="#0284c7" opacity="0.15"/>
    <!-- Sugarcane Stalk in Background -->
    <g transform="translate(100, 30)">
      <rect x="0" y="0" width="16" height="180" rx="3" fill="url(#caneGreen)"/>
      <line x1="0" y1="45" x2="16" y2="45" stroke="#365314" stroke-width="3"/>
      <line x1="0" y1="90" x2="16" y2="90" stroke="#365314" stroke-width="3"/>
      <line x1="0" y1="135" x2="16" y2="135" stroke="#365314" stroke-width="3"/>
      <path d="M16,45 Q45,25 70,30" stroke="#84cc16" stroke-width="3" fill="none" stroke-linecap="round"/>
      <path d="M0,90 Q-30,70 -50,75" stroke="#84cc16" stroke-width="3" fill="none" stroke-linecap="round"/>
    </g>
    <!-- Bio-Bottle (Center Right) -->
    <g transform="translate(170, 45)">
      <!-- Bottle Shadow -->
      <ellipse cx="30" cy="165" rx="25" ry="7" fill="#02131e" opacity="0.6"/>
      <!-- Bottle Cap -->
      <rect x="22" y="5" width="16" height="12" rx="2" fill="#22c55e"/>
      <!-- Neck -->
      <rect x="24" y="17" width="12" height="12" fill="url(#bottleBody)"/>
      <!-- Shoulders & Body -->
      <path d="M24,29 C15,35 10,48 10,65 L10,150 Q30,160 50,150 L50,65 C50,48 45,35 36,29 Z" fill="url(#bottleBody)"/>
      <!-- Droplet / Eco Wave inside bottle -->
      <path d="M30,85 C24,85 20,95 30,108 C40,95 36,85 30,85 Z" fill="#ffffff" opacity="0.85"/>
      <path d="M12,125 Q30,135 48,125" stroke="#ffffff" stroke-width="2" opacity="0.5" fill="none"/>
    </g>
    <!-- Spool of Crop Fiber Yarn (Right Foreground) -->
    <g transform="translate(260, 110)">
      <!-- Spool Body -->
      <ellipse cx="35" cy="20" rx="30" ry="12" fill="#78350f"/>
      <rect x="5" y="20" width="60" height="50" fill="url(#yarnSpool)"/>
      <ellipse cx="35" cy="70" rx="30" ry="12" fill="#b45309"/>
      <!-- Yarn wound lines -->
      <path d="M6,30 Q35,40 64,30 M6,42 Q35,52 64,42 M6,55 Q35,65 64,55" stroke="#fef3c7" stroke-width="1.8" fill="none" opacity="0.6"/>
      <!-- Unwound Thread flowing -->
      <path d="M10,60 Q-20,75 -40,65 Q-60,55 -75,70" stroke="#f59e0b" stroke-width="2.5" fill="none" stroke-linecap="round"/>
    </g>
  </svg>`,

  // AP & TS Map Visualization SVG
  mapNetwork: `<svg class="map-bg-image" viewBox="0 0 1200 600" preserveAspectRatio="xMidYMid slice" xmlns="http://www.w3.org/2000/svg" style="opacity: 0.35; width: 100%; height: 100%; display: block;">
    <defs>
      <linearGradient id="mapGridGrad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stop-color="#052e16"/>
        <stop offset="100%" stop-color="#0f172a"/>
      </linearGradient>
      <radialGradient id="hubGlow" cx="50%" cy="50%" r="50%">
        <stop offset="0%" stop-color="#22c55e" stop-opacity="0.9"/>
        <stop offset="100%" stop-color="#22c55e" stop-opacity="0"/>
      </radialGradient>
    </defs>
    <rect width="1200" height="600" fill="url(#mapGridGrad)"/>
    <!-- Grid Pattern -->
    <g stroke="#1e3a29" stroke-width="0.8" opacity="0.5">
      <line x1="0" y1="100" x2="1200" y2="100"/><line x1="0" y1="200" x2="1200" y2="200"/>
      <line x1="0" y1="300" x2="1200" y2="300"/><line x1="0" y1="400" x2="1200" y2="400"/>
      <line x1="0" y1="500" x2="1200" y2="500"/>
      <line x1="200" y1="0" x2="200" y2="600"/><line x1="400" y1="0" x2="400" y2="600"/>
      <line x1="600" y1="0" x2="600" y2="600"/><line x1="800" y1="0" x2="800" y2="600"/>
      <line x1="1000" y1="0" x2="1000" y2="600"/>
    </g>
    <!-- Simplified AP & TS Territory Contours -->
    <path d="M350,120 Q550,100 750,180 T950,220 Q1050,300 900,450 T650,520 Q500,550 420,440 T320,300 Z" fill="#14532d" opacity="0.25" stroke="#22c55e" stroke-width="2" stroke-dasharray="8 4"/>
    <!-- Network Supply Chain Route Lines -->
    <g stroke="#4ade80" stroke-width="2" fill="none" opacity="0.75" stroke-linecap="round">
      <path d="M480,220 L620,290 L750,260 L880,210" stroke-dasharray="5 3"/>
      <path d="M480,220 L450,360 L580,420 L720,480" stroke-dasharray="5 3"/>
      <path d="M620,290 L580,420 L750,360 L750,260" stroke-dasharray="5 3"/>
      <path d="M750,260 L850,340 L720,480" stroke-dasharray="5 3"/>
    </g>
    <!-- Digital Hub Nodes with Glowing Rings -->
    <!-- Hyderabad -->
    <circle cx="480" cy="220" r="28" fill="url(#hubGlow)"/><circle cx="480" cy="220" r="7" fill="#4ade80"/><circle cx="480" cy="220" r="3" fill="#ffffff"/>
    <text x="480" y="245" fill="#86efac" font-size="12" font-family="Inter, sans-serif" font-weight="700" text-anchor="middle">Hyderabad Hub</text>
    <!-- Warangal -->
    <circle cx="580" cy="180" r="18" fill="url(#hubGlow)"/><circle cx="580" cy="180" r="5" fill="#22c55e"/>
    <text x="580" y="200" fill="#a7f3d0" font-size="11" font-family="Inter, sans-serif" text-anchor="middle">Warangal</text>
    <!-- Vijayawada / Amaravati -->
    <circle cx="620" cy="290" r="26" fill="url(#hubGlow)"/><circle cx="620" cy="290" r="7" fill="#4ade80"/><circle cx="620" cy="290" r="3" fill="#ffffff"/>
    <text x="620" y="315" fill="#86efac" font-size="12" font-family="Inter, sans-serif" font-weight="700" text-anchor="middle">Amaravati / Vijayawada</text>
    <!-- Guntur -->
    <circle cx="580" cy="350" r="20" fill="url(#hubGlow)"/><circle cx="580" cy="350" r="6" fill="#22c55e"/>
    <text x="580" y="372" fill="#a7f3d0" font-size="11" font-family="Inter, sans-serif" text-anchor="middle">Guntur</text>
    <!-- East Godavari (Rajahmundry/Kakinada) -->
    <circle cx="750" cy="260" r="24" fill="url(#hubGlow)"/><circle cx="750" cy="260" r="6" fill="#4ade80"/>
    <text x="750" y="285" fill="#a7f3d0" font-size="11" font-family="Inter, sans-serif" text-anchor="middle">East Godavari</text>
    <!-- Visakhapatnam -->
    <circle cx="880" cy="210" r="22" fill="url(#hubGlow)"/><circle cx="880" cy="210" r="6" fill="#4ade80"/>
    <text x="880" y="235" fill="#86efac" font-size="11" font-family="Inter, sans-serif" text-anchor="middle">Visakhapatnam Port</text>
    <!-- Tirupati / Chittoor -->
    <circle cx="720" cy="480" r="22" fill="url(#hubGlow)"/><circle cx="720" cy="480" r="6" fill="#22c55e"/>
    <text x="720" y="505" fill="#a7f3d0" font-size="11" font-family="Inter, sans-serif" text-anchor="middle">Tirupati / Chittoor</text>
    <!-- Anantapur -->
    <circle cx="450" cy="420" r="18" fill="url(#hubGlow)"/><circle cx="450" cy="420" r="5" fill="#22c55e"/>
    <text x="450" y="442" fill="#a7f3d0" font-size="11" font-family="Inter, sans-serif" text-anchor="middle">Anantapur</text>
  </svg>`
};

module.exports = SVG_ICONS;
