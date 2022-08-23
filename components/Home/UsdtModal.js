import Image from "next/image";
import Link from "next/link";

export default function UsdtModal() {
  return (
    <div className="content-group">
      <span className="info-txt">buying</span>
      <div className="input-container">
        <input className="input-field medium" type="text" placeholder="0" />
        <span className="right-txt">
         
          BCON
          </span>
      </div>
      <span className="info-txt">selling</span>
      <div className="input-container">
        <input className="input-field medium" type="text" placeholder="0" />
        <span className="right-txt">USDT</span>
      </div>
      <div className="hold-button">
      <button className="btn-1 same2">Buy BCON With USDT</button>
      </div>
      
    </div>
  );
}
