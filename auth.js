const form = document.getElementById("form")
const formLogin = document.getElementById("form-login")
const fullName = document.getElementById("fullname")
const email = document.getElementById("email")
const password = document.getElementById("password")
const confirmPassword = document.getElementById("confirm-password")
const errorMessage = document.getElementById("error")
const emailError = document.getElementById("error-email")
const loginerrorMessage = document.getElementById("login-error")

const loginButton = document.getElementById("login-button");
const forgotForm = document.getElementById("forgot-form")

function validateForm() {
  const user = {
    fullName: fullName.value,
    email: email.value,
    password: password.value,
    confirmPassword: confirmPassword.value
  }
  let users = JSON.parse(localStorage.getItem('users')) || []
  if(confirmPassword.value !== password.value){
    errorMessage.style.display = "block"
    errorMessage.style.color = "red"
    return
  }
  const checkEmail = users.find((c)=>c.email === user.email)
  if(checkEmail){
    emailError.style.display ="block"
    emailError.style.color = "red"
    return
  }
  users.push(user)
  localStorage.setItem("users", JSON.stringify(users) )
  showModal();
  // window.location = "success.html"
  // alert("successful")
}
form.addEventListener("submit", function(event){
  event.preventDefault()
  validateForm()
})

function showModal() {
  const modal = document.getElementById("success-modal");
  modal.classList.remove("hidden");
  modal.style.display = "flex"
}

loginButton.addEventListener("click", function () {
  window.location.href = "login.html";
});


// when forgot email is correct
function showForgotModal() {
  const forgotModal = document.getElementById("success-forgot");
  forgotModal.classList.remove("hidden");
  forgotModal.style.display = "flex"
}


// when forgot email is wrong
function forgotEmail(){
  const emailModal = document.getElementById("forgot-modal");
  emailModal.classList.remove("hidden");
  emailModal.style.display = "flex"
}

function validateEmail(){
  const emailForget = users.find((u)=>u.email === user.email)
  if(emailForget){
    showForgotModal();
  }else {
    // Email not found, show the "Invalid email" modal
    forgotEmail();
  }
}

forgotForm.addEventListener("submit", function(e){
  e.preventDefault();
  validateEmail()
})


// function loginForm(){
//   const user = {
//     email: email.value,
//     password: password.value,
//   }
//   let users = JSON.parse(localStorage.getItem('users')) || []
//   let existingUser = users.find((u)=>u.email === user.email && u.password === user.password)
//   if(!existingUser){
//     loginerrorMessage.style.display = "block"
//     loginerrorMessage.style.color = "red"
//   } else{
//     alert("login successful")
//   }

// }
// formLogin.addEventListener("submit", function(e){
//   e.preventDefault()
//   loginForm()
// })