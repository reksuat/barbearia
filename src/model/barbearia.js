module.exports = model
let proxID = 1
const franquiaController = require("../entidades/franquia")
function model(barbearia ,id = proxID++) {
    if (franquia.show(barbearia.id_franquia)) {
        return {
            id,
            id_franquia : barbearia.id_franquia,
            endereco : barbearia.endereco,
            nome : barbearia.nome
        }
    }
}