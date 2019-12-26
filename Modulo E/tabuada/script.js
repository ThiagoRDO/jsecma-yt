function calcular(){
  let numero = document.querySelector("input#numero")
  let tabuada = document.querySelector("select#seltab")

  if (numero.value.length == 0){
    alert("Numero invalido!")
  } else {    
    let n = Number(numero.value)

    let c = 1
    tabuada.innerHTML = ''
    while (c <= 10){
      let item = document.createElement('option')
      item.text = `${n} x ${c} = ${n*c}`
      tabuada.appendChild(item)
      c++
    }
  }
}