//

// let str = "true";
// let num = Boolean(-12);
// console.log(num);

// function display() {
//   let x = confirm("Are you sure");
//   alert("User click" + x);
// }

// function display() {
//   let x = prompt("Enter your Name", "Abhishek");
//   alert(x);
// }

// let a="12";
// let b=12.0;
// console.log(a===b);

function validate() {
  let login = document.getElementById("login").value;
  let pass = document.getElementById("pass").value;
  let p1 = document.getElementById("result");
  if (login == "admin" && pass == "admin") {
    p1.innerText = "Login Success";
  } else p1.innerText = "Login Failed";
  return false;
}
