module.exports = model
let proxID = 1;
const barbeariaController = require("../entidades/barbearia")
function model(barbeiro, id = proxID++) {
    if(barbearia.show(barbeiro.id_barbearia) &&
    barbeiro.nome != "" &&
    barbeiro.nome != undefined &&
    barbeiro.inicio != "" &&
    barbeiro.inicio != undefined &&
    barbeiro.fim != "" &&
    barbeiro.fim != undefined &&
    barbeiro.foto != "" &&
    barbeiro.foto != undefined &&
    barbeiro.descricao != "" &&
    barbeiro.descricao != undefined &&
    barbeiro.descricao.length > 25 &&
    barbeariaController.show(barbeiro.id_barbearia)
) {
    return {
        id,
        id_barbearia: barbeiro.id_barbearia,
        nome : barbeiro.nome,
        expediente : barbeiro.inicio && barbeiro.fim
    }

}
}
