
export default async function EnviarNovoVideo(titulo, video, imagem,categoria,descricao) {
  fetch("https://6516db6809e3260018ca679b.mockapi.io/Edits", {
    method: "POST",
    body: JSON.stringify({
      titulo: titulo,
      video: video,
      imagem: imagem ,
      categoria: categoria,
      descricao: descricao,
    }),
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
  })
    .then((response) => response.json())
    .then((json) => console.log(json));
}