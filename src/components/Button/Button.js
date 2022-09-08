import css from './Button.module.css';
const Button = ({ onLoadMore, children }) => {
  return (
    <button className={css.button} type="button" onClick={onLoadMore}>
      {children}
    </button>
  );
};
export default Button;
