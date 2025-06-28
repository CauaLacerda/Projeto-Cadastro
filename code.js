

function CadastroProduto() {
    let NomeProduto = document.getElementById("NomeProduto").value;
    let DescProduto = document.getElementById("DescProduto").value;
    let ValorProduto = document.getElementById("ValorProduto").value;
    let Disponivel = document.getElementById("Disponivel").value;


    if (!NomeProduto || !DescProduto || !ValorProduto || !Disponivel) {
        alert("Por favor, preencha todos os campos antes de cadastrar o produto!");
        return;
    }

    let NovoProduto = { NomeProduto: NomeProduto, DescProduto: DescProduto, ValorProduto: ValorProduto, Disponivel: Disponivel };

    if (typeof (Storage) !== "undefined") {
        let produtos = localStorage.getItem("produtos");
        if (produtos == null) produtos = [];
        else produtos = JSON.parse(produtos);

        produtos.push(NovoProduto); // Adiciona um novo produto
        localStorage.setItem("produtos", JSON.stringify(produtos));
        alert("O produto foi cadastrado com sucesso");
        location.reload();
    } else {
        alert("A versão do seu navegador é muito antiga. Por isso, não será possível executar essa aplicação");
    }
}


// Função para listar os produtos
function listarProdutos() {
    if (typeof(Storage) !== "undefined") {
        let produtos = localStorage.getItem("produtos");
        let produtosContainer = document.getElementById("produtosContainer");
        produtosContainer.innerHTML = "<h1>Lista de Produtos:</h1>";

        if (produtos == null) {
            produtosContainer.innerHTML += "<h3>Nenhum produto foi cadastrado</h3>";
        } else {
            produtos = JSON.parse(produtos);
            produtos.forEach(produto => {
                produtosContainer.innerHTML += `
                    <ul class="list-group">
                        <li class="list-group-item">Nome do produto: ${produto.NomeProduto}</li>
                        <li class="list-group-item">Descrição do produto: ${produto.DescProduto}</li>
                        <li class="list-group-item">Valor do produto: ${"R$"+produto.ValorProduto}</li>
                        <li class="list-group-item">Produto Disponível? ${produto.Disponivel}</li>
                    </ul>`;
            });
        }
    } else {
        alert("A versão do seu navegador é muito antiga. Por isso, não será possível visualizar o estoque!");
    }
}
window.onload = function() {
    listarProdutos();
};