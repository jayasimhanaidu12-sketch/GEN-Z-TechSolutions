// svg_generators.js - Clean, lightweight, self-contained SVG generators

function getProduceSvg(cropType, name) {
  const type = (cropType || '').toLowerCase();
  
  if (type.includes('paddy') || type.includes('rice')) {
    return `<svg class="produce-img" viewBox="0 0 400 240" preserveAspectRatio="xMidYMid slice" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="paddyBg" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" stop-color="#78350f"/><stop offset="100%" stop-color="#451a03"/></linearGradient>
        <linearGradient id="riceGold" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" stop-color="#fef08a"/><stop offset="50%" stop-color="#f59e0b"/><stop offset="100%" stop-color="#b45309"/></linearGradient>
      </defs>
      <rect width="400" height="240" fill="url(#paddyBg)"/>
      <circle cx="200" cy="120" r="85" fill="#f59e0b" opacity="0.15"/>
      <!-- Arching Paddy Stalks -->
      <g transform="translate(180, 150) rotate(-20)">
        <path d="M0,60 Q-15,-20 30,-90 Q50,-120 70,-130" stroke="#ca8a04" stroke-width="4" fill="none" stroke-linecap="round"/>
        <!-- Golden Grains -->
        <g fill="url(#riceGold)" stroke="#78350f" stroke-width="0.8">
          <ellipse cx="65" cy="-125" rx="7" ry="12" transform="rotate(35 65 -125)"/>
          <ellipse cx="50" cy="-115" rx="7" ry="13" transform="rotate(40 50 -115)"/>
          <ellipse cx="35" cy="-100" rx="7" ry="13" transform="rotate(35 35 -100)"/>
          <ellipse cx="20" cy="-80" rx="7" ry="13" transform="rotate(25 20 -80)"/>
          <ellipse cx="5" cy="-55" rx="7" ry="12" transform="rotate(15 5 -55)"/>
          <ellipse cx="-8" cy="-30" rx="6" ry="11" transform="rotate(5 -8 -30)"/>
          <!-- Branch 2 -->
          <ellipse cx="58" cy="-105" rx="6" ry="11" transform="rotate(60 58 -105)"/>
          <ellipse cx="42" cy="-88" rx="6" ry="11" transform="rotate(55 42 -88)"/>
          <ellipse cx="25" cy="-68" rx="6" ry="11" transform="rotate(50 25 -68)"/>
        </g>
        <!-- Flag Leaf -->
        <path d="M-5,10 C-40,-10 -70,-50 -85,-90 C-60,-55 -30,-30 -5,5 Z" fill="#22c55e"/>
      </g>
      <!-- Crop Badge -->
      <rect x="20" y="20" width="75" height="26" rx="13" fill="#15803d" opacity="0.9"/>
      <text x="57" y="37" font-size="11" font-family="Inter, sans-serif" font-weight="700" fill="#ffffff" text-anchor="middle">PADDY</text>
    </svg>`;
  }

  if (type.includes('corn')) {
    return `<svg class="produce-img" viewBox="0 0 400 240" preserveAspectRatio="xMidYMid slice" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="cornBg" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" stop-color="#14532d"/><stop offset="100%" stop-color="#052e16"/></linearGradient>
        <linearGradient id="cornCob" x1="0%" y1="0%" x2="100%" y2="0%"><stop offset="0%" stop-color="#f59e0b"/><stop offset="50%" stop-color="#fde047"/><stop offset="100%" stop-color="#eab308"/></linearGradient>
      </defs>
      <rect width="400" height="240" fill="url(#cornBg)"/>
      <circle cx="200" cy="120" r="85" fill="#eab308" opacity="0.15"/>
      <g transform="translate(200, 120) rotate(-25)">
        <!-- Corn Ear Body -->
        <path d="M-22,-70 C-24,-85 0,-95 0,-95 C0,-95 24,-85 22,-70 L20,40 C18,60 -18,60 -20,40 Z" fill="url(#cornCob)"/>
        <!-- Kernels Grid -->
        <g fill="#ca8a04" opacity="0.7">
          <circle cx="-10" cy="-60" r="3"/><circle cx="0" cy="-60" r="3"/><circle cx="10" cy="-60" r="3"/>
          <circle cx="-12" cy="-45" r="3.5"/><circle cx="0" cy="-45" r="3.5"/><circle cx="12" cy="-45" r="3.5"/>
          <circle cx="-14" cy="-30" r="3.8"/><circle cx="0" cy="-30" r="3.8"/><circle cx="14" cy="-30" r="3.8"/>
          <circle cx="-14" cy="-15" r="4"/><circle cx="0" cy="-15" r="4"/><circle cx="14" cy="-15" r="4"/>
          <circle cx="-14" cy="0" r="4"/><circle cx="0" cy="0" r="4"/><circle cx="14" cy="0" r="4"/>
          <circle cx="-14" cy="15" r="4"/><circle cx="0" cy="15" r="4"/><circle cx="14" cy="15" r="4"/>
          <circle cx="-12" cy="30" r="3.5"/><circle cx="0" cy="30" r="3.5"/><circle cx="12" cy="30" r="3.5"/>
        </g>
        <!-- Husks (Green Leaves) -->
        <path d="M-20,40 C-35,10 -40,-40 -15,-80 C-30,-20 -25,20 -15,50 Z" fill="#22c55e"/>
        <path d="M20,40 C35,10 40,-40 15,-80 C30,-20 25,20 15,50 Z" fill="#16a34a"/>
        <path d="M0,50 L0,75" stroke="#15803d" stroke-width="8" stroke-linecap="round"/>
        <!-- Silk Tassels -->
        <path d="M0,-95 Q-15,-115 -25,-125 M0,-95 Q0,-118 5,-130 M0,-95 Q15,-115 25,-125" stroke="#b45309" stroke-width="2" fill="none"/>
      </g>
      <rect x="20" y="20" width="70" height="26" rx="13" fill="#ca8a04" opacity="0.9"/>
      <text x="55" y="37" font-size="11" font-family="Inter, sans-serif" font-weight="700" fill="#ffffff" text-anchor="middle">CORN</text>
    </svg>`;
  }

  if (type.includes('sugarcane')) {
    return `<svg class="produce-img" viewBox="0 0 400 240" preserveAspectRatio="xMidYMid slice" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="caneBg" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" stop-color="#1e3a1e"/><stop offset="100%" stop-color="#0f291e"/></linearGradient>
        <linearGradient id="caneStalk" x1="0%" y1="0%" x2="100%" y2="0%"><stop offset="0%" stop-color="#65a30d"/><stop offset="50%" stop-color="#84cc16"/><stop offset="100%" stop-color="#4d7c0f"/></linearGradient>
      </defs>
      <rect width="400" height="240" fill="url(#caneBg)"/>
      <circle cx="200" cy="120" r="85" fill="#84cc16" opacity="0.15"/>
      <g transform="translate(160, 30)">
        <!-- Stalk 1 -->
        <rect x="20" y="0" width="22" height="180" rx="4" fill="url(#caneStalk)"/>
        <line x1="20" y1="40" x2="42" y2="40" stroke="#365314" stroke-width="3"/>
        <line x1="20" y1="85" x2="42" y2="85" stroke="#365314" stroke-width="3"/>
        <line x1="20" y1="130" x2="42" y2="130" stroke="#365314" stroke-width="3"/>
        <!-- Stalk 2 -->
        <rect x="55" y="20" width="20" height="160" rx="4" fill="url(#caneStalk)"/>
        <line x1="55" y1="55" x2="75" y2="55" stroke="#365314" stroke-width="3"/>
        <line x1="55" y1="100" x2="75" y2="100" stroke="#365314" stroke-width="3"/>
        <line x1="55" y1="145" x2="75" y2="145" stroke="#365314" stroke-width="3"/>
        <!-- Arching leaves -->
        <path d="M42,40 Q85,15 120,20" stroke="#84cc16" stroke-width="3.5" fill="none" stroke-linecap="round"/>
        <path d="M20,85 Q-20,60 -50,65" stroke="#a3e635" stroke-width="3.5" fill="none" stroke-linecap="round"/>
        <path d="M75,55 Q115,35 140,40" stroke="#a3e635" stroke-width="3" fill="none" stroke-linecap="round"/>
      </g>
      <rect x="20" y="20" width="105" height="26" rx="13" fill="#4d7c0f" opacity="0.9"/>
      <text x="72" y="37" font-size="11" font-family="Inter, sans-serif" font-weight="700" fill="#ffffff" text-anchor="middle">SUGARCANE</text>
    </svg>`;
  }

  if (type.includes('pulses') || type.includes('gram')) {
    return `<svg class="produce-img" viewBox="0 0 400 240" preserveAspectRatio="xMidYMid slice" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="pulseBg" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" stop-color="#431407"/><stop offset="100%" stop-color="#292524"/></linearGradient>
        <linearGradient id="podGrad" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" stop-color="#84cc16"/><stop offset="100%" stop-color="#4d7c0f"/></linearGradient>
      </defs>
      <rect width="400" height="240" fill="url(#pulseBg)"/>
      <circle cx="200" cy="120" r="85" fill="#ea580c" opacity="0.15"/>
      <g transform="translate(140, 60)">
        <!-- Pod Shell -->
        <path d="M10,80 Q70,20 140,40 Q80,80 10,80 Z" fill="url(#podGrad)"/>
        <!-- Pod Open Flap -->
        <path d="M10,80 Q70,45 140,40 Q85,100 10,80 Z" fill="#65a30d" opacity="0.7"/>
        <!-- Red Gram Seeds inside pod -->
        <circle cx="45" cy="65" r="9" fill="#dc2626" stroke="#991b1b" stroke-width="1.5"/>
        <circle cx="70" cy="60" r="9.5" fill="#ea580c" stroke="#9a3412" stroke-width="1.5"/>
        <circle cx="95" cy="56" r="9" fill="#dc2626" stroke="#991b1b" stroke-width="1.5"/>
        <circle cx="120" cy="50" r="8.5" fill="#f97316" stroke="#c2410c" stroke-width="1.5"/>
        <!-- Stem & Leaves -->
        <path d="M10,80 Q-15,85 -30,100" stroke="#4d7c0f" stroke-width="4" fill="none" stroke-linecap="round"/>
        <path d="M-15,85 C-30,65 -15,50 5,65 Z" fill="#84cc16"/>
      </g>
      <rect x="20" y="20" width="80" height="26" rx="13" fill="#c2410c" opacity="0.9"/>
      <text x="60" y="37" font-size="11" font-family="Inter, sans-serif" font-weight="700" fill="#ffffff" text-anchor="middle">PULSES</text>
    </svg>`;
  }

  if (type.includes('spices') || type.includes('chili') || type.includes('chilli')) {
    return `<svg class="produce-img" viewBox="0 0 400 240" preserveAspectRatio="xMidYMid slice" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="chiliBg" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" stop-color="#4c0519"/><stop offset="100%" stop-color="#1f1215"/></linearGradient>
        <linearGradient id="chiliRed" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" stop-color="#f43f5e"/><stop offset="50%" stop-color="#e11d48"/><stop offset="100%" stop-color="#9f1239"/></linearGradient>
      </defs>
      <rect width="400" height="240" fill="url(#chiliBg)"/>
      <circle cx="200" cy="120" r="85" fill="#e11d48" opacity="0.2"/>
      <g transform="translate(190, 110)">
        <!-- Red Chili 1 -->
        <path d="M-30,-50 C-10,-55 20,-30 40,20 C48,42 35,70 15,90 C18,75 25,50 15,25 C5,0 -15,-25 -30,-50 Z" fill="url(#chiliRed)"/>
        <!-- Highlight Sheen -->
        <path d="M-10,-35 C10,-15 25,10 18,40" stroke="#fecdd3" stroke-width="2.5" fill="none" opacity="0.6" stroke-linecap="round"/>
        <!-- Green Calyx and Stem -->
        <path d="M-30,-50 C-25,-55 -35,-65 -30,-75 C-34,-70 -38,-60 -35,-52 Z" fill="#15803d"/>
        <path d="M-36,-48 Q-28,-42 -22,-52 Q-28,-56 -36,-48 Z" fill="#16a34a"/>
        <!-- Red Chili 2 (Smaller Behind) -->
        <g transform="translate(-40, 10) rotate(-35)" opacity="0.75">
          <path d="M-20,-40 C-5,-45 15,-20 30,20 C35,38 25,60 10,75 C12,62 18,40 10,20 C2,0 -10,-20 -20,-40 Z" fill="url(#chiliRed)"/>
        </g>
      </g>
      <rect x="20" y="20" width="75" height="26" rx="13" fill="#be123c" opacity="0.9"/>
      <text x="57" y="37" font-size="11" font-family="Inter, sans-serif" font-weight="700" fill="#ffffff" text-anchor="middle">SPICES</text>
    </svg>`;
  }

  if (type.includes('cotton')) {
    return `<svg class="produce-img" viewBox="0 0 400 240" preserveAspectRatio="xMidYMid slice" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="cottonBg" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" stop-color="#0f172a"/><stop offset="100%" stop-color="#1e293b"/></linearGradient>
      </defs>
      <rect width="400" height="240" fill="url(#cottonBg)"/>
      <circle cx="200" cy="120" r="85" fill="#f8fafc" opacity="0.1"/>
      <g transform="translate(200, 125)">
        <!-- Cotton Branch -->
        <path d="M-50,70 Q-10,30 20,-20 Q40,-60 50,-80" stroke="#78350f" stroke-width="4.5" fill="none" stroke-linecap="round"/>
        <!-- Sepals (Brown calyx husk) -->
        <path d="M0,0 L-22,-20 L-5,-25 L-12,-40 L5,-30 L20,-42 L15,-22 L30,-15 Z" fill="#92400e"/>
        <!-- Fluffy White Cotton Boll Puffs -->
        <circle cx="-12" cy="-18" r="18" fill="#f1f5f9"/>
        <circle cx="12" cy="-18" r="18" fill="#e2e8f0"/>
        <circle cx="0" cy="-32" r="19" fill="#ffffff"/>
        <circle cx="-5" cy="-8" r="16" fill="#f8fafc"/>
        <circle cx="8" cy="-8" r="16" fill="#f1f5f9"/>
        <!-- Small Boll 2 -->
        <g transform="translate(-35, 30) scale(0.65)">
          <path d="M0,0 L-20,-18 L-5,-22 L-10,-35 L5,-25 L18,-35 L12,-18 Z" fill="#92400e"/>
          <circle cx="-10" cy="-15" r="16" fill="#f8fafc"/>
          <circle cx="10" cy="-15" r="16" fill="#ffffff"/>
          <circle cx="0" cy="-28" r="16" fill="#f1f5f9"/>
        </g>
      </g>
      <rect x="20" y="20" width="80" height="26" rx="13" fill="#0284c7" opacity="0.9"/>
      <text x="60" y="37" font-size="11" font-family="Inter, sans-serif" font-weight="700" fill="#ffffff" text-anchor="middle">COTTON</text>
    </svg>`;
  }

  if (type.includes('nuts') || type.includes('groundnut') || type.includes('peanut')) {
    return `<svg class="produce-img" viewBox="0 0 400 240" preserveAspectRatio="xMidYMid slice" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="nutBg" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" stop-color="#3b1a08"/><stop offset="100%" stop-color="#1f1105"/></linearGradient>
        <linearGradient id="podNut" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" stop-color="#d97706"/><stop offset="100%" stop-color="#92400e"/></linearGradient>
      </defs>
      <rect width="400" height="240" fill="url(#nutBg)"/>
      <circle cx="200" cy="120" r="85" fill="#f59e0b" opacity="0.15"/>
      <g transform="translate(190, 115) rotate(15)">
        <!-- Peanut Shell 1 -->
        <path d="M-60,-15 C-75,-10 -75,20 -55,25 C-35,30 -25,10 -15,12 C-5,14 5,32 25,28 C45,24 50,-5 35,-15 C20,-25 5,-10 -5,-12 C-15,-14 -25,-32 -45,-28 C-52,-26 -58,-20 -60,-15 Z" fill="url(#podNut)"/>
        <!-- Shell Mesh Texture -->
        <g stroke="#78350f" stroke-width="1.2" opacity="0.5" fill="none">
          <path d="M-55,-10 Q-35,10 -15,0 Q5,15 25,0"/>
          <path d="M-50,10 Q-35,-5 -15,5 Q5,-5 20,10"/>
        </g>
        <!-- Peanut Kernel Outside -->
        <g transform="translate(15, 30)">
          <ellipse cx="0" cy="0" rx="14" ry="19" fill="#f43f5e" stroke="#be123c" stroke-width="1.5" transform="rotate(25)"/>
          <ellipse cx="22" cy="10" rx="13" ry="18" fill="#fda4af" stroke="#e11d48" stroke-width="1.5" transform="rotate(-15 22 10)"/>
        </g>
      </g>
      <rect x="20" y="20" width="70" height="26" rx="13" fill="#b45309" opacity="0.9"/>
      <text x="55" y="37" font-size="11" font-family="Inter, sans-serif" font-weight="700" fill="#ffffff" text-anchor="middle">NUTS</text>
    </svg>`;
  }

  if (type.includes('fruit') || type.includes('lime') || type.includes('citrus')) {
    return `<svg class="produce-img" viewBox="0 0 400 240" preserveAspectRatio="xMidYMid slice" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="limeBg" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" stop-color="#14532d"/><stop offset="100%" stop-color="#052e16"/></linearGradient>
        <linearGradient id="limeSlice" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" stop-color="#bef264"/><stop offset="100%" stop-color="#65a30d"/></linearGradient>
      </defs>
      <rect width="400" height="240" fill="url(#limeBg)"/>
      <circle cx="200" cy="120" r="85" fill="#84cc16" opacity="0.18"/>
      <g transform="translate(190, 120)">
        <!-- Whole Sweet Lime Behind -->
        <circle cx="-35" cy="-10" r="45" fill="#4d7c0f"/>
        <circle cx="-35" cy="-10" r="42" fill="#65a30d"/>
        <!-- Fresh Green Leaf on Stem -->
        <path d="M-40,-55 C-70,-75 -40,-95 -20,-80 C-10,-70 -25,-60 -40,-55 Z" fill="#22c55e"/>
        <!-- Cut Citrus Slice (Foreground) -->
        <g transform="translate(25, 10)">
          <!-- Peel (Darker Green Rind) -->
          <circle cx="0" cy="0" r="48" fill="#365314"/>
          <!-- Pith (White ring) -->
          <circle cx="0" cy="0" r="44" fill="#f7fee7"/>
          <!-- Pulp Base -->
          <circle cx="0" cy="0" r="40" fill="url(#limeSlice)"/>
          <!-- Segments -->
          <g fill="#ecfccb" stroke="#65a30d" stroke-width="1.5">
            <path d="M0,0 L20,30 A36,36 0 0,0 35,10 Z"/>
            <path d="M0,0 L35,-10 A36,36 0 0,0 20,-30 Z"/>
            <path d="M0,0 L10,-35 A36,36 0 0,0 -10,-35 Z"/>
            <path d="M0,0 L-20,-30 A36,36 0 0,0 -35,-10 Z"/>
            <path d="M0,0 L-35,10 A36,36 0 0,0 -20,30 Z"/>
            <path d="M0,0 L-10,35 A36,36 0 0,0 10,35 Z"/>
          </g>
          <circle cx="0" cy="0" r="4" fill="#f7fee7"/>
        </g>
      </g>
      <rect x="20" y="20" width="75" height="26" rx="13" fill="#65a30d" opacity="0.9"/>
      <text x="57" y="37" font-size="11" font-family="Inter, sans-serif" font-weight="700" fill="#ffffff" text-anchor="middle">FRUITS</text>
    </svg>`;
  }

  // Default / Millet
  return `<svg class="produce-img" viewBox="0 0 400 240" preserveAspectRatio="xMidYMid slice" xmlns="http://www.w3.org/2000/svg">
    <rect width="400" height="240" fill="#292524"/>
    <circle cx="200" cy="120" r="70" fill="#15803d" opacity="0.2"/>
    <path d="M200,60 C230,100 230,160 200,180 C170,160 170,100 200,60 Z" fill="#22c55e"/>
    <rect x="20" y="20" width="80" height="26" rx="13" fill="#15803d" opacity="0.9"/>
    <text x="60" y="37" font-size="11" font-family="Inter, sans-serif" font-weight="700" fill="#ffffff" text-anchor="middle">PRODUCE</text>
  </svg>`;
}

function getWasteRecSvg(title, wasteType) {
  const t = (title || '').toLowerCase();
  
  if (t.includes('plate') || t.includes('bowl') || t.includes('tableware')) {
    return `<svg class="waste-rec-img" viewBox="0 0 400 240" preserveAspectRatio="xMidYMid slice" xmlns="http://www.w3.org/2000/svg">
      <rect width="400" height="240" fill="#1c1917"/>
      <circle cx="200" cy="120" r="90" fill="#22c55e" opacity="0.12"/>
      <ellipse cx="200" cy="130" rx="90" ry="60" fill="#d97706"/>
      <ellipse cx="200" cy="130" rx="72" ry="46" fill="#fde68a" stroke="#b45309" stroke-width="2"/>
      <ellipse cx="160" cy="105" rx="36" ry="22" fill="#fef3c7" stroke="#92400e" stroke-width="1.5"/>
      <path d="M270,100 L300,150" stroke="#fbbf24" stroke-width="5" stroke-linecap="round"/>
      <path d="M255,115 L285,165" stroke="#f59e0b" stroke-width="4" stroke-linecap="round"/>
      <circle cx="200" cy="130" r="6" fill="#16a34a"/>
    </svg>`;
  }

  if (t.includes('cup')) {
    return `<svg class="waste-rec-img" viewBox="0 0 400 240" preserveAspectRatio="xMidYMid slice" xmlns="http://www.w3.org/2000/svg">
      <rect width="400" height="240" fill="#14532d"/>
      <circle cx="200" cy="120" r="85" fill="#22c55e" opacity="0.15"/>
      <path d="M190,55 Q185,40 195,30 M210,50 Q220,35 210,25" stroke="#86efac" stroke-width="2.5" fill="none" stroke-linecap="round"/>
      <path d="M170,75 L180,185 Q200,192 220,185 L230,75 Z" fill="#d97706"/>
      <path d="M174,115 L177,155 Q200,161 223,155 L226,115 Z" fill="#16a34a"/>
      <circle cx="200" cy="135" r="10" fill="#f0fdf4"/>
      <path d="M165,75 Q200,80 235,75 L233,65 Q200,70 167,65 Z" fill="#e2e8f0"/>
    </svg>`;
  }

  if (t.includes('bag') || t.includes('pouch')) {
    return `<svg class="waste-rec-img" viewBox="0 0 400 240" preserveAspectRatio="xMidYMid slice" xmlns="http://www.w3.org/2000/svg">
      <rect width="400" height="240" fill="#064e3b"/>
      <circle cx="200" cy="120" r="85" fill="#4ade80" opacity="0.15"/>
      <path d="M180,60 Q200,20 220,60" stroke="#16a34a" stroke-width="7" fill="none" stroke-linecap="round"/>
      <path d="M160,60 L150,180 Q200,188 250,180 L240,60 Z" fill="#4ade80"/>
      <circle cx="200" cy="120" r="22" fill="#ffffff"/>
      <path d="M195,123 C195,115 200,110 205,111 C205,117 202,124 195,123 Z" fill="#15803d"/>
    </svg>`;
  }

  if (t.includes('bottle')) {
    return `<svg class="waste-rec-img" viewBox="0 0 400 240" preserveAspectRatio="xMidYMid slice" xmlns="http://www.w3.org/2000/svg">
      <rect width="400" height="240" fill="#0f172a"/>
      <circle cx="200" cy="120" r="85" fill="#0284c7" opacity="0.15"/>
      <rect x="192" y="45" width="16" height="12" rx="2" fill="#22c55e"/>
      <rect x="194" y="57" width="12" height="12" fill="#38bdf8"/>
      <path d="M194,69 C185,75 180,88 180,105 L180,180 Q200,188 220,180 L220,105 C220,88 215,75 206,69 Z" fill="#38bdf8" opacity="0.85"/>
      <circle cx="200" cy="130" r="8" fill="#ffffff" opacity="0.7"/>
    </svg>`;
  }

  if (t.includes('fuel') || t.includes('pellet') || t.includes('briquette')) {
    return `<svg class="waste-rec-img" viewBox="0 0 400 240" preserveAspectRatio="xMidYMid slice" xmlns="http://www.w3.org/2000/svg">
      <rect width="400" height="240" fill="#292524"/>
      <circle cx="200" cy="120" r="85" fill="#f59e0b" opacity="0.15"/>
      <!-- Fuel Pellets/Briquettes -->
      <rect x="145" y="110" width="30" height="55" rx="10" fill="#78350f" stroke="#b45309" stroke-width="2"/>
      <rect x="185" y="95" width="30" height="70" rx="10" fill="#a16207" stroke="#eab308" stroke-width="2"/>
      <rect x="225" y="115" width="30" height="50" rx="10" fill="#78350f" stroke="#b45309" stroke-width="2"/>
      <!-- Clean Flame Symbol -->
      <path d="M200,45 C210,65 220,75 210,90 C205,80 195,80 190,70 C185,85 180,80 200,45 Z" fill="#f97316"/>
    </svg>`;
  }

  if (t.includes('insulation') || t.includes('board')) {
    return `<svg class="waste-rec-img" viewBox="0 0 400 240" preserveAspectRatio="xMidYMid slice" xmlns="http://www.w3.org/2000/svg">
      <rect width="400" height="240" fill="#1c1917"/>
      <circle cx="200" cy="120" r="85" fill="#fbbf24" opacity="0.12"/>
      <!-- Insulation / Composite Board layers -->
      <polygon points="120,80 260,60 280,140 140,160" fill="#d97706"/>
      <polygon points="120,95 260,75 280,155 140,175" fill="#f59e0b" opacity="0.9"/>
      <polygon points="120,110 260,90 280,170 140,190" fill="#fde68a" opacity="0.95"/>
      <line x1="140" y1="125" x2="260" y2="108" stroke="#b45309" stroke-width="2"/>
    </svg>`;
  }

  if (t.includes('ethanol') || t.includes('power')) {
    return `<svg class="waste-rec-img" viewBox="0 0 400 240" preserveAspectRatio="xMidYMid slice" xmlns="http://www.w3.org/2000/svg">
      <rect width="400" height="240" fill="#064e3b"/>
      <circle cx="200" cy="120" r="85" fill="#10b981" opacity="0.18"/>
      <!-- Flask or Energy Turbine -->
      <path d="M193,50 L207,50 L207,85 L235,160 Q200,175 165,160 L193,85 Z" fill="#047857" stroke="#34d399" stroke-width="2"/>
      <path d="M172,145 Q200,160 228,145 L235,160 Q200,175 165,160 Z" fill="#6ee7b7"/>
      <circle cx="195" cy="130" r="4" fill="#ffffff" opacity="0.8"/>
      <circle cx="208" cy="120" r="3" fill="#ffffff" opacity="0.8"/>
      <path d="M200,65 L190,95 L205,95 L195,125" stroke="#facc15" stroke-width="2.5" fill="none" stroke-linecap="round"/>
    </svg>`;
  }

  if (t.includes('compost') || t.includes('mushroom')) {
    return `<svg class="waste-rec-img" viewBox="0 0 400 240" preserveAspectRatio="xMidYMid slice" xmlns="http://www.w3.org/2000/svg">
      <rect width="400" height="240" fill="#1c1917"/>
      <circle cx="200" cy="120" r="85" fill="#22c55e" opacity="0.15"/>
      <!-- Soil Mound -->
      <ellipse cx="200" cy="170" rx="90" ry="25" fill="#78350f"/>
      <ellipse cx="200" cy="165" rx="75" ry="18" fill="#451a03"/>
      <!-- Sprout / Plant -->
      <path d="M200,165 Q195,120 200,95" stroke="#22c55e" stroke-width="4.5" fill="none" stroke-linecap="round"/>
      <path d="M200,120 C180,105 175,85 198,90" fill="#4ade80"/>
      <path d="M200,110 C220,95 225,75 202,80" fill="#86efac"/>
    </svg>`;
  }

  if (t.includes('paper') || t.includes('card') || t.includes('tag')) {
    return `<svg class="waste-rec-img" viewBox="0 0 400 240" preserveAspectRatio="xMidYMid slice" xmlns="http://www.w3.org/2000/svg">
      <rect width="400" height="240" fill="#1e293b"/>
      <circle cx="200" cy="120" r="85" fill="#f1f5f9" opacity="0.1"/>
      <!-- Stack of Natural Paper Sheets -->
      <polygon points="140,80 240,65 265,155 165,170" fill="#fef3c7" stroke="#d97706" stroke-width="1.5"/>
      <polygon points="135,90 235,75 260,165 160,180" fill="#fef9c3" stroke="#d97706" stroke-width="1.5"/>
      <polygon points="130,100 230,85 255,175 155,190" fill="#ffffff" stroke="#d97706" stroke-width="1.5"/>
      <!-- Natural Leaf stamp -->
      <circle cx="195" cy="140" r="12" fill="#15803d"/>
      <path d="M192,143 C192,137 196,133 200,134 C200,139 197,144 192,143 Z" fill="#86efac"/>
    </svg>`;
  }

  if (t.includes('textile') || t.includes('fiber') || t.includes('rope') || t.includes('craft')) {
    return `<svg class="waste-rec-img" viewBox="0 0 400 240" preserveAspectRatio="xMidYMid slice" xmlns="http://www.w3.org/2000/svg">
      <rect width="400" height="240" fill="#1e1b4b"/>
      <circle cx="200" cy="120" r="85" fill="#a855f7" opacity="0.15"/>
      <!-- Spool of Natural Yarn -->
      <ellipse cx="200" cy="80" rx="35" ry="14" fill="#78350f"/>
      <rect x="165" y="80" width="70" height="65" fill="#d97706"/>
      <ellipse cx="200" cy="145" rx="35" ry="14" fill="#b45309"/>
      <!-- Windings -->
      <path d="M166,95 Q200,105 234,95 M166,110 Q200,120 234,110 M166,125 Q200,135 234,125" stroke="#fef3c7" stroke-width="2" fill="none" opacity="0.6"/>
      <!-- Flowing Thread -->
      <path d="M170,140 Q130,165 110,150 Q90,135 70,155" stroke="#f59e0b" stroke-width="3" fill="none" stroke-linecap="round"/>
    </svg>`;
  }

  if (t.includes('packaging') || t.includes('gift')) {
    return `<svg class="waste-rec-img" viewBox="0 0 400 240" preserveAspectRatio="xMidYMid slice" xmlns="http://www.w3.org/2000/svg">
      <rect width="400" height="240" fill="#18181b"/>
      <circle cx="200" cy="120" r="85" fill="#22c55e" opacity="0.15"/>
      <!-- Eco Box Packaging -->
      <polygon points="200,60 260,85 200,110 140,85" fill="#ca8a04"/>
      <polygon points="140,85 200,110 200,175 140,150" fill="#a16207"/>
      <polygon points="200,110 260,85 260,150 200,175" fill="#854d0e"/>
      <!-- Green Eco Ribbon -->
      <path d="M200,60 L200,175" stroke="#22c55e" stroke-width="4"/>
      <path d="M140,85 L260,85" stroke="#22c55e" stroke-width="4"/>
    </svg>`;
  }

  // Generic Eco Product
  return `<svg class="waste-rec-img" viewBox="0 0 400 240" preserveAspectRatio="xMidYMid slice" xmlns="http://www.w3.org/2000/svg">
    <rect width="400" height="240" fill="#14532d"/>
    <circle cx="200" cy="120" r="75" fill="#4ade80" opacity="0.2"/>
    <path d="M190,140 C190,110 210,80 230,90 C230,120 210,150 190,140 Z" fill="#22c55e"/>
    <path d="M210,140 C210,110 190,80 170,90 C170,120 190,150 210,140 Z" fill="#86efac"/>
  </svg>`;
}

module.exports = { getProduceSvg, getWasteRecSvg };
