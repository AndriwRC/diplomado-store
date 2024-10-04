import { useState } from 'react';

const useAsideMenu = (initialValue) => {
  const [isOpen, setIsOpen] = useState(initialValue);

  const openMenu = () => setIsOpen(true);
  const closeMenu = () => setIsOpen(false);
  const toggleMenu = () => setIsOpen((prev) => !prev);

  return {
    isOpen,
    openMenu,
    closeMenu,
    toggleMenu,
  };
};

export { useAsideMenu };
