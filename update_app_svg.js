const fs = require('fs');

let app = fs.readFileSync('app.js', 'utf8');

// Insert getProduceSvg and getWasteRecSvg at the top of Section 3 in app.js
const { getProduceSvg, getWasteRecSvg } = require('./svg_generators.js');

const genCode = `
// ═════════════════════════════════════════════════════════════
// SVG GENERATORS (Replacing heavy image assets with responsive vector icons)
// ═════════════════════════════════════════════════════════════
${getProduceSvg.toString()}

${getWasteRecSvg.toString()}
`;

// Replace produceMarketData
const oldMarketData = `const produceMarketData = [
  { id:101, name:"Premium BPT 5204 Paddy Rice", farmer:"Rambabu Rao", district:"East Godavari, AP", price:"₹2,250 / Qtl", quantity:"150 Qtl", type:"Paddy", image:"assets/hero_paddy_field_1789230939117.jpg", phone:"+91 94401 22334" },
  { id:102, name:"Fresh Hybrid Sweet Corn", farmer:"K. Venkateswarlu", district:"Guntur, AP", price:"₹1,800 / Qtl", quantity:"80 Qtl", type:"Corn", image:"assets/farmer_produce_market_1789231038003.jpg", phone:"+91 98480 55667" },
  { id:103, name:"Natural Sugarcane Stalks", farmer:"Suresh Reddy", district:"Chittoor, AP", price:"₹3,100 / Ton", quantity:"40 Tons", type:"Sugarcane", image:"assets/produce_millet_1789231713573.jpg", phone:"+91 91772 33445" },
  { id:104, name:"Organic Red Gram", farmer:"M. Nageswara Rao", district:"Prakasam, AP", price:"₹7,200 / Qtl", quantity:"45 Qtl", type:"Pulses", image:"assets/eco_fabric_1789231748611.jpg", phone:"+91 90001 88990" },
  { id:105, name:"Guntur Teja Red Chilies", farmer:"Srinivasulu", district:"Guntur, AP", price:"₹18,500 / Qtl", quantity:"20 Qtl", type:"Spices", image:"assets/marketplace_millet_1789231879832.jpg", phone:"+91 98765 12345" },
  { id:108, name:"Warangal Cotton", farmer:"B. Komuraiah", district:"Warangal, TS", price:"₹7,500 / Qtl", quantity:"60 Qtl", type:"Cotton", image:"assets/produce_millet_1789231713573.jpg", phone:"+91 77665 44332" },
  { id:109, name:"Mahbubnagar Groundnut", farmer:"G. Anjaiah", district:"Mahbubnagar, TS", price:"₹5,500 / Qtl", quantity:"100 Qtl", type:"Nuts", image:"assets/eco_fabric_1789231748611.jpg", phone:"+91 99001 10099" },
  { id:110, name:"Anantapur Sweet Lime", farmer:"T. Obul Reddy", district:"Anantapur, AP", price:"₹3,000 / Ton", quantity:"50 Tons", type:"Fruits", image:"assets/marketplace_millet_1789231879832.jpg", phone:"+91 88990 09988" }
];`;

const newMarketData = `const produceMarketData = [
  { id:101, name:"Premium BPT 5204 Paddy Rice", farmer:"Rambabu Rao", district:"East Godavari, AP", price:"₹2,250 / Qtl", quantity:"150 Qtl", type:"Paddy", phone:"+91 94401 22334" },
  { id:102, name:"Fresh Hybrid Sweet Corn", farmer:"K. Venkateswarlu", district:"Guntur, AP", price:"₹1,800 / Qtl", quantity:"80 Qtl", type:"Corn", phone:"+91 98480 55667" },
  { id:103, name:"Natural Sugarcane Stalks", farmer:"Suresh Reddy", district:"Chittoor, AP", price:"₹3,100 / Ton", quantity:"40 Tons", type:"Sugarcane", phone:"+91 91772 33445" },
  { id:104, name:"Organic Red Gram", farmer:"M. Nageswara Rao", district:"Prakasam, AP", price:"₹7,200 / Qtl", quantity:"45 Qtl", type:"Pulses", phone:"+91 90001 88990" },
  { id:105, name:"Guntur Teja Red Chilies", farmer:"Srinivasulu", district:"Guntur, AP", price:"₹18,500 / Qtl", quantity:"20 Qtl", type:"Spices", phone:"+91 98765 12345" },
  { id:108, name:"Warangal Cotton", farmer:"B. Komuraiah", district:"Warangal, TS", price:"₹7,500 / Qtl", quantity:"60 Qtl", type:"Cotton", phone:"+91 77665 44332" },
  { id:109, name:"Mahbubnagar Groundnut", farmer:"G. Anjaiah", district:"Mahbubnagar, TS", price:"₹5,500 / Qtl", quantity:"100 Qtl", type:"Nuts", phone:"+91 99001 10099" },
  { id:110, name:"Anantapur Sweet Lime", farmer:"T. Obul Reddy", district:"Anantapur, AP", price:"₹3,000 / Ton", quantity:"50 Tons", type:"Fruits", phone:"+91 88990 09988" }
];`;

app = app.replace(oldMarketData, genCode + '\n' + newMarketData);

// Replace renderProduceMarketplace
const oldRenderProduce = `function renderProduceMarketplace(data) {
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
}`;

const newRenderProduce = `function renderProduceMarketplace(data) {
  const container = document.getElementById('produceGrid');
  if (!container) return;
  container.querySelectorAll('.produce-card').forEach(c => c.remove());
  const html = data.map(item => \`<div class="produce-card">
    \${getProduceSvg(item.type, item.name)}
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

app = app.replace(oldRenderProduce, newRenderProduce);

// Replace renderWasteRecProducts
const oldWasteRec = `function renderWasteRecProducts(wasteType) {
  const grid = document.getElementById('wasteRecGrid');
  if (!grid) return;
  const recommendations = {
    paddy_husk: [
      { img:"assets/eco_plates_tableware_1789230961166.jpg", title:"Plates & Bowls", desc:"Microwave-safe tableware, decomposes in 60 days." },
      { img:"assets/eco_plates_tableware_1789230961166.jpg", title:"Coffee Cups", desc:"Elegant cups for cafes, events, and daily use." },
      { img:"assets/biomass_pellets.jpg", title:"Building Insulation", desc:"Rice husk ash used as insulation material." },
      { img:"assets/biomass_pellets.jpg", title:"Biomass Fuel", desc:"Husk pellets for clean energy generation." },
    ],
    corn_stalk: [
      { img:"assets/compostable_bags_packaging_1789231012217.jpg", title:"Compostable Bags", desc:"Carry bags from corn starch polymer blends." },
      { img:"assets/compostable_bags_packaging_1789231012217.jpg", title:"Packaging Material", desc:"Biodegradable food packaging and films." },
      { img:"assets/biomass_pellets.jpg", title:"Bio-Ethanol", desc:"Fuel-grade ethanol from cellulose extraction." },
      { img:"assets/compostable_bags_packaging_1789231012217.jpg", title:"Compost", desc:"Nutrient-rich compost for organic farming." },
    ],
    sugarcane: [
      { img:"assets/eco_plates_tableware_1789230961166.jpg", title:"Tableware", desc:"Plates, bowls, and containers from bagasse pulp." },
      { img:"assets/bio_bottles.jpg", title:"Bio-Bottles", desc:"Fully compostable water and juice bottles." },
      { img:"assets/eco_paper.jpg", title:"Paper Products", desc:"Eco-friendly paper and cardboard." },
      { img:"assets/biomass_pellets.jpg", title:"Co-generation Power", desc:"Bagasse burned for electricity in sugar mills." },
    ],
    cotton: [
      { img:"assets/biomass_pellets.jpg", title:"Bio-Briquettes", desc:"Compressed fuel blocks for industrial heating." },
      { img:"assets/eco_paper.jpg", title:"Mushroom Substrate", desc:"Cotton stalk chips as mushroom growing medium." },
      { img:"assets/eco_paper.jpg", title:"Particle Board", desc:"Compressed boards for furniture and construction." },
      { img:"assets/natural_rope.jpg", title:"Cellulose Fiber", desc:"Industrial-grade cellulose extraction." },
    ],
    areca: [
      { img:"assets/eco_plates_tableware_1789230961166.jpg", title:"Areca Plates", desc:"Premium natural plates for weddings and events." },
      { img:"assets/eco_plates_tableware_1789230961166.jpg", title:"Bowls & Cups", desc:"Sturdy bowls pressed from dried sheaths." },
      { img:"assets/compostable_bags_packaging_1789231012217.jpg", title:"Gift Packaging", desc:"Elegant eco-friendly gift boxes." },
      { img:"assets/eco_paper.jpg", title:"Tags & Cards", desc:"Natural fiber business cards and tags." },
    ],
    banana: [
      { img:"assets/eco_fabric_1789231748611.jpg", title:"Textile Fiber", desc:"Yarn and fabric from banana pseudo-stem." },
      { img:"assets/eco_paper.jpg", title:"Banana Paper", desc:"Handmade artisan paper from stem fiber." },
      { img:"assets/natural_rope.jpg", title:"Rope & Cordage", desc:"Strong natural ropes for agriculture." },
      { img:"assets/eco_paper.jpg", title:"Craft Material", desc:"Dried fiber for handicrafts and art." },
    ]
  };
  const items = recommendations[wasteType] || recommendations.paddy_husk;
  grid.innerHTML = items.map(p => \`<div class="waste-rec-card">
    <div class="waste-rec-img-wrapper"><img src="\${p.img}" alt="\${p.title}" class="waste-rec-img" onerror="this.style.display='none'"></div>
    <h3 class="waste-rec-title">\${p.title}</h3>
    <p class="waste-rec-desc">\${p.desc}</p>
  </div>\`).join('');
  if (typeof feather !== 'undefined') feather.replace();
}`;

const newWasteRec = `function renderWasteRecProducts(wasteType) {
  const grid = document.getElementById('wasteRecGrid');
  if (!grid) return;
  const recommendations = {
    paddy_husk: [
      { title:"Plates & Bowls", desc:"Microwave-safe tableware, decomposes in 60 days." },
      { title:"Coffee Cups", desc:"Elegant cups for cafes, events, and daily use." },
      { title:"Building Insulation", desc:"Rice husk ash used as insulation material." },
      { title:"Biomass Fuel", desc:"Husk pellets for clean energy generation." },
    ],
    corn_stalk: [
      { title:"Compostable Bags", desc:"Carry bags from corn starch polymer blends." },
      { title:"Packaging Material", desc:"Biodegradable food packaging and films." },
      { title:"Bio-Ethanol", desc:"Fuel-grade ethanol from cellulose extraction." },
      { title:"Compost", desc:"Nutrient-rich compost for organic farming." },
    ],
    sugarcane: [
      { title:"Tableware", desc:"Plates, bowls, and containers from bagasse pulp." },
      { title:"Bio-Bottles", desc:"Fully compostable water and juice bottles." },
      { title:"Paper Products", desc:"Eco-friendly paper and cardboard." },
      { title:"Co-generation Power", desc:"Bagasse burned for electricity in sugar mills." },
    ],
    cotton: [
      { title:"Bio-Briquettes", desc:"Compressed fuel blocks for industrial heating." },
      { title:"Mushroom Substrate", desc:"Cotton stalk chips as mushroom growing medium." },
      { title:"Particle Board", desc:"Compressed boards for furniture and construction." },
      { title:"Cellulose Fiber", desc:"Industrial-grade cellulose extraction." },
    ],
    areca: [
      { title:"Areca Plates", desc:"Premium natural plates for weddings and events." },
      { title:"Bowls & Cups", desc:"Sturdy bowls pressed from dried sheaths." },
      { title:"Gift Packaging", desc:"Elegant eco-friendly gift boxes." },
      { title:"Tags & Cards", desc:"Natural fiber business cards and tags." },
    ],
    banana: [
      { title:"Textile Fiber", desc:"Yarn and fabric from banana pseudo-stem." },
      { title:"Banana Paper", desc:"Handmade artisan paper from stem fiber." },
      { title:"Rope & Cordage", desc:"Strong natural ropes for agriculture." },
      { title:"Craft Material", desc:"Dried fiber for handicrafts and art." },
    ]
  };
  const items = recommendations[wasteType] || recommendations.paddy_husk;
  grid.innerHTML = items.map(p => \`<div class="waste-rec-card">
    <div class="waste-rec-img-wrapper">\${getWasteRecSvg(p.title, wasteType)}</div>
    <h3 class="waste-rec-title">\${p.title}</h3>
    <p class="waste-rec-desc">\${p.desc}</p>
  </div>\`).join('');
  if (typeof feather !== 'undefined') feather.replace();
}`;

app = app.replace(oldWasteRec, newWasteRec);

// Replace remaining emojis in app.js
app = app.replace('📧 \${detail}', '<i data-feather=\"mail\" style=\"width: 1em; height: 1em; vertical-align: middle;\"></i> \${detail}');
app = app.replace('🏪 Finding buyers', '<i data-feather=\"home\" style=\"width: 1em; height: 1em; vertical-align: middle;\"></i> Finding buyers');
app = app.replace('🏪 కొనుగోలుదారులను', '<i data-feather=\"home\" style=\"width: 1em; height: 1em; vertical-align: middle;\"></i> కొనుగోలుదారులను');

fs.writeFileSync('app.js', app, 'utf8');

const remaining = app.match(/assets\/[^\"]+/g) || [];
console.log('Remaining assets in app.js count:', remaining.length);
if (remaining.length > 0) {
  console.log('Remaining in app.js:', remaining);
} else {
  console.log('ALL assets in app.js successfully replaced with SVG generated icons!');
}
