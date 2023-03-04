const criarTarefa = (evento) => {
  evento.preventDefault();
  const input = document.querySelector("[data-form-input]");
  const valor = input.value;
  const tarefa = document.querySelector("[data-task");
  const conteudo = `${valor}`;

  tarefa.innerHTML = conteudo;
  input.value = "";
};

const novaTarefa = document.querySelector("[data-form-button]");

novaTarefa.addEventListener("click", criarTarefa);
