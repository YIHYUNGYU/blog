import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import SideBar from '@/Pages/Common/SideBar';

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <header className="bg-blue-500 shadow-md">
        <nav className="container mx-auto flex items-center justify-between p-4">
          <div className="text-white font-bold text-xl">Material Header</div>
          <button className="text-white" onClick={() => setIsOpen(!isOpen)}>
            <FontAwesomeIcon icon={faBars} />
          </button>
        </nav>
      </header>
      <SideBar isOpen={isOpen} setIsOpen={setIsOpen} />
    </div>
  );
};

export default Header;
