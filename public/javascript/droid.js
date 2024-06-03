var submenu1 = document.getElementById('submenu1')
var submenu2 = document.getElementById('submenu2')
var sub1hold = document.getElementById('sub1hold')
var sub2hold = document.getElementById('sub2hold')
var slideshow = document.getElementById('slideshow')
var slides = document.querySelectorAll('.slides')
let slide = 0
var ham = document.getElementById('hamburger')
var list = document.querySelector('.list-group')


ham.addEventListener('click', () =>{
   list.classList.toggle('hide')
})


function init(){
   clear()
   slides[slide].style.display = 'block'
}

function clear(){
 slides.forEach(slide =>{
      slide.style.display = 'none'
   })
}

function start(){
   init()
   setInterval(() => {
    if (slide < 2) {
        init()
      slide ++
      console.log(slide)
      init()
    }else{
      slide = 0
      init()
      console.log(slide)
    }
      
   }, 5000);
}

sub1hold.addEventListener('click', () =>{

   submenu1.classList.toggle('shown')
})
sub2hold.addEventListener('click', () =>{
   submenu2.classList.toggle('shown')
})

// init()









start()
