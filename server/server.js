const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// MongoDB connection
const MONGODB_URI = process.env.MONGODB_URI || 'mongodb://localhost:27017/perfume-shop';

mongoose.connect(MONGODB_URI)
  .then(() => console.log('Connected to MongoDB'))
  .catch(err => console.error('MongoDB connection error:', err));// Product Schema
const productSchema = new mongoose.Schema({
  name: { type: String, required: true },
  description: { type: String, required: true },
  fullDescription: { type: String, required: true },
  price: { type: Number, required: true },
  sizes: [{ type: String }],
  createdAt: { type: Date, default: Date.now }
});

const Product = mongoose.model('Product', productSchema);

// Review Schema
const reviewSchema = new mongoose.Schema({
  productId: { type: mongoose.Schema.Types.ObjectId, ref: 'Product', required: true },
  name: { type: String, required: true },
  rating: { type: Number, required: true, min: 1, max: 5 },
  comment: { type: String, required: true },
  createdAt: { type: Date, default: Date.now }
});

const Review = mongoose.model('Review', reviewSchema);

// Initialize sample data
const initializeData = async () => {
  try {
    const productCount = await Product.countDocuments();
    if (productCount === 0) {
      const sampleProducts = [
        {
          name: "Chanel No. 5",
          description: "The world's most iconic fragrance",
          fullDescription: "Chanel No. 5 is a timeless classic that has captivated women for generations. This sophisticated fragrance opens with fresh aldehydes and bergamot, leading to a heart of ylang-ylang and rose, and settling into a warm base of vanilla and sandalwood. Perfect for any occasion, this legendary scent embodies elegance and femininity.",
          price: 129.99,
          sizes: ["30ml", "50ml", "100ml"]
        },
        {
          name: "Dior Sauvage",
          description: "Fresh and masculine cologne",
          fullDescription: "Dior Sauvage is a wildly fresh composition that captures the raw spirit of nature. Built around the noble ambroxan, this fragrance reveals fresh notes of bergamot and pepper, enhanced by lavender and geranium. The dry down features rich ambroxan and woody notes that create an addictive trail.",
          price: 99.99,
          sizes: ["60ml", "100ml", "200ml"]
        },
        {
          name: "Tom Ford Black Orchid",
          description: "Luxurious and mysterious fragrance",
          fullDescription: "Tom Ford Black Orchid is a luxurious and sensual fragrance that captures the rich, dark, and velvety facets of the orchid flower. This modern fragrance is both daring and dramatic, featuring notes of black truffle, ylang-ylang, bergamot, and effervescent fruity notes. The heart reveals the orchid accord along with spicy notes and French jasmine.",
          price: 159.99,
          sizes: ["30ml", "50ml", "100ml"]
        },
        {
          name: "Viktor & Rolf Flowerbomb",
          description: "Explosive floral bouquet",
          fullDescription: "Flowerbomb is the explosive encounter of an exceptional bouquet freed from conventions. This surprising Eau de Parfum reveals a profusion of flowers that makes everything more beautiful. Sambac jasmine, centifolia rose, catleya orchid and ballerina freesia bloom on a base of patchouli. An addictive fragrance for the woman who dares to dream bigger.",
          price: 119.99,
          sizes: ["30ml", "50ml", "100ml"]
        },
        {
          name: "Creed Aventus",
          description: "Bold and contemporary fragrance",
          fullDescription: "Creed Aventus celebrates strength, power and vision. This bold fragrance opens with blackcurrant, bergamot, apple and pineapple. The heart features rose, dry birch, Moroccan jasmine and patchouli, while the base is made of musk, oakmoss, ambergris and vanilla. A scent for the modern conqueror.",
          price: 189.99,
          sizes: ["50ml", "100ml", "120ml"]
        },
        {
          name: "Yves Saint Laurent Black Opium",
          description: "Addictive and seductive fragrance",
          fullDescription: "Black Opium is an intoxicating fragrance that combines coffee, vanilla, and white flowers for an addictive trail. This modern interpretation of femininity is both mysterious and audacious, perfect for the woman who loves to make a statement.",
          price: 109.99,
          sizes: ["30ml", "50ml", "90ml"]
        },
        {
          name: "Giorgio Armani Acqua di Gio",
          description: "Aquatic and refreshing scent",
          fullDescription: "Acqua di Gio captures the essence of the Mediterranean coast with its fresh, aquatic notes. This timeless fragrance opens with bergamot and neroli, leading to a heart of marine notes and jasmine, finishing with white musk and cedar.",
          price: 89.99,
          sizes: ["50ml", "100ml", "200ml"]
        },
        {
          name: "Versace Bright Crystal",
          description: "Luminous and floral fragrance",
          fullDescription: "Bright Crystal is a luminous fragrance that captures the essence of a shining, sensual woman. With notes of yuzu, pomegranate, peony, magnolia, and amber, this scent is both fresh and sophisticated.",
          price: 79.99,
          sizes: ["30ml", "50ml", "90ml"]
        },
        {
          name: "Dolce & Gabbana Light Blue",
          description: "Mediterranean freshness",
          fullDescription: "Light Blue evokes the joy of life and seduction of the Mediterranean. This fresh fragrance combines Sicilian lemon, apple, cedar, and white rose for a scent that's both playful and sophisticated.",
          price: 94.99,
          sizes: ["25ml", "50ml", "100ml"]
        }
      ];

      await Product.insertMany(sampleProducts);
      console.log('Sample products created');

      // Create sample reviews
      const products = await Product.find();
      const sampleReviews = [
        {
          productId: products[0]._id,
          name: "Sarah Johnson",
          rating: 5,
          comment: "Absolutely love this perfume! It's elegant and long-lasting. Gets compliments everywhere I go."
        },
        {
          productId: products[0]._id,
          name: "Emma Davis",
          rating: 4,
          comment: "Classic and timeless. A bit strong for daily wear but perfect for special occasions."
        },
        {
          productId: products[1]._id,
          name: "Michael Chen",
          rating: 5,
          comment: "Fresh and masculine. Perfect for both office and casual wear. Highly recommend!"
        },
        {
          productId: products[2]._id,
          name: "Isabella Rodriguez",
          rating: 5,
          comment: "Mysterious and luxurious. This perfume makes me feel confident and sophisticated."
        },
        {
          productId: products[3]._id,
          name: "Sophie Martin",
          rating: 4,
          comment: "Beautiful floral scent that's not too overwhelming. Perfect for spring and summer."
        }
      ];

      await Review.insertMany(sampleReviews);
      console.log('Sample reviews created');
    }
  } catch (error) {
    console.error('Error initializing data:', error);
  }
};

// Initialize data on server start
initializeData();

// Routes

// Get all products
app.get('/api/products', async (req, res) => {
  try {
    const products = await Product.find();
    res.json(products);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching products', error });
  }
});

// Get single product
app.get('/api/products/:id', async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);
    if (!product) {
      return res.status(404).json({ message: 'Product not found' });
    }
    res.json(product);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching product', error });
  }
});

// Get reviews for a product
app.get('/api/products/:id/reviews', async (req, res) => {
  try {
    const reviews = await Review.find({ productId: req.params.id }).sort({ createdAt: -1 });
    res.json(reviews);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching reviews', error });
  }
});

// Add a review
app.post('/api/products/:id/reviews', async (req, res) => {
  try {
    const { name, rating, comment } = req.body;
    const review = new Review({
      productId: req.params.id,
      name,
      rating,
      comment
    });
    await review.save();
    res.status(201).json(review);
  } catch (error) {
    res.status(500).json({ message: 'Error adding review', error });
  }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
