import { Shield, Lock, FileCheck } from 'lucide-react';
import './TrustBar.css';

function TrustBar() {
  return (
    <div className="trust-bar" id="trust-bar">
      <div className="container trust-bar__inner">
        <span className="trust-bar__item">
          <Shield size={13} />
          RBI-Registered NBFC Partners
        </span>
        <span className="trust-bar__sep">•</span>
        <span className="trust-bar__item">
          <Lock size={13} />
          256-bit SSL Encrypted
        </span>
        <span className="trust-bar__sep">•</span>
        <span className="trust-bar__item">
          <FileCheck size={13} />
          Licensed Loan Distributor (DSA)
        </span>
      </div>
    </div>
  );
}

export default TrustBar;
