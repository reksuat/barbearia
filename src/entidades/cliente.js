
const db = [];
let proxID = 1;

const index = () => db;

const show = (id) => db.find((el) => el.id == id);

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
function create(body) {
    const novo = model(body);

    if (novo) {
        db.push(novo)
        return 201;
    }
    return 400;
}
function update(id, body) {
    const index = db.findIndex((el) => el.id ==id);
    const novo = model(body, parseInt(id));

    if (novo && index!= -1) {
        db[index] = novo;
        return 200;
    }
    return 400;
};

function destroy(id) {
    const index = db.findIndex((el) => el.id == id);

    if (index != -1) {
        db.splice(index, 1);
    }
};

module.exports = {
    create,
    show,
    index,
    update,
    destroy
}