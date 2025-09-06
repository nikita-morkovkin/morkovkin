import './footer.scss';
import FooterMenu from "../FooterMenu/FooterMenu.tsx";

const Footer = () => {
  return (
    <footer
      className={'footer'}
      id={'contacts'}
    >
      <div className={'footer__container'}>
        <div className={'footer__text-content'}>

          <h2 className={'footer__title'}>
            Do you want to ask <br />
            <span>something interesting?</span>
          </h2>

          <p className={'footer__subtitle'}>
            Contact me. I'm free monday-friday from 9 am to 8 pm.
          </p>
        </div>

        <div className={'footer__icons-container'}>
          <FooterMenu />
          <div className={'footer__copyright'}>
            © Nikita Morkovkin, 2025
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;