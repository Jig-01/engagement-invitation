/**
 * AJ ENGAGEMENT INVITATION — script.js
 * Abhishek Priyadarshi & Jigyasha Kumari | 21.11.2026
 * Vanilla JS — no frameworks
 */

document.addEventListener('DOMContentLoaded', () => {
  initLanguage();
  initMusic();
  initScratch();
  initCalendar();
  initScrollReveal();
});

/* ═══════════════════════════════════════════════════════════
   1.  BILINGUAL i18n
   ═══════════════════════════════════════════════════════════ */
const T = {
  en: {
    page_title:      'Abhishek & Jigyasha — Our Engagement',
    music_btn:       'SOUND',
    music_playing:   'PAUSE',
    hero_intro:      'TOGETHER WITH THEIR FAMILIES',
    hero_headline:   'ARE HAPPY TO ANNOUNCE THEIR ENGAGEMENT',
    groom_name:      'Abhishek Priyadarshi',
    bride_name:      'Jigyasha Kumari',
    hero_event_label:'A LITTLE CLOSER TO FOREVER',
    scratch_badge:   'A DATE WORTH THE WAIT',
    scratch_title:   'Scratch here to uncover our forever moment.',
    scratch_subtitle:'Drag your finger across the card below.',
    scratch_hint:    'DRAG TO REVEAL',
    canvas_main:     'DRAG TO UNCOVER OUR DAY',
    canvas_sub:      'Use finger or mouse',
    revealed_header: 'UNTIL WE MAKE IT OFFICIAL',
    revealed_date:   '21 NOVEMBER 2026',
    revealed_time:   '10:00 AM ONWARDS',
    revealed_event:  'OUR RING CEREMONY',
    revealed_message:'Save the date. Bring your smiles. Be part of our beginning.',
    add_calendar:    'ADD TO CALENDAR',
    quick_reveal:    'Or tap here to reveal instantly',
    family_badge:    'THE TWO SIDES',
    family_title:    'TWO FAMILIES. ONE BEAUTIFUL BOND.',
    family_subtitle: 'With the love and blessings of our parents, we begin this beautiful new chapter.',
    groom_card_label: 'THE GROOM',
    groom_name_full: 'Abhishek Priyadarshi',
    groom_grandparents: 'Smt. Shakuntala Devi\nLate Shri Biswanath Prasad (Mukhiya Ji)',
    groom_parents: 'Smt. Minu Devi\nShri Shambhu Prasad',
    bride_card_label: 'THE BRIDE',
    bride_name_full: 'Jigyasha Kumari',
    bride_grandparents: 'Late Smt. Laxmi Devi\nLate Shri Basant Prasad',
    bride_parents: 'Smt. Puja Gupta\nShri Umesh Kumar',
    label_grandson: 'GRANDSON OF',
    label_son: 'SON OF',
    label_granddaughter: 'GRANDDAUGHTER OF',
    label_daughter: 'DAUGHTER OF',
    venue_badge:     'THE DESTINATION',
    venue_title:     'MEET US WHERE THE CELEBRATION BEGINS.',
    venue_event_tag: 'Ring Ceremony',
    venue_name:      'Vision Royal Club Resort',
    venue_address:   'Near DAV School, Ibrahim Nagar, Dhanupara, Arrah, Bihar 802301',
    venue_date_text: '21 November 2026',
    venue_time_text: '10:00 AM onwards',
    get_directions:  'GET DIRECTIONS',
    footer_quote:    '\u201cTwo hearts, one promise, a lifetime of love.\u201d',
    footer_message:  'Your blessings, smiles, and presence will make our special day even more beautiful.',
    footer_closing:  'With love and excitement,',
    footer_names:    'Abhishek & Jigyasha',
    footer_credit:   'Made with love, for a day we will cherish forever.'
  },
  hi: {
  page_title: 'अभिषेक एवं जिज्ञासा — हमारा सगाई समारोह',
  music_btn: 'संगीत',
  music_playing: 'रोकें',

  hero_intro: 'हमारे परिवारों के साथ',
  hero_headline: 'हमें अपनी सगाई की खुशी साझा करते हुए हर्ष हो रहा है',
  groom_name: 'अभिषेक प्रियदर्शी',
  bride_name: 'जिज्ञासा कुमारी',
  hero_event_label: 'हमारी रिंग सेरेमनी',

  scratch_badge: 'एक खास सरप्राइज़',
  scratch_title: 'हमारी खास तारीख जानने के लिए कार्ड को स्क्रैच करें।',
  scratch_subtitle: 'तारीख जानने के लिए नीचे दिए गए सुनहरे कार्ड को स्क्रैच करें।',
  scratch_hint: 'स्क्रैच करें',
  canvas_main: 'हमारा खास दिन जानने के लिए स्क्रैच करें',
  canvas_sub: 'टच करें या माउस से स्क्रैच करें',

  revealed_header: 'यह है हमारा खास दिन',
  revealed_date: '21 नवंबर 2026',
  revealed_time: 'प्रातः 10:00 बजे से',
  revealed_event: 'हमारी रिंग सेरेमनी',
  revealed_message: 'तारीख याद रखें, मुस्कान साथ लाएँ और हमारी नई शुरुआत का हिस्सा बनें।',
  add_calendar: 'कैलेंडर में जोड़ें',
  quick_reveal: 'या तुरंत देखने के लिए यहाँ क्लिक करें',

  family_badge: 'दो परिवार',
  family_title: 'दो परिवार, एक खूबसूरत बंधन।',
  family_subtitle: 'माता-पिता के स्नेह और आशीर्वाद से हम जीवन के इस खूबसूरत नए अध्याय की शुरुआत कर रहे हैं।',

  groom_card_label: 'वर पक्ष',
  groom_name_full: 'अभिषेक प्रियदर्शी',
  groom_grandparents: 'श्रीमती शकुंतला देवी\nस्वर्गीय श्री बिस्वनाथ प्रसाद (मुखिया जी)',
  groom_parents: 'श्रीमती मीनू देवी\nश्री शंभू प्रसाद',

  bride_card_label: 'वधू पक्ष',
  bride_name_full: 'जिज्ञासा कुमारी',
  bride_grandparents: 'स्वर्गीय श्रीमती लक्ष्मी देवी\nस्वर्गीय श्री बसंत प्रसाद',
  bride_parents: 'श्रीमती पूजा गुप्ता\nश्री उमेश कुमार',

  label_grandson: 'पौत्र',
  label_son: 'सुपुत्र',
  label_granddaughter: 'पौत्री',
  label_daughter: 'सुपुत्री',

  venue_badge: 'समारोह स्थल',
  venue_title: 'आइए, जहाँ से जश्न की शुरुआत होगी।',
  venue_event_tag: 'रिंग सेरेमनी',
  venue_name: 'विज़न रॉयल क्लब रिसॉर्ट',
  venue_address: 'डीएवी स्कूल के पास, इब्राहिम नगर, धनुपरा, आरा, बिहार 802301',
  venue_date_text: '21 नवंबर 2026',
  venue_time_text: 'प्रातः 10:00 बजे से',
  get_directions: 'रास्ता देखें',

  footer_quote: '“दो दिल, एक वादा, जीवन भर का प्यार।”',
  footer_message: 'आपके आशीर्वाद, मुस्कान और उपस्थिति से हमारा यह खास दिन और भी यादगार बन जाएगा।',
  footer_closing: 'सप्रेम एवं उत्साह के साथ,',
  footer_names: 'अभिषेक एवं जिज्ञासा',
  footer_credit: 'प्रेमपूर्वक समर्पित, उस दिन के लिए जिसे हम जीवन भर संजोकर रखेंगे।'
}
};

let lang = 'en';
let _redrawCanvas = null;

function initLanguage() {
  const btnEn = document.getElementById('lang-en');
  const btnHi = document.getElementById('lang-hi');
  if (!btnEn || !btnHi) return;
  btnEn.addEventListener('click', () => applyLang('en'));
  btnHi.addEventListener('click', () => applyLang('hi'));
}

function applyLang(l) {
  if (lang === l) return;
  lang = l;

  document.getElementById('lang-en').classList.toggle('active', l === 'en');
  document.getElementById('lang-en').setAttribute('aria-pressed', l === 'en');
  document.getElementById('lang-hi').classList.toggle('active', l === 'hi');
  document.getElementById('lang-hi').setAttribute('aria-pressed', l === 'hi');

  document.documentElement.lang = l;
  document.body.classList.toggle('lang-hi-active', l === 'hi');
  document.title = T[l].page_title;

  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (T[l][key] !== undefined) el.textContent = T[l][key];
  });

  if (_redrawCanvas) _redrawCanvas();
}

/* ═══════════════════════════════════════════════════════════
   2.  BACKGROUND MUSIC + WEB AUDIO SYNTH FALLBACK
   ═══════════════════════════════════════════════════════════ */





function initMusic() {
  const audio = document.getElementById('bg-audio');
  if (!audio) return;

  audio.loop = true;
  audio.preload = 'auto';

  const startAt=90; // Start song at 1:25
  let musicStarted = false;

  function startMusic() {
    if (musicStarted) return;

    // Seek only if audio metadata is already available
    if (
      audio.readyState >= 1 &&
      Number.isFinite(audio.duration) &&
      audio.duration > startAt &&
      audio.currentTime < startAt
    ) {
      audio.currentTime = startAt;
    }

    // Call play directly during the visitor's tap
    audio.play()
      .then(() => {
        musicStarted = true;
        document.removeEventListener('pointerdown', startMusic);
        document.removeEventListener('keydown', startMusic);
        console.log('Wedding music started');
      })
      .catch((error) => {
        // Keep listeners active so the next tap can retry
        console.warn('Music playback blocked; tap again to retry:', error);
      });
  }

  // First tap anywhere on the page starts music
  document.addEventListener('pointerdown', startMusic);
  document.addEventListener('keydown', startMusic);
}






/* ═══════════════════════════════════════════════════════════
   3.  SCRATCH CARD — GOLD FOIL REVEAL
   Key fix: canvas is sized using offsetWidth/offsetHeight
   (matches the CSS-controlled display size exactly).
   ctx.setTransform resets any accumulated scale each resize.
   ═══════════════════════════════════════════════════════════ */
function initScratch() {
  const card    = document.getElementById('scratch-card');        // the .scratch-card wrapper
  const canvas  = document.getElementById('scratch-canvas');
  const hint    = document.getElementById('scratch-hint');
  const bypassBtn = document.getElementById('quick-reveal-btn');
  if (!card || !canvas) return;

  const ctx = canvas.getContext('2d', { willReadFrequently: true });

  
  // Load custom scratch foil
  const foilImage = new Image();
  let foilLoaded = false;

  foilImage.onload = () => {
    foilLoaded = true;

    if (!revealed) {
      const w = card.offsetWidth;
      const h = card.offsetHeight;
      if (w && h) drawFoil(w, h);
    }
  };

  foilImage.onerror = () => {
    console.error("Custom scratch foil could not be loaded.");
  };

  foilImage.src = "assets/aj-gold-foil.png";

  let scratching = false, revealed = false;
  let lx = 0, ly = 0, moves = 0;

  /* ── Size the canvas drawing buffer to match CSS layout ── */
  function sizeCanvas() {
    if (revealed) return;
    const dpr = window.devicePixelRatio || 1;
    // Use the card's rendered width/height (CSS controls this via aspect-ratio)
    const w = card.offsetWidth;
    const h = card.offsetHeight;
    if (!w || !h) return;

    canvas.width  = Math.round(w * dpr);
    canvas.height = Math.round(h * dpr);
    // Reset transform completely to avoid accumulation
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    drawFoil(w, h);
  }

  /* ── Draw gold foil over the entire canvas ── */
  
  /* Draw custom image as scratchable foil */
  function drawFoil(w, h) {
    ctx.save();
    ctx.globalCompositeOperation = 'source-over';
    ctx.clearRect(0, 0, w, h);

    if (foilLoaded) {
      ctx.drawImage(foilImage, 0, 0, w, h);
    } else {
      // Temporary fallback while image loads
      ctx.fillStyle = '#d8b66c';
      ctx.fillRect(0, 0, w, h);
    }

    ctx.restore();
  }


  // Expose for language switch
  _redrawCanvas = () => { if (!revealed) { const w=card.offsetWidth,h=card.offsetHeight; if(w&&h) drawFoil(w,h); } };

  /* ── Coordinate helper — CSS-pixel space ── */
  function pos(e) {
    const r = canvas.getBoundingClientRect();
    const t = e.touches ? e.touches[0] : e;
    return { x: t.clientX - r.left, y: t.clientY - r.top };
  }

  /* ── Erase foil pixels with destination-out ── */
  function scratch(x, y) {
    ctx.save();
    ctx.globalCompositeOperation = 'destination-out';
    ctx.lineWidth = 54; ctx.lineCap = 'round'; ctx.lineJoin = 'round';
    ctx.beginPath(); ctx.moveTo(lx, ly); ctx.lineTo(x, y); ctx.stroke();
    ctx.beginPath(); ctx.arc(x, y, 27, 0, Math.PI * 2); ctx.fill();
    ctx.restore();
    lx = x; ly = y;
  }

  /* ── Sample alpha to detect >38% cleared ── */
  function checkThreshold() {
    const dpr  = window.devicePixelRatio || 1;
    const W    = Math.round(card.offsetWidth  * dpr);
    const H    = Math.round(card.offsetHeight * dpr);
    const step = Math.ceil(dpr) * 16;
    try {
      const d = ctx.getImageData(0, 0, W, H).data;
      let clear = 0, total = 0;
      for (let y = 0; y < H; y += step)
        for (let x = 0; x < W; x += step) {
          total++;
          if (d[(y * W + x) * 4 + 3] < 120) clear++;
        }
      if (clear / total > .38) reveal();
    } catch(e) {
      if (moves > 80) reveal();
    }
  }

  /* ── Reveal: fade canvas out, trigger confetti ── */
  function reveal() {
    if (revealed) return;
    revealed = true;
    canvas.style.transition = 'opacity .6s ease';
    canvas.style.opacity = '0';
    setTimeout(() => { canvas.style.pointerEvents = 'none'; }, 650);
    if (hint) hint.classList.add('hidden');
    if (bypassBtn) bypassBtn.style.display = 'none';
    triggerConfetti();
  }

  /* ── Event wiring ── */
  function onStart(e) {
    if (revealed) return;
    scratching = true;
    const p = pos(e); lx = p.x; ly = p.y;
    scratch(p.x, p.y);
    if (hint) hint.classList.add('hidden');
  }
  function onMove(e) {
    if (!scratching || revealed) return;
    e.preventDefault();
    const p = pos(e); scratch(p.x, p.y);
    moves++;
    if (moves % 6 === 0) checkThreshold();
  }
  function onEnd() { if (scratching) { scratching = false; checkThreshold(); } }

  canvas.addEventListener('mousedown',  onStart);
  window.addEventListener('mousemove',  onMove);
  window.addEventListener('mouseup',    onEnd);
  canvas.addEventListener('touchstart', onStart, { passive: false });
  window.addEventListener('touchmove',  onMove,  { passive: false });
  window.addEventListener('touchend',   onEnd);
  if (bypassBtn) bypassBtn.addEventListener('click', reveal);

  // Initial size after layout
  sizeCanvas();
  window.addEventListener('resize', () => { if (!revealed) sizeCanvas(); });
}

/* ═══════════════════════════════════════════════════════════
   4.  PETAL + CONFETTI BURST
   ═══════════════════════════════════════════════════════════ */
function triggerConfetti() {
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
  const canvas = document.getElementById('celebration-canvas');
  if (!canvas) return;

  const ctx2 = canvas.getContext('2d');
  const dpr  = window.devicePixelRatio || 1;
  const W = window.innerWidth, H = window.innerHeight;
  canvas.width  = W * dpr; canvas.height = H * dpr;
  canvas.style.width  = W + 'px'; canvas.style.height = H + 'px';
  ctx2.scale(dpr, dpr);

  const palette = ['#9c1f42','#d4a853','#d97a96','#fff0e5','#5a1128','#e9c97a'];

  const card = document.getElementById('scratch-card');
  let ox = W / 2, oy = H / 2;
  if (card) { const r = card.getBoundingClientRect(); ox = r.left + r.width/2; oy = r.top + r.height/2; }

  const pts = Array.from({ length: 90 }, () => {
    const a = Math.random() * Math.PI * 2, s = Math.random() * 9 + 3;
    const petal = Math.random() > .35;
    return {
      x: ox + (Math.random()-.5)*60, y: oy + (Math.random()-.5)*40,
      vx: Math.cos(a)*s, vy: Math.sin(a)*s - 5,
      sz: Math.random()*13+6, roll: Math.random()*Math.PI, vRoll: Math.random()*.09+.02,
      rot: Math.random()*Math.PI*2, vRot: (Math.random()-.5)*.06,
      col: palette[Math.floor(Math.random()*palette.length)],
      petal, alpha: 1, decay: Math.random()*.003+.006,
      grav: Math.random()*.12+.14, wind: (Math.random()-.5)*.3
    };
  });

  let raf; const t0 = Date.now();
  (function frame() {
    const elapsed = Date.now() - t0;
    ctx2.clearRect(0, 0, W, H);
    let alive = 0;
    pts.forEach(p => {
      if (p.alpha <= 0 || p.y > H+60) return;
      alive++;
      p.x += p.vx + p.wind; p.y += p.vy; p.vy += p.grav; p.vx *= .984;
      p.roll += p.vRoll; p.rot += p.vRot;
      if (elapsed > 1600) p.alpha -= p.decay;
      ctx2.save();
      ctx2.translate(p.x, p.y); ctx2.rotate(p.rot);
      ctx2.scale(Math.cos(p.roll), 1);
      ctx2.globalAlpha = Math.max(0, p.alpha);
      ctx2.fillStyle = p.col;
      if (p.petal) {
        ctx2.beginPath();
        ctx2.moveTo(0,-p.sz/2);
        ctx2.bezierCurveTo( p.sz*.7,-p.sz*.3, p.sz*.7, p.sz*.6, 0, p.sz*.9);
        ctx2.bezierCurveTo(-p.sz*.7, p.sz*.6,-p.sz*.7,-p.sz*.3, 0,-p.sz/2);
        ctx2.closePath(); ctx2.fill();
      } else {
        ctx2.beginPath(); ctx2.arc(0,0,p.sz*.35,0,Math.PI*2); ctx2.fill();
      }
      ctx2.restore();
    });
    if (elapsed < 4800 && alive > 0) raf = requestAnimationFrame(frame);
    else ctx2.clearRect(0, 0, W, H);
  })();
}

/* ═══════════════════════════════════════════════════════════
   5.  GOOGLE CALENDAR LINK
   ═══════════════════════════════════════════════════════════ */
function initCalendar() {
  const btn = document.getElementById('add-calendar-btn');
  if (!btn) return;
  const title    = encodeURIComponent('Abhishek & Jigyasha — Ring Ceremony');
  const dates    = '20261121T043000Z/20261121T103000Z';
  const details  = encodeURIComponent('Together with our families, we invite you to celebrate the beginning of our forever.\n\nAbhishek Priyadarshi & Jigyasha Kumari\nEvent: Ring Ceremony');
  const location = encodeURIComponent('Vision Royal Club Resort, Near DAV School, Ibrahim Nagar, Dhanupara, Arrah, Bihar 802301');
  btn.href = `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${title}&dates=${dates}&details=${details}&location=${location}`;
}

/* ═══════════════════════════════════════════════════════════
   6.  SCROLL REVEAL ANIMATIONS
   ═══════════════════════════════════════════════════════════ */
function initScrollReveal() {
  if (!('IntersectionObserver' in window)) {
    document.querySelectorAll('.reveal-up, .family-mid').forEach(el => el.classList.add('revealed'));
    return;
  }

  // Generic fade-up elements
  const obs = new IntersectionObserver(entries => {
    entries.forEach(e => {
      if (!e.isIntersecting) return;
      // Stagger siblings
      const sibs = Array.from(e.target.parentElement.querySelectorAll('.reveal-up'));
      const idx  = sibs.indexOf(e.target);
      e.target.style.transitionDelay = (idx * 0.13) + 's';
      e.target.classList.add('revealed');
      obs.unobserve(e.target);
    });
  }, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' });

  document.querySelectorAll('.reveal-up').forEach(el => obs.observe(el));

  // Family mid divider — separate observer for tighter threshold
  const midObs = new IntersectionObserver(entries => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        e.target.classList.add('revealed');
        midObs.unobserve(e.target);
      }
    });
  }, { threshold: 0.4 });

  document.querySelectorAll('.family-mid').forEach(el => midObs.observe(el));
}


// Envelope 

document.addEventListener("DOMContentLoaded", () => {
  const screen = document.getElementById("envelope-screen");
  const envelope = document.getElementById("open-envelope");

  // Use one audio element with id="bg-audio" in your HTML.
  const audio = document.getElementById("bg-audio");

  if (!screen || !envelope) return;

  envelope.addEventListener("click", () => {
    // Start music from the same tap that opens the envelope.
    if (audio) {
      audio.loop = true;

      const startSong = 90;

      if (audio.readyState >= 1 &&
          Number.isFinite(audio.duration) &&
          audio.duration > startSong) {
        audio.currentTime = startSong;
      } else if (audio.readyState < 1) {
        audio.addEventListener("loadedmetadata", () => {
          if (Number.isFinite(audio.duration) &&
              audio.duration > startSong) {
            audio.currentTime = startSong;
          }
        }, { once: true });
      }

      audio.play().catch((error) => {
        console.warn("Music playback could not start:", error);
      });
    }

    envelope.classList.add("is-open");

    // Fade away the envelope to reveal your existing invitation.
    setTimeout(() => {
      screen.classList.add("is-opening");
    }, 650);

    setTimeout(() => {
      screen.remove();
    }, 1600);
  }, { once: true });
});


function initWeddingCountdown() {
  const daysEl = document.getElementById("countdown-days");
  const hoursEl = document.getElementById("countdown-hours");
  const minutesEl = document.getElementById("countdown-minutes");
  const secondsEl = document.getElementById("countdown-seconds");
  const countdown = document.getElementById("wedding-countdown");

  if (!daysEl || !hoursEl || !minutesEl || !secondsEl) return;

  // 21 November 2026, 10:00 AM India time
  const targetDate = new Date("2026-11-21T10:00:00+05:30").getTime();

  function updateCountdown() {
    const now = Date.now();
    const difference = targetDate - now;

    if (difference <= 0) {
      countdown.innerHTML =
        '<p class="countdown-title">OUR SPECIAL DAY IS HERE! ♡</p>';
      clearInterval(timer);
      return;
    }

    const days = Math.floor(difference / (1000 * 60 * 60 * 24));
    const hours = Math.floor((difference / (1000 * 60 * 60)) % 24);
    const minutes = Math.floor((difference / (1000 * 60)) % 60);
    const seconds = Math.floor((difference / 1000) % 60);

    daysEl.textContent = String(days).padStart(2, "0");
    hoursEl.textContent = String(hours).padStart(2, "0");
    minutesEl.textContent = String(minutes).padStart(2, "0");
    secondsEl.textContent = String(seconds).padStart(2, "0");
  }

  updateCountdown();
  const timer = setInterval(updateCountdown, 1000);
}

document.addEventListener("DOMContentLoaded", initWeddingCountdown);

