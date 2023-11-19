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
  // Add more translations as needed
};

// Function to set the language to Arabic
function setArabicLanguage() {
  localStorage.setItem('language', 'ar'); // Store language preference
  document.documentElement.lang = 'ar';

  // Your logic to change text to Arabic
  document.querySelectorAll('.prayer-name').forEach(function(prayer) {
      switch (prayer.textContent) {
          case 'Fajr':
              prayer.textContent = 'الصبح';
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

  console.log('Switched to Arabic');
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

  document.querySelectorAll('.leftside h3, .leftside h4, .leftside p, .leftside h5, button, a').forEach(function (element) {
    const key = element.textContent.trim();
    // Reverse the translation map for English
    const reversedMap = Object.fromEntries(Object.entries(translationMap).map(([k, v]) => [v, k]));
    if (reversedMap[key]) {
      element.textContent = reversedMap[key];
    }
  });
  console.log('Switched to English');
}


document.addEventListener('DOMContentLoaded', function() {
  const currentLanguage = localStorage.getItem('language');

  if (currentLanguage === 'ar') {
    setArabicLanguage(); // Call the function to set Arabic language
  } else {
    setEnglishLanguage(); // Call the function to set English language
  }
});
