/* ============================================= */
/* FUNÇÃO DO MENU HAMBURGER (Mobile)             */
/* ============================================= */
function toggleMenu() {
    document.getElementById("navbarLinks").classList.toggle("active");
    document.querySelector(".menu-icon").classList.toggle("active");
}

/* ============================================= */
/* FUNÇÃO DO FORMULÁRIO (Simulação)              */
/* ============================================= */
function submitForm(event) {
    event.preventDefault(); // Impede o envio real da página

    // Obtenha os valores
    var nome = document.querySelector(".contact-form input[type=text]").value;
    var email = document.querySelector(".contact-form input[type=email]").value;
    var telefone = document.querySelector(".contact-form input[type=tel]").value;
    var mensagem = document.querySelector(".contact-form textarea").value;

    console.log("Formulário enviado (simulação):");
    console.log("Nome: " + nome);
    console.log("E-mail: " + email);
    console.log("Telefone: " + telefone);
    console.log("Mensagem: " + mensagem);
    
    // Limpe o formulário
    event.target.reset();

    // Exiba uma mensagem de sucesso
    alert("Mensagem enviada com sucesso! Entraremos em contato em breve. (Simulação)");
}


/* ============================================= */
/* HEADER STICKY (Muda ao rolar)                 */
/* ============================================= */
window.addEventListener('scroll', () => {
    const header = document.getElementById('header');
    if (window.scrollY > 50) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
});


/* ============================================= */
/* ANIMAÇÃO DE SCROLL (Intersection Observer)    */
/* ============================================= */
document.addEventListener("DOMContentLoaded", () => {
    
    const revealElements = document.querySelectorAll('.reveal-fade');
    
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1 // 10% do elemento na tela
    };

    const revealCallback = (entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    };

    const observer = new IntersectionObserver(revealCallback, observerOptions);

    revealElements.forEach(el => {
        observer.observe(el);
    });
});

/* ============================================= */
/* ANO ATUAL AUTOMÁTICO (Rodapé)                 */
/* ============================================= */
document.addEventListener("DOMContentLoaded", () => {
    // Encontra o elemento com o ID 'currentYear' e insere o ano atual
    const yearSpan = document.getElementById('currentYear');
    if (yearSpan) {
        yearSpan.textContent = new Date().getFullYear();
    }
});
