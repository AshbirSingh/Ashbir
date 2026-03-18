nav = document. querySelector('.nav')

window.addEventListener('scroll' , () => {
   if (scrollY >500) {
    nav.claassList.add('active')
   }
   else {
    nav.classList.remove('active')
   }
})
