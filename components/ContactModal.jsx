'use client';

import { useEffect, useState } from 'react';
import { CheckCircle2, Loader2, X } from 'lucide-react';
import styles from './ContactModal.module.css';

const INITIAL_FORM = {
  name: '',
  phone: '',
  email: '',
  enquiryType: 'General Enquiry',
  message: '',
  website: '',
};

function getEnquiryType(label) {
  const value = label.toLowerCase();

  if (value.includes('solar loan')) {
    return 'Solar Loan Enquiry';
  }

  if (value.includes('enquire')) {
    return 'Product Enquiry';
  }

  if (value.includes('get in touch')) {
    return 'Contact Request';
  }

  return 'General Enquiry';
}

export default function ContactModal() {
  const [open, setOpen] = useState(false);
  const [form, setForm] = useState(INITIAL_FORM);
  const [status, setStatus] = useState('idle');
  const [error, setError] = useState('');

  useEffect(() => {
    const handleClick = (event) => {
      const target = event.target.closest(
        'a, button, [data-contact-trigger]'
      );

      if (!target) return;

      /*
       * Explicit trigger:
       * data-contact-trigger="true"
       */
      const explicitTrigger =
        target.getAttribute('data-contact-trigger') === 'true';

      const text = (target.textContent || '')
        .trim()
        .toLowerCase();

      const isContactButton =
        explicitTrigger ||
        text === 'contact' ||
        text === 'contact us' ||
        text === 'enquire now' ||
        text === 'enquiry' ||
        text === 'get in touch' ||
        text === 'apply for solar loan';

      if (!isContactButton) return;

      /*
       * Don't intercept telephone or email links.
       */
      const href = target.getAttribute('href') || '';

      if (
        href.startsWith('tel:') ||
        href.startsWith('mailto:')
      ) {
        return;
      }

      event.preventDefault();
      event.stopPropagation();

      setForm({
        ...INITIAL_FORM,
        enquiryType: getEnquiryType(text),
      });

      setError('');
      setStatus('idle');
      setOpen(true);
    };

    document.addEventListener('click', handleClick);

    return () => {
      document.removeEventListener('click', handleClick);
    };
  }, []);

  useEffect(() => {
    if (!open) return;

    document.body.style.overflow = 'hidden';

    const handleEscape = (event) => {
      if (event.key === 'Escape') {
        setOpen(false);
      }
    };

    document.addEventListener('keydown', handleEscape);

    return () => {
      document.body.style.overflow = '';
      document.removeEventListener('keydown', handleEscape);
    };
  }, [open]);

  const closeModal = () => {
    if (status === 'submitting') return;

    setOpen(false);
  };

  const handleChange = (event) => {
    const { name, value } = event.target;

    setForm((previous) => ({
      ...previous,
      [name]: value,
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    setError('');

    if (!form.name.trim()) {
      setError('Please enter your name.');
      return;
    }

    if (!form.phone.trim()) {
      setError('Please enter your phone number.');
      return;
    }

    if (!/^[0-9+\-\s()]{8,20}$/.test(form.phone.trim())) {
      setError('Please enter a valid phone number.');
      return;
    }

    if (
      form.email.trim() &&
      !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email.trim())
    ) {
      setError('Please enter a valid email address.');
      return;
    }

    setStatus('submitting');

    try {
      const response = await fetch('/api/enquiry', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: form.name.trim(),
          phone: form.phone.trim(),
          email: form.email.trim(),
          enquiryType: form.enquiryType,
          message: form.message.trim(),
          website: form.website,
          page:
            typeof window !== 'undefined'
              ? window.location.href
              : '',
        }),
      });

      const data = await response.json();

      if (!response.ok || !data.success) {
        throw new Error(
          data.message || 'Unable to submit enquiry.'
        );
      }

      setStatus('success');

      setForm(INITIAL_FORM);
    } catch (submitError) {
      console.error(submitError);

      setStatus('error');

      setError(
        'Something went wrong. Please try again or call us directly.'
      );
    }
  };

  if (!open) return null;

  return (
    <div
      className={styles.overlay}
      role="presentation"
      onMouseDown={(event) => {
        if (event.target === event.currentTarget) {
          closeModal();
        }
      }}
    >
      <div
        className={styles.modal}
        role="dialog"
        aria-modal="true"
        aria-labelledby="contact-modal-title"
      >

        <button
          type="button"
          className={styles.closeButton}
          onClick={closeModal}
          aria-label="Close enquiry form"
          disabled={status === 'submitting'}
        >
          <X size={21} />
        </button>

        {status === 'success' ? (

          <div className={styles.success}>

            <div className={styles.successIcon}>
              <CheckCircle2 size={48} />
            </div>

            <h2>Thank you!</h2>

            <p>
              Your enquiry has been submitted successfully.
              Our team will get in touch with you shortly.
            </p>

            <button
              type="button"
              className={styles.primaryButton}
              onClick={() => setOpen(false)}
            >
              CLOSE
            </button>

          </div>

        ) : (

          <>
            <div className={styles.header}>

              <span>YES GENESIS</span>

              <h2 id="contact-modal-title">
                How can we help?
              </h2>

              <p>
                Fill in your details and our team will
                get back to you.
              </p>

            </div>

            <form
              className={styles.form}
              onSubmit={handleSubmit}
            >

              {/* Honeypot */}
              <input
                type="text"
                name="website"
                value={form.website}
                onChange={handleChange}
                className={styles.honeypot}
                tabIndex="-1"
                autoComplete="off"
              />

              <div className={styles.row}>

                <label>
                  Full Name
                  <span>*</span>

                  <input
                    type="text"
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    placeholder="Enter your name"
                    autoComplete="name"
                    required
                  />
                </label>

                <label>
                  Phone Number
                  <span>*</span>

                  <input
                    type="tel"
                    name="phone"
                    value={form.phone}
                    onChange={handleChange}
                    placeholder="+91 98765 43210"
                    autoComplete="tel"
                    required
                  />
                </label>

              </div>

              <div className={styles.row}>

                <label>
                  Email Address

                  <input
                    type="email"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    placeholder="you@example.com"
                    autoComplete="email"
                  />
                </label>

                <label>
                  Enquiry Type

                  <select
                    name="enquiryType"
                    value={form.enquiryType}
                    onChange={handleChange}
                  >
                    <option>
                      General Enquiry
                    </option>

                    <option>
                      Product Enquiry
                    </option>

                    <option>
                      Solar Loan Enquiry
                    </option>

                    <option>
                      Solar Installation
                    </option>

                    <option>
                      Subsidy Enquiry
                    </option>

                    <option>
                      Solar Scheme Enquiry
                    </option>
                  </select>
                </label>

              </div>

              <label>
                Message

                <textarea
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  placeholder="Tell us what you need..."
                  rows={4}
                />
              </label>

              {error && (
                <p className={styles.error}>
                  {error}
                </p>
              )}

              <button
                type="submit"
                className={styles.submitButton}
                disabled={status === 'submitting'}
              >

                {status === 'submitting' ? (
                  <>
                    <Loader2
                      size={18}
                      className={styles.spinner}
                    />
                    SUBMITTING...
                  </>
                ) : (
                  'SUBMIT ENQUIRY'
                )}

              </button>

              <p className={styles.note}>
                Your information will only be used to
                respond to your enquiry.
              </p>

            </form>
          </>

        )}

      </div>
    </div>
  );
}