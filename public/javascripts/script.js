document.addEventListener(
  "DOMContentLoaded",
  () => {
    console.log("IronGenerator JS imported successfully!");
  },
  false
);

function createPost() {
  document.querySelector("#create-post").style.display = "block";
}

let modalLogin = document.getElementById("id01");
let modalSignup = document.getElementById("id02");

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modalLogin) {
    modalLogin.style.display = "none";
  }
};

window.onclick = function(event) {
  if (event.target == modalSignup) {
    modalSignup.style.display = "none";
  }
};

function removeAuthButtons() {
  document.querySelector(".login-ref").styles.display = "hidden";
}
