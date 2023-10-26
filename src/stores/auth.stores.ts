import { action, makeAutoObservable, observable } from "mobx";

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
      login: action,
      logout: action,
    });
  }

  login({ email, token }: IUsuario) {
    this.altenticado = true;
    this.usuario = { email, token };
  }
  logout({ email, token }: IUsuario) {
    this.altenticado = false;
    this.usuario = { email: "", token: "" };
  }
}
const autenticaStores = new AutenticaStores();

export default autenticaStores;
