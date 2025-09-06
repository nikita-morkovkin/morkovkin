import {headerLinksConfig} from "../../config/header.links.config.ts";
import './header.menu.scss';

const HeaderMenu = () => {
  return (
    <nav>
      <ul className={'header-menu'}>
        {headerLinksConfig.map((link, index) => (
          <li
            key={index}
            data-testid={'header-menu-item'}
          >
            <a
              className={'header-menu-link'}
              href={link.href}
            >
              {link.text}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default HeaderMenu;