document.addEventListener('DOMContentLoaded', function () {
    const navigationElement = document.getElementById('navigation')

    const navigationClass = {
        'default': 'bg-transparent',
        'scroll': 'backdrop-blur-sm bg-[rgba(53,206,4,0.25)] shadow-0_8px_32px_0_rgba(31,38,135,0.37)]'
    }

    // Attach the scroll event listener to the window
    window.addEventListener('scroll', () => {
        if (window.scrollY >= 40) {
            // Change the div style when y axis is at 40 or more
            navigationElement.classList.remove(navigationClass.default)
            navigationElement.classList.add(navigationClass.scroll)
        } else {
            // Revert back to the original style when y axis is less than 40
            navigationElement.classList.remove(navigationClass.scroll)
            navigationElement.classList.add(navigationClass.default)
        }
    })
})

toggleLanguageMenu = () => {
    const languageMenu = document.getElementById('language-menu')
    languageMenu.classList.toggle('hidden')
}

changeLanguage = (language) => {
}