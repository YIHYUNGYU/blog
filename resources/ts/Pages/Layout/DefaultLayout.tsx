import React from 'react';
import Header from '@/Pages/Common/Header';
import Footer from '@/Pages/Common/Footer';

interface LayoutProps {
  children: React.ReactNode;
}

const DefaultLayout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="m-8">{children}</main>
      <div className="mt-auto">
        <Footer />
      </div>
    </div>
  );
};

export default DefaultLayout;
