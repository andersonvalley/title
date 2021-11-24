function showPopup() {
  const popup = document.querySelector('.popup')
  const popupBtn = document.querySelector('.popup-btn')
  const popupClose = document.querySelector('.popup__close')

  popupClose.addEventListener('click', () => {
    popup.classList.remove('active')
    document.body.style.overflow = 'auto'
  })

  popupBtn.addEventListener('click', () => {
    if (popup.classList.contains('active')) {
      popup.classList.remove('active')
      document.body.style.overflow = 'scroll'
    } else {
      popup.classList.add('active')
      document.body.style.overflow = 'hidden'
    }

    document.addEventListener('click', (e) => {
      if (!e.target.closest('.popup') && !e.target.closest('.popup-btn')) {
        popup.classList.remove('active')
        document.body.style.overflow = 'auto'
      }
    })
  })
}

export default showPopup
