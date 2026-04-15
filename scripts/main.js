import { generateCakeHTML } from './cake-list.js';
import { renderCakeToDom } from './cake-render.js';
import { generateLocationHTML } from './location-list.js';
import { renderLocationToDOM } from './location-render.js';
import { generateReviewHTML } from './review-list.js';
import { renderReviewToDOM } from './review-render.js';

const cakeHTML = generateCakeHTML()
renderCakeToDom(cakeHTML);

const locationHTML = generateLocationHTML()
renderLocationToDOM(locationHTML)

const reviewHTML = generateReviewHTML()
renderReviewToDOM(reviewHTML)