// Year
  document.getElementById('year').textContent = new Date().getFullYear();

  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const hasFinePointer = window.matchMedia('(pointer: fine)').matches;

  // ===== Scroll progress bar =====
  const scrollProgress = document.getElementById('scrollProgress');
  function updateScrollProgress(){
    const h = document.documentElement;
    const scrolled = (h.scrollTop) / (h.scrollHeight - h.clientHeight) * 100;
    scrollProgress.style.width = scrolled + '%';
  }
  window.addEventListener('scroll', updateScrollProgress, { passive:true });
  updateScrollProgress();

  // ===== Scroll cue fade =====
  const scrollCue = document.getElementById('scrollCue');
  if (scrollCue) {
    window.addEventListener('scroll', () => {
      scrollCue.style.opacity = window.scrollY > 80 ? '0' : '1';
    }, { passive:true });
  }

  // ===== Confetti burst =====
  function fireConfetti(originEl){
    if (prefersReducedMotion) return;
    const rect = originEl.getBoundingClientRect();
    const colors = ['#c22a26', '#167a45', '#b9924f', '#1a1a18'];
    for (let i=0;i<32;i++){
      const piece = document.createElement('div');
      piece.className = 'confetti-piece';
      piece.style.background = colors[Math.floor(Math.random()*colors.length)];
      piece.style.left = (rect.left + rect.width/2) + 'px';
      piece.style.top = (rect.top + rect.height/2) + 'px';
      piece.style.borderRadius = Math.random() > 0.5 ? '50%' : '2px';
      document.body.appendChild(piece);
      const angle = Math.random() * Math.PI * 2;
      const dist = 90 + Math.random()*160;
      const dx = Math.cos(angle)*dist, dy = Math.sin(angle)*dist - 60;
      const rot = (Math.random()*720 - 360);
      piece.animate([
        { transform:'translate(0,0) rotate(0deg)', opacity:1 },
        { transform:`translate(${dx}px, ${dy + 220}px) rotate(${rot}deg)`, opacity:0 }
      ], { duration: 1100 + Math.random()*500, easing:'cubic-bezier(.25,.6,.4,1)' });
      setTimeout(() => piece.remove(), 1700);
    }
  }

  // ===== Custom cursor =====
  if (hasFinePointer && !prefersReducedMotion) {
    document.body.classList.add('has-cursor');
    const dot = document.getElementById('cursorDot');
    const ring = document.getElementById('cursorRing');
    let mx = window.innerWidth/2, my = window.innerHeight/2, rx = mx, ry = my;
    window.addEventListener('mousemove', (e) => {
      mx = e.clientX; my = e.clientY;
      dot.style.left = mx + 'px'; dot.style.top = my + 'px';
    });
    (function ringLoop(){
      rx += (mx - rx) * 0.18; ry += (my - ry) * 0.18;
      ring.style.left = rx + 'px'; ring.style.top = ry + 'px';
      requestAnimationFrame(ringLoop);
    })();
    document.querySelectorAll('a, button, .tilt-card, input, select, textarea, .faq-q').forEach(el => {
      el.addEventListener('mouseenter', () => ring.classList.add('hovering'));
      el.addEventListener('mouseleave', () => ring.classList.remove('hovering'));
    });
  }

  // ===== Magnetic buttons =====
  if (hasFinePointer && !prefersReducedMotion) {
    document.querySelectorAll('.magnetic').forEach(btn => {
      btn.addEventListener('mousemove', (e) => {
        const r = btn.getBoundingClientRect();
        const x = (e.clientX - r.left - r.width/2) * 0.3;
        const y = (e.clientY - r.top - r.height/2) * 0.3;
        btn.style.transform = `translate(${x}px, ${y}px)`;
      });
      btn.addEventListener('mouseleave', () => { btn.style.transform = ''; });
    });
  }

  // ===== Tilt cards =====
  if (hasFinePointer && !prefersReducedMotion) {
    document.addEventListener('mousemove', (e) => {
      const el = e.target.closest && e.target.closest('.tilt-card');
      if (!el) return;
      const r = el.getBoundingClientRect();
      const px = (e.clientX - r.left) / r.width - 0.5;
      const py = (e.clientY - r.top) / r.height - 0.5;
      el.style.transform = `perspective(700px) rotateX(${(-py*7).toFixed(2)}deg) rotateY(${(px*7).toFixed(2)}deg) translateY(-3px)`;
    });
    document.addEventListener('mouseout', (e) => {
      const el = e.target.closest && e.target.closest('.tilt-card');
      if (el) el.style.transform = '';
    });
  }

  // ===== Animated stat counters =====
  const counters = document.querySelectorAll('[data-count]');
  function animateCounter(el){
    const target = parseFloat(el.getAttribute('data-count'));
    const decimals = parseInt(el.getAttribute('data-decimals') || '0', 10);
    const prefix = el.getAttribute('data-prefix') || '';
    const suffix = el.getAttribute('data-suffix') || '';
    const duration = 1400;
    const start = performance.now();
    function frame(now){
      const t = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - t, 3);
      const val = (target * eased).toFixed(decimals);
      el.textContent = prefix + val + suffix;
      if (t < 1) requestAnimationFrame(frame);
      else el.textContent = prefix + target.toFixed(decimals) + suffix;
    }
    requestAnimationFrame(frame);
  }
  if ('IntersectionObserver' in window && counters.length) {
    const counterIO = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          animateCounter(entry.target);
          counterIO.unobserve(entry.target);
        }
      });
    }, { threshold: 0.5 });
    counters.forEach(el => counterIO.observe(el));
  } else {
    counters.forEach(el => {
      const target = parseFloat(el.getAttribute('data-count'));
      const decimals = parseInt(el.getAttribute('data-decimals') || '0', 10);
      el.textContent = (el.getAttribute('data-prefix')||'') + target.toFixed(decimals) + (el.getAttribute('data-suffix')||'');
    });
  }

  // ===== Instant estimator =====
  (function estimator(){
    const catGroup = document.getElementById('estCategory');
    const qtyGroup = document.getElementById('estQty');
    const timelineEl = document.getElementById('estTimeline');
    const breakdownEl = document.getElementById('estBreakdown');
    const estCta = document.getElementById('estCta');
    if (!catGroup || !qtyGroup) return;

    const baseDays = {
      'Knitwear': { sample: 10, production: 35 },
      'Woven Garments': { sample: 14, production: 42 },
      'Denim': { sample: 16, production: 45 },
      'Home Textiles': { sample: 12, production: 38 },
      'Accessories': { sample: 7, production: 25 },
      'Footwear': { sample: 14, production: 40 },
      'Leather Goods': { sample: 12, production: 35 },
    };

    function activeVal(group){
      return group.querySelector('.est-chip.active');
    }

    function update(){
      const cat = activeVal(catGroup).dataset.cat;
      const mult = parseFloat(activeVal(qtyGroup).dataset.mult);
      const b = baseDays[cat];
      const sampleDays = b.sample;
      const prodDays = Math.round(b.production * mult);
      const totalLow = sampleDays + prodDays;
      const totalHigh = totalLow + 7;
      const weeksLow = Math.round(totalLow / 7);
      const weeksHigh = Math.round(totalHigh / 7);
      const sampleWeeks = (sampleDays / 7).toFixed(1).replace('.0', '');
      const prodWeeksLow = Math.round(prodDays / 7);
      const prodWeeksHigh = Math.round((prodDays + 7) / 7);

      timelineEl.classList.add('swap');
      breakdownEl.style.opacity = 0;
      setTimeout(() => {
        timelineEl.textContent = `${weeksLow}–${weeksHigh} weeks`;
        breakdownEl.textContent = `Sample development ~${sampleWeeks} weeks · Production & QC ~${prodWeeksLow}–${prodWeeksHigh} weeks`;
        timelineEl.classList.remove('swap');
        breakdownEl.style.opacity = 1;
      }, 180);

      if (estCta) estCta.textContent = `Get an exact quote for ${cat} →`;
    }

    [catGroup, qtyGroup].forEach(group => {
      group.addEventListener('click', (e) => {
        const chip = e.target.closest('.est-chip');
        if (!chip) return;
        group.querySelectorAll('.est-chip').forEach(c => c.classList.remove('active'));
        chip.classList.add('active');
        update();
      });
    });

    estCta?.addEventListener('click', () => {
      const cat = activeVal(catGroup).dataset.cat;
      const catSelect = document.getElementById('category');
      if (catSelect) {
        [...catSelect.options].forEach(o => { if (o.value === cat) catSelect.value = cat; });
      }
    });

    update();
  })();

  // ===== Journey row (hover-driven stage panel) =====
  (function journeyRow(){
    const icons = document.querySelectorAll('.journey-icon');
    const panel = document.querySelector('.journey-panel');
    const titleEl = document.getElementById('journeyTitle');
    const descEl = document.getElementById('journeyDesc');
    const indexEl = document.getElementById('journeyIndex');
    const row = document.getElementById('journeyRow');
    if (!icons.length || !panel) return;

    const stages = [
      { title: 'Buyer Inquiry', desc: 'You share your product brief, quantities and target timeline.' },
      { title: 'Supplier Sourcing', desc: 'We shortlist vetted factories matched to your product and volume.' },
      { title: 'Quotation', desc: 'You receive itemized, negotiated pricing and lead times.' },
      { title: 'Sample Development', desc: 'Proto and fit samples are developed until approved.' },
      { title: 'Production', desc: 'Bulk production begins under scheduled monitoring visits.' },
      { title: 'Quality Control', desc: 'In-line and final inspection against your AQL standard.' },
      { title: 'Shipment', desc: 'Goods are packed, documented and cleared for export.' },
    ];

    let current = 0;
    let paused = false;

    function setStage(i, animate){
      current = i;
      icons.forEach(ic => ic.classList.remove('active'));
      icons[i].classList.add('active');
      const apply = () => {
        titleEl.textContent = stages[i].title;
        descEl.textContent = stages[i].desc;
        indexEl.textContent = String(i+1).padStart(2,'0') + ' / 07';
        panel.classList.remove('swap');
      };
      if (animate && !prefersReducedMotion) {
        panel.classList.add('swap');
        setTimeout(apply, 180);
      } else {
        apply();
      }
    }

    icons.forEach(icon => {
      const idx = parseInt(icon.dataset.idx, 10);
      icon.addEventListener('mouseenter', () => { paused = true; setStage(idx, true); });
      icon.addEventListener('click', () => { paused = true; setStage(idx, true); });
      icon.addEventListener('focus', () => { paused = true; setStage(idx, true); });
    });
    row?.addEventListener('mouseleave', () => { paused = false; });

    if (!prefersReducedMotion) {
      setInterval(() => {
        if (paused) return;
        setStage((current + 1) % stages.length, true);
      }, 2600);
    }
  })();

  // ===== Process auto-cycle highlight =====
  (function processCycle(){
    const steps = document.querySelectorAll('.process-step');
    if (!steps.length || prefersReducedMotion) return;
    let idx = 0;
    setInterval(() => {
      steps.forEach(s => s.classList.remove('active'));
      steps[idx].classList.add('active');
      idx = (idx + 1) % steps.length;
    }, 1300);
  })();

  // ===== Spotlight glow on dark sections =====
  if (hasFinePointer && !prefersReducedMotion) {
    document.querySelectorAll('.section-dark').forEach(sec => {
      sec.addEventListener('mousemove', (e) => {
        const r = sec.getBoundingClientRect();
        sec.style.setProperty('--sx', ((e.clientX - r.left) / r.width * 100) + '%');
        sec.style.setProperty('--sy', ((e.clientY - r.top) / r.height * 100) + '%');
        sec.classList.add('spotlight-on');
      });
      sec.addEventListener('mouseleave', () => sec.classList.remove('spotlight-on'));
    });
  }

  // ===== Milestones carousel arrows =====
  const msTrack = document.getElementById('msTrack');
  const msScrollWrap = msTrack ? msTrack.parentElement : null;
  const msPrev = document.getElementById('msPrev');
  const msNext = document.getElementById('msNext');
  if (msScrollWrap && msPrev && msNext) {
    const scrollAmount = () => (msTrack.querySelector('.ms-card')?.offsetWidth || 280) + 20;
    msPrev.addEventListener('click', () => msScrollWrap.scrollBy({ left: -scrollAmount(), behavior:'smooth' }));
    msNext.addEventListener('click', () => msScrollWrap.scrollBy({ left: scrollAmount(), behavior:'smooth' }));
  }

  // ===== Speed comparison bars =====
  const speedBars = document.querySelectorAll('.speed-bar');
  if (speedBars.length) {
    if ('IntersectionObserver' in window) {
      const speedIO = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            const bar = entry.target;
            bar.style.setProperty('--target', bar.getAttribute('data-target') + '%');
            requestAnimationFrame(() => bar.classList.add('filled'));
            speedIO.unobserve(bar);
          }
        });
      }, { threshold: 0.4 });
      speedBars.forEach(b => speedIO.observe(b));
    } else {
      speedBars.forEach(b => { b.style.width = b.getAttribute('data-target') + '%'; });
    }
  }

  // ===== Hero thread/network canvas =====
  (function heroCanvas(){
    const canvas = document.getElementById('heroCanvas');
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let w, h, points;
    const COLORS = ['rgba(198,42,38,0.55)', 'rgba(22,122,69,0.55)', 'rgba(26,26,24,0.28)'];
    function resize(){
      w = canvas.width = canvas.offsetWidth * devicePixelRatio;
      h = canvas.height = canvas.offsetHeight * devicePixelRatio;
    }
    function init(){
      resize();
      const count = Math.max(18, Math.min(46, Math.floor((canvas.offsetWidth * canvas.offsetHeight) / 34000)));
      points = Array.from({ length: count }, () => ({
        x: Math.random()*w, y: Math.random()*h,
        vx: (Math.random()-0.5)*0.25*devicePixelRatio, vy: (Math.random()-0.5)*0.25*devicePixelRatio,
        c: COLORS[Math.floor(Math.random()*COLORS.length)]
      }));
    }
    function step(){
      ctx.clearRect(0,0,w,h);
      const maxDist = 150 * devicePixelRatio;
      for (let i=0;i<points.length;i++){
        const p = points[i];
        p.x += p.vx; p.y += p.vy;
        if (p.x < 0 || p.x > w) p.vx *= -1;
        if (p.y < 0 || p.y > h) p.vy *= -1;
      }
      for (let i=0;i<points.length;i++){
        for (let j=i+1;j<points.length;j++){
          const a = points[i], b = points[j];
          const dx = a.x-b.x, dy = a.y-b.y;
          const dist = Math.sqrt(dx*dx+dy*dy);
          if (dist < maxDist) {
            ctx.strokeStyle = a.c;
            ctx.globalAlpha = 1 - dist/maxDist;
            ctx.lineWidth = 1;
            ctx.beginPath();
            ctx.moveTo(a.x, a.y); ctx.lineTo(b.x, b.y);
            ctx.stroke();
          }
        }
      }
      ctx.globalAlpha = 1;
      points.forEach(p => {
        ctx.fillStyle = p.c;
        ctx.beginPath();
        ctx.arc(p.x, p.y, 1.8*devicePixelRatio, 0, Math.PI*2);
        ctx.fill();
      });
      if (!prefersReducedMotion) requestAnimationFrame(step);
    }
    init();
    window.addEventListener('resize', init);
    step();
  })();

  // ===== FAQ accordion =====
  document.querySelectorAll('.faq-item').forEach(item => {
    item.querySelector('.faq-q').addEventListener('click', () => {
      const wasOpen = item.classList.contains('open');
      document.querySelectorAll('.faq-item.open').forEach(i => i.classList.remove('open'));
      if (!wasOpen) item.classList.add('open');
    });
  });

  // Mobile menu
  const burger = document.getElementById('burgerBtn');
  const closeBtn = document.getElementById('closeBtn');
  const mobileMenu = document.getElementById('mobileMenu');
  burger.addEventListener('click', () => mobileMenu.classList.add('open'));
  closeBtn.addEventListener('click', () => mobileMenu.classList.remove('open'));
  mobileMenu.querySelectorAll('a').forEach(a => a.addEventListener('click', () => mobileMenu.classList.remove('open')));

  // Reveal on scroll
  const reveals = document.querySelectorAll('.reveal, .reveal-left, .reveal-right, .reveal-scale');
  let io = null;
  if ('IntersectionObserver' in window) {
    io = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('in');
          io.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12 });
    reveals.forEach(el => io.observe(el));
  } else {
    reveals.forEach(el => el.classList.add('in'));
  }

  // Product category cards (built via JS to keep gradient "photography" consistent)
  const categories = [
    { name: 'Knitwear', tag: 'T-Shirts · Polos · Fleece', detail: 'High-volume composite units, single & double jersey.', c1: '#123d2f', c2: '#2c6b4e' },
    { name: 'Woven Garments', tag: 'Shirts · Trousers · Dresses', detail: 'Mid-to-large capacity, complex construction ready.', c1: '#2a3d33', c2: '#5a7263' },
    { name: 'Denim', tag: 'Jeans · Jackets · Skirts', detail: 'Washing, distressing & finishing in-country.', c1: '#1c2e42', c2: '#3d5a78' },
    { name: 'Home Textiles', tag: 'Bedding · Towels · Curtains', detail: 'Bulk yardage to finished, packed home goods.', c1: '#4a2f28', c2: '#8a5a44' },
    { name: 'Accessories', tag: 'Bags · Belts · Caps', detail: 'Small-batch friendly, fast sample turnaround.', c1: '#3a2a44', c2: '#6b4d7a' },
    { name: 'Footwear', tag: 'Canvas · Casual · Sandals', detail: 'Canvas & fabric-upper production lines.', c1: '#3d3220', c2: '#7a6438' },
    { name: 'Leather Goods', tag: 'Wallets · Gloves · Small Goods', detail: 'Genuine & synthetic leather, hand-finished.', c1: '#402420', c2: '#7a4438' },
  ];
  const catGrid = document.getElementById('catGrid');
  categories.forEach((cat, i) => {
    const card = document.createElement('div');
    card.className = 'cat-card tilt-card reveal';
    card.innerHTML = `
      <div class="cat-bg" style="background:
        repeating-linear-gradient(${45 + i*7}deg, ${cat.c1} 0 10px, ${cat.c2} 10px 20px);"></div>
      <div>
        <h3>${cat.name}</h3>
        <span class="cat-tag">${cat.tag}</span>
        <span class="cat-detail">${cat.detail}</span>
      </div>`;
    catGrid.appendChild(card);
  });
  // newly injected cards need the reveal observer applied
  if ('IntersectionObserver' in window) {
    document.querySelectorAll('.cat-card.reveal').forEach(el => io.observe(el));
  } else {
    document.querySelectorAll('.cat-card.reveal').forEach(el => el.classList.add('in'));
  }

  // File field label update
  const fileInput = document.getElementById('techpack');
  const fileLabel = document.getElementById('fileLabel');
  fileInput.addEventListener('change', () => {
    fileLabel.textContent = fileInput.files.length ? fileInput.files[0].name : 'Click to attach a file (PDF, image, or doc)';
  });

  // Form submission (AJAX to Formspree so the page doesn't reload)
  const form = document.getElementById('quoteForm');
  const status = document.getElementById('formStatus');
  form.addEventListener('submit', async (e) => {
    e.preventDefault();
    const data = new FormData(form);
    status.className = 'form-status show';
    status.style.color = '#2c6b4e';
    status.textContent = 'Sending your inquiry…';
    try {
      const res = await fetch(form.action, { method: 'POST', body: data, headers: { 'Accept': 'application/json' } });
      if (res.ok) {
        status.style.color = '#2c6b4e';
        status.textContent = 'Thank you — your inquiry has been received. We will reply within one business day.';
        fireConfetti(form.querySelector('button[type="submit"]'));
        form.reset();
        fileLabel.textContent = 'Click to attach a file (PDF, image, or doc)';
      } else {
        status.style.color = '#a63a2e';
        status.textContent = 'Something went wrong. Please email us directly at info@fashionwizardltd.com.';
      }
    } catch (err) {
      status.style.color = '#a63a2e';
      status.textContent = 'Something went wrong. Please email us directly at info@fashionwizardltd.com.';
    }
  });