import lazyLoadInstance from './modules/lazy'
import openPopup from './modules/popups'
import sendEmail from './modules/sendEmail'
import showTextMobile from './modules/showTextMobile'
import showPopup from './modules/showPopup'

const help = document.querySelector('.header__help')
const burger = document.querySelector('.burger')

document.addEventListener('DOMContentLoaded', () => {
  lazyLoadInstance.update()

  openPopup(help, '.header__phone', '.header__help')
  openPopup(burger, '.menu', '.burger')
  sendEmail()
  showPopup()
  showTextMobile()
})
