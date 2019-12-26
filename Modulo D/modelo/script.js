function carregar() {
  let message = window.document.getElementById('msg')
  let img = window.document.getElementById('imagem')
  let data = new Date()
  //let hora = data.getHours()
  let hora = 11

  message.innerHTML = `Agora são ${hora} horas.`

  if (hora >= 0 && hora < 12){
    //dia
    img.src = "../dia.png"
    document.body.style.background = '#FCF282'
  } else if (hora >= 12 && hora < 18) {
    //tarde
    img.src = "../tarde.png"
    document.body.style.background = '#F0A52F'
  } else {
    //noite
    img.src = "../noite.png"
    document.body.style.background = '#1B1A9A'
  }
  
}

