const skillsItems = document.querySelectorAll('.skills__list-items')
const aboutItemImg = document.querySelector('.about-me__img')
const experienceItems = document.querySelectorAll('.experinecie__list-items')

function revelaScroll (item) {
    let scrollTop = document.documentElement.scrollTop
        for(let i = 0; i < item.length; i++){
            let offsetTopItems = item[i].offsetTop
            if(offsetTopItems - 600 < scrollTop) {
                item[i].style.opacity = 1;
                item[i].classList.add('animateBottom')
            }
        }
}

window.addEventListener('scroll', () => revelaScroll(skillsItems))
window.addEventListener('scroll', () => revelaScroll(aboutItemImg))
window.addEventListener('scroll', () => revelaScroll(experienceItems))