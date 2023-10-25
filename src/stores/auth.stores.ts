import { makeAutoObservable, observable } from "mobx";

interface IUsuario {
  email: string;
  token: string;
}

class AutenticaStores {
  altenticado = false;
  usuario: IUsuario = { email: "", token: "" };

  constructor() {
    makeAutoObservable(this, {
      altenticado: observable,
      usuario: observable,
    });
  }
}
const autenticaStores = new AutenticaStores();

export default autenticaStores;
