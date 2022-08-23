import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Col, Container, Row } from 'react-bootstrap';
import Countdown from '../_Apps/Countdown';

function Hero() {
  return (
    <section className="hero" id="about">
      <Container>
        <Row>
          <Col lg={6} xs={12}>
            <div className="hero-content">
              <h1>Konnect & Explore Advanced Blockchain Utilization</h1>
              <p>
                Blockonnect your one-stop platform to utilize blockchain from
                anywhere around the world!
              </p>
              <div className="hero-links">
                <Link href={'/howToBuy'}>
                  <a className="btn-1 has-arrow">How To Buy Presale</a>
                </Link>
                <Link href={'/'}>
                  <a className="btn-3">Read Whitepaper</a>
                </Link>
              </div>
             
            </div>
          </Col>
        </Row>
        <div className="references">
          <h5>We are featured on</h5>
          <ul>
            <li>
              <Image
                src={'/images/coinmarketcap.png'}
                alt={'Coin Market Cap'}
                width={219}
                height={38}
                objectFit="contain"
              />
            </li>
            <li>
              <Image
                src={'/images/coinbase.png'}
                alt={'Coin Base'}
                width={175}
                height={31}
                objectFit="contain"
              />
            </li>
            <li>
              <Image
                src={'/images/coingecko.png'}
                alt={'Coin Gecko'}
                width={189}
                height={38}
                objectFit="contain"
              />
            </li>
            <li>
              <Image
                src={'/images/forbes.png'}
                alt={'Forbes'}
                width={107}
                height={28}
                objectFit="contain"
              />
            </li>
            <li>
              <Image
                src={'/images/cointelegraph.png'}
                alt={'Coin Telegraph'}
                width={210}
                height={38}
                objectFit="contain"
              />
            </li>
          </ul>
        </div>
      </Container>
      <div className="hero-image">
        <Image
          src={'/images/hero.png'}
          alt={'Hero'}
          layout="fill"
          objectFit="contain"
        />
      </div>
    </section>
  );
}

export default Hero;
