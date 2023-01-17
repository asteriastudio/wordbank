const GENERATED_NAME_SELECTOR = '#generated-name';

const PREFIXES = [
  'Emerald',
  'Rust',
  'Topaz',
  'Halcyon',
  'Velvet',
  'Stories',
  'October',
  'Autumn',
  'Harvest',
  'Mosiac',
  'Amber',
  'Moss',
  'Mustard',
  'Nostalgia',
  'Gold',
];

const SUFFIXES = [
  'House',
  'Haus',
  'Maison',
  'Palace',
  'Place',
  'Chateau',
  'Home',
  'Atelier',
  'Paper',
  'Co',
  'Paperie',
  'Studio',
];

function onGenerateClick(event) {
  event.preventDefault();

  const prefix = selectWord(PREFIXES);
  const suffix = selectWord(SUFFIXES);
  const phrase = `${prefix} ${suffix}`

  const value = document.createElement('div')
  value.innerHTML = phrase;

  document.querySelector(GENERATED_NAME_SELECTOR).replaceChildren(value);
  navigator.clipboard.writeText(phrase)
}

function selectWord(list) {
  const index = Math.floor(Math.random() * list.length);

  return list[index];
}

function main() {
  init();
}

function init() {
  document.querySelector('#generate-button').addEventListener('click', onGenerateClick)
}

main();
