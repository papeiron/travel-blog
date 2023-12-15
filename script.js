const navWorld = document.querySelector('#nav-world')
const sub = document.querySelector('#sub')
const cards = document.querySelectorAll('.countries-content .card')
const article_item = document.querySelectorAll('.article-item')
const last_article_item = article_item[article_item.length - 1]
const content_boxes = document.querySelectorAll('.content-box')
const gallery = document.querySelector('#gallery')
const gallery_input = document.querySelector('.gallery-input')
const gallery_search_btn = document.querySelector(
  '.gallery-search-bar #gallery-search-btn'
)
const arrow_back = document.querySelector('.arrow-back')
const arrow_forward = document.querySelector('.arrow-forward')
const back_to_top = document.querySelector('.back-to-top')
const arrow_back2 = document.querySelector('main .arrow-back')
const arrow_forward2 = document.querySelector('main .arrow-forward')
const world_img = document.querySelector('.world-img')
const categories_img = document.querySelector('.categories-img')
const suggestions_img = document.querySelector('.suggestions-img')
const gallery_img = document.querySelector('.gallery-img')
const nav_world = document.querySelector('#nav-world')
const categories_a = document.querySelector('.categories-a')
const suggestions_a = document.querySelector('.suggestions-a')
const gallery_a = document.querySelector('.gallery-a')
const greeting_text_h2 = document.querySelector('.greeting-text h2')
const greeting_text_p = document.querySelector('.greeting-text p')
const nav_sub_menu = document.querySelector('.sub-menu')
const nav_item_world = document.querySelector('.nav-links .world')

const header_body = document.querySelector('.header-body')

// INDEX

// slider
var splide_1 = new Splide('.splide', {
  type: 'loop',
  perPage: 3,
  start: 2,
  waitForTransition: true,
  gap: '.7rem',
  focus: 'center',
  autoplay: true,
  interval: 6000,
  speed: 700,
  fixedWidth: '34rem',
  fixedHeight: '65rem',
  pagination: false,
  arrows: false,

  breakpoints: {
    1540: {
      perPage: 3,
      gap: '.7rem'
    },
    900: {
      perPage: 1,
      gap: '.7rem'
    }
  }
})
splide_1.mount()

arrow_forward.addEventListener('click', () => {
  splide_1.go('+1')
})

arrow_back.addEventListener('click', (e) => {
  splide_1.go('-1')
})

// back_to_top_button
back_to_top.addEventListener('click', () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  })
})

// animation

const options = {
  root: null,
  rootMargin: '0px',
  threshold: 0.5 // Öğenin yarıdan fazlası görünürse tetikle
}

const observerF = (element) => {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      let animation

      if (element.localName == 'h2') {
        animation = 'animate__fadeInDown'
      } else if (element.localName == 'p') {
        animation = 'animate__fadeInRight'
      }

      if (entry.isIntersecting) {
        element.classList.add('animate__animated', animation)
      }
    })
  }, options)

  observer.observe(element)
}

observerF(greeting_text_h2)
observerF(greeting_text_p)
