import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { useNavigate } from 'react-router-dom';
import { useApplicationContext } from '../../context/ApplicationContext';
import './ApplyFlow.css';

const schema = z.object({
  fullName: z.string().min(2, 'Full name is required'),
  email: z.string().email('Enter a valid email address'),
  mobile: z.string().regex(/^[6-9]\d{9}$/, 'Enter a valid 10-digit mobile number'),
  dob: z.string().min(1, 'Date of birth is required'),
  pan: z.string().regex(/^[A-Z]{5}[0-9]{4}[A-Z]$/, 'Enter a valid PAN (e.g., ABCDE1234F)'),
});

function ApplyBasicInfo() {
  const navigate = useNavigate();
  const { data, updateData } = useApplicationContext();

  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: zodResolver(schema),
    defaultValues: {
      fullName: data.fullName || '',
      email: data.email || '',
      mobile: data.mobile || '',
      dob: data.dob || '',
      pan: data.pan || '',
    },
  });

  const onSubmit = (values) => {
    updateData(values);
    navigate('/apply/employment');
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="apply-form">
      <h2 className="apply-form__title">Personal Information</h2>
      <p className="apply-form__desc">Tell us about yourself. This helps us match you with the right lender.</p>

      <div className="form-group">
        <label className="form-label">Full Name (as per PAN)</label>
        <input {...register('fullName')} className={`form-input ${errors.fullName ? 'form-input--error' : ''}`} placeholder="Enter your full name" />
        {errors.fullName && <span className="form-error">{errors.fullName.message}</span>}
      </div>

      <div className="form-group">
        <label className="form-label">Email Address</label>
        <input {...register('email')} type="email" className={`form-input ${errors.email ? 'form-input--error' : ''}`} placeholder="your@email.com" />
        {errors.email && <span className="form-error">{errors.email.message}</span>}
      </div>

      <div className="form-group">
        <label className="form-label">Mobile Number</label>
        <input {...register('mobile')} type="tel" maxLength={10} className={`form-input ${errors.mobile ? 'form-input--error' : ''}`} placeholder="10-digit mobile number" />
        {errors.mobile && <span className="form-error">{errors.mobile.message}</span>}
      </div>

      <div className="form-group">
        <label className="form-label">Date of Birth</label>
        <input {...register('dob')} type="date" className={`form-input ${errors.dob ? 'form-input--error' : ''}`} />
        {errors.dob && <span className="form-error">{errors.dob.message}</span>}
      </div>

      <div className="form-group">
        <label className="form-label">PAN Number</label>
        <input {...register('pan')} className={`form-input ${errors.pan ? 'form-input--error' : ''}`} placeholder="ABCDE1234F" maxLength={10} style={{ textTransform: 'uppercase' }} />
        {errors.pan && <span className="form-error">{errors.pan.message}</span>}
        <span className="form-hint">Your PAN is used solely for identity verification.</span>
      </div>

      <button type="submit" className="btn btn--cta btn--lg btn--full">Continue to Employment Details</button>
    </form>
  );
}

export default ApplyBasicInfo;
