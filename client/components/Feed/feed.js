// Navbar menu
const src = [
    '../../images/icons/icons8-hut-50.png',
    '../../images/icons/icons8-chat-bubble-50.png',
    '../../images/icons/icons8-add-50.png',
    '../../images/icons/icons8-compass-50.png',
    '../../images/icons/icons8-heart-50.png',
    '../../images/icons/icons8-user-50.png'
]

const src2 = [
    '../../images/icons/icons8-hut-50-2.png',
    '../../images/icons/icons8-chat-bubble-50-2.png',
    '../../images/icons/icons8-add-50-2.png',
    '../../images/icons/icons8-compass-50-2.png',
    '../../images/icons/icons8-heart-50-2.png',
    '../../images/icons/icons8-user-50-2.png'
]

const navItems = document.getElementsByClassName('nav__icon')

function promeni(id) {
    for (let i = 0; i < navItems.length; i++) {
        const url = '../..' + (navItems[i].src).slice(28)
        if (url == src2[i]) {
            navItems[i].src = src[i]
        }
    }
    navItems[id].src = src2[id]
}

// Spinner
const spinners = document.getElementsByClassName('spinner')

for (let i = 0; i < spinners.length; i++) {
    spinners[i].addEventListener('click', () => {
        spinners[i].classList.add("active")
        setTimeout(() => {
            spinners[i].classList.remove("active")
            spinners[i].classList.add("watched")
        }, 1500);
    })
}

// Story buttons
const back = document.getElementById('story-slider-btn-back')
const next = document.getElementById('story-slider-btn-next')
const storiesLi = Array.from(document.getElementsByClassName('story-li'))

back.style.display = 'none'
storiesLi[0].scrollIntoView(alignToTop=false)
storiesLi[storiesLi.length-1].style.marginRight = '16px'

let index = 0
function show(increase) {
    index = index + increase
    
    if (index >= storiesLi.length - 6) {
        next.style.display = 'none'
    } else {
        next.style.display = 'block'
    }

    storiesLi[index].scrollIntoView({block: "end", inline: "start", behavior: "smooth"})

    if (index == 0) {
        back.style.display = 'none'
    } else {
        back.style.display = 'block'
    }
}