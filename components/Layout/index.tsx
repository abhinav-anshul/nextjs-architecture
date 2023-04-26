import React, { ReactChild, ReactFragment, ReactPortal } from 'react';
import Navbar from '../Navbar';
import Footer from '../Footer';

type ReactNode =
  | ReactChild
  | ReactFragment
  | ReactPortal
  | boolean
  | null
  | undefined;

interface Props {
  children: ReactNode;
}

function Layout(props: Props) {
  const { children } = props;

  return (
    <>
      <Navbar />
      {children}
      <Footer />
    </>
  );
}

export default Layout;
