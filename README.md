# 💼 Portfólio Pessoal - Matheus Jesus

> **Status:** ✅ Online
> **Frontend hospedado em:** [Amazon S3](#) *(adicione o link do seu domínio ou bucket público)*
> **Backend:** [API de Envio de E-mails (JavaMailSender)](#) hospedada em **AWS EC2**

---

## 📋 Descrição do Projeto

Portfólio pessoal desenvolvido para **apresentação profissional, projetos e contato direto**, com design limpo, responsivo e foco na experiência do recrutador.
O site é **estático (HTML, CSS e JavaScript)** e foi implantado em um **bucket S3 da AWS**, integrado a uma **API Java (Spring Boot)** responsável pelo envio de mensagens de contato via **JavaMailSender**.

---

## 🚀 Tecnologias Utilizadas

**Frontend:**

* 🌐 HTML5
* 🎨 CSS3
* ⚙️ JavaScript
* 💬 Integração com API REST (Fetch API)

**Infraestrutura:**

* ☁️ **Amazon S3** – hospedagem do portfólio estático
* ☁️ **AWS EC2** – hospedagem da API backend (JavaMailSender)
* 🌍 **AWS CloudFront (opcional)** – distribuição de conteúdo e HTTPS

---

## ✨ Funcionalidades

✅ Apresentação pessoal e profissional
✅ Exibição de projetos e tecnologias dominadas
✅ Formulário de contato funcional integrado à API JavaMailSender
✅ Layout responsivo e otimizado para desktop e mobile
✅ Hospedagem escalável na nuvem AWS

---

## 🌐 Estrutura do Projeto

```
portfolio/
├── index.html
└── style.css
└── script.js
└── imagens, 
```

---

## 💌 Integração com a API de Contato

O formulário da página **Contato** envia os dados para a **API Java** hospedada em EC2, responsável por repassar a mensagem por e-mail.

### Exemplo de código JavaScript:

```javascript
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
    const resposta = await fetch("http://54.221.30.224:8080/api/contato", {
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


---

## ☁️ Deploy e Configuração na AWS

### **Frontend**

* Criado bucket S3 configurado para hospedagem estática
* Upload dos arquivos HTML, CSS e JS
* Permissão pública de leitura para acesso ao site
* (Opcional) CloudFront configurado para HTTPS

### **Backend**

* API Java hospedada em instância **EC2**
* Porta 8080 liberada no Security Group
* Comunicação via requisições HTTP (CORS configurado no backend)

---

## 🧠 Aprendizados e Boas Práticas

* Separação entre **frontend (S3)** e **backend (EC2)**
* Boas práticas de **arquitetura e integração de serviços AWS**
* Requisições assíncronas com **Fetch API**
* Uso de variáveis e **envio seguro de e-mails com JavaMailSender**
* Implementação de **layout responsivo e otimizado**

---

## 🧾 Licença

Projeto licenciado sob **MIT License**.
Desenvolvido com 💛 por **Matheus Jesus** e implantado na **AWS**.

