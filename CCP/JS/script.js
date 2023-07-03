// Função para abrir o offcanvas
function openOffcanvas() {
    document.getElementById("offcanvas").classList.add("active");
  }
 // Função para fechar o offcanvas 
  function closeOffcanvas() {
    document.getElementById("offcanvas").classList.remove("active");
  }
  
  function toggleMenu() {
    document.getElementById("navbarLinks").classList.toggle("active");
    document.querySelector(".menu-icon").classList.toggle("active");
  }


  function submitForm() {
    // Obtenha os valores dos campos do formulário
    var nome = document.querySelector("input[type=text]").value;
    var email = document.querySelector("input[type=email]").value;
    var mensagem = document.querySelector("textarea").value;
  
    // Faça algo com os valores do formulário, como enviar para o servidor
    // Aqui você pode adicionar a lógica para enviar os dados do formulário para o servidor
  
    // Exemplo de exibição dos valores do formulário no console
    console.log("Nome: " + nome);
    console.log("E-mail: " + email);
    console.log("Mensagem: " + mensagem);
  
    // Limpe o formulário após o envio
    document.querySelector("input[type=text]").value = "";
    document.querySelector("input[type=email]").value = "";
    document.querySelector("textarea").value = "";
  
    // Exiba uma mensagem de sucesso ou faça qualquer ação adicional necessária após o envio do formulário
  }