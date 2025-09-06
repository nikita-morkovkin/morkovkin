import './work-experience.scss';
import '../Portfolio/portfolio.scss';
import {workExperienceConfig} from "../../config/work.experience.config.ts";
import {frontendAbilitiesConfig} from "../../config/frontend.abilities.config.ts";
import {gameDevAbilitiesConfig} from "../../config/gameDev.abilities.config.ts";
import BubbleIcon from "../BubbleIcon/BubbleIcon.tsx";

const WorkExperience = () => {
  return (
    <section
      className={'work-exp'} id={'work-experience'}>

      <h2 className={'work-exp__title'}>
        Work <span>Experience</span>
      </h2>

      <ul className={'portfolio__list'}>
        <li className={'portfolio__item'}>

          <div className={'work-exp__content'}>
            <div className={'portfolio__time-element'}>
              <time dateTime="2025-10">
                October 2025 - Present
              </time>
            </div>

            <a
              href={workExperienceConfig.githubLink}
              className={'work-exp__link'}
            >
              Frontend learn
            </a>

            <p className={'work-exp__person-position'}>
              Frontend developer
            </p>

            <p className={'work-exp__description'}>
              I have been studying frontend since I was 17 years old,
              during this time I have been working with such technologies.
            </p>

            <ul className={'portfolio__icons-grid'}>
              {frontendAbilitiesConfig.map((item, index) => (
                <BubbleIcon
                  key={index}
                  pathToImg={item.pathToImg}
                  titleText={item.titleText}
                />
              ))}
            </ul>
          </div>
        </li>

        <li className={'portfolio__item'}>
          <div className={'work-exp__content'}>
            <div className={'portfolio__time-element'}>
              <time dateTime="2024-05/2025-09">
                May 2024 - September 2025
              </time>
            </div>

            <a
              href={workExperienceConfig.githubLink}
              className={'work-exp__link'}
              target={'_blank'}
            >
              GameDev learn
            </a>

            <p className={'work-exp__person-position'}>
              Unity Developer
            </p>

            <p className={'work-exp__description'}>
              Development of simple, casual, browser-based games on Unity for the Russian platform Yandex Games.
            </p>

            <ul className={'portfolio__icons-list'}>
              {gameDevAbilitiesConfig.map((item, index) => (
                <BubbleIcon
                  key={index}
                  pathToImg={item.pathToImg}
                  titleText={item.titleText}
                />
              ))}
            </ul>
          </div>
        </li>
      </ul>
    </section>
  );
};

export default WorkExperience;