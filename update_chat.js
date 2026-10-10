const fs = require('fs');
let code = fs.readFileSync('app.js', 'utf8');

const replacement = `  const generateResponse = (query) => {
    const q = query.toLowerCase();
    let engResp = "";
    // 25+ topic matching
    if (q.includes('hello') || q.includes('hi') || q.includes('hey') || q.includes('namaste') || q.includes('హలో') || q.includes('నమస్తే'))
      engResp = "Hello! <i data-feather='heart' style='width: 1em; height: 1em; vertical-align: middle;'></i> I am the Gen Z TS AI Assistant. I can help you find buyers, calculate income from waste, track carbon savings, identify waste types, check market prices, and much more. Try asking me anything!";
    else if (q.includes('motto') || q.includes('mission') || q.includes('vision') || q.includes('లక్ష్యం'))
      engResp = "Our motto: \\"Let Us Build a Nation Free from Pollution by Replacing Harmful Plastic with Sustainable, Biodegradable Products—Protecting Our Environment Today, Preserving Our Planet Tomorrow, and Creating a Cleaner, Greener, and Healthier Future for Generations to Come.\\" <i data-feather='sun' style='width: 1em; height: 1em; vertical-align: middle;'></i>";
    else if (q.includes('find buyer') || q.includes('search buyer') || q.includes('buyer') || q.includes('కొనుగోలుదారు'))
      engResp = "You can find verified buyers in two ways:\\n1️⃣ **Buyer Directory** — Search by type, location, and product interest.\\n2️⃣ **Nearby Buyer Finder** — Enter your pincode to find buyers closest to you.\\nScroll to the 'Buyer & Startup Directory' or 'Nearby Buyer Finder' sections!";
    else if (q.includes('calculate income') || q.includes('income') || q.includes('earn') || q.includes('ఆదాయం'))
      engResp = "Use our **Waste-to-Income Calculator** in the Tools section! Select your crop type, enter your land area and yield, and instantly see how much you can earn from crop waste. Farmers typically earn ₹10,000–₹15,000+ per acre per season! <i data-feather='dollar-sign' style='width: 1em; height: 1em; vertical-align: middle;'></i>";
    else if (q.includes('carbon') || q.includes('co2') || q.includes('emission'))
      engResp = "Track your environmental impact with our **Carbon Footprint Tracker**! Every ton of waste you sell instead of burning saves ~1.5 tons of CO₂. Go to Tools → Carbon Tracker to see your cumulative savings, equivalent trees planted, and more. <i data-feather='globe' style='width: 1em; height: 1em; vertical-align: middle;'></i>";
    else if (q.includes('pollution') || q.includes('burn') || q.includes('health') || q.includes('కాలుష్యం') || q.includes('కాల్చడం'))
      engResp = "Burning crop waste releases harmful CO₂, PM2.5, and NOx. Use our **Pollution Impact Calculator** to see the exact damage — or compare **Burning vs Selling** side-by-side. Every ton burned releases 1.5T CO₂ and 8.5kg PM2.5! <i data-feather='truck' style='width: 1em; height: 1em; vertical-align: middle;'></i>";
    else if (q.includes('price') || q.includes('market') || q.includes('cost') || q.includes('rate') || q.includes('ధర'))
      engResp = "Current market prices for crop waste:\\n<i data-feather='wind' style='width: 1em; height: 1em; vertical-align: middle;'></i> Paddy Husk: ₹1,200/Ton\\n<i data-feather='sun' style='width: 1em; height: 1em; vertical-align: middle;'></i> Corn Stalks: ₹900/Ton\\n<i data-feather='align-justify' style='width: 1em; height: 1em; vertical-align: middle;'></i> Sugarcane Bagasse: ₹1,500/Ton\\n<i data-feather='sun' style='width: 1em; height: 1em; vertical-align: middle;'></i> Areca Sheaths: ₹2,000/Ton\\nCheck the **Market Price & Demand** section for all prices! <i data-feather='bar-chart' style='width: 1em; height: 1em; vertical-align: middle;'></i>";
    else if (q.includes('waste product') || q.includes('product') || q.includes('make') || q.includes('convert') || q.includes('ఉత్పత్తి'))
      engResp = "Crop waste can be converted into: <i data-feather='coffee' style='width: 1em; height: 1em; vertical-align: middle;'></i> Biodegradable plates & bowls, <i data-feather='shopping-bag' style='width: 1em; height: 1em; vertical-align: middle;'></i> Compostable bags, <i data-feather='coffee' style='width: 1em; height: 1em; vertical-align: middle;'></i> Eco coffee cups, <i data-feather='shopping-bag' style='width: 1em; height: 1em; vertical-align: middle;'></i> Crop fiber textiles, <i data-feather='droplet' style='width: 1em; height: 1em; vertical-align: middle;'></i> Bio-bottles, <i data-feather='sun' style='width: 1em; height: 1em; vertical-align: middle;'></i> Mulch films, and more! Visit the **Biodegradable Product Hub** and **Waste-to-Product Recommendations** sections.";
    else if (q.includes('pickup') || q.includes('collect') || q.includes('transport') || q.includes('పికప్'))
      engResp = "Schedule a waste pickup from your farm gate! Go to the **Waste Collection & Pickup** section, fill in your address, waste type, quantity, and preferred date. Our logistics partner will arrange collection. <i data-feather='truck' style='width: 1em; height: 1em; vertical-align: middle;'></i>";
    else if (q.includes('bid') || q.includes('listing') || q.includes('marketplace') || q.includes('auction'))
      engResp = "Our **Waste Listing & Bidding System** lets farmers list crop waste and buyers compete with bids. Currently there are active listings with up to 7 bids! Check the Agricultural Waste Marketplace section. <i data-feather='clipboard' style='width: 1em; height: 1em; vertical-align: middle;'></i>";
    else if (q.includes('recycler') || q.includes('company') || q.includes('directory') || q.includes('కంపెనీ'))
      engResp = "We have 25+ verified recycling companies in AP & Telangana in our **Enterprise Directory**. Companies like Agriware India, EcoWarangal, and TS Green Fibers directly purchase crop waste. Search by name, district, or product type! <i data-feather='home' style='width: 1em; height: 1em; vertical-align: middle;'></i>";
    else if (q.includes('language') || q.includes('telugu') || q.includes('hindi') || q.includes('tamil') || q.includes('భాష'))
      engResp = "Gen Z TS supports 6 languages: English 🇬🇧, Telugu తెలుగు, Hindi हिंदी, Tamil தமிழ், Malayalam മലയാളം, and Kannada ಕನ್ನಡ. Use the language dropdown in the top menu to switch! <i data-feather='globe' style='width: 1em; height: 1em; vertical-align: middle;'></i>";
    else if (q.includes('register') || q.includes('sign up') || q.includes('join') || q.includes('నమోదు'))
      engResp = "Registering is FREE and takes less than 2 minutes! Simply scroll to the **Sell Your Waste** section, fill in your name, phone, district, waste type, and quantity. Verified buyers will contact you directly! <i data-feather='check-circle' style='width: 1em; height: 1em; vertical-align: middle;'></i>";
    else if (q.includes('dashboard') || q.includes('stats') || q.includes('overview'))
      engResp = "Your **Farmer Dashboard** shows: <i data-feather='dollar-sign' style='width: 1em; height: 1em; vertical-align: middle;'></i> Total income earned, <i data-feather='package' style='width: 1em; height: 1em; vertical-align: middle;'></i> Active waste listings, <i data-feather='user' style='width: 1em; height: 1em; vertical-align: middle;'></i> Connected buyers, <i data-feather='globe' style='width: 1em; height: 1em; vertical-align: middle;'></i> CO₂ saved, <i data-feather='truck' style='width: 1em; height: 1em; vertical-align: middle;'></i> Scheduled pickups, and ✓ Verification status. It's your farm at a glance! <i data-feather='bar-chart' style='width: 1em; height: 1em; vertical-align: middle;'></i>";
    else if (q.includes('paddy') || q.includes('rice') || q.includes('వరి'))
      engResp = "Paddy/Rice waste (husk, straw, bran) can be sold at ~₹1,200/Ton. Products: Bio-plates, coffee cups, building insulation, biomass fuel. Best buyers: Agriware India, Rangareddy Eco Products. <i data-feather='wind' style='width: 1em; height: 1em; vertical-align: middle;'></i>";
    else if (q.includes('corn') || q.includes('maize') || q.includes('మొక్కజొన్న'))
      engResp = "Corn waste (stalks, cobs) sells at ~₹900/Ton. Used to make compostable bags, bio-ethanol, animal feed, and compost. Contact Meenakshi Eco Bags or Khammam AgriWaste! <i data-feather='sun' style='width: 1em; height: 1em; vertical-align: middle;'></i>";
    else if (q.includes('sugarcane') || q.includes('bagasse') || q.includes('చెరకు'))
      engResp = "Sugarcane bagasse is highly valuable at ~₹1,500/Ton! Used for tableware, bio-bottles, paper products, and power generation. Nizamabad BioPlastics is a major buyer. <i data-feather='align-justify' style='width: 1em; height: 1em; vertical-align: middle;'></i>";
    else if (q.includes('cotton') || q.includes('పత్తి'))
      engResp = "Cotton stalks sell at ~₹800/Ton. They're used for bio-briquettes, particle board, and as mushroom growing substrate. EcoWarangal Solutions buys cotton stalks year-round. <i data-feather='circle' style='width: 1em; height: 1em; vertical-align: middle;'></i>";
    else if (q.includes('areca') || q.includes('palm'))
      engResp = "Areca sheaths are premium waste at ~₹2,000/Ton! Made into elegant plates, bowls, and gift packaging. Suryapet Sustainables directly purchases dried sheaths. <i data-feather='sun' style='width: 1em; height: 1em; vertical-align: middle;'></i>";
    else if (q.includes('banana') || q.includes('అరటి'))
      engResp = "Banana fiber/stem sells at ~₹1,800/Ton. Used for textiles, paper, rope, and craft materials. TS Green Fibers is actively seeking banana fiber suppliers. <i data-feather='smile' style='width: 1em; height: 1em; vertical-align: middle;'></i>";
    else if (q.includes('biodegradable') || q.includes('eco') || q.includes('plastic'))
      engResp = "Visit our **Biodegradable Product Hub** — it showcases eco alternatives to plastic: plates, bags, cups, textiles, bottles, mulch films, cutlery, and packaging. All made from crop waste! <i data-feather='wind' style='width: 1em; height: 1em; vertical-align: middle;'></i>";
    else if (q.includes('identify') || q.includes('photo') || q.includes('image') || q.includes('camera'))
      engResp = "Use our **AI Waste Identification** tool! Simply upload or drag-and-drop a photo of your crop waste in the Tools section. Our AI will identify the type and recommend the best way to monetize it. <i data-feather='camera' style='width: 1em; height: 1em; vertical-align: middle;'></i>";
    else if (q.includes('advisor') || q.includes('recommend') || q.includes('advice') || q.includes('suggest'))
      engResp = "Our **AI Waste Advisor** gives personalized recommendations! Select your waste type and quantity in Tools → AI Waste Advisor. You'll get estimated income, best buyer match, and possible products. <i data-feather='cpu' style='width: 1em; height: 1em; vertical-align: middle;'></i>";
    else if (q.includes('verified') || q.includes('trust') || q.includes('badge'))
      engResp = "Our **Verified Buyer System** ensures safe transactions. Verified buyers display a ✓ badge, have been background-checked, and provide guaranteed payments. Look for the green 'Verified' badge on buyer cards! <i data-feather='shield' style='width: 1em; height: 1em; vertical-align: middle;'></i>";
    else if (q.includes('thank') || q.includes('ధన్యవాదాలు'))
      engResp = "You're welcome! <i data-feather='heart' style='width: 1em; height: 1em; vertical-align: middle;'></i> I'm always here to help. Remember: every ton of waste you sell instead of burning saves 1.5 tons of CO₂ and earns you money. Together, let's build a pollution-free nation! <i data-feather='sun' style='width: 1em; height: 1em; vertical-align: middle;'></i>";
    else
      engResp = "I can help you with:\\n🏪 Finding buyers & recyclers\\n<i data-feather='dollar-sign' style='width: 1em; height: 1em; vertical-align: middle;'></i> Calculating waste income\\n<i data-feather='globe' style='width: 1em; height: 1em; vertical-align: middle;'></i> Carbon footprint tracking\\n<i data-feather='camera' style='width: 1em; height: 1em; vertical-align: middle;'></i> AI waste identification\\n<i data-feather='bar-chart' style='width: 1em; height: 1em; vertical-align: middle;'></i> Market prices\\n<i data-feather='truck' style='width: 1em; height: 1em; vertical-align: middle;'></i> Scheduling pickups\\n<i data-feather='cpu' style='width: 1em; height: 1em; vertical-align: middle;'></i> Waste recommendations\\n<i data-feather='refresh-cw' style='width: 1em; height: 1em; vertical-align: middle;'></i> Biodegradable products\\n\\nTry asking about any of these topics!";

    // Simple Telugu translation dictionary for the AI responses
    const teDict = {
      "Hello": "నమస్కారం! <i data-feather='heart' style='width: 1em; height: 1em; vertical-align: middle;'></i> నేను Gen Z TS AI అసిస్టెంట్‌ని. కొనుగోలుదారులను కనుగొనడం, వ్యర్థాల నుండి ఆదాయాన్ని లెక్కించడం మరియు వాతావరణ కాలుష్యాన్ని ట్రాక్ చేయడంలో నేను మీకు సహాయపడగలను. నన్ను ఏదైనా అడగండి!",
      "Our motto": "మా లక్ష్యం: పర్యావరణాన్ని రక్షించడం మరియు రైతులకు మంచి ఆదాయం అందించడం.",
      "You can find verified": "మీరు డైరెక్టరీలో లేదా సమీప కొనుగోలుదారుల ఫైండర్‌లో ధృవీకరించబడిన కొనుగోలుదారులను కనుగొనవచ్చు.",
      "Use our **Waste-to-Income Calculator**": "మా ఆదాయ కాలిక్యులేటర్ వాడండి! ఎకరానికి ₹10,000–₹15,000+ ఆదాయం పొందండి.",
      "Track your environmental": "కార్బన్ ఫుట్‌ప్రింట్ ట్రాకర్‌తో మీ పర్యావరణ ప్రభావాన్ని ట్రాక్ చేయండి!",
      "Burning crop waste": "పంట వ్యర్థాలను కాల్చడం వల్ల CO₂ మరియు హానికరమైన వాయువులు విడుదలవుతాయి. కాల్చడానికి బదులు విక్రయించండి!",
      "Current market prices": "ప్రస్తుత ధరలు:\\nవరి పొట్టు: ₹1,200/టన్ను\\nమొక్కజొన్న కాడలు: ₹900/టన్ను\\nచెరకు పిప్పి: ₹1,500/టన్ను",
      "Crop waste can be converted": "పంట వ్యర్థాలను ప్లేట్లు, బ్యాగులు, బట్టలు, మరియు బాటిళ్లుగా మార్చవచ్చు.",
      "Schedule a waste pickup": "వ్యర్థాల పికప్ కోసం షెడ్యూల్ చేయండి. మా లాజిస్టిక్స్ భాగస్వామి వచ్చి సేకరిస్తారు.",
      "Our **Waste Listing & Bidding": "రైతులు వ్యర్థాలను నమోదు చేయవచ్చు మరియు కొనుగోలుదారులు వేలం వేయవచ్చు.",
      "We have 25+ verified": "AP మరియు తెలంగాణలో మా వద్ద 25+ ధృవీకరించబడిన కంపెనీలు ఉన్నాయి.",
      "Gen Z TS supports 6 languages": "Gen Z TS 6 భాషలకు మద్దతు ఇస్తుంది. అందులో తెలుగు కూడా ఒకటి!",
      "Registering is FREE": "రిజిస్ట్రేషన్ ఉచితం మరియు కేవలం 2 నిమిషాలు పడుతుంది. 'వ్యర్థాలు విక్రయించండి' విభాగానికి వెళ్లండి.",
      "Your **Farmer Dashboard**": "మీ రైతు డాష్‌బోర్డ్ మీ ఆదాయం, కొనుగోలుదారులు మరియు పికప్‌లను చూపుతుంది.",
      "Paddy/Rice waste": "వరి వ్యర్థాలు సుమారు ₹1,200/టన్ను. బెస్ట్ కొనుగోలుదారులు: Agriware India.",
      "Corn waste": "మొక్కజొన్న వ్యర్థాలు సుమారు ₹900/టన్ను అమ్ముడవుతాయి.",
      "Sugarcane bagasse": "చెరకు పిప్పి సుమారు ₹1,500/టన్ను అమ్ముడవుతుంది.",
      "Cotton stalks": "పత్తి కాడలు సుమారు ₹800/టన్ను అమ్ముడవుతాయి.",
      "Areca sheaths": "అరెకా ఆకులు సుమారు ₹2,000/టన్ను.",
      "Banana fiber": "అరటి ఫైబర్ సుమారు ₹1,800/టన్ను.",
      "Visit our **Biodegradable": "మా బయోడిగ్రేడబుల్ ప్రొడక్ట్ హబ్‌ను సందర్శించండి. ఇవన్నీ పంట వ్యర్థాలతో చేసినవి!",
      "Use our **AI Waste Identification**": "మా AI వ్యర్థ గుర్తింపు సాధనాన్ని ఉపయోగించండి! ఫోటో అప్‌లోడ్ చేసి తెలుసుకోండి.",
      "Our **AI Waste Advisor**": "మా AI సలహాదారు ఉత్తమ కొనుగోలుదారు మరియు ఉత్పత్తులను సిఫార్సు చేస్తారు.",
      "Our **Verified Buyer": "ధృవీకరించబడిన కొనుగోలుదారులు సురక్షిత చెల్లింపులను అందిస్తారు.",
      "You're welcome!": "మీకు స్వాగతం! నేను మీకు ఎప్పుడూ సహాయం చేయడానికి సిద్ధంగా ఉన్నాను.",
      "I can help you": "నేను మీకు వీటిలో సహాయపడగలను:\\n🏪 కొనుగోలుదారులను కనుగొనడం\\n<i data-feather='dollar-sign' style='width: 1em; height: 1em; vertical-align: middle;'></i> ఆదాయాన్ని లెక్కించడం\\n<i data-feather='truck' style='width: 1em; height: 1em; vertical-align: middle;'></i> పికప్ షెడ్యూల్ చేయడం\\nఏదైనా అడగండి!"
    };

    if (window.currentLang === 'te') {
      // Basic prefix matching to translate the response
      for (const [key, val] of Object.entries(teDict)) {
        if (engResp.startsWith(key)) {
          return val;
        }
      }
      return teDict["I can help you"];
    }

    return engResp;
  };`;

code = code.replace(/const generateResponse = \(query\) => \{[\s\S]*?\};\n\n  const addMessage/g, replacement + '\n\n  const addMessage');

const voiceReplacement = `
    let isRecording = false;
    aiVoice.addEventListener('click', () => { 
      if(isRecording){recognition.stop();return;} 
      const langMap = { hi:'hi-IN', te:'te-IN', ta:'ta-IN', ml:'ml-IN', kn:'kn-IN', en:'en-IN' };
      recognition.lang = langMap[window.currentLang || 'en'] || 'en-IN';
      recognition.start(); 
      aiVoice.classList.add('recording'); 
      isRecording=true; 
    });`;

code = code.replace(/let isRecording = false;\n    aiVoice\.addEventListener[\s\S]*?isRecording=true; \}\);/, voiceReplacement.trim());

fs.writeFileSync('app.js', code);
