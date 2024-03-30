// Toggle Icon Navbar

let menuIcon = document.querySelector('#menu-icon')
let navBar = document.querySelector('.navbar')

menuIcon.onclick = () => {
    menuIcon.classList.toggle('fa-xmark')
    navBar.classList.toggle('active')
}

//Scroll section active

let sections = document.querySelector('section')
let navLinks = document.querySelector('header na a')

window.onscroll = () => {
    sections.forEach(section => {
        let top = window.screenY
        let offSet = section.offSetTop - 150
        let height = section.offSetHeight
        let id = section.getAttribute('id')

        if(top >= offSet && top < offSet * height) {
            navLinks.forEach.apply(links => {
                links.classList.remove('active')
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active')
            })
        }
    });
}

// Sticky Navbar

let header = document.querySelector('header')
header.classList.toggle('sticky', window.screenY > 100)

// Remove toggle icon and navbar
menuIcon.classList.remove('fa-xmark')
navBar.classList.remove('active')

// Scroll reveal
ScrollReveal({
    distance: 80,
    duration: 2000,
    delay: 200
})

ScrollReveal().reveal('.home-content, heading', {origin: 'top'})
ScrollReveal().reveal('.home-img, .services-container, .portfolio-box, .contact form', {origin: 'bottom'})
ScrollReveal().reveal('.home-contact h1, .about-img', {origin: 'left'}) 
ScrollReveal().reveal('.home-contact p, .about-content', {origin: 'right'})

//Animation typed.js
const typed = new  Typed('.profession', {
    strings: ['Mobile Applications Developer...', 'System Support Analyst...'],
    typeSpeed: 70,
    backSpeed: 70,
    backDelay: 1000,
    loop: true,  
})

// Download Resume
let resumeDownload = document.getElementById("btnDownload");
resumeDownload.addEventListener("click", () => {
  const resumePath = "resume/SizweResume.pdf";
  let link = document.createElement("a");

  link.download = "SizweResume.pdf";
  link.href = resumePath;
  document.body.appendChild(link);

  link.click();
  document.body.removeChild(link);
});
