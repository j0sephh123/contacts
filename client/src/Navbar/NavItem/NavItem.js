import React from 'react';
import {Link} from 'react-router-dom';

const navItemStyles = {
  li: ['nav-item'],
  link: ['nav-link']
}

const navItem = (props) => {
  return (
    <li className={navItemStyles.li}>
      <Link 
        to={props.path} 
        className={navItemStyles.link}
      >{props.navItemName}</Link>
    </li>
  )
}

export default navItem;