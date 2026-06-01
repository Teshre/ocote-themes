// gallery.js — renders the Ocote theme collection: realistic terminal preview
// + full ANSI palette per theme. Reads window.OCOTE_THEME_DATA.
(function () {
  'use strict';
  const THEMES = window.OCOTE_THEME_DATA;
  const ANSI_NAMES = ['black','red','green','yellow','blue','magenta','cyan','white',
                      'br·black','br·red','br·green','br·yellow','br·blue','br·magenta','br·cyan','br·white'];

  // Build a realistic terminal session colored with the theme's ANSI palette.
  // Indices used: 1 red, 2 green, 3 yellow, 4 blue, 5 magenta, 6 cyan.
  function session(t) {
    const a = t.ansi, fg = t.fg, c = t.comment;
    const S = (i, s, bold) => `<span class="${bold ? 'b' : ''}" style="color:${a[i]}">${s}</span>`;
    const F = (s) => `<span style="color:${fg}">${s}</span>`;
    const D = (s) => `<span style="color:${c}">${s}</span>`;
    const prompt = `${S(6, '~/ocote/src', 1)} ${S(2, '⎇ main', 0)} ${S(3, '', 0)}<span style="color:${t.cursor}">❯</span> `;

    return [
      `${prompt}${F('ls')}`,
      `${S(4, 'themes/', 1)}   ${S(4, 'src/', 1)}   ${S(2, 'build.sh', 1)}   ${F('README.md')}   ${S(5, 'ocote.toml', 0)}`,
      '',
      `${prompt}${F('cat theme.rs')}`,
      `${S(5, 'pub fn', 0)} ${S(4, 'load', 0)}(${S(3, 'name', 0)}: ${S(6, '&str', 0)}) ${S(5, '->', 0)} ${S(6, 'Theme', 0)} {`,
      `  ${D('// enciende la pantalla negra')}`,
      `  ${S(5, 'let', 0)} t ${S(5, '=', 0)} Theme::${S(4, 'from', 0)}(${S(2, '"' + t.name.toLowerCase() + '"')});`,
      `  t.${S(4, 'apply', 0)}(${S(3, '0x' + t.cursor.slice(1).toUpperCase(), 0)})`,
      `}`,
      '',
      `${prompt}${F('git status')}`,
      `${D('En la rama')} ${S(2, 'main')} ${S(1, '✦ limpio', 0)}`,
      `${prompt}<span class="cur" style="background:${t.cursor}"></span>`,
    ].join('\n');
  }

  function card(t) {
    const isLight = t.type === 'light';
    const specs = [
      ['bg', t.bg], ['fg', t.fg], ['cursor', t.cursor], ['sel', t.selection],
    ].map(([k, v]) => `<span class="spec"><i style="background:${v}"></i>${k} ${v.toUpperCase()}</span>`).join('');

    const ansi = t.ansi.map((hex, i) =>
      `<i data-hex="${ANSI_NAMES[i]} ${hex.toUpperCase()}" style="background:${hex}"></i>`
    ).join('');

    return `
      <div class="theme">
        <div class="theme-grid">
          <div class="tprev" style="background:${t.bg}">
            <div class="tprev-bar" style="background:${isLight ? 'rgba(0,0,0,.05)' : 'rgba(255,255,255,.03)'}">
              <span class="tl" style="background:#ff5f57"></span>
              <span class="tl" style="background:#febc2e"></span>
              <span class="tl" style="background:#28c840"></span>
              <span class="ttl" style="color:${t.fg}">ocote — ${t.name.toLowerCase()}</span>
            </div>
            <div class="tprev-body" style="color:${t.fg}">${session(t)}</div>
          </div>
          <div class="tinfo">
            <div>
              <div class="tinfo-head">
                <h2>${t.name}</h2>
                <span class="badge ${isLight ? 'light' : ''}">${isLight ? 'Claro' : 'Oscuro'}</span>
              </div>
              <p class="d" style="margin-top:8px">${t.desc}</p>
            </div>
            <div class="specs">${specs}</div>
            <div>
              <div class="ansi-label">16 colores ANSI</div>
              <div class="ansi">${ansi}</div>
            </div>
          </div>
        </div>
      </div>`;
  }

  const root = document.getElementById('gallery');
  if (root) root.innerHTML = THEMES.map(card).join('');
})();
