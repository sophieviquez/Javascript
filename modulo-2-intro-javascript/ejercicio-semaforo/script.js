const redLight = document.getElementById("red");
const yellowLight = document.getElementById("yellow");
const greenLight = document.getElementById("green");

let currentLight = "red";

function changeLight() {
  switch (currentLight) {
    case "red":
      redLight.classList.remove("on");
      greenLight.classList.add("on");
      currentLight = "green";
      console.log("Green Light");
      break;
    case "yellow":
      yellowLight.classList.remove("on");
      redLight.classList.add("on");
      currentLight = "red";
      console.log("Red Light");
      break;
    case "green":
      greenLight.classList.remove("on");
      yellowLight.classList.add("on");
      currentLight = "yellow";
      console.log("Yellow Light");
      break;
  }
}

// Cambia la luz cada 3 segundos
setInterval(changeLight, 3000);
