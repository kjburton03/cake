import { cakeData } from './cakeData.js';


export const generateReviewHTML = () => {
    let reviewHTML = ''

    for (const review of cakeData.review) {
        reviewHTML +=  `
        <article class="review" >
            <h2> ${review.comment} </h2>
            <p> ${review.reviewer} </p>
        </article>
        `
    }
    return reviewHTML;
};