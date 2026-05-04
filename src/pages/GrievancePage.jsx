import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { Mail } from 'lucide-react';
import { COMPANY } from '../config/company';
import { useToast } from '../components/Toast';
import SEO from '../components/SEO';
import './InfoPage.css';

const schema = z.object({
  name: z.string().min(2, 'Name is required'),
  refNumber: z.string().optional(),
  complaint: z.string().min(1, 'Select the nature of complaint'),
  description: z.string().min(20, 'Please provide at least 20 characters'),
});

function GrievancePage() {
  const toast = useToast();

  const { register, handleSubmit, formState: { errors }, reset } = useForm({
    resolver: zodResolver(schema),
    defaultValues: { name: '', refNumber: '', complaint: '', description: '' },
  });

  const onSubmit = () => {
    toast('Complaint submitted. Our team will contact you within 48 hours.', 'success');
    reset();
  };

  return (
    <div className="info-page">
      <SEO title="Grievance Redressal" description="File a complaint or grievance with SabkaLoan. Multi-level redressal mechanism per RBI guidelines." />

      <section className="info-hero">
        <div className="container">
          <span className="section-badge">Legal</span>
          <h1 className="info-hero__title">Grievance Redressal</h1>
          <p className="info-hero__subtitle">We are committed to resolving your complaints fairly and promptly.</p>
        </div>
      </section>

      <section className="section">
        <div className="container legal-content">
          <h2>Grievance Redressal Mechanism</h2>
          <p>As per RBI guidelines for DSAs, we have established a comprehensive grievance redressal mechanism to ensure timely resolution of all customer complaints.</p>

          <h2>Level 1 — Customer Support</h2>
          <p>For any issue related to your loan application, offers, or platform experience, contact our support team first:</p>
          <ul>
            <li>Email: <strong>{COMPANY.email}</strong></li>
            <li>Phone: <strong>{COMPANY.phone}</strong> (Mon-Sat, 9am-7pm)</li>
            <li>Response time: Within 48 hours</li>
          </ul>

          <h2>Level 2 — Grievance Officer</h2>
          <p>If your complaint is not resolved at Level 1 within 7 working days, you may escalate to our designated Grievance Officer:</p>
          <div className="info-address grievance-officer-card">
            <Mail size={20} />
            <div>
              <strong>Grievance Officer</strong><br />
              Name: {COMPANY.grievanceOfficer.name}<br />
              Email: {COMPANY.grievanceOfficer.email}<br />
              Phone: {COMPANY.grievanceOfficer.phone}<br />
              Address: {COMPANY.address.full}<br />
              Resolution timeline: 15 working days
            </div>
          </div>

          <h2>Level 3 — NBFC/Bank Ombudsman</h2>
          <p>If your grievance pertains to a specific lending partner's decision (loan rejection, interest rate, disbursement), you may approach the respective NBFC/Bank's ombudsman directly. Contact details of our lending partners' grievance officers are available upon request.</p>

          <h2>Level 4 — RBI Ombudsman</h2>
          <p>If all other avenues are exhausted and your grievance remains unresolved after 30 days, you may file a complaint with the RBI Ombudsman:</p>
          <ul>
            <li>Online: <strong>cms.rbi.org.in</strong></li>
            <li>Email: <strong>crpc@rbi.org.in</strong></li>
            <li>Toll-free: 14448</li>
          </ul>

          <h2>Complaint Form</h2>
          <p>You can also submit your grievance using the form below. All complaints receive a unique reference number for tracking.</p>
          <form onSubmit={handleSubmit(onSubmit)} noValidate>
            <div className="form-group grievance-form__group">
              <label className="form-label">Your Name</label>
              <input {...register('name')} className={`form-input ${errors.name ? 'form-input--error' : ''}`} placeholder="Enter your full name" />
              {errors.name && <span className="form-error" role="alert">{errors.name.message}</span>}
            </div>
            <div className="form-group grievance-form__group">
              <label className="form-label">Application / Reference Number</label>
              <input {...register('refNumber')} className="form-input" placeholder="e.g., SL20261234" />
            </div>
            <div className="form-group grievance-form__group">
              <label className="form-label">Nature of Complaint</label>
              <select {...register('complaint')} className={`form-select ${errors.complaint ? 'form-input--error' : ''}`}>
                <option value="">Select</option>
                <option value="rejected">Application rejected without reason</option>
                <option value="rate">Incorrect interest rate offered</option>
                <option value="privacy">Data privacy concern</option>
                <option value="disbursement">Disbursement delay</option>
                <option value="comms">Unauthorized communication</option>
                <option value="other">Other</option>
              </select>
              {errors.complaint && <span className="form-error" role="alert">{errors.complaint.message}</span>}
            </div>
            <div className="form-group grievance-form__group--last">
              <label className="form-label">Describe your complaint</label>
              <textarea {...register('description')} className={`form-input ${errors.description ? 'form-input--error' : ''}`} rows={4} style={{ resize: 'vertical' }} placeholder="Please provide details..." />
              {errors.description && <span className="form-error" role="alert">{errors.description.message}</span>}
            </div>
            <button type="submit" className="btn btn--cta btn--lg">Submit Complaint</button>
          </form>
        </div>
      </section>
    </div>
  );
}

export default GrievancePage;
