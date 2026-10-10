const fs = require('fs');
const icons = require('./svg_icons.js');

let html = fs.readFileSync('index.html', 'utf8');

// 1. Hero image
html = html.replace('<img src="assets/hero_farm_sunrise.jpg" alt="Sunrise over paddy fields" class="hero-bg-img"/>', icons.hero);

// 2. Featured Millet product
html = html.replace('<img src="assets/marketplace_millet.jpg" alt="Millet Grains" class="product-img"/>', icons.millet);

// 3. Testimonial Avatars
html = html.replace('<img src="assets/farmer_rambabu_naidu_1789748330559.jpg" alt="Rambabu Naidu" class="testimonial-avatar" style="width: 50px; height: 50px; object-fit: cover;">', icons.avatarRambabu);
html = html.replace('<img src="assets/farmer_lakshmi_devi_1789748345221.jpg" alt="Lakshmi Devi" class="testimonial-avatar" style="width: 50px; height: 50px; object-fit: cover;">', icons.avatarLakshmi);
html = html.replace('<img src="assets/farmer_venkatesh_reddy_1789748363326.jpg" alt="Venkatesh Reddy" class="testimonial-avatar" style="width: 50px; height: 50px; object-fit: cover;">', icons.avatarVenkatesh);

// 4. Waste Showcase
html = html.replace('<img src="assets/eco_product_coffee_cup_1789749509613.jpg" alt="Eco Coffee Cup" class="showcase-img" />', icons.showcaseCoffeeCup);
html = html.replace('<img src="assets/eco_product_paddy_husk_1789748378433.jpg" alt="Biodegradable Eco Plates & Tableware" class="showcase-img">', icons.showcasePlates);
html = html.replace('<img src="assets/eco_product_corn_stalk_1789748392178.jpg" alt="Plant-Based Compostable Carry Bags" class="showcase-img">', icons.showcaseCarryBags);
html = html.replace('<img src="assets/eco_product_sugarcane_1789748406333.jpg" alt="Agricultural Waste Fiber and Bio Bottles" class="showcase-img">', icons.showcaseBioBottles);

// 5. Map image
html = html.replace('<img src="assets/company_building_1789231732603.jpg" alt="Map View" class="map-bg-image" style="opacity: 0.3; width: 100%; height: 100%; object-fit: cover;">', icons.mapNetwork);

// 6. Remaining emojis
html = html.replace('Try the quick actions below! 👇', 'Try the quick actions below! <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2" style="vertical-align:middle;display:inline-block;"><path d="M12 5v14M19 12l-7 7-7-7"/></svg>');
html = html.replace('<button class="ai-chip" data-query="find buyers">🏪 Find Buyers</button>', '<button class="ai-chip" data-query="find buyers"><svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" stroke-width="2" style="vertical-align:middle;display:inline-block;"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg> Find Buyers</button>');

fs.writeFileSync('index.html', html, 'utf8');

const remaining = html.match(/assets\/[^\"]+/g) || [];
console.log('Remaining assets in index.html count:', remaining.length);
if (remaining.length > 0) {
  console.log('Remaining:', remaining);
} else {
  console.log('ALL assets in index.html successfully replaced with SVG generated icons!');
}
