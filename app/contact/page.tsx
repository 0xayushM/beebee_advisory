'use client';

import { useState } from 'react';
import { Navbar } from '../components/Navbar';
import { Footer } from '../components/Footer';
import contactData from '../data/contact.json';

export default function ContactPage() {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    service: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="min-h-screen" style={{ backgroundColor: 'var(--background)', color: 'var(--foreground)' }}>
      <Navbar />

      {/* Hero */}
      <section className="relative pt-36 pb-20 px-6 md:px-12 lg:px-20 overflow-hidden" style={{ backgroundColor: 'var(--background)' }}>
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center gap-2.5 mb-6">
            <div className="w-7 h-px opacity-60" style={{ backgroundColor: 'var(--primary-gold)' }} />
            <span className="text-[11px] font-medium tracking-[0.22rem] uppercase helvetica-neue" style={{ color: 'var(--primary-gold)' }}>
              {contactData.hero.label}
            </span>
          </div>
          <h1 className="text-5xl md:text-7xl lg:text-8xl leading-none mb-6 anton tracking-tighter">
            {contactData.hero.title}<br />
            <span style={{ color: 'var(--primary-gold)' }}>{contactData.hero.titleAccent}</span>
          </h1>
          <p className="text-base md:text-lg max-w-2xl leading-relaxed helvetica-neue" style={{ color: 'var(--text-secondary)' }}>
            {contactData.hero.description}
          </p>
        </div>
      </section>

      {/* Main Form + Info */}
      <section className="px-6 py-20 md:px-12 lg:px-20" style={{ backgroundColor: 'var(--background)' }}>
        <div className="max-w-7xl mx-auto grid md:grid-cols-5 gap-12">

          {/* Form — wider */}
          <div className="md:col-span-3">
            <div className="flex items-center gap-2.5 mb-6">
              <div className="w-7 h-px opacity-60" style={{ backgroundColor: 'var(--primary-gold)' }} />
              <span className="text-[11px] font-medium tracking-[0.22rem] uppercase helvetica-neue" style={{ color: 'var(--primary-gold)' }}>
                SEND US A MESSAGE
              </span>
            </div>

            {submitted ? (
              <div className="p-10 rounded-[14px] text-center" style={{ backgroundColor: 'var(--card-bg)', border: '1px solid rgba(201,168,76,0.3)' }}>
                <div className="w-14 h-14 rounded-full flex items-center justify-center mx-auto mb-6" style={{ backgroundColor: 'rgba(201,168,76,0.1)' }}>
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <path d="M5 12l4 4L19 7" stroke="var(--primary-gold)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <h3 className="text-2xl mb-3 anton">MESSAGE SENT!</h3>
                <p className="text-sm leading-relaxed helvetica-neue" style={{ color: 'var(--text-secondary)' }}>
                  Thank you for reaching out. A member of our team will be in touch within one business day.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid md:grid-cols-2 gap-5">
                  {contactData.form.fields.map((field) => (
                    <div key={field.id}>
                      <label className="block text-xs mb-2 helvetica-neue-bold uppercase tracking-wider" style={{ letterSpacing: '0.09em' }}>
                        {field.label} {field.required && <span style={{ color: 'var(--primary-gold)' }}>*</span>}
                      </label>
                      <input
                        type={field.type}
                        required={field.required}
                        placeholder={field.placeholder}
                        value={formState[field.id as keyof typeof formState]}
                        onChange={(e) => setFormState(prev => ({ ...prev, [field.id]: e.target.value }))}
                        className="w-full px-4 py-3 rounded-lg text-sm transition-all duration-200 helvetica-neue outline-none"
                        style={{
                          backgroundColor: 'var(--card-bg)',
                          border: '1px solid var(--border-color)',
                          color: 'var(--text-primary)',
                        }}
                        onFocus={(e) => e.target.style.borderColor = 'rgba(201,168,76,0.5)'}
                        onBlur={(e) => e.target.style.borderColor = 'var(--border-color)'}
                      />
                    </div>
                  ))}
                </div>

                <div>
                  <label className="block text-xs mb-2 helvetica-neue-bold uppercase tracking-wider" style={{ letterSpacing: '0.09em' }}>
                    SERVICE INTEREST
                  </label>
                  <select
                    value={formState.service}
                    onChange={(e) => setFormState(prev => ({ ...prev, service: e.target.value }))}
                    className="w-full px-4 py-3 rounded-lg text-sm helvetica-neue outline-none transition-all duration-200"
                    style={{
                      backgroundColor: 'var(--card-bg)',
                      border: '1px solid var(--border-color)',
                      color: 'var(--text-primary)',
                    }}
                    onFocus={(e) => e.currentTarget.style.borderColor = 'rgba(201,168,76,0.5)'}
                    onBlur={(e) => e.currentTarget.style.borderColor = 'var(--border-color)'}
                  >
                    {contactData.form.serviceOptions.map((option, i) => (
                      <option key={i} value={i === 0 ? '' : option}>{option}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-xs mb-2 helvetica-neue-bold uppercase tracking-wider" style={{ letterSpacing: '0.09em' }}>
                    MESSAGE <span style={{ color: 'var(--primary-gold)' }}>*</span>
                  </label>
                  <textarea
                    required
                    rows={6}
                    placeholder={contactData.form.messagePlaceholder}
                    value={formState.message}
                    onChange={(e) => setFormState(prev => ({ ...prev, message: e.target.value }))}
                    className="w-full px-4 py-3 rounded-lg text-sm resize-none helvetica-neue outline-none transition-all duration-200"
                    style={{
                      backgroundColor: 'var(--card-bg)',
                      border: '1px solid var(--border-color)',
                      color: 'var(--text-primary)',
                    }}
                    onFocus={(e) => e.target.style.borderColor = 'rgba(201,168,76,0.5)'}
                    onBlur={(e) => e.target.style.borderColor = 'var(--border-color)'}
                  />
                </div>

                <SubmitButton text={contactData.form.submitText} />
              </form>
            )}
          </div>

          {/* Contact Info — narrower */}
          <div className="md:col-span-2 space-y-5">
            <div className="flex items-center gap-2.5 mb-6">
              <div className="w-7 h-px opacity-60" style={{ backgroundColor: 'var(--primary-gold)' }} />
              <span className="text-[11px] font-medium tracking-[0.22rem] uppercase helvetica-neue" style={{ color: 'var(--primary-gold)' }}>
                CONTACT DETAILS
              </span>
            </div>
            {contactData.contactInfo.map((info, i) => (
              <ContactInfoCard key={i} info={info} />
            ))}
          </div>
        </div>
      </section>

      {/* Schedule CTA */}
      <section className="px-6 py-20 md:px-12 lg:px-20" style={{ backgroundColor: 'var(--section-bg-dark)' }}>
        <div className="max-w-4xl mx-auto text-center">
          <div className="flex items-center justify-center gap-2.5 mb-6">
            <div className="w-7 h-px opacity-60" style={{ backgroundColor: 'var(--primary-gold)' }} />
            <span className="text-[11px] font-medium tracking-[0.22rem] uppercase helvetica-neue" style={{ color: 'var(--primary-gold)' }}>
              PREFER A CALL?
            </span>
            <div className="w-7 h-px opacity-60" style={{ backgroundColor: 'var(--primary-gold)' }} />
          </div>
          <h2 className="text-3xl md:text-5xl leading-none mb-6 anton tracking-tighter">
            {contactData.scheduleSection.title}<br />
            <span style={{ color: 'var(--primary-gold)' }}>{contactData.scheduleSection.titleAccent}</span>
          </h2>
          <p className="text-base max-w-xl mx-auto mb-10 leading-relaxed helvetica-neue" style={{ color: 'var(--text-secondary)' }}>
            {contactData.scheduleSection.description}
          </p>
          <ScheduleButton text={contactData.scheduleSection.buttonText} />
        </div>
      </section>

      <Footer />
    </div>
  );
}

function ContactInfoCard({ info }: { info: typeof contactData.contactInfo[0] }) {
  const [isHovered, setIsHovered] = useState(false);
  const icons: Record<string, React.ReactNode> = {
    email: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="var(--primary-gold)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="4" width="20" height="16" rx="2"/><path d="m2 7 10 6 10-6"/>
      </svg>
    ),
    phone: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="var(--primary-gold)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/>
      </svg>
    ),
    location: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="var(--primary-gold)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z"/><circle cx="12" cy="9" r="2.5"/>
      </svg>
    ),
    clock: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="var(--primary-gold)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 3"/>
      </svg>
    ),
  };

  const content = (
    <div
      className="p-6 rounded-[14px] transition-all duration-300"
      style={{
        backgroundColor: 'var(--card-bg)',
        border: `1px solid ${isHovered ? 'rgba(201,168,76,0.35)' : 'var(--border-color)'}`,
        transform: isHovered ? 'translateY(-2px)' : 'translateY(0)',
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="flex items-start gap-4">
        <div className="w-10 h-10 rounded-[8px] flex items-center justify-center flex-shrink-0" style={{ backgroundColor: 'rgba(201,168,76,0.1)', border: '1px solid rgba(201,168,76,0.25)' }}>
          {icons[info.icon]}
        </div>
        <div>
          <h3 className="text-sm mb-0.5 anton tracking-wider">{info.title}</h3>
          <p className="text-xs mb-1 helvetica-neue" style={{ color: 'var(--text-muted)' }}>{info.description}</p>
          <p className="text-sm helvetica-neue whitespace-pre-line" style={{ color: 'var(--text-secondary)' }}>{info.value}</p>
        </div>
      </div>
    </div>
  );

  if (info.href) {
    return <a href={info.href}>{content}</a>;
  }
  return content;
}

function SubmitButton({ text }: { text: string }) {
  const [isHovered, setIsHovered] = useState(false);
  return (
    <button
      type="submit"
      className="relative w-full py-4 rounded-lg overflow-hidden transition-all duration-200"
      style={{ fontFamily: "'HelveticaNeue', 'Helvetica Neue', Helvetica, Arial, sans-serif", fontWeight: '700', fontSize: '13px', letterSpacing: '0.1em', backgroundColor: 'var(--primary-gold)', color: '#0F1B36', border: '1px solid var(--primary-gold)' }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <span className="absolute inset-0 transition-transform duration-500 ease-out" style={{ backgroundColor: '#0F1B36', transform: isHovered ? 'translateX(0)' : 'translateX(-100%)' }} />
      <span className="relative z-10 transition-colors duration-300 uppercase" style={{ color: isHovered ? 'var(--primary-gold)' : '#000' }}>{text}</span>
    </button>
  );
}

function ScheduleButton({ text }: { text: string }) {
  const [isHovered, setIsHovered] = useState(false);
  return (
    <a
      href="https://calendly.com"
      target="_blank"
      rel="noopener noreferrer"
      className="relative inline-block px-10 py-4 rounded-lg overflow-hidden"
      style={{ fontFamily: "'HelveticaNeue', 'Helvetica Neue', Helvetica, Arial, sans-serif", fontWeight: '700', fontSize: '12px', letterSpacing: '0.1em', backgroundColor: 'var(--primary-gold)', color: '#0F1B36', border: '1px solid var(--primary-gold)' }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <span className="absolute inset-0 transition-transform duration-500 ease-out" style={{ backgroundColor: '#0F1B36', transform: isHovered ? 'translateX(0)' : 'translateX(-100%)' }} />
      <span className="relative z-10 transition-colors duration-300 uppercase" style={{ color: isHovered ? 'var(--primary-gold)' : '#000' }}>{text}</span>
    </a>
  );
}
