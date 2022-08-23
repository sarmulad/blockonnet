import Image from 'next/image';
import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';

export default function Tokenomics() {
  return (
    <section className="unit">
      <Container>
        <Row>
          <Col lg={6} md={6} sm={12} xs={12}>
            {' '}
            <div className="unit-img">
              <Image
                src="/images/unit.png"
                alt="Tokenomics"
                width={561}
                height={697}
                objectFit="contain"
              />
            </div>
          </Col>
          <Col lg={6} md={6} sm={12} xs={12}>
            <div className="tokenomics-content">
              <div className="tokenomics-desc">
                <h2>Unit Tokenomics</h2>
              </div>
              <div className="unit-list">
                <ul>
                  <li>
                    <span>Total Supply : </span>50000000
                  </li>
                  <li>
                    <span>30% of Supply : </span>15000000
                  </li>
                  <li>
                    <span>Ticker : </span>BCON
                  </li>
                  <li>
                    <span>Start Price : </span>0.000900
                  </li>
                </ul>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
}
