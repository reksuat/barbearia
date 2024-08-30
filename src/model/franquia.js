module.exports = model
let proxID = 1;
const usuarioController = require("../entidades/usuario")
function model(franquia, id = proxID++) {
    if(usuario.show(franquia.id_usuario) &&
    franquia.nome != "" &&
    franquia.nome != undefined &&
    usuarioController.show(franquia.id_usuario)
) {
    return {
        id,
        id_usuario: franquia.id_usuario,
        nome : franquia.nome
    }

}
}
