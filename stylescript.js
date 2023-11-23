
/* When the user clicks on the button,
toggle between hiding and showing the dropdown content */
function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
}

// Close the dropdown menu if the user clicks outside of it
window.onclick = function(event) {
  if (!event.target.matches('.dropbtn')) {
    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
  /*console.log('Showed the states');*/
}

function toggleLanguage(event) {
  event.preventDefault(); // Prevent the default behavior of the link click
  const currentLanguage = localStorage.getItem('language');
  

  if (currentLanguage === 'en') {
    setArabicLanguage(); // Call the function to set Arabic language
  } else {
    setEnglishLanguage(); // Call the function to set English language
  }

   // Toggle text direction
   const htmlElement = document.documentElement;
   htmlElement.dir = currentLanguage === 'en' ? 'rtl' : 'ltr';
}

const translationMap = {
  'Algeria Prayer Times': 'مواقيت الصلاة في الجزائر',
  'Location': 'الموقع',
  'OR': 'أو',
  'Select Manually': 'تحديد الموقع',
  'عربي': 'English',
  '1. Adrar': '١. أدرار',
  '2. Chlef': '٢. الشلف',
  '3. Laghouat': '٣. الأغواط',
  '4. Oum El Bouaghi': '٤. أم البواقي',
  '5. Batna': '٥. باتنة',
  '6. Bejaia': '٦. بجاية',
  '7. Biskra': '٧. بسكرة',
  '8. Bechar': '٨. بشار',
  '9. Blida': '٩. البليدة',
  '10. Bouira': '١٠. البويرة',
  '11. Tamanghasset': '١١. تمنغست',
  '12. Tebessa': '١٢. تبسة',
  '13. Tlemcen': '١٣. تلمسان',
  '14. Tiaret': '١٤. تيارت',
  '15. Tizi Ouzou': '١٥. تيزي وزو',
  '16. Algiers': '١٦. الجزائر',
  '17. Djelfa': '١٧. الجلفة',
  '18. Jijel': '١٨. جيجل',
  '19. Setif': '١٩. سطيف',
  '20. Saida': '٢٠. سعيدة',
  '21. Skikda': '٢١. سكيكدة',
  '22. Sidi Bel Abbes': '٢٢. سيدي بلعباس',
  '23. Annaba': '٢٣. عنابة',
  '24. Guelma': '٢٤. قالمة',
  '25. Constantine': '٢٥. قسنطينة',
  '26. Medea': '٢٦. المدية',
  '27. Mostaganem': '٢٧. مستغانم',
  '28. M\'Sila': '٢٨. المسيلة',
  '29. Mascara': '٢٩. معسكر',
  '30. Ouargla': '٣٠. ورقلة',
  '31. Oran': '٣١. وهران',
  '32. El Bayadh': '٣٢. البيض',
  '33. Illizi': '٣٣. إليزي',
  '34. Bordj Bou Arreridj': '٣٤. برج بوعريريج',
  '35. Boumerdes': '٣٥. بومرداس',
  '36. El Tarf': '٣٦. الطارف',
  '37. Tindouf': '٣٧. تندوف',
  '38. Tissemsilt': '٣٨. تسمسيلت',
  '39. El Oued': '٣٩. الوادي',
  '40. Khenchela': '٤٠. خنشلة',
  '41. Souk Ahras': '٤١. سوق أهراس',
  '42. Tipaza': '٤٢. تيبازة',
  '43. Mila': '٤٣. ميلة',
  '44. Ain Defla': '٤٤. عين الدفلى',
  '45. Naama': '٤٥. النعامة',
  '46. Ain Temouchent': '٤٦. عين تموشنت',
  '47. Ghardaia': '٤٧. غرداية',
  '48. Relizane': '٤٨. غليزان',
  // Add more translations as needed
};

// Function to set the language to Arabic
function setArabicLanguage() {
  localStorage.setItem('language', 'ar'); // Store language preference
  document.documentElement.lang = 'ar';

  // Your logic to change text to Arabic
  document.querySelectorAll('.prayer h4').forEach(function(prayer) {
      switch (prayer.textContent) {
          case 'Fajr':
              prayer.textContent = 'الفجر';
              break;
          case 'Dhuhr':
              prayer.textContent = 'الظهر';
              break;
          case 'Asr':
              prayer.textContent = 'العصر';
              break;
          case 'Maghrib':
              prayer.textContent = 'المغرب';
              break;
          case 'Isha':
              prayer.textContent = 'العشاء';
              break;
          default:
              // Handle any additional cases or languages
      }
  });

  document.querySelectorAll('.leftside h3, .leftside h4, .leftside p, .leftside h5, button, a').forEach(function (element) {
    const key = element.textContent.trim();
    if (translationMap[key]) {
      element.textContent = translationMap[key];
    }
  });

  /*console.log('Switched to Arabic');*/
}

// Function to set the language to English
function setEnglishLanguage() {
  localStorage.setItem('language', 'en'); // Store language preference
  document.documentElement.lang = 'en';

  // Your logic to change text to English
  document.querySelectorAll('.prayer h4').forEach(function(prayer) {
      switch (prayer.textContent) {
          case 'الفجر':
              prayer.textContent = 'Fajr';
              break;
          case 'الظهر':
              prayer.textContent = 'Dhuhr';
              break;
          case 'العصر':
              prayer.textContent = 'Asr';
              break;
          case 'المغرب':
              prayer.textContent = 'Maghrib';
              break;
          case 'العشاء':
              prayer.textContent = 'Isha';
              break;
          default:
              // Handle any additional cases or languages
      }
  });

  document.querySelectorAll('.leftside h3, .leftside h4, .leftside p, .leftside h5, button, a').forEach(function (element) {
    const key = element.textContent.trim();
    // Reverse the translation map for English
    const reversedMap = Object.fromEntries(Object.entries(translationMap).map(([k, v]) => [v, k]));
    if (reversedMap[key]) {
      element.textContent = reversedMap[key];
    }
  });
  /*console.log('Switched to English');*/
}


document.addEventListener('DOMContentLoaded', function() {
  const currentLanguage = localStorage.getItem('language');

  if (currentLanguage === 'ar') {
    setArabicLanguage(); // Call the function to set Arabic language
  } else {
    setEnglishLanguage(); // Call the function to set English language
  }
});

// Function to format prayer time for display
function formatPrayerTime(prayerTime) {
  // Check if the prayer time is a valid date object
  if (!(prayerTime instanceof Date) || isNaN(prayerTime.getTime())) {
    console.error("Invalid prayer time:", prayerTime);
    return "Invalid Time";
  }

  // Format the prayer time for display
  const formattedTime = prayerTime.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' });
  return formattedTime;
}

// Function to update a specific prayer element with the new time
function updatePrayerElement(prayerName, date, prayerTime) {
  // Check if the prayer time is a valid time string
  if (!prayerTime || typeof prayerTime !== 'string') {
    console.error("Invalid prayer time:", prayerTime);
    return;
  }

  // Convert the time string to a Date object (assuming the time is in HH:mm format)
  const timeComponents = prayerTime.split(':');
  const prayerDate = new Date(date);
  prayerDate.setHours(parseInt(timeComponents[0], 10));
  prayerDate.setMinutes(parseInt(timeComponents[1], 10));

  // Format the prayer time for display
  const formattedTime = formatPrayerTime(prayerDate);

  // Update the datetime attribute
  const prayerElement = document.getElementById(prayerName + "Time");
  prayerElement.setAttribute("datetime", formattedTime);

  // Update the displayed time
  prayerElement.textContent = formattedTime;
}

// Function to check if auto-location is allowed
function setAutoLocationAllowed(allowed) {
  localStorage.setItem("autoLocationAllowed", allowed.toString());
  console.log("Auto Location Allowed (set to):", allowed);
}

// Function to set auto-location permission
function setAutoLocationAllowed(allowed) {
  localStorage.setItem("autoLocationAllowed", (allowed || false).toString());
  console.log("Auto Location Allowed (set to):", allowed || false);
}

// Function to update prayer times with coordinates
function updatePrayerWithCoordinates(latitude, longitude) {
  console.log('Updating prayer times with coordinates:', latitude, longitude);

  // Set the calculation method to MWL (Muslim World League)
  prayTimes.setMethod('MWL');

  // Set the coordinates, timezone, and format
  const coordinates = [parseFloat(latitude), parseFloat(longitude)];
  const timezone = 1; // Algeria's timezone is GMT+1
  const format = '24h';

  // Get today's date
  const today = new Date();

  // Get prayer times for today
  const prayerTimes = prayTimes.getTimes(today, coordinates, timezone, 0, format);

  // Log the obtained prayer times
  console.log('Prayer Times:', prayerTimes);

  // Check if the obtained prayer times are valid
  if (prayerTimes && typeof prayerTimes === 'object') {
    // Log a success message
    console.log('Prayer times obtained successfully.');

    // Update the UI with the prayer times
    updatePrayerElement("fajr", today, prayerTimes.fajr);
    updatePrayerElement("dhuhr", today, prayerTimes.dhuhr);
    updatePrayerElement("asr", today, prayerTimes.asr);
    updatePrayerElement("maghrib", today, prayerTimes.maghrib);
    updatePrayerElement("isha", today, prayerTimes.isha);
  } else {
    // Log an error if the obtained prayer times are not valid
    console.error('Invalid prayer times:', prayerTimes);
  }
}

// Function to check if auto-location is allowed
function isAutoLocationAllowed() {
  const allowedValue = localStorage.getItem("autoLocationAllowed");
  console.log("Auto Location Allowed (from localStorage):", allowedValue);
  return allowedValue && allowedValue === "true";
}

// Function to get prayer times and update the UI
function updatePrayerTimes() {
  // Check if the user has clicked the location icon
  const autoLocationAllowed = isAutoLocationAllowed();

  if (autoLocationAllowed) {
    // Attempt auto-location using geolocation
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const latitude = position.coords.latitude;
          const longitude = position.coords.longitude;

          // Log the obtained coordinates for debugging
          console.log("Auto-located Coordinates:", latitude, longitude);

          // Update the UI with the prayer times for the auto-located coordinates
          updatePrayerWithCoordinates(latitude, longitude);
        },
        (error) => {
          console.error("Error getting location:", error);
        }
      );
    } else {
      console.error("Geolocation is not supported by this browser.");
    }
  } else {
    // User has clicked the location icon, use manually selected state
    const selectedState = document.querySelector("#myDropdown a.active");

    if (selectedState) {
      const latitude = selectedState.getAttribute("data-lat");
      const longitude = selectedState.getAttribute("data-lon");

      // Log the selected state for debugging
      console.log("Selected State:", selectedState.textContent, "Latitude:", latitude, "Longitude:", longitude);

      // Update the UI with the prayer times for the selected state
      updatePrayerWithCoordinates(latitude, longitude);
    } else {
      console.error("No state selected.");
    }
  }
}



// Trigger the updatePrayerTimes function when a state is clicked
const stateLinks = document.querySelectorAll("#myDropdown a");
stateLinks.forEach(link => {
  link.addEventListener("click", function() {
    // Remove the "active" class from all links
    stateLinks.forEach(link => link.classList.remove("active"));
    // Add the "active" class to the clicked link
    this.classList.add("active");
    // Update prayer times
    updatePrayerTimes();
  });
});

// Function to reset auto-location on page reload
function resetAutoLocation() {
  setAutoLocationAllowed(false);
}

// Add an event listener to the "Select Manually" button
const dropbtn = document.querySelector(".dropbtn");
if (dropbtn) {
  dropbtn.addEventListener("click", updatePrayerTimes);
} else {
  console.error("The element with class 'dropbtn' was not found.");
}

// Trigger the resetAutoLocation function when the page is reloaded
window.addEventListener("beforeunload", resetAutoLocation);

// Call the updatePrayerTimes function to initially update the UI
updatePrayerTimes();


// location icon
document.addEventListener('DOMContentLoaded', () => {
  const locationIcon = document.getElementById('locationIcon');

  if (locationIcon) {
    locationIcon.addEventListener('click', () => {
      // Request location permission
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
          (position) => {
            // Location permission granted
            console.log('Location permission granted:', position.coords.latitude, position.coords.longitude);
            // Call your function to update prayer times with the obtained coordinates
            updatePrayerWithCoordinates(position.coords.latitude, position.coords.longitude);
          },
          (error) => {
            // Location permission denied or error occurred
            console.error('Error getting location:', error.message);
            // Handle the case where the user denies location permission or an error occurs
          }
        );
      } else {
        console.error('Geolocation is not supported by your browser.');
        // Handle the case where Geolocation is not supported
      }
    });
  }
});