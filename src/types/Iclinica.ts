import Cadastro from "../pages/Cadastro";

export default interface Iclinica {
    email: string;
    nome: string;
    senha: string;
    endeco: {
        cep: string;
        rua: string;
        complemento: string;
    };
}
