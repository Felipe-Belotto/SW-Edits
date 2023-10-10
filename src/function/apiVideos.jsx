
export default async function apiVideos() {
  return await fetch('https://6516db6809e3260018ca679b.mockapi.io/Edits')
    .then((resposta) => resposta.json())
    .catch((erro) => {
      console.error('Erro na requisição:', erro);
      throw erro;
    });
}
