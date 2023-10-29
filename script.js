function toggleMode() {
  const html = document.documentElement
  html.classList.toggle("light")
  //pegar a tag img
  const img = document.querySelector("#profile img")
  //substituir a img
  if (html.classList.contains("light")) {
    //se tiver a light mode, add a imagem light
    img.setAttribute("src", "./assets/avatar-lightvic.png")
  } else {
    //se tiver light mode, manter img normal
    img.setAttribute("src", "./assets/avatarvic2.png")
  }
}
