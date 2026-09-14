const fs = require('fs');

function fixQuotes(file) {
  let content = fs.readFileSync(file, 'utf8');
  // Replace unescaped double quotes inside the <i> tags injected earlier
  // Basically replace `="([^"]+)"` with `='$1'` inside `<i data-feather...>`
  content = content.replace(/<i data-feather="([^"]+)" style="([^"]+)"><\/i>/g, "<i data-feather='$1' style='$2'></i>");
  fs.writeFileSync(file, content);
}

fixQuotes('app.js');
console.log('Fixed quotes in app.js');
