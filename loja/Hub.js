const menuMobile = document.querySelector(".menu-mobile");
const menu = document.querySelector(".menu");

menuMobile.addEventListener("click", () => {

    menu.classList.toggle("menu-aberto");

});

const header = document.querySelector(".header");

window.addEventListener("scroll", () => {

    if (window.scrollY > 50) {

        header.style.padding = "15px 6%";
        header.style.boxShadow = "0 5px 20px rgba(0,0,0,.15)";

    } else {

        header.style.padding = "20px 6%";
        header.style.boxShadow = "0 2px 15px rgba(0,0,0,.08)";

    }

});


document.querySelectorAll('a[href^="#"]').forEach(link => {

    link.addEventListener("click", function(e) {

        e.preventDefault();

        const destino = document.querySelector(
            this.getAttribute("href")
        );

        if(destino){

            destino.scrollIntoView({
                behavior:"smooth"
            });

        }

    });

});


const elementos = document.querySelectorAll(
    ".stat-card, .categoria-card, .produto-card, .promo-card, .avaliacao-card, .contato-box, .sobre-texto"
);

const observador = new IntersectionObserver((entries)=>{

    entries.forEach(entry=>{

        if(entry.isIntersecting){

            entry.target.classList.add("mostrar");

        }

    });

},{
    threshold:0.2
});

elementos.forEach(el=>{

    el.classList.add("esconder");
    observador.observe(el);

});

const numeros = document.querySelectorAll(".stat-card h2");

function animarNumero(elemento){

    const textoOriginal = elemento.innerText;

    let valorFinal = parseInt(
        textoOriginal.replace(/\D/g,"")
    );

    if(!valorFinal) return;

    let contador = 0;

    let incremento = valorFinal / 80;

    let timer = setInterval(()=>{

        contador += incremento;

        if(contador >= valorFinal){

            contador = valorFinal;
            clearInterval(timer);

        }

        if(textoOriginal.includes("+")){

            elemento.innerText =
                "+" + Math.floor(contador);

        }else{

            elemento.innerText =
                Math.floor(contador);

        }

    },20);

}

const observerNumeros = new IntersectionObserver((entries)=>{

    entries.forEach(entry=>{

        if(entry.isIntersecting){

            animarNumero(
                entry.target.querySelector("h2")
            );

            observerNumeros.unobserve(
                entry.target
            );

        }

    });

},{
    threshold:0.5
});

document.querySelectorAll(".stat-card")
.forEach(card=>{

    observerNumeros.observe(card);

});


const whatsapp = document.createElement("a");

whatsapp.href = "#";
whatsapp.classList.add("whatsapp-flutuante");

whatsapp.innerHTML =
'<i class="fa-brands fa-whatsapp"></i>';

document.body.appendChild(whatsapp);

const secoes = document.querySelectorAll("section");
const linksMenu = document.querySelectorAll(".menu a");

window.addEventListener("scroll", ()=>{

    let atual = "";

    secoes.forEach(secao=>{

        const topo =
            secao.offsetTop - 150;

        const altura =
            secao.clientHeight;

        if(window.scrollY >= topo){

            atual = secao.getAttribute("id");

        }

    });

    linksMenu.forEach(link=>{

        link.classList.remove("ativo");

        if(
            link.getAttribute("href")
            === "#" + atual
        ){

            link.classList.add("ativo");

        }

    });

});


const tituloHero =
document.querySelector(".hero-text h1");

const textoOriginal =
tituloHero.innerText;

tituloHero.innerText = "";

let indice = 0;

function digitar(){

    if(indice < textoOriginal.length){

        tituloHero.innerText +=
        textoOriginal.charAt(indice);

        indice++;

        setTimeout(digitar,50);

    }

}

window.addEventListener("load", digitar);

window.addEventListener("load", ()=>{

    document.body.classList.add("loaded");

});

console.log(
"Loja do Seu Zé carregada com sucesso 🚀"
);

