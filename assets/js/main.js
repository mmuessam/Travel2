/*=============== SHOW MENU ===============*/
const menuButton = document.getElementById("menu"),
  menuClose = document.getElementById("close"),
  navContent = document.getElementById("nav__menu");

/*===== SEARCH SHOW =====*/
/* Validate if constant exists */
if (menuButton) {
  menuButton.addEventListener("click", () => {
    navContent.classList.add("show_nav");
  });
}

/*===== SEARCH HIDDEN =====*/
/* Validate if constant exists */
if (menuClose) {
  menuClose.addEventListener("click", () => {
    navContent.classList.remove("show_nav");
  });
}

/*=============== REMOVE MENU MOBILE ===============*/

/*=============== ADD BLUR TO HEADER ===============*/
const blurHeader = () => {
  const header = document.getElementById("header");
  // When the scroll is greater than 50 viewport height, add the scroll-header class to the header tag
  this.scrollY >= 50
    ? header.classList.add("blur-header")
    : header.classList.remove("blur-header");
};
window.addEventListener("scroll", blurHeader);

/*=============== SHOW SCROLL UP ===============*/
const scrollUp = () => {
  const scrollUp = document.getElementById("scroll-up");
  // When the scroll is higher than 350 viewport height, add the show-scroll class to the a tag with the scrollup class
  this.scrollY >= 350
    ? scrollUp.classList.add("show-scroll")
    : scrollUp.classList.remove("show-scroll");
};
window.addEventListener("scroll", scrollUp);

/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/

const sections = document.querySelectorAll("section[id]");

const scrollActive = () => {
  const scrollDown = window.scrollY;

  sections.forEach((current) => {
    const sectionHeight = current.offsetHeight,
      sectionTop = current.offsetTop - 58,
      sectionId = current.getAttribute("id"),
      sectionsClass = document.querySelector(
        ".nav__menu a[href*=" + sectionId + "]"
      );

    if (scrollDown > sectionTop && scrollDown <= sectionTop + sectionHeight) {
      sectionsClass.classList.add("active-link");
    } else {
      sectionsClass.classList.remove("active-link");
    }
  });
};
window.addEventListener("scroll", scrollActive);

/*=============== SCROLL REVEAL ANIMATION ===============*/

const sr = ScrollReveal({
	origin: 'top',
	distance: '60px',
	duration: 3000,
	delay: 400,
   // Animation repeats when scrolling back up
  });



sr.reveal(`.home__data,.explore__data, .explore__user, .footer__container`) 
sr.reveal(`.home__cards`, {delay: 600, distance: '100px', interval: 100}) 
sr.reveal(`.popular__container`, {delay: 600, distance: '100px', interval: 100}) 
sr.reveal(`.about__data, .join__image`, {origin: 'right'}) 
sr.reveal(`.about__image, .join__data`,{origin: 'left'}) 
sr.reveal(`.popular__card`, {interval: 200})
