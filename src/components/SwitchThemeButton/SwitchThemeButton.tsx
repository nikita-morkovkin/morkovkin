import sunIcon from '../../../public/icons/sun.svg';
import moonIcon from '../../../public/icons/moon.svg';
import {useTheme} from "../../shared/hooks/useTheme.ts";
import './switch-theme-button.scss';

const SwitchThemeButton = () => {
  const {theme, toggleTheme} = useTheme();

  return (
    <button
      data-testid={'switch-theme-button'}
      className={'switch-theme-button'}
      type="button"
      onClick={toggleTheme}
      title={theme === 'dark' ? 'Choose light theme' : 'Choose dark theme'}
    >
      {theme === 'dark'
        ? <img
          src={sunIcon}
          alt="Sun icon"
          width={'100%'}
          height={'100%'}
        />
        : <img
          src={moonIcon}
          alt="Moon icon"
          width={'100%'}
          height={'100%'}
        />
      }
    </button>
  );
};

export default SwitchThemeButton;