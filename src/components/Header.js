import React from 'react';
import PropTypes from 'prop-types';

const Header = (props) => {
  const { branding} = props;
  return (
    <nav className="nav.navbar.navbar-expand-sm.navbar-dark.bg-danger">
      <div className="container">
        <a href="/" className="navbar-brand">{branding}</a>
           <div>
             <ul className="navbar-nav mr-auto">
               <li className="nav-item">
                 <a href="/" className="nav-link">{branding}</a>
               </li>
             </ul>
           </div>
      </div>
    </nav>
  );
};

Header.defaultProps = {
  branding: 'My App'
};
Header.propTypes = {
  branding: PropTypes.string.isRequired
};

// const headingStyle = {
//   color: 'pink',
//   fontSize: '33px'
// };

export default Header;