import { useFavoritos } from '../../context/VideosFavoritos';
import styles from './PaginaFavoritos.module.css'


function PaginaFavoritos () {
  const { videosFavoritos } = useFavoritos();

  return (
    <div>
      <h2>Vídeos Favoritos</h2>
      <ul>
        {videosFavoritos.map((video) => (
          <li key={video.id}>
            <strong>{video.titulo}</strong> - {video.descricao}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PaginaFavoritos;
