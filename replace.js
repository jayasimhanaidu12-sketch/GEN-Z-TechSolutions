const fs = require('fs');
let code = fs.readFileSync('index.html', 'utf8');

// Replace avatars
code = code.replace('<div class="testimonial-avatar">R</div>', '<img src="assets/farmer_rambabu_naidu_1789748330559.jpg" alt="Rambabu Naidu" class="testimonial-avatar" style="width: 50px; height: 50px; object-fit: cover;">');
code = code.replace('<div class="testimonial-avatar">L</div>', '<img src="assets/farmer_lakshmi_devi_1789748345221.jpg" alt="Lakshmi Devi" class="testimonial-avatar" style="width: 50px; height: 50px; object-fit: cover;">');
code = code.replace('<div class="testimonial-avatar">V</div>', '<img src="assets/farmer_venkatesh_reddy_1789748363326.jpg" alt="Venkatesh Reddy" class="testimonial-avatar" style="width: 50px; height: 50px; object-fit: cover;">');

// Replace waste showcase images
code = code.replace('assets/eco_plates_tableware_1789230961166.jpg', 'assets/eco_product_paddy_husk_1789748378433.jpg');
code = code.replace('assets/compostable_bags_packaging_1789231012217.jpg', 'assets/eco_product_corn_stalk_1789748392178.jpg');
code = code.replace('assets/eco_fabric_1789231748611.jpg', 'assets/eco_product_sugarcane_1789748406333.jpg');

fs.writeFileSync('index.html', code);
