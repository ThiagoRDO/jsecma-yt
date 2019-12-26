function contar() {
  let inicio = document.querySelector("input#inicio")
  let fim = document.querySelector("input#fim")
  let passo = document.querySelector("input#passo")
  let resultado = document.querySelector("div#resultado")

  if (inicio.value.length == 0 || fim.value.length == 0 || passo.value.length == 0) {
    alert("Inválido!")
  } else {
    limparResultado()
    let p = Number(passo.value)

    if (p <= 0) {
      p = 1
    }

    if (Number(inicio.value) < Number(fim.value)) {
      for (let index = Number(inicio.value); index <= Number(fim.value); index += p) {
        resultado.innerHTML += ` ${index} \u{1F449} `
      }
    } else {
      for (let index = Number(inicio.value); index >= Number(fim.value); index -= p) {
        resultado.innerHTML += ` ${index} \u{1F449} `
      }
    }
    resultado.innerHTML += ` \u{1F3C1} `
  }
}

function limparResultado() {
  document.querySelector("div#resultado").innerHTML = "Preparando contagem:"
}