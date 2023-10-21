// Function to convert UTC datetime to relative time using Intl.RelativeTimeFormat
function updateTime() {
    const timeElements = document.querySelectorAll('time');
    // const rtf = new Intl.RelativeTimeFormat('en', { numeric: 'auto' });

    timeElements.forEach(timeElement => {
        const datetime = timeElement.getAttribute('datetime');
        const date = new Date(datetime);
        timeElement.textContent = regionTime(date);
    });
}

function regionTime(date) {
    const lang = document.documentElement.lang
    const timeZone = Intl.DateTimeFormat().resolvedOptions().timeZone || 'Europe/London';

    return new Intl.DateTimeFormat(
        [lang, 'en'], { dateStyle: 'medium', timeStyle: 'short', timeZone: timeZone }).format(date)
}

// Call the function to initially convert datetime to relative time
updateTime();