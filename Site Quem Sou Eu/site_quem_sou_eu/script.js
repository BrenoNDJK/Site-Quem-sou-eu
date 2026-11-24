// Botão para voltar ao início da página
const botao = document.getElementById("voltarTopo");

botao.addEventListener("click", function () {
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
});
