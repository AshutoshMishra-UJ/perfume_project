# Perfume Shop - Full Stack Web Application

A modern full-stack perfume e-commerce website built with React frontend and Node.js/MongoDB backend.

## Features

### Frontend (React)
- **Responsive Navigation Bar** - Clean and modern navbar with company branding
- **Hero Banner** - Eye-catching call-to-action section encouraging users to explore collections
- **Product Grid** - Displays 5 featured perfumes with interactive product cards
- **Hover Effects** - Smooth animations and hover effects on product cards
- **Product Detail Pages** - Comprehensive product information with:
  - Image gallery with thumbnail navigation
  - Detailed product descriptions
  - Multiple size options
  - Social sharing functionality
  - Customer reviews system
- **Reviews System** - Users can read and add product reviews
- **Responsive Design** - Fully responsive across desktop, tablet, and mobile devices

### Backend (Node.js/MongoDB)
- **RESTful API** - Clean API endpoints for products and reviews
- **MongoDB Database** - Stores products and customer reviews
- **Sample Data** - Pre-populated with 5 luxury perfumes and sample reviews
- **CORS Support** - Configured for cross-origin requests
- **Error Handling** - Comprehensive error handling and validation

## Tech Stack

- **Frontend**: React 18, React Router DOM, Axios
- **Backend**: Node.js, Express.js, Mongoose
- **Database**: MongoDB
- **Styling**: Pure CSS with modern design principles

## Project Structure

```
perfume-shop/
├── client/                 # React frontend
│   ├── public/            # Public assets
│   ├── src/
│   │   ├── components/    # Reusable components
│   │   │   ├── Navbar.js
│   │   │   ├── Banner.js
│   │   │   └── ProductCard.js
│   │   ├── pages/         # Page components
│   │   │   ├── Homepage.js
│   │   │   └── ProductDetail.js
│   │   ├── App.js
│   │   ├── index.js
│   │   ├── index.css      # Global styles
│   │   └── App.css
│   └── package.json
├── server/                # Node.js backend
│   ├── server.js         # Main server file
│   ├── .env              # Environment variables
│   └── package.json
├── package.json          # Root package.json
└── README.md
```

## Installation & Setup

### Prerequisites
- Node.js (v14 or higher)
- MongoDB (local installation or MongoDB Atlas)
- npm or yarn

### Installation Steps

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd perfume-shop
   ```

2. **Install all dependencies**
   ```bash
   npm run install-all
   ```

3. **Set up environment variables**
   - Copy `.env` file in the server directory
   - Update MongoDB connection string if needed:
   ```
   MONGODB_URI=mongodb://localhost:27017/perfume-shop
   PORT=5000
   ```

4. **Start MongoDB**
   - Make sure MongoDB is running on your system
   - Default connection: `mongodb://localhost:27017/perfume-shop`

## Running the Application

### Development Mode (Recommended)
Run both frontend and backend concurrently:
```bash
npm run dev
```

### Individual Services

**Backend Server:**
```bash
npm run server
# Server runs on http://localhost:5000
```

**Frontend Client:**
```bash
npm run client  
# Client runs on http://localhost:3000
```

## API Endpoints

- `GET /api/products` - Get all products
- `GET /api/products/:id` - Get single product by ID
- `GET /api/products/:id/reviews` - Get reviews for a product
- `POST /api/products/:id/reviews` - Add a new review

## Sample Products

The application comes pre-loaded with 5 luxury perfumes:

1. **Chanel No. 5** - The world's most iconic fragrance
2. **Dior Sauvage** - Fresh and masculine cologne  
3. **Tom Ford Black Orchid** - Luxurious and mysterious fragrance
4. **Viktor & Rolf Flowerbomb** - Explosive floral bouquet
5. **Creed Aventus** - Bold and contemporary fragrance

## Features Implemented

✅ **Homepage Development**
- Responsive navigation bar
- Eye-catching call-to-action banner
- 5 product cards with images, names, descriptions, and prices
- Interactive hover effects on product cards
- Card redirection to product detail pages

✅ **Product Detail Pages**
- Full product information display
- Multiple product images gallery
- Available sizes selection
- Customer reviews section
- Social media share functionality

✅ **Technical Requirements**
- React frontend with responsive design
- Node.js backend with MongoDB database
- All data fetched from database (no hardcoded values)
- RESTful API architecture
- Error handling and loading states

## Browser Support

- Chrome (latest)
- Firefox (latest) 
- Safari (latest)
- Edge (latest)

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## License

This project is licensed under the MIT License.

## Contact

For questions or support, please contact the Perfume Shop development team.
