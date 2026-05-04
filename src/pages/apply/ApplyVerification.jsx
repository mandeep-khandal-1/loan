import { useState, useRef, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useApplicationContext } from '../../context/ApplicationContext';
import { ArrowLeft, ShieldCheck, Loader2 } from 'lucide-react';
import './ApplyFlow.css';

function ApplyVerification() {
  const navigate = useNavigate();
  const { data, updateData } = useApplicationContext();
  const [otp, setOtp] = useState(['', '', '', '', '', '']);
  const [error, setError] = useState('');
  const [countdown, setCountdown] = useState(60);
  const [sent, setSent] = useState(true);
  const [verifying, setVerifying] = useState(false);
  const inputRefs = useRef([]);

  useEffect(() => {
    if (countdown > 0 && sent) {
      const timer = setTimeout(() => setCountdown(countdown - 1), 1000);
      return () => clearTimeout(timer);
    }
  }, [countdown, sent]);

  useEffect(() => {
    if (inputRefs.current[0]) inputRefs.current[0].focus();
  }, []);

  const handleChange = (index, value) => {
    if (!/^\d*$/.test(value)) return;
    const newOtp = [...otp];
    newOtp[index] = value.slice(-1);
    setOtp(newOtp);
    setError('');

    if (value && index < 5) {
      inputRefs.current[index + 1]?.focus();
    }
  };

  const handleKeyDown = (index, e) => {
    if (e.key === 'Backspace' && !otp[index] && index > 0) {
      inputRefs.current[index - 1]?.focus();
    }
  };

  const handlePaste = (e) => {
    e.preventDefault();
    const pastedData = e.clipboardData.getData('text').replace(/\D/g, '').slice(0, 6);
    if (pastedData.length > 0) {
      const newOtp = [...otp];
      for (let i = 0; i < pastedData.length; i++) {
        newOtp[i] = pastedData[i];
      }
      setOtp(newOtp);
      const focusIndex = Math.min(pastedData.length, 5);
      inputRefs.current[focusIndex]?.focus();
    }
  };

  const handleResend = () => {
    setCountdown(60);
    setSent(true);
    setOtp(['', '', '', '', '', '']);
    inputRefs.current[0]?.focus();
  };

  const handleVerify = () => {
    const code = otp.join('');
    if (code.length < 6) {
      setError('Please enter the complete 6-digit OTP');
      return;
    }

    // Simulate verification API call with loading state
    setVerifying(true);
    setTimeout(() => {
      updateData({ otpVerified: true });
      setVerifying(false);
      navigate('/apply/offers');
    }, 1500);
  };

  const maskedMobile = data.mobile
    ? `${data.mobile.slice(0, 2)}****${data.mobile.slice(-2)}`
    : '••••••••••';

  return (
    <div className="apply-form">
      <h2 className="apply-form__title">Verify Your Mobile</h2>
      <p className="apply-form__desc">
        We sent a 6-digit OTP to <strong>+91 {maskedMobile}</strong>
      </p>

      <div className="otp-inputs">
        {otp.map((digit, i) => (
          <input
            key={i}
            ref={(el) => (inputRefs.current[i] = el)}
            type="text"
            inputMode="numeric"
            maxLength={1}
            value={digit}
            onChange={(e) => handleChange(i, e.target.value)}
            onKeyDown={(e) => handleKeyDown(i, e)}
            onPaste={i === 0 ? handlePaste : undefined}
            className={`otp-input ${error ? 'otp-input--error' : ''}`}
            aria-label={`OTP digit ${i + 1}`}
            autoComplete="one-time-code"
          />
        ))}
      </div>
      {error && <p className="form-error otp-error-msg" role="alert">{error}</p>}

      <div className="otp-resend">
        {countdown > 0 ? (
          <span>Resend OTP in <strong>{countdown}s</strong></span>
        ) : (
          <button type="button" className="otp-resend-btn" onClick={handleResend}>Resend OTP</button>
        )}
      </div>

      <p className="otp-note">
        <ShieldCheck size={14} /> Your OTP is securely verified through our encrypted gateway.
      </p>

      <div className="apply-form__actions">
        <button type="button" className="btn btn--ghost btn--lg" onClick={() => navigate('/apply/employment')}><ArrowLeft size={16} /> Back</button>
        <button
          type="button"
          className={`btn btn--cta btn--lg ${verifying ? 'btn--disabled' : ''}`}
          style={{ flex: 1 }}
          onClick={handleVerify}
          disabled={verifying}
        >
          {verifying ? <><Loader2 size={18} className="btn-spinner" /> Verifying...</> : 'Verify & Continue'}
        </button>
      </div>
    </div>
  );
}

export default ApplyVerification;
