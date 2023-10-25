
function dropdown(){
   var drop =  document.addEventListener('DOMContentLoaded', () => {
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

}
dropdown()

function responsiveMenu(){
  const button = document.getElementById('open-menu');
  const closeBtn = document.getElementById('menu-close');
  button.addEventListener('click', () => {
    var responsiveMenu = document.querySelector('.side-menu')
    responsiveMenu.classList.toggle('hidden');
    console.log('clicked');
  });
  // Close the side menu when clicking the close button
  closeBtn.addEventListener('click', () => {
    var responsiveMenu = document.querySelector('.side-menu')
    responsiveMenu.classList.toggle('hidden');
    console.log('close clicked');
  });
}
responsiveMenu();



// function darkMode(){
//   const darkToggle = document.getElementById('darkModeToggle');
//   const body = document.bpdy;

//   darkToggle.addEventListener('change', () => {
//     if (darkToggle.checked){
//       body.classList.add('dark')
//     }
//     else{
//       body.classList.remove('dark')
//     }
//   })
// }
// darkMode()


function date(){
    // Function to update the date
    function updateDate() {
      const currentDateElement = document.getElementById('currentDate');
      const now = new Date();
      const options = { year: 'numeric', month: 'long', day: 'numeric' };
      const formattedDate = now.toLocaleDateString(undefined, options);

      currentDateElement.textContent = formattedDate;
    }

    // Call the function to initially set the date and update it every second
    updateDate();
    setInterval(updateDate, 1000); // Update every second (adjust as needed)

}
date()
















const inputBtn = document.getElementById('toggleInputBtn');
        const textInput = document.getElementById('textInput');
        const taskInput = document.getElementById('taskInput')
        const appendedText1 = document.getElementById('appendedText1');
        //  const appendedText2 = document.getElementById('appendedText2');
        const addBtn = document.getElementById('addBtn')

        inputBtn.addEventListener('click', () => {
            textInput.classList.toggle('hidden');
            console.log("clicked")
            // textInput.style.display='block';

        });
        


        addBtn.addEventListener('click', () => {
            const inputText = taskInput.value;
            console.log("input" + inputText)
            if (inputText) {
            const li1 = document.createElement('li');
            li1.textContent = inputText;
            appendedText1.appendChild(li1);

            // const li2 = document.createElement('li');
            // li2.textContent = inputText;
            // appendedText2.appendChild(li2);

            taskInput.value = '';
            textInput.classList.add('hidden');
            }
            else{
               console.log("input not working")
            }
        });



  




















