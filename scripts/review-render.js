export const renderReviewToDOM = (revHTML) => {
    const reviewList = document.getElementById('reviewList')

    if (reviewList) {
        reviewList.innerHTML = revHTML;
    } else {
        console.error('could not find element with id "revlist"')
    }
};