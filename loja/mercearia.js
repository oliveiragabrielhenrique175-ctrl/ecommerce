function filtrarCategoria(categoria){

    document
    .getElementById("produtos")
    .scrollIntoView({
        behavior:"smooth"
    });

    const produtos =
    document.querySelectorAll(".produto-card");

    produtos.forEach(produto => {

        if(produto.classList.contains(categoria)){

            produto.style.display = "block";

        }else{

            produto.style.display = "none";

        }

    });

    const titulo =
    document.getElementById("titulo-produtos");

    titulo.innerText =
    categoria.charAt(0).toUpperCase() +
    categoria.slice(1);

}

function mostrarTodos(){

    const produtos =
    document.querySelectorAll(".produto-card");

    produtos.forEach(produto => {
        produto.style.display = "block";
    });

    document.getElementById(
        "titulo-produtos"
    ).innerText = "Todos os Produtos";

}

function comprar(produto){

    alert(
        produto +
        " adicionado ao carrinho!"
    );

}