import css from './Button.module.css'
import PropTypes from 'prop-types';

function Button (props) {

    return(
      <button onClick={()=>props.handleOnClick(props.numPage)} className={css.Button} type="button">Load more</button>
    )

}

Button.propTypes = {
  handleOnClick: PropTypes.func,
  numPage: PropTypes.number
}

export default Button
