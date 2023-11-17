function updateDateTime() {
    const currentDateElement = document.getElementById("currentDate");
    const islamicDateElement = document.getElementById("islamicDate");
    const currentTimeElement = document.getElementById("currentTime");

    const now = new Date();

    // Update current date
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    currentDateElement.textContent = now.toLocaleDateString('en-US', options);

    // Update Islamic date (you might need a library or API for accurate conversion)
    islamicDateElement.textContent = "Rabi' al-Awwal 7, 1445";

    // Update current time
    const timeOptions = { hour: 'numeric', minute: 'numeric', second: 'numeric', hour12: true };
    currentTimeElement.textContent = now.toLocaleTimeString('en-US', timeOptions);
}


// Update every second
setInterval(updateDateTime, 1000);

// Initial update
updateDateTime();
