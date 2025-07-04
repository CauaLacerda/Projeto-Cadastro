

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

        produtos.push(NovoProduto);
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

        if (produtos == null) {
            produtosContainer.innerHTML += "<h3>Nenhum produto foi cadastrado</h3>";
        } else {
            produtos = JSON.parse(produtos);
            produtos.forEach(produto => {
                produtosContainer.innerHTML += `
                    <ul class="list-group cor-azul">
                        <li class="list-group-item cor-azul roboto">Nome do produto: ${produto.NomeProduto}</li>
                        <li class="list-group-item cor-azul roboto">Descrição do produto: ${produto.DescProduto}</li>
                        <li class="list-group-item cor-azul roboto">Valor do produto: ${"R$"+produto.ValorProduto}</li>
                        <li class="list-group-item cor-azul roboto">Produto Disponível? ${produto.Disponivel}</li>
                    </ul>`;
            });
        }
    } else {
        alert("A versão do seu navegador é muito antiga. Por isso, não será possível visualizar o estoque!");
    }
}

//Função limpar produtos
function limparProdutos() {
    if (typeof(Storage) !== "undefined") {
        localStorage.removeItem("produtos");


        let produtosContainer = document.getElementById("produtosContainer");
        produtosContainer.innerHTML = "";

        alert("Todos os produtos foram removidos com sucesso!");
    } else {
        alert("A versão do seu navegador é muito antiga. Por isso, não será possível limpar o estoque!");
    }
}

window.onload = function() {
    listarProdutos();
};