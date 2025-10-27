import {type ILoader} from "./types/loaderInterface.ts";
import './loader.scss';

const Loader = ({text}: ILoader) => {
  return (
    <div className={'loader'}>
      <h2><span>{text}</span> <br/> section...</h2>
    </div>
  );
};

export default Loader;