const modal = document.querySelector('.modal-show-reel')
const showReels = document.querySelectorAll('.show-reels')
const close = document.querySelector('.close')
const frame = document.querySelector('.frame')
const wrapper = document.querySelector('.wrapper')

showReels.forEach((item) => {
  item.addEventListener('click', function () {
    modal.classList.add('active')
    frame.src = this.dataset.id
  })
})

close.addEventListener('click', function (e) {
  e.preventDefault()
  modal.classList.remove('active')
})

// wrapper.addEventListener('click', function () {
//   modal.classList.remove('active')
// })
