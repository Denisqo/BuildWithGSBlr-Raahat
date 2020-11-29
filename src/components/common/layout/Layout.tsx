import React from 'react';
import Footer from '../footer/Footer';
import Header from '../typescript/common/Header';

const Layout = (props: any) => {
  return (
    <div className="has-text-centered">
      <Header />
      {props.children}
      <Footer />
    </div>
  );
};

export default Layout;
