

function openPopup(el, popupClass, btnClass) {
  el.addEventListener('click', () => {
    el.classList.toggle('active')

    document.addEventListener('click', (e) => {
      if (!e.target.closest(popupClass) && !e.target.closest(btnClass)) {
        el.classList.remove('active')
      }
    })
  })
}

export default openPopup
