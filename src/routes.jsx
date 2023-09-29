import { BrowserRouter, Route, Routes } from 'react-router-dom';
import PaginaBase from './Pages/PaginaBase/PaginaBase';
import PaginaNovoVideo from './Pages/PaginaNovoVideo/PaginaNovoVideo';
import PaginaInicial from './Pages/PaginaInicial/PaginaInicial';
import Player from './Pages/Player/Player';

function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<PaginaBase />}>
          <Route index element={<PaginaInicial />} />
          <Route path="novovideo" element={<PaginaNovoVideo />} />
          <Route path="/:id" element={<Player />}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default AppRoutes;
