import Image from "next/image";
import React, { useState } from "react";
import Link from "next/link";
import { Accordion, Container } from "react-bootstrap";
import Modal from "../Modal";
import WalletModal from "./WalletModal";
import UsdtModal from "./UsdtModal";
import EthModal from "./EthModal";
import CardModal from "./CardModal";

export default function PayOptions() {
  
  const [showModalb, setShowModalb] = useState(false);
  const [showModalc, setShowModalc] = useState(false);
  const [showModald, setShowModald] = useState(false);

  return (
    <section className="early">
      <div className="container">
        <div className="early-1">
          <div className="early-left">
            <div className="inner-container">
              <h1>
                GET IN EARLY ON THE <br /> BLOCKONNECT PRE-SALE
              </h1>
              <p>
                BLOCKONNECT is the ultimate GameFi platform, <br />
                and it couldn't be easier to get your hands on the <br />
                token in our pre-sale. You can buy directly using <br />
                your card, or can use USDT or Eth already in your
                <br />
                wallet. After the public presale ends, you'll be <br />
                able to claim your purchased BLOCKONNECT <br />
                using the claim page.
              </p>
              <br />
              <br />
              <span>1 USDT = 66.67 BCON</span>
              <br />
              <br />
              <span>USDT Raised : $4,072,869.985/$4,750,000</span>
              <br />
              <br />
              <div className="fill-cont">
                <div className="fill-hold">
                  <div className="fill"></div>
                </div>
              </div>
            </div>
          </div>

          <div className="early-right shift">
            <div className="inner-container">
              
                <div className="after-connect-links flex-gap-y-6">
                  <div className="hhh">
                    <a
                      className="btn-1 same"
                      onClick={() => setShowModalc(true)}
                    >
                      BUY BLOCKONNECT WITH ETH
                    </a>
                  </div>
                  <div className="hhh">
                    <a
                      className="btn-1 same"
                      onClick={() => setShowModald(true)}
                    >
                      BUY ETH WITH CARD
                    </a>
                  </div>
                  <div className="hhh">
                    <a
                      className="btn-1 same1"
                      onClick={() => setShowModalb(true)}
                    >
                      BUY BLOCKONNECT WITH USDT
                    </a>
                  </div>
                </div>
              
            </div>
          </div>
        </div>
      </div>
      <Modal onClose={() => setShowModalb(false)} show={showModalb}>
        <div className="heeaad1">
          <div>Exchange</div>

          <UsdtModal />
        </div>
      </Modal>
      <Modal onClose={() => setShowModalc(false)} show={showModalc}>
        <div className="heeaad1">
          <div>Exchange</div>

          <EthModal />
        </div>
      </Modal>
      <Modal onClose={() => setShowModald(false)} show={showModald}>
        <div className="heeaad1">
          <div></div>

          <CardModal />
        </div>
      </Modal>
    </section>
  );
}
