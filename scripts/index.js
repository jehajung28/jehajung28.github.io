// login page scripts
document.getElementById("loginForm").addEventListener("submit", function (e) {
  e.preventDefault();
  validateForm();
});

function validateForm() {
  var username = document.getElementById("username").value;
  var password = document.getElementById("password").value;

  if (username === "tumurun" && password === "260925") {
    Swal.fire({
      icon: "success",
      title: "Masih ingat ternyata hehe 🌸",
      text: "Selamat datang koko sayang",
      showConfirmButton: false,
      timer: 1800,
      background: "#fff0f5",
      color: "#3b1a2e",
      iconColor: "#d63384",
    }).then(function () {
      window.location.href = "birthday.html";
    });
  } else {
    Swal.fire({
      icon: "error",
      title: "AIIIYYYOOOOOO! 😤",
      text: "Aku marah marah iya kalau lupa",
      confirmButtonText: "Coba lagi 🥺",
      confirmButtonColor: "#d63384",
      background: "#fff0f5",
      color: "#3b1a2e",
      iconColor: "#d63384",
    });
  }
}
