const fs = require('fs');

// 1. UPDATE index.html
let html = fs.readFileSync('index.html', 'utf8');

// Replace Hero SVG with exact hero image
const heroRegex = /<svg class="hero-bg-img"[\s\S]*?<\/svg>/;
html = html.replace(heroRegex, '<img src="assets/hero_farm_sunrise.jpg" alt="Sunrise over paddy fields" class="hero-bg-img"/>');

// Replace Millet SVG with exact millet image
const milletRegex = /<svg class="product-img" viewBox="0 0 400 240"[\s\S]*?<\/svg>/;
html = html.replace(milletRegex, '<img src="assets/produce_millet_1789231713573.jpg" alt="Millet Grains" class="product-img"/>');

// Replace Testimonial Avatars with exact farmer photos
const rambabuSvgRegex = /<svg class="testimonial-avatar" viewBox="0 0 100 100"[\s\S]*?id="bgRambabu"[\s\S]*?<\/svg>/;
html = html.replace(rambabuSvgRegex, '<img src="assets/farmer_rambabu_naidu_1789748330559.jpg" alt="Rambabu Naidu" class="testimonial-avatar" style="width: 50px; height: 50px; object-fit: cover; border-radius: 50%;">');

const lakshmiSvgRegex = /<svg class="testimonial-avatar" viewBox="0 0 100 100"[\s\S]*?id="bgLakshmi"[\s\S]*?<\/svg>/;
html = html.replace(lakshmiSvgRegex, '<img src="assets/farmer_lakshmi_devi_1789748345221.jpg" alt="Lakshmi Devi" class="testimonial-avatar" style="width: 50px; height: 50px; object-fit: cover; border-radius: 50%;">');

const venkateshSvgRegex = /<svg class="testimonial-avatar" viewBox="0 0 100 100"[\s\S]*?id="bgVenkatesh"[\s\S]*?<\/svg>/;
html = html.replace(venkateshSvgRegex, '<img src="assets/farmer_venkatesh_reddy_1789748363326.jpg" alt="Venkatesh Reddy" class="testimonial-avatar" style="width: 50px; height: 50px; object-fit: cover; border-radius: 50%;">');

// Replace 4 Waste Showcase SVGs with exact product showcase images
const cupSvgRegex = /<svg class="showcase-img" viewBox="0 0 400 240"[\s\S]*?id="cupBg"[\s\S]*?<\/svg>/;
html = html.replace(cupSvgRegex, '<img src="assets/eco_product_coffee_cup_1789749509613.jpg" alt="Eco Coffee Cup" class="showcase-img"/>');

const platesSvgRegex = /<svg class="showcase-img" viewBox="0 0 400 240"[\s\S]*?id="platesBg"[\s\S]*?<\/svg>/;
html = html.replace(platesSvgRegex, '<img src="assets/eco_product_paddy_husk_1789748378433.jpg" alt="Biodegradable Eco Plates & Tableware" class="showcase-img"/>');

const bagsSvgRegex = /<svg class="showcase-img" viewBox="0 0 400 240"[\s\S]*?id="bagsBg"[\s\S]*?<\/svg>/;
html = html.replace(bagsSvgRegex, '<img src="assets/eco_product_corn_stalk_1789748392178.jpg" alt="Plant-Based Compostable Carry Bags" class="showcase-img"/>');

const bottlesSvgRegex = /<svg class="showcase-img" viewBox="0 0 400 240"[\s\S]*?id="fiberBg"[\s\S]*?<\/svg>/;
html = html.replace(bottlesSvgRegex, '<img src="assets/eco_product_sugarcane_1789748406333.jpg" alt="Agricultural Waste Fiber and Bio Bottles" class="showcase-img"/>');

// Replace Map SVG with exact map background image
const mapSvgRegex = /<svg class="map-bg-image"[\s\S]*?id="mapGridGrad"[\s\S]*?<\/svg>/;
html = html.replace(mapSvgRegex, '<img src="assets/company_building_1789231732603.jpg" alt="Map View" class="map-bg-image" style="opacity: 0.3; width: 100%; height: 100%; object-fit: cover;"/>');

fs.writeFileSync('index.html', html, 'utf8');
console.log('Successfully updated index.html with exact images!');

// 2. UPDATE app.js
let app = fs.readFileSync('app.js', 'utf8');

// Update produceMarketData with exact matching images
const oldMarketDataBlock = /const produceMarketData = \[[\s\S]*?\];/;
const exactMarketData = `const produceMarketData = [
  { id:101, name:"Premium BPT 5204 Paddy Rice", farmer:"Rambabu Rao", district:"East Godavari, AP", price:"₹2,250 / Qtl", quantity:"150 Qtl", type:"Paddy", image:"assets/produce_paddy_rice_1789750006678.jpg", phone:"+91 94401 22334" },
  { id:102, name:"Fresh Hybrid Sweet Corn", farmer:"K. Venkateswarlu", district:"Guntur, AP", price:"₹1,800 / Qtl", quantity:"80 Qtl", type:"Corn", image:"assets/produce_sweet_corn_1789750023744.jpg", phone:"+91 98480 55667" },
  { id:103, name:"Natural Sugarcane Stalks", farmer:"Suresh Reddy", district:"Chittoor, AP", price:"₹3,100 / Ton", quantity:"40 Tons", type:"Sugarcane", image:"assets/produce_sugarcane_stalks_1789750037834.jpg", phone:"+91 91772 33445" },
  { id:104, name:"Organic Red Gram", farmer:"M. Nageswara Rao", district:"Prakasam, AP", price:"₹7,200 / Qtl", quantity:"45 Qtl", type:"Pulses", image:"assets/produce_red_gram_1789750067857.jpg", phone:"+91 90001 88990" },
  { id:105, name:"Guntur Teja Red Chilies", farmer:"Srinivasulu", district:"Guntur, AP", price:"₹18,500 / Qtl", quantity:"20 Qtl", type:"Spices", image:"assets/produce_guntur_chilies_1789750080768.jpg", phone:"+91 98765 12345" },
  { id:108, name:"Warangal Cotton", farmer:"B. Komuraiah", district:"Warangal, TS", price:"₹7,500 / Qtl", quantity:"60 Qtl", type:"Cotton", image:"assets/produce_warangal_cotton_1789750099796.jpg", phone:"+91 77665 44332" },
  { id:109, name:"Mahbubnagar Groundnut", farmer:"G. Anjaiah", district:"Mahbubnagar, TS", price:"₹5,500 / Qtl", quantity:"100 Qtl", type:"Nuts", image:"assets/produce_mahbubnagar_groundnut.jpg", phone:"+91 99001 10099" },
  { id:110, name:"Anantapur Sweet Lime", farmer:"T. Obul Reddy", district:"Anantapur, AP", price:"₹3,000 / Ton", quantity:"50 Tons", type:"Fruits", image:"assets/produce_anantapur_sweet_lime.jpg", phone:"+91 88990 09988" }
];`;

app = app.replace(oldMarketDataBlock, exactMarketData);

// Update renderProduceMarketplace to render exact img tags
const renderProduceRegex = /function renderProduceMarketplace\(data\) \{[\s\S]*?while\(tmp\.firstElementChild\) container\.appendChild\(tmp\.firstElementChild\);[\s\S]*?\}/;
const exactRenderProduce = `function renderProduceMarketplace(data) {
  const container = document.getElementById('produceGrid');
  if (!container) return;
  container.querySelectorAll('.produce-card').forEach(c => c.remove());
  const html = data.map(item => \`<div class="produce-card">
    <img src="\${item.image}" alt="\${item.name}" class="produce-img" loading="lazy">
    <div class="produce-body">
      <h3 class="produce-title">\${item.name}</h3>
      <p class="produce-farmer"><i data-feather='user' style='width: 1em; height: 1em; vertical-align: middle;'></i> \${item.farmer} · \${item.district}</p>
      <p class="produce-price">\${item.price}</p>
      <p style="font-size:0.85rem;color:var(--text-muted);margin-bottom:1rem;"><i data-feather='package' style='width: 1em; height: 1em; vertical-align: middle;'></i> \${item.quantity}</p>
      <div style="display:flex;gap:0.5rem;">
        <a href="tel:\${item.phone}" class="btn btn-primary btn-sm" style="flex:1;"><i data-feather='phone' style='width: 1em; height: 1em; vertical-align: middle;'></i> Call Farmer</a>
        <button onclick="openContactModal('\${item.farmer}','\${item.phone}','Direct Order')" class="btn btn-accent btn-sm" style="flex:1;">WhatsApp</button>
      </div>
    </div></div>\`).join('');
  const tmp = document.createElement('div'); tmp.innerHTML = html;
  while(tmp.firstElementChild) container.appendChild(tmp.firstElementChild);
  if (typeof feather !== 'undefined') feather.replace();
}`;

app = app.replace(renderProduceRegex, exactRenderProduce);

// Update renderWasteRecProducts with exact images
const renderWasteRecRegex = /function renderWasteRecProducts\(wasteType\) \{[\s\S]*?if \(typeof feather !== 'undefined'\) feather\.replace\(\);[\s\S]*?\}/;
const exactRenderWasteRec = `function renderWasteRecProducts(wasteType) {
  const grid = document.getElementById('wasteRecGrid');
  if (!grid) return;
  const recommendations = {
    paddy_husk: [
      { img:"assets/eco_product_paddy_husk_1789748378433.jpg", title:"Plates & Bowls", desc:"Microwave-safe tableware from paddy husk, decomposes in 60 days." },
      { img:"assets/eco_product_coffee_cup_1789749509613.jpg", title:"Coffee Cups", desc:"Elegant reusable cups from rice husk composite for cafes." },
      { img:"assets/biomass_pellets.jpg", title:"Building Insulation", desc:"Rice husk ash used as lightweight thermal insulation material." },
      { img:"assets/biomass_pellets.jpg", title:"Biomass Fuel", desc:"High-calorific husk pellets for clean industrial energy." },
    ],
    corn_stalk: [
      { img:"assets/eco_product_corn_stalk_1789748392178.jpg", title:"Compostable Bags", desc:"Carry bags and films from corn starch biopolymers." },
      { img:"assets/compostable_bags_packaging_1789231012217.jpg", title:"Packaging Material", desc:"Biodegradable protective food packaging and pouches." },
      { img:"assets/bio_bottles.jpg", title:"Bio-Ethanol", desc:"Fuel-grade bio-ethanol from cellulose starch extraction." },
      { img:"assets/biomass_pellets.jpg", title:"Compost", desc:"Nutrient-rich organic compost and soil conditioner." },
    ],
    sugarcane: [
      { img:"assets/eco_plates_tableware_1789230961166.jpg", title:"Tableware", desc:"Sturdy meal trays, bowls, and containers from bagasse pulp." },
      { img:"assets/eco_product_sugarcane_1789748406333.jpg", title:"Bio-Bottles", desc:"Fully compostable plant-resin water and juice bottles." },
      { img:"assets/eco_paper.jpg", title:"Paper Products", desc:"Tree-free eco-friendly office paper and sturdy cardboard." },
      { img:"assets/biomass_pellets.jpg", title:"Co-generation Power", desc:"Clean electricity generation in sugar mills from bagasse." },
    ],
    cotton: [
      { img:"assets/biomass_pellets.jpg", title:"Bio-Briquettes", desc:"Compressed fuel briquettes for clean boiler heating." },
      { img:"assets/eco_paper.jpg", title:"Mushroom Substrate", desc:"Nutritious cotton stalk chips as oyster mushroom growing medium." },
      { img:"assets/eco_paper.jpg", title:"Particle Board", desc:"Compressed engineered boards for furniture and panels." },
      { img:"assets/natural_rope.jpg", title:"Cellulose Fiber", desc:"High-strength industrial cellulose extraction." },
    ],
    areca: [
      { img:"assets/eco_plates_tableware_1789230961166.jpg", title:"Areca Plates", desc:"Premium natural palm leaf plates for catering and events." },
      { img:"assets/eco_product_paddy_husk_1789748378433.jpg", title:"Bowls & Cups", desc:"Sturdy bowls pressed from fallen natural areca sheaths." },
      { img:"assets/compostable_bags_packaging_1789231012217.jpg", title:"Gift Packaging", desc:"Elegant biodegradable presentation boxes and cases." },
      { img:"assets/eco_paper.jpg", title:"Tags & Cards", desc:"Natural textured plantable seed tags and cards." },
    ],
    banana: [
      { img:"assets/eco_fabric_1789231748611.jpg", title:"Textile Fiber", desc:"Silky natural yarn and breathable fabric from banana stems." },
      { img:"assets/eco_paper.jpg", title:"Banana Paper", desc:"Artisan handmade paper from organic pseudostem pulp." },
      { img:"assets/natural_rope.jpg", title:"Rope & Cordage", desc:"Strong weather-resistant natural cordage for farming." },
      { img:"assets/eco_fabric_1789231748611.jpg", title:"Craft Material", desc:"Durable dried fiber for handicrafts, mats, and baskets." },
    ]
  };
  const items = recommendations[wasteType] || recommendations.paddy_husk;
  grid.innerHTML = items.map(p => \`<div class="waste-rec-card">
    <div class="waste-rec-img-wrapper"><img src="\${p.img}" alt="\${p.title}" class="waste-rec-img"></div>
    <h3 class="waste-rec-title">\${p.title}</h3>
    <p class="waste-rec-desc">\${p.desc}</p>
  </div>\`).join('');
  if (typeof feather !== 'undefined') feather.replace();
}`;

app = app.replace(renderWasteRecRegex, exactRenderWasteRec);

fs.writeFileSync('app.js', app, 'utf8');
console.log('Successfully updated app.js with exact images!');
