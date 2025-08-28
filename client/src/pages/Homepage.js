import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Banner from '../components/Banner';
import ProductCard from '../components/ProductCard';

const Homepage = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get('/api/products');
        setProducts(response.data);
        setLoading(false);
      } catch (err) {
        setError('Failed to load products');
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  if (loading) {
    return (
      <div className="loading-container">
        <div className="loading-spinner"></div>
        <p>Loading products...</p>
      </div>
    );
  }

  if (error) {
    return <div className="error">{error}</div>;
  }

  return (
    <div className="homepage">
      <Banner />

      {/* Featured Categories */}
      <section className="categories-section">
        <div className="container">
          <h2 className="section-title">Shop by Category</h2>
          <div className="categories-grid">
            <div className="category-card">
              <img
                src="https://images.unsplash.com/photo-1563170351-be82bc888aa4?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
                alt="Women's Perfumes"
              />
              <div className="category-overlay">
                <h3>Women's Fragrances</h3>
                <p>Elegant & Sophisticated</p>
              </div>
            </div>
            <div className="category-card">
              <img
                src="https://images.unsplash.com/photo-1563170351-be82bc888aa4?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
                alt="Men's Perfumes"
              />
              <div className="category-overlay">
                <h3>Men's Fragrances</h3>
                <p>Bold & Masculine</p>
              </div>
            </div>
            <div className="category-card">
              <img
                src="https://images.unsplash.com/photo-1563170351-be82bc888aa4?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
                alt="Unisex Perfumes"
              />
              <div className="category-overlay">
                <h3>Unisex Fragrances</h3>
                <p>For Everyone</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section id="products" className="products-section">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Featured Perfumes</h2>
            <p className="section-subtitle">Discover our carefully curated collection of luxury fragrances</p>
          </div>
          <div className="products-grid">
            {products.map(product => (
              <ProductCard key={product._id} product={product} />
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="features-section">
        <div className="container">
          <div className="features-grid">
            <div className="feature-item">
              <div className="feature-icon">🚚</div>
              <h3>Free Shipping</h3>
              <p>Free shipping on orders over $50 worldwide</p>
            </div>
            <div className="feature-item">
              <div className="feature-icon">🔒</div>
              <h3>Secure Payment</h3>
              <p>Your payment information is safe and secure</p>
            </div>
            <div className="feature-item">
              <div className="feature-icon">↩️</div>
              <h3>Easy Returns</h3>
              <p>30-day return policy for your peace of mind</p>
            </div>
            <div className="feature-item">
              <div className="feature-icon">⭐</div>
              <h3>Premium Quality</h3>
              <p>100% authentic products from trusted brands</p>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="newsletter-section">
        <div className="container">
          <div className="newsletter-content">
            <h2>Stay Updated</h2>
            <p>Subscribe to our newsletter for exclusive offers and new arrivals</p>
            <div className="newsletter-form">
              <input
                type="email"
                placeholder="Enter your email address"
                className="newsletter-input"
              />
              <button className="newsletter-btn">Subscribe</button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Homepage;
