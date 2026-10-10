const fs = require('fs');
let code = fs.readFileSync('index.html', 'utf8');

// Fix Coffee Cup showcase (remove onerror and update src)
const searchStr1 = `<img src="assets/eco_coffee_cup.jpg" alt="Eco Coffee Cup" class="showcase-img" onerror="this.src='assets/eco_product_paddy_husk_1789748378433.jpg'"/>`;
const repStr1 = `<img src="assets/eco_product_coffee_cup_1789749509613.jpg" alt="Eco Coffee Cup" class="showcase-img" />`;
code = code.replace(searchStr1, repStr1);

// Fix Plates & Tableware showcase
const searchStr2 = `<img src="assets/eco_plates_tableware_1789230961166.jpg" alt="Biodegradable Eco Plates & Tableware" class="showcase-img">`;
const repStr2 = `<img src="assets/eco_product_paddy_husk_1789748378433.jpg" alt="Biodegradable Eco Plates & Tableware" class="showcase-img">`;
code = code.replace(searchStr2, repStr2);

fs.writeFileSync('index.html', code);
