import React, { createContext, useState } from 'react';

export const MenuContext = createContext();

export const MenuProvider = ({ children }) => {
  const [menuAtivo, setMenuAtivo] = useState(false);

  return (
    <MenuContext.Provider value={[menuAtivo, setMenuAtivo]}>
      {children}
    </MenuContext.Provider>
  );
};
