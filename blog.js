const backToTop = document.getElementById('back2Top');

// window.addEventListener("scroll", (e) =>{
//     if (window.scroll >= 400){
//       backToTop.classList.remove("hidden");
//       backToTop.classList.add("block")
//     }
//     else{
//         backToTop.classList.add("hidden");
//         backToTop.classList.remove("block")
//     }
// })

backToTop.addEventListener('click', (e) => {
  e.preventDefault();

  window.scroll({ top: 0, left: 0, behavior: 'smooth' });
});
