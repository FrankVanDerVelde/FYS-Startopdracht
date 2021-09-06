function switchNavClass() {
    var nav = document.getElementById("pageNavigation");
    if (nav.className === "pageNavigation") {
        nav.className += " responsive";
    } else {
        nav.className = "pageNavigation";
    }
  }