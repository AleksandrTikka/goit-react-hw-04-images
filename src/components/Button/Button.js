import css from './Button.module.css';
import PropTypes from 'prop-types';
const Button = ({ onLoadMore, children }) => {
  return (
    <button className={css.button} type="button" onClick={onLoadMore}>
      {children}
    </button>
  );
};

Button.propTypes = {
  onLoadMore: PropTypes.func.isRequired,
};
export default Button;
