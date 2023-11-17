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
}

function toggleLanguage() {
  const currentLanguage = localStorage.getItem('language');

  if (currentLanguage === 'en') {
    setArabicLanguage(); // Call the function to set Arabic language
  } else {
    setEnglishLanguage(); // Call the function to set English language
  }
}

// Function to set the language to English
function setEnglishLanguage() {
  localStorage.setItem('language', 'en'); // Store language preference
  document.documentElement.lang = 'en';

  // Your logic to change text to English
  document.querySelectorAll('.prayer h4').forEach(function(prayer) {
      switch (prayer.textContent) {
          case 'الصبح':
              prayer.textContent = 'Isha';
              break;
          case 'الظهر':
              prayer.textContent = 'Maghrib';
              break;
          case 'العصر':
              prayer.textContent = 'Asr';
              break;
          case 'المغرب':
              prayer.textContent = 'Dhuhr';
              break;
          case 'العشاء':
              prayer.textContent = 'Fajr';
              break;
          default:
              // Handle any additional cases or languages
      }
  });
}


// Function to set the language to Arabic
function setArabicLanguage() {
  localStorage.setItem('language', 'ar'); // Store language preference
  document.documentElement.lang = 'ar';

  // Your logic to change text to Arabic
  document.querySelectorAll('.prayer').forEach(function(prayer) {
      const prayerNameElement = prayer.querySelector('.prayer-name');
      const timeElement = prayer.querySelector('.prayer-time');

      switch (prayerNameElement.textContent) {
          case 'Fajr':
              prayerNameElement.textContent = 'العشاء';
              timeElement.className = 't5';
              break;
          case 'Dhuhr':
              prayerNameElement.textContent = 'المغرب';
              timeElement.className = 't4';
              break;
          case 'Asr':
              prayerNameElement.textContent = 'العصر';
              timeElement.className = 't3';
              break;
          case 'Maghrib':
              prayerNameElement.textContent = 'الظهر';
              timeElement.className = 't2';
              break;
          case 'Isha':
              prayerNameElement.textContent = 'الصبح';
              timeElement.className = 't1';
              break;
          default:
              // Handle any additional cases or languages
      }
  });
}


document.addEventListener('DOMContentLoaded', function() {
  const currentLanguage = localStorage.getItem('language');

  if (currentLanguage === 'ar') {
    setArabicLanguage(); // Call the function to set Arabic language
  } else {
    setEnglishLanguage(); // Call the function to set English language
  }
});
