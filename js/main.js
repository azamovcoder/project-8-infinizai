window.addEventListener("scroll", function () {
  shrink();
});

let navbar = document.getElementById("navbar");

function shrink() {
  if (scrollY > 100) {
    navbar.classList.add("navbar-shrink");
  } else {
		navbar.classList.remove("navbar-shrink");
	}
}

let modeBtn = document.getElementById("mode-btn");

modeBtn.addEventListener("click", function () {
  if (document.body.className != "light") {
    this.firstElementChild.src = "images/dark.svg";
  } else {
    this.firstElementChild.src = "images/light.svg";
  }
  document.body.classList.toggle("light");
});


let navList = document.getElementById("nav__list")
let barBtn = document.getElementById("nav__hamburger-btn")


barBtn.addEventListener("click", function(){
  navList.classList.toggle("show-nav__list")
})


window.addEventListener("scroll", function () {
  shrink();
  showBackTop();
});

let backTop = document.getElementById("backtop");

function showBackTop() {
  if (scrollY > 200) {
    backTop.classList.add("show-backtop");
  }
  else {
    backTop.classList.remove("show-backtop");
  }
}