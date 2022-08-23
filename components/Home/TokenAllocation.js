import Image from 'next/image';
import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';

export default function TokenAllocation() {
  const alList = [
    {
      percent: '30',
      title: 'community',
      value: '15,000,000',
    },
    {
      percent: '25',
      title: 'Play To Earn',
      value: '12,500,000',
    },
    {
      percent: '10',
      title: 'Team',
      value: '5,000,000',
    },
    {
      percent: '5',
      title: 'Advisors',
      value: '2,500,000',
    },
    {
      percent: '20',
      title: 'Staking',
      value: '10,000,000',
    },
    {
      percent: '10',
      title: 'Airdrop',
      value: '5,000,000',
    },
  ];
  return (
    <section className="allocation">
      <Container>
        <Row>
          <Col lg={6} sm={12}>
            <h2 className="d-block d-lg-none text-center mb-4 pb-4">
              Token Allocations
            </h2>
            <div className="allocation-image">
              <Image
                src="/images/PieChart.svg"
                alt="allocation"
                width={649}
                height={667}
                objectFit="contain"
              />
            </div>
          </Col>
          <Col lg={6} sm={12}>
            <ul className="allocation-list">
              {alList.map((item, index) => (
                <li key={index}>
                  <h5>
                    <span>{item.percent}%</span> {item.title}
                  </h5>
                  <p>{item.value} Tokens</p>
                </li>
              ))}
            </ul>
          </Col>
        </Row>
      </Container>
    </section>
  );
}
