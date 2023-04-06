import React, { useEffect, useRef } from 'react';
import { Link } from '@inertiajs/inertia-react';

interface SidebarProps {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
}

const SideBar: React.FC<SidebarProps> = ({ isOpen, setIsOpen }) => {
  const sidebarRef = useRef<HTMLDivElement>(null);

  const handleClickOutside = (event: MouseEvent) => {
    if (
      sidebarRef.current &&
      !sidebarRef.current.contains(event.target as Node)
    ) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    } else {
      document.removeEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen, setIsOpen]);

  if (!isOpen) {
    return null;
  }

  return (
    <aside
      ref={sidebarRef}
      className="fixed top-0 right-0 bg-blue-500 shadow-md w-64 h-full z-50 p-4"
    >
      <nav>
        <ul className="flex flex-col space-y-2">
          <li>
            <Link
              href="/"
              className="text-white hover:text-blue-300"
              onClick={() => setIsOpen(false)}
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              href="/post"
              className="text-white hover:text-blue-300"
              onClick={() => setIsOpen(false)}
            >
              Post
            </Link>
          </li>
        </ul>
      </nav>
    </aside>
  );
};

export default SideBar;
