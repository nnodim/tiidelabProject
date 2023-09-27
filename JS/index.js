// let header = document.getElementById('site-header-inner');
// document.addEventListener('scroll', function() {
  
//   // Get the scroll position
//   let scrollPos = window.pageYOffset;
  
//   if ( scrollPos > 100 ) {
//     header.style.backgroundColor = "white";
//   } else {
//     header.style.backgroundColor = "blue";
//   }
  
  
// });







document.addEventListener('DOMContentLoaded', () => {
  const dropdownElements = document.querySelectorAll('.dropdown');

  dropdownElements.forEach((dropdown) => {
    const dropdownButton = dropdown.querySelector('.dropdownbtn');
    const dropdownMenu = dropdown.querySelector('.menu');
    const dropdownIcon = dropdownButton.querySelector('i');

    dropdownButton.addEventListener('click', () => {
      dropdownMenu.classList.toggle('hidden');
      dropdownIcon.classList.toggle('rotate-180');
    });
  });

  document.addEventListener('click', (e) => {
      dropdownElements.forEach((dropdown) => {
          const dropdownMenu = dropdown.querySelector('.menu');
          const dropdownIcon = dropdown.querySelector('i');

          if (!dropdown.contains(e.target) && !dropdownMenu.contains(e.target)) {
              dropdownMenu.classList.add('hidden');
              dropdownIcon.classList.remove('rotate-180');
          }
      });
  });
});





  // const dropdownButton = document.getElementById('dropdown-menu-button');
  // const dropdownMenu = document.getElementById('dropdown-menu');

  // dropdownButton.addEventListener('click', () => {
  //   dropdownMenu.classList.toggle('hidden');
  // });

  // // Close the dropdown when clicking outside of it
  // document.addEventListener('click', (event) => {
  //   if (!dropdownButton.contains(event.target)) {
  //     dropdownMenu.classList.add('hidden');
  //   }
  // });
