function sendEmail() {
  const email = document.querySelector('.email')

  email.addEventListener('mouseover', () => {
    email.innerHTML = 'Служба поддержки'
  })

  email.addEventListener('mouseleave', () => {
    email.innerHTML = 'Написать письмо'
  })
}

export default sendEmail
