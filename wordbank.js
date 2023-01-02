const GENERATED_NAME_SELECTOR = '#generated-name';

const PREFIXES = [
  'Emerald',
  'Rust',
  'Topaz',
  'Haus',
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
  'Decadent',
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
];

function onGenerateClick(event) {
  event.preventDefault();

  const prefix = selectWord(PREFIXES);
  const suffix = selectWord(SUFFIXES);

  const value = document.createElement('h1')
  value.innerHTML = `${prefix} ${suffix}`;

  document.querySelector(GENERATED_NAME_SELECTOR).replaceChildren(value);
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

