
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

'Capitaine Corsaire': `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 130 82">
<defs><radialGradient id="cc1a" cx="50%" cy="40%"><stop offset="0%" stop-color="#1a0a30"/><stop offset="100%" stop-color="#06040e"/></radialGradient><radialGradient id="cc1b" cx="45%" cy="45%"><stop offset="0%" stop-color="#c08020" stop-opacity=".6"/><stop offset="100%" stop-color="transparent"/></radialGradient></defs>
<rect width="130" height="82" fill="url(#cc1a)"/><rect width="130" height="82" fill="url(#cc1b)"/>
<path d="M0 56 Q32 48 65 54 Q98 60 130 52 L130 82 L0 82Z" fill="#100818"/>
<ellipse cx="50" cy="35" rx="10" ry="12" fill="#d4a060"/>
<path d="M42 28 L58 28 L56 22 L44 22Z" fill="#c08020"/>
<path d="M44 22 L46 14 L48 22Z" fill="#e0a030"/>
<rect x="48" y="35" width="3" height="16" fill="#1a2a4a"/>
<path d="M46 38 L40 44 L44 46 L48 40Z" fill="#1a2a4a"/>
<path d="M51 38 L57 44 L53 46 L51 40Z" fill="#162040"/>
<rect x="46" y="51" width="4" height="12" fill="#1a2a4a"/>
<rect x="50" y="51" width="4" height="12" fill="#162040"/>
<ellipse cx="85" cy="28" rx="8" ry="6" fill="#c03010" opacity=".9"/>
<path d="M80 26 Q85 22 90 26 Q88 32 85 34 Q82 32 80 26Z" fill="#e04020"/>
<circle cx="83" cy="25" r="1.2" fill="#1a0000"/><circle cx="87" cy="25" r="1.2" fill="#1a0000"/>
<path d="M82 29 Q85 27 88 29" stroke="#1a0000" stroke-width=".8" fill="none"/>
<path d="M51 37 L78 28" stroke="#8a6020" stroke-width="1.5" stroke-dasharray="2,2"/>
<circle cx="78" cy="28" r="2" fill="#c08020"/>
<path d="M10 62 Q25 58 40 62" stroke="#c08020" stroke-width="1.2" fill="none" opacity=".4"/>
<circle cx="110" cy="15" r="1.5" fill="#c08020" opacity=".4"/><circle cx="20" cy="12" r="1" fill="#c08020" opacity=".3"/>
</svg>`,

'Requin Fantôme': `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 130 82">
<defs><radialGradient id="rf1a" cx="50%" cy="50%"><stop offset="0%" stop-color="#0a1428"/><stop offset="100%" stop-color="#040810"/></radialGradient><radialGradient id="rf1b" cx="50%" cy="50%"><stop offset="0%" stop-color="#8080ff" stop-opacity=".35"/><stop offset="100%" stop-color="transparent"/></radialGradient><filter id="rf1f"><feGaussianBlur stdDeviation="3"/></filter></defs>
<rect width="130" height="82" fill="url(#rf1a)"/><rect width="130" height="82" fill="url(#rf1b)"/>
<ellipse cx="65" cy="42" rx="50" ry="30" fill="#2020a0" opacity=".15" filter="url(#rf1f)"/>
<path d="M15 45 Q65 20 115 45 L110 60 Q65 72 20 60Z" fill="#3040a0" opacity=".5"/>
<path d="M15 45 Q65 20 115 45 L110 60 Q65 72 20 60Z" fill="none" stroke="#8080ff" stroke-width="1.5" stroke-dasharray="3,2"/>
<path d="M30 45 L15 30 Q22 38 30 45Z" fill="#2030a0" opacity=".6"/>
<rect x="40" y="38" width="50" height="6" rx="3" fill="#202080" opacity=".7"/>
<circle cx="42" cy="41" r="3" fill="#0a0a20"/><circle cx="88" cy="41" r="3" fill="#0a0a20"/>
<circle cx="42" cy="41" r="1.5" fill="#80a0ff" opacity=".9"/><circle cx="88" cy="41" r="1.5" fill="#80a0ff" opacity=".9"/>
<path d="M105 45 L118 38 L118 52Z" fill="#2030a0" opacity=".6"/>
<path d="M55 30 L65 18 L75 30" fill="#2030a0" stroke="#8080ff" stroke-width="1" opacity=".7"/>
<path d="M35 42 L20 52 M95 42 L110 52" stroke="#8080ff" stroke-width=".8" fill="none" stroke-dasharray="2,2" opacity=".5"/>
<circle cx="20" cy="10" r="3" fill="#8080ff" opacity=".4" filter="url(#rf1f)"/>
<circle cx="108" cy="18" r="2" fill="#80c0ff" opacity=".4" filter="url(#rf1f)"/>
<circle cx="65" cy="42" rx="20" ry="10" fill="#4040ff" opacity=".08" filter="url(#rf1f)" r="20"/>
</svg>`,

'Poulpe Gardien': `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 130 82">
<defs><radialGradient id="pg1a" cx="50%" cy="55%"><stop offset="0%" stop-color="#0a1830"/><stop offset="100%" stop-color="#040c18"/></radialGradient><radialGradient id="pg1b" cx="50%" cy="50%"><stop offset="0%" stop-color="#a04080" stop-opacity=".4"/><stop offset="100%" stop-color="transparent"/></radialGradient></defs>
<rect width="130" height="82" fill="url(#pg1a)"/><rect width="130" height="82" fill="url(#pg1b)"/>
<ellipse cx="65" cy="36" rx="22" ry="18" fill="#8030a0" opacity=".9"/>
<ellipse cx="65" cy="36" rx="22" ry="18" fill="none" stroke="#c060e0" stroke-width="1.5"/>
<ellipse cx="65" cy="30" rx="14" ry="10" fill="#9040b0" opacity=".8"/>
<circle cx="58" cy="30" r="4.5" fill="#200830"/><circle cx="72" cy="30" r="4.5" fill="#200830"/>
<circle cx="58" cy="30" r="2" fill="#ff80ff" opacity=".9"/><circle cx="72" cy="30" r="2" fill="#ff80ff" opacity=".9"/>
<path d="M48 48 Q40 60 36 72 Q44 64 46 55 Q48 64 50 74" stroke="#702090" stroke-width="5" fill="none" stroke-linecap="round"/>
<path d="M58 52 Q52 62 52 74" stroke="#702090" stroke-width="4" fill="none" stroke-linecap="round"/>
<path d="M65 54 Q65 65 65 76" stroke="#8030a0" stroke-width="4.5" fill="none" stroke-linecap="round"/>
<path d="M72 52 Q78 62 78 74" stroke="#702090" stroke-width="4" fill="none" stroke-linecap="round"/>
<path d="M82 48 Q90 60 94 72 Q86 64 84 55 Q80 64 80 74" stroke="#702090" stroke-width="5" fill="none" stroke-linecap="round"/>
<ellipse cx="65" cy="42" rx="12" ry="6" fill="#c060e0" opacity=".2"/>
<circle cx="15" cy="12" r="2" fill="#c060e0" opacity=".4"/><circle cx="112" cy="20" r="1.5" fill="#ff80ff" opacity=".35"/>
</svg>`,

'Thon Rapide': `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 130 82">
<defs><linearGradient id="tr1a" x1="0" y1="0" x2="1" y2="1"><stop offset="0%" stop-color="#061828"/><stop offset="100%" stop-color="#040e1c"/></linearGradient><radialGradient id="tr1b" cx="60%" cy="45%"><stop offset="0%" stop-color="#2080c0" stop-opacity=".4"/><stop offset="100%" stop-color="transparent"/></radialGradient></defs>
<rect width="130" height="82" fill="url(#tr1a)"/><rect width="130" height="82" fill="url(#tr1b)"/>
<path d="M0 58 Q32 50 65 56 Q98 62 130 54 L130 82 L0 82Z" fill="#040e1c"/>
<path d="M5 42 Q40 28 85 38 Q100 44 110 42 Q100 50 85 48 Q40 52 5 58Z" fill="#2880c0" opacity=".9"/>
<path d="M5 42 Q40 28 85 38 Q100 44 110 42" fill="none" stroke="#60b0e0" stroke-width="1.5"/>
<path d="M85 38 Q110 42 122 34 L122 50 Q110 54 85 48Z" fill="#1860a0"/>
<path d="M40 28 Q45 18 52 24 Q48 28 40 28Z" fill="#2880c0" stroke="#60b0e0" stroke-width=".8"/>
<circle cx="10" cy="46" r="4" fill="#102050"/><circle cx="10" cy="46" r="1.8" fill="#fff" opacity=".3"/>
<path d="M20 38 L28 30 M35 32 L40 22 M50 30 L52 20" stroke="#60b0e0" stroke-width=".8" fill="none" opacity=".5"/>
<path d="M12 62 Q25 58 38 62" stroke="#2880c0" stroke-width="1.2" fill="none" opacity=".4"/>
<path d="M90 58 Q105 54 118 58" stroke="#2880c0" stroke-width="1" fill="none" opacity=".35"/>
</svg>`,

'Naga Mystique': `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 130 82">
<defs><radialGradient id="nm1a" cx="50%" cy="45%"><stop offset="0%" stop-color="#100830"/><stop offset="100%" stop-color="#040210"/></radialGradient><radialGradient id="nm1b" cx="50%" cy="40%"><stop offset="0%" stop-color="#4040c0" stop-opacity=".5"/><stop offset="100%" stop-color="transparent"/></radialGradient><filter id="nm1f"><feGaussianBlur stdDeviation="2"/></filter></defs>
<rect width="130" height="82" fill="url(#nm1a)"/><rect width="130" height="82" fill="url(#nm1b)"/>
<path d="M20 60 Q50 24 80 40 Q100 52 110 40 Q118 28 108 20 Q95 14 82 22 Q60 36 45 55 Q35 68 20 60Z" fill="#2040a0" opacity=".9"/>
<path d="M20 60 Q50 24 80 40 Q100 52 110 40 Q118 28 108 20" fill="none" stroke="#6080ff" stroke-width="2"/>
<ellipse cx="108" cy="20" rx="9" ry="7" fill="#3050b0"/>
<circle cx="104" cy="18" r="3.5" fill="#100830"/><circle cx="104" cy="18" r="1.5" fill="#a0c0ff" opacity=".9"/>
<circle cx="112" cy="18" r="3.5" fill="#100830"/><circle cx="112" cy="18" r="1.5" fill="#a0c0ff" opacity=".9"/>
<path d="M102 22 L98 28 M114 22 L118 28" stroke="#3050b0" stroke-width="2" stroke-linecap="round"/>
<circle cx="50" cy="36" r="8" fill="#4060c0" opacity=".4" filter="url(#nm1f)"/>
<circle cx="80" cy="40" r="6" fill="#4060c0" opacity=".35" filter="url(#nm1f)"/>
<path d="M30 56 Q20 64 14 72" stroke="#4060c0" stroke-width="2.5" fill="none" stroke-linecap="round"/>
<circle cx="40" cy="12" r="3" fill="#a0c0ff" opacity=".5" filter="url(#nm1f)"/>
<circle cx="15" cy="30" r="2" fill="#6080ff" opacity=".4"/>
<circle cx="118" cy="55" r="2.5" fill="#6080ff" opacity=".3" filter="url(#nm1f)"/>
</svg>`,

'Élémental des Tempêtes': `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 130 82">
<defs><radialGradient id="et1a" cx="50%" cy="40%"><stop offset="0%" stop-color="#0a0a20"/><stop offset="100%" stop-color="#040408"/></radialGradient><radialGradient id="et1b" cx="50%" cy="40%"><stop offset="0%" stop-color="#8080ff" stop-opacity=".4"/><stop offset="100%" stop-color="transparent"/></radialGradient><filter id="et1f"><feGaussianBlur stdDeviation="2.5"/></filter></defs>
<rect width="130" height="82" fill="url(#et1a)"/><rect width="130" height="82" fill="url(#et1b)"/>
<ellipse cx="65" cy="40" rx="28" ry="32" fill="#2020a0" opacity=".3" filter="url(#et1f)"/>
<path d="M50 68 Q55 50 48 34 Q44 22 52 16 Q60 10 65 18 Q70 10 78 16 Q86 22 82 34 Q75 50 80 68 Q72 58 65 54 Q58 58 50 68Z" fill="#3030c0" opacity=".9"/>
<path d="M50 68 Q55 50 48 34 Q44 22 52 16 Q60 10 65 18" fill="none" stroke="#a0a0ff" stroke-width="1.5"/>
<path d="M80 68 Q75 50 82 34 Q86 22 78 16 Q70 10 65 18" fill="none" stroke="#a0a0ff" stroke-width="1.5"/>
<path d="M55 28 L62 16 L59 28 L68 12 L64 28 L72 18" stroke="#ffffaa" stroke-width="2" fill="none" stroke-linecap="round"/>
<path d="M42 38 L30 44 L48 42 L36 52" stroke="#ffffaa" stroke-width="2" fill="none" stroke-linecap="round"/>
<path d="M88 38 L100 44 L82 42 L94 52" stroke="#ffffaa" stroke-width="2" fill="none" stroke-linecap="round"/>
<circle cx="57" cy="35" r="5" fill="#100a40"/><circle cx="73" cy="35" r="5" fill="#100a40"/>
<circle cx="57" cy="35" r="2.5" fill="#ffffaa" opacity=".9"/><circle cx="73" cy="35" r="2.5" fill="#ffffaa" opacity=".9"/>
<path d="M58 42 Q65 38 72 42" stroke="#a0a0ff" stroke-width="1.5" fill="none"/>
<circle cx="65" cy="30" r="10" fill="#8080ff" opacity=".1" filter="url(#et1f)"/>
<circle cx="15" cy="12" r="2" fill="#ffffaa" opacity=".4"/><circle cx="112" cy="8" r="1.5" fill="#ffffaa" opacity=".35"/>
</svg>`,

'Naga des Coraux': `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 130 82">
<defs><linearGradient id="nc1a" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stop-color="#061828"/><stop offset="100%" stop-color="#040c14"/></linearGradient><radialGradient id="nc1b" cx="50%" cy="50%"><stop offset="0%" stop-color="#20c080" stop-opacity=".35"/><stop offset="100%" stop-color="transparent"/></radialGradient></defs>
<rect width="130" height="82" fill="url(#nc1a)"/><rect width="130" height="82" fill="url(#nc1b)"/>
<path d="M0 58 Q32 50 65 56 Q98 62 130 54 L130 82 L0 82Z" fill="#040c14"/>
<path d="M25 52 Q40 30 60 28 Q80 26 90 40 Q96 50 88 56 Q72 62 55 52 Q45 46 38 54 Q30 60 25 52Z" fill="#186060" opacity=".9"/>
<ellipse cx="60" cy="30" rx="10" ry="12" fill="#20a070"/>
<circle cx="56" cy="27" r="3.5" fill="#103030"/><circle cx="56" cy="27" r="1.5" fill="#60ffb0" opacity=".9"/>
<circle cx="64" cy="27" r="3.5" fill="#103030"/><circle cx="64" cy="27" r="1.5" fill="#60ffb0" opacity=".9"/>
<path d="M54 20 L52 14 M60 18 L60 12 M66 20 L68 14" stroke="#20a070" stroke-width="1.5" stroke-linecap="round"/>
<path d="M25 52 Q18 62 14 72" stroke="#186060" stroke-width="3.5" fill="none" stroke-linecap="round"/>
<path d="M60 60 Q65 70 62 78" stroke="#186060" stroke-width="3" fill="none" stroke-linecap="round"/>
<ellipse cx="95" cy="55" rx="8" ry="12" fill="#c04040" opacity=".8" rx="3" ry="6"/>
<path d="M92 48 L95 44 L98 48 M90 52 L87 55 L90 58 M100 52 L103 55 L100 58" stroke="#e06060" stroke-width="1.2" fill="none"/>
<ellipse cx="110" cy="60" rx="5" ry="8" fill="#c04040" opacity=".6"/>
<path d="M107 54 L110 50 L113 54" stroke="#e06060" stroke-width="1" fill="none"/>
<circle cx="20" cy="14" r="2" fill="#60ffb0" opacity=".35"/><circle cx="108" cy="12" r="1.5" fill="#60ffb0" opacity=".3"/>
</svg>`,

/* ── Nouvelles cartes ── */
'Corsaire du Nord': `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 130 82">
<defs>
  <linearGradient id="cno1a" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stop-color="#0a1e38"/><stop offset="100%" stop-color="#050e22"/></linearGradient>
  <radialGradient id="cno1b" cx="55%" cy="35%"><stop offset="0%" stop-color="#80e0ff" stop-opacity=".4"/><stop offset="100%" stop-color="transparent"/></radialGradient>
  <filter id="cno1f"><feGaussianBlur stdDeviation="2"/></filter>
</defs>
<rect width="130" height="82" fill="url(#cno1a)"/>
<rect width="130" height="82" fill="url(#cno1b)"/>
<path d="M0 58 Q32 50 65 56 Q98 62 130 54 L130 82 L0 82Z" fill="#04080e"/>
<ellipse cx="60" cy="38" rx="14" ry="17" fill="#a0c8e0"/>
<path d="M48 26 L72 26 L70 20 L50 20Z" fill="#c0e0ff"/>
<path d="M50 20 L52 12 L54 20Z" fill="#80c0ff"/>
<rect x="58" y="43" width="4" height="16" fill="#1a3a60"/>
<path d="M56 46 L50 52 L54 54 L58 48Z" fill="#1a3a60"/>
<path d="M62 46 L68 52 L64 54 L62 48Z" fill="#162a50"/>
<rect x="56" y="59" width="4" height="12" fill="#1a3a60"/>
<rect x="60" y="59" width="4" height="12" fill="#162a50"/>
<ellipse cx="60" cy="30" rx="6" ry="7" fill="#d0e8ff"/>
<circle cx="57" cy="28" r="1.5" fill="#1a2a40"/>
<circle cx="63" cy="28" r="1.5" fill="#1a2a40"/>
<path d="M57 32 Q60 30 63 32" stroke="#1a2a40" stroke-width=".8" fill="none"/>
<path d="M30 18 Q45 12 55 20" stroke="#80c0ff" stroke-width="1.2" fill="none" opacity=".6" stroke-dasharray="3,2"/>
<circle cx="28" cy="17" r="3" fill="#a0d0ff" opacity=".5" filter="url(#cno1f)"/>
<path d="M10 38 L18 28 L22 38 L18 48Z" fill="#80c0ff" opacity=".5"/>
<path d="M100 30 L108 20 L112 30 L108 40Z" fill="#80c0ff" opacity=".4"/>
</svg>`,

'Boucanier Féroce': `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 130 82">
<defs>
  <radialGradient id="bou1a" cx="45%" cy="40%"><stop offset="0%" stop-color="#2a0a08"/><stop offset="100%" stop-color="#0a0404"/></radialGradient>
  <radialGradient id="bou1b" cx="45%" cy="35%"><stop offset="0%" stop-color="#c04010" stop-opacity=".5"/><stop offset="100%" stop-color="transparent"/></radialGradient>
  <filter id="bou1f"><feGaussianBlur stdDeviation="1.5"/></filter>
</defs>
<rect width="130" height="82" fill="url(#bou1a)"/>
<rect width="130" height="82" fill="url(#bou1b)"/>
<path d="M0 60 Q32 52 65 58 Q98 64 130 56 L130 82 L0 82Z" fill="#080404"/>
<ellipse cx="52" cy="34" rx="11" ry="13" fill="#d4905a"/>
<path d="M43 24 L61 24 L59 18 L45 18Z" fill="#1a0808"/>
<path d="M45 18 L43 10 L47 11 L46 18Z" fill="#e0c030" opacity=".8"/>
<circle cx="50" cy="24" r="2" fill="#e0c030"/>
<rect x="50" y="47" width="3.5" height="14" fill="#1a1a2a"/>
<path d="M48 50 L42 56 L46 58 L50 52Z" fill="#2a2a3a"/>
<rect x="53.5" y="47" width="3.5" height="14" fill="#141420"/>
<path d="M57 48 L66 34 L72 38 L62 48Z" fill="#3a3a4a" stroke="#aaa" stroke-width="1"/>
<path d="M66 34 L80 28 L82 32 L72 38Z" fill="#505060" stroke="#ddd" stroke-width=".8"/>
<path d="M34 40 L18 28 L20 22 L36 36Z" fill="#504040" stroke="#888" stroke-width="1"/>
<path d="M18 28 L10 16 L14 14 L20 22Z" fill="#403030"/>
<circle cx="16" cy="12" r="2" fill="#c04010" opacity=".4" filter="url(#bou1f)"/>
</svg>`,

'Navigatrice des Brumes': `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 130 82">
<defs>
  <linearGradient id="nav1a" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stop-color="#0a0a20"/><stop offset="100%" stop-color="#060610"/></linearGradient>
  <radialGradient id="nav1b" cx="55%" cy="45%"><stop offset="0%" stop-color="#8060c0" stop-opacity=".45"/><stop offset="100%" stop-color="transparent"/></radialGradient>
  <filter id="nav1f"><feGaussianBlur stdDeviation="3"/></filter>
</defs>
<rect width="130" height="82" fill="url(#nav1a)"/>
<rect width="130" height="82" fill="url(#nav1b)"/>
<ellipse cx="65" cy="45" rx="50" ry="28" fill="#4030a0" opacity=".12" filter="url(#nav1f)"/>
<ellipse cx="60" cy="34" rx="11" ry="14" fill="#c49a70"/>
<path d="M51 22 L69 22 L67 16 L53 16Z" fill="#6040a0"/>
<path d="M53 16 L55 8 L57 16Z" fill="#a080d0"/>
<rect x="58" y="48" width="4" height="15" fill="#2a1a4a"/>
<path d="M56 52 L49 58 L54 60 L58 54Z" fill="#2a1a4a"/>
<path d="M62 52 L69 58 L64 60 L62 54Z" fill="#221440"/>
<rect x="56" y="63" width="4" height="10" fill="#2a1a4a"/>
<rect x="60" y="63" width="4" height="10" fill="#221440"/>
<ellipse cx="60" cy="27" rx="6.5" ry="7.5" fill="#d4a880"/>
<circle cx="57" cy="25" r="1.5" fill="#2a1040"/>
<circle cx="63" cy="25" r="1.5" fill="#2a1040"/>
<path d="M56 29 Q60 27 64 29" stroke="#2a1040" stroke-width=".8" fill="none"/>
<path d="M20 38 Q40 28 60 34" stroke="#8060c0" stroke-width="1.5" fill="none" opacity=".3" filter="url(#nav1f)"/>
<path d="M80 32 Q100 24 120 30" stroke="#8060c0" stroke-width="1.5" fill="none" opacity=".3" filter="url(#nav1f)"/>
<circle cx="95" cy="14" r="2" fill="#a080d0" opacity=".5"/>
<circle cx="18" cy="18" r="2.5" fill="#8060c0" opacity=".4"/>
</svg>`,

'Crevette Rapide': `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 130 82">
<defs>
  <linearGradient id="cre1a" x1="0" y1="0" x2="1" y2="0"><stop offset="0%" stop-color="#061828"/><stop offset="100%" stop-color="#0a1e30"/></linearGradient>
  <radialGradient id="cre1b" cx="55%" cy="45%"><stop offset="0%" stop-color="#ff8040" stop-opacity=".4"/><stop offset="100%" stop-color="transparent"/></radialGradient>
</defs>
<rect width="130" height="82" fill="url(#cre1a)"/>
<rect width="130" height="82" fill="url(#cre1b)"/>
<path d="M0 60 Q32 52 65 58 Q98 64 130 56 L130 82 L0 82Z" fill="#040c14"/>
<path d="M30 48 Q50 30 80 36 Q95 40 100 48 Q90 52 70 50 Q55 48 45 52 Q36 56 30 48Z" fill="#e05020" opacity=".9"/>
<path d="M30 48 Q50 30 80 36 Q95 40 100 48" fill="none" stroke="#ff8040" stroke-width="1.5"/>
<path d="M80 36 Q100 30 110 38 L106 46 Q95 46 80 36Z" fill="#c03010"/>
<circle cx="34" cy="47" r="3.5" fill="#1a0a04"/>
<circle cx="34" cy="47" r="1.5" fill="#ffaa60" opacity=".9"/>
<path d="M40 34 L32 26 M46 30 L40 22 M52 28 L48 20" stroke="#ff8040" stroke-width="1" fill="none" opacity=".7"/>
<path d="M30 46 L18 40 L14 46 M30 50 L16 50 L14 56" stroke="#c03010" stroke-width="2" fill="none" stroke-linecap="round"/>
<path d="M44 52 L38 60 M55 54 L52 62 M66 52 L65 62" stroke="#c03010" stroke-width="2" fill="none" stroke-linecap="round"/>
<path d="M70 42 L76 34 L80 42" fill="#ff6030" stroke="#ff8040" stroke-width=".8"/>
</svg>`,

'Hippocampe Blindé': `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 130 82">
<defs>
  <linearGradient id="hib1a" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stop-color="#061a2e"/><stop offset="100%" stop-color="#03080e"/></linearGradient>
  <radialGradient id="hib1b" cx="50%" cy="45%"><stop offset="0%" stop-color="#40c0a0" stop-opacity=".4"/><stop offset="100%" stop-color="transparent"/></radialGradient>
  <filter id="hib1f"><feGaussianBlur stdDeviation="2"/></filter>
</defs>
<rect width="130" height="82" fill="url(#hib1a)"/>
<rect width="130" height="82" fill="url(#hib1b)"/>
<path d="M60 14 Q68 12 72 20 Q74 28 68 36 Q62 44 58 52 Q54 60 56 68" stroke="#40c0a0" stroke-width="7" fill="none" stroke-linecap="round"/>
<path d="M60 14 Q68 12 72 20 Q74 28 68 36 Q62 44 58 52 Q54 60 56 68" stroke="#80e0c0" stroke-width="3" fill="none" stroke-linecap="round" opacity=".5"/>
<ellipse cx="65" cy="16" rx="8" ry="7" fill="#3ab090"/>
<circle cx="62" cy="14" r="2.5" fill="#081a14"/>
<circle cx="62" cy="14" r="1" fill="#60ffc0" opacity=".9"/>
<path d="M68 12 L78 8 L76 14 L70 14Z" fill="#30a080"/>
<path d="M74 22 L86 18 L84 26 L74 26Z" fill="#30a080" opacity=".8"/>
<path d="M72 32 L82 30 L80 36 L72 36Z" fill="#30a080" opacity=".7"/>
<path d="M56 68 Q50 74 52 78 Q58 74 62 78 Q60 74 56 68Z" fill="#30a080"/>
<ellipse cx="65" cy="35" rx="18" ry="20" fill="#30a080" opacity=".1" filter="url(#hib1f)"/>
<circle cx="20" cy="14" r="2" fill="#40c0a0" opacity=".4"/>
<circle cx="108" cy="12" r="1.5" fill="#60e0c0" opacity=".35"/>
</svg>`,

'Pieuvre Géante': `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 130 82">
<defs>
  <radialGradient id="pie1a" cx="50%" cy="55%"><stop offset="0%" stop-color="#1a0428"/><stop offset="100%" stop-color="#04020c"/></radialGradient>
  <radialGradient id="pie1b" cx="50%" cy="50%"><stop offset="0%" stop-color="#8000d0" stop-opacity=".6"/><stop offset="100%" stop-color="transparent"/></radialGradient>
  <filter id="pie1f"><feGaussianBlur stdDeviation="3.5"/></filter>
</defs>
<rect width="130" height="82" fill="url(#pie1a)"/>
<rect width="130" height="82" fill="url(#pie1b)"/>
<ellipse cx="65" cy="50" rx="55" ry="38" fill="#3a0080" opacity=".3" filter="url(#pie1f)"/>
<ellipse cx="65" cy="38" rx="30" ry="24" fill="#3a0060" opacity=".95"/>
<ellipse cx="65" cy="38" rx="30" ry="24" fill="none" stroke="#8020c0" stroke-width="2.5"/>
<ellipse cx="65" cy="30" rx="20" ry="14" fill="#5000a0" opacity=".9"/>
<circle cx="52" cy="30" r="7" fill="#200040"/>
<circle cx="78" cy="30" r="7" fill="#200040"/>
<circle cx="52" cy="30" r="3.5" fill="#e040ff" opacity=".9"/>
<circle cx="78" cy="30" r="3.5" fill="#e040ff" opacity=".9"/>
<path d="M42 56 Q28 66 20 78 Q32 68 38 60 Q32 70 28 80" stroke="#5a00a0" stroke-width="5" fill="none" stroke-linecap="round" opacity=".9"/>
<path d="M54 60 Q44 70 42 80" stroke="#5a00a0" stroke-width="4" fill="none" stroke-linecap="round" opacity=".85"/>
<path d="M65 62 Q65 72 65 82" stroke="#6000b0" stroke-width="5" fill="none" stroke-linecap="round" opacity=".9"/>
<path d="M76 60 Q86 70 88 80" stroke="#5a00a0" stroke-width="4" fill="none" stroke-linecap="round" opacity=".85"/>
<path d="M88 56 Q102 66 110 78 Q98 68 92 60 Q98 70 102 80" stroke="#5a00a0" stroke-width="5" fill="none" stroke-linecap="round" opacity=".9"/>
<path d="M36 52 Q20 54 10 64" stroke="#4a0090" stroke-width="3.5" fill="none" stroke-linecap="round" opacity=".8"/>
<path d="M94 52 Q110 54 120 64" stroke="#4a0090" stroke-width="3.5" fill="none" stroke-linecap="round" opacity=".8"/>
<circle cx="15" cy="10" r="2" fill="#8020c0" opacity=".5"/>
</svg>`,

'Lutin des Eaux': `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 130 82">
<defs>
  <radialGradient id="lut1a" cx="50%" cy="45%"><stop offset="0%" stop-color="#041828"/><stop offset="100%" stop-color="#020810"/></radialGradient>
  <radialGradient id="lut1b" cx="50%" cy="40%"><stop offset="0%" stop-color="#20c0c0" stop-opacity=".45"/><stop offset="100%" stop-color="transparent"/></radialGradient>
  <filter id="lut1f"><feGaussianBlur stdDeviation="2.5"/></filter>
</defs>
<rect width="130" height="82" fill="url(#lut1a)"/>
<rect width="130" height="82" fill="url(#lut1b)"/>
<ellipse cx="65" cy="38" rx="18" ry="22" fill="#10a0a0" opacity=".25" filter="url(#lut1f)"/>
<ellipse cx="65" cy="38" rx="10" ry="14" fill="#10a090"/>
<ellipse cx="65" cy="30" rx="8" ry="9" fill="#20c0b0"/>
<circle cx="61" cy="28" r="2.5" fill="#041418"/>
<circle cx="69" cy="28" r="2.5" fill="#041418"/>
<circle cx="61" cy="28" r="1" fill="#80ffee" opacity=".9"/>
<circle cx="69" cy="28" r="1" fill="#80ffee" opacity=".9"/>
<path d="M60 33 Q65 31 70 33" stroke="#041418" stroke-width=".8" fill="none"/>
<path d="M58 24 L54 16 L62 20Z" fill="#10a090"/>
<path d="M72 24 L76 16 L68 20Z" fill="#10a090"/>
<path d="M57 40 L48 50 L52 52 L58 44Z" fill="#0e9080" stroke="#20c0b0" stroke-width=".8"/>
<path d="M73 40 L82 50 L78 52 L72 44Z" fill="#0e9080" stroke="#20c0b0" stroke-width=".8"/>
<path d="M61 52 L58 64 M65 54 L65 66 M69 52 L72 64" stroke="#0e9080" stroke-width="3" fill="none" stroke-linecap="round"/>
<circle cx="40" cy="18" r="5" fill="#20c0c0" opacity=".3" filter="url(#lut1f)"/>
<circle cx="92" cy="15" r="4" fill="#20c0c0" opacity=".25" filter="url(#lut1f)"/>
<circle cx="18" cy="40" r="2.5" fill="#40e0d0" opacity=".4"/>
</svg>`,

'Golem Corail': `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 130 82">
<defs>
  <radialGradient id="gco1a" cx="50%" cy="55%"><stop offset="0%" stop-color="#0a1008"/><stop offset="100%" stop-color="#040804"/></radialGradient>
  <radialGradient id="gco1b" cx="50%" cy="50%"><stop offset="0%" stop-color="#e06040" stop-opacity=".4"/><stop offset="100%" stop-color="transparent"/></radialGradient>
  <filter id="gco1f"><feGaussianBlur stdDeviation="2"/></filter>
</defs>
<rect width="130" height="82" fill="url(#gco1a)"/>
<rect width="130" height="82" fill="url(#gco1b)"/>
<ellipse cx="65" cy="52" rx="28" ry="14" fill="#605040" opacity=".9"/>
<rect x="50" y="32" width="30" height="22" rx="4" fill="#706050"/>
<rect x="50" y="32" width="30" height="22" rx="4" fill="none" stroke="#908070" stroke-width="1.5"/>
<rect x="55" y="18" width="20" height="16" rx="3" fill="#605040"/>
<rect x="55" y="18" width="20" height="16" rx="3" fill="none" stroke="#907060" stroke-width="1.2"/>
<circle cx="60" cy="24" r="4" fill="#302010"/>
<circle cx="70" cy="24" r="4" fill="#302010"/>
<circle cx="60" cy="24" r="2" fill="#ff8040" opacity=".8"/>
<circle cx="70" cy="24" r="2" fill="#ff8040" opacity=".8"/>
<path d="M42 36 L28 46 L26 54 L36 52 L40 44Z" fill="#604030" stroke="#807060" stroke-width="1"/>
<path d="M88 36 L102 46 L104 54 L94 52 L90 44Z" fill="#604030" stroke="#807060" stroke-width="1"/>
<path d="M57 54 L52 66 L60 64 L62 54Z" fill="#605040"/>
<path d="M73 54 L78 66 L70 64 L68 54Z" fill="#605040"/>
<path d="M55 32 L50 24 L48 30 L52 34Z" fill="#c05020" opacity=".8"/>
<path d="M64 18 L62 8 L66 8 L68 18Z" fill="#e07030" opacity=".8"/>
<path d="M75 32 L80 24 L82 30 L78 34Z" fill="#c05020" opacity=".8"/>
<circle cx="18" cy="14" r="2" fill="#e07030" opacity=".4" filter="url(#gco1f)"/>
</svg>`,

/* ── Sorts — nouveaux ── */
'Vent de Givre': `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 130 82">
<defs>
  <radialGradient id="vgf1a" cx="50%" cy="50%"><stop offset="0%" stop-color="#060e20"/><stop offset="100%" stop-color="#020810"/></radialGradient>
  <radialGradient id="vgf1b" cx="50%" cy="40%"><stop offset="0%" stop-color="#80e0ff" stop-opacity=".5"/><stop offset="100%" stop-color="transparent"/></radialGradient>
  <filter id="vgf1f"><feGaussianBlur stdDeviation="3"/></filter>
</defs>
<rect width="130" height="82" fill="url(#vgf1a)"/>
<rect width="130" height="82" fill="url(#vgf1b)"/>
<ellipse cx="65" cy="38" rx="35" ry="25" fill="#40a0d0" opacity=".15" filter="url(#vgf1f)"/>
<line x1="65" y1="8" x2="65" y2="72" stroke="#c0e8ff" stroke-width="2" opacity=".8"/>
<line x1="30" y1="26" x2="100" y2="54" stroke="#c0e8ff" stroke-width="2" opacity=".8"/>
<line x1="100" y1="26" x2="30" y2="54" stroke="#c0e8ff" stroke-width="2" opacity=".8"/>
<line x1="65" y1="8" x2="50" y2="20" stroke="#c0e8ff" stroke-width="1.5" opacity=".6"/>
<line x1="65" y1="8" x2="80" y2="20" stroke="#c0e8ff" stroke-width="1.5" opacity=".6"/>
<line x1="65" y1="72" x2="50" y2="60" stroke="#c0e8ff" stroke-width="1.5" opacity=".6"/>
<line x1="65" y1="72" x2="80" y2="60" stroke="#c0e8ff" stroke-width="1.5" opacity=".6"/>
<line x1="30" y1="26" x2="38" y2="32" stroke="#c0e8ff" stroke-width="1.5" opacity=".6"/>
<line x1="30" y1="26" x2="22" y2="34" stroke="#c0e8ff" stroke-width="1.5" opacity=".6"/>
<line x1="100" y1="54" x2="108" y2="48" stroke="#c0e8ff" stroke-width="1.5" opacity=".6"/>
<line x1="100" y1="54" x2="108" y2="60" stroke="#c0e8ff" stroke-width="1.5" opacity=".6"/>
<circle cx="65" cy="38" r="8" fill="#80d0ff" opacity=".9"/>
<circle cx="65" cy="38" r="4" fill="#ffffff" opacity=".7"/>
<circle cx="65" cy="38" r="14" fill="none" stroke="#80d0ff" stroke-width="1.5" opacity=".5" stroke-dasharray="3,3"/>
<circle cx="30" cy="15" r="2" fill="#c0e8ff" opacity=".4"/>
<circle cx="15" cy="55" r="2.5" fill="#c0e8ff" opacity=".3"/>
</svg>`,

'Cannonade': `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 130 82">
<defs>
  <radialGradient id="can1a" cx="50%" cy="50%"><stop offset="0%" stop-color="#1e0a04"/><stop offset="100%" stop-color="#080404"/></radialGradient>
  <radialGradient id="can1b" cx="50%" cy="40%"><stop offset="0%" stop-color="#ff8000" stop-opacity=".6"/><stop offset="100%" stop-color="transparent"/></radialGradient>
  <filter id="can1f"><feGaussianBlur stdDeviation="3"/></filter>
</defs>
<rect width="130" height="82" fill="url(#can1a)"/>
<rect width="130" height="82" fill="url(#can1b)"/>
<ellipse cx="55" cy="44" rx="30" ry="22" fill="#ff6000" opacity=".2" filter="url(#can1f)"/>
<rect x="18" y="44" width="55" height="16" rx="8" fill="#3a3a3a" stroke="#606060" stroke-width="1.5"/>
<rect x="10" y="48" width="8" height="8" rx="2" fill="#2a2a2a" stroke="#505050" stroke-width="1"/>
<ellipse cx="73" cy="52" rx="6" ry="7" fill="#2a2a2a" stroke="#505050" stroke-width="1.2"/>
<circle cx="85" cy="30" r="10" fill="#404040" stroke="#606060" stroke-width="1.5"/>
<circle cx="85" cy="30" r="6" fill="#303030" stroke="#505050" stroke-width="1"/>
<path d="M90 22 L108 8 L112 14 L94 28Z" fill="#ff8000" opacity=".9"/>
<path d="M108 8 L120 6 L116 14 L112 14Z" fill="#ffaa00" opacity=".9"/>
<ellipse cx="100" cy="16" r="8" fill="#ff6000" opacity=".3" filter="url(#can1f)"/>
<path d="M108 8 L118 2 M112 6 L122 4" stroke="#ff8000" stroke-width="1" fill="none" opacity=".5"/>
<circle cx="15" cy="18" r="2" fill="#ff8000" opacity=".3"/>
</svg>`,

'Récif Enchanté': `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 130 82">
<defs>
  <radialGradient id="ren1a" cx="50%" cy="60%"><stop offset="0%" stop-color="#04101a"/><stop offset="100%" stop-color="#020810"/></radialGradient>
  <radialGradient id="ren1b" cx="50%" cy="55%"><stop offset="0%" stop-color="#ff6080" stop-opacity=".4"/><stop offset="100%" stop-color="transparent"/></radialGradient>
  <filter id="ren1f"><feGaussianBlur stdDeviation="2.5"/></filter>
</defs>
<rect width="130" height="82" fill="url(#ren1a)"/>
<rect width="130" height="82" fill="url(#ren1b)"/>
<path d="M0 65 Q32 58 65 63 Q98 68 130 61 L130 82 L0 82Z" fill="#030c12"/>
<path d="M30 65 L30 44 L34 38 L38 44 L38 65Z" fill="#e05060"/>
<path d="M34 38 L30 28 L34 32 L38 28Z" fill="#ff8090"/>
<path d="M38 42 L44 38 L46 44Z" fill="#e05060"/>
<path d="M28 42 L22 38 L20 44Z" fill="#e05060"/>
<path d="M55 65 L55 40 L60 34 L65 40 L65 65Z" fill="#c03060"/>
<path d="M60 34 L55 22 L60 26 L65 22Z" fill="#ff6080"/>
<path d="M65 38 L72 34 L74 40Z" fill="#c03060"/>
<path d="M55 38 L48 32 L46 38Z" fill="#c03060"/>
<path d="M88 65 L88 48 L92 42 L96 48 L96 65Z" fill="#e06080"/>
<path d="M92 42 L88 30 L92 34 L96 30Z" fill="#ff80a0"/>
<path d="M96 46 L102 42 L104 48Z" fill="#e06080"/>
<path d="M88 46 L82 42 L80 48Z" fill="#e06080"/>
<ellipse cx="65" cy="50" rx="45" ry="18" fill="#ff8090" opacity=".12" filter="url(#ren1f)"/>
<path d="M0 70 Q32 64 65 69 Q98 74 130 67" stroke="#40c0e0" stroke-width="1.2" fill="none" opacity=".5"/>
<circle cx="20" cy="38" r="2.5" fill="#ff80a0" opacity=".5" filter="url(#ren1f)"/>
<circle cx="110" cy="32" r="2" fill="#ff80a0" opacity=".4" filter="url(#ren1f)"/>
</svg>`,

/* ── Sorts — originaux ── */
'Tempête des Mers': `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 130 82">
<defs><linearGradient id="ts1a" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stop-color="#0a1428"/><stop offset="100%" stop-color="#061020"/></linearGradient><radialGradient id="ts1b" cx="50%" cy="30%"><stop offset="0%" stop-color="#204880" stop-opacity=".8"/><stop offset="100%" stop-color="transparent"/></radialGradient></defs>
<rect width="130" height="82" fill="url(#ts1a)"/><rect width="130" height="82" fill="url(#ts1b)"/>
<path d="M-10 28 Q20 18 40 26 Q60 34 80 22 Q100 10 130 20 L130 38 Q100 28 80 40 Q60 52 40 44 Q20 36 -10 46Z" fill="#1a4080" opacity=".9"/>
<path d="M-10 44 Q20 34 40 42 Q60 50 80 38 Q100 26 130 36 L130 56 Q100 46 80 58 Q60 70 40 62 Q20 54 -10 62Z" fill="#2050a0" opacity=".85"/>
<path d="M-10 60 Q20 52 40 58 Q60 64 80 54 Q100 44 130 52 L130 72 Q100 64 80 72 Q60 80 40 76 Q20 70 -10 76Z" fill="#1a3870" opacity=".8"/>
<path d="M-10 28 Q20 18 40 26 Q60 34 80 22 Q100 10 130 20" stroke="#4080c0" stroke-width="1.5" fill="none" opacity=".7"/>
<path d="M-10 44 Q20 34 40 42 Q60 50 80 38 Q100 26 130 36" stroke="#4080c0" stroke-width="1.5" fill="none" opacity=".6"/>
<path d="M60 2 L66 14 L56 12 L64 24 L54 22" stroke="#ffe040" stroke-width="2" fill="none" stroke-linecap="round"/>
<path d="M82 6 L88 18 L78 16 L86 28" stroke="#ffe040" stroke-width="2" fill="none" stroke-linecap="round"/>
<path d="M38 4 L44 16 L34 14 L42 26" stroke="#ffe040" stroke-width="1.5" fill="none" stroke-linecap="round"/>
</svg>`,

'Maelström': `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 130 82">
<defs><radialGradient id="ml1a" cx="50%" cy="50%"><stop offset="0%" stop-color="#1a0438"/><stop offset="100%" stop-color="#04020c"/></radialGradient><radialGradient id="ml1b" cx="50%" cy="50%"><stop offset="0%" stop-color="#8020e0" stop-opacity=".5"/><stop offset="100%" stop-color="transparent"/></radialGradient><filter id="ml1f"><feGaussianBlur stdDeviation="2"/></filter></defs>
<rect width="130" height="82" fill="url(#ml1a)"/><rect width="130" height="82" fill="url(#ml1b)"/>
<circle cx="65" cy="41" r="28" fill="none" stroke="#6020a0" stroke-width="3" opacity=".5"/>
<circle cx="65" cy="41" r="20" fill="none" stroke="#8030c0" stroke-width="2" opacity=".6"/>
<circle cx="65" cy="41" r="12" fill="none" stroke="#a040e0" stroke-width="2" opacity=".7"/>
<circle cx="65" cy="41" r="5" fill="#6000c0" opacity=".9"/>
<path d="M65 13 Q85 20 92 41 Q85 62 65 69 Q45 62 38 41 Q45 20 65 13Z" fill="none" stroke="#c060ff" stroke-width="1.5" stroke-dasharray="4,3" opacity=".6"/>
<path d="M65 22 Q76 28 80 41 Q76 54 65 60 Q54 54 50 41 Q54 28 65 22Z" fill="none" stroke="#c060ff" stroke-width="1" stroke-dasharray="3,2" opacity=".5"/>
<line x1="65" y1="13" x2="92" y2="20" stroke="#c060ff" stroke-width="1" opacity=".4"/>
<line x1="92" y1="20" x2="92" y2="41" stroke="#c060ff" stroke-width="1" opacity=".4"/>
<circle cx="65" cy="41" r="30" fill="#8020e0" opacity=".08" filter="url(#ml1f)"/>
<circle cx="65" cy="41" r="15" fill="#a040e0" opacity=".12" filter="url(#ml1f)"/>
<circle cx="65" cy="41" r="5" fill="#e080ff" opacity=".5" filter="url(#ml1f)"/>
</svg>`,

'Eaux Guérisseuses': `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 130 82">
<defs><radialGradient id="eg1a" cx="50%" cy="50%"><stop offset="0%" stop-color="#04101e"/><stop offset="100%" stop-color="#020810"/></radialGradient><radialGradient id="eg1b" cx="50%" cy="40%"><stop offset="0%" stop-color="#20a080" stop-opacity=".5"/><stop offset="100%" stop-color="transparent"/></radialGradient></defs>
<rect width="130" height="82" fill="url(#eg1a)"/><rect width="130" height="82" fill="url(#eg1b)"/>
<path d="M50 10 Q55 4 60 10 Q65 18 60 24 Q55 30 50 24 Q45 18 50 10Z" fill="#20c090" opacity=".9"/>
<path d="M70 16 Q74 10 78 16 Q82 24 78 28 Q74 32 70 28 Q66 24 70 16Z" fill="#20c090" opacity=".85"/>
<path d="M35 26 Q39 20 43 26 Q47 34 43 38 Q39 42 35 38 Q31 34 35 26Z" fill="#20c090" opacity=".8"/>
<path d="M55 34 Q62 26 69 34 Q76 44 69 52 Q62 60 55 52 Q48 44 55 34Z" fill="#30e0a0" opacity=".9"/>
<circle cx="62" cy="42" r="6" fill="#60ffcc" opacity=".6"/>
<path d="M90 28 Q94 22 98 28 Q102 36 98 40 Q94 44 90 40 Q86 36 90 28Z" fill="#20c090" opacity=".75"/>
<path d="M78 46 Q82 40 86 46 Q90 54 86 58 Q82 62 78 58 Q74 54 78 46Z" fill="#20c090" opacity=".7"/>
<path d="M20 44 Q24 38 28 44 Q32 52 28 56 Q24 60 20 56 Q16 52 20 44Z" fill="#20c090" opacity=".65"/>
<path d="M10 20 L14 12 L18 20 L14 30Z" fill="#20a080" opacity=".4"/>
<path d="M108 15 L112 8 L116 15 L112 24Z" fill="#20a080" opacity=".35"/>
</svg>`,

'Filet du Pêcheur': `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 130 82">
<defs><radialGradient id="fp1a" cx="50%" cy="50%"><stop offset="0%" stop-color="#0a1820"/><stop offset="100%" stop-color="#04080e"/></radialGradient></defs>
<rect width="130" height="82" fill="url(#fp1a)"/>
<path d="M0 55 Q32 47 65 53 Q98 59 130 51 L130 82 L0 82Z" fill="#060e16"/>
<path d="M30 8 L100 50" stroke="#8a6a40" stroke-width="2" opacity=".8"/>
<path d="M30 8 L28 50 L100 50 L110 12 Z" fill="none" stroke="#8a6a40" stroke-width="1.5" opacity=".7"/>
<path d="M40 8 L38 50 M50 9 L48 50 M60 10 L58 50 M70 10 L68 50 M80 11 L78 50 M90 12 L88 50" stroke="#7a5a30" stroke-width=".8" opacity=".6"/>
<path d="M30 18 L110 22 M30 28 L108 32 M30 38 L106 42 M30 48 L104 50" stroke="#7a5a30" stroke-width=".8" opacity=".6"/>
<ellipse cx="65" cy="46" rx="20" ry="12" fill="#2060a0" opacity=".6"/>
<path d="M52 42 Q65 36 78 42 Q72 50 65 52 Q58 50 52 42Z" fill="#3080c0" opacity=".7"/>
<circle cx="62" cy="45" r="3" fill="#102040"/><circle cx="62" cy="45" r="1.2" fill="#fff" opacity=".4"/>
<circle cx="105" cy="10" r="5" fill="#c08020" opacity=".8"/>
<circle cx="105" cy="10" r="2" fill="#e0a030"/>
<line x1="105" y1="15" x2="102" y2="25" stroke="#8a6a40" stroke-width="1.5"/>
</svg>`,

'Matelot Naufragé': `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 130 82">
<defs>
  <radialGradient id="mn1a" cx="50%" cy="70%"><stop offset="0%" stop-color="#0a2a4a"/><stop offset="100%" stop-color="#040c14"/></radialGradient>
  <radialGradient id="mn1b" cx="50%" cy="50%"><stop offset="0%" stop-color="#3090e0" stop-opacity=".4"/><stop offset="100%" stop-color="transparent"/></radialGradient>
  <filter id="mn1f"><feGaussianBlur stdDeviation="1.5"/></filter>
</defs>
<rect width="130" height="82" fill="url(#mn1a)"/>
<ellipse cx="65" cy="62" rx="60" ry="18" fill="#1060a0" opacity=".5" filter="url(#mn1f)"/>
<path d="M10 58 Q30 48 50 54 Q70 60 90 52 Q110 44 125 52 L125 72 Q100 66 65 72 Q35 78 10 70Z" fill="#1a5080" opacity=".7"/>
<path d="M10 62 Q40 54 70 60 Q100 66 125 58" stroke="#60c0f0" stroke-width="1.5" fill="none" opacity=".5"/>
<path d="M5 67 Q35 60 65 66 Q95 72 125 64" stroke="#60c0f0" stroke-width="1" fill="none" opacity=".3"/>
<circle cx="62" cy="44" r="9" fill="#c08040"/>
<rect x="58" y="26" width="8" height="18" fill="#a06830" rx="1"/>
<path d="M62 26 L55 15 L70 18Z" fill="#e03030" opacity=".9"/>
<circle cx="62" cy="44" r="9" fill="none" stroke="#e0b060" stroke-width="1" opacity=".6"/>
<line x1="46" y1="50" x2="50" y2="54" stroke="#c09050" stroke-width="2" stroke-linecap="round"/>
<line x1="74" y1="50" x2="78" y2="54" stroke="#c09050" stroke-width="2" stroke-linecap="round"/>
<circle cx="62" cy="44" r="3" fill="#e0b060" opacity=".8"/>
</svg>`,

'Méduse Transparente': `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 130 82">
<defs>
  <radialGradient id="mt1a" cx="50%" cy="40%"><stop offset="0%" stop-color="#08142a"/><stop offset="100%" stop-color="#020608"/></radialGradient>
  <radialGradient id="mt1b" cx="50%" cy="40%"><stop offset="0%" stop-color="#a0e0ff" stop-opacity=".35"/><stop offset="100%" stop-color="transparent"/></radialGradient>
  <filter id="mt1f"><feGaussianBlur stdDeviation="2.5"/></filter>
  <filter id="mt1g"><feGaussianBlur stdDeviation="1"/></filter>
</defs>
<rect width="130" height="82" fill="url(#mt1a)"/>
<ellipse cx="65" cy="38" rx="38" ry="28" fill="url(#mt1b)" filter="url(#mt1f)"/>
<ellipse cx="65" cy="32" rx="26" ry="18" fill="#b0eeff" opacity=".15"/>
<ellipse cx="65" cy="32" rx="26" ry="18" fill="none" stroke="#80d8ff" stroke-width="1.5" opacity=".6"/>
<ellipse cx="65" cy="32" rx="20" ry="13" fill="#c8f4ff" opacity=".1"/>
<ellipse cx="65" cy="32" rx="20" ry="13" fill="none" stroke="#a0ecff" stroke-width="1" opacity=".5"/>
<path d="M50 46 Q48 58 45 70" stroke="#80d8ff" stroke-width="1.2" fill="none" opacity=".5"/>
<path d="M55 48 Q54 60 52 72" stroke="#a0ecff" stroke-width="1" fill="none" opacity=".4"/>
<path d="M65 50 Q65 63 64 75" stroke="#80d8ff" stroke-width="1.2" fill="none" opacity=".5"/>
<path d="M75 48 Q76 60 78 72" stroke="#a0ecff" stroke-width="1" fill="none" opacity=".4"/>
<path d="M80 46 Q82 58 85 68" stroke="#80d8ff" stroke-width="1.2" fill="none" opacity=".5"/>
<ellipse cx="56" cy="28" rx="3" ry="2" fill="#e040fb" opacity=".7" filter="url(#mt1g)"/>
<ellipse cx="74" cy="28" rx="3" ry="2" fill="#e040fb" opacity=".7" filter="url(#mt1g)"/>
<path d="M58 34 Q65 38 72 34" stroke="#e040fb" stroke-width="1.5" fill="none" opacity=".6"/>
</svg>`,

'Écume de Mer': `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 130 82">
<defs>
  <radialGradient id="ed1a" cx="50%" cy="60%"><stop offset="0%" stop-color="#08203a"/><stop offset="100%" stop-color="#020810"/></radialGradient>
  <filter id="ed1f"><feGaussianBlur stdDeviation="3"/></filter>
  <filter id="ed1g"><feGaussianBlur stdDeviation="1.2"/></filter>
</defs>
<rect width="130" height="82" fill="url(#ed1a)"/>
<ellipse cx="65" cy="55" rx="55" ry="22" fill="#1a90d0" opacity=".2" filter="url(#ed1f)"/>
<circle cx="35" cy="40" r="14" fill="white" opacity=".12" filter="url(#ed1f)"/>
<circle cx="65" cy="30" r="18" fill="white" opacity=".14" filter="url(#ed1f)"/>
<circle cx="95" cy="44" r="12" fill="white" opacity=".12" filter="url(#ed1f)"/>
<circle cx="35" cy="40" r="14" fill="none" stroke="white" stroke-width="1.5" opacity=".4"/>
<circle cx="65" cy="30" r="18" fill="none" stroke="white" stroke-width="2" opacity=".5"/>
<circle cx="95" cy="44" r="12" fill="none" stroke="white" stroke-width="1.5" opacity=".4"/>
<circle cx="20" cy="55" r="6" fill="none" stroke="white" stroke-width="1" opacity=".3"/>
<circle cx="50" cy="60" r="8" fill="none" stroke="white" stroke-width="1" opacity=".3"/>
<circle cx="80" cy="58" r="5" fill="none" stroke="white" stroke-width="1" opacity=".25"/>
<circle cx="110" cy="52" r="7" fill="none" stroke="white" stroke-width="1" opacity=".3"/>
<ellipse cx="65" cy="34" rx="5" ry="3" fill="white" opacity=".6" filter="url(#ed1g)"/>
<ellipse cx="35" cy="44" rx="4" ry="2" fill="white" opacity=".5" filter="url(#ed1g)"/>
<ellipse cx="95" cy="48" rx="3" ry="2" fill="white" opacity=".5" filter="url(#ed1g)"/>
</svg>`,

'Corsaire Enragé': `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 130 82">
<defs><radialGradient id="ce1a" cx="50%" cy="40%"><stop offset="0%" stop-color="#2a0808"/><stop offset="100%" stop-color="#080204"/></radialGradient><filter id="ce1f"><feGaussianBlur stdDeviation="1.5"/></filter></defs>
<rect width="130" height="82" fill="url(#ce1a)"/>
<ellipse cx="65" cy="55" rx="50" ry="20" fill="#800000" opacity=".25" filter="url(#ce1f)"/>
<circle cx="65" cy="34" r="16" fill="#c05030"/>
<circle cx="65" cy="34" r="16" fill="none" stroke="#e07050" stroke-width="1.5" opacity=".7"/>
<rect x="61" y="20" width="8" height="14" fill="#8b4513" rx="1"/>
<path d="M65 20 L58 10 L73 13Z" fill="#cc2222"/>
<line x1="45" y1="38" x2="52" y2="45" stroke="#c09050" stroke-width="2.5" stroke-linecap="round"/>
<line x1="85" y1="38" x2="78" y2="45" stroke="#c09050" stroke-width="2.5" stroke-linecap="round"/>
<path d="M53 52 L65 48 L77 52" stroke="#e07050" stroke-width="2" fill="none" stroke-linecap="round"/>
<path d="M20 62 Q40 55 65 58 Q90 61 110 55" stroke="#e04020" stroke-width="1.5" fill="none" opacity=".6"/>
<circle cx="57" cy="30" r="3" fill="#ff4040" opacity=".9"/>
<circle cx="73" cy="30" r="3" fill="#ff4040" opacity=".9"/>
<path d="M59 38 Q65 42 71 38" stroke="#ff6040" stroke-width="2" fill="none"/>
</svg>`,

'Flibustier Sangsue': `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 130 82">
<defs><radialGradient id="fs1a" cx="50%" cy="40%"><stop offset="0%" stop-color="#1a0828"/><stop offset="100%" stop-color="#060208"/></radialGradient><filter id="fs1f"><feGaussianBlur stdDeviation="2"/></filter></defs>
<rect width="130" height="82" fill="url(#fs1a)"/>
<ellipse cx="65" cy="50" rx="45" ry="22" fill="#6a0a6a" opacity=".3" filter="url(#fs1f)"/>
<circle cx="65" cy="33" r="15" fill="#3a1048"/>
<circle cx="65" cy="33" r="15" fill="none" stroke="#c040c0" stroke-width="1.5" opacity=".8"/>
<path d="M58 25 L62 20 L65 24 L68 20 L72 25" stroke="#e060e0" stroke-width="1.5" fill="none"/>
<circle cx="58" cy="30" r="3" fill="#e040fb" opacity=".9"/>
<circle cx="72" cy="30" r="3" fill="#e040fb" opacity=".9"/>
<path d="M60 38 Q65 43 70 38" stroke="#e040fb" stroke-width="2" fill="none"/>
<path d="M62 40 L63 46 L65 44 L67 46 L68 40" fill="#e040fb" opacity=".8"/>
<ellipse cx="65" cy="50" rx="10" ry="4" fill="#c040c0" opacity=".3" filter="url(#fs1f)"/>
<path d="M30 60 Q50 52 65 55 Q80 58 100 52" stroke="#c040c0" stroke-width="1.5" fill="none" opacity=".5"/>
<circle cx="65" cy="48" r="4" fill="#e040fb" opacity=".4" filter="url(#fs1f)"/>
</svg>`,

'Piranha Frénétique': `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 130 82">
<defs><radialGradient id="pf1a" cx="50%" cy="50%"><stop offset="0%" stop-color="#081828"/><stop offset="100%" stop-color="#020608"/></radialGradient><filter id="pf1f"><feGaussianBlur stdDeviation="1.2"/></filter></defs>
<rect width="130" height="82" fill="url(#pf1a)"/>
<path d="M10 48 Q30 40 50 44 Q70 48 90 42 Q110 36 125 40 L125 56 Q105 50 85 54 Q65 58 45 54 Q25 50 10 56Z" fill="#1a4060" opacity=".6"/>
<path d="M10 52 Q35 44 60 48 Q85 52 110 46" stroke="#40a0d0" stroke-width="1.5" fill="none" opacity=".5"/>
<ellipse cx="75" cy="42" rx="28" ry="12" fill="#e04020" opacity=".9"/>
<path d="M48 42 L38 35 L42 42 L38 49Z" fill="#c03010"/>
<path d="M100 38 L115 42 L100 46Z" fill="#c03010"/>
<circle cx="96" cy="40" r="3" fill="white" opacity=".9"/>
<circle cx="97" cy="40" r="1.5" fill="black"/>
<path d="M54 38 L56 42 L58 38 M62 37 L64 42 L66 37 M70 37 L72 42 L74 37 M78 37 L80 42 L82 37 M86 37 L88 42 L90 37" stroke="#ff6040" stroke-width="1.5" fill="none"/>
<ellipse cx="55" cy="38" rx="18" ry="6" fill="#ff4020" opacity=".15" filter="url(#pf1f)"/>
</svg>`,

'Méduse Éternelle': `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 130 82">
<defs><radialGradient id="me1a" cx="50%" cy="35%"><stop offset="0%" stop-color="#080820"/><stop offset="100%" stop-color="#020206"/></radialGradient><radialGradient id="me1b" cx="50%" cy="35%"><stop offset="0%" stop-color="#40e0d0" stop-opacity=".4"/><stop offset="100%" stop-color="transparent"/></radialGradient><filter id="me1f"><feGaussianBlur stdDeviation="2.5"/></filter><filter id="me1g"><feGaussianBlur stdDeviation="1"/></filter></defs>
<rect width="130" height="82" fill="url(#me1a)"/>
<ellipse cx="65" cy="35" rx="35" ry="26" fill="url(#me1b)" filter="url(#me1f)"/>
<ellipse cx="65" cy="30" rx="22" ry="16" fill="#30d0c0" opacity=".18"/>
<ellipse cx="65" cy="30" rx="22" ry="16" fill="none" stroke="#60e8d8" stroke-width="2" opacity=".7"/>
<ellipse cx="65" cy="30" rx="15" ry="10" fill="#50e8d8" opacity=".12"/>
<path d="M48 43 Q46 55 44 68" stroke="#60e8d8" stroke-width="1.5" fill="none" opacity=".6"/>
<path d="M54 46 Q53 58 51 70" stroke="#40d0c0" stroke-width="1" fill="none" opacity=".5"/>
<path d="M65 48 Q65 61 64 74" stroke="#60e8d8" stroke-width="1.5" fill="none" opacity=".6"/>
<path d="M76 46 Q77 58 79 70" stroke="#40d0c0" stroke-width="1" fill="none" opacity=".5"/>
<path d="M82 43 Q84 55 86 67" stroke="#60e8d8" stroke-width="1.5" fill="none" opacity=".6"/>
<circle cx="65" cy="26" r="5" fill="#e040fb" opacity=".8" filter="url(#me1g)"/>
<path d="M57 32 Q61 36 65 34 Q69 36 73 32" stroke="#e040fb" stroke-width="1.5" fill="none" opacity=".7"/>
<circle cx="57" cy="26" r="2.5" fill="#e040fb" opacity=".7" filter="url(#me1g)"/>
<circle cx="73" cy="26" r="2.5" fill="#e040fb" opacity=".7" filter="url(#me1g)"/>
<ellipse cx="65" cy="16" rx="8" ry="4" fill="#80ffee" opacity=".3" filter="url(#me1f)"/>
</svg>`,

'Vampire des Abysses': `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 130 82">
<defs><radialGradient id="va1a" cx="50%" cy="35%"><stop offset="0%" stop-color="#12021e"/><stop offset="100%" stop-color="#040108"/></radialGradient><filter id="va1f"><feGaussianBlur stdDeviation="2"/></filter><filter id="va1g"><feGaussianBlur stdDeviation="1"/></filter></defs>
<rect width="130" height="82" fill="url(#va1a)"/>
<ellipse cx="65" cy="52" rx="50" ry="18" fill="#5a006a" opacity=".2" filter="url(#va1f)"/>
<path d="M40 50 Q50 30 65 25 Q80 30 90 50 L85 60 Q75 55 65 57 Q55 55 45 60Z" fill="#2a0840" opacity=".9"/>
<path d="M65 25 L50 45 L65 40 L80 45Z" fill="#4a1060" opacity=".8"/>
<path d="M42 48 Q30 35 35 20 L48 32Z" fill="#3a0850" opacity=".9"/>
<path d="M88 48 Q100 35 95 20 L82 32Z" fill="#3a0850" opacity=".9"/>
<circle cx="57" cy="38" r="4" fill="#e040fb" opacity=".9" filter="url(#va1g)"/>
<circle cx="73" cy="38" r="4" fill="#e040fb" opacity=".9" filter="url(#va1g)"/>
<path d="M58 48 L62 44 L65 48 L68 44 L72 48" stroke="#e040fb" stroke-width="1.5" fill="none"/>
<path d="M50 52 Q65 47 80 52" stroke="#c020e0" stroke-width="1.5" fill="none" opacity=".6"/>
<ellipse cx="65" cy="28" rx="12" ry="4" fill="#e040fb" opacity=".15" filter="url(#va1f)"/>
</svg>`,

'Spectre Marin': `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 130 82">
<defs><radialGradient id="sm1a" cx="50%" cy="40%"><stop offset="0%" stop-color="#060e18"/><stop offset="100%" stop-color="#020408"/></radialGradient><radialGradient id="sm1b" cx="50%" cy="40%"><stop offset="0%" stop-color="#80d0ff" stop-opacity=".3"/><stop offset="100%" stop-color="transparent"/></radialGradient><filter id="sm1f"><feGaussianBlur stdDeviation="3"/></filter><filter id="sm1g"><feGaussianBlur stdDeviation="1.2"/></filter></defs>
<rect width="130" height="82" fill="url(#sm1a)"/>
<ellipse cx="65" cy="42" rx="40" ry="30" fill="url(#sm1b)" filter="url(#sm1f)"/>
<path d="M45 60 Q50 28 65 22 Q80 28 85 60 Q75 68 65 65 Q55 68 45 60Z" fill="white" opacity=".08"/>
<path d="M45 60 Q50 28 65 22 Q80 28 85 60 Q75 68 65 65 Q55 68 45 60Z" fill="none" stroke="#a0d8ff" stroke-width="1.5" opacity=".5"/>
<path d="M45 60 Q40 70 38 78" stroke="#a0d8ff" stroke-width="1.5" fill="none" opacity=".5"/>
<path d="M85 60 Q90 70 92 78" stroke="#a0d8ff" stroke-width="1.5" fill="none" opacity=".5"/>
<path d="M55 60 Q52 68 50 76" stroke="#80c0ff" stroke-width="1" fill="none" opacity=".4"/>
<path d="M75 60 Q78 68 80 76" stroke="#80c0ff" stroke-width="1" fill="none" opacity=".4"/>
<ellipse cx="57" cy="38" rx="4" ry="3" fill="#60d0ff" opacity=".8" filter="url(#sm1g)"/>
<ellipse cx="73" cy="38" rx="4" ry="3" fill="#60d0ff" opacity=".8" filter="url(#sm1g)"/>
<path d="M58 47 Q65 52 72 47" stroke="#80c8ff" stroke-width="1.5" fill="none" opacity=".7"/>
<ellipse cx="65" cy="26" rx="10" ry="4" fill="#ffffff" opacity=".2" filter="url(#sm1g)"/>
</svg>`,

'Brume de Guerre': `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 130 82">
<defs><radialGradient id="bg1a" cx="50%" cy="50%"><stop offset="0%" stop-color="#0a0a18"/><stop offset="100%" stop-color="#040408"/></radialGradient><radialGradient id="bg1b" cx="50%" cy="50%"><stop offset="0%" stop-color="#606080" stop-opacity=".6"/><stop offset="100%" stop-color="transparent"/></radialGradient><filter id="bg1f"><feGaussianBlur stdDeviation="4"/></filter></defs>
<rect width="130" height="82" fill="url(#bg1a)"/><rect width="130" height="82" fill="url(#bg1b)"/>
<ellipse cx="35" cy="45" rx="30" ry="20" fill="#4a4a6a" opacity=".7" filter="url(#bg1f)"/>
<ellipse cx="80" cy="38" rx="35" ry="22" fill="#5a5a7a" opacity=".65" filter="url(#bg1f)"/>
<ellipse cx="60" cy="58" rx="28" ry="16" fill="#3a3a58" opacity=".6" filter="url(#bg1f)"/>
<ellipse cx="110" cy="50" rx="22" ry="15" fill="#4a4a68" opacity=".55" filter="url(#bg1f)"/>
<path d="M50 35 L58 22 L54 35 L64 18 L60 34" stroke="#ffe060" stroke-width="2.5" fill="none" stroke-linecap="round" opacity=".9"/>
<ellipse cx="55" cy="38" rx="8" ry="5" fill="#ffe060" opacity=".15"/>
<path d="M25 42 Q32 38 40 42 Q48 46 55 42" stroke="#8080a0" stroke-width="2" fill="none" opacity=".5"/>
<path d="M65 55 Q75 50 85 55 Q95 60 105 55" stroke="#8080a0" stroke-width="1.5" fill="none" opacity=".4"/>
<path d="M10 35 Q20 30 30 35" stroke="#9090b0" stroke-width="1.5" fill="none" opacity=".4"/>
<path d="M95 28 Q108 22 118 28" stroke="#9090b0" stroke-width="1" fill="none" opacity=".3"/>
</svg>`,


// === TRIBU DES RÉCIFS ===
'Enfant des Récifs': `<svg viewBox="0 0 130 82" xmlns="http://www.w3.org/2000/svg">
<defs><radialGradient id="er_bg" cx="50%" cy="60%" r="70%"><stop offset="0%" stop-color="#0a2818"/><stop offset="100%" stop-color="#051a0a"/></radialGradient></defs>
<rect width="130" height="82" fill="url(#er_bg)"/>
<ellipse cx="65" cy="68" rx="35" ry="10" fill="#0d3a1a" opacity=".7"/>
<path d="M48 55 Q55 38 65 35 Q75 38 82 55 L78 62 L52 62 Z" fill="#2a5030" opacity=".8"/>
<ellipse cx="65" cy="32" rx="9" ry="10" fill="#3a6040"/>
<path d="M56 30 Q52 20 55 15 Q60 18 60 22" fill="#e8a050" opacity=".6"/>
<path d="M74 30 Q78 20 75 15 Q70 18 70 22" fill="#e8a050" opacity=".6"/>
<path d="M30 58 Q45 50 60 55" stroke="#2ea84c" stroke-width="2" fill="none" opacity=".5"/>
<path d="M70 55 Q85 50 100 58" stroke="#2ea84c" stroke-width="2" fill="none" opacity=".5"/>
<ellipse cx="65" cy="70" rx="28" ry="6" fill="#1a4025" opacity=".5"/>
<path d="M20 65 Q35 60 50 65 Q65 70 80 65 Q95 60 110 65" stroke="#2ea84c" stroke-width="1.5" fill="none" opacity=".4"/>
</svg>`,

'Éclaireur Tribal': `<svg viewBox="0 0 130 82" xmlns="http://www.w3.org/2000/svg">
<defs><linearGradient id="et_bg" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" stop-color="#051a0a"/><stop offset="100%" stop-color="#0a2818"/></linearGradient></defs>
<rect width="130" height="82" fill="url(#et_bg)"/>
<path d="M55 65 L60 40 L65 65 Z" fill="#2a5030"/>
<ellipse cx="62" cy="36" rx="8" ry="9" fill="#3a6040"/>
<path d="M67 42 L90 30 L88 28 L65 40" fill="#c87030" opacity=".9"/>
<path d="M88 28 L95 22 L92 30 Z" fill="#e8a050"/>
<path d="M55 65 L45 72 M65 65 L75 72" stroke="#2a5030" stroke-width="3" stroke-linecap="round"/>
<path d="M20 70 Q40 62 60 68 Q80 74 110 68" stroke="#2ea84c" stroke-width="1.5" fill="none" opacity=".4"/>
<circle cx="100" cy="18" r="3" fill="#e8a050" opacity=".6"/>
<path d="M10 55 Q25 48 40 55" stroke="#1a6030" stroke-width="2" fill="none" opacity=".5"/>
</svg>`,

'Guerrier des Coraux': `<svg viewBox="0 0 130 82" xmlns="http://www.w3.org/2000/svg">
<defs><radialGradient id="gc_bg" cx="40%" cy="50%" r="70%"><stop offset="0%" stop-color="#0a2818"/><stop offset="100%" stop-color="#051a0a"/></radialGradient></defs>
<rect width="130" height="82" fill="url(#gc_bg)"/>
<path d="M50 70 L58 42 L65 70 Z" fill="#2a4a28"/>
<path d="M58 42 L62 30 L66 42 Z" fill="#3a5a38"/>
<ellipse cx="62" cy="27" rx="9" ry="10" fill="#3a6040"/>
<path d="M66 35 L82 18 L85 22 L70 38" fill="#c07028" opacity=".9"/>
<path d="M82 18 L92 10 L90 20 Z" fill="#e8b060" opacity=".9"/>
<path d="M82 18 L88 12 L84 22" fill="#2ea84c" opacity=".7"/>
<path d="M42 50 L55 44 L52 56 Z" fill="#2a8040" opacity=".8"/>
<path d="M42 50 Q38 48 35 42 Q38 46 45 48" stroke="#2ea84c" stroke-width="1.5" fill="none"/>
<path d="M20 72 Q45 64 70 70 Q95 76 110 70" stroke="#1a6030" stroke-width="1.5" fill="none" opacity=".4"/>
</svg>`,

'Pêcheur Tribal': `<svg viewBox="0 0 130 82" xmlns="http://www.w3.org/2000/svg">
<defs><linearGradient id="pt_bg" x1="0%" y1="30%" x2="0%" y2="100%"><stop offset="0%" stop-color="#051a0a"/><stop offset="100%" stop-color="#082010"/></linearGradient></defs>
<rect width="130" height="82" fill="url(#pt_bg)"/>
<path d="M10 58 Q40 52 70 56 Q100 60 120 56 L120 82 L10 82 Z" fill="#061e0c" opacity=".8"/>
<path d="M10 60 Q40 54 70 58 Q100 62 120 58" stroke="#2ea84c" stroke-width="1.5" fill="none" opacity=".6"/>
<path d="M52 58 L56 38 L62 58 Z" fill="#2a4a28"/>
<ellipse cx="58" cy="34" rx="8" ry="9" fill="#3a6040"/>
<path d="M62 36 Q80 25 100 30" stroke="#c8a060" stroke-width="1.5" fill="none" stroke-dasharray="3,2"/>
<path d="M100 30 Q108 35 105 45 Q102 40 98 38" stroke="#c8a060" stroke-width="1.5" fill="none"/>
<ellipse cx="103" cy="48" rx="5" ry="3" fill="#2ea84c" opacity=".7"/>
<path d="M30 52 Q50 46 70 52" stroke="#2ea84c" stroke-width="1" fill="none" opacity=".4"/>
</svg>`,

'Lancier des Récifs': `<svg viewBox="0 0 130 82" xmlns="http://www.w3.org/2000/svg">
<defs><radialGradient id="lr_bg" cx="60%" cy="70%" r="80%"><stop offset="0%" stop-color="#0a2818"/><stop offset="100%" stop-color="#051a0a"/></radialGradient></defs>
<rect width="130" height="82" fill="url(#lr_bg)"/>
<path d="M80 75 Q90 60 100 40 L85 42 Z" fill="#2a3a22" opacity=".6"/>
<path d="M55 70 L62 44 L68 70 Z" fill="#2a4a28"/>
<ellipse cx="63" cy="40" rx="9" ry="10" fill="#3a6040"/>
<path d="M63 38 L70 10 L74 14 L67 40" stroke="#c07028" stroke-width="2.5" fill="none"/>
<path d="M70 10 L78 5 L73 16 Z" fill="#e8b060"/>
<path d="M70 10 Q74 7 76 10" fill="#2ea84c" opacity=".8"/>
<path d="M20 65 Q35 58 55 65" stroke="#1a6030" stroke-width="2" fill="none" opacity=".5"/>
<path d="M90 50 Q105 44 120 50" stroke="#1a6030" stroke-width="1.5" fill="none" opacity=".4"/>
<circle cx="78" cy="5" r="2" fill="#e8a050" opacity=".8"/>
</svg>`,

'Guérisseur du Clan': `<svg viewBox="0 0 130 82" xmlns="http://www.w3.org/2000/svg">
<defs><radialGradient id="gdc_bg" cx="50%" cy="50%" r="70%"><stop offset="0%" stop-color="#0a2818"/><stop offset="100%" stop-color="#051a0a"/></radialGradient><radialGradient id="gdc_glow" cx="50%" cy="50%" r="50%"><stop offset="0%" stop-color="#2ea84c" stop-opacity=".4"/><stop offset="100%" stop-color="#2ea84c" stop-opacity="0"/></radialGradient></defs>
<rect width="130" height="82" fill="url(#gdc_bg)"/>
<ellipse cx="65" cy="55" rx="30" ry="20" fill="url(#gdc_glow)"/>
<path d="M52 70 L58 46 L65 70 Z" fill="#2a4a28"/>
<ellipse cx="62" cy="42" rx="9" ry="10" fill="#3a6040"/>
<path d="M62 48 L58 55 M62 48 L66 55" stroke="#2ea84c" stroke-width="2" stroke-linecap="round"/>
<circle cx="52" cy="52" r="4" fill="#2ea84c" opacity=".5"/>
<circle cx="72" cy="52" r="4" fill="#2ea84c" opacity=".5"/>
<circle cx="46" cy="44" r="2.5" fill="#2ea84c" opacity=".4"/>
<circle cx="78" cy="44" r="2.5" fill="#2ea84c" opacity=".4"/>
<path d="M55 35 L62 28 L69 35" stroke="#2ea84c" stroke-width="1.5" fill="none" opacity=".7"/>
</svg>`,

'Ancien du Clan': `<svg viewBox="0 0 130 82" xmlns="http://www.w3.org/2000/svg">
<defs><linearGradient id="adc_bg" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" stop-color="#051a0a"/><stop offset="100%" stop-color="#0a2818"/></linearGradient></defs>
<rect width="130" height="82" fill="url(#adc_bg)"/>
<path d="M85 75 L85 20 L87 20 L87 75 Z" fill="#4a3018"/>
<path d="M86 20 L80 15 L86 18 L92 15 Z" fill="#e8a050" opacity=".8"/>
<circle cx="86" cy="30" r="4" fill="#e8a050" opacity=".7"/>
<circle cx="86" cy="42" r="3" fill="#2ea84c" opacity=".6"/>
<circle cx="86" cy="53" r="3" fill="#e8a050" opacity=".6"/>
<path d="M50 72 L55 58 L60 72 Z" fill="#2a3a28"/>
<ellipse cx="57" cy="54" rx="8" ry="8" fill="#3a5038"/>
<path d="M52 60 L45 65" stroke="#4a3018" stroke-width="2" stroke-linecap="round"/>
<path d="M25 68 Q40 62 55 68" stroke="#2ea84c" stroke-width="1" fill="none" opacity=".4"/>
<path d="M65 65 Q80 60 95 65" stroke="#2ea84c" stroke-width="1" fill="none" opacity=".4"/>
</svg>`,

'Chasseur Tribal': `<svg viewBox="0 0 130 82" xmlns="http://www.w3.org/2000/svg">
<defs><radialGradient id="cht_bg" cx="30%" cy="70%" r="80%"><stop offset="0%" stop-color="#082010"/><stop offset="100%" stop-color="#051a0a"/></radialGradient></defs>
<rect width="130" height="82" fill="url(#cht_bg)"/>
<path d="M48 72 L58 50 L65 58 L62 72 Z" fill="#2a4a28" opacity=".9"/>
<ellipse cx="56" cy="46" rx="8" ry="9" fill="#3a5a38"/>
<path d="M60 48 L85 35 L87 38 L62 50" fill="#8a5020" opacity=".9"/>
<path d="M56 46 L52 52 L48 48 Z" fill="#2a3a22"/>
<path d="M85 35 L95 30 L93 37 Z" fill="#c8a060"/>
<path d="M20 65 Q35 58 50 65" stroke="#1a5025" stroke-width="2" fill="none" opacity=".5"/>
<path d="M35 58 Q42 54 50 58" stroke="#2ea84c" stroke-width="1" fill="none" opacity=".4"/>
<circle cx="95" cy="30" r="2" fill="#e8a050" opacity=".7"/>
</svg>`,

'Gardien des Totems': `<svg viewBox="0 0 130 82" xmlns="http://www.w3.org/2000/svg">
<defs><radialGradient id="gdt_bg" cx="50%" cy="50%" r="70%"><stop offset="0%" stop-color="#0a2818"/><stop offset="100%" stop-color="#051a0a"/></radialGradient></defs>
<rect width="130" height="82" fill="url(#gdt_bg)"/>
<rect x="82" y="12" width="8" height="60" fill="#3a2810" rx="2"/>
<ellipse cx="86" cy="18" rx="8" ry="7" fill="#2a4018"/>
<circle cx="84" cy="17" r="2.5" fill="#e8a050" opacity=".9"/>
<circle cx="88" cy="17" r="2.5" fill="#e8a050" opacity=".9"/>
<path d="M78 25 L94 25" stroke="#e8a050" stroke-width="1.5" opacity=".6"/>
<circle cx="86" cy="35" r="4" fill="#2ea84c" opacity=".7"/>
<path d="M78 45 L94 45" stroke="#2ea84c" stroke-width="1.5" opacity=".5"/>
<path d="M45 72 L53 44 L60 72 Z" fill="#2a4a28"/>
<ellipse cx="55" cy="40" rx="10" ry="11" fill="#3a6040"/>
<path d="M45 55 L36 52 L38 58 Z" fill="#2a4a28"/>
<path d="M20 68 Q38 62 55 68" stroke="#2ea84c" stroke-width="1.5" fill="none" opacity=".4"/>
</svg>`,

'Berserker Tribal': `<svg viewBox="0 0 130 82" xmlns="http://www.w3.org/2000/svg">
<defs><radialGradient id="bt_bg" cx="50%" cy="40%" r="70%"><stop offset="0%" stop-color="#1a0808"/><stop offset="100%" stop-color="#051a0a"/></radialGradient></defs>
<rect width="130" height="82" fill="url(#bt_bg)"/>
<path d="M50 72 L58 40 L68 72 Z" fill="#2a3a20"/>
<ellipse cx="62" cy="36" rx="11" ry="12" fill="#3a5030"/>
<path d="M58 40 L38 30 L40 36 L56 44" fill="#8a4010" opacity=".9"/>
<path d="M38 30 L28 24 L32 32 Z" fill="#c06020"/>
<path d="M66 40 L88 28 L86 34 L68 44" fill="#8a4010" opacity=".9"/>
<path d="M88 28 L98 22 L94 32 Z" fill="#c06020"/>
<path d="M55 34 L60 28 L65 34" stroke="#e85030" stroke-width="2" fill="none" opacity=".7"/>
<ellipse cx="62" cy="38" rx="14" ry="8" fill="#e84020" opacity=".08"/>
<path d="M20 68 Q40 60 62 66 Q84 72 110 66" stroke="#e85030" stroke-width="1" fill="none" opacity=".3"/>
</svg>`,

'Défenseur des Récifs': `<svg viewBox="0 0 130 82" xmlns="http://www.w3.org/2000/svg">
<defs><radialGradient id="dr_bg" cx="50%" cy="50%" r="70%"><stop offset="0%" stop-color="#0a2818"/><stop offset="100%" stop-color="#051a0a"/></radialGradient></defs>
<rect width="130" height="82" fill="url(#dr_bg)"/>
<path d="M48 72 L55 42 L70 72 Z" fill="#2a4a28"/>
<ellipse cx="60" cy="38" rx="11" ry="12" fill="#3a6040"/>
<path d="M38 70 L38 38 Q38 28 50 28 Q50 38 45 42 L45 70 Z" fill="#1a4020" opacity=".9"/>
<path d="M38 38 Q38 28 50 28" stroke="#e8a050" stroke-width="2" fill="none"/>
<path d="M38 50 L45 50" stroke="#e8a050" stroke-width="1.5" opacity=".7"/>
<path d="M38 60 L45 60" stroke="#2ea84c" stroke-width="1.5" opacity=".6"/>
<path d="M35 28 Q30 22 32 18 Q36 22 40 18 Q40 24 38 28" fill="#2ea84c" opacity=".7"/>
<path d="M20 70 Q40 64 60 70 Q80 76 110 70" stroke="#2ea84c" stroke-width="1.5" fill="none" opacity=".4"/>
</svg>`,

'Champion Tribal': `<svg viewBox="0 0 130 82" xmlns="http://www.w3.org/2000/svg">
<defs><radialGradient id="ct_bg" cx="50%" cy="40%" r="70%"><stop offset="0%" stop-color="#0c2a10"/><stop offset="100%" stop-color="#051a0a"/></radialGradient></defs>
<rect width="130" height="82" fill="url(#ct_bg)"/>
<path d="M50 72 L58 38 L68 72 Z" fill="#2a4a28"/>
<ellipse cx="62" cy="34" rx="12" ry="13" fill="#3a6040"/>
<path d="M62 36 L68 12 L72 16 L66 38" stroke="#e8a050" stroke-width="2.5" fill="none"/>
<path d="M68 12 L78 5 L74 16 Z" fill="#ffd060"/>
<path d="M45 50 L35 40 L40 55 Z" fill="#2a4a28"/>
<path d="M45 55 Q30 62 25 75" stroke="#3a6040" stroke-width="8" fill="none" stroke-linecap="round" opacity=".6"/>
<path d="M20 70 Q42 62 65 68 Q88 74 110 68" stroke="#e8a050" stroke-width="1.5" fill="none" opacity=".4"/>
<circle cx="78" cy="5" r="3" fill="#ffd060" opacity=".9"/>
</svg>`,

'Géant des Coraux': `<svg viewBox="0 0 130 82" xmlns="http://www.w3.org/2000/svg">
<defs><radialGradient id="gec_bg" cx="50%" cy="60%" r="80%"><stop offset="0%" stop-color="#0a2818"/><stop offset="100%" stop-color="#051a0a"/></radialGradient></defs>
<rect width="130" height="82" fill="url(#gec_bg)"/>
<path d="M10 68 Q30 58 50 62 Q70 66 90 62 Q110 58 120 65 L120 82 L10 82 Z" fill="#082010"/>
<path d="M40 68 L52 28 L78 68 Z" fill="#1a4a22" opacity=".9"/>
<ellipse cx="65" cy="24" rx="16" ry="17" fill="#2a5a30"/>
<path d="M52 28 L30 22 L34 32 L50 36" fill="#1a3a18"/>
<path d="M78 28 L100 20 L96 30 L80 36" fill="#1a3a18"/>
<path d="M55 22 Q58 14 62 12 Q66 14 69 22" stroke="#2ea84c" stroke-width="2" fill="none"/>
<path d="M62 12 L64 5 L68 10 L62 12" fill="#e8a050" opacity=".8"/>
<path d="M58 26 Q62 20 66 26" stroke="#e8a050" stroke-width="1.5" fill="none" opacity=".6"/>
</svg>`,

'Colosse Tribal': `<svg viewBox="0 0 130 82" xmlns="http://www.w3.org/2000/svg">
<defs><linearGradient id="colt_bg" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" stop-color="#051a0a"/><stop offset="100%" stop-color="#0c2a12"/></linearGradient></defs>
<rect width="130" height="82" fill="url(#colt_bg)"/>
<path d="M35 75 L50 30 L80 75 Z" fill="#1a3a20" opacity=".9"/>
<ellipse cx="65" cy="25" rx="18" ry="19" fill="#2a5030"/>
<path d="M50 30 L22 22 L28 38 L46 42" fill="#1a3020"/>
<path d="M80 30 L108 22 L102 38 L84 42" fill="#1a3020"/>
<path d="M58 22 L62 8 L68 22" stroke="#e8a050" stroke-width="2" fill="none"/>
<path d="M62 8 L66 2 L70 8 L62 8" fill="#ffd060" opacity=".8"/>
<path d="M20 72 Q48 62 65 68 Q82 74 110 70" stroke="#2ea84c" stroke-width="2" fill="none" opacity=".4"/>
<ellipse cx="65" cy="68" rx="30" ry="8" fill="#2ea84c" opacity=".06"/>
</svg>`,

'Grand Guerrier': `<svg viewBox="0 0 130 82" xmlns="http://www.w3.org/2000/svg">
<defs><radialGradient id="gg_bg" cx="50%" cy="45%" r="70%"><stop offset="0%" stop-color="#0c2a10"/><stop offset="100%" stop-color="#051a0a"/></radialGradient></defs>
<rect width="130" height="82" fill="url(#gg_bg)"/>
<path d="M47 72 L57 36 L73 72 Z" fill="#2a4a28"/>
<ellipse cx="63" cy="32" rx="13" ry="14" fill="#3a6040"/>
<path d="M63 34 L70 6 L75 10 L68 36" stroke="#ffd060" stroke-width="3" fill="none"/>
<path d="M70 6 L82 0 L78 12 Z" fill="#ffd060"/>
<path d="M44 52 L30 44 L34 56 Z" fill="#2a4a28" opacity=".9"/>
<path d="M44 55 Q28 62 22 72" stroke="#3a6040" stroke-width="10" fill="none" stroke-linecap="round" opacity=".5"/>
<path d="M40 35 Q50 28 60 32" stroke="#e8a050" stroke-width="1.5" fill="none" opacity=".5"/>
<path d="M20 70 Q44 62 65 68 Q86 74 110 68" stroke="#ffd060" stroke-width="1.5" fill="none" opacity=".4"/>
<circle cx="82" cy="0" r="3" fill="#ffd060" opacity=".9"/>
</svg>`,

'Totem de Guerre': `<svg viewBox="0 0 130 82" xmlns="http://www.w3.org/2000/svg">
<defs><radialGradient id="ta_bg" cx="50%" cy="50%" r="70%"><stop offset="0%" stop-color="#0a2818"/><stop offset="100%" stop-color="#051a0a"/></radialGradient><radialGradient id="ta_glow" cx="50%" cy="40%" r="40%"><stop offset="0%" stop-color="#e8a050" stop-opacity=".5"/><stop offset="100%" stop-color="#e8a050" stop-opacity="0"/></radialGradient></defs>
<rect width="130" height="82" fill="url(#ta_bg)"/>
<ellipse cx="65" cy="35" rx="25" ry="35" fill="url(#ta_glow)"/>
<rect x="61" y="15" width="8" height="65" fill="#2a1a08" rx="2"/>
<ellipse cx="65" cy="20" rx="12" ry="10" fill="#1a3020"/>
<circle cx="61" cy="18" r="3" fill="#e8a050" opacity=".9"/>
<circle cx="69" cy="18" r="3" fill="#e8a050" opacity=".9"/>
<path d="M55 28 L75 28" stroke="#e8a050" stroke-width="1.5" opacity=".7"/>
<circle cx="65" cy="38" r="5" fill="#2ea84c" opacity=".8"/>
<path d="M56 48 L74 48" stroke="#2ea84c" stroke-width="1.5" opacity=".6"/>
<path d="M58 58 L72 58" stroke="#e8a050" stroke-width="1" opacity=".5"/>
<path d="M52 12 L60 8 L65 14 L70 8 L78 12" stroke="#e8a050" stroke-width="1.5" fill="none" opacity=".6"/>
</svg>`,

'Matriarche des Récifs': `<svg viewBox="0 0 130 82" xmlns="http://www.w3.org/2000/svg">
<defs><radialGradient id="cheft_bg" cx="50%" cy="45%" r="70%"><stop offset="0%" stop-color="#0c2a10"/><stop offset="100%" stop-color="#051a0a"/></radialGradient></defs>
<rect width="130" height="82" fill="url(#cheft_bg)"/>
<path d="M48 72 L56 40 L72 72 Z" fill="#2a4a28"/>
<ellipse cx="63" cy="36" rx="12" ry="12" fill="#3a6040"/>
<path d="M52 30 L48 20 L56 26 L63 16 L70 26 L78 20 L74 30" fill="#e8a050" opacity=".9"/>
<path d="M63 16 L65 10 L67 16" fill="#ffd060"/>
<path d="M56 26 Q54 22 52 20 Q58 22 60 26" fill="#ffd060" opacity=".6"/>
<path d="M70 26 Q72 22 74 20 Q68 22 66 26" fill="#ffd060" opacity=".6"/>
<path d="M63 40 L70 14 L74 18 L67 42" stroke="#c07028" stroke-width="2.5" fill="none"/>
<path d="M70 14 L78 8 L74 18 Z" fill="#e8a050"/>
<path d="M20 68 Q42 62 65 68 Q88 74 110 68" stroke="#e8a050" stroke-width="1.5" fill="none" opacity=".4"/>
</svg>`,

'Grand Chef Korag': `<svg viewBox="0 0 130 82" xmlns="http://www.w3.org/2000/svg">
<defs><linearGradient id="gdr_bg" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" stop-color="#051a0a"/><stop offset="100%" stop-color="#0a2818"/></linearGradient></defs>
<rect width="130" height="82" fill="url(#gdr_bg)"/>
<path d="M48 72 L56 40 L70 72 Z" fill="#2a4a28"/>
<ellipse cx="62" cy="36" rx="11" ry="12" fill="#3a6040"/>
<path d="M32 72 L32 28 Q32 12 50 12 Q52 28 46 35 L46 72 Z" fill="#1a4020" opacity=".95"/>
<path d="M32 28 Q32 12 50 12" stroke="#e8a050" stroke-width="2.5" fill="none"/>
<path d="M32 40 L46 40" stroke="#e8a050" stroke-width="2" opacity=".7"/>
<path d="M32 52 L46 52" stroke="#2ea84c" stroke-width="1.5" opacity=".6"/>
<path d="M32 63 L46 63" stroke="#2ea84c" stroke-width="1" opacity=".5"/>
<path d="M36 12 Q30 6 32 2 Q38 6 44 2 Q44 8 40 12" fill="#2ea84c" opacity=".8"/>
<path d="M20 68 Q38 62 60 68 Q82 74 110 68" stroke="#2ea84c" stroke-width="1.5" fill="none" opacity=".4"/>
</svg>`,

'Chaman des Récifs': `<svg viewBox="0 0 130 82" xmlns="http://www.w3.org/2000/svg">
<defs><radialGradient id="cha_bg" cx="50%" cy="50%" r="70%"><stop offset="0%" stop-color="#082010"/><stop offset="100%" stop-color="#051a0a"/></radialGradient></defs>
<rect width="130" height="82" fill="url(#cha_bg)"/>
<path d="M50 72 L56 46 L65 72 Z" fill="#2a3a28"/>
<ellipse cx="60" cy="42" rx="9" ry="10" fill="#3a5038"/>
<path d="M60 46 L52 16 L56 18 L60 48" stroke="#6a3a10" stroke-width="2.5" fill="none"/>
<path d="M52 16 L46 8 L54 14 Q52 10 56 8 Q58 12 54 16" fill="#e8a050" opacity=".8"/>
<circle cx="40" cy="38" r="3" fill="#2ea84c" opacity=".6"/>
<circle cx="35" cy="28" r="2" fill="#2ea84c" opacity=".5"/>
<circle cx="44" cy="22" r="2" fill="#2ea84c" opacity=".4"/>
<circle cx="80" cy="36" r="3" fill="#2ea84c" opacity=".6"/>
<circle cx="85" cy="26" r="2" fill="#2ea84c" opacity=".5"/>
<circle cx="76" cy="22" r="2" fill="#2ea84c" opacity=".4"/>
<path d="M42 38 Q38 30 40 22 Q44 26 42 30 Q44 35 46 38" stroke="#2ea84c" stroke-width="1" fill="none" opacity=".4"/>
<path d="M78 36 Q82 28 80 20 Q76 24 78 28 Q76 33 74 36" stroke="#2ea84c" stroke-width="1" fill="none" opacity=".4"/>
</svg>`,

'Esprit Protecteur': `<svg viewBox="0 0 130 82" xmlns="http://www.w3.org/2000/svg">
<defs><radialGradient id="edr_bg" cx="50%" cy="50%" r="70%"><stop offset="0%" stop-color="#082010"/><stop offset="100%" stop-color="#051a0a"/></radialGradient><radialGradient id="edr_glow" cx="50%" cy="45%" r="45%"><stop offset="0%" stop-color="#2ea84c" stop-opacity=".4"/><stop offset="100%" stop-color="#2ea84c" stop-opacity="0"/></radialGradient></defs>
<rect width="130" height="82" fill="url(#edr_bg)"/>
<ellipse cx="65" cy="40" rx="30" ry="38" fill="url(#edr_glow)"/>
<path d="M52 72 Q55 45 65 30 Q75 45 78 72" fill="#1a4a28" opacity=".4"/>
<path d="M52 72 Q55 45 65 30 Q75 45 78 72" stroke="#2ea84c" stroke-width="1.5" fill="none" opacity=".6"/>
<ellipse cx="65" cy="28" rx="12" ry="14" fill="#1a4a28" opacity=".5"/>
<ellipse cx="65" cy="28" rx="10" ry="12" fill="none" stroke="#2ea84c" stroke-width="1.5" opacity=".7"/>
<circle cx="60" cy="25" r="2.5" fill="#2ea84c" opacity=".8"/>
<circle cx="70" cy="25" r="2.5" fill="#2ea84c" opacity=".8"/>
<path d="M40 50 Q50 42 60 48" stroke="#2ea84c" stroke-width="1" fill="none" opacity=".4" stroke-dasharray="2,2"/>
<path d="M70 48 Q80 42 90 50" stroke="#2ea84c" stroke-width="1" fill="none" opacity=".4" stroke-dasharray="2,2"/>
<circle cx="35" cy="35" r="2" fill="#2ea84c" opacity=".3"/>
<circle cx="95" cy="32" r="2" fill="#2ea84c" opacity=".3"/>
<circle cx="42" cy="22" r="1.5" fill="#2ea84c" opacity=".3"/>
<circle cx="88" cy="20" r="1.5" fill="#2ea84c" opacity=".3"/>
</svg>`,

// === SPECTRES ===
'Larve Spectrale': `<svg viewBox="0 0 130 82" xmlns="http://www.w3.org/2000/svg">
<defs><radialGradient id="ae_bg" cx="50%" cy="50%" r="70%"><stop offset="0%" stop-color="#180a30"/><stop offset="100%" stop-color="#080520"/></radialGradient></defs>
<rect width="130" height="82" fill="url(#ae_bg)"/>
<path d="M52 72 Q55 48 65 32 Q75 48 78 72" fill="#2a1848" opacity=".4"/>
<path d="M52 72 Q55 48 65 32 Q75 48 78 72" stroke="#b8a0ff" stroke-width="1" fill="none" opacity=".5" stroke-dasharray="3,3"/>
<ellipse cx="65" cy="28" rx="10" ry="12" fill="#2a1848" opacity=".5"/>
<ellipse cx="65" cy="28" rx="8" ry="10" fill="none" stroke="#b8a0ff" stroke-width="1" opacity=".6"/>
<circle cx="61" cy="25" r="2" fill="#b8a0ff" opacity=".7"/>
<circle cx="69" cy="25" r="2" fill="#b8a0ff" opacity=".7"/>
<circle cx="30" cy="40" r="1.5" fill="#b8a0ff" opacity=".3"/>
<circle cx="100" cy="35" r="1.5" fill="#b8a0ff" opacity=".3"/>
<circle cx="45" cy="22" r="1" fill="#b8a0ff" opacity=".25"/>
<path d="M20 65 Q40 58 65 64 Q90 70 110 64" stroke="#6030c0" stroke-width="1" fill="none" opacity=".3"/>
</svg>`,

'Matelot Fantôme': `<svg viewBox="0 0 130 82" xmlns="http://www.w3.org/2000/svg">
<defs><radialGradient id="saf_bg" cx="50%" cy="40%" r="70%"><stop offset="0%" stop-color="#180a30"/><stop offset="100%" stop-color="#080520"/></radialGradient></defs>
<rect width="130" height="82" fill="url(#saf_bg)"/>
<path d="M48 72 Q52 44 65 28 Q78 44 82 72" fill="#2a1040" opacity=".5"/>
<path d="M48 72 Q52 44 65 28 Q78 44 82 72" stroke="#b8a0ff" stroke-width="1.5" fill="none" opacity=".6"/>
<ellipse cx="65" cy="24" rx="12" ry="14" fill="#2a1040" opacity=".6"/>
<circle cx="59" cy="20" r="3" fill="#b8a0ff" opacity=".9"/>
<circle cx="71" cy="20" r="3" fill="#b8a0ff" opacity=".9"/>
<path d="M57 30 Q62 35 68 30" stroke="#b8a0ff" stroke-width="2" fill="none" opacity=".7"/>
<path d="M56 35 L50 42 L54 40 L52 48" stroke="#b8a0ff" stroke-width="1.5" fill="none" stroke-linecap="round" opacity=".6"/>
<path d="M74 35 L80 42 L76 40 L78 48" stroke="#b8a0ff" stroke-width="1.5" fill="none" stroke-linecap="round" opacity=".6"/>
<ellipse cx="65" cy="35" rx="20" ry="12" fill="#6030c0" opacity=".08"/>
</svg>`,

'Officier Damné': `<svg viewBox="0 0 130 82" xmlns="http://www.w3.org/2000/svg">
<defs><linearGradient id="og_bg" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" stop-color="#080520"/><stop offset="100%" stop-color="#100830"/></linearGradient></defs>
<rect width="130" height="82" fill="url(#og_bg)"/>
<path d="M10 60 Q30 55 55 58 Q80 61 110 56 Q95 65 70 63 Q45 61 20 66 Z" fill="#180a38" opacity=".7"/>
<path d="M10 62 Q30 57 55 60 Q80 63 110 58" stroke="#6030c0" stroke-width="1.5" fill="none" opacity=".5"/>
<path d="M55 60 L60 35 L65 58 Z" fill="#2a1048" opacity=".6"/>
<ellipse cx="62" cy="32" rx="9" ry="10" fill="#1a0838" opacity=".7"/>
<ellipse cx="62" cy="32" rx="7" ry="8" fill="none" stroke="#b8a0ff" stroke-width="1" opacity=".5"/>
<circle cx="58" cy="30" r="2" fill="#b8a0ff" opacity=".7"/>
<circle cx="66" cy="30" r="2" fill="#b8a0ff" opacity=".7"/>
<path d="M22 58 Q40 52 60 57" stroke="#b8a0ff" stroke-width="1" fill="none" opacity=".3" stroke-dasharray="2,3"/>
<path d="M70 55 Q90 50 108 55" stroke="#b8a0ff" stroke-width="1" fill="none" opacity=".3" stroke-dasharray="2,3"/>
</svg>`,

'Canonnier Maudit': `<svg viewBox="0 0 130 82" xmlns="http://www.w3.org/2000/svg">
<defs><radialGradient id="fv_bg" cx="50%" cy="45%" r="70%"><stop offset="0%" stop-color="#180a30"/><stop offset="100%" stop-color="#080520"/></radialGradient></defs>
<rect width="130" height="82" fill="url(#fv_bg)"/>
<path d="M48 72 Q52 42 65 26 Q78 42 82 72" fill="#2a1040" opacity=".5"/>
<path d="M48 72 Q52 42 65 26 Q78 42 82 72" stroke="#b8a0ff" stroke-width="1.5" fill="none" opacity=".6"/>
<ellipse cx="65" cy="22" rx="13" ry="15" fill="#2a1040" opacity=".6"/>
<circle cx="59" cy="18" r="3.5" fill="#b8a0ff" opacity=".9"/>
<circle cx="71" cy="18" r="3.5" fill="#b8a0ff" opacity=".9"/>
<path d="M55 30 L40 45 Q38 48 42 50 L48 42" stroke="#8060b0" stroke-width="3" fill="none" stroke-linecap="round" opacity=".7"/>
<path d="M75 30 L90 45 Q92 48 88 50 L82 42" stroke="#8060b0" stroke-width="3" fill="none" stroke-linecap="round" opacity=".7"/>
<path d="M48 42 L36 55 L40 56 L30 68" stroke="#b8a0ff" stroke-width="1.5" fill="none" opacity=".5"/>
<path d="M82 42 L94 55 L90 56 L100 68" stroke="#b8a0ff" stroke-width="1.5" fill="none" opacity=".5"/>
</svg>`,

'Amiral Fantôme': `<svg viewBox="0 0 130 82" xmlns="http://www.w3.org/2000/svg">
<defs><radialGradient id="sh_bg" cx="50%" cy="40%" r="70%"><stop offset="0%" stop-color="#180a30"/><stop offset="100%" stop-color="#080520"/></radialGradient><radialGradient id="sh_glow" cx="50%" cy="35%" r="40%"><stop offset="0%" stop-color="#b8a0ff" stop-opacity=".3"/><stop offset="100%" stop-color="#b8a0ff" stop-opacity="0"/></radialGradient></defs>
<rect width="130" height="82" fill="url(#sh_bg)"/>
<ellipse cx="65" cy="30" rx="25" ry="30" fill="url(#sh_glow)"/>
<path d="M50 72 Q54 44 65 28 Q76 44 80 72" fill="#2a1040" opacity=".5"/>
<path d="M50 72 Q54 44 65 28 Q76 44 80 72" stroke="#b8a0ff" stroke-width="1.5" fill="none" opacity=".7"/>
<ellipse cx="65" cy="24" rx="13" ry="14" fill="#2a1040" opacity=".7"/>
<circle cx="59" cy="20" r="3.5" fill="#fff" opacity=".8"/>
<circle cx="71" cy="20" r="3.5" fill="#fff" opacity=".8"/>
<ellipse cx="65" cy="31" rx="6" ry="8" fill="#080520"/>
<path d="M59 31 L71 31" stroke="#b8a0ff" stroke-width="1" fill="none" opacity=".5"/>
<path d="M35 25 Q48 20 58 24" stroke="#b8a0ff" stroke-width="1.5" fill="none" opacity=".4" stroke-dasharray="3,2"/>
<path d="M72 24 Q82 20 95 25" stroke="#b8a0ff" stroke-width="1.5" fill="none" opacity=".4" stroke-dasharray="3,2"/>
<path d="M20 35 Q35 28 48 34" stroke="#6030c0" stroke-width="1" fill="none" opacity=".3"/>
<path d="M82 34 Q95 28 110 35" stroke="#6030c0" stroke-width="1" fill="none" opacity=".3"/>
</svg>`,

'Capitaine Maudit': `<svg viewBox="0 0 130 82" xmlns="http://www.w3.org/2000/svg">
<defs><radialGradient id="ldm_bg" cx="50%" cy="50%" r="70%"><stop offset="0%" stop-color="#180a30"/><stop offset="100%" stop-color="#080520"/></radialGradient></defs>
<rect width="130" height="82" fill="url(#ldm_bg)"/>
<path d="M10 62 Q35 54 65 58 Q95 62 120 56 L120 82 L10 82 Z" fill="#100530" opacity=".7"/>
<path d="M10 63 Q35 55 65 59 Q95 63 120 57" stroke="#6030c0" stroke-width="1.5" fill="none" opacity=".5"/>
<path d="M52 62 L58 36 L65 62 Z" fill="#2a1040" opacity=".7"/>
<ellipse cx="62" cy="32" rx="10" ry="11" fill="#180838"/>
<path d="M55 30 L60 24 L65 30 L70 24 L75 30" stroke="#b8a0ff" stroke-width="1.5" fill="none" opacity=".8"/>
<circle cx="58" cy="29" r="2.5" fill="#b8a0ff" opacity=".9"/>
<circle cx="66" cy="29" r="2.5" fill="#b8a0ff" opacity=".9"/>
<path d="M60 36 L50 14 L54 16 L60 38" stroke="#6030c0" stroke-width="2" fill="none"/>
<path d="M50 14 L44 6 L52 12 Q48 8 52 6 Q54 10 52 14" fill="#b8a0ff" opacity=".7"/>
<circle cx="40" cy="50" r="4" fill="#6030c0" opacity=".4"/>
<circle cx="90" cy="46" r="3" fill="#6030c0" opacity=".3"/>
</svg>`,

'Galion Fantôme': `<svg viewBox="0 0 130 82" xmlns="http://www.w3.org/2000/svg">
<defs><radialGradient id="nda_bg" cx="50%" cy="50%" r="70%"><stop offset="0%" stop-color="#180a30"/><stop offset="100%" stop-color="#080520"/></radialGradient></defs>
<rect width="130" height="82" fill="url(#nda_bg)"/>
<path d="M50 72 L56 40 L65 72 Z" fill="#200a3a" opacity=".8"/>
<ellipse cx="61" cy="36" rx="10" ry="11" fill="#1a0832"/>
<ellipse cx="61" cy="36" rx="8" ry="9" fill="none" stroke="#b8a0ff" stroke-width="1" opacity=".5"/>
<circle cx="57" cy="33" r="2.5" fill="#b8a0ff" opacity=".9"/>
<circle cx="65" cy="33" r="2.5" fill="#b8a0ff" opacity=".9"/>
<path d="M61 40 L50 12 L54 14 L61 42" stroke="#8040e0" stroke-width="2.5" fill="none"/>
<path d="M50 12 L44 4 L52 10 Q48 6 52 4 Q55 8 52 12" fill="#b8a0ff" opacity=".7"/>
<path d="M54 14 L38 22 Q32 26 34 32 L42 28" stroke="#6030c0" stroke-width="1.5" fill="none" opacity=".6"/>
<circle cx="30" cy="36" r="5" fill="#6030c0" opacity=".4"/>
<circle cx="26" cy="30" r="3" fill="#6030c0" opacity=".3"/>
<path d="M68 40 L85 30 Q92 26 90 20 L82 24" stroke="#6030c0" stroke-width="1.5" fill="none" opacity=".6"/>
<circle cx="94" cy="18" r="4" fill="#6030c0" opacity=".4"/>
</svg>`,

'Spectre Vengeur': `<svg viewBox="0 0 130 82" xmlns="http://www.w3.org/2000/svg">
<defs><radialGradient id="san_bg" cx="50%" cy="45%" r="70%"><stop offset="0%" stop-color="#180a30"/><stop offset="100%" stop-color="#080520"/></radialGradient></defs>
<rect width="130" height="82" fill="url(#san_bg)"/>
<path d="M48 72 Q52 45 65 30 Q78 45 82 72" fill="#1a0838" opacity=".5"/>
<path d="M48 72 Q52 45 65 30 Q78 45 82 72" stroke="#b8a0ff" stroke-width="1" fill="none" opacity=".5"/>
<ellipse cx="65" cy="26" rx="13" ry="14" fill="#1a0838" opacity=".7"/>
<path d="M54 22 Q58 16 65 18 Q72 16 76 22" stroke="#b8a0ff" stroke-width="1.5" fill="none" opacity=".7"/>
<circle cx="59" cy="23" r="2.5" fill="#b8a0ff" opacity=".8"/>
<circle cx="71" cy="23" r="2.5" fill="#b8a0ff" opacity=".8"/>
<path d="M52 35 L35 42 Q28 46 30 54 L38 50" stroke="#8060b0" stroke-width="3" fill="none" stroke-linecap="round" opacity=".6"/>
<path d="M38 50 Q32 58 36 65" stroke="#8060b0" stroke-width="2" fill="none" stroke-linecap="round" opacity=".5"/>
<path d="M78 35 L95 42 Q102 46 100 54 L92 50" stroke="#8060b0" stroke-width="3" fill="none" stroke-linecap="round" opacity=".6"/>
<path d="M92 50 Q98 58 94 65" stroke="#8060b0" stroke-width="2" fill="none" stroke-linecap="round" opacity=".5"/>
<path d="M56 18 L46 8 L58 14" stroke="#b8a0ff" stroke-width="1" fill="none" opacity=".4" stroke-dasharray="2,2"/>
<path d="M74 18 L84 8 L72 14" stroke="#b8a0ff" stroke-width="1" fill="none" opacity=".4" stroke-dasharray="2,2"/>
</svg>`,

'Vaisseau Maudit': `<svg viewBox="0 0 130 82" xmlns="http://www.w3.org/2000/svg">
<defs><radialGradient id="bdr_bg" cx="50%" cy="40%" r="70%"><stop offset="0%" stop-color="#180a30"/><stop offset="100%" stop-color="#080520"/></radialGradient><radialGradient id="bdr_glow" cx="50%" cy="35%" r="50%"><stop offset="0%" stop-color="#b8a0ff" stop-opacity=".3"/><stop offset="100%" stop-color="#b8a0ff" stop-opacity="0"/></radialGradient></defs>
<rect width="130" height="82" fill="url(#bdr_bg)"/>
<ellipse cx="65" cy="32" rx="30" ry="36" fill="url(#bdr_glow)"/>
<path d="M48 72 Q52 46 65 28 Q78 46 82 72" fill="#2a1040" opacity=".4"/>
<path d="M48 72 Q52 46 65 28 Q78 46 82 72" stroke="#b8a0ff" stroke-width="1.5" fill="none" opacity=".7"/>
<ellipse cx="65" cy="24" rx="14" ry="16" fill="#2a1040" opacity=".6"/>
<circle cx="58" cy="20" r="3" fill="#fff" opacity=".7"/>
<circle cx="72" cy="20" r="3" fill="#fff" opacity=".7"/>
<ellipse cx="65" cy="32" rx="7" ry="9" fill="#080520" opacity=".9"/>
<path d="M58 32 L72 32" stroke="#b8a0ff" stroke-width="1" fill="none" opacity=".5"/>
<path d="M35 20 Q48 14 58 18" stroke="#b8a0ff" stroke-width="2" fill="none" opacity=".5" stroke-dasharray="2,2"/>
<path d="M72 18 Q82 14 95 20" stroke="#b8a0ff" stroke-width="2" fill="none" opacity=".5" stroke-dasharray="2,2"/>
<path d="M20 30 Q35 22 48 28" stroke="#6030c0" stroke-width="1" fill="none" opacity=".3"/>
<path d="M82 28 Q95 22 110 30" stroke="#6030c0" stroke-width="1" fill="none" opacity=".3"/>
</svg>`,

'Le Hollandais Noir': `<svg viewBox="0 0 130 82" xmlns="http://www.w3.org/2000/svg">
<defs><radialGradient id="mds_bg" cx="50%" cy="45%" r="70%"><stop offset="0%" stop-color="#200a38"/><stop offset="100%" stop-color="#080520"/></radialGradient><radialGradient id="mds_glow" cx="50%" cy="40%" r="50%"><stop offset="0%" stop-color="#6030c0" stop-opacity=".4"/><stop offset="100%" stop-color="#6030c0" stop-opacity="0"/></radialGradient></defs>
<rect width="130" height="82" fill="url(#mds_bg)"/>
<ellipse cx="65" cy="35" rx="32" ry="38" fill="url(#mds_glow)"/>
<path d="M46 72 Q52 42 65 24 Q78 42 84 72" fill="#2a1040" opacity=".5"/>
<path d="M46 72 Q52 42 65 24 Q78 42 84 72" stroke="#b8a0ff" stroke-width="2" fill="none" opacity=".7"/>
<ellipse cx="65" cy="20" rx="14" ry="15" fill="#2a1040" opacity=".7"/>
<path d="M54 14 Q58 8 65 10 Q72 8 76 14" stroke="#b8a0ff" stroke-width="2" fill="none" opacity=".8"/>
<path d="M58 10 L60 4 L65 8 L70 4 L72 10" stroke="#b8a0ff" stroke-width="1.5" fill="none" opacity=".7"/>
<circle cx="59" cy="18" r="3.5" fill="#b8a0ff" opacity=".9"/>
<circle cx="71" cy="18" r="3.5" fill="#b8a0ff" opacity=".9"/>
<path d="M52 30 L35 25 Q28 22 28 16 L36 20" stroke="#b8a0ff" stroke-width="2.5" fill="none" stroke-linecap="round" opacity=".7"/>
<path d="M78 30 L95 25 Q102 22 102 16 L94 20" stroke="#b8a0ff" stroke-width="2.5" fill="none" stroke-linecap="round" opacity=".7"/>
<circle cx="24" cy="14" r="5" fill="#6030c0" opacity=".6"/>
<circle cx="106" cy="14" r="5" fill="#6030c0" opacity=".6"/>
</svg>`,

// === TRITONS ===
'Recrue Triton': `<svg viewBox="0 0 130 82" xmlns="http://www.w3.org/2000/svg">
<defs><linearGradient id="jtr_bg" x1="0%" y1="0%" x2="0%" y2="100%"><stop offset="0%" stop-color="#040e1e"/><stop offset="100%" stop-color="#081a34"/></linearGradient></defs>
<rect width="130" height="82" fill="url(#jtr_bg)"/>
<path d="M10 62 Q35 54 65 58 Q95 62 120 56 L120 82 L10 82 Z" fill="#061228" opacity=".7"/>
<path d="M10 63 Q35 55 65 59 Q95 63 120 57" stroke="#06c8e8" stroke-width="1.5" fill="none" opacity=".4"/>
<path d="M54 62 L60 42 L68 62 Z" fill="#0a2040"/>
<ellipse cx="63" cy="38" rx="9" ry="10" fill="#1a3a5a"/>
<path d="M54 50 L44 46 L46 54 Z" fill="#0a2040" opacity=".8"/>
<path d="M44 46 L36 42 L40 50 Z" fill="#1a4060" opacity=".7"/>
<path d="M40 50 Q35 54 32 60" stroke="#1a5080" stroke-width="4" fill="none" stroke-linecap="round" opacity=".6"/>
<path d="M20 60 Q38 54 58 60" stroke="#06c8e8" stroke-width="1" fill="none" opacity=".4"/>
<path d="M80 56 Q98 50 115 56" stroke="#06c8e8" stroke-width="1" fill="none" opacity=".3"/>
</svg>`,

'Fantassin Triton': `<svg viewBox="0 0 130 82" xmlns="http://www.w3.org/2000/svg">
<defs><linearGradient id="ectr_bg" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" stop-color="#040e1e"/><stop offset="100%" stop-color="#081a34"/></linearGradient></defs>
<rect width="130" height="82" fill="url(#ectr_bg)"/>
<path d="M10 64 Q40 56 70 60 Q100 64 120 58 L120 82 L10 82 Z" fill="#06101e" opacity=".7"/>
<path d="M52 64 L58 40 L66 64 Z" fill="#0a2040"/>
<ellipse cx="62" cy="36" rx="9" ry="10" fill="#1a3a5a"/>
<path d="M62 38 L70 8 L74 12 L66 40" stroke="#1a4060" stroke-width="2.5" fill="none"/>
<path d="M70 8 L76 2 L74 14 Z" fill="#06c8e8"/>
<path d="M70 8 L72 5 Q76 4 74 8" fill="#06c8e8" opacity=".6"/>
<path d="M56 38 L40 28 L44 38" fill="#0a2040" opacity=".8"/>
<path d="M40 28 L32 22 L36 32 Z" fill="#1a4060" opacity=".7"/>
<path d="M20 60 Q38 54 58 60" stroke="#06c8e8" stroke-width="1.5" fill="none" opacity=".4"/>
</svg>`,

'Garde Triton': `<svg viewBox="0 0 130 82" xmlns="http://www.w3.org/2000/svg">
<defs><radialGradient id="gtr_bg" cx="50%" cy="50%" r="70%"><stop offset="0%" stop-color="#081a34"/><stop offset="100%" stop-color="#040e1e"/></radialGradient></defs>
<rect width="130" height="82" fill="url(#gtr_bg)"/>
<path d="M50 72 L57 42 L68 72 Z" fill="#0a1e3a"/>
<ellipse cx="62" cy="38" rx="10" ry="11" fill="#1a3a5a"/>
<path d="M38 72 L38 30 Q38 14 55 14 Q56 28 50 36 L50 72 Z" fill="#0a2040" opacity=".9"/>
<path d="M38 30 Q38 14 55 14" stroke="#06c8e8" stroke-width="2.5" fill="none"/>
<path d="M38 44 L50 44" stroke="#06c8e8" stroke-width="1.5" opacity=".7"/>
<path d="M38 56 L50 56" stroke="#1a5080" stroke-width="1.5" opacity=".6"/>
<path d="M38 66 L50 66" stroke="#1a5080" stroke-width="1" opacity=".5"/>
<path d="M40 14 Q34 8 36 4 Q42 8 48 4 Q47 10 43 14" fill="#06c8e8" opacity=".7"/>
<path d="M20 68 Q40 62 62 68 Q84 74 110 68" stroke="#06c8e8" stroke-width="1.5" fill="none" opacity=".4"/>
</svg>`,

'Chevalier Triton': `<svg viewBox="0 0 130 82" xmlns="http://www.w3.org/2000/svg">
<defs><linearGradient id="trc_bg" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" stop-color="#040e1e"/><stop offset="100%" stop-color="#081a34"/></linearGradient></defs>
<rect width="130" height="82" fill="url(#trc_bg)"/>
<path d="M48 72 L56 40 L66 72 Z" fill="#0a1e3a"/>
<ellipse cx="60" cy="36" rx="10" ry="11" fill="#1a3a5a"/>
<path d="M60 38 L68 12 L72 16 L64 40" stroke="#1a4060" stroke-width="2.5" fill="none"/>
<path d="M68 12 L76 5 L73 16 Z" fill="#06c8e8"/>
<path d="M68 12 L70 8 Q74 7 72 12" fill="#06c8e8" opacity=".6"/>
<path d="M52 48 L38 40 L40 50 Z" fill="#0a2040"/>
<path d="M38 40 L28 34 L32 44 Z" fill="#1a5080" opacity=".8"/>
<path d="M20 66 Q38 60 60 66 Q82 72 110 66" stroke="#06c8e8" stroke-width="1.5" fill="none" opacity=".4"/>
</svg>`,

'Sentinelle Triton': `<svg viewBox="0 0 130 82" xmlns="http://www.w3.org/2000/svg">
<defs><radialGradient id="prot_bg" cx="50%" cy="50%" r="70%"><stop offset="0%" stop-color="#081a34"/><stop offset="100%" stop-color="#040e1e"/></radialGradient></defs>
<rect width="130" height="82" fill="url(#prot_bg)"/>
<path d="M52 72 L60 38 L72 72 Z" fill="#0a1e3a"/>
<ellipse cx="65" cy="34" rx="11" ry="12" fill="#1a3a5a"/>
<path d="M32 72 L32 26 Q32 8 55 8 Q56 24 48 34 L48 72 Z" fill="#0a2040" opacity=".95"/>
<path d="M32 26 Q32 8 55 8" stroke="#06c8e8" stroke-width="3" fill="none"/>
<path d="M32 38 L48 38" stroke="#06c8e8" stroke-width="2" opacity=".7"/>
<path d="M32 50 L48 50" stroke="#06c8e8" stroke-width="2" opacity=".6"/>
<path d="M32 62 L48 62" stroke="#1a5080" stroke-width="1.5" opacity=".5"/>
<path d="M34 8 Q28 2 30 -2 Q38 2 46 -2 Q45 6 40 8" fill="#06c8e8" opacity=".8"/>
<ellipse cx="40" cy="36" rx="16" ry="30" fill="#06c8e8" opacity=".04"/>
<path d="M20 68 Q40 62 65 68 Q90 74 110 68" stroke="#06c8e8" stroke-width="1.5" fill="none" opacity=".4"/>
</svg>`,

'Lancier Triton': `<svg viewBox="0 0 130 82" xmlns="http://www.w3.org/2000/svg">
<defs><linearGradient id="trs_bg" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" stop-color="#040e1e"/><stop offset="100%" stop-color="#081a34"/></linearGradient></defs>
<rect width="130" height="82" fill="url(#trs_bg)"/>
<path d="M50 72 L56 44 L64 72 Z" fill="#0a1e3a"/>
<ellipse cx="60" cy="40" rx="9" ry="10" fill="#1a3a5a"/>
<rect x="68" y="30" width="30" height="20" rx="2" fill="#0a2040" opacity=".8"/>
<rect x="70" y="32" width="26" height="16" rx="1" fill="#061228"/>
<path d="M72 36 L90 36" stroke="#06c8e8" stroke-width="1" opacity=".6"/>
<path d="M72 40 L85 40" stroke="#06c8e8" stroke-width="1" opacity=".5"/>
<path d="M72 44 L88 44" stroke="#06c8e8" stroke-width="1" opacity=".4"/>
<circle cx="92" cy="36" r="2" fill="#06c8e8" opacity=".7"/>
<path d="M60 44 L68 38" stroke="#1a4060" stroke-width="1.5" fill="none" opacity=".6"/>
<path d="M20 66 Q38 60 58 66" stroke="#06c8e8" stroke-width="1" fill="none" opacity=".3"/>
</svg>`,

'Paladin Triton': `<svg viewBox="0 0 130 82" xmlns="http://www.w3.org/2000/svg">
<defs><radialGradient id="batr_bg" cx="50%" cy="50%" r="70%"><stop offset="0%" stop-color="#081a34"/><stop offset="100%" stop-color="#040e1e"/></radialGradient><radialGradient id="batr_glow" cx="50%" cy="50%" r="50%"><stop offset="0%" stop-color="#06c8e8" stop-opacity=".3"/><stop offset="100%" stop-color="#06c8e8" stop-opacity="0"/></radialGradient></defs>
<rect width="130" height="82" fill="url(#batr_bg)"/>
<ellipse cx="65" cy="41" rx="38" ry="36" fill="url(#batr_glow)"/>
<path d="M28 72 Q28 20 65 12 Q102 20 102 72" fill="none" stroke="#06c8e8" stroke-width="2" opacity=".6"/>
<path d="M35 72 Q35 25 65 18 Q95 25 95 72" fill="none" stroke="#06c8e8" stroke-width="1.5" opacity=".4"/>
<path d="M42 72 Q42 30 65 24 Q88 30 88 72" fill="none" stroke="#1a5080" stroke-width="1" opacity=".3"/>
<path d="M52 72 L58 44 L68 72 Z" fill="#0a2040" opacity=".7"/>
<ellipse cx="63" cy="40" rx="10" ry="11" fill="#1a3a5a"/>
<path d="M58 46 L52 50 M68 46 L74 50" stroke="#06c8e8" stroke-width="2" stroke-linecap="round" opacity=".7"/>
</svg>`,

'Commandant Triton': `<svg viewBox="0 0 130 82" xmlns="http://www.w3.org/2000/svg">
<defs><radialGradient id="comt_bg" cx="50%" cy="45%" r="70%"><stop offset="0%" stop-color="#081a34"/><stop offset="100%" stop-color="#040e1e"/></radialGradient></defs>
<rect width="130" height="82" fill="url(#comt_bg)"/>
<path d="M48 72 L56 38 L70 72 Z" fill="#0a1e3a"/>
<ellipse cx="62" cy="34" rx="12" ry="13" fill="#1a3a5a"/>
<path d="M52 28 Q55 18 62 20 Q69 18 72 28" stroke="#06c8e8" stroke-width="1.5" fill="none" opacity=".8"/>
<path d="M56 20 L54 12 L62 18 L70 12 L68 20" fill="#06c8e8" opacity=".7"/>
<path d="M62 38 L70 10 L74 14 L66 40" stroke="#1a5080" stroke-width="2.5" fill="none"/>
<path d="M70 10 L80 4 L76 14 Z" fill="#06c8e8"/>
<path d="M44 50 L30 44 L34 56 Z" fill="#0a2040"/>
<path d="M30 44 L18 38 L22 48 Z" fill="#1a5080" opacity=".7"/>
<path d="M20 68 Q42 62 65 68 Q88 74 110 68" stroke="#06c8e8" stroke-width="1.5" fill="none" opacity=".4"/>
</svg>`,

'Général Triton': `<svg viewBox="0 0 130 82" xmlns="http://www.w3.org/2000/svg">
<defs><linearGradient id="fda_bg" x1="0%" y1="30%" x2="0%" y2="100%"><stop offset="0%" stop-color="#040e1e"/><stop offset="100%" stop-color="#081a34"/></linearGradient></defs>
<rect width="130" height="82" fill="url(#fda_bg)"/>
<path d="M10 64 Q40 56 70 60 Q100 64 120 58 L120 82 L10 82 Z" fill="#050e1e" opacity=".7"/>
<path d="M10 65 Q40 57 70 61 Q100 65 120 59" stroke="#06c8e8" stroke-width="1" fill="none" opacity=".3"/>
<path d="M52 64 L58 38 L66 64 Z" fill="#0a1e3a"/>
<ellipse cx="62" cy="34" rx="11" ry="12" fill="#1a3a5a"/>
<path d="M66 38 L80 28 L84 32 L70 40" fill="#3a1a06" opacity=".9"/>
<path d="M80 28 L92 22 L90 30 Z" fill="#e87020"/>
<ellipse cx="40" cy="52" rx="10" ry="8" fill="#0a1e3a"/>
<path d="M34 52 L42 44 L46 52 L42 60 Z" fill="#1a3a5a"/>
<circle cx="40" cy="52" r="5" fill="#e87020" opacity=".4"/>
<circle cx="40" cy="52" r="3" fill="#ffa040" opacity=".3"/>
<path d="M20 62 Q38 56 58 62" stroke="#06c8e8" stroke-width="1" fill="none" opacity=".3"/>
</svg>`,

'Roi Poséidon': `<svg viewBox="0 0 130 82" xmlns="http://www.w3.org/2000/svg">
<defs><radialGradient id="rdt_bg" cx="50%" cy="45%" r="70%"><stop offset="0%" stop-color="#081a34"/><stop offset="100%" stop-color="#040e1e"/></radialGradient><radialGradient id="rdt_glow" cx="50%" cy="40%" r="50%"><stop offset="0%" stop-color="#06c8e8" stop-opacity=".3"/><stop offset="100%" stop-color="#06c8e8" stop-opacity="0"/></radialGradient></defs>
<rect width="130" height="82" fill="url(#rdt_bg)"/>
<ellipse cx="65" cy="35" rx="30" ry="36" fill="url(#rdt_glow)"/>
<path d="M46 72 L55 36 L74 72 Z" fill="#0a1e3a"/>
<ellipse cx="64" cy="32" rx="13" ry="14" fill="#1a3a5a"/>
<path d="M54 24 Q58 14 64 16 Q70 14 74 24" stroke="#06c8e8" stroke-width="2" fill="none" opacity=".9"/>
<path d="M56 16 L54 8 L64 14 L74 8 L72 16" fill="#06c8e8" opacity=".8"/>
<path d="M64 16 L66 8 L70 14" fill="#ffd060" opacity=".7"/>
<path d="M64 36 L72 8 L77 12 L69 38" stroke="#1a5080" stroke-width="3" fill="none"/>
<path d="M72 8 L82 2 L78 14 Z" fill="#06c8e8"/>
<path d="M72 8 L74 4 Q80 3 77 8" fill="#06c8e8" opacity=".6"/>
<path d="M72 8 L76 6 Q78 10 74 12" fill="#ffd060" opacity=".5"/>
<path d="M46 50 L28 42 L32 54 Z" fill="#0a2040"/>
<path d="M28 42 L16 36 L20 48 Z" fill="#1a5080" opacity=".7"/>
<path d="M20 68 Q44 60 65 66 Q86 72 110 66" stroke="#06c8e8" stroke-width="2" fill="none" opacity=".5"/>
</svg>`,

// === POWER CARDS ===
'Veille Tribale': `<svg viewBox="0 0 130 82" xmlns="http://www.w3.org/2000/svg">
<defs><radialGradient id="vt_bg" cx="50%" cy="60%" r="70%"><stop offset="0%" stop-color="#1e1040"/><stop offset="100%" stop-color="#100820"/></radialGradient><radialGradient id="vt_fire" cx="50%" cy="50%" r="50%"><stop offset="0%" stop-color="#ffd060" stop-opacity=".6"/><stop offset="100%" stop-color="#ffd060" stop-opacity="0"/></radialGradient></defs>
<rect width="130" height="82" fill="url(#vt_bg)"/>
<ellipse cx="65" cy="50" rx="30" ry="22" fill="url(#vt_fire)"/>
<rect x="60" y="42" width="10" height="30" fill="#2a1808" rx="2"/>
<ellipse cx="65" cy="18" rx="10" ry="9" fill="#2a1808"/>
<circle cx="61" cy="17" r="2" fill="#ffd060" opacity=".9"/>
<circle cx="69" cy="17" r="2" fill="#ffd060" opacity=".9"/>
<path d="M57 24 L73 24" stroke="#ffd060" stroke-width="1" opacity=".6"/>
<circle cx="65" cy="32" r="4" fill="#8050e0" opacity=".7"/>
<path d="M57 38 L73 38" stroke="#8050e0" stroke-width="1.5" opacity=".5"/>
<path d="M60 48 L56 38 L64 44 L65 30 L66 44 L74 38 L70 48" fill="#ffd060" opacity=".9"/>
<path d="M62 45 L64 36 L66 45" fill="#ff8020" opacity=".7"/>
<ellipse cx="65" cy="55" rx="18" ry="8" fill="#ffd060" opacity=".08"/>
</svg>`,

'Chant du Clan': `<svg viewBox="0 0 130 82" xmlns="http://www.w3.org/2000/svg">
<defs><radialGradient id="cdc_bg" cx="50%" cy="50%" r="70%"><stop offset="0%" stop-color="#1e1040"/><stop offset="100%" stop-color="#100820"/></radialGradient></defs>
<rect width="130" height="82" fill="url(#cdc_bg)"/>
<path d="M58 48 L58 28 L72 32 L72 52 Z" fill="#8050e0" opacity=".8"/>
<circle cx="55" cy="50" r="5" fill="#8050e0" opacity=".8"/>
<circle cx="69" cy="54" r="5" fill="#8050e0" opacity=".8"/>
<path d="M42 35 Q48 28 55 32 Q52 38 48 36" stroke="#ffd060" stroke-width="2" fill="none" opacity=".7"/>
<path d="M38 28 Q46 20 55 24" stroke="#ffd060" stroke-width="1.5" fill="none" opacity=".5"/>
<path d="M78 30 Q84 23 91 27 Q88 33 84 31" stroke="#ffd060" stroke-width="2" fill="none" opacity=".7"/>
<path d="M82 23 Q90 15 99 19" stroke="#ffd060" stroke-width="1.5" fill="none" opacity=".5"/>
<circle cx="35" cy="42" r="3" fill="#ffd060" opacity=".5"/>
<circle cx="95" cy="38" r="3" fill="#ffd060" opacity=".5"/>
<circle cx="28" cy="32" r="2" fill="#ffd060" opacity=".3"/>
<circle cx="102" cy="28" r="2" fill="#ffd060" opacity=".3"/>
<path d="M20 65 Q40 58 65 63 Q90 68 110 63" stroke="#8050e0" stroke-width="1" fill="none" opacity=".3"/>
</svg>`,

'Offrande aux Totems': `<svg viewBox="0 0 130 82" xmlns="http://www.w3.org/2000/svg">
<defs><radialGradient id="oat_bg" cx="50%" cy="50%" r="70%"><stop offset="0%" stop-color="#1e1040"/><stop offset="100%" stop-color="#100820"/></radialGradient><radialGradient id="oat_glow" cx="50%" cy="40%" r="50%"><stop offset="0%" stop-color="#ffd060" stop-opacity=".5"/><stop offset="100%" stop-color="#ffd060" stop-opacity="0"/></radialGradient></defs>
<rect width="130" height="82" fill="url(#oat_bg)"/>
<ellipse cx="65" cy="40" rx="28" ry="38" fill="url(#oat_glow)"/>
<ellipse cx="65" cy="58" rx="20" ry="8" fill="#1a0808"/>
<path d="M52 58 Q55 52 65 50 Q75 52 78 58 Q75 64 65 66 Q55 64 52 58 Z" fill="#2a1010"/>
<path d="M65 50 L62 30 L65 35 L68 30 L65 50" fill="#ffd060" opacity=".9"/>
<path d="M65 35 L58 20 L62 28 L65 22 L68 28 L72 20 L65 35" fill="#ffa030" opacity=".8"/>
<path d="M65 22 L63 12 L65 18 L67 12 L65 22" fill="#ff6010" opacity=".7"/>
<circle cx="65" cy="10" r="3" fill="#ffd060" opacity=".9"/>
<path d="M48 48 Q45 40 48 32" stroke="#ffd060" stroke-width="1" fill="none" opacity=".4" stroke-dasharray="2,2"/>
<path d="M82 48 Q85 40 82 32" stroke="#ffd060" stroke-width="1" fill="none" opacity=".4" stroke-dasharray="2,2"/>
<path d="M38 44 Q34 36 36 28" stroke="#ffd060" stroke-width="1" fill="none" opacity=".3" stroke-dasharray="2,2"/>
<path d="M92 44 Q96 36 94 28" stroke="#ffd060" stroke-width="1" fill="none" opacity=".3" stroke-dasharray="2,2"/>
</svg>`,

'Frappe Tribale': `<svg viewBox="0 0 130 82" xmlns="http://www.w3.org/2000/svg">
<defs><radialGradient id="ft_bg" cx="50%" cy="50%" r="70%"><stop offset="0%" stop-color="#1e1040"/><stop offset="100%" stop-color="#100820"/></radialGradient><radialGradient id="ft_burst" cx="50%" cy="50%" r="50%"><stop offset="0%" stop-color="#ffd060" stop-opacity=".5"/><stop offset="100%" stop-color="#ffd060" stop-opacity="0"/></radialGradient></defs>
<rect width="130" height="82" fill="url(#ft_bg)"/>
<ellipse cx="72" cy="42" rx="28" ry="28" fill="url(#ft_burst)"/>
<path d="M50 60 L56 42 L62 50 L58 60 Z" fill="#2a1030" opacity=".8"/>
<path d="M56 42 L62 34 L68 42 L62 50 Z" fill="#3a1840"/>
<path d="M62 34 L67 28 L72 34 L68 42 L62 34 Z" fill="#2a1030" opacity=".7"/>
<path d="M72 42 L80 20 L86 28 L82 36 L90 30 L95 38 L85 42 Z" fill="#8050e0" opacity=".7"/>
<path d="M72 42 L60 16 L66 24 L60 30 L68 24 L72 32 Z" fill="#ffd060" opacity=".8"/>
<circle cx="72" cy="42" r="8" fill="#ffd060" opacity=".3"/>
<circle cx="72" cy="42" r="4" fill="#fff" opacity=".2"/>
<path d="M40 30 L48 38 M30 42 L42 45 M38 55 L50 52" stroke="#ffd060" stroke-width="1.5" fill="none" opacity=".4"/>
</svg>`,

'Appel du Totem': `<svg viewBox="0 0 130 82" xmlns="http://www.w3.org/2000/svg">
<defs><radialGradient id="adt_bg" cx="50%" cy="50%" r="70%"><stop offset="0%" stop-color="#1e1040"/><stop offset="100%" stop-color="#100820"/></radialGradient></defs>
<rect width="130" height="82" fill="url(#adt_bg)"/>
<rect x="61" y="28" width="8" height="50" fill="#2a1808" rx="2" opacity=".8"/>
<ellipse cx="65" cy="32" rx="10" ry="8" fill="#1a1020"/>
<circle cx="61" cy="30" r="2" fill="#ffd060" opacity=".9"/>
<circle cx="69" cy="30" r="2" fill="#ffd060" opacity=".9"/>
<path d="M57 36 L73 36" stroke="#ffd060" stroke-width="1" opacity=".6"/>
<circle cx="65" cy="44" r="4" fill="#8050e0" opacity=".7"/>
<path d="M40 12 L50 18 L55 12 L60 8 L65 12 L70 8 L75 12 L80 18 L90 12" stroke="#ffd060" stroke-width="2" fill="none" opacity=".7"/>
<path d="M50 18 L52 28" stroke="#ffd060" stroke-width="1.5" fill="none" opacity=".5"/>
<path d="M80 18 L78 28" stroke="#ffd060" stroke-width="1.5" fill="none" opacity=".5"/>
<path d="M65 12 L65 22" stroke="#ffd060" stroke-width="1.5" fill="none" opacity=".5"/>
<circle cx="40" cy="12" r="3" fill="#ffd060" opacity=".6"/>
<circle cx="90" cy="12" r="3" fill="#ffd060" opacity=".6"/>
<circle cx="65" cy="8" r="3" fill="#8050e0" opacity=".7"/>
<ellipse cx="65" cy="18" rx="30" ry="12" fill="#ffd060" opacity=".06"/>
</svg>`,

'Bénédiction Ancestrale': `<svg viewBox="0 0 130 82" xmlns="http://www.w3.org/2000/svg">
<defs><radialGradient id="ba_bg" cx="50%" cy="50%" r="70%"><stop offset="0%" stop-color="#1e1040"/><stop offset="100%" stop-color="#100820"/></radialGradient><radialGradient id="ba_glow" cx="50%" cy="45%" r="50%"><stop offset="0%" stop-color="#60ff80" stop-opacity=".4"/><stop offset="100%" stop-color="#60ff80" stop-opacity="0"/></radialGradient></defs>
<rect width="130" height="82" fill="url(#ba_bg)"/>
<ellipse cx="65" cy="42" rx="30" ry="34" fill="url(#ba_glow)"/>
<path d="M48 55 L52 40 L58 48 L65 32 L72 48 L78 40 L82 55" fill="none" stroke="#60ff80" stroke-width="1.5" opacity=".6"/>
<circle cx="50" cy="36" r="8" fill="#2a1040" opacity=".7"/>
<path d="M46 34 L54 34 M50 30 L50 38" stroke="#60ff80" stroke-width="2" stroke-linecap="round" opacity=".8"/>
<circle cx="80" cy="36" r="8" fill="#2a1040" opacity=".7"/>
<path d="M76 34 L84 34 M80 30 L80 38" stroke="#60ff80" stroke-width="2" stroke-linecap="round" opacity=".8"/>
<path d="M58 25 L72 25" stroke="#ffd060" stroke-width="1.5" fill="none" opacity=".5"/>
<path d="M54 20 L76 20" stroke="#ffd060" stroke-width="1" fill="none" opacity=".4"/>
<path d="M50 15 L80 15" stroke="#ffd060" stroke-width="1" fill="none" opacity=".3"/>
<ellipse cx="65" cy="42" rx="22" ry="18" fill="#60ff80" opacity=".05"/>
</svg>`,

'Furie de Guerre': `<svg viewBox="0 0 130 82" xmlns="http://www.w3.org/2000/svg">
<defs><radialGradient id="fdg_bg" cx="50%" cy="45%" r="70%"><stop offset="0%" stop-color="#1e1040"/><stop offset="100%" stop-color="#100820"/></radialGradient><radialGradient id="fdg_fire" cx="50%" cy="50%" r="50%"><stop offset="0%" stop-color="#e03010" stop-opacity=".5"/><stop offset="100%" stop-color="#e03010" stop-opacity="0"/></radialGradient></defs>
<rect width="130" height="82" fill="url(#fdg_bg)"/>
<ellipse cx="65" cy="40" rx="32" ry="36" fill="url(#fdg_fire)"/>
<path d="M50 70 L58 40 L68 70 Z" fill="#2a1020" opacity=".8"/>
<ellipse cx="63" cy="36" rx="12" ry="13" fill="#2a1030"/>
<path d="M52 38 L38 28 L42 40 Z" fill="#1a0828" opacity=".8"/>
<path d="M74 38 L88 28 L84 40 Z" fill="#1a0828" opacity=".8"/>
<path d="M55 24 L60 8 L64 18 L65 4 L66 18 L70 8 L75 24" fill="#e03010" opacity=".8"/>
<path d="M58 18 L62 8 L64 14 L65 6 L66 14 L68 8 L72 18" fill="#ffa030" opacity=".7"/>
<path d="M60 14 L63 6 L65 10 L67 6 L70 14" fill="#ffd060" opacity=".6"/>
<ellipse cx="65" cy="38" rx="14" ry="10" fill="#e03010" opacity=".1"/>
</svg>`,

'Vision Chamanique': `<svg viewBox="0 0 130 82" xmlns="http://www.w3.org/2000/svg">
<defs><radialGradient id="vc_bg" cx="50%" cy="50%" r="70%"><stop offset="0%" stop-color="#1e1040"/><stop offset="100%" stop-color="#100820"/></radialGradient><radialGradient id="vc_eye" cx="50%" cy="50%" r="50%"><stop offset="0%" stop-color="#8050e0" stop-opacity=".5"/><stop offset="100%" stop-color="#8050e0" stop-opacity="0"/></radialGradient></defs>
<rect width="130" height="82" fill="url(#vc_bg)"/>
<ellipse cx="65" cy="38" rx="32" ry="28" fill="url(#vc_eye)"/>
<path d="M20 38 Q40 18 65 22 Q90 18 110 38 Q90 58 65 54 Q40 58 20 38 Z" fill="none" stroke="#8050e0" stroke-width="1.5" opacity=".6"/>
<path d="M30 38 Q46 26 65 30 Q84 26 100 38 Q84 50 65 46 Q46 50 30 38 Z" fill="none" stroke="#8050e0" stroke-width="1" opacity=".4"/>
<circle cx="65" cy="38" r="14" fill="#1a0828" opacity=".8"/>
<circle cx="65" cy="38" r="10" fill="#2a1040"/>
<circle cx="65" cy="38" r="6" fill="#8050e0" opacity=".9"/>
<circle cx="65" cy="38" r="3" fill="#ffd060" opacity=".9"/>
<circle cx="62" cy="35" r="1.5" fill="#fff" opacity=".7"/>
<path d="M52 60 L56 48 L65 54 L74 48 L78 60" stroke="#8050e0" stroke-width="1.5" fill="none" opacity=".5"/>
<path d="M40 65 Q52 58 65 62 Q78 58 90 65" stroke="#8050e0" stroke-width="1" fill="none" opacity=".4"/>
<circle cx="28" cy="38" r="2" fill="#ffd060" opacity=".4"/>
<circle cx="102" cy="38" r="2" fill="#ffd060" opacity=".4"/>
</svg>`,


// ── Nouveaux Pirates (Phase 1) ──
'Crabe Nain': `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 130 82">
<defs><radialGradient id="cn1a" cx="50%" cy="60%"><stop offset="0%" stop-color="#1a0e04"/><stop offset="100%" stop-color="#060408"/></radialGradient></defs>
<rect width="130" height="82" fill="url(#cn1a)"/>
<path d="M0 55 Q32 48 65 52 Q98 56 130 50 L130 82 L0 82Z" fill="#0d1828"/>
<path d="M0 62 Q32 56 65 60 Q98 64 130 58 L130 82 L0 82Z" fill="#101e30"/>
<ellipse cx="65" cy="46" rx="18" ry="12" fill="#7a3010"/>
<ellipse cx="65" cy="46" rx="14" ry="9" fill="#a04018"/>
<path d="M58 44 L52 38 M60 43 L54 36" stroke="#7a3010" stroke-width="2" stroke-linecap="round"/>
<path d="M72 44 L78 38 M70 43 L76 36" stroke="#7a3010" stroke-width="2" stroke-linecap="round"/>
<path d="M58 52 L54 58 M62 53 L58 60 M68 53 L72 60 M72 52 L76 58" stroke="#7a3010" stroke-width="1.5" stroke-linecap="round"/>
<ellipse cx="58" cy="43" rx="3" ry="3" fill="#c06020"/><ellipse cx="72" cy="43" rx="3" ry="3" fill="#c06020"/>
<circle cx="58" cy="43" r="1.5" fill="#201008"/><circle cx="72" cy="43" r="1.5" fill="#201008"/>
<path d="M60 48 Q65 52 70 48" stroke="#c06020" stroke-width="1.2" fill="none"/>
</svg>`,

'Gamin des Quais': `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 130 82">
<defs><linearGradient id="gq1a" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stop-color="#0e1a2a"/><stop offset="100%" stop-color="#080c14"/></linearGradient></defs>
<rect width="130" height="82" fill="url(#gq1a)"/>
<rect x="0" y="60" width="130" height="22" fill="#0a1220"/>
<rect x="10" y="50" width="8" height="30" fill="#1a2a40"/><rect x="22" y="45" width="8" height="35" fill="#1a2a40"/>
<rect x="90" y="48" width="8" height="32" fill="#1a2a40"/><rect x="104" y="42" width="8" height="38" fill="#1a2a40"/>
<path d="M0 60 L130 60" stroke="#0d3060" stroke-width="1" opacity=".6"/>
<circle cx="65" cy="36" r="6" fill="#c89060"/>
<rect x="62" y="30" width="6" height="3" fill="#4a3010" rx="1"/>
<rect x="62" y="42" width="6" height="18" fill="#3a4a6a"/>
<path d="M62 45 L54 50 L56 56 L62 52Z" fill="#3a4a6a"/>
<path d="M68 45 L76 50 L74 56 L68 52Z" fill="#3a4a6a"/>
<rect x="62" y="60" width="3" height="12" fill="#2a3a5a"/>
<rect x="65" y="60" width="3" height="12" fill="#243260"/>
<ellipse cx="40" cy="55" rx="12" ry="4" fill="#1a2838" opacity=".8"/>
<path d="M35 55 L42 50 L45 55" stroke="#8a6a30" stroke-width="1.5" fill="none"/>
</svg>`,

'Feu Follet': `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 130 82">
<defs>
  <radialGradient id="ff1a" cx="50%" cy="40%"><stop offset="0%" stop-color="#1e0a00"/><stop offset="100%" stop-color="#080408"/></radialGradient>
  <radialGradient id="ff1b" cx="50%" cy="50%"><stop offset="0%" stop-color="#ffe860" stop-opacity="1"/><stop offset="60%" stop-color="#ff8000" stop-opacity=".6"/><stop offset="100%" stop-color="transparent"/></radialGradient>
</defs>
<rect width="130" height="82" fill="url(#ff1a)"/>
<path d="M0 58 Q32 52 65 56 Q98 60 130 54 L130 82 L0 82Z" fill="#0a0c10"/>
<ellipse cx="65" cy="36" rx="16" ry="22" fill="url(#ff1b)" opacity=".9"/>
<ellipse cx="65" cy="36" rx="7" ry="10" fill="#ffffc0" opacity=".95"/>
<ellipse cx="65" cy="40" rx="4" ry="6" fill="#ffffff"/>
<path d="M62 26 Q65 18 68 22 Q72 14 66 12 Q70 20 65 22 Q60 14 64 12 Q58 18 62 26Z" fill="#ffe860" opacity=".9"/>
<circle cx="40" cy="25" r="4" fill="#ff6000" opacity=".4"/>
<ellipse cx="40" cy="25" rx="2" ry="3" fill="#ffe860" opacity=".5"/>
<circle cx="92" cy="30" r="3" fill="#ff6000" opacity=".3"/>
<ellipse cx="92" cy="30" rx="1.5" ry="2" fill="#ffe860" opacity=".4"/>
<path d="M0 65 Q32 61 65 64 Q98 67 130 62" stroke="#2a1a04" stroke-width="1" fill="none" opacity=".5"/>
</svg>`,

'Gabier Intrépide': `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 130 82">
<defs><linearGradient id="gi1a" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stop-color="#0a1830"/><stop offset="100%" stop-color="#060c1a"/></linearGradient></defs>
<rect width="130" height="82" fill="url(#gi1a)"/>
<path d="M0 55 Q40 48 80 52 Q110 55 130 50 L130 82 L0 82Z" fill="#08101e"/>
<rect x="60" y="5" width="3" height="70" fill="#2a1a08"/>
<path d="M63 8 L90 22 L63 38Z" fill="#c8a050" opacity=".85"/>
<path d="M63 8 L36 22 L63 38Z" fill="#a07840" opacity=".7"/>
<path d="M50 5 L80 5" stroke="#2a1a08" stroke-width="1.5"/>
<circle cx="80" cy="32" r="5" fill="#c8904a"/>
<rect x="77" y="32" width="3" height="16" fill="#c8904a"/>
<path d="M77 34 L72 38 L74 42 L77 38Z" fill="#a07030"/>
<path d="M80 34 L86 38 L84 42 L80 38Z" fill="#a07030"/>
<rect x="77" y="48" width="3" height="12" fill="#a07030"/>
<rect x="80" y="48" width="3" height="12" fill="#884a20"/>
<path d="M20 52 Q32 48 44 52" stroke="#3a6aaa" stroke-width="1.5" fill="none" opacity=".6"/>
<path d="M0 60 Q16 56 32 60" stroke="#3a6aaa" stroke-width="1.2" fill="none" opacity=".4"/>
</svg>`,

'Boucanier des Tempêtes': `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 130 82">
<defs><linearGradient id="bt1a" x1="0" y1="0" x2="1" y2="1"><stop offset="0%" stop-color="#0a1428"/><stop offset="100%" stop-color="#1a0808"/></linearGradient></defs>
<rect width="130" height="82" fill="url(#bt1a)"/>
<path d="M0 44 Q16 40 30 48 Q44 56 60 44 Q76 32 90 44 Q104 56 130 44" stroke="#2a4a80" stroke-width="2" fill="none" opacity=".5"/>
<path d="M0 52 Q20 44 40 52 Q60 60 80 50 Q100 40 130 52 L130 82 L0 82Z" fill="#0a1020"/>
<path d="M20 15 Q40 5 50 20 Q45 8 60 12" stroke="#eeeeee" stroke-width="1.5" fill="none" opacity=".4"/>
<path d="M80 10 Q100 2 110 18 Q105 6 120 10" stroke="#eeeeee" stroke-width="1.5" fill="none" opacity=".3"/>
<circle cx="55" cy="38" r="7" fill="#c8904a"/>
<rect x="52" y="32" width="6" height="3" fill="#3a2010" rx="1"/>
<rect x="52" y="45" width="6" height="20" fill="#2a3a5a"/>
<path d="M52 48 L44 54 L46 60 L52 56Z" fill="#2a3a5a"/>
<path d="M58 48 L66 54 L64 60 L58 56Z" fill="#2a3a5a"/>
<path d="M40 32 Q55 28 70 32" stroke="#c8904a" stroke-width="1.5" fill="none" opacity=".6"/>
<ellipse cx="90" cy="42" rx="20" ry="8" fill="#1a3050" opacity=".6"/>
</svg>`,

'Canonnier des Mers': `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 130 82">
<defs><linearGradient id="cm1a" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stop-color="#0e1a10"/><stop offset="100%" stop-color="#060c08"/></linearGradient></defs>
<rect width="130" height="82" fill="url(#cm1a)"/>
<path d="M0 56 Q32 50 65 54 Q98 58 130 52 L130 82 L0 82Z" fill="#0a1208"/>
<ellipse cx="75" cy="50" rx="30" ry="10" fill="#1a2010"/>
<rect x="48" y="44" width="54" height="12" fill="#2a3020" rx="4"/>
<rect x="96" y="46" width="20" height="8" fill="#202818" rx="2"/>
<rect x="44" y="46" width="12" height="8" fill="#202818" rx="3"/>
<circle cx="60" cy="50" r="6" fill="#181e14"/><circle cx="60" cy="50" r="4" fill="#101408"/>
<circle cx="90" cy="50" r="6" fill="#181e14"/><circle cx="90" cy="50" r="4" fill="#101408"/>
<ellipse cx="116" cy="46" rx="4" ry="2" fill="#ffe060" opacity=".8"/>
<circle cx="116" cy="42" r="4" fill="#ff8000" opacity=".7"/>
<ellipse cx="116" cy="38" rx="5" ry="8" fill="#ff4000" opacity=".5"/>
<circle cx="50" cy="30" r="8" fill="#c8904a"/>
<rect x="47" y="38" width="6" height="18" fill="#3a4a2a"/>
<path d="M102 44 L108 38 L112 40 L106 46Z" fill="#c8904a" opacity=".8"/>
</svg>`,

'Capitaine des Damnés': `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 130 82">
<defs>
  <radialGradient id="cd1a" cx="50%" cy="30%"><stop offset="0%" stop-color="#1a0820"/><stop offset="100%" stop-color="#060408"/></radialGradient>
  <radialGradient id="cd1b" cx="50%" cy="50%"><stop offset="0%" stop-color="#40c870" stop-opacity=".7"/><stop offset="100%" stop-color="transparent"/></radialGradient>
</defs>
<rect width="130" height="82" fill="url(#cd1a)"/>
<path d="M0 55 Q32 50 65 54 Q98 58 130 52 L130 82 L0 82Z" fill="#08060e"/>
<path d="M0 62 Q32 58 65 62 Q98 66 130 60 L130 82 L0 82Z" fill="#0a080e"/>
<ellipse cx="65" cy="36" rx="20" ry="25" fill="url(#cd1b)" opacity=".4"/>
<circle cx="65" cy="24" r="8" fill="#202030"/>
<rect x="58" y="18" width="14" height="5" fill="#101018" rx="1"/>
<path d="M56 18 L65 12 L74 18" stroke="#c8c0e0" stroke-width="1.5" fill="none"/>
<path d="M60 30 L50 26 L48 34" stroke="#404060" stroke-width="1.5" fill="none"/>
<path d="M70 30 L80 26 L82 34" stroke="#404060" stroke-width="1.5" fill="none"/>
<rect x="61" y="32" width="8" height="22" fill="#202030"/>
<path d="M61 35 L52 40 L54 48 L61 44Z" fill="#202030"/>
<path d="M69 35 L78 40 L76 48 L69 44Z" fill="#181828"/>
<circle cx="61" cy="23" r="2" fill="#40d870" opacity=".9"/>
<circle cx="69" cy="23" r="2" fill="#40d870" opacity=".9"/>
<path d="M62 26 Q65 28 68 26" stroke="#40d870" stroke-width="1" fill="none" opacity=".8"/>
<rect x="61" y="54" width="4" height="14" fill="#181828"/>
<rect x="65" y="54" width="4" height="14" fill="#141620"/>
</svg>`,

'Le Hollandais Volant': `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 130 82">
<defs>
  <radialGradient id="hv1a" cx="50%" cy="40%"><stop offset="0%" stop-color="#0e0820"/><stop offset="100%" stop-color="#040408"/></radialGradient>
  <radialGradient id="hv1b" cx="50%" cy="60%"><stop offset="0%" stop-color="#4060d0" stop-opacity=".5"/><stop offset="100%" stop-color="transparent"/></radialGradient>
</defs>
<rect width="130" height="82" fill="url(#hv1a)"/>
<rect width="130" height="82" fill="url(#hv1b)"/>
<circle cx="20" cy="12" r="1" fill="#fff" opacity=".8"/>
<circle cx="50" cy="6" r=".8" fill="#fff" opacity=".6"/>
<circle cx="90" cy="10" r=".7" fill="#fff" opacity=".7"/>
<circle cx="115" cy="18" r=".9" fill="#fff" opacity=".5"/>
<ellipse cx="65" cy="50" rx="50" ry="8" fill="#1a1a40" opacity=".9"/>
<rect x="55" y="20" width="20" height="30" fill="#1a1830" opacity=".9" rx="2"/>
<rect x="58" y="10" width="2.5" height="40" fill="#2a2040"/>
<rect x="72" y="15" width="2.5" height="35" fill="#2a2040"/>
<path d="M60.5 12 L72 20 L60.5 30Z" fill="#3a3060" opacity=".8"/>
<path d="M74.5 17 L86 24 L74.5 33Z" fill="#3a3060" opacity=".7"/>
<path d="M60.5 32 L72 40 L60.5 48Z" fill="#3a3060" opacity=".6"/>
<path d="M30 52 Q65 44 100 52" stroke="#4050c0" stroke-width="1.5" fill="none" opacity=".7"/>
<path d="M20 58 Q65 50 110 58" stroke="#3040a0" stroke-width="1" fill="none" opacity=".5"/>
<path d="M15 66 Q65 56 115 66 L115 82 L15 82Z" fill="#0a0a1e" opacity=".8"/>
<ellipse cx="65" cy="50" rx="48" ry="5" fill="none" stroke="#4060d0" stroke-width="1" opacity=".4"/>
</svg>`,

// ── Nouveaux Élémentaux (Phase 1) ──
'Ondine Gardienne': `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 130 82">
<defs>
  <radialGradient id="og1a" cx="50%" cy="40%"><stop offset="0%" stop-color="#041428"/><stop offset="100%" stop-color="#020810"/></radialGradient>
  <radialGradient id="og1b" cx="50%" cy="50%"><stop offset="0%" stop-color="#40c0ff" stop-opacity=".6"/><stop offset="100%" stop-color="transparent"/></radialGradient>
</defs>
<rect width="130" height="82" fill="url(#og1a)"/>
<rect width="130" height="82" fill="url(#og1b)"/>
<path d="M0 52 Q32 44 65 50 Q98 56 130 48 L130 82 L0 82Z" fill="#04101e"/>
<path d="M0 60 Q32 54 65 58 Q98 62 130 56 L130 82 L0 82Z" fill="#061420"/>
<circle cx="65" cy="30" r="10" fill="#60d0ff" opacity=".6"/>
<ellipse cx="65" cy="30" rx="6" ry="8" fill="#a0e8ff" opacity=".7"/>
<path d="M60 20 Q65 8 70 20" fill="#60d0ff" opacity=".5"/>
<path d="M55 25 Q48 20 50 30" stroke="#40b0e0" stroke-width="1.5" fill="none" opacity=".7"/>
<path d="M75 25 Q82 20 80 30" stroke="#40b0e0" stroke-width="1.5" fill="none" opacity=".7"/>
<path d="M58 38 Q65 50 72 38" fill="#40b0d0" opacity=".6"/>
<path d="M60 42 Q65 56 70 42" fill="#3090b0" opacity=".5"/>
<path d="M20 48 Q32 44 44 48" stroke="#40b0ff" stroke-width="1.5" fill="none" opacity=".5"/>
<path d="M86 48 Q98 44 110 48" stroke="#40b0ff" stroke-width="1.5" fill="none" opacity=".5"/>
<circle cx="60" cy="28" r="2" fill="#e0f8ff" opacity=".9"/>
<circle cx="70" cy="28" r="2" fill="#e0f8ff" opacity=".9"/>
</svg>`,

'Sylphe des Brumes': `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 130 82">
<defs>
  <linearGradient id="sb1a" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stop-color="#0a1428"/><stop offset="100%" stop-color="#040810"/></linearGradient>
  <radialGradient id="sb1b" cx="50%" cy="40%"><stop offset="0%" stop-color="#c0d8ff" stop-opacity=".4"/><stop offset="100%" stop-color="transparent"/></radialGradient>
</defs>
<rect width="130" height="82" fill="url(#sb1a)"/>
<ellipse cx="40" cy="40" rx="35" ry="20" fill="#c0d0e0" opacity=".06"/>
<ellipse cx="90" cy="30" rx="28" ry="15" fill="#c0d0e0" opacity=".05"/>
<rect width="130" height="82" fill="url(#sb1b)"/>
<ellipse cx="65" cy="36" rx="22" ry="28" fill="#d0e8ff" opacity=".12"/>
<ellipse cx="65" cy="30" rx="8" ry="12" fill="#e0f0ff" opacity=".3"/>
<path d="M57 20 Q65 10 73 20 Q78 28 73 36 Q65 44 57 36 Q52 28 57 20Z" fill="#c0d8f0" opacity=".25"/>
<path d="M58 18 Q65 8 72 18" stroke="#e0f0ff" stroke-width="1.5" fill="none" opacity=".5"/>
<path d="M50 30 Q42 25 44 34" stroke="#b0cce0" stroke-width="1.5" fill="none" opacity=".5"/>
<path d="M80 30 Q88 25 86 34" stroke="#b0cce0" stroke-width="1.5" fill="none" opacity=".5"/>
<path d="M0 45 Q20 40 40 45 Q60 50 80 44 Q100 38 130 44" stroke="#b0c8e0" stroke-width="1.5" fill="none" opacity=".3"/>
<path d="M0 52 Q25 47 50 52 Q75 57 100 51 L130 53" stroke="#a0b8d0" stroke-width="1" fill="none" opacity=".25"/>
<circle cx="60" cy="27" r="1.5" fill="#ffffff" opacity=".6"/>
<circle cx="70" cy="27" r="1.5" fill="#ffffff" opacity=".6"/>
</svg>`,

'Esprit Corail': `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 130 82">
<defs><radialGradient id="ec1a" cx="50%" cy="50%"><stop offset="0%" stop-color="#081820"/><stop offset="100%" stop-color="#040c10"/></radialGradient></defs>
<rect width="130" height="82" fill="url(#ec1a)"/>
<path d="M0 54 Q32 48 65 52 Q98 56 130 50 L130 82 L0 82Z" fill="#041018"/>
<path d="M65 60 L65 30" stroke="#ff6080" stroke-width="2" opacity=".5"/>
<path d="M65 30 L58 18 M65 30 L72 16 M65 35 L55 24 M65 35 L75 22 M65 40 L52 32 M65 40 L78 30" stroke="#ff6080" stroke-width="1.5" stroke-linecap="round" opacity=".7"/>
<path d="M65 44 L50 38 M65 44 L80 38" stroke="#ff8090" stroke-width="1.2" opacity=".5"/>
<ellipse cx="65" cy="44" rx="14" ry="6" fill="#ff4060" opacity=".15"/>
<circle cx="50" cy="50" r="3" fill="#ff6090" opacity=".4"/>
<path d="M50 53 L48 44 M50 53 L53 44 M50 53 L46 48" stroke="#ff6090" stroke-width="1" stroke-linecap="round" opacity=".5"/>
<circle cx="82" cy="46" r="2.5" fill="#ff8090" opacity=".4"/>
<path d="M82 49 L80 42 M82 49 L84 42" stroke="#ff8090" stroke-width="1" stroke-linecap="round" opacity=".5"/>
<ellipse cx="65" cy="50" rx="20" ry="4" fill="#ff4060" opacity=".1"/>
</svg>`,

'Djinn des Abysses': `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 130 82">
<defs>
  <radialGradient id="da1a" cx="50%" cy="30%"><stop offset="0%" stop-color="#1a0820"/><stop offset="100%" stop-color="#06040e"/></radialGradient>
  <radialGradient id="da1b" cx="50%" cy="50%"><stop offset="0%" stop-color="#8040ff" stop-opacity=".7"/><stop offset="100%" stop-color="transparent"/></radialGradient>
</defs>
<rect width="130" height="82" fill="url(#da1a)"/>
<rect width="130" height="82" fill="url(#da1b)"/>
<path d="M0 55 Q32 50 65 54 Q98 58 130 52 L130 82 L0 82Z" fill="#0a0614"/>
<ellipse cx="65" cy="32" rx="16" ry="28" fill="#6020d0" opacity=".3"/>
<ellipse cx="65" cy="24" rx="10" ry="14" fill="#8040ff" opacity=".4"/>
<circle cx="65" cy="18" r="8" fill="#4020a0"/>
<path d="M60 14 Q65 8 70 14" stroke="#c080ff" stroke-width="1.5" fill="none"/>
<circle cx="61" cy="17" r="2.5" fill="#e0c0ff" opacity=".9"/>
<circle cx="69" cy="17" r="2.5" fill="#e0c0ff" opacity=".9"/>
<circle cx="61" cy="17" r="1" fill="#3010a0"/>
<circle cx="69" cy="17" r="1" fill="#3010a0"/>
<path d="M55 26 L44 22 L42 30" stroke="#8040d0" stroke-width="1.5" fill="none"/>
<path d="M75 26 L86 22 L88 30" stroke="#8040d0" stroke-width="1.5" fill="none"/>
<path d="M60 32 Q45 42 50 60" stroke="#6020c0" stroke-width="2.5" fill="none" opacity=".7"/>
<path d="M70 32 Q85 42 80 60" stroke="#6020c0" stroke-width="2.5" fill="none" opacity=".7"/>
<ellipse cx="65" cy="50" rx="12" ry="5" fill="#8040ff" opacity=".2"/>
</svg>`,

'Titan des Mers': `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 130 82">
<defs><linearGradient id="tm1a" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stop-color="#040c1a"/><stop offset="100%" stop-color="#02060e"/></linearGradient></defs>
<rect width="130" height="82" fill="url(#tm1a)"/>
<path d="M0 45 Q32 36 65 42 Q98 48 130 40 L130 82 L0 82Z" fill="#060e18"/>
<path d="M0 54 Q32 46 65 50 Q98 54 130 48 L130 82 L0 82Z" fill="#08101c"/>
<ellipse cx="65" cy="38" rx="28" ry="36" fill="#1a3a5a" opacity=".5"/>
<rect x="56" y="8" width="18" height="52" fill="#1a3050" rx="4"/>
<ellipse cx="65" cy="10" rx="10" ry="8" fill="#1e3858"/>
<path d="M54 12 L40 8 L36 18 L50 20Z" fill="#1a3050"/>
<path d="M76 12 L90 8 L94 18 L80 20Z" fill="#1a3050"/>
<path d="M56 30 L38 26 L34 38 L54 38Z" fill="#182848"/>
<path d="M74 30 L92 26 L96 38 L76 38Z" fill="#182848"/>
<circle cx="59" cy="16" r="3" fill="#60c0e0" opacity=".8"/>
<circle cx="71" cy="16" r="3" fill="#60c0e0" opacity=".8"/>
<path d="M60 20 Q65 24 70 20" stroke="#60c0e0" stroke-width="1.2" fill="none" opacity=".7"/>
<rect x="56" y="60" width="8" height="18" fill="#162840"/>
<rect x="66" y="60" width="8" height="18" fill="#12203a"/>
</svg>`,

'Phénix Aquatique': `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 130 82">
<defs>
  <radialGradient id="pa1a" cx="50%" cy="30%"><stop offset="0%" stop-color="#0a1428"/><stop offset="100%" stop-color="#040810"/></radialGradient>
  <radialGradient id="pa1b" cx="50%" cy="40%"><stop offset="0%" stop-color="#40c8ff" stop-opacity=".8"/><stop offset="100%" stop-color="transparent"/></radialGradient>
</defs>
<rect width="130" height="82" fill="url(#pa1a)"/>
<rect width="130" height="82" fill="url(#pa1b)"/>
<path d="M0 55 Q32 48 65 52 Q98 56 130 50 L130 82 L0 82Z" fill="#040c18"/>
<path d="M65 50 Q40 30 20 15 Q40 25 55 18 Q50 35 65 50Z" fill="#20a0e0" opacity=".7"/>
<path d="M65 50 Q90 30 110 15 Q90 25 75 18 Q80 35 65 50Z" fill="#20a0e0" opacity=".7"/>
<path d="M65 50 Q55 25 45 5 Q58 20 65 30 Q72 20 85 5 Q75 25 65 50Z" fill="#60d0ff" opacity=".8"/>
<ellipse cx="65" cy="22" rx="8" ry="6" fill="#a0e8ff" opacity=".9"/>
<circle cx="65" cy="20" r="5" fill="#e0f8ff"/>
<circle cx="62" cy="18" r="1.5" fill="#1a4060"/>
<circle cx="68" cy="18" r="1.5" fill="#1a4060"/>
<path d="M30 50 Q48 40 65 50 Q82 40 100 50" stroke="#40c0f0" stroke-width="2" fill="none" opacity=".5"/>
<path d="M15 60 Q40 52 65 58 Q90 52 115 60" stroke="#2090d0" stroke-width="1.5" fill="none" opacity=".4"/>
</svg>`,

'Léviathan': `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 130 82">
<defs>
  <radialGradient id="lv1a" cx="50%" cy="60%"><stop offset="0%" stop-color="#02080e"/><stop offset="100%" stop-color="#010406"/></radialGradient>
  <radialGradient id="lv1b" cx="50%" cy="50%"><stop offset="0%" stop-color="#004080" stop-opacity=".6"/><stop offset="100%" stop-color="transparent"/></radialGradient>
</defs>
<rect width="130" height="82" fill="url(#lv1a)"/>
<rect width="130" height="82" fill="url(#lv1b)"/>
<path d="M-10 40 Q30 20 65 36 Q100 52 140 32" stroke="#0a2840" stroke-width="16" fill="none" stroke-linecap="round"/>
<path d="M-10 40 Q30 20 65 36 Q100 52 140 32" stroke="#0d3450" stroke-width="10" fill="none" stroke-linecap="round"/>
<ellipse cx="18" cy="38" rx="16" ry="12" fill="#0a2030"/>
<path d="M8 32 L2 20 L14 26Z" fill="#082030"/>
<path d="M12 30 L6 16 L18 22Z" fill="#0a2838"/>
<path d="M24 30 L22 16 L30 24Z" fill="#082030"/>
<circle cx="14" cy="36" r="5" fill="#0a1828"/>
<circle cx="14" cy="36" r="3" fill="#105080"/>
<circle cx="12" cy="34" r="1.5" fill="#40c0ff" opacity=".9"/>
<path d="M125 34 L138 24 L136 38Z" fill="#082030"/>
<path d="M30 44 L26 54 M40 46 L38 56 M50 47 L50 58 M60 46 L62 56 M70 46 L74 56 M80 44 L86 54" stroke="#0a2840" stroke-width="2.5" stroke-linecap="round" opacity=".7"/>
<path d="M0 58 Q32 52 65 56 Q98 60 130 54 L130 82 L0 82Z" fill="#02060c"/>
</svg>`,

};
