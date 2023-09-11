const setHeaderImage = (imageUri: String) => {
    // create a style class dynamically on api call (function)
    // check next docs for dynamic DOM manipulation
    // window.document.getElementsByClassName('header-image')[0].style.backgroundImage = `url(${imageUri})`;
}


// export functions as an object
const dynamicStyles = {
    setHeaderImage
};
// update to multiple function exports
export default dynamicStyles;