import React from 'react';
import {Link} from 'react-router-dom';

const navbrandStyles = {
  toggler: ['navbar-toggler'],
  togglerIcon: ['navbar-toggler-icon'],
  brand: ['navbar-brand']
}

const navBrand = (props) => {
  return (
    <React.Fragment>
      <Link to='/' className={navbrandStyles.brand.join(' ')}>Some Logo</Link>
      <button className={navbrandStyles.toggler.join(' ')}>
        <span className={navbrandStyles.togglerIcon.join(' ')}></span>
      </button>
    </React.Fragment>
  )
}

export default navBrand;