import React from 'react';
import MainHeader from './MainHeader';

const Layout: React.FC = (props) => {
  return <React.Fragment>
    <MainHeader />
    <main>{props.children}</main>
  </React.Fragment>
}

export default Layout;