const navAboutMe = document.querySelectorAll('.nav-about-me')
const sectionAboutMe = document.getElementById('about-me')

const navSkills = document.querySelectorAll('.nav-skills')
const sectionSkills = document.getElementById('skills')

const navExperincie = document.querySelectorAll('.nav-experience')
const sectionExperience = document.getElementById('experience')

const navContact = document.querySelectorAll('.nav-contact')
const sectionContact = document.getElementById('contact')

const navBanner = document.querySelectorAll('.nav-banner')
const sectionBanner = document.getElementById('banner')


const btnKnowMore = document.getElementById('btn__info')

const btnBars = document.getElementById('btnBars')
const btnContact = document.getElementById('btnContact')
const btnClose = document.getElementById('btnClose')

const headerDashboard = document.querySelector('.header__dashboard')

function navigateTo(sectionTo) {
    sectionTo.scrollIntoView({behavior : 'smooth'})
    headerDashboard.classList.remove('showNav')
}

function showHeaderNav() {
    headerDashboard.classList.add('showNav')
}

function closeHeaderNav() {
    headerDashboard.classList.remove('showNav')
}

btnBars.addEventListener('click', showHeaderNav)
btnClose.addEventListener('click', closeHeaderNav)
navAboutMe.forEach((about) => about.addEventListener('click', () =>  navigateTo(sectionAboutMe), false))
navSkills.forEach((skill) => skill.addEventListener('click', () =>  navigateTo(sectionSkills), false))
navExperincie.forEach((experien) => experien.addEventListener('click', () =>  navigateTo(sectionExperience), false))
navContact.forEach((contact) => contact.addEventListener('click', () =>  navigateTo(sectionContact), false))
navBanner.forEach((banner) => banner.addEventListener('click', () => navigateTo(sectionBanner), false) )





btnKnowMore.addEventListener('click', () => navigateTo(sectionAboutMe), false)
btnContact.addEventListener('click', () => navigateTo(sectionContact), false)

