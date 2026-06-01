// ocote-themes.js — Canonical Ocote theme collection.
// Each theme: full 16-color ANSI palette + special colors. Format-agnostic;
// maps cleanly to base16 (base00–base0F) for cross-terminal generation.
// Original palettes — warm, "mexican ember" direction. Not derived from
// existing schemes (Dracula/Gruvbox/Nord/etc.).

window.OCOTE_THEME_DATA = [
  {
    id: 'ocote', name: 'Ocote', type: 'dark',
    desc: 'Carbón y lumbre. La firma de la casa.',
    bg: '#14100C', fg: '#E7DCC6', cursor: '#E8843A', cursorText: '#14100C',
    selection: '#3A2E1C', comment: '#6B6253',
    ansi: ['#2A2218','#E8635A','#7DC97A','#E8B43A','#82A6E0','#C58AE0','#6DD8C8','#D8CDB6',
           '#4A3E2C','#F2847B','#97D894','#F2C863','#A0BEE8','#D6A6EC','#92E6D8','#FAF6EC'],
  },
  {
    id: 'brasa', name: 'Brasa', type: 'dark',
    desc: 'Rescoldos al rojo. Cálido e intenso.',
    bg: '#1A0F0A', fg: '#F0D8C0', cursor: '#FF7A4D', cursorText: '#1A0F0A',
    selection: '#45261A', comment: '#7A6150',
    ansi: ['#36241A','#F2685A','#B8C24A','#F0B23A','#9AA6E0','#E68AA2','#6BC8B8','#E8D0BC',
           '#5A3A28','#FF8A6A','#CCD66A','#FFC95E','#B4BEEC','#F2A6BA','#8EE0D2','#FBEAD8'],
  },
  {
    id: 'bosque', name: 'Bosque', type: 'dark',
    desc: 'Verde de monte y resina.',
    bg: '#0E1410', fg: '#CFE5D2', cursor: '#7DC97A', cursorText: '#0E1410',
    selection: '#1E3023', comment: '#5C6E5E',
    ansi: ['#1C2A20','#E2706A','#6FC56E','#C8B84A','#6DAE9E','#B894D0','#5FD0B8','#BCD4BE',
           '#35503E','#F08A82','#8FD88C','#DCCC66','#8FC4B6','#CEAAE2','#82E0CC','#E4F0E2'],
  },
  {
    id: 'noche', name: 'Noche', type: 'dark',
    desc: 'Azules profundos para la madrugada.',
    bg: '#0C0E16', fg: '#CBD4EC', cursor: '#82A6E0', cursorText: '#0C0E16',
    selection: '#232A40', comment: '#5A6178',
    ansi: ['#20253A','#E2727E','#7CC596','#D8C062','#7AA0E8','#B79AE0','#6DD8D0','#BAC2DC',
           '#3A4260','#F08A96','#98D8AE','#E8D484','#9CBAF0','#CEB4EC','#8EE6DE','#E6ECFA'],
  },
  {
    id: 'papel', name: 'Papel', type: 'light',
    desc: 'Claro, de día. Tinta sobre papel cálido.',
    bg: '#F5EFE2', fg: '#3A2E20', cursor: '#C25C1F', cursorText: '#F5EFE2',
    selection: '#E0D0AC', comment: '#9A8C76',
    ansi: ['#4A3E2E','#C0392B','#5E7A28','#A8761A','#2C6CA0','#9B4D8E','#2A8A7A','#D8CCB4',
           '#6E6353','#D04A38','#6E8A30','#C28A24','#3A7CB0','#A85C9C','#36A090','#EFE8D8'],
  },
  {
    id: 'tinta', name: 'Tinta', type: 'dark',
    desc: 'Casi monocromo. Negro tinta, acento brasa.',
    bg: '#101012', fg: '#D8D6D0', cursor: '#E8843A', cursorText: '#101012',
    selection: '#2C2C30', comment: '#62626A',
    ansi: ['#2A2A2E','#D0726A','#9AA890','#C8B86A','#8A9AB0','#B0A0B8','#80B8B4','#C4C2BC',
           '#4A4A50','#E08A80','#B2C0A8','#DCCC84','#A6B4C8','#C6B6CE','#98CEC8','#EEECE6'],
  },
  {
    id: 'mezcal', name: 'Mezcal', type: 'dark',
    desc: 'Agave y oro. Terroso y dorado.',
    bg: '#13110E', fg: '#E0D8C8', cursor: '#D9A441', cursorText: '#13110E',
    selection: '#36301E', comment: '#6E6450',
    ansi: ['#2C2818','#DA6E54','#A8B84A','#D9A441','#8AA6C0','#C28AA8','#6FC8AE','#D2C8B0',
           '#4E462C','#EC8A6E','#C0D066','#ECC468','#A6BED4','#DCA6C2','#8EE0C8','#F2EAD6'],
  },
  {
    id: 'cacao', name: 'Cacao', type: 'dark',
    desc: 'Chocolate amargo y ámbar.',
    bg: '#160F0C', fg: '#E8D6C4', cursor: '#C77B4A', cursorText: '#160F0C',
    selection: '#3A281E', comment: '#766052',
    ansi: ['#2E2018','#E0705C','#9AC97A','#E8A84A','#A89AD0','#CE8AB0','#74C8B0','#D8C4B0',
           '#4E382A','#F08A74','#B2D896','#F4C268','#BEB2E0','#E2A6C6','#92E0CC','#F4E6D6'],
  },
];
