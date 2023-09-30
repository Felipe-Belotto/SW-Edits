
export default async function EnviarNovaCategoria(nome,descricao,cor) {
  fetch("https://6516db6809e3260018ca679b.mockapi.io/Categorias", {
    method: "POST",
    body: JSON.stringify({
    nome: nome,
    descricao: descricao,
    cor: cor
    }),
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
  })
    .then((response) => response.json())
    .then((json) => console.log(json));
}