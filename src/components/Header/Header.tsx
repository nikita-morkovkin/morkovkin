import './header.scss';
import HeaderLogo from "../HeaderLogo/HeaderLogo.tsx";
import HeaderMenu from "../HeaderMenu/HeaderMenu.tsx";
import SwitchThemeButton from "../SwitchThemeButton/SwitchThemeButton.tsx";
import HeaderBurgerButton from "../HeaderBurgerButton/HeaderBurgerButton.tsx";

const Header = () => {
  return (
    <header className={'header'}>
      <div className={'header__inner'}>
        <HeaderLogo />
        <HeaderMenu />

        <div className={'header__buttons-group'}>
          <SwitchThemeButton />
          <HeaderBurgerButton />
        </div>
      </div>
    </header>
  );
};

export default Header;