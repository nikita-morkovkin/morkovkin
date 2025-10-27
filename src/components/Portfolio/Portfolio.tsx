import './portfolio.scss';
import {portfolioConfig} from "../../config/portfolio.config.ts";
import BubbleIcon from "../BubbleIcon/BubbleIcon.tsx";

const Portfolio = () => {
  return (
    <section className={'portfolio'} id={'portfolio'}>

      <h2 className={'portfolio__title'}>
        My <span>Portfolio</span>
      </h2>

      <ul className={'portfolio__list'}>
        {portfolioConfig.map((item, index) => (
          <li className={'portfolio__item'} key={index}>
            <img
              className={'portfolio__item__image'}
              src={item.image}
              alt={item.title}
              width={400}
              height={800}
              loading="lazy"
            />

            <div className={'portfolio__text-content'}>
              <div className={'portfolio__time-element'}>
                <time dateTime={item.createTime}>
                  {item.createTimeText}
                </time>
              </div>

              <a
                href={item.link}
                className={'portfolio__link'}
                target="_blank"
              >
                {item.title}
              </a>

              <p className={'portfolio__description'}>
                {item.description}
              </p>

              <ul className={'portfolio__icons-list'}>
                {item.icons.map((icon, index) => (
                  <BubbleIcon
                    key={index}
                    pathToImg={icon.icon}
                    titleText={icon.title}
                  />
                ))}
              </ul>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Portfolio;