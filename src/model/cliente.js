module.exports = model
let proxID = 1;
function model(cliente, id = proxID++) {
    if (cliente.nome != undefined &&
        cliente.telefone != undefined &&
        cliente.telefone != "" &&
        cliente.email != undefined &&
        cliente.email != "" && 
        cliente.senha != undefined &&
        cliente.senha != "") {
        return {
            id,
            nome: cliente.nome,
            telefone: cliente.telefone,
            email: cliente.email,
            senha: cliente.senha
        }
    }
};