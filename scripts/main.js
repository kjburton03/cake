import { generateCakeHTML } from './cake-list.js';
import { renderCakeToDom } from './cake-render.js';
import { generateLocationHTML } from './location-list.js';
import { renderLocationToDOM } from './location-render.js';

const cakeHTML = generateCakeHTML()
renderCakeToDom(cakeHTML);

const locationHTML = generateLocationHTML()
renderLocationToDOM(locationHTML)