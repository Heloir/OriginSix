//toggle abre e fecha menu quando clicar no icone
const nav = document.querySelector('#header nav')
const toggle = document.querySelectorAll('nav .toggle')



for (const element of toggle) {
  element.addEventListener('click', function() {
   nav.classList.toggle('show')
  })
}


//quando cliclar em um item no menu fechar o menu

const links = document.querySelectorAll('nav ul li a')

for(const link of links){
  link.addEventListener('click', function() {
    nav.classList.remove('show')
    
  })
}


/* Mudar o Header da página quando der scroll */

const header = document.querySelector('#header')
const navHeight = header.offsetHeight

window.addEventListener('scroll', function() {
  if(window.scrollY >= navHeight){

    header.classList.add('scroll')

  } else{

    header.classList.remove('scroll')
  }
})


//Testimonials Swiper


const swiper = new Swiper('.swiper-container', {
  slidesPerView: 1,
  pagination: {
    el: '.swiper-pagination'
  },
  mousewheel: true,
  keyboard: true,
  breakpoints: {
    767: {
      slidesPerView: 2,
      setWrapperSize: true
    }
  }
})