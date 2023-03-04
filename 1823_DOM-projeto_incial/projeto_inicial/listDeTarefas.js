const criarTarefa = (evento) => {

  const input = document.querySelector('[data-form-input]')
  const valor = input.value
  console.log( valor )
  input.value = " "
  evento.preventDefault()
}

const novaTarefa = document.querySelector("[data-form-button]");

novaTarefa.addEventListener("click", criarTarefa)