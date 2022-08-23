import Image from 'next/image';
import React from 'react';
import { Accordion, Container } from 'react-bootstrap';

export default function Faq() {
  const faqList = [
    {
      title: 'What is Blockonnect?',
      body: 'Blockonnect is the one-stop-shop for handling cryptocurrency transactions and ethereum exchange. The platform offers staking and digital asset management services.',
    },
    {
      title: 'Is there a staking minimum and maximum on Blockonnect work?',
      body: 'On Blockonnect, there are no minimum stakes. However, to assist control network restrictions, each user may stake a maximum amount of ETH. This maximum amount is subject to change and is not unique to your account.',
    },
    {
      title:
        'What makes Blockonnect digital asset management feature different?',
      body: 'With Blockonnect, the risk of a network outage is shared among several nodes, and the company is responsible for maintaining each of those nodes.',
    },
  ];
  return (
    <section className="faq" id="faq">
      <Container>
        <div className="faq-area">
          <h2 className="faq-title">Frequently Asked Questions</h2>
          <Accordion defaultActiveKey="0">
            {faqList.map((item, index) => (
              <Accordion.Item eventKey={index} key={index}>
                <Accordion.Header>{item.title}</Accordion.Header>
                <Accordion.Body>{item.body} </Accordion.Body>
              </Accordion.Item>
            ))}
          </Accordion>
        </div>
        <div className="ref-area">
          <ul className="d-none d-lg-flex">
            <li>
              <Image
                src="/images/coingecko.png"
                alt="coingecko"
                width={279}
                height={56}
                objectFit="contain"
              />
            </li>
            <li>
              <Image
                src="/images/coinmarketcap.png"
                alt="coinmarketcap"
                width={325}
                height={56}
                objectFit="contain"
              />
            </li>
            <li>
              <Image
                src="/images/pancake.png"
                alt="pancake"
                width={363}
                height={56}
                objectFit="contain"
              />
            </li>
          </ul>
          <ul className="d-flex d-lg-none">
            <li>
              <Image
                src="/images/coingecko-mobile.png"
                alt="coingecko"
                width={40}
                height={40}
                objectFit="contain"
              />
            </li>
            <li>
              <Image
                src="/images/coinmarketcap-mobile.png"
                alt="coinmarketcap"
                width={40}
                height={40}
                objectFit="contain"
              />
            </li>
            <li>
              <Image
                src="/images/pancake-mobile.png"
                alt="pancake"
                width={40}
                height={40}
                objectFit="contain"
              />
            </li>
          </ul>
        </div>
      </Container>
    </section>
  );
}
