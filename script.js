const menuBtn = document.querySelectorAll('.humbarger-menu');
const overlay = document.querySelector('.ol-fr-js');
const menuList = document.querySelector('.menu-list');
const body = document.querySelector('body')
const choiceList = document.querySelectorAll('.download-list')
const download = document.querySelectorAll('li .download')
const choicedAnchor = document.querySelectorAll('.download-list a')
const listUl = document.querySelectorAll('.download-list ul')

download[0].addEventListener('mouseover',(e) => {
    // choiceList[0].style.visibility = 'visible';
    choiceList[0].classList.add('fade-in')
    choiceList[0].classList.remove('fade-out')
})
choiceList[0].addEventListener('mouseout', (e) => {
    choiceList[0].style.visibility = 'hidden'
   choiceList[0].classList.add('fade-out')
   choiceList[0].classList.remove('fade-in')
})
listUl[0].addEventListener('mouseover',(e) => {
    choiceList[0].style.visibility = 'visible'
    
})
choiceList[0].addEventListener('mouseover',(e) =>{
    choiceList[0].style.visibility = 'visible'
    choiceList[0].classList.remove('fade-out')
})




const btn = () => {

    if (menuBtn[0].classList.contains('open')) {
        menuBtn[0].classList.remove('open')
        overlay.classList.add('fade-out')
        overlay.classList.remove('fade-in')
        menuList.classList.add('fade-out');
        menuList.classList.remove('fade-in')
        body.style.overflow = 'auto'

    } else {// open hambergur menu

        menuBtn[0].classList.add('open')
        overlay.classList.remove('fade-out')
        overlay.classList.add('fade-in')
        overlay.classList.add('overlay')
        menuList.classList.add('fade-in')
        menuList.classList.remove('fade-out')
        body.style.overflow = 'hidden'

    }
}
