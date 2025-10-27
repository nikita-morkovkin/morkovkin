import futureTechScreenshot from '../../public/images/screenshots/future-tech.avif';
import dentistScreenshot from '../../public/images/screenshots/dentist.avif';
import sneakersShopScreenshot from '../../public/images/screenshots/sneakers-shop.avif';
import htmlIcon from '../../public/images/frontend/html.avif';
import scssIcon from '../../public/images/frontend/sass.avif';
import jsIcon from '../../public/images/frontend/js.avif';
import figmaIcon from '../../public/images/frontend/figma.avif';
import reactHookFormIcon from '../../public/images/frontend/react-hook-form.avif';
import viteIcon from '../../public/images/frontend/vite.png';
import axiosIcon from '../../public/images/frontend/axios.avif';
import reactIcon from '../../public/images/frontend/react.avif';
import tsIcon from '../../public/images/frontend/typescript.avif';
import type {IPortfolioItem} from "./types/portfolioItemInterface.ts";

export const portfolioConfig: IPortfolioItem[] = [
  {
    createTimeText: 'May 2025',
    createTime: '2025-05',
    image: futureTechScreenshot,
    title: 'Future Tech AI',
    description: 'Multi-page website for a foreign company engaged in the development and promotion of AI',
    icons: [
      {icon: htmlIcon, title: 'HTML'},
      {icon: scssIcon, title: 'Sass (SCSS)'},
      {icon: jsIcon, title: 'JavaScript'},
      {icon: figmaIcon, title: 'Figma'},
    ],
    link: 'https://github.com/nikita-morkovkin/master-class-3',
  },
  {
    createTimeText: 'June 2025',
    createTime: '2025-06',
    image: dentistScreenshot,
    title: 'Dentist Website',
    description: 'A landing page for a foreign company providing medical services',
    icons: [
      {icon: figmaIcon, title: 'HTML'},
      {icon: viteIcon, title: 'Vite'},
      {icon: scssIcon, title: 'Sass (SCSS)'},
      {icon: reactHookFormIcon, title: 'React Hook Form'},
    ],
    link: 'https://github.com/nikita-morkovkin/master-class-2'
  },
  {
    createTimeText: 'June 2025',
    createTime: '2025-07',
    image: sneakersShopScreenshot,
    title: 'Sneakers Shop',
    description: 'A prototype of a shoe sales website',
    icons: [
      {icon: viteIcon, title: 'Vite'},
      {icon: reactIcon, title: 'React'},
      {icon: tsIcon, title: 'TypeScript'},
      {icon: axiosIcon, title: 'Axios'},
    ],
    link: 'https://github.com/nikita-morkovkin/sneakers-shop-online'
  }
]