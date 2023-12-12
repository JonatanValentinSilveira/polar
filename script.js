// Header
const nav = document.querySelector('.nav')
window.addEventListener('scroll', fixNav)

function fixNav() {
    if(window.scrollY > nav.offsetHeight + 150) {
        nav.classList.add('active')
    } else {
        nav.classList.remove('active')
    }
}

// carrossel
const panels = document.querySelectorAll('.panel')

panels.forEach(panel => {
    panel.addEventListener('click', () => {
        removeActiveClasses()
        panel.classList.add('active')
    })
})

function removeActiveClasses() {
    panels.forEach(panel => {
        panel.classList.remove('active')
    })
}

// mais e menos texto
function mostrarMais(botao) {
    var paragrafoContainer = botao.parentNode.parentNode; // Avança dois níveis para chegar ao .conteudo
    var maisTexto = paragrafoContainer.querySelector('.maisTexto');

    if (maisTexto.style.display === "none" || maisTexto.style.display === "") {
        maisTexto.style.display = "inline";
        botao.innerHTML = "-";
    } else {
        maisTexto.style.display = "none";
        botao.innerHTML = "+";
    }
}
