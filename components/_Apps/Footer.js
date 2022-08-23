import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Col, Container, Row } from 'react-bootstrap';
import { useRouter } from 'next/router';
import data from '../../locales/common.json';

function Footer() {
  const footer = data.footer;
  const router = useRouter();
  const { lang } = router.query;
  return (
    <footer>
      <Container>
        <div className="footer-nav">
          <div className="footer-logo">
            <Image
              src={'/images/footer-logo.png'}
              alt="Blockonnect Logo"
              width={315}
              height={80}
              objectFit="contain"
            />
          </div>
          <ul className="bottom-menu">
            <h5>LINKS</h5>
            <Row>
              {footer?.menu.map((item, index) => (
                <Col key={index} md={6} xs={4}>
                  <li>
                    <Link href={'/' + lang + item.slug || '/'}>
                      <a>{item.links} </a>
                    </Link>
                  </li>
                </Col>
              ))}
            </Row>
          </ul>
          <div></div>
          <div></div>
        </div>
        <div className="footer-bottom">
          <p className="copyright">
            Copyright © 2022 <br className="d-md-none" /> Blockonnect Network.
            All rights reserved
          </p>
          <Link href={'/'}>
            <a>Privacy Policy</a>
          </Link>
          <Link href={'/'}>
            <a>Terms & Conditions</a>
          </Link>
          <div className="social">
            <h5>Konnect with us</h5>
            <ul>
              <li>
                <Link href={'/'}>
                  <a>
                    <Image
                      src={'/images/telegram.png'}
                      alt="telegram"
                      width={32}
                      height={32}
                      objectFit="contain"
                    />
                  </a>
                </Link>
              </li>
              <li>
                <Link href={'/'}>
                  <a>
                    <Image
                      src={'/images/twitter.png'}
                      alt="twitter"
                      width={32}
                      height={32}
                      objectFit="contain"
                    />
                  </a>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </Container>
    </footer>
  );
}

export default Footer;
