import Image from "next/image";
import React, {useState} from "react";
import Link from "next/link";
import { Accordion, Container } from 'react-bootstrap';
import Modal from '../Modal';
import WalletModal from "./WalletModal";
import wallectmodal from './WalletModal';


export default function GetInEarly() {

    const [showModal, setShowModal] = useState(false);
    


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

          <div className="early-right">
            <div className="inner-container">
              <div className="red-line">
                <div className="box-div">
                  <p className="box-text">45,142,001</p>
                  <br />
                  <p className="box-text">BCON REMAINING </p>
                  <br />
                  <p className="box-text">UNTIL 1 USDT =57.14 BCON </p>
                </div>
              </div>
              <div className="hero-links space">
                
                  <a className="btn-1 " onClick={() => setShowModal(true)}>CONNECT WALLET</a>
               
                <Modal
                onClose={() => setShowModal(false)}
                show={showModal}
            >
                <div className="heeaad">
                    <div>Select A Provider</div>
                    
                    <WalletModal />
                    
                </div>
                
                
            </Modal>
              </div>
            </div>
          </div>
        </div>




        <div className="early-red">
          <div className="container spaze">
            <div className="outer">
              <div className="inner">
                <p className="box-text">HOW TO BUY BLOCKONNECT</p>
              </div>
            </div>
          </div>
        </div>

        <div className="early-step1">
          <div className="container spazze">
            <h1 className="step-subhead">Step1</h1>
            <div className="txt-back">
              <p className="step-txt">
                To begin, make sure you have a MetaMask wallet installed on your
                browser, or use one of the <br />
                wallets supported by Wallet Connect (we recommend Trust Wallet).
                <br />
                <br />
                Purchasing on a desktop browser will give you a smoother
                purchasing experience. For this we <br />
                recommend Metamask.
                <br />
                <br />
                If you are purchasing on mobile, we recommend using Trust Wallet
                and connecting through the in
                <br />
                built browser (just copy https:// into the Trust Wallet
                Browser).
              </p>
            </div>
          </div>
        </div>

        <div className="early-step1">
          <div className="container spazze">
            <h1 className="step-subhead">Step2</h1>
            <div className="txt-back">
              <p className="step-txt">
                Once you have your preferred wallet provider ready, click
                “Connect Wallet” and select the <br /> appropriate option. For
                mobile wallet apps you will need to select “Wallet Connect”.
                <br />
                <br /> You will then have 3 options
                <br />
                <br /> Buy ETH With Card. This option will allow you to purchase
                ETH that will be sent to your wallet by
                <br /> our partner, Transak. You will then be able to use this
                ETH to purchase BCON . Click “Buy Eth With
                <br /> Card” to begin and follow the on screen steps. We
                recommend purchasing a minimum of $15 worth
                <br /> of ETH to cover the minimum BCON purchase.
                <br />
                <br /> Buy BCON With ETH. Once you have sufficient ETH in your
                wallet (if you do not have ETH or USDT,
                <br /> please select option 1 to purchase ETH first), you can
                now swap your ETH for BCON. Type in the
                <br /> amount of FNCP you wish to purchase (1,000 minimum) and
                then click “Convert Eth”. Your wallet
                <br /> provider will ask you to confirm the transaction and will
                also show you the cost of gas
                <br />
                <br /> Buy with USDT. Please ensure you have at least $15 of
                USDT in your wallet before commencing
                <br /> the transaction. Type in the amount of BCON you wish to
                purchase (1,000 minimum). Click
                <br /> “Convert USDT”. You will then be asked to approve the
                purchase TWICE. The first approval is for the
                <br /> USDT contract and the second is for the transaction
                amount. Please ensure you go through both
                <br /> approval steps in order to complete the transaction.
              </p>
            </div>
          </div>
        </div>

        <div className="early-step1">
          <div className="container spazze">
            <h1 className="step-subhead">Step3</h1>
            <div className="txt-back">
              <p className="step-txt">
                Once the presale has concluded, you will be able to claim your
                BCON tokens. We will release
                <br /> details closer to the time, however you will need to
                visit the main site https:// and click on the
                <br />
                gold “Claim” button.
              </p>
            </div>
          </div>
        </div>

        <div className="early-red">
          <div className="container spaze">
            <div className="outer">
              <div className="inner">
                <p className="box-text">BLOCKONNECT CONTRACT</p>
              </div>
            </div>
          </div>
        </div>

        <div className="early-contract">
          <p>
            Use the contract information below to add the BCON token to your
            wallet.<br /><br /> Address: 0x12b6893cE26Ea6341919FE289212ef77e51688c8<br /><br />
            Decimals: 18<br /><br /> Token symbol: BCON
          </p>
        </div>

        <section className="faq" id="faq">
      <Container>
        
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
      </div>
    </section>
  );


 
  
}

