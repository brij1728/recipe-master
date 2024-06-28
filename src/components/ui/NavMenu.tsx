import Link from 'next/link';
import React from 'react';

interface MenuItem {
  name: string;
  link: string;
  icon?: JSX.Element;
}

interface NavMenuProps {
  menus: MenuItem[];
  navClassName?: string;
  ulClassName?: string;
  liClassName?: string;
  linkClassName?: string;
}

export const NavMenu: React.FC<NavMenuProps> = ({
  menus,
  navClassName = '',
  ulClassName = '',
  liClassName = '',
  linkClassName = '',
}) => {
  return (
    <nav className={navClassName}>
      <ul className={`sm:gap-4 ${ulClassName}`}>
        {menus.map((menu, index) => (
          <li key={index} className={liClassName}>
            <Link
              href={menu.link}
              className={`flex items-center sm:gap-2 ${linkClassName}`}
            >
              {menu.icon && <span>{menu.icon}</span>}
              <span>{menu.name}</span>
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};
