export const renderLocationToDOM = (locateHTML) => {
    const locationList = document.getElementById('locationList')

    if (locationList) {
        locationList.innerHTML = locateHTML;
    } else {
        console.error('could not find element with id locationList')
    }
};