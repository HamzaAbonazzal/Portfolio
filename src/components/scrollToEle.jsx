export function scrollToEle(eleClass) {
  window.scrollTo({
    top: document.querySelector(`.${eleClass}`).offsetTop - 100,
    behavior: "smooth"
  })
}