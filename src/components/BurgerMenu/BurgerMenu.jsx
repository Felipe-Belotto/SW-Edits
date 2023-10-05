import React, { useState } from 'react';
import { slide as Menu } from 'react-burger-menu';
import styles from './BurgerMenu.module.css';
import MenuIcon from '@mui/icons-material/Menu';
import { width } from '@mui/system';

export default function BurgerMenu() {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleMenuToggle = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className={styles.menuContainer}>
      <button onClick={handleMenuToggle} className={styles.botao}><MenuIcon/></button>
     {/*  <Menu width={"20%"} menuClassName={styles.menu} isOpen={menuOpen} onClose={handleMenuToggle} right >
        <a id="home" className={styles.menu__item} href="/">
          Home
        </a>
  
      </Menu> */}
    </div>
  );
}
