import { gql } from '@apollo/client';
import Link from 'next/link';

export default function NavigationMenu({ menuItems, className, children }) {
  if (!menuItems) {
    return null;
  }

  return (
    <nav
      className={className}
      role="navigation"
      aria-label={`${menuItems[0]?.menu.node.name} menu`}
    >
      <ul className="text-lg md:text-lg lg:text-lg xl:text-xl menu">
        {menuItems.map((item) => {
          const { id, path, label } = item;
          return (
            <li key={id ?? ''} className='p-4 md:p-1 custom:p-2 lg:p-4 text-primary hover:bg-primary hover:text-white focus:bg-primary focus:text-white'>
              <Link href={path ?? ''} className='mt-10'>{label ?? ''}</Link>
            </li>
          );
        })}
        {children}
      </ul>
    </nav>
  );
}

NavigationMenu.fragments = {
  entry: gql`
    fragment NavigationMenuItemFragment on MenuItem {
      id
      path
      label
      parentId
      cssClasses
      menu {
        node {
          name
        }
      }
    }
  `,
};
