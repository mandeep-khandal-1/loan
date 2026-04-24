import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { useNavigate } from 'react-router-dom';
import { useApplicationContext } from '../../context/ApplicationContext';
import { ArrowLeft } from 'lucide-react';
import './ApplyFlow.css';

const schema = z.object({
  employmentType: z.string().min(1, 'Select your employment type'),
  monthlyIncome: z.string().min(1, 'Monthly income is required'),
  employer: z.string().min(1, 'Employer name is required'),
  experience: z.string().min(1, 'Select your work experience'),
  loanAmount: z.string().min(1, 'Enter desired loan amount'),
  loanPurpose: z.string().min(1, 'Select loan purpose'),
});

function ApplyEmployment() {
  const navigate = useNavigate();
  const { data, updateData } = useApplicationContext();

  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: zodResolver(schema),
    defaultValues: {
      employmentType: data.employmentType || '',
      monthlyIncome: data.monthlyIncome || '',
      employer: data.employer || '',
      experience: data.experience || '',
      loanAmount: data.loanAmount || '',
      loanPurpose: data.loanPurpose || '',
    },
  });

  const onSubmit = (values) => {
    updateData(values);
    navigate('/apply/verification');
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="apply-form">
      <h2 className="apply-form__title">Employment & Loan Details</h2>
      <p className="apply-form__desc">This helps our NBFC partners assess your repayment capacity.</p>

      <div className="form-group">
        <label className="form-label">Employment Type</label>
        <select {...register('employmentType')} className={`form-select ${errors.employmentType ? 'form-input--error' : ''}`}>
          <option value="">Select type</option>
          <option value="salaried">Salaried</option>
          <option value="self-employed">Self-Employed Professional</option>
          <option value="business">Business Owner</option>
          <option value="freelancer">Freelancer / Gig Worker</option>
        </select>
        {errors.employmentType && <span className="form-error">{errors.employmentType.message}</span>}
      </div>

      <div className="form-group">
        <label className="form-label">Monthly Net Income (₹)</label>
        <input {...register('monthlyIncome')} type="number" className={`form-input ${errors.monthlyIncome ? 'form-input--error' : ''}`} placeholder="e.g., 50000" />
        {errors.monthlyIncome && <span className="form-error">{errors.monthlyIncome.message}</span>}
      </div>

      <div className="form-group">
        <label className="form-label">Current Employer / Business Name</label>
        <input {...register('employer')} className={`form-input ${errors.employer ? 'form-input--error' : ''}`} placeholder="Company name" />
        {errors.employer && <span className="form-error">{errors.employer.message}</span>}
      </div>

      <div className="form-group">
        <label className="form-label">Total Work Experience</label>
        <select {...register('experience')} className={`form-select ${errors.experience ? 'form-input--error' : ''}`}>
          <option value="">Select experience</option>
          <option value="0-1">Less than 1 year</option>
          <option value="1-3">1 - 3 years</option>
          <option value="3-5">3 - 5 years</option>
          <option value="5-10">5 - 10 years</option>
          <option value="10+">10+ years</option>
        </select>
        {errors.experience && <span className="form-error">{errors.experience.message}</span>}
      </div>

      <div className="form-group">
        <label className="form-label">Desired Loan Amount (₹)</label>
        <input {...register('loanAmount')} type="number" className={`form-input ${errors.loanAmount ? 'form-input--error' : ''}`} placeholder="e.g., 300000" />
        {errors.loanAmount && <span className="form-error">{errors.loanAmount.message}</span>}
      </div>

      <div className="form-group">
        <label className="form-label">Loan Purpose</label>
        <select {...register('loanPurpose')} className={`form-select ${errors.loanPurpose ? 'form-input--error' : ''}`}>
          <option value="">Select purpose</option>
          <option value="medical">Medical Emergency</option>
          <option value="wedding">Wedding</option>
          <option value="education">Education</option>
          <option value="travel">Travel</option>
          <option value="home-renovation">Home Renovation</option>
          <option value="debt-consolidation">Debt Consolidation</option>
          <option value="business">Business Expansion</option>
          <option value="other">Other</option>
        </select>
        {errors.loanPurpose && <span className="form-error">{errors.loanPurpose.message}</span>}
      </div>

      <div className="apply-form__actions">
        <button type="button" className="btn btn--ghost btn--lg" onClick={() => navigate('/apply')}><ArrowLeft size={16} /> Back</button>
        <button type="submit" className="btn btn--cta btn--lg" style={{ flex: 1 }}>Continue to Verification</button>
      </div>
    </form>
  );
}

export default ApplyEmployment;
