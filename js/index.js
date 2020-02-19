let logoGet = document.querySelector('.main-navigation .logo-heading');
logoGet.addEventListener('mouseenter',()=>{
    logoGet.style.transform = "scale(1.3)"
    logoGet.style.transition = "all 0.3s"
});

logoGet.addEventListener('mouseleave',()=>{
    logoGet.style.transform = "scale(1)" 
});

const navItems = document.querySelectorAll(".nav-link");
const navItemEventHandler = (event) =>{
event.target.style.color = "#3366ff";
}
navItems.forEach(item =>{item.addEventListener("mouseover",navItemEventHandler)});
const navItemDenied = (event) =>{
  event.preventDefault();
}
navItems.forEach(item=>{item.addEventListener('click',navItemDenied)});




const busImage = document.querySelector('.intro img');
busImage.addEventListener('dblclick',(event)=>{
  busImage.style.filter = "invert(0)";
  busImage.style.transition = "all 1s";
  event.stopPropagation();
})

window.addEventListener('resize',()=>{
  busImage.style.filter = "invert(1)";
  busImage.style.transition = "all 1.5s";
})


const body = document.querySelector('body');
body.addEventListener('dblclick', (event)=>{
  body.style.filter = 'invert(1)';
  body.style.color = "pink";
  body.style.transition = 'all 2.5s';
  event.stopPropagation();
})

let firstPstring = document.querySelector('.intro p');
firstPstring.addEventListener('click',()=>{
  firstPstring.style.textTransform = "uppercase";
  firstPstring.style.backgroundColor = "red";
  })


let secondSec = document.querySelector('.content-section .text-content');
secondSec.addEventListener('click',()=>{
  secondSec.textContent = "oh no you broke it.";
  secondSec.style.textTransform = "uppercase";
})

let footGet = document.querySelector('.footer');
footGet.addEventListener('wheel',()=>{
  gsap.from(footGet,{ duration: 5.5, ease: "elastic.out(1, 0.3)", y: -500 });
})
footGet.addEventListener('click',()=>{
  footGet.style.backgroundColor = 'white';
})