<div align="center">

<img src="https://github.com/user-attachments/assets/9a548070-e0bc-4419-a64d-9446787fb221" width="80" alt="Ocote">

# Ocote Themes

> Eight color palettes designed from scratch — warm, with the soul of ember. For Ocote and for any terminal.

[**English**](README.md) · [Español](README.es.md)

[![base16](https://img.shields.io/badge/base16-compatible-E8843A?style=flat-square)](https://github.com/tinted-theming/home)
[![license](https://img.shields.io/badge/license-MIT-7DC97A?style=flat-square)](LICENSE)

<img src="https://github.com/user-attachments/assets/244bd2ed-85b5-49d6-acdb-dc94780ddfd6" width="8000">

</div>

---

## Themes

| Theme | Type | Description |
|-------|------|-------------|
| **Ocote** | 🌑 Dark | Charcoal and ember. The signature of the house. |
| **Brasa** | 🌑 Dark | Glowing embers. Warm and intense. |
| **Bosque** | 🌑 Dark | Forest green and resin. |
| **Noche** | 🌑 Dark | Deep blues for the small hours. |
| **Papel** | 🌕 Light | Ink on warm paper. |
| **Tinta** | 🌑 Dark | Near-monochrome. Ink black, ember accent. |
| **Mezcal** | 🌑 Dark | Agave and gold. Earthy and golden. |
| **Cacao** | 🌑 Dark | Dark chocolate and amber. |

---

## Installation per terminal

### Alacritty

Copy the file to your themes folder and reference it in `alacritty.toml`:

```toml
import = ["~/.config/alacritty/themes/ocote.toml"]
```

Files available in `dist/alacritty/`:
```
ocote.toml  brasa.toml  bosque.toml  noche.toml
papel.toml  tinta.toml  mezcal.toml  cacao.toml
```

### Kitty

Copy the file to `~/.config/kitty/` and include it in `kitty.conf`:

```conf
include themes/ocote.conf
```

Files available in `dist/kitty/`.

### Ghostty

Copy the file to `~/.config/ghostty/themes/` and activate it:

```
theme = ocote
```

Files available in `dist/ghostty/` (no extension, as Ghostty requires).

### WezTerm

```lua
-- in your wezterm.lua
local colors = require('ocote-themes.wezterm.ocote')
config.colors = colors
```

Files available in `dist/wezterm/`.

### Windows Terminal

**A single theme:** open `Settings → Open JSON` and add the contents of `dist/windows-terminal/ocote.json` inside the `"schemes"` array.

**All themes at once:** use `dist/windows-terminal/ocote-all.json` — it contains the 8 schemes in a single array ready to paste.

### iTerm2

Open iTerm2 → `Preferences → Profiles → Colors → Color Presets → Import…` and select the `.itermcolors` file from `dist/iterm2/`.

### VS Code / Cursor

> Coming soon — pending marketplace publication. In the meantime, use the [base16 extension from tinted-theming](https://github.com/tinted-theming/tinted-vscode).

### With tinted-theming (any other app)

The base16 sources live in `schemes/`. You can use them with [tinty](https://github.com/tinted-theming/tinty) to generate configs for any of the [200+ supported apps](https://github.com/tinted-theming/home#supported-schemes-and-templates):

```sh
# install tinty
cargo install tinty

# point it at the schemes repo
tinty install --schemes-source https://github.com/Teshre/ocote-themes

# apply a theme
tinty apply ocote
tinty apply mezcal
```

---

## Repo structure

```
ocote-themes/
├── schemes/                  ← source of truth (base16 YAML)
│   ├── ocote.yaml
│   ├── brasa.yaml
│   ├── bosque.yaml
│   ├── noche.yaml
│   ├── papel.yaml
│   ├── tinta.yaml
│   ├── mezcal.yaml
│   └── cacao.yaml
│
├── dist/                     ← generated (do not edit by hand)
│   ├── alacritty/            .toml
│   ├── kitty/                .conf
│   ├── ghostty/              (no extension)
│   ├── wezterm/              .lua
│   ├── windows-terminal/     .json + ocote-all.json
│   └── iterm2/               .itermcolors
│
├── preview/
│   └── gallery.png           ← generated from Ocote Themes.html
│
└── README.md
```

---

## Color philosophy

These palettes are **not renamed versions of existing schemes**. They start from a direction of their own: warmth, contained contrast, and a palette that doesn't tire. The core idea:

- **Warm backgrounds** — charcoal with a hint of coffee, not cold gray.
- **Ember accent** — ember orange as the lead color, instead of the purple or blue that dominates most terminals.
- **Moderate saturation** — colors that read well for 8+ hours straight.
- **Internal cohesion** — the 8 themes are a family, not a random collection.

---

## Contributing

Want to add support for another terminal or suggest a color tweak?

1. Edit the `.yaml` in `schemes/` (never in `dist/` — those are regenerated).
2. Open a PR with the new files in `dist/`.
3. If you add a new format, document its installation in the README.

---

## License

MIT — use them however you want, in whatever you want.

---

*Made with ember by [Teshre](https://github.com/Teshre) · part of the [Ocote](https://github.com/Teshre/Ocote) project*
