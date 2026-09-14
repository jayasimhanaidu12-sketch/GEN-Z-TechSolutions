const fs = require('fs');

const emojiMap = {
  '📍': '<i data-feather="map-pin" style="width: 1em; height: 1em; vertical-align: middle;"></i>',
  '📞': '<i data-feather="phone" style="width: 1em; height: 1em; vertical-align: middle;"></i>',
  '👤': '<i data-feather="user" style="width: 1em; height: 1em; vertical-align: middle;"></i>',
  '📦': '<i data-feather="package" style="width: 1em; height: 1em; vertical-align: middle;"></i>',
  '🔥': '<i data-feather="trending-up" style="width: 1em; height: 1em; vertical-align: middle;"></i>',
  '🍽️': '<i data-feather="coffee" style="width: 1em; height: 1em; vertical-align: middle;"></i>',
  '🛍️': '<i data-feather="shopping-bag" style="width: 1em; height: 1em; vertical-align: middle;"></i>',
  '☕': '<i data-feather="coffee" style="width: 1em; height: 1em; vertical-align: middle;"></i>',
  '👕': '<i data-feather="shopping-bag" style="width: 1em; height: 1em; vertical-align: middle;"></i>',
  '🧴': '<i data-feather="droplet" style="width: 1em; height: 1em; vertical-align: middle;"></i>',
  '🌱': '<i data-feather="sun" style="width: 1em; height: 1em; vertical-align: middle;"></i>',
  '🥢': '<i data-feather="coffee" style="width: 1em; height: 1em; vertical-align: middle;"></i>',
  '🧱': '<i data-feather="box" style="width: 1em; height: 1em; vertical-align: middle;"></i>',
  '⚡': '<i data-feather="zap" style="width: 1em; height: 1em; vertical-align: middle;"></i>',
  '🧪': '<i data-feather="droplet" style="width: 1em; height: 1em; vertical-align: middle;"></i>',
  '📰': '<i data-feather="file-text" style="width: 1em; height: 1em; vertical-align: middle;"></i>',
  '🥣': '<i data-feather="coffee" style="width: 1em; height: 1em; vertical-align: middle;"></i>',
  '🎁': '<i data-feather="gift" style="width: 1em; height: 1em; vertical-align: middle;"></i>',
  '🏷️': '<i data-feather="tag" style="width: 1em; height: 1em; vertical-align: middle;"></i>',
  '📄': '<i data-feather="file" style="width: 1em; height: 1em; vertical-align: middle;"></i>',
  '🧶': '<i data-feather="circle" style="width: 1em; height: 1em; vertical-align: middle;"></i>',
  '🎨': '<i data-feather="pen-tool" style="width: 1em; height: 1em; vertical-align: middle;"></i>',
  '💰': '<i data-feather="dollar-sign" style="width: 1em; height: 1em; vertical-align: middle;"></i>',
  '🌾': '<i data-feather="wind" style="width: 1em; height: 1em; vertical-align: middle;"></i>',
  '🏭': '<i data-feather="truck" style="width: 1em; height: 1em; vertical-align: middle;"></i>',
  '🌍': '<i data-feather="globe" style="width: 1em; height: 1em; vertical-align: middle;"></i>',
  '⚖️': '<i data-feather="bar-chart-2" style="width: 1em; height: 1em; vertical-align: middle;"></i>',
  '🤖': '<i data-feather="cpu" style="width: 1em; height: 1em; vertical-align: middle;"></i>',
  '📷': '<i data-feather="camera" style="width: 1em; height: 1em; vertical-align: middle;"></i>',
  '✅': '<i data-feather="check-circle" style="width: 1em; height: 1em; vertical-align: middle;"></i>',
  '♻️': '<i data-feather="refresh-cw" style="width: 1em; height: 1em; vertical-align: middle;"></i>',
  '🚚': '<i data-feather="truck" style="width: 1em; height: 1em; vertical-align: middle;"></i>',
  '🌿': '<i data-feather="wind" style="width: 1em; height: 1em; vertical-align: middle;"></i>',
  '📊': '<i data-feather="bar-chart" style="width: 1em; height: 1em; vertical-align: middle;"></i>',
  '🏢': '<i data-feather="home" style="width: 1em; height: 1em; vertical-align: middle;"></i>',
  '📋': '<i data-feather="clipboard" style="width: 1em; height: 1em; vertical-align: middle;"></i>',
  '🌐': '<i data-feather="globe" style="width: 1em; height: 1em; vertical-align: middle;"></i>',
  '🛡️': '<i data-feather="shield" style="width: 1em; height: 1em; vertical-align: middle;"></i>',
  '🙏': '<i data-feather="heart" style="width: 1em; height: 1em; vertical-align: middle;"></i>',
  '🌽': '<i data-feather="sun" style="width: 1em; height: 1em; vertical-align: middle;"></i>',
  '🎋': '<i data-feather="align-justify" style="width: 1em; height: 1em; vertical-align: middle;"></i>',
  '🌴': '<i data-feather="sun" style="width: 1em; height: 1em; vertical-align: middle;"></i>',
  '🍌': '<i data-feather="smile" style="width: 1em; height: 1em; vertical-align: middle;"></i>'
};

const replaceInFile = (file) => {
  let content = fs.readFileSync(file, 'utf8');
  for (const [emoji, svg] of Object.entries(emojiMap)) {
    content = content.split(emoji).join(svg);
  }
  fs.writeFileSync(file, content);
};

replaceInFile('index.html');
replaceInFile('app.js');
console.log('Replaced emojis successfully');
