document.getElementById("formCadastro")
.addEventListener("submit", function(e){

    e.preventDefault();

    let nome = document.getElementById("nome").value;
    let email = document.getElementById("email").value;
    let senha = document.getElementById("senha").value;
    let confirmarSenha = document.getElementById("confirmarSenha").value;

    if(senha !== confirmarSenha){
        alert("As senhas não coincidem!");
        return;
    }

    let usuarios =
        JSON.parse(localStorage.getItem("usuarios")) || [];

    let existe = usuarios.find(
        usuario => usuario.email === email
    );

    if(existe){
        alert("Este e-mail já está cadastrado!");
        return;
    }

    usuarios.push({
        nome,
        email,
        senha
    });

    localStorage.setItem(
        "usuarios",
        JSON.stringify(usuarios)
    );

    alert("Cadastro realizado com sucesso!");

    window.location.href = "login.html";

});