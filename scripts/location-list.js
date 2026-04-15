import { cakeData } from './cakeData.js';

export const generateLocationHTML = () => {
    let locationHTML = '';

    for (const location of cakeData.location) {
        locationHTML += `
        <article class="location">
            <h2> ${location.name} </h2>
            <p> ${location.address} </p>
        </article>

        `;
    }
    return locationHTML;
};