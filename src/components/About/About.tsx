import mainImage from '../../../public/images/main-image.avif';
import './about.scss';

const About = () => {
  return (
    <section
      className={'about'} id={'about'}>
      <div className={'about__container'}>
        <div className={'about__title'}>
          <h1 className={'visually-hidden'}>About me</h1>
          <p>
            <span>Hello!</span> My name is <br/> Nikita Morkovkin. <br />
            I can make app or <br/> website for you.
          </p>

          <a className={'about__link'} href={'#contacts'}>
            Let's check
          </a>
        </div>

        <img
          className={'about__image'}
          src={mainImage}
          alt={''}
          width={520}
          height={520}
        />
      </div>
    </section>
  );
};

export default About;