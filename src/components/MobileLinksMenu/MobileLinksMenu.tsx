import {useEffect} from "react";
import type {IMobileLinksMenu} from "./types/mobileLinksMenuInterface.ts";
import './mobile-links-menu.scss';
import {headerLinksConfig} from "../../config/header.links.config.ts";
import {motion} from "framer-motion";
import {mobileLinksMenuVariants} from "./mobileLinksMenuVariants.ts";
import {createPortal} from "react-dom";

const MobileLinksMenu = ({isOpen, onClick}: IMobileLinksMenu) => {
  useEffect(() => {
    if (isOpen) {
      document.body.classList.add('modal-open');
    } else {
      document.body.classList.remove('modal-open');
    }
  }, [isOpen]);

  return createPortal(
    <nav className={isOpen ? 'mobile-links-menu' : 'visually-hidden'}>
      <motion.ul
        initial={mobileLinksMenuVariants.hidden}
        animate={isOpen
          ? mobileLinksMenuVariants.visible
          : mobileLinksMenuVariants.hidden
        }
        transition={{duration: 0.3}}
        className={'mobile-links-menu__list'}
      >
        {headerLinksConfig.map((item, index) => (
          <li key={index}>
            <a
              href={item.href}
              className={'mobile-links-menu__item'}
              onClick={onClick}
            >
              {item.text}
            </a>
          </li>
        ))}
      </motion.ul>
    </nav>, document.body
  )
};

export default MobileLinksMenu;