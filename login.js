document.getElementById("formLogin")
.addEventListener("submit", function(e){

    e.preventDefault();

    let email = document.getElementById("email").value;
    let senha = document.getElementById("senha").value;

    let usuarios =
        JSON.parse(localStorage.getItem("usuarios")) || [];

    let usuario = usuarios.find(
        usuario =>
            usuario.email === email &&
            usuario.senha === senha
    );

    if(usuario){

        localStorage.setItem(
            "usuarioLogado",
            JSON.stringify(usuario)
        );

        alert("Login realizado com sucesso!");

        window.location.href = "Hub.html";

    }else{

        alert("E-mail ou senha incorretos!");

    }

});


const usuario =
    JSON.parse(localStorage.getItem("usuarioLogado"));

if(usuario){

    document.getElementById("usuario").innerHTML =
    `<i class="fa-regular fa-user"></i> Olá, ${usuario.nome}`;

}

localStorage.setItem(
    "usuarioLogado",
    JSON.stringify(usuario)
);