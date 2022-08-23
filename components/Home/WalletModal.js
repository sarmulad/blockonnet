import Image from "next/image";
import Link from 'next/link';

export default function WalletModal() {
  return (
    <div className="img-container">
        <div className="modal-opt1">
        <div className="modal-opt">
          
        <Link href="/AfterConnect" className="linkk">
        
        <div>
          <a>
        <Image
            src="/images/meta.png"
            alt="roadmap"
            width={150}
            height={150}
            objectFit="contain"
          />
          <p>MetaMask</p>
          </a>
          </div>
       </Link>
        </div>
      </div>
      <div className="modal-opt1">
        <div className="modal-opt">
        <Link href="/AfterConnect"  className="linkk">
          <div>
            <a>
          <Image
            src="/images/wallet.png"
            alt="roadmap"
            width={150}
            height={150}
            objectFit="contain"
          />
          <p>Wallet Connect</p>
          </a>
          </div>
          </Link>
        </div>
      </div>
      
    </div>
  );
}
