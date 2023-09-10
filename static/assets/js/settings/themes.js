  if (localStorage.getItem("Classic (Dark)") === "on") {
    document.body.style.backgroundImage = "url('circles.avif')";
    document.getElementById("Themes").value = "Classic";
  } else if (localStorage.getItem("Ocean") === "on") {
    document.body.style.backgroundImage = "url('ocean.gif')";
    document.getElementById("Themes").value = "Ocean";
  } else if (localStorage.getItem("Midnight") === "on") {
    document.body.style.backgroundColor = "#000";
    document.body.style.color = "#ffffff";
    document.body.style.setProperty("--bg-c", "#000");
    document.getElementById("Themes").value = "Midnight";
  } else if (localStorage.getItem("Light") === "on") {
    document.body.style.backgroundImage = "url('white.jpeg')";
    document.getElementById("Themes").value = "Light";
  }

document.getElementById("Themes").onchange = function () {
  if (this.value === "Classic (Dark)") {
    localStorage.setItem("Classic (Dark)", "on");
    localStorage.setItem("Ocean", "off");
    localStorage.setItem("Midnight", "off");
    localStorage.setItem("Light", "off");
    document.body.style.backgroundImage = "url('circles.avif')";
  } else if (this.value === "Ocean") {
    localStorage.setItem("Ocean", "on");
    localStorage.setItem("Classic (Dark)", "off");
    localStorage.setItem("Midnight", "off");
    localStorage.setItem("Light", "off");
    document.body.style.backgroundImage = "url('ocean.gif')";
  } else if (this.value === "Midnight") {
    localStorage.setItem("Midnight", "on");
    localStorage.setItem("Classic (Dark)", "off");
    localStorage.setItem("Ocean", "off");
    localStorage.setItem("Light", "off");
    document.body.style.backgroundColor = "#000";
    document.body.style.color = "#ffffff";
    document.body.style.setProperty("--bg-c", "#000");
  } else if (this.value === "Light") {
    localStorage.setItem("Light", "on");
    localStorage.setItem("Midnight", "off");
    localStorage.setItem("Classic (Dark)", "off");
    localStorage.setItem("Ocean", "off");
    document.body.style.backgroundImage = "url('white.jpeg')";
  }
};
