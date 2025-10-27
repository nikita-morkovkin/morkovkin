import type {IBubbleIcon} from "./types/bubbleIconInterface.ts";
import '../Portfolio/portfolio.scss';

const BubbleIcon = ({titleText, pathToImg, width = 34, height = 34}: IBubbleIcon) => {
  return (
    <li className={'portfolio__icons-item'}>
      <img
        src={pathToImg}
        alt={titleText}
        width={width}
        title={titleText}
        height={height}
        loading="lazy"
      />
    </li>
  );
};

export default BubbleIcon;