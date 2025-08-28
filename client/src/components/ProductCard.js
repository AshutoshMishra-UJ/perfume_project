import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const ProductCard = ({ product }) => {
  const navigate = useNavigate();
  const [imageError, setImageError] = useState(false);

  const handleCardClick = () => {
    navigate(`/product/${product._id}`);
  };

  // Map product names to beautiful perfume images with better, more reliable URLs
  const getProductImage = (productName) => {
    const imageMap = {
      "Chanel No. 5": "https://images.unsplash.com/photo-1594736797933-d0401ba2fe65?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      "Dior Sauvage": "https://images.unsplash.com/photo-1541643600914-78b084683601?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      "Tom Ford Black Orchid": "https://images.unsplash.com/photo-1563170351-be82bc888aa4?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      "Viktor & Rolf Flowerbomb": "https://images.unsplash.com/photo-1615634260167-c8cdede054de?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      "Creed Aventus": "https://images.unsplash.com/photo-1588405748880-12d1d2a59d75?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      "Yves Saint Laurent Black Opium": "https://images.unsplash.com/photo-1592945403244-b3fbafd7f539?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      "Giorgio Armani Acqua di Gio": "https://images.unsplash.com/photo-1587017539504-67cfbddac569?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      "Versace Bright Crystal": "https://images.unsplash.com/photo-1520637836862-4d197d17c55a?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      "Dolce & Gabbana Light Blue": "https://images.unsplash.com/photo-1571875257727-256c39da42af?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
    };

    return imageMap[productName] || "https://images.unsplash.com/photo-1594736797933-d0401ba2fe65?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80";
  };

  const handleImageError = () => {
    setImageError(true);
  };

  // Determine category based on product name for better branding
  const getProductCategory = (productName) => {
    const womenFragrances = ["Chanel No. 5", "Viktor & Rolf Flowerbomb", "Yves Saint Laurent Black Opium", "Versace Bright Crystal"];
    const menFragrances = ["Dior Sauvage", "Creed Aventus", "Giorgio Armani Acqua di Gio"];
    const unisexFragrances = ["Tom Ford Black Orchid", "Dolce & Gabbana Light Blue"];

    if (womenFragrances.includes(productName)) return "Women's Fragrance";
    if (menFragrances.includes(productName)) return "Men's Fragrance";
    if (unisexFragrances.includes(productName)) return "Unisex Fragrance";
    return "Premium Collection";
  };

  return (
    <div className="product-card" onClick={handleCardClick}>
      <div className="product-image">
        {!imageError ? (
          <img
            src={getProductImage(product.name)}
            alt={product.name}
            className="product-img"
            onError={handleImageError}
            loading="lazy"
          />
        ) : (
          <div className="product-img-fallback">
            <div className="fallback-icon">🧴</div>
            <div className="fallback-text">{product.name}</div>
          </div>
        )}
        <div className="product-overlay">
          <div className="overlay-content">
            <span className="view-details">View Details</span>
            <div className="quick-actions">
              <button className="quick-btn favorite" onClick={(e) => e.stopPropagation()}>♡</button>
              <button className="quick-btn compare" onClick={(e) => e.stopPropagation()}>⚖</button>
            </div>
          </div>
        </div>
      </div>
      <div className="product-info">
        <div className="product-brand">{getProductCategory(product.name)}</div>
        <h3 className="product-name">{product.name}</h3>
        <p className="product-description">{product.description}</p>
        <div className="product-footer">
          <div className="product-price">${product.price}</div>
          <div className="product-rating">
            <span className="stars">★★★★★</span>
            <span className="rating-count">(4.8)</span>
          </div>
        </div>
        <button className="add-to-cart-btn" onClick={(e) => e.stopPropagation()}>
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
