function verificar() {
  let data = new Date()
  let ano = data.getFullYear()
  let fano = document.getElementById('txtano')
  let resultado = document.querySelector('div#resultado')
  let sex = document.getElementsByName('radsex')
  let gender = ''
  let img = document.createElement('img')
  img.setAttribute('id','img')

  gender = checkGender(sex[0].checked)

  if (fano.value.length < 4 || fano.value > ano) {
    alert('O ano é inválido! Tente novamente!')
    //clearFAno()
  } else {
    //resultado.innerHTML = `Sua idade é ${idade(fano.value)}`
    //clearFAno()
    resultado.innerHTML = `Você é um(a) ${gender}. Sua idade é ${idade(fano.value)}`
    switch (gender) {
      case 'Homem':
        img.setAttribute('src','dia.png')
        break;    
      default:
        img.setAttribute('src','tarde.png')
        break;
    }
    resultado.style.textAlign = 'center'
    resultado.appendChild(img)
  }
}

function idade(ano) {
  let anotemp = new Date().getFullYear()
  return anotemp - ano
}

function clearFAno() {
  document.getElementById('txtano').value = ''
}

function checkGender(value) {
  return value == true ? 'Homem' : 'Mulher'
}