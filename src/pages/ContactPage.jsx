import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { Mail, Phone, MapPin, Clock, ArrowRight, CheckCircle } from 'lucide-react';
import { COMPANY } from '../config/company';
import { useToast } from '../components/Toast';
import SEO from '../components/SEO';
import './InfoPage.css';

const schema = z.object({
  name: z.string().min(2, 'Name is required'),
  email: z.string().email('Enter a valid email'),
  subject: z.string().min(1, 'Select a topic'),
  message: z.string().min(10, 'Message must be at least 10 characters'),
});

function ContactPage() {
  const [sent, setSent] = useState(false);
  const toast = useToast();

  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: zodResolver(schema),
    defaultValues: { name: '', email: '', subject: '', message: '' },
  });

  const onSubmit = () => {
    setSent(true);
    toast('Message sent! Our team will get back to you within 24 hours.', 'success');
  };

  return (
    <div className="info-page">
      <SEO title="Contact Us" description={`Get in touch with ${COMPANY.name}. Email: ${COMPANY.email}. Toll-free: ${COMPANY.phone}.`} />

      <section className="info-hero">
        <div className="container">
          <span className="section-badge">Contact Us</span>
          <h1 className="info-hero__title">We're Here to Help</h1>
          <p className="info-hero__subtitle">Have a question about loans, your application, or our platform? Our team responds within 24 hours.</p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="contact-grid">
            <div className="contact-info-list">
              <div className="contact-info-item">
                <Mail size={20} />
                <div><strong>Email</strong><span>{COMPANY.email}</span></div>
              </div>
              <div className="contact-info-item">
                <Phone size={20} />
                <div><strong>Toll Free</strong><span>{COMPANY.phone} (Mon-Sat, 9am-7pm)</span></div>
              </div>
              <div className="contact-info-item">
                <MapPin size={20} />
                <div><strong>Office</strong><span>{COMPANY.address.full}</span></div>
              </div>
              <div className="contact-info-item">
                <Clock size={20} />
                <div><strong>Working Hours</strong><span>{COMPANY.workingHours}</span></div>
              </div>
            </div>

            <div className="contact-form">
              {!sent ? (
                <>
                  <h3>Send us a message</h3>
                  <form onSubmit={handleSubmit(onSubmit)} noValidate>
                    <div className="form-group contact-form__group">
                      <label className="form-label">Full Name</label>
                      <input {...register('name')} className={`form-input ${errors.name ? 'form-input--error' : ''}`} placeholder="Enter your name" />
                      {errors.name && <span className="form-error" role="alert">{errors.name.message}</span>}
                    </div>
                    <div className="form-group contact-form__group">
                      <label className="form-label">Email</label>
                      <input {...register('email')} type="email" className={`form-input ${errors.email ? 'form-input--error' : ''}`} placeholder="your@email.com" />
                      {errors.email && <span className="form-error" role="alert">{errors.email.message}</span>}
                    </div>
                    <div className="form-group contact-form__group">
                      <label className="form-label">Subject</label>
                      <select {...register('subject')} className={`form-select ${errors.subject ? 'form-input--error' : ''}`}>
                        <option value="">Select topic</option>
                        <option value="loan-query">Loan Query</option>
                        <option value="app-status">Application Status</option>
                        <option value="partnership">NBFC Partnership</option>
                        <option value="grievance">Grievance</option>
                        <option value="other">Other</option>
                      </select>
                      {errors.subject && <span className="form-error" role="alert">{errors.subject.message}</span>}
                    </div>
                    <div className="form-group contact-form__group--last">
                      <label className="form-label">Message</label>
                      <textarea {...register('message')} className={`form-input ${errors.message ? 'form-input--error' : ''}`} rows={4} placeholder="Describe your query..." style={{ resize: 'vertical' }} />
                      {errors.message && <span className="form-error" role="alert">{errors.message.message}</span>}
                    </div>
                    <button type="submit" className="btn btn--cta btn--lg btn--full">Send Message <ArrowRight size={18} /></button>
                  </form>
                </>
              ) : (
                <div className="contact-success">
                  <div className="contact-success__icon"><CheckCircle size={48} /></div>
                  <h3>Message Sent!</h3>
                  <p>Our team will get back to you within 24 hours.</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default ContactPage;
