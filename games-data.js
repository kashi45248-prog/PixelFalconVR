/* ============================================================
   PixelFalconVR — GAMES DATABASE
   ------------------------------------------------------------
   HOW TO ADD A NEW GAME (3 steps, no other files to touch):
   1. Copy one of the objects below, paste it at the end of the
      GAMES array (before the closing ];), and fill in the fields.
   2. Copy game-template.html to <slug>.html (e.g. "bull-riding.html")
      and replace the ALL-CAPS placeholders.
   3. Add the new page URL to sitemap.xml (copy a <url> block).
   The homepage grid below renders automatically from this file.
   ============================================================ */
const GAMES = [
  {
    slug: "neon-katana",                    // = neon-katana.html
    title: "Neon Katana",
    genre: "VR rhythm game",                // shown on the card
    tagline: "Slice neon blocks to the beat with dual glowing katanas.",
    status: "live",                         // "live" | "coming-soon"
    storeUrl: "https://www.meta.com/experiences/neon-katana/1255286791011725/",
    image: "images/neon-katana-logo.png",
    keywords: "vr rhythm game, games like beat saber, katana vr game, vr slicing game"
  },
  {
    slug: "spirit-sweep",                   // = spirit-sweep.html
    title: "Spirit Sweep VR",
    genre: "VR ghost-hunting game",
    tagline: "Enter the haunting. Wield the relic. Purge the estate.",
    status: "coming-soon",
    storeUrl: "",                           // no store URL until live
    image: "images/spirit-sweep.png",
    keywords: "vr ghost hunting game, vr horror game, ghost cleaning vr, meta quest horror"
  },
  // --- ADD NEW GAMES HERE (copy the block above) ---
];

/* Renders the homepage games grid. No need to edit. */
(function renderGames(){
  var grid = document.getElementById("games-grid");
  if (!grid || typeof GAMES === "undefined") return;
  grid.innerHTML = GAMES.map(function(g){
    var badge = g.status === "live"
      ? '<span class="badge">● LIVE</span>'
      : '<span class="badge soon">COMING SOON</span>';
    var art = '<div class="art"><img src="' + g.image + '" alt="' + g.title + ' — ' + g.genre + '" loading="lazy" onerror="this.parentNode.innerHTML=\'' + g.title + '\'"></div>';
    var cta = g.status === "live"
      ? '<a class="btn" style="padding:9px 20px;font-size:.9rem" href="' + g.slug + '.html">View →</a>'
      : '<a class="btn ghost" style="padding:9px 20px;font-size:.9rem" href="' + g.slug + '.html">Preview →</a>';
    return '<div class="card">' + art + '<div class="body">' +
      '<div>' + badge + '</div>' +
      '<h3>' + g.title + '</h3><div class="genre">' + g.genre + '</div>' +
      '<p>' + g.tagline + '</p>' +
      '<div class="row">' + cta + '</div></div></div>';
  }).join("");
})();
