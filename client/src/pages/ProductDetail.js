import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const ProductDetail = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [reviews, setReviews] = useState([]);
  const [selectedSize, setSelectedSize] = useState('');
  const [newReview, setNewReview] = useState({ name: '', rating: 5, comment: '' });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Map product names to beautiful perfume images with better, more reliable URLs
  const getProductImage = (productName) => {
    const imageMap = {
      "Chanel No. 5": "https://images.unsplash.com/photo-1594736797933-d0401ba2fe65?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      "Dior Sauvage": "https://images.unsplash.com/photo-1541643600914-78b084683601?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      "Tom Ford Black Orchid": "https://images.unsplash.com/photo-1563170351-be82bc888aa4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      "Viktor & Rolf Flowerbomb": "https://images.unsplash.com/photo-1615634260167-c8cdede054de?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      "Creed Aventus": "https://images.unsplash.com/photo-1588405748880-12d1d2a59d75?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      "Yves Saint Laurent Black Opium": "https://images.unsplash.com/photo-1592945403244-b3fbafd7f539?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      "Giorgio Armani Acqua di Gio": "https://images.unsplash.com/photo-1587017539504-67cfbddac569?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      "Versace Bright Crystal": "https://images.unsplash.com/photo-1520637836862-4d197d17c55a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      "Dolce & Gabbana Light Blue": "https://images.unsplash.com/photo-1571875257727-256c39da42af?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    };

    return imageMap[productName] || "https://images.unsplash.com/photo-1594736797933-d0401ba2fe65?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80";
  };

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const productResponse = await axios.get(`/api/products/${id}`);
        setProduct(productResponse.data);

        const reviewsResponse = await axios.get(`/api/products/${id}/reviews`);
        setReviews(reviewsResponse.data);

        setLoading(false);
      } catch (err) {
        setError('Failed to load product details');
        setLoading(false);
      }
    };

    fetchProduct();
  }, [id]);

  const handleReviewSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(`/api/products/${id}/reviews`, newReview);
      setReviews([...reviews, response.data]);
      setNewReview({ name: '', rating: 5, comment: '' });
    } catch (err) {
      console.error('Failed to submit review:', err);
    }
  };

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: product.name,
        text: product.description,
        url: window.location.href,
      });
    } else {
      navigator.clipboard.writeText(window.location.href);
      alert('Product link copied to clipboard!');
    }
  };

  if (loading) {
    return (
      <div className="loading-container">
        <div className="loading-spinner"></div>
        <p>Loading product details...</p>
      </div>
    );
  }

  if (error) {
    return <div className="error">{error}</div>;
  }

  if (!product) {
    return <div className="error">Product not found</div>;
  }

  return (
    <div className="product-detail">
      <div className="container">
        <div className="product-detail-content">
          <div className="product-gallery">
            <div className="main-image">
              <img
                src={getProductImage(product.name)}
                alt={product.name}
                className="main-product-image"
              />
            </div>
            <div className="thumbnail-images">
              <div className="thumbnail">
                <img
                  src={getProductImage(product.name)}
                  alt={`${product.name} view 1`}
                />
              </div>
              <div className="thumbnail">
                <img
                  src="https://images.unsplash.com/photo-1541643600914-78b084683601?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80"
                  alt={`${product.name} view 2`}
                />
              </div>
              <div className="thumbnail">
                <img
                  src="https://images.unsplash.com/photo-1563170351-be82bc888aa4?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80"
                  alt={`${product.name} view 3`}
                />
              </div>
              <div className="thumbnail">
                <img
                  src="https://images.unsplash.com/photo-1594736797933-d0401ba2fe65?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80"
                  alt={`${product.name} view 4`}
                />
              </div>
            </div>
          </div>

          <div className="product-details">
            <div className="product-brand">Premium Collection</div>
            <h1 className="product-title">{product.name}</h1>
            <div className="product-rating">
              <span className="stars">★★★★★</span>
              <span className="rating-text">(4.8 out of 5 stars)</span>
              <span className="review-count">({reviews.length} reviews)</span>
            </div>
            <div className="product-price-detail">${product.price}</div>
            <p className="product-full-description">{product.fullDescription}</p>

            <div className="sizes-section">
              <h3 className="sizes-title">Available Sizes:</h3>
              <div className="sizes">
                {product.sizes.map(size => (
                  <div
                    key={size}
                    className={`size-option ${selectedSize === size ? 'selected' : ''}`}
                    onClick={() => setSelectedSize(size)}
                  >
                    {size}
                  </div>
                ))}
              </div>
            </div>

            <div className="share-section">
              <button className="share-button" onClick={handleShare}>
                Share Product
              </button>
            </div>
          </div>
        </div>

        <div className="reviews-section">
          <h2 className="reviews-title">Customer Reviews</h2>

          <form className="review-form" onSubmit={handleReviewSubmit}>
            <h3>Add Your Review</h3>
            <div className="form-group">
              <label htmlFor="name">Name:</label>
              <input
                type="text"
                id="name"
                value={newReview.name}
                onChange={(e) => setNewReview({ ...newReview, name: e.target.value })}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="rating">Rating:</label>
              <select
                id="rating"
                value={newReview.rating}
                onChange={(e) => setNewReview({ ...newReview, rating: parseInt(e.target.value) })}
              >
                <option value={5}>⭐⭐⭐⭐⭐ (5 stars)</option>
                <option value={4}>⭐⭐⭐⭐ (4 stars)</option>
                <option value={3}>⭐⭐⭐ (3 stars)</option>
                <option value={2}>⭐⭐ (2 stars)</option>
                <option value={1}>⭐ (1 star)</option>
              </select>
            </div>
            <div className="form-group">
              <label htmlFor="comment">Comment:</label>
              <textarea
                id="comment"
                value={newReview.comment}
                onChange={(e) => setNewReview({ ...newReview, comment: e.target.value })}
                required
              />
            </div>
            <button type="submit" className="submit-button">Submit Review</button>
          </form>

          <div className="reviews-list">
            {reviews.map(review => (
              <div key={review._id} className="review-item">
                <div className="review-header">
                  <span className="reviewer-name">{review.name}</span>
                  <span className="review-rating">
                    {'⭐'.repeat(review.rating)}
                  </span>
                </div>
                <p className="review-comment">{review.comment}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
