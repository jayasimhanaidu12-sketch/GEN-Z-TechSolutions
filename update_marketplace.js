const fs = require('fs');
let code = fs.readFileSync('app.js', 'utf8');

// Update Paddy Rice
code = code.replace(
  '{ id:101, name:"Premium BPT 5204 Paddy Rice", farmer:"Rambabu Rao", district:"East Godavari, AP", price:"?2,250 / Qtl", quantity:"150 Qtl", type:"Paddy", image:"assets/hero_paddy_field_1789230939117.jpg", phone:"+91 94401 22334" }',
  '{ id:101, name:"Premium BPT 5204 Paddy Rice", farmer:"Rambabu Rao", district:"East Godavari, AP", price:"?2,250 / Qtl", quantity:"150 Qtl", type:"Paddy", image:"assets/produce_paddy_rice_1789750006678.jpg", phone:"+91 94401 22334" }'
);

// Update Sweet Corn
code = code.replace(
  '{ id:102, name:"Fresh Hybrid Sweet Corn", farmer:"K. Venkateswarlu", district:"Guntur, AP", price:"?1,800 / Qtl", quantity:"80 Qtl", type:"Corn", image:"assets/farmer_produce_market_1789231038003.jpg", phone:"+91 98480 55667" }',
  '{ id:102, name:"Fresh Hybrid Sweet Corn", farmer:"K. Venkateswarlu", district:"Guntur, AP", price:"?1,800 / Qtl", quantity:"80 Qtl", type:"Corn", image:"assets/produce_sweet_corn_1789750023744.jpg", phone:"+91 98480 55667" }'
);

// Update Sugarcane
code = code.replace(
  '{ id:103, name:"Natural Sugarcane Stalks", farmer:"Suresh Reddy", district:"Chittoor, AP", price:"?3,100 / Ton", quantity:"40 Tons", type:"Sugarcane", image:"assets/produce_millet_1789231713573.jpg", phone:"+91 91772 33445" }',
  '{ id:103, name:"Natural Sugarcane Stalks", farmer:"Suresh Reddy", district:"Chittoor, AP", price:"?3,100 / Ton", quantity:"40 Tons", type:"Sugarcane", image:"assets/produce_sugarcane_stalks_1789750037834.jpg", phone:"+91 91772 33445" }'
);

// Update Red Gram
code = code.replace(
  '{ id:104, name:"Organic Red Gram", farmer:"M. Nageswara Rao", district:"Prakasam, AP", price:"?7,200 / Qtl", quantity:"45 Qtl", type:"Pulses", image:"assets/eco_fabric_1789231748611.jpg", phone:"+91 90001 88990" }',
  '{ id:104, name:"Organic Red Gram", farmer:"M. Nageswara Rao", district:"Prakasam, AP", price:"?7,200 / Qtl", quantity:"45 Qtl", type:"Pulses", image:"assets/produce_red_gram_1789750067857.jpg", phone:"+91 90001 88990" }'
);

// Update Chilies
code = code.replace(
  '{ id:105, name:"Guntur Teja Red Chilies", farmer:"Srinivasulu", district:"Guntur, AP", price:"?18,500 / Qtl", quantity:"20 Qtl", type:"Spices", image:"assets/marketplace_millet_1789231879832.jpg", phone:"+91 98765 12345" }',
  '{ id:105, name:"Guntur Teja Red Chilies", farmer:"Srinivasulu", district:"Guntur, AP", price:"?18,500 / Qtl", quantity:"20 Qtl", type:"Spices", image:"assets/produce_guntur_chilies_1789750080768.jpg", phone:"+91 98765 12345" }'
);

// Update Cotton
code = code.replace(
  '{ id:108, name:"Warangal Cotton", farmer:"B. Komuraiah", district:"Warangal, TS", price:"?7,500 / Qtl", quantity:"60 Qtl", type:"Cotton", image:"assets/produce_millet_1789231713573.jpg", phone:"+91 77665 44332" }',
  '{ id:108, name:"Warangal Cotton", farmer:"B. Komuraiah", district:"Warangal, TS", price:"?7,500 / Qtl", quantity:"60 Qtl", type:"Cotton", image:"assets/produce_warangal_cotton_1789750099796.jpg", phone:"+91 77665 44332" }'
);

fs.writeFileSync('app.js', code);
