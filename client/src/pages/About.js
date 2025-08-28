import React from 'react';

const About = () => {
    return (
        <div className="about-page">
            {/* Hero Section */}
            <section className="about-hero">
                <div className="parallax-bg about-parallax">
                    <div className="hero-overlay">
                        <div className="container">
                            <h1 className="hero-title">About Our Perfume Journey</h1>
                            <p className="hero-subtitle">Crafting memories through exquisite fragrances since 1985</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Story Section */}
            <section className="story-section">
                <div className="container">
                    <div className="story-content">
                        <div className="story-text">
                            <h2>Our Story</h2>
                            <p>
                                Founded with a passion for capturing life's most precious moments in a bottle,
                                our perfume shop has been a beacon of luxury and elegance for over three decades.
                                We believe that fragrance is more than just a scent – it's a memory, an emotion,
                                a piece of your identity.
                            </p>
                            <p>
                                Our carefully curated collection features the world's most prestigious brands
                                alongside hidden gems from boutique perfumers. Each fragrance tells a story,
                                and we're here to help you find yours.
                            </p>
                        </div>
                        <div className="story-image">
                            <img
                                src="https://images.unsplash.com/photo-1594736797933-d0401ba2fe65?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80"
                                alt="Perfume bottles in elegant display"
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* Values Section */}
            <section className="values-section">
                <div className="container">
                    <h2 className="section-title">Our Values</h2>
                    <div className="values-grid">
                        <div className="value-card">
                            <div className="value-icon">🌟</div>
                            <h3>Quality</h3>
                            <p>We source only the finest fragrances from renowned perfumers worldwide, ensuring every bottle meets our exacting standards.</p>
                        </div>
                        <div className="value-card">
                            <div className="value-icon">💝</div>
                            <h3>Authenticity</h3>
                            <p>Every product in our collection is 100% authentic, backed by our guarantee and direct relationships with brands.</p>
                        </div>
                        <div className="value-card">
                            <div className="value-icon">🎯</div>
                            <h3>Expertise</h3>
                            <p>Our fragrance consultants have years of experience helping customers discover their perfect scent match.</p>
                        </div>
                        <div className="value-card">
                            <div className="value-icon">🌸</div>
                            <h3>Passion</h3>
                            <p>We live and breathe fragrance, sharing our passion and knowledge to enhance your perfume journey.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Team Section */}
            <section className="team-section">
                <div className="container">
                    <h2 className="section-title">Meet Our Team</h2>
                    <div className="team-grid">
                        <div className="team-member">
                            <div className="member-image">
                                <img
                                    src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&q=80"
                                    alt="Sarah Johnson"
                                />
                            </div>
                            <h3>Sarah Johnson</h3>
                            <p className="member-role">Founder & Master Perfumer</p>
                            <p>With over 20 years in the fragrance industry, Sarah brings unparalleled expertise to our collection curation.</p>
                        </div>
                        <div className="team-member">
                            <div className="member-image">
                                <img
                                    src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&q=80"
                                    alt="David Chen"
                                />
                            </div>
                            <h3>David Chen</h3>
                            <p className="member-role">Senior Fragrance Consultant</p>
                            <p>David's passion for niche fragrances and exceptional customer service makes him a favorite among our clients.</p>
                        </div>
                        <div className="team-member">
                            <div className="member-image">
                                <img
                                    src="https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&q=80"
                                    alt="Emily Rodriguez"
                                />
                            </div>
                            <h3>Emily Rodriguez</h3>
                            <p className="member-role">Customer Experience Manager</p>
                            <p>Emily ensures every customer receives personalized attention and finds their perfect fragrance match.</p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default About;
