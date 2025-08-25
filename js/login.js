const popper = document.querySelector(".popper");
const username = document.getElementById("name");
const email = document.getElementById("email");
const password = document.getElementById("password");
const conPassword = document.getElementById("confirmPassword");

//* submit form handling
document.querySelector(".btn").addEventListener("click", (e) => {
  e.preventDefault();
  const usernameVal = username.value;
  const emailVal = email.value;
  const passwordVal = password.value;
  const conPasswordVal = conPassword.value;
  if (
    usernameVal == "" ||
    emailVal == "" ||
    passwordVal == "" ||
    conPasswordVal == ""
  ) {
    return;
  }
  if (!emailValidation(emailVal)) {
    showPopper("Wrong: Email not valid");
    return;
  }
  if (passwordVal.length < 8) {
    showPopper("Wrong: Password must contain 8 letters");
    return;
  }
  if (passwordVal != conPasswordVal) {
    showPopper("Wrong: Password not match !");
    return;
  }
  send("https://test-api-v1-vert.vercel.app/v1/login", {
    username,
    email,
    password,
  }).then((res) => {
    console.log(res);
    alert(res.status);
  });
  clearInputs();
});

async function send(url, { username, email, password }) {
  let res = await fetch(url, {
    method: "POST",
    body: JSON.stringify({
      username: username,
      email: email,
      password: password,
    }),
  });
  return res;
}

function emailValidation(email) {
    let regEmail=/^[a-z0-9._%+-]+@\gmail+\.com$/ //regular expiration
    return regEmail.test(email);
//   if (
//     email.length > 10 &&
//     email.slice(email.length - 10) == "@gmail.com" &&
//     email == email.toLowerCase()
//   ) {
//     return true;
//   }
//   return false;
}

function showPopper(msg) {
  popper.innerHTML = `<p>${msg}</p>`;
  popper.style.display = "flex";
  setTimeout(() => {
    popper.style.display = "none";
  }, 5000);
}

function clearInputs() {
  username.value = "";
  email.value = "";
  password.value = "";
  conPassword.value = "";
}

//* handel toggle password 

function togglePass(e){
  const icon=e.target;
  const input = icon.previousElementSibling;
    if (input.type === "password") {
      input.type = "text";
      icon.classList.remove("fa-eye-slash");
      icon.classList.add("fa-eye");
    } else {
      input.type = "password";
      icon.classList.remove("fa-eye");
      icon.classList.add("fa-eye-slash");
    }
  
}
  
 
