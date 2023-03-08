import { useState } from 'react';
import classNames from 'classnames/bind';
import { FaBars, FaSearch } from 'react-icons/fa';
import Image from 'next/image';
import Link from 'next/link';

import { NavigationMenu, SkipNavigationLink } from '../';

import styles from './Header.module.scss';
let cx = classNames.bind(styles);
/**
 * A Header component
 * @param {Props} props The props object.
 * @param {string} props.className An optional className to be added to the container.
 * @return {React.ReactElement} The FeaturedImage component.
 */
export default function Header({ className, menuItems }) {
  const [isNavShown, setIsNavShown] = useState(false);

  const headerClasses = cx('header', className);
  const navClasses = cx(
    'primary-navigation',
    isNavShown ? cx('show') : undefined
  );

  return (
    <header className='px-2 py-3 md:px-4 md:py-5 text-primary lg:px-12 lg:py-14'>
      <SkipNavigationLink />
        <div className='flex flex-wrap items-center justify-between'>
          <div className='w-24 h-auto md:w-16 custom:w-20 lg:w-24 xl:w-32'>
            <Link href="/">
              <a title="Home">
                <Image
                  src="/logo.png"
                  width={100}
                  height={100}
                  alt="ΠΕΣΤΤ logo"
                  layout="responsive"
                />
              </a>
            </Link>
          </div>
          <button
            type="button"
            className='flex items-center w-16 p-5 m-0 transition-colors duration-300 ease-in-out bg-transparent border-2 h-14 text-primary border-primary hover:bg-primary hover:text-white focus:bg-primary focus:text-white md:hidden'
            onClick={() => setIsNavShown(!isNavShown)}
            aria-label="Toggle navigation"
            aria-controls={cx('primary-navigation')}
            aria-expanded={isNavShown}
          >
            <FaBars />
          </button>
          <NavigationMenu
            id={cx('primary-navigation')}
            className={navClasses}
            menuItems={menuItems}
          >
            <li>
              <Link href="/search">
                <a>
                  <FaSearch title="Search" role="img" />
                </a>
              </Link>
            </li>
          </NavigationMenu>
        </div>
    </header>
  );
}
