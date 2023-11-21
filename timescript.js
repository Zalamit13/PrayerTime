

/*function updateDateTime(lang) {
    const currentDateElement = document.getElementById("currentDate");
    const currentTimeElement = document.getElementById("currentTime");

    const now = new Date();

    // Create DateTimeFormat instance for the specified language
    const dateTimeFormat = new Intl.DateTimeFormat(lang, {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    });

    // Update current date using translationMap
    currentDateElement.textContent = dateTimeFormat.format(now);

    // Update current time
    const timeOptions = { hour: 'numeric', minute: 'numeric', second: 'numeric', hour12: true };
    currentTimeElement.textContent = now.toLocaleTimeString(lang, timeOptions);
}

// Call updateDateTime with the initial language
updateDateTime(currentLanguage);*/