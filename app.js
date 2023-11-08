

const header=document.getElementById('header')
const intro=document.getElementById('intro')
const nav=document.getElementById('nav')
const menu=document.getElementById('nav_toggle')

const navlinks=document.querySelectorAll('.nav-link')
const accordionHeaders=document.querySelectorAll('.accordion-header')

let scrollOffset=0
let introH=intro.clientHeight


// FIXED HEADER
window.addEventListener('scroll', function(){
   
    scrollOffset = this.scrollY;

    if(scrollOffset>introH){
        header.classList.add('header--fixed')
    }
    else{
        header.classList.remove('header--fixed');
    }

})

//SMOOTH SCROLL

navlinks.forEach(link=>{
    

    link.addEventListener('click', function(e){
        e.preventDefault();


        navlinks.forEach(function(link){
            link.classList.remove('active');
        });

        this.classList.add('active')
        const targetElement = document.querySelector(this.getAttribute('data-scrool'));

        targetElement.scrollIntoView({
            behavior:'smooth'
        })
    })
})


//MENU NAV TOGGLE

menu.addEventListener('click', function(e){
   e.preventDefault()
   if(!menu.classList.contains('active')){

       nav.classList.add('active')
       menu.classList.add('active')
       
   }
   else if(menu.classList.contains('active')){
    nav.classList.remove('active')
    menu.classList.remove('active')
   }
})


//COLLAPSE

accordionHeaders.forEach(link=>{
    

    link.addEventListener('click', function(e){
        e.preventDefault();


        const targetElement = document.querySelector(this.getAttribute('data-collapse'));

        
        if(!targetElement.classList.contains('active'))
        {
            targetElement.classList.add('active')
        }
        else
        {
            targetElement.classList.remove('active')
        }
      
    })
})
