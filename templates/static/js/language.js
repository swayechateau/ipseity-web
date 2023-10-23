// Get the language selector div by its ID
var languageSelector = document.getElementById('lang-picker-menu');

// Get all the language links within the language selector div
var languageLinks = languageSelector.querySelectorAll('a');

// Add a click event listener to each language link
languageLinks.forEach(function(link) {
  link.addEventListener('click', function(event) {
    event.preventDefault(); // Prevent the default link behavior (navigation)
    
    // Get the data-lang attribute from the clicked link
    var newLang = link.getAttribute('data-lang');
    
    // Get the current pathname
    var currentPath = window.location.pathname;

    // Split the pathname by "/"
    var pathParts = currentPath.split('/');

    // Check if the pathname has at least two parts
    if (pathParts.length >= 2) {
      // Change the second part to the new language code
      pathParts[1] = newLang;

      // Join the modified path parts back together
      var newPath = pathParts.join('/');

      // Redirect to the new path
      window.location.href = newPath;
    }
  });
});
