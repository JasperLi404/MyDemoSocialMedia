import classes from'./Header.module.css';
import SitebarContainer from './Sitebar/SitebarContainer.jsx';
import React from 'react';
import {NavLink} from 'react-router-dom';
const Header = (props) => {
  window.pppp = props;
    return(
      <header className={classes.header}>
        <div className={classes.circle}>
          <div className={classes.loginBlock}>
              { props.isAuth ? props.login  :  <NavLink to={'/login'}>LOGIN</NavLink> }


            
          </div>
        </div>
        
        <SitebarContainer />
      </header>
  );
}
export default Header;