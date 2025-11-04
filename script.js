
// Formulário de Contato
const form = document.getElementById("formContato");
const mensagemSucesso = document.getElementById("mensagem-sucesso");

form.addEventListener("submit", async function (e) {
  e.preventDefault();

  const dados = {
    nome: document.getElementById("nome").value,
    email: document.getElementById("email").value,
    mensagem: document.getElementById("mensagem").value,
  };

  try {
    const resposta = await fetch("https://apienvioemail.onrender.com/api/contato", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(dados),
    });

    if (resposta.ok) {
      mensagemSucesso.style.display = "block";
      form.reset();
      setTimeout(() => {
        mensagemSucesso.style.display = "none";
      }, 4000);
    } else {
      alert("Erro ao enviar mensagem. Tente novamente.");
    }
  } catch (erro) {
    alert("Erro na conexão com o servidor.");
    console.error(erro);
  }
});
