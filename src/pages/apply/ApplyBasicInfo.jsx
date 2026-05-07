import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { useNavigate, useLocation } from 'react-router-dom';
import { useApplicationContext } from '../../context/ApplicationContext';
import './ApplyFlow.css';

const schema = z.object({
  fullName: z.string().min(2, 'Full name is required'),
  email: z.string().email('Enter a valid email address'),
  mobile: z.string().regex(/^[6-9]\d{9}$/, 'Enter a valid 10-digit mobile number'),
  dob: z.string().min(1, 'Date of birth is required').refine((val) => {
    const today = new Date();
    const birth = new Date(val);
    let age = today.getFullYear() - birth.getFullYear();
    const m = today.getMonth() - birth.getMonth();
    if (m < 0 || (m === 0 && today.getDate() < birth.getDate())) age--;
    return age >= 21 && age <= 65;
  }, 'You must be between 21 and 65 years old to apply'),
  pan: z.string().regex(/^[A-Z]{5}[0-9]{4}[A-Z]$/, 'Enter a valid PAN (e.g., ABCDE1234F)'),
});

function ApplyBasicInfo() {
  const navigate = useNavigate();
  const location = useLocation();
  const { data, updateData } = useApplicationContext();

  // Pre-fill from Hero form's navigation state (if available) or existing context
  const heroData = location.state || {};

  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: zodResolver(schema),
    defaultValues: {
      fullName: data.fullName || heroData.fullName || '',
      email: data.email || '',
      mobile: data.mobile || heroData.mobile || '',
      dob: data.dob || '',
      pan: data.pan || '',
    },
  });

  const onSubmit = (values) => {
    // Also carry over hero data (loanAmount, employmentType) if present
    updateData({
      ...values,
      ...(heroData.loanAmount ? { loanAmount: heroData.loanAmount } : {}),
      ...(heroData.employmentType ? { employmentType: heroData.employmentType } : {}),
    });
    navigate('/apply/employment');
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="apply-form" noValidate>
      <h2 className="apply-form__title">Personal Information</h2>
      <p className="apply-form__desc">Tell us about yourself. This helps us match you with the right lender.</p>

      <div className="form-group">
        <label htmlFor="apply-fullName" className="form-label">Full Name (as per PAN)</label>
        <input {...register('fullName')} id="apply-fullName" className={`form-input ${errors.fullName ? 'form-input--error' : ''}`} placeholder="Enter your full name" autoComplete="name" />
        {errors.fullName && <span className="form-error" role="alert">{errors.fullName.message}</span>}
      </div>

      <div className="form-group">
        <label htmlFor="apply-email" className="form-label">Email Address</label>
        <input {...register('email')} id="apply-email" type="email" className={`form-input ${errors.email ? 'form-input--error' : ''}`} placeholder="your@email.com" autoComplete="email" />
        {errors.email && <span className="form-error" role="alert">{errors.email.message}</span>}
      </div>

      <div className="form-group">
        <label htmlFor="apply-mobile" className="form-label">Mobile Number</label>
        <input {...register('mobile')} id="apply-mobile" type="tel" maxLength={10} className={`form-input ${errors.mobile ? 'form-input--error' : ''}`} placeholder="10-digit mobile number" autoComplete="tel" />
        {errors.mobile && <span className="form-error" role="alert">{errors.mobile.message}</span>}
      </div>

      <div className="form-group">
        <label htmlFor="apply-dob" className="form-label">Date of Birth</label>
        <input {...register('dob')} id="apply-dob" type="date" className={`form-input ${errors.dob ? 'form-input--error' : ''}`} autoComplete="bday" />
        {errors.dob && <span className="form-error" role="alert">{errors.dob.message}</span>}
      </div>

      <div className="form-group">
        <label htmlFor="apply-pan" className="form-label">PAN Number</label>
        <input {...register('pan')} id="apply-pan" className={`form-input ${errors.pan ? 'form-input--error' : ''}`} placeholder="ABCDE1234F" maxLength={10} style={{ textTransform: 'uppercase' }} autoComplete="off" />
        {errors.pan && <span className="form-error" role="alert">{errors.pan.message}</span>}
        <span className="form-hint">Your PAN is used solely for identity verification.</span>
      </div>

      <button type="submit" className="btn btn--cta btn--lg btn--full">Continue to Employment Details</button>
    </form>
  );
}

export default ApplyBasicInfo;
