import About from "../About/About.tsx";
import './main.scss';
import MySkills from "../MySkills/MySkills.tsx";
import {lazy, Suspense} from "react";
import Loader from '../Loader/Loader.tsx';

const PortfolioLazy = lazy(() => import('../Portfolio/Portfolio.tsx'));
const WorkExperienceLazy = lazy(() => import('../WorkExperience/WorkExperience.tsx'));

const Main = () => {
  return (
    <main className={'main'}>
      <About />
      <MySkills />

      <Suspense fallback={<Loader text={'Loading'} />}>
        <PortfolioLazy />
      </Suspense>

      <Suspense fallback={<Loader text={'Loading'} />}>
        <WorkExperienceLazy />
      </Suspense>
    </main>
  );
};

export default Main;