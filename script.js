const imgName = document.querySelectorAll(".section-2__component--info");
const images = document.querySelectorAll(".section-2__component--imgs");

const btnNav = document.querySelector(".mobNavHam");
const btnCloseNav = document.querySelector(".mobNavX");
const mobMenu = document.querySelector(".mobMenu");
const mobLogo = document.querySelector(".mobLogo");

////////////////////////////////////////////////////////////////////////////////////////
imgName.forEach((value) => {
  value.addEventListener("mouseover", (e) => {
    e.target.parentNode.firstChild.nextElementSibling.style.opacity = 0.35;
  });

  value.addEventListener("mouseleave", (e) => {
    e.target.parentNode.firstChild.nextElementSibling.style.opacity = 1;
  });
});

images.forEach((value) => {
  value.addEventListener("mouseover", (e) => {
    e.target.style.opacity = 0.35;
  });

  value.addEventListener("mouseleave", (e) => {
    e.target.style.opacity = 1;
  });
});

///////////////////////////////////////////////////////////////////////////////////////
// MOBILE NAVIGATION
btnNav.addEventListener("click", (e) => {
  if (e.target.classList.contains("mobNav__img")) {
    btnNav.classList.add("hidden");
    btnCloseNav.style.display = "block";

    mobMenu.style.display = "block";
    mobLogo.style.display = "block";
  }
});

btnCloseNav.addEventListener("click", (e) => {
  if (e.target.classList.contains("mobNav__img2")) {
    btnCloseNav.style.display = "none";
    btnNav.classList.remove("hidden");

    mobMenu.style.display = "none";
    mobLogo.style.display = "none";
  }
});
