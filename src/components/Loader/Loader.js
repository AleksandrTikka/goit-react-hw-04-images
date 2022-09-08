import { Watch } from 'react-loader-spinner';

const Loader = () => {
  return (
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
