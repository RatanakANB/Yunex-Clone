// Sports card component
class CardComponent extends HTMLElement{
    connectedCallback() {
        this.innerHTML = `
            <div class="flex justify-between gap-3 max-w-[1600px] items-center flex-1">
                ${arrObj.map((card) => {
                    return `
                        <div class="flex flex-col items-center justify-center">
                            <img src="${card.img}" alt="" class="" >
                            <p class="font-semibold text-[18px] ">${card.title}</p>
                        </div>
                    `
                }).join("")}
            </div>
            `
    } 
}
customElements.define("card-component", CardComponent);

const sectionIds = ['badminton', 'tennis', 'golf', 'running', 'snowboard', 'about'];

function toggleDropdown(id) {
    const el = document.querySelector('#' + id);
    if (el) {
        el.style.maxHeight = el.style.maxHeight === '500px' ? '0px' : '500px';
    }
}

function hoverDrop(x){
    toggleDropdown(sectionIds[x - 1]);
    document.getElementById('overlay-blur').classList.toggle('hidden');
}

function hoverHide(x){
    toggleDropdown(sectionIds[Math.abs(x) - 1]);
    document.getElementById('overlay-blur').classList.toggle('hidden');
}
function golfDrop(){
    const el = document.querySelector('#golf');
    if (el) el.style.maxHeight = '500px';
    document.getElementById('overlay-blur').classList.remove('hidden');
}

function golfHide(){
    const el = document.querySelector('#golf');
    if (el) el.style.maxHeight = '0px';
    document.getElementById('overlay-blur').classList.add('hidden');
}


function openNav() {
    const sidenav = document.getElementById("mySidenav");
    sidenav.style.width = '80%';
    sidenav.style.overflowY = 'auto';
    document.getElementById('overlay-blur1').classList.remove('hidden');
    document.querySelector('body').classList.add('overflow-y-hidden')
    document.querySelector('#hamburger-logo').classList.add('hidden')
    document.querySelector('#close-sidebar').classList.remove('hidden')
}

function closeNav() {
    const sidenav = document.getElementById("mySidenav");
    sidenav.style.width = '0px';
    sidenav.style.overflowY = 'hidden';
    document.getElementById('overlay-blur1').classList.add('hidden');
    document.querySelector('body').classList.remove('overflow-y-hidden')
    document.querySelector('#hamburger-logo').classList.remove('hidden')
    document.querySelector('#close-sidebar').classList.add('hidden')
}


const sidebarDropIds = ['badminton-drop', 'golf-drop', 'tennis-drop', 'running-drop', 'snowboard-drop', 'about-drop'];

function showDropdown(x){
    let dropdownside = document.getElementById(sidebarDropIds[x - 1]);
    if (dropdownside) {
        dropdownside.style.maxHeight = dropdownside.style.maxHeight === '300px' ? '0px' : '300px';
    }
}


// functions for slideshow sport

// functions for new arrival
let currentSlide2 = 0;
function pushArrow1(n) {
  const carousel = document.querySelector(" .slideShow1");
  const images = carousel.querySelectorAll(".slide-list1");
  const imageWidth = images[0].clientWidth;
  currentSlide2 = Math.max(0, Math.min(currentSlide2 + n, images.length - 1));
  carousel.scrollTo({ left: currentSlide2 * imageWidth, behavior: "smooth" });
}

// function for switching news
let slideIndexRecent = 0;
showSlidesRecent();

function showSlidesRecent() {
    let i;
    let slides = document.getElementsByClassName("recent-slide");
    let dots = document.getElementsByClassName("dot-recent");
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";  
    }
    slideIndexRecent++;
    if (slideIndexRecent > slides.length) {slideIndexRecent = 1}    
    slides[slideIndexRecent-1].style.display = "flex";  
    dots[slideIndexRecent-1].className += " active";
    setTimeout(showSlidesRecent, 3000);
}

// functions for slider3 


// function for open search
function opensearch(){
    document.getElementById('search-bar').classList.toggle('hidden')
    document.getElementById('search-bar').classList.toggle('flex')
}
function closesearch(){
    document.getElementById('search-bar').classList.toggle('hidden')
    document.getElementById('search-bar').classList.toggle('flex')
}
function opensearchresponse(){
    document.getElementById('search-bar2').classList.toggle('hidden')
    document.getElementById('search-bar2').classList.toggle('flex')
}
function closesearchresponse(){
    document.getElementById('search-bar2').classList.toggle('hidden')
    document.getElementById('search-bar2').classList.toggle('flex')
}

window.hoverDrop = hoverDrop;
window.hoverHide = hoverHide;
window.golfDrop = golfDrop;
window.golfHide = golfHide;
window.openNav = openNav;
window.closeNav = closeNav;
window.showDropdown = showDropdown;
window.pushArrow1 = pushArrow1;
window.opensearch = opensearch;
window.closesearch = closesearch;
window.opensearchresponse = opensearchresponse;
window.closesearchresponse = closesearchresponse;
