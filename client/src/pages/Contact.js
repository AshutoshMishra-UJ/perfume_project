import React, { useState } from 'react';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
    });

    const [isSubmitted, setIsSubmitted] = useState(false);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Here you would typically send the form data to your backend
        console.log('Form submitted:', formData);
        setIsSubmitted(true);

        // Reset form after submission
        setTimeout(() => {
            setFormData({
                name: '',
                email: '',
                subject: '',
                message: ''
            });
            setIsSubmitted(false);
        }, 3000);
    };

    return (
        <div className="contact-page">
            {/* Hero Section */}
            <section className="contact-hero">
                <div className="parallax-bg contact-parallax">
                    <div className="hero-overlay">
                        <div className="container">
                            <h1 className="hero-title">Get In Touch</h1>
                            <p className="hero-subtitle">We'd love to hear from you. Send us a message and we'll respond as soon as possible.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Contact Content */}
            <section className="contact-content">
                <div className="container">
                    <div className="contact-grid">
                        {/* Contact Form */}
                        <div className="contact-form-section">
                            <h2>Send us a Message</h2>
                            {isSubmitted ? (
                                <div className="success-message">
                                    <div className="success-icon">✓</div>
                                    <h3>Thank you for your message!</h3>
                                    <p>We'll get back to you within 24 hours.</p>
                                </div>
                            ) : (
                                <form className="contact-form" onSubmit={handleSubmit}>
                                    <div className="form-row">
                                        <div className="form-group">
                                            <label htmlFor="name">Full Name *</label>
                                            <input
                                                type="text"
                                                id="name"
                                                name="name"
                                                value={formData.name}
                                                onChange={handleInputChange}
                                                required
                                            />
                                        </div>
                                        <div className="form-group">
                                            <label htmlFor="email">Email Address *</label>
                                            <input
                                                type="email"
                                                id="email"
                                                name="email"
                                                value={formData.email}
                                                onChange={handleInputChange}
                                                required
                                            />
                                        </div>
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="subject">Subject *</label>
                                        <input
                                            type="text"
                                            id="subject"
                                            name="subject"
                                            value={formData.subject}
                                            onChange={handleInputChange}
                                            required
                                        />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="message">Message *</label>
                                        <textarea
                                            id="message"
                                            name="message"
                                            rows="6"
                                            value={formData.message}
                                            onChange={handleInputChange}
                                            required
                                        ></textarea>
                                    </div>
                                    <button type="submit" className="submit-btn">
                                        Send Message
                                    </button>
                                </form>
                            )}
                        </div>

                        {/* Contact Information */}
                        <div className="contact-info-section">
                            <h2>Contact Information</h2>
                            <div className="contact-info">
                                <div className="info-item">
                                    <div className="info-icon">📍</div>
                                    <div className="info-content">
                                        <h3>Visit Our Store</h3>
                                        <p>123 Luxury Avenue<br />Beverly Hills, CA 90210<br />United States</p>
                                    </div>
                                </div>
                                <div className="info-item">
                                    <div className="info-icon">📞</div>
                                    <div className="info-content">
                                        <h3>Call Us</h3>
                                        <p>+1 (555) 123-4567</p>
                                        <p className="info-note">Mon-Sat: 10AM-8PM PST</p>
                                    </div>
                                </div>
                                <div className="info-item">
                                    <div className="info-icon">✉️</div>
                                    <div className="info-content">
                                        <h3>Email Us</h3>
                                        <p>info@perfumeshop.com</p>
                                        <p>support@perfumeshop.com</p>
                                    </div>
                                </div>
                                <div className="info-item">
                                    <div className="info-icon">🕒</div>
                                    <div className="info-content">
                                        <h3>Store Hours</h3>
                                        <p>Monday - Friday: 10AM - 8PM<br />
                                            Saturday: 10AM - 6PM<br />
                                            Sunday: 12PM - 5PM</p>
                                    </div>
                                </div>
                            </div>

                            {/* Social Media */}
                            <div className="social-media">
                                <h3>Follow Us</h3>
                                <div className="social-links">
                                    <a href="#" className="social-link facebook">📘</a>
                                    <a href="#" className="social-link instagram">📷</a>
                                    <a href="#" className="social-link twitter">🐦</a>
                                    <a href="#" className="social-link youtube">📺</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Map Section */}
            <section className="map-section">
                <div className="container">
                    <h2>Find Us</h2>
                    <div className="map-container">
                        <div className="map-placeholder">
                            <div className="map-icon">🗺️</div>
                            <p>Interactive Map</p>
                            <p className="map-note">123 Luxury Avenue, Beverly Hills, CA 90210</p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Contact;
