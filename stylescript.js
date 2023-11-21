
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

  /*console.log('Switched to Arabic');*/
}

// Function to set the language to English
function setEnglishLanguage() {
  localStorage.setItem('language', 'en'); // Store language preference
  document.documentElement.lang = 'en';

  // Your logic to change text to English
  document.querySelectorAll('.prayer h4').forEach(function(prayer) {
      switch (prayer.textContent) {
          case 'الصبح':
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