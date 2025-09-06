import burgerButtonIcon from '../../../public/icons/burger-button.svg';
import MobileLinksMenu from "../MobileLinksMenu/MobileLinksMenu.tsx";
import './header-burger-button.scss';
import {useState} from "react";

const HeaderBurgerButton = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const openHiddenMenu = () => setIsOpen(true);
  const closeHiddenMenu = () => setIsOpen(false);

  return (
    <>
      <button
        data-testid={'header-burger-button'}
        title={'Open menu'}
        onClick={openHiddenMenu}
        className={'header-burger-button'}
      >
        <img
          src={burgerButtonIcon}
          alt={'Open menu'}
        />
      </button>

      <MobileLinksMenu
        isOpen={isOpen}
        onClick={closeHiddenMenu}
      />
    </>
  );
};

export default HeaderBurgerButton;