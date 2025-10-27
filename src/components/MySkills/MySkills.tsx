import './my-skills.scss';
import {hardSkillsConfig} from "../../config/hard.skills.config.ts";
import {softSkillsConfig} from "../../config/soft.skills.config.ts";

const MySkills = () => {
  return (
    <section
      className={'my-skills'}
      id={'skills'}
    >
      <div className={'my-skills__container'}>
        <h2 className={'my-skills__title'}>
          <span>Hard</span> Skills
        </h2>

        <ul className={'my-skills__list'}>
          {hardSkillsConfig.map((skillItem, index) => (
            <li key={index} className={'my-skills__item'}>
              {skillItem.content}
            </li>
          ))}
        </ul>
      </div>

      <div className="my-skills__container">
        <h2 className={'my-skills__title my-skills__title--last'}>
          <span>Soft</span> Skills
        </h2>

        <ul className={'my-skills__list'}>
          {softSkillsConfig.map((skillItem, index) => (
            <li key={index} className={'my-skills__item'}>
              {skillItem.content}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default MySkills;