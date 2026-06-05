
/* Illustrations SVG pour chaque carte — viewBox 130×82 */
const CARD_ART = {

'Pirate Corsaire': `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 130 82">
<defs>
  <radialGradient id="p1a" cx="75%" cy="25%"><stop offset="0%" stop-color="#2a1040"/><stop offset="100%" stop-color="#06090f"/></radialGradient>
  <radialGradient id="p1b" cx="50%" cy="50%"><stop offset="0%" stop-color="#ffe88a" stop-opacity=".9"/><stop offset="100%" stop-color="#c07820" stop-opacity="0"/></radialGradient>
  <filter id="p1f"><feGaussianBlur stdDeviation="1.2" result="b"/><feMerge><feMergeNode in="b"/><feMergeNode in="SourceGraphic"/></feMerge></filter>
</defs>
<rect width="130" height="82" fill="url(#p1a)"/>
<circle cx="95" cy="14" r="22" fill="url(#p1b)"/>
<circle cx="95" cy="14" r="7" fill="#fff5c0"/>
<circle cx="32" cy="8" r=".9" fill="#fff" opacity=".7"/>
<circle cx="18" cy="18" r=".7" fill="#fff" opacity=".5"/>
<circle cx="55" cy="5" r=".8" fill="#fff" opacity=".8"/>
<circle cx="10" cy="30" r=".6" fill="#fff" opacity=".4"/>
<path d="M0 58 Q32 50 65 54 Q98 58 130 52 L130 82 L0 82Z" fill="#0a1628"/>
<path d="M0 62 Q32 54 65 58 Q98 62 130 56 L130 82 L0 82Z" fill="#0d1e38"/>
<path d="M22 52 Q65 44 108 52 L103 62 Q65 68 27 62Z" fill="#160a0a" filter="url(#p1f)"/>
<rect x="62" y="20" width="2.5" height="33" fill="#2a1500"/>
<path d="M64.5 22 L82 30 L64.5 42Z" fill="#3a2810" opacity=".9"/>
<path d="M64.5 22 L82 30" stroke="#5a3818" stroke-width=".8"/>
<rect x="62" y="14" width="14" height="9" fill="#1e0808" rx="1"/>
<ellipse cx="68" cy="18" rx="3" ry="3.5" fill="#ddd"/>
<circle cx="66.8" cy="17" r=".9" fill="#1e0808"/>
<circle cx="69.2" cy="17" r=".9" fill="#1e0808"/>
<path d="M66.5 19.5 Q68 18.5 69.5 19.5" stroke="#1e0808" stroke-width=".7" fill="none"/>
<line x1="65" y1="21" x2="71" y2="21" stroke="#1e0808" stroke-width=".6"/>
<path d="M0 66 Q16 63 32 66 Q48 69 64 66 Q80 63 96 66 Q112 69 130 66" stroke="#1e4080" stroke-width="1.5" fill="none" opacity=".6"/>
<path d="M0 71 Q20 68 40 71 Q60 74 80 71 Q100 68 130 71" stroke="#1e4080" stroke-width="1" fill="none" opacity=".4"/>
</svg>`,

'Matelot Intrépide': `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 130 82">
<defs>
  <linearGradient id="m2a" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stop-color="#0e2a4a"/><stop offset="100%" stop-color="#1a0a28"/></linearGradient>
  <radialGradient id="m2b" cx="30%" cy="40%"><stop offset="0%" stop-color="#4a8aff" stop-opacity=".5"/><stop offset="100%" stop-color="transparent"/></radialGradient>
  <filter id="m2f"><feGaussianBlur stdDeviation=".8"/></filter>
</defs>
<rect width="130" height="82" fill="url(#m2a)"/>
<rect width="130" height="82" fill="url(#m2b)"/>
<path d="M0 50 Q20 42 40 50 Q60 58 80 48 Q100 38 130 46 L130 82 L0 82Z" fill="#0a1e38"/>
<path d="M0 56 Q25 48 50 56 Q75 64 100 54 L130 58 L130 82 L0 82Z" fill="#0d2440"/>
<ellipse cx="42" cy="35" rx="8" ry="22" fill="#e8c870" opacity=".15" transform="rotate(-15,42,35)" filter="url(#m2f)"/>
<circle cx="42" cy="14" rx="8" ry="8" fill="#1a2a4a" r="8"/>
<path d="M34 14 L50 14 L48 10 L36 10Z" fill="#e8c870"/>
<rect x="40" y="22" width="4" height="18" fill="#1a3a6a"/>
<path d="M38 24 L32 30 L36 32 L40 26Z" fill="#1a3a6a"/>
<path d="M44 24 L50 30 L46 32 L44 26Z" fill="#1a3a6a"/>
<rect x="38" y="40" width="5" height="14" fill="#1a3a6a"/>
<rect x="43" y="40" width="5" height="14" fill="#162a5a"/>
<circle cx="65" cy="48" r="10" fill="none" stroke="#c07820" stroke-width="3" opacity=".8"/>
<line x1="65" y1="38" x2="65" y2="20" stroke="#c07820" stroke-width="2.5" opacity=".8"/>
<path d="M58 22 Q65 18 72 22" stroke="#c07820" stroke-width="2" fill="none" opacity=".8"/>
<path d="M10 60 Q25 56 40 60" stroke="#4a8aff" stroke-width="1.5" fill="none" opacity=".5"/>
<path d="M80 55 Q100 50 120 55" stroke="#4a8aff" stroke-width="1.2" fill="none" opacity=".4"/>
<path d="M35 12 L32 8 M42 11 L42 7 M49 12 L52 8" stroke="#e8c870" stroke-width=".8" opacity=".6"/>
</svg>`,

'Tortue Bouclier': `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 130 82">
<defs>
  <radialGradient id="t3a" cx="50%" cy="60%"><stop offset="0%" stop-color="#0e3020"/><stop offset="100%" stop-color="#061412"/></radialGradient>
  <radialGradient id="t3b" cx="50%" cy="50%"><stop offset="0%" stop-color="#40c840" stop-opacity=".25"/><stop offset="100%" stop-color="transparent"/></radialGradient>
</defs>
<rect width="130" height="82" fill="url(#t3a)"/>
<rect width="130" height="82" fill="url(#t3b)"/>
<ellipse cx="65" cy="44" rx="32" ry="26" fill="#1a3a1a"/>
<ellipse cx="65" cy="44" rx="32" ry="26" fill="none" stroke="#2a6a2a" stroke-width="2"/>
<polygon points="65,20 80,30 80,58 65,68 50,58 50,30" fill="#1e4a1e" stroke="#3a8a3a" stroke-width="1.5"/>
<polygon points="65,20 50,30 65,35" fill="#2a5a2a" stroke="#3a8a3a" stroke-width="1"/>
<polygon points="80,30 65,35 80,58" fill="#2a5a2a" stroke="#3a8a3a" stroke-width="1"/>
<polygon points="80,58 65,53 65,68" fill="#2a5a2a" stroke="#3a8a3a" stroke-width="1"/>
<polygon points="50,58 65,53 65,68" fill="#2a5a2a" stroke="#3a8a3a" stroke-width="1"/>
<polygon points="50,30 65,35 65,53" fill="#2a5a2a" stroke="#3a8a3a" stroke-width="1"/>
<ellipse cx="38" cy="30" rx="7" ry="5" fill="#1a3a1a" transform="rotate(-30,38,30)"/>
<ellipse cx="92" cy="30" rx="7" ry="5" fill="#1a3a1a" transform="rotate(30,92,30)"/>
<ellipse cx="40" cy="60" rx="7" ry="5" fill="#1a3a1a" transform="rotate(20,40,60)"/>
<ellipse cx="90" cy="60" rx="7" ry="5" fill="#1a3a1a" transform="rotate(-20,90,60)"/>
<ellipse cx="65" cy="72" rx="8" ry="5" fill="#1a3a1a"/>
<ellipse cx="65" cy="22" rx="6" ry="8" fill="#1a3a1a"/>
<circle cx="62" cy="20" r="1.5" fill="#60c060"/>
<circle cx="68" cy="20" r="1.5" fill="#60c060"/>
<ellipse cx="65" cy="44" rx="6" ry="4" fill="#3aaa3a" opacity=".3"/>
<circle cx="20" cy="15" r="2" fill="#40c840" opacity=".3"/>
<circle cx="110" cy="20" r="1.5" fill="#40c840" opacity=".2"/>
<circle cx="15" cy="65" r="3" fill="#40c840" opacity=".2"/>
<circle cx="115" cy="60" r="2" fill="#40c840" opacity=".25"/>
</svg>`,

'Sirène Mystique': `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 130 82">
<defs>
  <linearGradient id="s4a" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stop-color="#0a1a3a"/><stop offset="100%" stop-color="#1a0a3a"/></linearGradient>
  <radialGradient id="s4b" cx="55%" cy="45%"><stop offset="0%" stop-color="#40c8c8" stop-opacity=".35"/><stop offset="100%" stop-color="transparent"/></radialGradient>
  <radialGradient id="s4c" cx="55%" cy="45%"><stop offset="0%" stop-color="#c040c0" stop-opacity=".2"/><stop offset="100%" stop-color="transparent"/></radialGradient>
  <filter id="s4f"><feGaussianBlur stdDeviation="2"/></filter>
</defs>
<rect width="130" height="82" fill="url(#s4a)"/>
<rect width="130" height="82" fill="url(#s4b)"/>
<rect width="130" height="82" fill="url(#s4c)"/>
<ellipse cx="65" cy="55" rx="50" ry="35" fill="#0a2040" opacity=".8"/>
<ellipse cx="60" cy="40" rx="18" ry="30" fill="#1a8a8a" opacity=".15" filter="url(#s4f)"/>
<ellipse cx="60" cy="18" rx="9" ry="10" fill="#d4a080"/>
<path d="M52 26 Q55 22 60 20 Q65 22 68 26" fill="#c49070"/>
<path d="M55 26 Q58 36 62 44 Q64 50 60 56" stroke="#c49070" stroke-width="5" fill="none" stroke-linecap="round"/>
<path d="M53 28 Q48 32 46 38" stroke="#c49070" stroke-width="4" fill="none" stroke-linecap="round"/>
<path d="M67 28 Q72 32 74 38" stroke="#c49070" stroke-width="4" fill="none" stroke-linecap="round"/>
<path d="M58 56 Q52 64 44 68 Q56 72 60 68 Q62 72 68 72 Q72 68 76 68 Q68 64 62 56Z" fill="#1a8a6a"/>
<path d="M44 68 Q40 72 36 74" stroke="#1a8a6a" stroke-width="3" fill="none"/>
<path d="M76 68 Q80 72 84 74" stroke="#1a8a6a" stroke-width="3" fill="none"/>
<path d="M52 18 Q58 12 66 14 Q70 16 68 18" fill="#8a4020" opacity=".9"/>
<path d="M54 18 Q58 10 62 8 Q68 10 70 16" fill="#8a4020" opacity=".7"/>
<circle cx="57" cy="17" r="1.5" fill="#3a2010" opacity=".8"/>
<circle cx="63" cy="17" r="1.5" fill="#3a2010" opacity=".8"/>
<circle cx="15" cy="12" r="2.5" fill="#40c8c8" opacity=".5"/>
<circle cx="108" cy="8" r="2" fill="#c040c0" opacity=".5"/>
<circle cx="25" cy="55" r="3" fill="#40c8c8" opacity=".3"/>
<circle cx="100" cy="60" r="2" fill="#40c8c8" opacity=".25"/>
<circle cx="50" cy="75" r="1.5" fill="#c040c0" opacity=".4"/>
<circle cx="85" cy="70" r="2" fill="#40c8c8" opacity=".35"/>
<path d="M10 30 Q30 26 50 32" stroke="#40c8c8" stroke-width=".8" fill="none" opacity=".3"/>
<path d="M85 25 Q105 20 125 28" stroke="#c040c0" stroke-width=".8" fill="none" opacity=".3"/>
</svg>`,

'Crabe Gardien': `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 130 82">
<defs>
  <linearGradient id="c5a" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stop-color="#2a1008"/><stop offset="100%" stop-color="#0a0a0a"/></linearGradient>
  <radialGradient id="c5b" cx="50%" cy="70%"><stop offset="0%" stop-color="#c04010" stop-opacity=".4"/><stop offset="100%" stop-color="transparent"/></radialGradient>
</defs>
<rect width="130" height="82" fill="url(#c5a)"/>
<rect width="130" height="82" fill="url(#c5b)"/>
<path d="M0 60 Q32 54 65 58 Q98 62 130 56 L130 82 L0 82Z" fill="#1a0a06"/>
<path d="M0 66 Q32 60 65 64 Q98 68 130 62 L130 82 L0 82Z" fill="#220e08"/>
<ellipse cx="65" cy="50" rx="28" ry="18" fill="#c04010"/>
<ellipse cx="65" cy="50" rx="28" ry="18" fill="none" stroke="#e05020" stroke-width="1.5"/>
<ellipse cx="65" cy="50" rx="18" ry="12" fill="#d04818"/>
<path d="M45 44 Q50 36 65 34 Q80 36 85 44" fill="#c04010" stroke="#e05020" stroke-width="1"/>
<circle cx="55" cy="40" r="4" fill="#e05020"/>
<circle cx="75" cy="40" r="4" fill="#e05020"/>
<circle cx="55" cy="40" r="1.5" fill="#1a0a00"/>
<circle cx="75" cy="40" r="1.5" fill="#1a0a00"/>
<path d="M37 50 L18 36 L12 42 L22 50" fill="#b03808" stroke="#c04010" stroke-width="1"/>
<path d="M12 42 L6 34 L10 30 L18 36" fill="#a03008"/>
<path d="M93 50 L112 36 L118 42 L108 50" fill="#b03808" stroke="#c04010" stroke-width="1"/>
<path d="M118 42 L124 34 L120 30 L112 36" fill="#a03008"/>
<path d="M48 68 L42 58 L48 56 L52 66" fill="#b03808"/>
<path d="M62 70 L60 58 L65 57 L67 69" fill="#b03808"/>
<path d="M82 68 L88 58 L82 56 L78 66" fill="#b03808"/>
<circle cx="65" cy="52" r="6" fill="#e06030" opacity=".4"/>
<path d="M58 52 L65 48 L72 52 L65 56Z" fill="#ff8040" opacity=".6"/>
</svg>`,

'Méduse Venimeuse': `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 130 82">
<defs>
  <radialGradient id="m6a" cx="50%" cy="40%"><stop offset="0%" stop-color="#1a0430"/><stop offset="100%" stop-color="#060214"/></radialGradient>
  <radialGradient id="m6b" cx="52%" cy="35%"><stop offset="0%" stop-color="#c040e0" stop-opacity=".6"/><stop offset="100%" stop-color="transparent"/></radialGradient>
  <radialGradient id="m6c" cx="52%" cy="35%"><stop offset="0%" stop-color="#ff80ff" stop-opacity=".2"/><stop offset="100%" stop-color="transparent"/></radialGradient>
  <filter id="m6f"><feGaussianBlur stdDeviation="2.5"/></filter>
</defs>
<rect width="130" height="82" fill="url(#m6a)"/>
<rect width="130" height="82" fill="url(#m6b)"/>
<rect width="130" height="82" fill="url(#m6c)"/>
<ellipse cx="65" cy="32" rx="30" ry="30" fill="#c040e0" opacity=".2" filter="url(#m6f)"/>
<path d="M36 32 Q65 8 94 32 Q88 42 65 44 Q42 42 36 32Z" fill="#d050f0" opacity=".85"/>
<path d="M36 32 Q65 8 94 32 Q88 42 65 44 Q42 42 36 32Z" fill="none" stroke="#ff80ff" stroke-width="1.5" opacity=".7"/>
<path d="M46 28 Q65 16 84 28" fill="#e070ff" opacity=".5"/>
<ellipse cx="65" cy="30" rx="18" ry="10" fill="#ff80ff" opacity=".15"/>
<path d="M50 44 Q46 54 44 64 Q48 62 50 54 Q52 62 54 70 Q56 60 56 50" stroke="#c040e0" stroke-width="2.5" fill="none" opacity=".8" stroke-linecap="round"/>
<path d="M65 44 Q63 56 65 68 Q67 56 65 44" stroke="#d050f0" stroke-width="2.5" fill="none" opacity=".9" stroke-linecap="round"/>
<path d="M80 44 Q84 54 86 64 Q82 62 80 54 Q78 62 76 70 Q74 60 74 50" stroke="#c040e0" stroke-width="2.5" fill="none" opacity=".8" stroke-linecap="round"/>
<path d="M57 44 Q53 52 52 62" stroke="#e070ff" stroke-width="1.5" fill="none" opacity=".6" stroke-linecap="round"/>
<path d="M73 44 Q77 52 78 62" stroke="#e070ff" stroke-width="1.5" fill="none" opacity=".6" stroke-linecap="round"/>
<circle cx="57" cy="28" r="2" fill="#ff40ff" opacity=".7"/>
<circle cx="73" cy="28" r="2" fill="#ff40ff" opacity=".7"/>
<circle cx="65" cy="24" r="1.5" fill="#ff80ff" opacity=".8"/>
<circle cx="15" cy="10" r="2" fill="#c040e0" opacity=".5"/>
<circle cx="110" cy="15" r="1.5" fill="#ff80ff" opacity=".4"/>
<circle cx="20" cy="70" r="2.5" fill="#c040e0" opacity=".3"/>
<circle cx="105" cy="65" r="2" fill="#ff80ff" opacity=".35"/>
</svg>`,

'Dauphin Éclair': `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 130 82">
<defs>
  <linearGradient id="d7a" x1="0" y1="0" x2="1" y2="1"><stop offset="0%" stop-color="#0a2848"/><stop offset="100%" stop-color="#081830"/></linearGradient>
  <radialGradient id="d7b" cx="60%" cy="35%"><stop offset="0%" stop-color="#ffe040" stop-opacity=".5"/><stop offset="100%" stop-color="transparent"/></radialGradient>
  <filter id="d7f"><feGaussianBlur stdDeviation="1.5"/></filter>
</defs>
<rect width="130" height="82" fill="url(#d7a)"/>
<rect width="130" height="82" fill="url(#d7b)"/>
<path d="M0 55 Q32 46 65 52 Q98 58 130 50 L130 82 L0 82Z" fill="#081830"/>
<path d="M0 62 Q32 54 65 60 Q98 66 130 58 L130 82 L0 82Z" fill="#0a1e38"/>
<path d="M25 48 Q50 24 80 40 Q90 46 88 52 Q80 58 65 50 Q50 42 42 50 Q36 56 30 52 Z" fill="#3090d0"/>
<path d="M25 48 Q50 24 80 40" stroke="#60b8f0" stroke-width="1.5" fill="none" opacity=".7"/>
<path d="M80 40 Q90 36 98 38 L94 44 Q88 44 80 40Z" fill="#2878b0"/>
<path d="M66 34 Q72 24 78 30 Q74 34 66 34Z" fill="#3090d0"/>
<circle cx="30" cy="50" r="3" fill="#1a6090"/>
<circle cx="30" cy="50" r="1.2" fill="#ffffff" opacity=".6"/>
<path d="M72 20 L78 30 L68 28Z" fill="#ffe040" opacity=".95"/>
<path d="M80 15 L88 28 L76 25Z" fill="#ffe040" opacity=".9"/>
<path d="M88 22 L95 32 L84 30Z" fill="#ffe040" opacity=".85"/>
<line x1="72" y1="20" x2="80" y2="15" stroke="#ffe040" stroke-width="1.5" opacity=".7"/>
<line x1="80" y1="15" x2="88" y2="22" stroke="#ffe040" stroke-width="1.5" opacity=".7"/>
<line x1="75" y1="26" x2="92" y2="28" stroke="#fff080" stroke-width=".8" opacity=".5"/>
<circle cx="75" cy="26" r="3" fill="#ffe040" opacity=".4" filter="url(#d7f)"/>
<circle cx="92" cy="28" r="2.5" fill="#ffe040" opacity=".35" filter="url(#d7f)"/>
<path d="M10 65 Q25 61 40 65" stroke="#3090d0" stroke-width="1.5" fill="none" opacity=".5"/>
<path d="M90 60 Q108 56 125 62" stroke="#3090d0" stroke-width="1.2" fill="none" opacity=".4"/>
<circle cx="15" cy="15" r="1.5" fill="#ffe040" opacity=".3"/>
<circle cx="20" cy="35" r="1" fill="#ffe040" opacity=".25"/>
</svg>`,

'Chevalier des Mers': `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 130 82">
<defs>
  <linearGradient id="cs8a" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stop-color="#0a1a2e"/><stop offset="100%" stop-color="#040e1e"/></linearGradient>
  <radialGradient id="cs8b" cx="50%" cy="40%"><stop offset="0%" stop-color="#80e0ff" stop-opacity=".4"/><stop offset="100%" stop-color="transparent"/></radialGradient>
  <filter id="cs8f"><feGaussianBlur stdDeviation="1.8"/></filter>
</defs>
<rect width="130" height="82" fill="url(#cs8a)"/>
<rect width="130" height="82" fill="url(#cs8b)"/>
<path d="M0 58 Q32 50 65 56 Q98 62 130 54 L130 82 L0 82Z" fill="#081424"/>
<ellipse cx="65" cy="42" rx="22" ry="30" fill="#80e0ff" opacity=".08" filter="url(#cs8f)"/>
<rect x="58" y="22" width="14" height="16" rx="3" fill="#3a8aa0" stroke="#80e0ff" stroke-width="1.5"/>
<polygon points="65,14 62,22 68,22" fill="#3a8aa0" stroke="#80e0ff" stroke-width="1"/>
<rect x="55" y="38" width="20" height="20" rx="2" fill="#2a6a80" stroke="#60c0d8" stroke-width="1.2"/>
<rect x="59" y="36" width="12" height="4" rx="1" fill="#3a8aa0" stroke="#80e0ff" stroke-width="1"/>
<rect x="53" y="38" width="8" height="12" rx="2" fill="#2a6a80" stroke="#60c0d8" stroke-width="1"/>
<rect x="69" y="38" width="8" height="12" rx="2" fill="#2a6a80" stroke="#60c0d8" stroke-width="1"/>
<rect x="57" y="58" width="7" height="14" rx="2" fill="#2a6a80" stroke="#60c0d8" stroke-width="1"/>
<rect x="66" y="58" width="7" height="14" rx="2" fill="#2a6a80" stroke="#60c0d8" stroke-width="1"/>
<line x1="65" y1="14" x2="65" y2="6" stroke="#80e0ff" stroke-width="2"/>
<polygon points="65,4 62,10 68,10" fill="#80e0ff"/>
<rect x="62" y="40" width="6" height="8" rx="1" fill="#60c0d8" opacity=".5"/>
<polygon points="40,48 38,28 44,28 42,48" fill="#3a6a80" stroke="#60c0d8" stroke-width="1" transform="rotate(-10,40,38)"/>
<ellipse cx="48" cy="25" rx="6" ry="3" fill="#80e0ff" opacity=".3"/>
<path d="M35 22 Q45 16 55 22" stroke="#80e0ff" stroke-width="1" fill="none" opacity=".4"/>
<ellipse cx="20" cy="20" rx="8" ry="5" fill="#80e0ff" opacity=".12"/>
<ellipse cx="105" cy="28" rx="10" ry="6" fill="#80e0ff" opacity=".1"/>
<path d="M10 65 Q30 60 50 65" stroke="#80e0ff" stroke-width="1.2" fill="none" opacity=".35"/>
</svg>`,

'Requin Marteau': `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 130 82">
<defs>
  <linearGradient id="r9a" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stop-color="#04101e"/><stop offset="100%" stop-color="#020810"/></linearGradient>
  <radialGradient id="r9b" cx="50%" cy="60%"><stop offset="0%" stop-color="#204060" stop-opacity=".8"/><stop offset="100%" stop-color="transparent"/></radialGradient>
  <filter id="r9f"><feGaussianBlur stdDeviation="2"/></filter>
</defs>
<rect width="130" height="82" fill="url(#r9a)"/>
<rect width="130" height="82" fill="url(#r9b)"/>
<ellipse cx="65" cy="25" rx="50" ry="20" fill="#102030" opacity=".8"/>
<path d="M15 45 Q65 20 115 45 L115 65 Q65 75 15 65Z" fill="#3a5060" opacity=".9"/>
<path d="M15 45 Q65 20 115 45" stroke="#506070" stroke-width="1.5" fill="none"/>
<path d="M30 45 L15 30 Q20 36 30 45Z" fill="#304050"/>
<rect x="40" y="38" width="50" height="6" rx="3" fill="#283848"/>
<rect x="40" y="38" width="50" height="6" rx="3" fill="none" stroke="#506070" stroke-width="1"/>
<circle cx="42" cy="41" r="3" fill="#102030"/>
<circle cx="88" cy="41" r="3" fill="#102030"/>
<circle cx="42" cy="41" r="1.2" fill="#ffffff" opacity=".5"/>
<circle cx="88" cy="41" r="1.2" fill="#ffffff" opacity=".5"/>
<path d="M50 44 L52 52 M62 44 L62 54 M74 44 L72 52" stroke="#506070" stroke-width="1.5" fill="none" opacity=".6"/>
<path d="M55 30 L65 16 L75 30" fill="#3a5060" stroke="#506070" stroke-width="1"/>
<path d="M105 45 L118 38 L118 52 Z" fill="#304050"/>
<path d="M25 8 Q35 5 40 12" stroke="#506070" stroke-width=".8" fill="none" opacity=".3"/>
<path d="M90 10 Q100 6 108 14" stroke="#506070" stroke-width=".8" fill="none" opacity=".25"/>
<ellipse cx="65" cy="40" rx="30" ry="15" fill="#304050" opacity=".2" filter="url(#r9f)"/>
<path d="M0 60 Q32 55 65 60 Q98 65 130 58" stroke="#204060" stroke-width="1.5" fill="none" opacity=".5"/>
</svg>`,

'Anguille Électrique': `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 130 82">
<defs>
  <linearGradient id="ae10a" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stop-color="#0a0a0a"/><stop offset="100%" stop-color="#0a1020"/></linearGradient>
  <radialGradient id="ae10b" cx="50%" cy="45%"><stop offset="0%" stop-color="#c0c000" stop-opacity=".5"/><stop offset="100%" stop-color="transparent"/></radialGradient>
  <filter id="ae10f"><feGaussianBlur stdDeviation="2.5"/></filter>
</defs>
<rect width="130" height="82" fill="url(#ae10a)"/>
<rect width="130" height="82" fill="url(#ae10b)"/>
<path d="M20 20 Q50 30 80 18 Q110 8 118 30 Q126 52 100 62 Q70 72 40 60 Q10 48 15 30 Q17 24 20 20Z" fill="#606000" opacity=".9"/>
<path d="M20 20 Q50 30 80 18 Q110 8 118 30 Q126 52 100 62 Q70 72 40 60 Q10 48 15 30 Q17 24 20 20Z" fill="none" stroke="#c0c040" stroke-width="1.5"/>
<path d="M22 22 Q52 32 82 20 Q108 10 116 32 Q124 50 98 60 Q68 70 40 58" fill="none" stroke="#e0e080" stroke-width=".8" opacity=".5"/>
<ellipse cx="22" cy="24" rx="8" ry="6" fill="#707020"/>
<circle cx="19" cy="22" r="3.5" fill="#202000"/>
<circle cx="19" cy="22" r="1.5" fill="#ffff00" opacity=".7"/>
<circle cx="25" cy="22" r="3.5" fill="#202000"/>
<circle cx="25" cy="22" r="1.5" fill="#ffff00" opacity=".7"/>
<path d="M45 18 L52 8 L55 20" fill="#ffff00" opacity=".9"/>
<path d="M70 14 L78 4 L80 16" fill="#ffff00" opacity=".85"/>
<path d="M95 20 L100 10 L105 22" fill="#ffff00" opacity=".8"/>
<line x1="45" y1="18" x2="70" y2="14" stroke="#ffff00" stroke-width="1" opacity=".6"/>
<line x1="70" y1="14" x2="95" y2="20" stroke="#ffff00" stroke-width="1" opacity=".6"/>
<ellipse cx="65" cy="38" rx="40" ry="22" fill="#808000" opacity=".1" filter="url(#ae10f)"/>
<path d="M30 70 Q50 65 70 70" stroke="#c0c040" stroke-width="1" fill="none" opacity=".4"/>
<circle cx="110" cy="70" r="4" fill="#ffff00" opacity=".2" filter="url(#ae10f)"/>
<circle cx="15" cy="60" r="3" fill="#ffff00" opacity=".2" filter="url(#ae10f)"/>
</svg>`,

'Baleine Géante': `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 130 82">
<defs>
  <linearGradient id="b11a" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stop-color="#040c1e"/><stop offset="100%" stop-color="#020810"/></linearGradient>
  <radialGradient id="b11b" cx="40%" cy="55%"><stop offset="0%" stop-color="#1040a0" stop-opacity=".6"/><stop offset="100%" stop-color="transparent"/></radialGradient>
  <filter id="b11f"><feGaussianBlur stdDeviation="3"/></filter>
</defs>
<rect width="130" height="82" fill="url(#b11a)"/>
<rect width="130" height="82" fill="url(#b11b)"/>
<ellipse cx="55" cy="52" rx="60" ry="40" fill="#1040a0" opacity=".15" filter="url(#b11f)"/>
<path d="M-10 48 Q40 24 90 44 Q110 54 118 52 Q108 60 90 58 Q40 62 -10 68Z" fill="#1a3a80"/>
<path d="M-10 48 Q40 24 90 44 Q110 54 118 52" fill="none" stroke="#3060c0" stroke-width="1.5"/>
<path d="M88 44 Q118 52 126 40 L126 60 Q118 66 108 58Z" fill="#142e6a"/>
<path d="M40 24 Q45 10 52 16 Q48 24 40 24Z" fill="#1a3a80" stroke="#3060c0" stroke-width="1"/>
<ellipse cx="30" cy="30" rx="12" ry="6" fill="#3060c0" opacity=".3"/>
<circle cx="25" cy="44" r="6" fill="#102060"/>
<circle cx="25" cy="44" r="2.5" fill="#ffffff" opacity=".2"/>
<path d="M5 50 L-8 46 L-5 40 L8 44" fill="#142e6a"/>
<path d="M50 24 L55 14 L60 22" stroke="#80a0ff" stroke-width="2" fill="none" opacity=".7" stroke-linecap="round"/>
<path d="M55 14 Q65 8 68 18" stroke="#80a0ff" stroke-width="1.5" fill="none" opacity=".5"/>
<ellipse cx="60" cy="52" rx="22" ry="8" fill="#3060c0" opacity=".2"/>
<path d="M80 56 Q100 52 110 56" fill="none" stroke="#3060c0" stroke-width="1.5" opacity=".4"/>
<circle cx="100" cy="12" r="2" fill="#80a0ff" opacity=".4"/>
<circle cx="115" cy="20" r="1.5" fill="#80a0ff" opacity=".3"/>
<circle cx="110" cy="35" r="2.5" fill="#80a0ff" opacity=".2"/>
<path d="M95 68 Q108 64 122 68" stroke="#3060c0" stroke-width="1" fill="none" opacity=".35"/>
</svg>`,

'Kraken des Abysses': `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 130 82">
<defs>
  <radialGradient id="k12a" cx="50%" cy="55%"><stop offset="0%" stop-color="#1a0440"/><stop offset="100%" stop-color="#040008"/></radialGradient>
  <radialGradient id="k12b" cx="50%" cy="50%"><stop offset="0%" stop-color="#6000c0" stop-opacity=".5"/><stop offset="100%" stop-color="transparent"/></radialGradient>
  <filter id="k12f"><feGaussianBlur stdDeviation="3"/></filter>
</defs>
<rect width="130" height="82" fill="url(#k12a)"/>
<rect width="130" height="82" fill="url(#k12b)"/>
<ellipse cx="65" cy="55" rx="50" ry="35" fill="#2a0060" opacity=".3" filter="url(#k12f)"/>
<ellipse cx="65" cy="42" rx="22" ry="18" fill="#2a0060" opacity=".95"/>
<ellipse cx="65" cy="42" rx="22" ry="18" fill="none" stroke="#6020a0" stroke-width="2"/>
<ellipse cx="65" cy="38" rx="14" ry="10" fill="#3a0880"/>
<circle cx="57" cy="38" r="5" fill="#1a0440"/>
<circle cx="73" cy="38" r="5" fill="#1a0440"/>
<circle cx="57" cy="38" r="2.5" fill="#c040ff" opacity=".8"/>
<circle cx="73" cy="38" r="2.5" fill="#c040ff" opacity=".8"/>
<ellipse cx="65" cy="46" rx="8" ry="4" fill="#2a0060"/>
<path d="M48 52 Q36 60 30 72 Q38 66 44 58 Q40 68 38 78" stroke="#4a10a0" stroke-width="4" fill="none" stroke-linecap="round" opacity=".9"/>
<path d="M82 52 Q94 60 100 72 Q92 66 86 58 Q90 68 92 78" stroke="#4a10a0" stroke-width="4" fill="none" stroke-linecap="round" opacity=".9"/>
<path d="M56 58 Q44 65 38 78" stroke="#4a10a0" stroke-width="3" fill="none" stroke-linecap="round" opacity=".8"/>
<path d="M74 58 Q86 65 92 78" stroke="#4a10a0" stroke-width="3" fill="none" stroke-linecap="round" opacity=".8"/>
<path d="M44 54 Q28 58 18 68" stroke="#3a0890" stroke-width="3" fill="none" stroke-linecap="round" opacity=".7"/>
<path d="M86 54 Q102 58 112 68" stroke="#3a0890" stroke-width="3" fill="none" stroke-linecap="round" opacity=".7"/>
<path d="M35 50 Q14 50 8 62" stroke="#2a0870" stroke-width="3" fill="none" stroke-linecap="round" opacity=".6"/>
<path d="M95 50 Q116 50 122 62" stroke="#2a0870" stroke-width="3" fill="none" stroke-linecap="round" opacity=".6"/>
<circle cx="30" cy="72" r="3" fill="#c040ff" opacity=".5"/>
<circle cx="100" cy="72" r="3" fill="#c040ff" opacity=".5"/>
<circle cx="15" cy="10" r="2" fill="#6020a0" opacity=".5"/>
<circle cx="108" cy="12" r="1.5" fill="#c040ff" opacity=".4"/>
</svg>`,

'Gardien des Abysses': `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 130 82">
<defs>
  <linearGradient id="g13a" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stop-color="#081830"/><stop offset="100%" stop-color="#040c18"/></linearGradient>
  <radialGradient id="g13b" cx="50%" cy="45%"><stop offset="0%" stop-color="#4080c0" stop-opacity=".4"/><stop offset="100%" stop-color="transparent"/></radialGradient>
  <filter id="g13f"><feGaussianBlur stdDeviation="2"/></filter>
</defs>
<rect width="130" height="82" fill="url(#g13a)"/>
<rect width="130" height="82" fill="url(#g13b)"/>
<path d="M0 55 Q32 47 65 53 Q98 59 130 51 L130 82 L0 82Z" fill="#060e20"/>
<ellipse cx="65" cy="44" rx="24" ry="28" fill="#2060a0" opacity=".2" filter="url(#g13f)"/>
<ellipse cx="65" cy="50" rx="20" ry="14" fill="#8090a0"/>
<ellipse cx="65" cy="50" rx="20" ry="14" fill="none" stroke="#c0d0e0" stroke-width="1.5"/>
<ellipse cx="65" cy="38" rx="13" ry="16" fill="#7080a0"/>
<ellipse cx="65" cy="38" rx="13" ry="16" fill="none" stroke="#c0d0e0" stroke-width="1.2"/>
<ellipse cx="65" cy="30" rx="10" ry="10" fill="#607090"/>
<circle cx="60" cy="28" r="4" fill="#304050"/>
<circle cx="70" cy="28" r="4" fill="#304050"/>
<circle cx="60" cy="28" r="1.8" fill="#80c0ff" opacity=".9"/>
<circle cx="70" cy="28" r="1.8" fill="#80c0ff" opacity=".9"/>
<ellipse cx="65" cy="34" rx="6" ry="3" fill="#7080a0"/>
<path d="M55 50 L42 60 Q50 56 55 62" stroke="#8090a0" stroke-width="6" fill="none" stroke-linecap="round"/>
<path d="M75 50 L88 60 Q80 56 75 62" stroke="#8090a0" stroke-width="6" fill="none" stroke-linecap="round"/>
<path d="M50 62 L42 74 L58 70" fill="#607090" stroke="#c0d0e0" stroke-width="1"/>
<path d="M80 62 L88 74 L72 70" fill="#607090" stroke="#c0d0e0" stroke-width="1"/>
<ellipse cx="65" cy="65" rx="16" ry="8" fill="#506080" stroke="#a0b0c0" stroke-width="1"/>
<rect x="55" y="30" width="20" height="18" rx="4" fill="none" stroke="#c0d0e0" stroke-width="2" opacity=".6"/>
<polygon points="65,16 60,24 70,24" fill="#4080c0" stroke="#80c0ff" stroke-width="1"/>
<circle cx="12" cy="12" r="2" fill="#4080c0" opacity=".4"/>
<circle cx="115" cy="16" r="1.5" fill="#80c0ff" opacity=".35"/>
</svg>`,

'Dragon Marin': `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 130 82">
<defs>
  <linearGradient id="dm14a" x1="0" y1="0" x2="1" y2="1"><stop offset="0%" stop-color="#1e0400"/><stop offset="100%" stop-color="#0a0214"/></linearGradient>
  <radialGradient id="dm14b" cx="45%" cy="40%"><stop offset="0%" stop-color="#ff6000" stop-opacity=".5"/><stop offset="100%" stop-color="transparent"/></radialGradient>
  <radialGradient id="dm14c" cx="45%" cy="40%"><stop offset="0%" stop-color="#ffd000" stop-opacity=".25"/><stop offset="100%" stop-color="transparent"/></radialGradient>
  <filter id="dm14f"><feGaussianBlur stdDeviation="2.5"/></filter>
</defs>
<rect width="130" height="82" fill="url(#dm14a)"/>
<rect width="130" height="82" fill="url(#dm14b)"/>
<rect width="130" height="82" fill="url(#dm14c)"/>
<path d="M0 62 Q32 54 65 60 Q98 66 130 58 L130 82 L0 82Z" fill="#1e0400"/>
<ellipse cx="50" cy="40" rx="35" ry="28" fill="#c03000" opacity=".25" filter="url(#dm14f)"/>
<path d="M10 60 Q30 44 50 30 Q70 16 90 24 Q110 32 118 50 Q110 58 90 52 Q70 46 60 54 Q44 62 30 58 Q18 64 10 60Z" fill="#c03000" opacity=".95"/>
<path d="M10 60 Q30 44 50 30 Q70 16 90 24 Q110 32 118 50" fill="none" stroke="#ff6020" stroke-width="2"/>
<path d="M70 18 L80 6 L86 18 Q78 22 70 18Z" fill="#e04010" stroke="#ff8040" stroke-width="1"/>
<path d="M82 20 L96 10 L98 24 Q90 26 82 20Z" fill="#e04010" stroke="#ff8040" stroke-width="1"/>
<path d="M50 30 L44 18 L54 22Z" fill="#c03000" stroke="#ff6020" stroke-width="1"/>
<ellipse cx="48" cy="30" rx="8" ry="6" fill="#e04010" opacity=".6"/>
<circle cx="44" cy="28" r="5" fill="#200000"/>
<circle cx="44" cy="28" r="2.5" fill="#ff4000" opacity=".9"/>
<circle cx="44" cy="28" r="1" fill="#ffff00"/>
<path d="M90 52 Q108 58 118 50 L120 60 Q108 68 92 62Z" fill="#a02800"/>
<path d="M80 58 Q90 66 96 78" stroke="#e04010" stroke-width="5" fill="none" stroke-linecap="round" opacity=".8"/>
<path d="M108 15 L114 6 L118 16 L112 18Z" fill="#ff6020" opacity=".9"/>
<path d="M118 22 L126 14 L128 24 L122 26Z" fill="#ff8040" opacity=".8"/>
<path d="M60 64 L65 74 L70 64" stroke="#ff4000" stroke-width="1.5" fill="none" opacity=".6"/>
<path d="M30 66 Q25 72 22 78" stroke="#ff4000" stroke-width="1" fill="none" opacity=".4"/>
<circle cx="115" cy="68" r="3" fill="#ff6020" opacity=".3" filter="url(#dm14f)"/>
<circle cx="18" cy="12" r="2" fill="#ff8040" opacity=".3"/>
</svg>`,

};
