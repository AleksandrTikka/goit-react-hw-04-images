import { Watch } from 'react-loader-spinner';
import css from './Loader.module.css';

const Loader = () => {
  return (
    <div className={css.loader}>
      <Watch
        height="80"
        width="80"
        radius="48"
        color="#4fa94d"
        ariaLabel="watch-loading"
        wrapperStyle={{}}
        wrapperClassName=""
        visible={true}
      />
    </div>
  );
};

// export const Loader = () => {
//   return (
//     <div className="Loader">
//       <ThreeDots
//         height="80"
//         width="80"
//         radius="9"
//         color="blue"
//         ariaLabel="three-dots-loading"
//       />
//     </div>
//   );
// };

export default Loader;
