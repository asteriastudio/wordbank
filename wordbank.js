const GENERATED_NAME_SELECTOR = '#generated-name';

const PREFIXES = [
  'Emerald',
  'Autumn',
  'Velvet',
  'Topaz',
  'Amber',
];

const SUFFIXES = [
  'House',
  'Place',
  'Atelier',
  'Stories',
  'Home',
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

