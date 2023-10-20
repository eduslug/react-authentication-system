import { useState } from "react";

export default function usePost() {
  const [sucesso, setSuceso] = useState(false);
  const [erro, setErro] = useState("");

  async function cadastrar<T>({ url, dados }: { url: string; dados: T }) {
    try {
      await fetch(`http://localhost:8080/${url}`, {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(dados),
      });
      setSuceso(true);
    } catch (erro) {
      setErro("nao foi possivel enviar os dados");
    }
  }
  return { cadastrar, sucesso, erro };
}
