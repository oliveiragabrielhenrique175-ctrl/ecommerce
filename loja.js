// 1. Seleção dos elementos do HTML
 Whittlesea
const botoesAdicionar = document.querySelectorAll('.btn-adicionar');
const listaCarrinho = document.getElementById('itens-carrinho');
const valorTotalElemento = document.getElementById('valor-total');
const botaoFinalizar = document.getElementById('btn-finalizar');
const msgCarrinhoVazio = document.getElementById('carrinho-vazio');

// 2. Onde guardamos os dados do carrinho em memória
let carrinho = [];

// 3. Função para adicionar produto ao carrinho
botoesAdicionar.forEach(botao => {
    botao.addEventListener('click', (event) => {
        const elementoProduto = event.target.closest('.produto');
        
        // Pegando os dados do HTML através dos atributos 'data-'
        const id = elementoProduto.getAttribute('data-id');
        const nome = elementoProduto.getAttribute('data-nome');
        const preco = parseFloat(elementoProduto.getAttribute('data-preco'));

        // Verifica se o produto já está no carrinho
        const produtoExistente = carrinho.find(item => item.id === id);

        if (produtoExistente) {
            produtoExistente.quantidade += 1; // Se já existe, só aumenta a quantidade
        } else {
            carrinho.push({ id, nome, preco, quantidade: 1 }); // Se não existe, adiciona novo
        }

        atualizarInterfaceCarrinho();
    });
});

// 4. Função para atualizar a tela do carrinho
function atualizarInterfaceCarrinho() {
    // Limpa a lista visual antes de redesenhar
    listaCarrinho.innerHTML = '';

    if (carrinho.length === 0) {
        listaCarrinho.appendChild(msgCarrinhoVazio);
        valorTotalElemento.textContent = '0.00';
        botaoFinalizar.disabled = true;
        return;
    }

    botaoFinalizar.disabled = false;
    let totalGeral = 0;

    // Renderiza cada item do array no HTML
    carrinho.forEach(item => {
        const totalItem = item.preco * item.quantidade;
        totalGeral += totalItem;

        const li = document.createElement('li');
        li.style.marginBottom = '10px';
        li.innerHTML = `
            <strong>${item.nome}</strong> - R$ ${item.preco.toFixed(2)} 
            (x${item.quantidade}) = R$ ${totalItem.toFixed(2)}
            <button onclick="removerDoCarrinho('${item.id}')" style="background:#dc3545; padding:2px 8px; margin-left:10px;">X</button>
        `;
        listaCarrinho.appendChild(li);
    });

    // Atualiza o valor total formatado
    valorTotalElemento.textContent = totalGeral.toFixed(2);
}

// 5. Função para remover item (ou diminuir quantidade)
window.removerDoCarrinho = function(id) {
    const produtoIndex = carrinho.findIndex(item => item.id === id);

    if (produtoIndex !== -1) {
        if (carrinho[produtoIndex].quantidade > 1) {
            carrinho[produtoIndex].quantidade -= 1; // Diminui 1 se tiver mais de um
        } else {
            carrinho.splice(produtoIndex, 1); // Remove do array se for o último
        }
    }
    atualizarInterfaceCarrinho();
};

// 6. Evento de Finalizar Compra
botaoFinalizar.addEventListener('click', () => {
    alert(`Compra finalizada com sucesso! Total: R$ ${valorTotalElemento.textContent}`);
    carrinho = []; // Limpa o carrinho
    atualizarInterfaceCarrinho();
});