import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import './TestimonialForm.css';

const TestimonialForm = () => {
    const { t } = useTranslation();
    const [formValues, setFormValues] = useState({ name: '', company: '', review: '' });
    const [status, setStatus] = useState('');
    const [error, setError] = useState('');

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormValues((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!formValues.name.trim() || formValues.review.trim().length < 10) {
            setError(t('testimonial_form.errors'));
            return;
        }

        setError('');

        try {
            const response = await fetch('https://formspree.io/f/xnngnynw', {
                method: 'POST',
                headers: { Accept: 'application/json', 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    'Testimonial Name': formValues.name,
                    'Testimonial Company': formValues.company,
                    'Testimonial Review': formValues.review,
                }),
            });

            if (response.ok) {
                setStatus(t('testimonial_form.success'));
                setFormValues({ name: '', company: '', review: '' });
                setTimeout(() => setStatus(''), 5000);
            } else {
                setStatus(t('testimonial_form.failed'));
            }
        } catch (err) {
            console.error('Testimonial submit error:', err);
            setStatus(t('testimonial_form.failed'));
        }
    };

    return (
        <div className="testimonial-form">
            <h3>{t('testimonial_form.title')}</h3>
            <p className="testimonial-form__desc">{t('testimonial_form.subtitle')}</p>

            <form onSubmit={handleSubmit} className="testimonial-form__form">
                <input
                    type="text"
                    name="name"
                    placeholder={t('testimonial_form.name')}
                    value={formValues.name}
                    onChange={handleChange}
                    required
                />
                <input
                    type="text"
                    name="company"
                    placeholder={t('testimonial_form.company')}
                    value={formValues.company}
                    onChange={handleChange}
                />
                <textarea
                    name="review"
                    rows="4"
                    placeholder={t('testimonial_form.review')}
                    value={formValues.review}
                    onChange={handleChange}
                    required
                ></textarea>

                {error && <p className="form-error-msg">{error}</p>}
                {status && <p className="msg-success">{status}</p>}

                <button type="submit" className="btn btn-primary">
                    {t('testimonial_form.submit')}
                </button>
            </form>
        </div>
    );
};

export default TestimonialForm;
