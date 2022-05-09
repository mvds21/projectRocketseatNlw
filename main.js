window.addEventListener('scroll', onScroll)

onScroll()
function onScroll() {
  showNavOnScroll()
  showBackToTopButtonOnScroll()
  activateMenuCurrentSection(home)
  activateMenuCurrentSection(services)
  activateMenuCurrentSection(about)
  activateMenuCurrentSection(contact)


}

function activateMenuCurrentSection(section) {
  const targetLine = scrollY + innerHeight / 2

  const sectionTop = section.offsetTop
  const sectionHeight = section.offsetTop
 
  const sectionTopReach = targetLine >= sectionTop





 const sectionEndAt = sectionTop + sectionHeight
 
 const sectionEndPassed = sectionEndAt <= targetLine

//  console.log('o fundo da seção passou da linha ' , sectionEndPassed)
 
 const sectionBoundaries = sectionTopReach && !sectionEndPassed

 const sectionId = section.getAttribute('id')
 const menuElement = document.querySelector(`.menu a[href*=${sectionId}]`)

 menuElement.classList.remove('active')
 if(sectionBoundaries){
  menuElement.classList.add('active')

}
}

function showNavOnScroll() {
  if (scrollY > 0) {
    navigation.classList.add('scroll')
  } else {
    navigation.classList.remove('scroll')
  }
}

function showBackToTopButtonOnScroll() {
  if (scrollY > 550) {
    backToTopButton.classList.add('show')
  } else {
    backToTopButton.classList.remove('show')
  }
}

function openMenu() {
  document.body.classList.add('menu-expanded')
}

function closeMenu() {
  document.body.classList.remove('menu-expanded')
}

ScrollReveal({
  origin: 'top',
  distance: '30px',
  duration: 700
}).reveal(`
  #home, 
  #home img, 
  #home .stats, 
  #services,
  #services header,
  #services .card
  #about, 
  #about header, 
  #about .content`)

