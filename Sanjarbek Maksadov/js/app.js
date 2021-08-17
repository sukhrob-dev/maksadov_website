// Loader JS
var isChrome = /Chrome/.test(navigator.userAgent) && /Google Inc/.test(navigator.vendor);

if(!isChrome) {
    document.getElementsByClassName('infinityChrome')[0].style.display = "none";
    document.getElementsByClassName('infinity')[0].style.display = "block";
}

$(document).ready(function() {
    //Preloader
    preloaderFadeOutTime = 500;
    function hidePreloader() {
    var preloader = $('.loader');
    preloader.fadeOut(preloaderFadeOutTime);
    }
    hidePreloader();
});

const toggleBtn = document.querySelector('.toggle-button');
const sidebar = document.querySelector('.sidebar');
const navbar = document.querySelector('.navbar');
const nima = document.querySelector('.show-arrow');

window.addEventListener('scroll', () => {
    if (window.scrollY > 0 && sidebar.classList.contains('sidebar')) {
        navbar.classList.add('sticky');
        nima.classList.add('to-top');
    }else {
        navbar.classList.remove('sticky');
        nima.classList.remove('to-top');
    }
})

toggleBtn.addEventListener('click', () => {
    toggleBtn.classList.toggle('active');
    sidebar.classList.toggle('show');
})

const highlightMenu = () => {
    const elem = document.querySelector('.passive');
    const homeMenu = document.querySelector('#home-page');
    const aboutMenu = document.querySelector('#about-page');
    const servicesMenu = document.querySelector('#services-page');
    const portfolioMenu = document.querySelector('#portfolio-page');
    const contactMenu = document.querySelector('#contact-page');
    let scrollPos = window.scrollY;

    // Adding 'highlight' class to the menu items
    if (window.innerWidth > 960 && scrollPos < 500) {
        homeMenu.classList.add('passive');
        aboutMenu.classList.remove('passive');
        return;
    } else if (window.innerWidth > 960 && scrollPos < 1000) {
        aboutMenu.classList.add('passive');
        homeMenu.classList.remove('passive');
        servicesMenu.classList.remove('passive');
        return;
    } else if (window.innerWidth > 960 && scrollPos < 2345) {
        servicesMenu.classList.add('passive');
        aboutMenu.classList.remove('passive');
        portfolioMenu.classList.remove('passive');
        return;
    } else if (window.innerWidth > 960 && scrollPos < 3000) {
        portfolioMenu.classList.add('passive');
        servicesMenu.classList.remove('passive');
        contactMenu.classList.remove('passive');
        return;
    } else if (window.innerWidth > 960 && scrollPos < 4200) {
        contactMenu.classList.add('passive');
        portfolioMenu.classList.remove('passive');
        return;
    }

    if ((elem && window.innerWidth < 960 && scrollPos < 600) || elem) {
        elem.classList.remove('passive');
    }
}

window.addEventListener('scroll', highlightMenu);

const sunBtn = document.querySelector('.light');
const bodyLight = document.querySelector('body');
let fas = document.querySelector('.fa-sun');
sunBtn.addEventListener('click', () => {
    if (fas.classList.contains('fa-sun')) {
        fas.classList.add('fa-moon');
        fas.classList.remove('fa-sun');
        bodyLight.classList.add('white');
        return;
    } else if (fas.classList.contains('fa-moon')) {
        fas.classList.remove('fa-moon');
        fas.classList.add('fa-sun');
        bodyLight.classList.remove('white');
        return;
    }
});

// Filter images gallery
const filterItem = document.querySelector('.items');
const filterImg = document.querySelectorAll('.img');

window.onload = () => {//  once window loaded
    filterItem.onclick = (selectedItem) => {
        if (selectedItem.target.classList.contains('item')) {
            filterItem.querySelector('.linked').classList.remove('linked');
            selectedItem.target.classList.add('linked');
            let filterName = selectedItem.target.getAttribute('data-name');
            filterImg.forEach((image) => {
                let filterImages = image.getAttribute('data-name');
                if ((filterImages == filterName) || filterName == 'all') {
                    image.classList.add('show');
                    image.classList.remove('hide');
                } else {
                    image.classList.add('hide');
                    image.classList.remove('show');
                }
            })
        }
    }
    for (let i = 0; i < filterImg.length; i++) {
        filterImg[i].setAttribute('onclick', 'preview(this)');
    }
}
const previewBox = document.querySelector('.preview-box'),
previewImg = previewBox.querySelector('img'),
categoryName = previewBox.querySelector('.title p'),
closeIcon = previewBox.querySelector('.icon'),
shadow = document.querySelector('.shadow');

function preview(element) {
    let selectedPrevImg = element.querySelector('img').src;
    let selectedImgCategory = element.getAttribute('data-name');
    categoryName.textContent = selectedImgCategory;
    previewImg.src = selectedPrevImg;
    previewBox.classList.add('show');
    shadow.classList.add('show');
    closeIcon.onclick = () => {
        previewBox.classList.remove('show');
        shadow.classList.remove('show');
    }
}