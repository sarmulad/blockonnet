import Image from 'next/image';
import React from 'react';

export default function Tokenomics() {
  return (
    <section className="tokenomics" id="tokenomics">
      <div className="tokenomics-area">
        <div className="tokenomics-image-area">
          <h2 className="d-block d-lg-none">Tokenomics</h2>
          <div className="tokenomics-image">
            <Image
              src="/images/tokenomics.png"
              alt="Tokenomics"
              width={556}
              height={729}
              objectFit="contain"
            />
          </div>
        </div>
        <div className="tokenomics-content-area">
          <div className="tokenomics-content">
            <div className="tokenomics-desc">
              <h2 className="d-none d-lg-block">Tokenomics</h2>
              <p>
                Decentralization is an important feature of the Blockonnect
                ecosystem. As a result, they are not subject to the oversight of
                any centralized institutions. Due to its deflationary mechanism,
                Blockonnect is also intended to be the most stable and
                long-lasting cryptocurrency.
              </p>
            </div>
            <div className="tokenomics-list">
              <h5>What we offer</h5>
              <ul>
                <li>
                  <div className="offer-image">
                    <Image
                      src="/images/icon-1.png"
                      alt="icon"
                      width={120}
                      height={120}
                      objectFit="contain"
                    />
                  </div>
                  <div className="offer-content">
                    <h6>Deflationary and rebasing processes</h6>
                  </div>
                </li>
                <li>
                  <div className="offer-image">
                    <Image
                      src="/images/icon-2.png"
                      alt="icon"
                      width={120}
                      height={120}
                      objectFit="contain"
                    />
                  </div>
                  <div className="offer-content">
                    <h6>Boost Liquidity</h6>
                  </div>
                </li>
                <li>
                  <div className="offer-image">
                    <Image
                      src="/images/icon-3.png"
                      alt="icon"
                      width={120}
                      height={120}
                      objectFit="contain"
                    />
                  </div>
                  <div className="offer-content">
                    <h6>Staking Rewards</h6>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
