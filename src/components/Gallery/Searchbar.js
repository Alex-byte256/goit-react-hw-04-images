import { useState } from 'react';
import css from "./Searchbar.module.css"
import PropTypes from 'prop-types';


function Searchbar (props){

  const[imgName,setImgName] = useState('');

  const handleOnChange=(e)=>{
    setImgName(e.target.value)
  }

  const handleSubmit=(e)=>{
    e.preventDefault();

    props.onSubmit(imgName);

    setImgName('')
  }

    return(
      <header className={css.searchbar}>
        <form className={css.form} onSubmit={handleSubmit}>
          <button type="submit" className={css.button}>
            <span className={css.buttonLabel}>Search</span>
          </button>

          <input
            className={css.input}
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
            value={imgName}
            onChange={handleOnChange}
          />
        </form>
      </header>
    )

}

Searchbar.propTypes = {
  onSubmit: PropTypes.func
}

export default Searchbar;
