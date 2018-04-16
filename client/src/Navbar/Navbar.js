import React, {Component} from 'react'
import NavItem from './NavItem/NavItem';
import NavBrand from './Navbrand/Navbrand'

const navStyles = {
  nav: ['navbar', 'navbar-expand-lg', 'navbar-light', 'bg-light'],
  collapse: ['collapse', 'navbar-collapse'],
  ul: ['navbar-nav', 'mr-auto'],
}
const navItems = [
  {
    path: '/home',
    navItemName: 'Home'
  }, {
    path: '/users',
    navItemName: 'Users'
  }, {
    path: '/form',
    navItemName: 'Form'
  }
];
const navItemsMap = navItems.map((item, index) => {
  return (
    <NavItem 
      key={index} 
      path={item.path} 
      navItemName={item.navItemName}/>
  );
});

export default class Navbar extends Component {
  render() {
    return (
      <nav className={navStyles.nav.join(' ')}>
        <NavBrand />
        <div className={navStyles.collapse.join(' ')}>
          <ul className={navStyles.ul.join(' ')}>
            {navItemsMap}
          </ul>
        </div>
      </nav>
    ) 
  }
}
