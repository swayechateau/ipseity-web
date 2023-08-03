document.addEventListener('DOMContentLoaded', function () {
    const navigationElement = document.getElementById('navigation')

    const navigationClass = {
        'default': 'bg-transparent',
        'scroll': ['bg-[rgba(53,206,4,0.25)]', 'shadow-0_8px_32px_0_rgba(31,38,135,0.37)]']
    }

    // Attach the scroll event listener to the window
    window.addEventListener('scroll', () => {
        if (window.scrollY >= 40) {
            // Change the div style when y axis is at 40 or more
            modifyClassArray(navigationElement, navigationClass.scroll, addClass)
            modifyClassArray(navigationElement, navigationClass.default, removeClass)
        } else {
            // Revert back to the original style when y axis is less than 40
            modifyClassArray(navigationElement, navigationClass.scroll, removeClass)
            modifyClassArray(navigationElement, navigationClass.default, addClass)
        }
    })
})

function modifyClassArray(element, classArray, action) {
    if (Array.isArray(classArray)) {
        classArray.forEach(className => {
            action(element, className)
        })
        return
    }
    action(element, classArray)
}

function removeClass(element, className) {
    element.classList.remove(className)
}

function addClass(element, className) {
    element.classList.add(className)
}