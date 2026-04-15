import { cakeData } from './cakeData.js';

export const generateCakeHTML = () => {
    let cakeHTML = '';

    for (const cake of cakeData.cake) {
        cakeHTML += `
        <article class="cake>
        <h2> ${cake.name} </h2>
        <h3> ${cake.description} </h3>
        <p> ${cake.cost} </p>
        </article>
        `;
    }
    return cakeHTML;
};