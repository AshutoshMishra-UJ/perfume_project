import React, { useEffect, useState } from 'react';

const Banner = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section className="banner">
      <div
        className="parallax-bg"
        style={{ transform: `translateY(${scrollY * 0.5}px)` }}
      >
        <img
          src="https://images.unsplash.com/photo-1541643600914-78b084683601?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2000&q=80"
          alt="Luxury perfume collection"
          className="banner-image"
        />
      </div>
      <div className="banner-overlay">
        <div className="container">
          <div className="banner-content">
            <h1 className="banner-title">Discover Your Signature Scent</h1>
            <p className="banner-subtitle">Explore our premium collection of luxury perfumes from around the world</p>
            <div className="banner-features">
              <div className="feature">
                <span className="feature-icon">✨</span>
                <span>Premium Quality</span>
              </div>
              <div className="feature">
                <span className="feature-icon">🚚</span>
                <span>Free Shipping</span>
              </div>
              <div className="feature">
                <span className="feature-icon">💝</span>
                <span>Gift Wrapping</span>
              </div>
            </div>
            <a href="#products" className="cta-button">
              Shop Collection
              <span className="button-arrow">→</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
