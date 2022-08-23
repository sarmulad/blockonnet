import Link from 'next/link';
import React, { useState } from 'react';
import { Container } from 'react-bootstrap';
import Image from 'next/image';
import ChangeLang from './ChangeLang';
import { useRouter } from 'next/router';
import data from '../../locales/common.json';

function Header({ type }) {
  const menu = data.menu;
  const [active, setActive] = useState();
  const router = useRouter();
  const { lang } = router.query;
  return (
    <header className={`${active ? 'active ' : ''} ${type ? 'type' : ''}`}>
      <div className="hamburger" onClick={() => setActive(!active)}>
        <span />
        <span />
        <div />
        <span />
      </div>
      <Container>
        <div className="header-area">
          <div className="logo">
            <Link href={'/'} passHref>
              <div>
                <a className="d-none d-lg-flex">
                  <Image
                    src={'/images/logo.png'}
                    alt="Blockonnect Logo"
                    width={283}
                    height={72}
                    objectFit="contain"
                  />
                </a>{' '}
                <a className="d-flex d-lg-none">
                  <Image
                    src={'/images/logo.png'}
                    alt="Blockonnect Logo"
                    width={173}
                    height={40}
                    objectFit="contain"
                  />
                </a>
              </div>
            </Link>
          </div>
          <nav>
            <ul>
              {menu?.map((link, index) => (
                <li key={index}>
                  <Link href={link.slug || '/'}>
                    <a onClick={() => setActive(!active)}>{link.links}</a>
                  </Link>
                </li>
              ))}
              <li>
                <div id="google_translate_element" />
              </li>
              <li>
                <Link href={'/'}>
                  <a className="btn-1" onClick={() => setActive(!active)}>
                  Claim
                  </a>
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </Container>
    </header>
  );
}

export default Header;
