// ============================================
// EL DIABLITO CHATBOT — Shared across all pages
// ============================================

const RESPONSES = {
  greet: [
    "Orale! Welcome to Diablito Hub 😈🔥 I'm El Diablito — your guide to everything here. How can I help you today?",
    "What's good! I'm El Diablito, the mascot and guide of this hub. Ask me anything — I got you! 🔥",
    "Hey, welcome! I'm here to help you find products, place orders, learn about the studio, gaming zone, AI lab — whatever you need. What can I do for you? 😈"
  ],
  order: [
    "To place an order, just DM us on Instagram or WhatsApp! 📱 Tell us what product you're looking for and we'll get back to you fast with the best price in TJ. We're very respectful and professional — no pressure at all.",
    "Ordering is super easy! Reach out on our Instagram or WhatsApp, let us know what you need, and we'll take great care of you. We treat every customer with respect. 🙏🔥",
    "The easiest way to order is through our social media — Instagram or WhatsApp. We respond quickly and we'll make sure you get exactly what you're looking for. Thank you for choosing Diablito! 😈"
  ],
  products: [
    "We carry a wide selection at our smoke shop — premium vapes, rolling papers (RAW, Zig-Zag, Elements), lighters, torches, glass pieces, grinders, trays, and we do special orders too! What are you looking for? 🛒",
    "Our smoke shop has everything you need — vapes, papers, accessories, glass pieces and more. If you don't see what you need, just ask — we can source almost anything! 🔥",
    "Great question! We stock premium vapes, rolling papers, lighters, torches, glass pieces, grinders and accessories. DM us on Instagram or WhatsApp for current stock and pricing. We're always happy to help! 😊"
  ],
  location: [
    "We're based in beautiful Tijuana, BC! 📍 DM us on Instagram or WhatsApp for the exact address. We'd love to have you visit us in person!",
    "Tijuana, BC is home! 🌮 Reach out on our social media for the address. We're welcoming and friendly — come through anytime during business hours!",
    "We're in Tijuana, Baja California! Hit us up on Instagram or WhatsApp and we'll send you the exact location. We look forward to seeing you! 🙏"
  ],
  hours: [
    "We're open Monday through Saturday 10am–10pm, and Sundays 12pm–8pm. 🕙 Feel free to DM us to confirm holiday hours — we always try to accommodate our customers!",
    "Our hours are Mon–Sat 10am to 10pm, Sundays noon to 8pm. We do our best to be available and responsive even outside hours for any urgent questions! 😊",
    "Business hours: Monday–Saturday 10am–10pm, Sunday 12pm–8pm. We appreciate you asking — we want to make sure you can always reach us! 🙏🔥"
  ],
  price: [
    "We keep our pricing competitive and don't post it publicly so we can always give you the best deal possible! 💰 DM us on Instagram or WhatsApp and we'll give you an honest price right away — no games, no pressure.",
    "Pricing varies by product but we always offer the best value in TJ. Reach out and we'll be completely transparent with you — we believe in honest, fair pricing for everyone. 🙏",
    "We'd love to give you a price! Just reach out on Instagram or WhatsApp with what you're looking for and we'll get back to you quickly with a fair, honest quote. Thank you for your interest! 😊🔥"
  ],
  studio: [
    "The Diablito Music Studio is open to all artists and rappers! 🎵 You can use FL Studio, GarageBand, Audacity, BandLab and more — all free or browser-based. Create beats, record tracks, collaborate with other artists. Check out the Studio page for everything!",
    "Our Music Studio tab is built for creators! 🎤 We feature FL Studio, Audacity, BandLab (free online DAW), Chrome Music Lab and more. Whether you make beats or record vocals — it's all there. We want to support TJ's music scene!",
    "The Studio section is one of my favorites! 🔥 Artists and rappers can connect, create beats, record songs and collaborate. We link to FL Studio, free browser DAWs, and have a community space. Check the Music Studio page!"
  ],
  gaming: [
    "The Gaming Zone is powered by an RTX 3070 🎮 — one of the best mid-range GPUs out there! We post benchmarks, game reviews and recommendations. Check the Gaming page for all the details!",
    "Our rig runs an RTX 3070 which handles Cyberpunk 2077, Warzone, Elden Ring, Forza and more at high FPS. Check the Gaming Zone page for full specs and benchmarks! 🎮🔥",
    "RTX 3070 ready! The Gaming Zone covers benchmarks, game reviews, and our personal recommendations. If you want to know how a game runs on our rig, just ask! 😈🎮"
  ],
  ai: [
    "The AI Lab is where we experiment with cutting-edge AI tools! 🤖 We use Claude, ChatGPT, Ollama for local AI, Stable Diffusion for image generation, Gradio for demos and HuggingFace for free models. Check the AI Lab page!",
    "Our AI Lab features both online and local AI tools — completely free! Claude, ChatGPT, Ollama, Stable Diffusion and more. We're always adding new tools. It's one of the most exciting sections of the hub! 🤖🔥",
    "Great question about the AI Lab! We run local AI with Ollama (privacy-focused, no internet needed) alongside online tools like Claude and ChatGPT. We also use Stable Diffusion for art. Check it out! 😈🤖"
  ],
  food: [
    "The Food section is coming soon and it's going to be amazing! 🌮 We're building a real TJ food guide — best taco spots, mariscos, birria, delivery recommendations. Tijuana has world-class food and we want to show it off!",
    "Food is coming soon to the Hub! 🍔 We're creating an honest guide to Tijuana's best restaurants, street food and delivery spots. No paid promotions — just real recommendations from locals!",
    "Our Food section launches soon! 🌮🔥 Think of it as a real local's guide to TJ food — tacos, seafood, late night spots, delivery. We're excited to share what makes Tijuana's food scene so special!"
  ],
  movies: [
    "The Movies section is coming soon! 🎬 We'll have honest film reviews, streaming guides, top lists by genre, and Diablito's personal picks. No clickbait — just real recommendations!",
    "Movies are coming to the Hub soon! 🎬 We'll cover the best streaming picks, new releases, underrated gems and Diablito's personal favorites across action, horror, sci-fi and more.",
    "The Movies page is being built right now! 🎬 Expect real honest reviews, where-to-watch guides, and genre top lists. We want to be your go-to for what to watch next!"
  ],
  social: [
    "You can find us on Instagram, TikTok, Facebook and WhatsApp! 📱 Our social links are on every page. Follow us to stay updated on new products, deals and hub updates. We appreciate every follower! 🙏🔥",
    "Follow Diablito Hub on Instagram and TikTok for the latest content! 😈 WhatsApp is the best way to reach us for orders. We're very active and always respond respectfully and promptly.",
    "All our social media links are in the site footer and on the Smoke Shop page. Instagram and TikTok for content, WhatsApp for direct orders and questions. We love hearing from our community! 🙏"
  ],
  thanks: [
    "Thank you so much — that genuinely means a lot to us! We work hard to make Diablito Hub the best it can be for Tijuana and beyond. 🙏🔥",
    "We really appreciate that! Your support is what keeps us going. Welcome to the Diablito family! 😈🙏",
    "Thank you! We always try to give our best. If there's anything we can improve or anything you need, please let us know. We're here for you! 🙏🔥"
  ],
  default: [
    "Great question! I want to make sure I give you the most helpful answer. Could you tell me a bit more about what you're looking for? I'm here to help with anything — products, orders, the studio, gaming, AI tools, or anything else! 😊🔥",
    "I want to help you with that! Feel free to ask about our smoke shop products, how to place an order, the Music Studio, Gaming Zone, AI Lab, or anything about Diablito Hub. What would you like to know? 😈",
    "Thanks for reaching out! I may not have a specific answer for that, but our team is always available on Instagram or WhatsApp to help with anything you need. Is there something specific about the hub I can help with? 🙏🔥"
  ]
};

function pickRandom(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}

function getResponse(msg) {
  const m = msg.toLowerCase();
  if (m.match(/hi|hello|hey|hola|sup|what.s up|wassup|good/)) return pickRandom(RESPONSES.greet);
  if (m.match(/order|buy|purchase|get one|how do i get|want to buy/)) return pickRandom(RESPONSES.order);
  if (m.match(/product|sell|stock|carry|have|vape|paper|lighter|glass|grinder|accessory|pipe/)) return pickRandom(RESPONSES.products);
  if (m.match(/locat|address|where|find you|visit|come in/)) return pickRandom(RESPONSES.location);
  if (m.match(/hour|open|close|time|schedule|when/)) return pickRandom(RESPONSES.hours);
  if (m.match(/price|cost|how much|expensive|cheap|rate|\$/)) return pickRandom(RESPONSES.price);
  if (m.match(/studio|music|record|beat|rap|artist|fl studio|daw|song|track|produce|producer/)) return pickRandom(RESPONSES.studio);
  if (m.match(/game|gaming|rtx|3070|fps|benchmark|play|console|pc/)) return pickRandom(RESPONSES.gaming);
  if (m.match(/ai|artificial|claude|chatgpt|robot|machine|ollama|stable|diffusion|model/)) return pickRandom(RESPONSES.ai);
  if (m.match(/food|eat|taco|restaurant|delivery|hungry|burrito|mariscos|birria/)) return pickRandom(RESPONSES.food);
  if (m.match(/movie|film|watch|stream|cinema|netflix|show/)) return pickRandom(RESPONSES.movies);
  if (m.match(/instagram|tiktok|facebook|whatsapp|social|follow|contact|reach/)) return pickRandom(RESPONSES.social);
  if (m.match(/thank|thanks|gracias|appreciate|great|awesome|love|amazing|cool|nice/)) return pickRandom(RESPONSES.thanks);
  return pickRandom(RESPONSES.default);
}

// ---- DOM SETUP ----
let chatOpen = false;
let botBusy = false;

function initBot() {
  const panel = document.getElementById('chat-panel');
  const msgsEl = document.getElementById('chat-msgs');
  if (!panel || !msgsEl) return;

  // Show greeting after short delay on first open
  document.getElementById('mascot-btn').addEventListener('click', () => {
    toggleChat();
  });

  document.getElementById('chat-close').addEventListener('click', () => {
    toggleChat();
  });

  document.getElementById('chat-send').addEventListener('click', sendMsg);

  document.getElementById('chat-input').addEventListener('keydown', (e) => {
    if (e.key === 'Enter') sendMsg();
  });

  document.querySelectorAll('.qbtn').forEach(btn => {
    btn.addEventListener('click', () => quickAsk(btn.dataset.q));
  });
}

function toggleChat() {
  chatOpen = !chatOpen;
  const panel = document.getElementById('chat-panel');
  const msgsEl = document.getElementById('chat-msgs');

  if (chatOpen) {
    panel.classList.add('open');
    if (msgsEl.children.length === 0) {
      setTimeout(() => addBotMsg(pickRandom(RESPONSES.greet)), 400);
    }
    setTimeout(() => {
      document.getElementById('chat-input').focus();
    }, 350);
  } else {
    panel.classList.remove('open');
  }
}

function addBotMsg(text) {
  const msgs = document.getElementById('chat-msgs');
  const el = document.createElement('div');
  el.className = 'msg bot';
  el.textContent = text;
  msgs.appendChild(el);
  msgs.scrollTop = msgs.scrollHeight;
}

function addUserMsg(text) {
  const msgs = document.getElementById('chat-msgs');
  const el = document.createElement('div');
  el.className = 'msg user';
  el.textContent = text;
  msgs.appendChild(el);
  msgs.scrollTop = msgs.scrollHeight;
}

function showTyping() {
  const msgs = document.getElementById('chat-msgs');
  const el = document.createElement('div');
  el.className = 'typing-dots';
  el.id = 'typing-indicator';
  el.innerHTML = '<span></span><span></span><span></span>';
  msgs.appendChild(el);
  msgs.scrollTop = msgs.scrollHeight;
}

function removeTyping() {
  const t = document.getElementById('typing-indicator');
  if (t) t.remove();
}

function sendMsg() {
  const inp = document.getElementById('chat-input');
  const text = inp.value.trim();
  if (!text || botBusy) return;
  inp.value = '';
  addUserMsg(text);
  botBusy = true;
  showTyping();
  const delay = 700 + Math.random() * 700;
  setTimeout(() => {
    removeTyping();
    addBotMsg(getResponse(text));
    botBusy = false;
  }, delay);
}

function quickAsk(q) {
  if (botBusy) return;
  addUserMsg(q);
  botBusy = true;
  showTyping();
  setTimeout(() => {
    removeTyping();
    addBotMsg(getResponse(q));
    botBusy = false;
  }, 900);
}

// Matrix rain
function initMatrix() {
  const canvas = document.getElementById('matrix-canvas');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');
  function resize() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
  }
  resize();
  window.addEventListener('resize', resize);
  const chars = 'DIABLITO01アイウエオカキクケコ🔥😈';
  const fs = 13;
  let drops = Array(Math.floor(window.innerWidth / fs)).fill(1);
  setInterval(() => {
    ctx.fillStyle = 'rgba(6,6,6,0.06)';
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = '#ff1a1a';
    ctx.font = fs + 'px monospace';
    drops.forEach((y, i) => {
      ctx.fillText(chars[Math.floor(Math.random() * chars.length)], i * fs, y * fs);
      if (y * fs > canvas.height && Math.random() > 0.975) drops[i] = 0;
      drops[i]++;
    });
  }, 55);
}

document.addEventListener('DOMContentLoaded', () => {
  initMatrix();
  initBot();
});
