import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';

export default function Features() {
  const featuresList = [
    {
      title: 'Managing Cryptocurrency holdings',
      image: '/images/features-1.png',
      mobileImage: '/images/mobile1.png',
    },
    {
      title: 'Comprehensive Security and Digital Asset Management',
      image: '/images/features-2.png',
      mobileImage: '/images/mobile2.png',
    },
    {
      title: 'Ethereum Staking Reward Platform',
      image: '/images/features-3.png',
      mobileImage: '/images/mobile3.png',
    },
  ];

  const marketList = [
    {
      title: 'Auction listings,',
      image: '/images/auction.png',
    },
    {
      title: 'Governance procedures,',
      image: '/images/governance.png',
    },
    {
      title: 'Transaction history monitoring, etc.',
      image: '/images/transaction.png',
    },
  ];
  return (
    <section id="features">
      <Container>
        <div className="features">
          <h2>Our features</h2>
          <div className="feature-list">
            {featuresList.map((item, index) => (
              <div key={index} className="feature-item">
                <div className="feature-img d-none d-lg-flex">
                  <Image
                    src={item.image}
                    alt={item.title}
                    width={365}
                    height={592}
                    objectFit="contain"
                  />
                </div>
                <div className="feature-img d-flex d-lg-none">
                  <Image
                    src={item.mobileImage}
                    alt={item.title}
                    width={365}
                    height={592}
                    objectFit="contain"
                  />
                </div>
                <div className="feature-text">{item.title}</div>
              </div>
            ))}
          </div>
        </div>
      </Container>
      <Container className="marketplace">
        <Row>
          <Col lg={6} xs={12}>
            <h2>NFT Marketplace</h2>
            <div className="d-flex d-lg-none mb-4">
              <Image
                src={'/images/mobile-nft.png'}
                alt="Market Place"
                width={328}
                height={400}
                objectFit="contain"
              />
            </div>
            <div className="market-content">
              <p>
                As part of the Blockonnect NFT Marketplace, users will be able
                to create, buy, and sell NFTs. Additional services provided by
                the Blockonnect NFT Marketplace include:
              </p>
              <ul>
                {marketList.map((item, index) => (
                  <li key={index}>
                    <div className="list-image">
                      <Image
                        src={item.image}
                        alt={item.title}
                        width={24}
                        height={24}
                        objectFit="contain"
                      />
                    </div>
                    <p>{item.title}</p>
                  </li>
                ))}
              </ul>
              <p>
                Moreover, holders will be able to mint and purchase at lower,
                more reasonable rates during the first year of Blockonnect's
                debut.
              </p>
            </div>
            <Link href={'/'}>
              <a className="btn-1 has-arrow">Learn More</a>
            </Link>
          </Col>
          <Col lg={6} xs={12}>
            <div className="marketplace-image d-none d-lg-flex">
              <Image
                src={'/images/marketplace.png'}
                alt="Market Place"
                width={406}
                height={656}
                objectFit="contain"
              />
            </div>
          </Col>
        </Row>
      </Container>
      <div className="features-bg d-none d-md-flex">
        <Image
          src={'/images/features-bg.png'}
          alt="Features Background"
          layout="fill"
          objectFit="contain"
        />
      </div>
      <div className="features-bg d-flex d-md-none">
        <Image
          src={'/images/mobile-features.png'}
          alt="Features Background"
          layout="fill"
          objectFit="contain"
        />
      </div>
    </section>
  );
}
