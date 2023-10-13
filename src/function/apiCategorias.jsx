import { ajustarOpacidade } from './ajustarOpacidade';

export default async function apiCategorias(callback) {
  try {
    const resposta = await fetch(
      'https://6516db6809e3260018ca679b.mockapi.io/Categorias',
    );
    const dados = await resposta.json();

    if (callback && typeof callback === 'function') {
      const categoriasAtualizadas = dados.map((categoria) => ({
        ...categoria,
        corDeFundo: categoria.cor,
      }));

      callback(categoriasAtualizadas);
    }
  } catch (erro) {
    console.error('Erro ao obter categorias:', erro);
    throw erro; // Rethrow o erro para que o chamador possa lidar com ele
  }
}
