// menu show Y hidden
const navMenu = document.getElementById('nav-menu'),
      navToggle = document.getElementById('nav-toggle'),
      navClose = document.getElementById('nav-close')

// show menu
if(navToggle){
    navToggle.addEventListener('click', ()=>{
        navMenu.classList.add('show-menu')
    })
}

//close menu
if(navClose){
    navClose.addEventListener("click", ()=>{
        navMenu.classList.remove('show-menu')
    })
}

//remove menu mobile
const navLink = document.querySelectorAll('.nav_link')

function linkAction(){
    const navMenu = document.getElementById('nav-menu')

    navMenu.classList.remove('show-menu')
}
navLink.forEach(n => n.addEventListener('click', linkAction))

//accordion skills
const skillsContent = document.getElementsByClassName('skills_content'),
      skillsHeader = document.querySelectorAll(".skills_header")

function toggleSkills(){
    let itemClass = this.parentNode.className

    for(i=0; i<skillsContent.length; i++){
        skillsContent[i].className = 'skills_content skills_close'
    }
    if(itemClass === 'skills_content skills_close'){
        this.parentNode.className = 'skills_content skills_open'
    }
}

skillsHeader.forEach((el) =>{
    el.addEventListener('click', toggleSkills)
})

//qualification tabs
const tabs = document.querySelectorAll('[data-target]'),
      tabContents = document.querySelectorAll('[data-content]')

tabs.forEach(tab =>{
    tab.addEventListener('click', () =>{
        const target = document.querySelector(tab.dataset.target)

        tabContents.forEach(tabContent =>{
            tabContent.classList.remove('qualification_active')
        })
        target.classList.add('qualification_active')

        tabs.forEach(tab=>{
            tab.classList.remove('qualification_active')
        })
        tab.classList.add('qualification_active')
    })
})

// services modal
const modalViews = document.querySelectorAll('.services_modal'),
    modalBtns = document.querySelectorAll('.services_button'),
    modalCloses = document.querySelectorAll('.services_modal-close')

let modal = modalClick => {
    modalViews[modalClick].classList.add('active-modal')
}

modalBtns.forEach((modalBtn,i) => {
    modalBtn.addEventListener('click', () => {
        modal(i)
    })
})

modalCloses.forEach((modalClose) => {
    modalClose.addEventListener('click', () => {
        modalViews.forEach(modalView => {
            modalView.classList.remove('active-modal')
        })
    })
})

//portofolio swiper
let swiperPortfolio = new Swiper('.portfolio_container', {
    cssMode: true,
    loop:true,
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    pagination: {
      el: '.swiper-pagination',
      clickable:true
    }
  });

//Testimonial
let swiperTestimonial = new Swiper('.testimonial_container', {
    loop:true,
    grabCursor: true,
    spaceBetween: 48,

      pagination: {
        el: '.swiper-pagination',
        clickable:true,
        dynamicBullets: true,
      },
      breakpoints:{
        568:{
            slidesPerView: 2,
        }
      }
})

// Scroll Section Active Links
const sections = document.querySelectorAll('section[id]')

function scrollActive(){
    const scrollY = window.pageYOffset
    

    sections.forEach(current =>{
        const sectionHeight = current.offsetHeight
        const sectionTop = current.offsetTop - 50;
        sectionId = current.getAttribute('id')

        if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
            document.querySelector('.nav_menu a[href*=' + sectionId + ']').classList.add('active-link')
        }else{
            document.querySelector('.nav_menu a[href*=' + sectionId + ']').classList.remove('active-link')
        }
    })
}
window.addEventListener('scroll', scrollActive)

// change background headers
function scrollHeader(){
    const nav = document.getElementById('header')
    if(this.scrollY >= 80) nav.classList.add('scroll-header'); else nav.classList.remove('scroll-header');
}

window.addEventListener('scroll', scrollHeader)

// show scroll up
function scrollUp() {
    const scrollUp = document.getElementById('scroll-up')
    if(this.scrollY >= 560) scrollUp.classList.add('show-scroll'); else scrollUp.classList.remove('show-scroll');
}

window.addEventListener('scroll', scrollUp)

// dark light theme
const themeButton = document.getElementById('theme-button')
const darkTheme = 'dark-theme'
const iconTheme = 'uil-sun'

// Previously selected topic (if user selected)
const selectedTheme = localStorage.getItem('selected-theme')
const selectedIcon = localStorage.getItem('selected-icon')

// We obtain the current theme that the interface has by validating the dark-theme class
const getCurrentTheme = () => document.body.classList.contains(darkTheme) ? 'dark' : 'light'
const getCurrentIcon = () => themeButton.classList.contains(iconTheme) ? 'fa-sun' : 'fa-moon'

// We validate if the user previously chose a topic
if (selectedTheme) {
  // If the validation is fulfilled, we ask what the issue was to know if we activated or deactivated the dark
  document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](darkTheme)
  themeButton.classList[selectedIcon === 'fa-moon' ? 'add' : 'remove'](iconTheme)
}

// Activate / deactivate the theme manually with the button
themeButton.addEventListener('click', () => {
    // Add or remove the dark / icon theme
    document.body.classList.toggle(darkTheme)
    themeButton.classList.toggle(iconTheme)
    // We save the theme and the current icon that the user chose
    localStorage.setItem('selected-theme', getCurrentTheme())
    localStorage.setItem('selected-icon', getCurrentIcon())
})