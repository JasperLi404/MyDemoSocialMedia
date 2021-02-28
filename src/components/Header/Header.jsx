import classes from'./Header.module.css';
import SitebarContainer from './Sitebar/SitebarContainer.jsx';
import React from 'react';
import {NavLink} from 'react-router-dom';
const Header = (props) => {
  console.log('xfm');
    return(
      <header className={classes.header}>
        <div className={classes.circle}>
          <div className={classes.loginBlock}>
              { props.isAuth ?   <div>{props.login}  </div>  :  <NavLink to={'/login'}>LOG IN</NavLink> }           
          </div>
        </div>
        <div>
          {props.isAuth && <button className={classes.buttonLogOut} onClick={props.logout}>LOG OUT</button>}
        </div>
        {/* <SitebarContainer /> */}
      </header>
  );
}
export default Header;