import AOS from 'aos';
import 'aos/dist/aos.css';
import React, { useEffect, useState } from 'react';
import { AiOutlineMail } from 'react-icons/ai';
import { BsWhatsapp } from 'react-icons/bs';
import { RiMessengerLine } from 'react-icons/ri';
import { useTranslation } from 'react-i18next';
import './contact.css';
import SEO from '../common/SEO';
import Modal from '../common/Modal';

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const PHONE_PATTERN = /^\+?[0-9\s-]{7,15}$/;

const Contact = () => {
    const { t } = useTranslation();
    const [modalOpen, setModalOpen] = useState(false);
    const [modalType, setModalType] = useState('success');
    const [errors, setErrors] = useState({});
    const [formValues, setFormValues] = useState({
        name: '',
        email: '',
        phone: '',
        projectType: '',
        message: '',
    });

    useEffect(() => {
        AOS.init({
            duration: 1000,
            disable: false,
            startEvent: 'DOMContentLoaded',
            offset: 120,
            easing: 'ease',
            mirror: false,
            anchorPlacement: 'top-bottom',
        });
    }, []);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormValues((prev) => ({ ...prev, [name]: value }));
        if (errors[name]) {
            setErrors((prev) => ({ ...prev, [name]: '' }));
        }
    };

    const validate = () => {
        const newErrors = {};

        if (!formValues.name.trim()) newErrors.name = t('contact_form.errors.name');
        if (!formValues.email.trim()) {
            newErrors.email = t('contact_form.errors.email');
        } else if (!EMAIL_PATTERN.test(formValues.email)) {
            newErrors.email = t('contact_form.errors.email');
        }
        if (!formValues.projectType) newErrors.projectType = t('contact_form.errors.project_type');
        if (formValues.phone && !PHONE_PATTERN.test(formValues.phone)) {
            newErrors.phone = t('contact_form.errors.phone');
        }
        if (formValues.message.trim().length < 10) {
            newErrors.message = t('contact_form.errors.message');
        }

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!validate()) return;

        const formData = new FormData(e.target);

        try {
            const response = await fetch('https://formspree.io/f/xnngnynw', {
                method: 'POST',
                headers: {
                    Accept: 'application/json',
                },
                body: formData,
            });

            if (response.ok) {
                setModalType('success');
                setModalOpen(true);
                setFormValues({
                    name: '',
                    email: '',
                    phone: '',
                    projectType: '',
                    message: '',
                });
            } else {
                setModalType('error');
                setModalOpen(true);
            }
        } catch (error) {
            setModalType('error');
            setModalOpen(true);
            console.error('Error sending message:', error);
        }
    };

    const projectTypes = [
        'website',
        'ecommerce',
        'webapp',
        'mobileapp',
        'wordpress',
        'other',
    ];

    return (
        <section id="contact">
            <SEO
                title="Contact"
                description="Get in touch with Sk Sahed Ahmed for web & mobile app development. Email, WhatsApp, Messenger or use the contact form to discuss your project."
                url="https://sahedahmed.netlify.app/contact"
            />

            <h5>{t('contact_section.subtitle')}</h5>
            <h2>{t('contact_section.title')}</h2>

            <div className="container contact__container">
                {/* contact options */}
                <div data-aos="slide-right" className="contact__options">
                    <article className="contact__option">
                        <AiOutlineMail className="contact__option__icon" />
                        <h4>{t('contact.email')}</h4>
                        <h5>ssahed65@gmail.com</h5>
                        <a href="mailto: ssahed65@gmail.com">{t('contact_section.send_message')}</a>
                    </article>

                    <article className="contact__option">
                        <RiMessengerLine className="contact__option__icon" />
                        <h4>Messanger</h4>
                        <h5>Sk Sahed Ahmed</h5>
                        <a href="https://www.m.me/sahedstar" rel="noreferrer" target="_blank">
                            {t('contact_section.send_message')}
                        </a>
                    </article>

                    <article className="contact__option">
                        <BsWhatsapp className="contact__option__icon" />
                        <h4>WhatsApp</h4>
                        <h5>+8801616516753</h5>
                        <a
                            href="https://api.whatsapp.com/send?phone=8801616516753"
                            rel="noreferrer"
                            target="_blank"
                        >
                            {t('contact_section.send_message')}
                        </a>
                    </article>
                </div>

                {/* form section */}
                <form data-aos="slide-left" onSubmit={handleSubmit} noValidate>
                    <input
                        type="text"
                        name="name"
                        placeholder={t('contact_form.name')}
                        value={formValues.name}
                        onChange={handleChange}
                        className={errors.name ? 'form-error' : ''}
                        required
                    />
                    {errors.name && <small className="form-error-msg">{errors.name}</small>}

                    <input
                        type="email"
                        name="email"
                        placeholder={t('contact_form.email')}
                        value={formValues.email}
                        onChange={handleChange}
                        className={errors.email ? 'form-error' : ''}
                        required
                    />
                    {errors.email && <small className="form-error-msg">{errors.email}</small>}

                    <input
                        type="tel"
                        name="phone"
                        placeholder={t('contact_form.phone')}
                        value={formValues.phone}
                        onChange={handleChange}
                        className={errors.phone ? 'form-error' : ''}
                    />
                    {errors.phone && <small className="form-error-msg">{errors.phone}</small>}

                    <select
                        name="projectType"
                        value={formValues.projectType}
                        onChange={handleChange}
                        className={errors.projectType ? 'form-error' : ''}
                        required
                    >
                        <option value="" disabled>
                            {t('contact_form.project_type')}
                        </option>
                        {projectTypes.map((key) => (
                            <option key={key} value={t(`contact_form.project_types.${key}`)}>
                                {t(`contact_form.project_types.${key}`)}
                            </option>
                        ))}
                    </select>
                    {errors.projectType && (
                        <small className="form-error-msg">{errors.projectType}</small>
                    )}

                    <textarea
                        name="message"
                        rows="10"
                        cols="10"
                        placeholder={t('contact_form.message')}
                        value={formValues.message}
                        onChange={handleChange}
                        className={errors.message ? 'form-error' : ''}
                        required
                    ></textarea>
                    {errors.message && <small className="form-error-msg">{errors.message}</small>}

                    <button type="submit" className="btn btn-primary">
                        {t('contact_form.send')}
                    </button>
                </form>
            </div>

            <Modal
                open={modalOpen}
                type={modalType}
                message={
                    modalType === 'success'
                        ? t('contact_form.success')
                        : t('contact_form.error')
                }
                closeLabel={t('contact_form.modal_close')}
                onClose={() => setModalOpen(false)}
            />
        </section>
    );
};

export default Contact;