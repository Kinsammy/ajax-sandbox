<<<<<<< HEAD
document.getElementById("button").addEventListener("click", loadData);

function loadData() {
  // create an XHR object
  const xhr = new XMLHttpRequest();

  // OPEN property where will specify the Url
  xhr.open("GET", "data.txt", true);

  xhr.onload = function () {
    if (this.status === 200) {
      console.log(this.responseText);
    }
  };

  // Some Http statuses
  // 200: "OK"
  // 401: "Unauthorized"
  // 403: "Forbidden"
  // 404: "Not found"
}
=======
let day;

switch (new Date().getDay()) {
  case 0:
    day = "Sunday";
    break;
  case 1:
    day = "Monday";
    break;
  case 2:
    day = "Tuesday";
    break;
  case 3:
    day = "Wednesday";
    break;
  case 4:
    day = "Thursday";
    break;
  case 5:
    day = "Friday";
    break;
  default:
    day = "Saturday";
    break;
}

document.body.innerHTML = `
  Today is ${day}
`;

function greet(name, message) {
  val = message.concat(" ", name);
  return val;
}

let message = "welcome";
let fName = "Samuel";

console.log(greet(fName, message));
console.log(greet(fName, message));
console.log(greet(fName, message));
console.log(greet(fName, message));
>>>>>>> b486fe2aa9410fe62ef64510954b70585893096a
