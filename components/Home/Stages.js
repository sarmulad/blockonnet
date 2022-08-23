import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';

function Stages() {
  return (
    <section className="stages">
      <Container>
        <div className="stages-content">
          <h5>Hurry and purchase in presale for amazing bonus!</h5>
          <Row>
            <Col lg={4} md={4} sm={12} xs={12}>
              <div className="stage-item">
                <div className="stage-item-percent">
                  <div className="percent-img">
                    <Image
                      src={'/images/subtract.png'}
                      alt={'Subtract'}
                      width={271}
                      height={271}
                      objectFit="contain"
                    />
                  </div>
                  <div className="percent-value">10%</div>
                </div>
                <div className="stage-title">
                  <h5>Stage 1</h5>
                </div>
              </div>
            </Col>
            <Col lg={4} md={4} sm={12} xs={12}>
              <div className="stage-item">
                <div className="stage-item-percent">
                  <div className="percent-img">
                    <Image
                      src={'/images/subtract.png'}
                      alt={'Subtract'}
                      width={271}
                      height={271}
                      objectFit="contain"
                    />
                  </div>
                  <div className="percent-value">7%</div>
                </div>
                <div className="stage-title">
                  <h5>Stage 2</h5>
                </div>
              </div>
            </Col>
            <Col lg={4} md={4} sm={12} xs={12}>
              <div className="stage-item">
                <div className="stage-item-percent">
                  <div className="percent-img">
                    <Image
                      src={'/images/subtract.png'}
                      alt={'Subtract'}
                      width={271}
                      height={271}
                      objectFit="contain"
                    />
                  </div>
                  <div className="percent-value">5%</div>
                </div>
                <div className="stage-title">
                  <h5>Stage 3</h5>
                </div>
              </div>
            </Col>
          </Row>
          <Link href={'/'}>
            <a className="btn-1 has-arrow">Enter Presale</a>
          </Link>
        </div>
      </Container>
    </section>
  );
}

export default Stages;
