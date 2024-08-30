module.exports = model
let proxID = 1;
function model(usuario, id = proxID++) {
    if (usuario.email != undefined &&
        usuario.email != "" && 
        usuario.senha != undefined &&
        usuario.senha != "") {
        return {
            id,
            email: usuario.email,
            senha: usuario.senha
        }
    }
};