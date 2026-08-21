:root{
    --ink:#1a1a18;
    --ink-soft:#54574f;
    --green:#167a45;
    --green-deep:#0f5c33;
    --red:#c22a26;
    --red-deep:#a11f1c;
    --line: rgba(26,26,24,0.12);
    --line-soft: rgba(26,26,24,0.08);
    --paper:#fbfaf7;
    --paper-2:#f2f0ea;
    --stone:#efedE6;
    --dark:#141412;
    --dark-2:#1e1d1a;
    --white:#ffffff;
    --shadow: 0 20px 50px -25px rgba(20,20,18,0.18);
    --serif: 'Fraunces', serif;
    --sans: 'Inter', sans-serif;
    --mono: 'IBM Plex Mono', monospace;
  }
  :root{
    /* legacy aliases so component rules below stay in sync with the new palette */
    --forest: var(--green);
    --forest-deep: var(--dark);
    --forest-line: rgba(255,255,255,0.12);
    --brick: var(--red);
    --brick-soft: var(--red-deep);
    --gold: var(--green);
  }
  *{box-sizing:border-box;}
  html{scroll-behavior:smooth;}
  @media (prefers-reduced-motion: reduce){
    html{scroll-behavior:auto;}
    *{animation-duration:0.01ms !important; animation-iteration-count:1 !important; transition-duration:0.01ms !important;}
  }
  body{
    margin:0;
    font-family:var(--sans);
    color:var(--ink);
    background:var(--paper);
    line-height:1.6;
    -webkit-font-smoothing:antialiased;
  }
  body.has-cursor, body.has-cursor a, body.has-cursor button{ cursor:none; }

  /* ===== Scroll progress ===== */
  .scroll-progress{
    position:fixed; top:0; left:0; height:2px; width:0%;
    background:linear-gradient(90deg, var(--red), var(--green));
    z-index:300; transition:width .08s linear;
  }

  /* ===== Custom cursor ===== */
  .cursor-dot, .cursor-ring{
    position:fixed; top:0; left:0; pointer-events:none; z-index:299;
    transform:translate(-50%,-50%); border-radius:50%;
  }
  .cursor-dot{ width:6px; height:6px; background:var(--red); transition:background .2s ease, transform .12s ease; }
  .cursor-ring{
    width:34px; height:34px; border:1px solid rgba(26,26,24,0.35);
    transition:width .2s ease, height .2s ease, border-color .2s ease, transform .05s linear, opacity .2s ease;
  }
  .cursor-ring.hovering{ width:56px; height:56px; border-color:var(--green); }
  @media (max-width:900px){ .cursor-dot, .cursor-ring{ display:none; } }

  /* ===== Spotlight glow on dark sections ===== */
  .section-dark{ position:relative; overflow:hidden; }
  .section-dark::before{
    content:""; position:absolute; inset:0; z-index:0; pointer-events:none;
    background:radial-gradient(420px circle at var(--sx,50%) var(--sy,20%), rgba(255,255,255,0.06), transparent 60%);
    opacity:0; transition:opacity .4s ease;
  }
  .section-dark.spotlight-on::before{ opacity:1; }
  .section-dark > *{ position:relative; z-index:1; }
  img{max-width:100%; display:block;}
  a{color:inherit;}
  .wrap{max-width:1180px; margin:0 auto; padding:0 32px;}
  @media (max-width:640px){ .wrap{padding:0 20px;} }

  .eyebrow{
    font-family:var(--mono);
    font-size:12px;
    letter-spacing:0.14em;
    text-transform:uppercase;
    color:var(--brick);
    display:flex;
    align-items:center;
    gap:10px;
    margin-bottom:18px;
  }
  .eyebrow::before{
    content:"";
    width:22px;
    height:1px;
    background:var(--brick);
    display:inline-block;
  }
  h1,h2,h3{
    font-family:var(--serif);
    font-weight:600;
    line-height:1.08;
    margin:0;
    color:var(--forest-deep);
  }
  .light-text h1, .light-text h2, .light-text h3, .light-text p{ color:var(--white); }
  .light-text .btn-ghost{ color:var(--white); border-color:rgba(255,255,255,0.35); }
  .light-text .btn-ghost:hover{ border-color:var(--white); background:rgba(255,255,255,0.08); }
  p{margin:0;}
  .btn{
    display:inline-flex;
    align-items:center;
    gap:10px;
    font-family:var(--sans);
    font-weight:600;
    font-size:14.5px;
    padding:15px 26px;
    border-radius:2px;
    text-decoration:none;
    cursor:pointer;
    border:1px solid transparent;
    transition:transform .25s ease, background .25s ease, color .25s ease, border-color .25s ease;
  }
  .btn:hover{ transform:translateY(-2px); }
  .btn-primary{ background:var(--brick); color:var(--white); }
  .btn-primary:hover{ background:var(--brick-soft); }
  .btn-ghost{ background:transparent; color:var(--white); border-color:rgba(255,253,248,0.4); }
  .btn-ghost:hover{ border-color:var(--white); background:rgba(255,253,248,0.08); }
  .btn-dark{ background:var(--forest-deep); color:var(--white); }
  .btn-dark:hover{ background:var(--forest); }

  /* ===== Header ===== */
  header{
    position:fixed; top:0; left:0; right:0; z-index:100;
    background:rgba(255,255,255,0.92);
    backdrop-filter: blur(10px);
    border-bottom:1px solid var(--line);
  }
  .nav{
    display:flex; align-items:center; justify-content:space-between;
    padding:16px 32px;
    max-width:1180px; margin:0 auto;
  }
  .brand{ display:flex; align-items:center; gap:12px; text-decoration:none; }
  .brand-mark{
    width:42px; height:42px; flex-shrink:0;
    display:flex; align-items:center; justify-content:center;
    background:var(--white);
  }
  .brand-mark img{ width:100%; height:100%; object-fit:contain; }
  .brand-word{ font-family:var(--serif); font-weight:600; font-size:17px; letter-spacing:0.01em; color:var(--forest-deep); }
  .brand-word em{ font-style:italic; color:var(--brick); font-weight:500;}
  .brand-sub{ display:block; font-family:var(--mono); font-size:9.5px; letter-spacing:0.16em; color:var(--forest); margin-top:1px;}
  nav.links{ display:flex; align-items:center; gap:30px; }
  nav.links a{
    font-size:13.5px; font-weight:500; text-decoration:none; color:var(--ink);
    position:relative; padding:4px 0;
  }
  nav.links a::after{
    content:""; position:absolute; left:0; bottom:0; width:0; height:1px; background:var(--brick);
    transition:width .25s ease;
  }
  nav.links a:hover::after{ width:100%; }
  .nav-cta{ display:flex; align-items:center; gap:18px; }
  .nav-cta .btn{ padding:11px 20px; font-size:13px; }
  .burger{ display:none; background:none; border:none; cursor:pointer; padding:6px; }
  .burger span{ display:block; width:22px; height:2px; background:var(--forest-deep); margin:5px 0; }

  @media (max-width:900px){
    nav.links{ display:none; }
    .burger{ display:block; }
  }

  /* ===== Hero ===== */
  .hero{
    background: var(--white);
    color:var(--ink);
    padding:170px 0 80px;
    position:relative;
    overflow:hidden;
    border-bottom:1px solid var(--line);
  }
  .hero::after{
    content:"";
    position:absolute; inset:0;
    background-image: repeating-linear-gradient(115deg, rgba(20,20,18,0.02) 0px, rgba(20,20,18,0.02) 1px, transparent 1px, transparent 34px);
    pointer-events:none;
  }
  .hero-grid{
    display:grid; grid-template-columns: 1.15fr 0.85fr; gap:60px; align-items:end;
    position:relative; z-index:1;
  }
  .hero h1{
    font-size:clamp(34px, 4.6vw, 58px);
    color:var(--ink);
    max-width:14ch;
    letter-spacing:-0.01em;
  }
  .hero-eyebrow{ color:var(--red); }
  .hero-eyebrow::before{ background:var(--red); }
  .hero-sub{
    font-size:16.5px; color:var(--ink-soft); max-width:46ch; margin-top:22px; font-weight:400;
  }
  .hero-ctas{ display:flex; gap:14px; margin-top:36px; flex-wrap:wrap; }
  .btn-ghost{ background:transparent; color:var(--ink); border-color:rgba(26,26,24,0.28); }
  .btn-ghost:hover{ border-color:var(--ink); background:rgba(26,26,24,0.04); }
  .hero-panel{
    border:1px solid var(--line);
    padding:26px;
    background:var(--paper);
    font-family:var(--mono);
  }
  .hero-panel-title{ font-size:11px; letter-spacing:0.14em; text-transform:uppercase; color:var(--green); margin-bottom:16px; }
  .hero-line{
    display:flex; justify-content:space-between; align-items:baseline;
    padding:11px 0; border-top:1px solid var(--line); font-size:13px; color:var(--ink-soft);
  }
  .hero-line:first-of-type{ border-top:none; }
  .hero-line b{ font-family:var(--sans); font-weight:600; color:var(--ink); }

  /* ===== Marquee ticker ===== */
  .marquee-band{
    background:var(--dark); overflow:hidden; white-space:nowrap;
    border-top:1px solid rgba(255,255,255,0.08); border-bottom:1px solid rgba(255,255,255,0.08);
    padding:14px 0;
  }
  .marquee-track{
    display:inline-flex; align-items:center; gap:28px;
    animation: marquee-scroll 26s linear infinite;
  }
  .marquee-band:hover .marquee-track{ animation-play-state:paused; }
  .marquee-track span{
    font-family:var(--mono); font-size:12.5px; letter-spacing:0.1em; text-transform:uppercase;
    color:rgba(255,255,255,0.82); display:inline-flex; align-items:center; gap:28px;
  }
  .marquee-track span.dot{ color:var(--red); font-size:10px; }
  .marquee-track span.dot.g{ color:var(--green); }
  @keyframes marquee-scroll{ from{ transform:translateX(0); } to{ transform:translateX(-50%); } }
  @media (prefers-reduced-motion: reduce){ .marquee-track{ animation:none; } }

  /* ===== Hero kinetic entrance ===== */
  @keyframes heroUp{ from{ opacity:0; transform:translateY(22px); } to{ opacity:1; transform:translateY(0); } }
  .hero-eyebrow, .hero h1, .hero-sub, .hero-ctas, .hero-panel{
    animation: heroUp .8s cubic-bezier(.2,.7,.2,1) both;
  }
  .hero-eyebrow{ animation-delay:.05s; }
  .hero h1{ animation-delay:.15s; }
  .hero-sub{ animation-delay:.32s; }
  .hero-ctas{ animation-delay:.46s; }
  .hero-panel{ animation-delay:.58s; animation-duration:1s; }
  @media (prefers-reduced-motion: reduce){
    .hero-eyebrow, .hero h1, .hero-sub, .hero-ctas, .hero-panel{ animation:none; }
  }
  .hero-panel{ animation-name: heroUp, panelFloat; animation-duration:1s, 5s; animation-delay:.58s, 1.4s; animation-iteration-count:1, infinite; animation-timing-function: cubic-bezier(.2,.7,.2,1), ease-in-out; }
  @keyframes panelFloat{ 0%,100%{ transform:translateY(0); } 50%{ transform:translateY(-8px); } }

  /* Button shimmer sweep */
  .btn{ position:relative; overflow:hidden; }
  .btn::before{
    content:""; position:absolute; top:0; left:-60%; width:40%; height:100%;
    background:linear-gradient(115deg, transparent, rgba(255,255,255,0.35), transparent);
    transform:skewX(-20deg); transition:left .55s ease;
  }
  .btn:hover::before{ left:120%; }

  /* Scroll cue */
  .scroll-cue{
    position:absolute; bottom:22px; left:50%; transform:translateX(-50%);
    display:flex; flex-direction:column; align-items:center; gap:6px;
    font-family:var(--mono); font-size:10px; letter-spacing:0.14em; color:var(--ink-soft);
    text-transform:uppercase; z-index:1; transition:opacity .4s ease;
  }
  .scroll-cue svg{ animation:cueBounce 1.8s ease-in-out infinite; }
  @keyframes cueBounce{ 0%,100%{ transform:translateY(0); } 50%{ transform:translateY(6px); } }

  /* Logo wiggle */
  .brand-mark{ transition:transform .4s ease; }
  .brand:hover .brand-mark{ animation:wiggle .5s ease; }
  @keyframes wiggle{ 0%,100%{ transform:rotate(0deg); } 25%{ transform:rotate(-8deg); } 75%{ transform:rotate(8deg); } }

  /* Traveling pulse along process thread */
  .thread-pulse{
    position:absolute; top:31px; left:0; width:14px; height:14px; border-radius:50%;
    background:radial-gradient(circle, rgba(198,42,38,0.9), rgba(198,42,38,0));
    animation: pulseTravel 4.5s linear infinite; z-index:0;
  }
  @keyframes pulseTravel{ 0%{ left:0%; opacity:0; } 8%{ opacity:1; } 92%{ opacity:1; } 100%{ left:100%; opacity:0; } }
  @media (max-width:900px){
    .thread-pulse{ top:0; left:7px; width:12px; height:12px; animation-name:pulseTravelV; }
    @keyframes pulseTravelV{ 0%{ top:0%; opacity:0; } 8%{ opacity:1; } 92%{ opacity:1; } 100%{ top:100%; opacity:0; } }
  }
  @media (prefers-reduced-motion: reduce){ .thread-pulse{ display:none; } }

  /* Reveal direction variants */
  .reveal-left{ opacity:0; transform:translateX(-32px); transition:opacity .7s ease, transform .7s ease; }
  .reveal-left.in{ opacity:1; transform:translateX(0); }
  .reveal-right{ opacity:0; transform:translateX(32px); transition:opacity .7s ease, transform .7s ease; }
  .reveal-right.in{ opacity:1; transform:translateX(0); }
  .reveal-scale{ opacity:0; transform:scale(0.9); transition:opacity .6s ease, transform .6s ease; }
  .reveal-scale.in{ opacity:1; transform:scale(1); }

  /* Confetti */
  .confetti-piece{ position:fixed; top:0; left:0; width:8px; height:8px; z-index:400; pointer-events:none; border-radius:2px; }

  .stats-strip{ background:var(--paper-2); border-top:1px solid var(--line); border-bottom:1px solid var(--line); }
  .stats-grid{
    display:grid; grid-template-columns:repeat(3,1fr);
    padding:34px 0;
  }
  .stat{ padding:0 26px; border-left:1px solid var(--line); }
  .stat:first-child{ border-left:none; padding-left:0; }
  .stat-num{ font-family:var(--serif); font-size:26px; color:var(--ink); font-weight:600; }
  .stat-num.accent{ color:var(--green); }
  .stat-label{ font-family:var(--mono); font-size:11px; color:var(--ink-soft); margin-top:6px; letter-spacing:0.02em; }
  @media (max-width:900px){
    .hero-grid{ grid-template-columns:1fr; }
    .stats-grid{ grid-template-columns:repeat(2,1fr); row-gap:24px; }
    .stat{ border-left:none; padding:0 0 0 18px; border-left:1px solid var(--line); }
  }

  /* ===== Section shells ===== */
  section{ padding:110px 0; }
  @media (max-width:640px){ section{ padding:70px 0; } }
  .section-alt{ background:var(--stone); }
  .section-dark{ background:var(--forest-deep); }
  .head-row{
    display:grid; grid-template-columns:0.55fr 0.45fr; gap:50px; align-items:end;
    margin-bottom:56px;
  }
  .head-row h2{ font-size:clamp(28px,3.2vw,40px); }
  .head-row p{ font-size:15.5px; color:#3c463f; max-width:44ch; }
  @media (max-width:800px){ .head-row{ grid-template-columns:1fr; gap:16px; } }

  /* ===== Milestones carousel ===== */
  .carousel-nav{ display:flex; gap:10px; align-self:end; justify-self:end; margin-bottom:4px; }
  .carousel-arrow{
    width:42px; height:42px; border:1px solid var(--line); background:var(--white);
    font-size:20px; color:var(--ink); cursor:pointer; transition:background .2s ease, border-color .2s ease, color .2s ease;
    display:flex; align-items:center; justify-content:center;
  }
  .carousel-arrow:hover{ background:var(--ink); color:var(--white); border-color:var(--ink); }
  .ms-track-wrap{ overflow-x:auto; scrollbar-width:none; -ms-overflow-style:none; }
  .ms-track-wrap::-webkit-scrollbar{ display:none; }
  .ms-track{ display:flex; gap:20px; padding-bottom:6px; scroll-behavior:smooth; scroll-snap-type:x mandatory; }
  .ms-card{
    flex:0 0 clamp(240px, 26vw, 300px); scroll-snap-align:start;
    border:1px solid var(--line); background:var(--white); padding:28px 24px;
    transition:transform .3s ease, box-shadow .3s ease;
  }
  .ms-card:hover{ transform:translateY(-4px); box-shadow:var(--shadow); }
  .ms-year{ font-family:var(--mono); font-size:11px; letter-spacing:0.1em; color:var(--red); text-transform:uppercase; }
  .ms-card h3{ font-size:17px; margin-top:14px; color:var(--forest-deep); }
  .ms-card p{ font-size:13px; color:var(--ink-soft); margin-top:10px; }
  @media (max-width:800px){ .carousel-nav{ display:none; } }

  .reveal{ opacity:0; transform:translateY(24px); transition:opacity .7s ease, transform .7s ease; }
  .reveal.in{ opacity:1; transform:translateY(0); }

  /* ===== Interactive micro-motion ===== */
  .tilt-card{ transform-style:preserve-3d; will-change:transform; transition:transform .15s ease, box-shadow .25s ease; }
  .tilt-card:hover{ box-shadow:var(--shadow); }
  .magnetic{ will-change:transform; }
  .service-card, .cat-card, .quality-card, .why-card, .cap-row{ cursor:pointer; }

  /* ===== About ===== */
  .about-grid{ display:grid; grid-template-columns:0.9fr 1.1fr; gap:70px; align-items:start; }
  .about-copy p{ font-size:15.5px; color:#33403a; margin-bottom:18px; }
  .about-copy p:last-child{ margin-bottom:0; }
  .principles{ list-style:none; padding:0; margin:28px 0 0; display:grid; gap:14px; }
  .principles li{
    display:flex; gap:14px; align-items:baseline; font-size:14.5px; font-weight:500; color:var(--forest-deep);
  }
  .principles li::before{ content:"—"; color:var(--brick); font-weight:700; }
  .about-card{
    background:var(--forest-deep); color:var(--white); padding:38px 34px;
    border:1px solid var(--forest-line);
  }
  .about-card-title{ font-family:var(--mono); font-size:11px; letter-spacing:0.14em; text-transform:uppercase; color:var(--gold); margin-bottom:22px; }
  .fact{ display:flex; justify-content:space-between; padding:13px 0; border-top:1px solid var(--forest-line); font-size:13.5px; }
  .fact:first-of-type{ border-top:none; }
  .fact span:first-child{ color:rgba(255,253,248,0.6); }
  .fact span:last-child{ font-family:var(--mono); color:var(--white); text-align:right; }
  @media (max-width:800px){ .about-grid{ grid-template-columns:1fr; } }

  /* ===== Services ===== */
  .service-grid{ display:grid; grid-template-columns:repeat(4,1fr); gap:1px; background:var(--paper-2); border:1px solid var(--paper-2); }
  .service-card{
    background:var(--paper); padding:34px 26px; min-height:210px;
    display:flex; flex-direction:column; justify-content:space-between;
    transition:background .3s ease;
  }
  .service-card:hover{ background:var(--white); }
  .service-num{ font-family:var(--mono); font-size:12px; color:var(--brick); }
  .service-card h3{ font-size:18px; margin-top:24px; color:var(--forest-deep); }
  .service-card p{ font-size:13.5px; color:#4a544e; margin-top:10px; }
  @media (max-width:900px){ .service-grid{ grid-template-columns:repeat(2,1fr); } }
  @media (max-width:560px){ .service-grid{ grid-template-columns:1fr; } }

  /* ===== Categories ===== */
  .cat-grid{ display:grid; grid-template-columns:repeat(4,1fr); gap:18px; }
  .cat-card{
    position:relative; aspect-ratio:3/3.6; overflow:hidden;
    border:1px solid rgba(15,61,46,0.14);
    display:flex; align-items:flex-end; padding:22px;
    transition:transform .3s ease, box-shadow .3s ease;
  }
  .cat-card:hover{ box-shadow:var(--shadow); }
  .cat-card h3{ color:var(--white); font-size:19px; position:relative; z-index:2; transition:transform .3s ease; }
  .cat-card .cat-tag{ position:relative; z-index:2; font-family:var(--mono); font-size:10.5px; color:rgba(255,253,248,0.75); letter-spacing:0.08em; text-transform:uppercase; margin-top:6px; display:block; }
  .cat-card .cat-detail{
    position:relative; z-index:2; font-size:12px; color:rgba(255,253,248,0.9);
    max-height:0; opacity:0; overflow:hidden; transition:max-height .35s ease, opacity .3s ease, margin-top .3s ease;
  }
  .cat-card:hover .cat-detail{ max-height:60px; opacity:1; margin-top:8px; }
  .cat-bg{ position:absolute; inset:0; z-index:1; opacity:0.94; transition:transform .5s ease; }
  .cat-card:hover .cat-bg{ transform:scale(1.08); }
  .cat-card::after{ content:""; position:absolute; inset:0; z-index:1; background:linear-gradient(180deg, rgba(10,42,32,0.05), rgba(10,42,32,0.82)); }
  @media (max-width:900px){ .cat-grid{ grid-template-columns:repeat(2,1fr); } }
  @media (max-width:560px){ .cat-grid{ grid-template-columns:1fr; } }

  /* ===== Process (signature thread element) ===== */
  .process-wrap{ position:relative; padding-top:20px; }

  /* ===== Journey row (hover-driven stage panel) ===== */
  .journey-row{
    display:grid; grid-template-columns:0.9fr 1.1fr; gap:0;
    border:1px solid var(--line); background:var(--white); margin-bottom:56px;
  }
  .journey-icons{ display:flex; flex-direction:column; border-right:1px solid var(--line); }
  .journey-icon{
    display:flex; align-items:center; gap:14px; padding:16px 22px;
    background:none; border:none; border-bottom:1px solid var(--line); cursor:pointer; text-align:left;
    color:var(--ink-soft); transition:background .2s ease, color .2s ease;
  }
  .journey-icon:last-child{ border-bottom:none; }
  .journey-icon svg{ flex-shrink:0; transition:transform .3s ease; }
  .journey-icon span{ font-size:14px; font-weight:600; font-family:var(--sans); }
  .journey-icon:hover{ background:var(--paper); color:var(--forest-deep); }
  .journey-icon.active{ background:var(--ink); color:var(--white); }
  .journey-icon.active svg{ transform:scale(1.1); color:var(--red); }
  .journey-panel{ padding:44px; display:flex; flex-direction:column; justify-content:center; }
  .journey-index{ font-family:var(--mono); font-size:11px; letter-spacing:0.1em; color:var(--red); text-transform:uppercase; margin-bottom:14px; }
  .journey-panel h3{
    font-size:clamp(24px,2.6vw,32px); color:var(--forest-deep); margin-bottom:14px;
    transition:opacity .2s ease, transform .2s ease;
  }
  .journey-panel p{ font-size:15px; color:var(--ink-soft); max-width:42ch; transition:opacity .2s ease; }
  .journey-panel.swap h3, .journey-panel.swap p{ opacity:0; }
  @media (max-width:800px){
    .journey-row{ grid-template-columns:1fr; }
    .journey-icons{ flex-direction:row; overflow-x:auto; border-right:none; border-bottom:1px solid var(--line); }
    .journey-icon{ flex-direction:column; gap:6px; flex:0 0 auto; border-bottom:none; border-right:1px solid var(--line); }
    .journey-panel{ padding:30px; }
  }
  .thread-line{
    position:absolute; top:37px; left:0; right:0; height:2px;
    background-image: repeating-linear-gradient(90deg, var(--brick) 0 10px, transparent 10px 18px);
    z-index:0;
  }
  .process-track{
    display:grid; grid-template-columns:repeat(7,1fr); gap:14px; position:relative; z-index:1;
  }
  .process-step{ text-align:left; }
  .process-dot{
    width:10px; height:10px; border-radius:50%; background:var(--brick);
    margin-bottom:22px; position:relative;
  }
  .process-step h3{ font-size:15.5px; color:var(--forest-deep); transition:color .3s ease; }
  .process-step p{ font-size:12.5px; color:#4a544e; margin-top:8px; }
  .process-step.active h3{ color:var(--red); }
  .process-step.active .process-dot{ transform:scale(1.4); box-shadow:0 0 0 5px rgba(198,42,38,0.14); }
  .process-dot{ transition:transform .3s ease, box-shadow .3s ease; }
  @media (max-width:900px){
    .process-track{ grid-template-columns:1fr; gap:30px; }
    .thread-line{ top:0; bottom:0; left:7px; right:auto; width:2px; height:auto;
      background-image: repeating-linear-gradient(180deg, var(--brick) 0 10px, transparent 10px 18px); }
    .process-step{ padding-left:34px; }
    .process-dot{ position:absolute; margin-left:-34px; }
  }

  /* ===== Quality ===== */
  .quality-grid{ display:grid; grid-template-columns:repeat(4,1fr); gap:30px; }
  .quality-card{ border-top:2px solid var(--brick); padding-top:20px; }
  .quality-card h3{ font-size:16.5px; color:var(--white); }
  .quality-card p{ font-size:13.5px; color:rgba(255,253,248,0.68); margin-top:10px; }
  @media (max-width:900px){ .quality-grid{ grid-template-columns:repeat(2,1fr); row-gap:36px; } }
  @media (max-width:560px){ .quality-grid{ grid-template-columns:1fr; } }

  /* ===== Network ===== */
  .network-grid{ display:grid; grid-template-columns:1fr 1fr; gap:60px; align-items:center; }
  .network-copy p{ font-size:15.5px; color:#33403a; margin-bottom:16px; }
  .cert-row{ display:flex; flex-wrap:wrap; gap:10px; margin-top:26px; }
  .cert-pill{
    font-family:var(--mono); font-size:11px; letter-spacing:0.04em; padding:8px 14px;
    border:1px solid rgba(15,61,46,0.3); color:var(--forest-deep);
  }
  .cap-list{ display:grid; gap:0; border:1px solid rgba(15,61,46,0.14); }
  .cap-row{ display:flex; justify-content:space-between; padding:18px 22px; border-top:1px solid rgba(15,61,46,0.14); font-size:13.5px; }
  .cap-row:first-child{ border-top:none; }
  .cap-row span:first-child{ font-weight:600; color:var(--forest-deep); }
  .cap-row span:last-child{ font-family:var(--mono); color:#4a544e; text-align:right; }
  @media (max-width:800px){ .network-grid{ grid-template-columns:1fr; gap:36px; } }

  /* ===== Why choose ===== */
  .why-grid{ display:grid; grid-template-columns:repeat(2,1fr); gap:1px; background:rgba(255,253,248,0.14); border:1px solid rgba(255,253,248,0.14); }
  .why-card{ background:var(--forest-deep); padding:28px 30px; display:flex; gap:18px; }
  .why-idx{ font-family:var(--mono); font-size:13px; color:var(--gold); flex-shrink:0; padding-top:2px;}
  .why-card h3{ color:var(--white); font-size:16px; }
  .why-card p{ color:rgba(255,253,248,0.66); font-size:13px; margin-top:6px; }
  @media (max-width:700px){ .why-grid{ grid-template-columns:1fr; } }

  /* ===== Portfolio / confidentiality ===== */
  /* ===== Pillar row (approach / standards / reach) ===== */
  .pillar-grid{ display:grid; grid-template-columns:repeat(3,1fr); gap:1px; background:var(--line); border:1px solid var(--line); }
  .pillar{ background:var(--paper); padding:38px 34px; }
  .pillar-icon{ color:var(--green); margin-bottom:20px; }
  .pillar h3{ font-size:19px; color:var(--forest-deep); margin-bottom:12px; }
  .pillar p{ font-size:13.5px; color:var(--ink-soft); margin-bottom:20px; min-height:80px; }
  .arrow-link{
    display:inline-flex; align-items:center; gap:8px; font-size:13px; font-weight:600;
    color:var(--red); text-decoration:none;
  }
  .arrow-link svg{ transition:transform .25s ease; }
  .arrow-link:hover svg{ transform:translateX(4px); }
  @media (max-width:800px){ .pillar-grid{ grid-template-columns:1fr; } }

  /* ===== Speed comparison ===== */
  .speed-compare{ display:grid; gap:34px; max-width:820px; }
  .speed-row{ display:grid; gap:10px; }
  .speed-label{ display:flex; justify-content:space-between; align-items:baseline; gap:16px; }
  .speed-label span{ font-size:14.5px; font-weight:600; color:var(--forest-deep); }
  .speed-time{ font-family:var(--mono); font-size:13px; color:var(--ink-soft); flex-shrink:0; }
  .speed-time.accent{ color:var(--green); }
  .speed-bar-track{ height:10px; background:var(--paper-2); border:1px solid var(--line); overflow:hidden; }
  .speed-bar{ height:100%; width:0%; transition:width 1.4s cubic-bezier(.2,.8,.2,1); }
  .speed-bar-slow{ background:linear-gradient(90deg, var(--brick), var(--brick-soft)); }
  .speed-bar-fast{ background:linear-gradient(90deg, var(--green-deep), var(--green)); }
  .speed-bar.filled{ width:var(--target); }

  /* ===== Instant estimator ===== */
  .estimator{
    display:grid; grid-template-columns:1.1fr 0.9fr; gap:0;
    border:1px solid var(--line); background:var(--white);
  }
  .estimator-controls{ padding:40px; border-right:1px solid var(--line); }
  .est-field{ margin-bottom:30px; }
  .est-field:last-child{ margin-bottom:0; }
  .est-field label{ display:block; font-family:var(--mono); font-size:11px; letter-spacing:0.1em; text-transform:uppercase; color:var(--ink-soft); margin-bottom:14px; }
  .est-chip-group{ display:flex; flex-wrap:wrap; gap:10px; }
  .est-chip{
    font-family:var(--sans); font-size:13px; font-weight:600; padding:10px 16px;
    border:1px solid var(--line); background:var(--paper); color:var(--ink);
    cursor:pointer; transition:background .2s ease, color .2s ease, border-color .2s ease, transform .15s ease;
  }
  .est-chip:hover{ border-color:var(--green); transform:translateY(-1px); }
  .est-chip.active{ background:var(--ink); color:var(--white); border-color:var(--ink); }
  .estimator-result{
    padding:40px; background:var(--paper); display:flex; flex-direction:column; justify-content:center;
  }
  .est-result-label{ font-family:var(--mono); font-size:11px; letter-spacing:0.1em; text-transform:uppercase; color:var(--red); margin-bottom:10px; }
  .est-result-value{
    font-family:var(--serif); font-size:44px; font-weight:600; color:var(--forest-deep);
    transition:opacity .25s ease, transform .25s ease;
  }
  .est-result-value.swap{ opacity:0; transform:translateY(6px); }
  .est-result-sub{ font-size:13px; color:var(--ink-soft); margin-top:10px; margin-bottom:26px; min-height:36px; }
  @media (max-width:800px){
    .estimator{ grid-template-columns:1fr; }
    .estimator-controls{ border-right:none; border-bottom:1px solid var(--line); }
  }

  .confid-panel{
    display:grid; grid-template-columns:0.4fr 0.6fr; gap:50px; align-items:center;
    border:1px solid rgba(15,61,46,0.16); padding:50px; background:var(--white);
  }
  .confid-panel h2{ font-size:26px; }
  .confid-panel p{ font-size:14.5px; color:#3c463f; margin-top:14px; }
  @media (max-width:800px){ .confid-panel{ grid-template-columns:1fr; padding:32px; } }

  /* ===== Contact ===== */
  .contact-grid{ display:grid; grid-template-columns:0.85fr 1.15fr; gap:60px; }
  .contact-side h2{ font-size:clamp(26px,3vw,36px); color:var(--white); max-width:11ch; }
  .contact-side p{ color:rgba(255,253,248,0.72); font-size:14.5px; margin-top:18px; max-width:38ch; }
  .contact-methods{ margin-top:34px; display:grid; gap:16px; }
  .contact-method{ display:flex; align-items:center; gap:14px; }
  .contact-method .btn{ width:100%; justify-content:center; }
  .form-card{ background:var(--white); padding:38px; border:1px solid rgba(15,61,46,0.1); }
  .form-row{ display:grid; grid-template-columns:1fr 1fr; gap:18px; }
  .field{ margin-bottom:18px; }
  .field.full{ grid-column:1/-1; }
  label{ display:block; font-size:12px; font-weight:600; color:var(--forest-deep); margin-bottom:7px; letter-spacing:0.02em; }
  input, select, textarea{
    width:100%; font-family:var(--sans); font-size:14px; padding:12px 13px;
    border:1px solid rgba(15,61,46,0.22); background:var(--paper); color:var(--ink);
    outline:none; transition:border-color .2s ease, background .2s ease;
  }
  input:focus, select:focus, textarea:focus{ border-color:var(--brick); background:var(--white); }
  textarea{ resize:vertical; min-height:100px; }
  .file-field{
    border:1px dashed rgba(15,61,46,0.3); background:var(--paper); padding:16px; font-size:13px; color:#4a544e; text-align:center;
    cursor:pointer;
  }
  .file-field:hover{ border-color:var(--brick); }
  .submit-row{ display:flex; align-items:center; gap:18px; margin-top:6px; flex-wrap:wrap; }
  .submit-note{ font-size:12px; color:#5b665f; }
  .form-status{ font-size:13px; margin-top:14px; font-weight:600; display:none; }
  .form-status.show{ display:block; }
  @media (max-width:900px){ .contact-grid{ grid-template-columns:1fr; } }
  @media (max-width:560px){ .form-row{ grid-template-columns:1fr; } }

  /* ===== Footer ===== */
  footer{ background:var(--forest-deep); color:rgba(255,253,248,0.7); padding:70px 0 30px; border-top:1px solid var(--forest-line); }
  .foot-grid{ display:grid; grid-template-columns:1.4fr 0.9fr 0.9fr 1.1fr; gap:40px; padding-bottom:50px; border-bottom:1px solid var(--forest-line); }
  .foot-brand .brand-word{ color:var(--white); }
  .foot-brand p{ font-size:13.5px; margin-top:16px; max-width:32ch; color:rgba(255,253,248,0.55); }
  .foot-col h4{ font-family:var(--mono); font-size:11px; letter-spacing:0.12em; text-transform:uppercase; color:var(--gold); margin-bottom:16px; font-weight:500; }
  .foot-col a{ display:flex; align-items:center; gap:8px; font-size:13.5px; text-decoration:none; color:rgba(255,253,248,0.68); margin-bottom:10px; }
  .foot-col a:hover{ color:var(--white); }
  .foot-bullet{ color:var(--red); font-size:10px; }
  .foot-cta-col{ display:flex; flex-direction:column; }
  .foot-cta{
    margin-top:10px; display:inline-flex !important; align-items:center; justify-content:center;
    padding:12px 22px; border:1px solid rgba(255,255,255,0.3); color:var(--white) !important;
    font-weight:600; font-size:13px; transition:background .25s ease, border-color .25s ease; width:fit-content;
  }
  .foot-cta:hover{ background:var(--red); border-color:var(--red); }
  .foot-bottom{ display:flex; justify-content:space-between; align-items:center; padding-top:26px; font-size:12px; color:rgba(255,253,248,0.4); flex-wrap:wrap; gap:10px; }
  @media (max-width:800px){ .foot-grid{ grid-template-columns:1fr 1fr; } }
  @media (max-width:480px){ .foot-grid{ grid-template-columns:1fr; } }

  /* Mobile menu */
  .mobile-menu{
    position:fixed; inset:0; background:var(--forest-deep); z-index:200;
    display:flex; flex-direction:column; padding:26px 28px;
    transform:translateX(100%); transition:transform .35s ease;
  }
  .mobile-menu.open{ transform:translateX(0); }
  .mobile-menu-top{ display:flex; justify-content:space-between; align-items:center; }
  .mobile-menu a{ font-family:var(--serif); font-size:26px; color:var(--white); text-decoration:none; padding:16px 0; border-bottom:1px solid var(--forest-line); }
  .close-btn{ background:none; border:none; color:var(--white); font-size:26px; cursor:pointer; }

  /* ===== Floating WhatsApp ===== */
  .whatsapp-float{
    position:fixed; right:24px; bottom:24px; z-index:150;
    width:56px; height:56px; border-radius:50%;
    background:#25b358;
    display:flex; align-items:center; justify-content:center;
    box-shadow:0 10px 30px -8px rgba(37,179,88,0.6);
    animation:wa-pulse 2.6s ease-in-out infinite;
    transition:transform .2s ease;
  }
  .whatsapp-float:hover{ transform:scale(1.08); }
  @keyframes wa-pulse{
    0%, 100%{ box-shadow:0 10px 30px -8px rgba(37,179,88,0.6), 0 0 0 0 rgba(37,179,88,0.4); }
    50%{ box-shadow:0 10px 30px -8px rgba(37,179,88,0.6), 0 0 0 10px rgba(37,179,88,0); }
  }
  @media (max-width:640px){ .whatsapp-float{ right:16px; bottom:16px; width:50px; height:50px; } }

  /* ===== FAQ ===== */
  .faq-list{ max-width:820px; }
  .faq-item{ border-bottom:1px solid var(--line); }
  .faq-q{
    width:100%; text-align:left; background:none; border:none; cursor:pointer;
    display:flex; justify-content:space-between; align-items:center; gap:20px;
    padding:24px 4px; font-family:var(--serif); font-size:18px; color:var(--ink); font-weight:600;
  }
  .faq-q .faq-plus{
    font-family:var(--mono); font-size:20px; color:var(--red); flex-shrink:0; transition:transform .3s ease;
  }
  .faq-item.open .faq-q .faq-plus{ transform:rotate(45deg); }
  .faq-a{ max-height:0; overflow:hidden; transition:max-height .35s ease, padding .35s ease; }
  .faq-a p{ padding:0 4px 24px; font-size:14.5px; color:var(--ink-soft); max-width:64ch; }
  .faq-item.open .faq-a{ max-height:220px; }
