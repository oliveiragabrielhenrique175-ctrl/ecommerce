let carrinho = [];
let total = 0;

function adicionarAoCarrinho(nome, preco) {
    carrinho.push({ nome, preco });
    total += preco;
    atualizarCarrinho();
}

function atualizarCarrinho() {
    const lista = document.getElementById('lista-carrinho');
    const contador = document.getElementById('contador-carrinho');
    const totalElemento = document.getElementById('total-carrinho');
    
    lista.innerHTML = '';
    
    if (carrinho.length === 0) {
        lista.innerHTML = '<li id="carrinho-vazio">Seu carrinho está vazio.</li>';
    } else {
        carrinho.forEach((item, index) => {
            lista.innerHTML += `<li>${item.nome} - R$ ${item.preco.toFixed(2)}</li>`;
        });
    }
    
    contador.innerText = carrinho.length;
    totalElemento.innerText = total.toFixed(2);
}

function finalizarCompra() {
    if (carrinho.length === 0) {
        alert('Seu carrinho está vazio!');
    } else {
        alert(`Compra finalizada com sucesso! Total: R$ ${total.toFixed(2)}`);
        carrinho = [];
        total = 0;
        atualizarCarrinho();
    }
}
