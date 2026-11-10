
fetch("https://pokeapi.co/api/v2/pokemon/pikachu")
.then(resposta => {

    if (!resposta.ok) {
        throw new Error("Pokémon não encontrado");
    }

    return resposta.json();

})
.then(dados => {

    console.log(dados);

    // Nome do Pokémon
    document.querySelector("#nome").textContent = dados.name;

    // ID
    document.querySelector("#id").textContent = dados.id;

    // Altura
    document.querySelector("#altura").textContent = dados.height;

    // Peso
    document.querySelector("#peso").textContent = dados.weight;

    // Imagem oficial
    document.querySelector("#imagem").src =
        dados.sprites.other["official-artwork"].front_default;

})
.catch(erro => {

    console.log("Erro ao consultar Pokémon:", erro);

});
