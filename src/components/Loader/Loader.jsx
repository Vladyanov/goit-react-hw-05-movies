import { BallTriangle } from 'react-loader-spinner';
import css from './loader.module.scss';

const Loader = () => {
  return (
    <div className={css.wrapper}>
      <BallTriangle
        height={50}
        width={50}
        radius={5}
        color="#4fa94d"
        ariaLabel="ball-triangle-loading"
        wrapperClass={{}}
        wrapperStyle=""
        visible={true}
      />
    </div>
  );
};

export default Loader;
