document.querySelector("form").addEventListener("submit", loginFunction);

var regUser = JSON.parse(localStorage.getItem("userInfo"));

// console.log(regUser);

function loginFunction() {
  event.preventDefault();
  var regemail = document.querySelector("#email").value;
  var regpassword = document.querySelector("#password").value;

  for (var i = 0; i < regUser.length; i++) {
    if (regUser[i].email == regemail && regUser[i].password == regpassword) {
      alert("Login Successfull");
      window.location.href = "index.html";
      break;
    } else {
      alert("You entred wrong Information");
      break;
    }
  }

}


document.querySelector("form").addEventListener("submit", signupFunction)

var userArray = JSON.parse(localStorage.getItem("userInfo")) || [];


function signupFunction() {
  event.preventDefault()

  var userObj = {
    email: document.querySelector("#email").value,
    mobie: document.querySelector("#mobile").value,
    password: document.querySelector("#password").value,
  }
  window.location.href = "login.html";
  userArray.push(userObj);
  localStorage.setItem("userInfo", JSON.stringify(userArray));

}