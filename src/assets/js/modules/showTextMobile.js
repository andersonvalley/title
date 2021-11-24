function showTextMobile() {
  const mobileBtns = document.querySelectorAll('.service__title')
  mobileBtns.forEach((item) => {
    item.addEventListener('click', () => {
      item.classList.toggle('active')
    })
  })
}

export default showTextMobile
