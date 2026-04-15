export const renderCakeToDom = (cakeeHtml) => {
    const cakeList = document.getElementById('cakeList')

    if (cakeList) {
        cakeList.innerHTML = cakeeHtml;
    } else {
        console.error('could not find element with id "cake list"');
    }
};