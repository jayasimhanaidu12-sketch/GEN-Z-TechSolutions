const fs = require('fs');
let app = fs.readFileSync('app.js', 'utf8');

app = app.replaceAll('data-feather="home"', 'data-feather=\'home\'');
app = app.replaceAll('data-feather="mail"', 'data-feather=\'mail\'');

// Also handle any double quote styles inside single/double quotes
app = app.replace(
  'engResp = "I can help you with:\\n<i data-feather=\'home\' style="width: 1em; height: 1em; vertical-align: middle;"></i>',
  'engResp = "I can help you with:\\n<i data-feather=\'home\' style=\'width: 1em; height: 1em; vertical-align: middle;\'></i>'
);

app = app.replace(
  '"I can help you": "నేను మీకు వీటిలో సహాయపడగలను:\\n<i data-feather=\'home\' style="width: 1em; height: 1em; vertical-align: middle;"></i>',
  '"I can help you": "నేను మీకు వీటిలో సహాయపడగలను:\\n<i data-feather=\'home\' style=\'width: 1em; height: 1em; vertical-align: middle;\'></i>'
);

app = app.replace(
  '<p style="font-weight: 700; margin-top: 0.5rem;"><i data-feather=\'mail\' style="width: 1em; height: 1em; vertical-align: middle;"></i>',
  '<p style="font-weight: 700; margin-top: 0.5rem;"><i data-feather=\'mail\' style=\'width: 1em; height: 1em; vertical-align: middle;\'></i>'
);

fs.writeFileSync('app.js', app, 'utf8');
console.log('Fixed quotes in app.js');
