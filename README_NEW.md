# 🌸 Luxury Perfume Shop Website

A beautiful, responsive perfume e-commerce website with modern UI, parallax effects, and enhanced user experience. Built with React.js frontend and Node.js/MongoDB backend.

## ✨ Features

### Enhanced UI & Design
- **Modern Design**: Beautiful glass-morphism effects and gradient backgrounds
- **Parallax Effects**: Smooth scrolling parallax backgrounds on hero sections
- **Responsive Design**: Fully responsive across all devices (mobile, tablet, desktop)
- **Beautiful Images**: High-quality perfume images from Unsplash
- **Smooth Animations**: CSS animations and transitions for better UX

### Pages & Functionality
- **Homepage**: Hero banner with parallax, featured products, categories, and newsletter
- **Product Detail**: Enhanced product pages with image galleries and reviews
- **About Page**: Company story, values, and team information
- **Contact Page**: Contact form, business information, and interactive map
- **Product Reviews**: Customer review system with ratings

### Product Features
- **Product Cards**: Enhanced cards with hover effects and quick actions
- **Product Gallery**: Multiple product images with thumbnail navigation
- **Size Selection**: Interactive size options for each product
- **Reviews & Ratings**: Customer feedback system
- **Social Sharing**: Share products on social media

### Technical Features
- **React Router**: Client-side routing for seamless navigation
- **MongoDB Integration**: Product and review data storage
- **RESTful API**: Clean API endpoints for data management
- **Error Handling**: Comprehensive error handling and loading states

## 🚀 Quick Start

### Prerequisites
- Node.js (v14 or higher)
- MongoDB (local installation or MongoDB Atlas)
- Git

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd Perfume-Shop-Website-main
   ```

2. **Install all dependencies**
   ```bash
   npm run install-all
   ```

3. **Set up environment variables**
   Create a `.env` file in the server directory:
   ```env
   MONGODB_URI=mongodb://localhost:27017/perfume-shop
   PORT=5000
   ```

4. **Start the development servers**
   ```bash
   npm run dev
   ```

   This will start both the frontend (port 3000) and backend (port 5000) servers.

### Alternative: Start servers separately

**Backend (Server)**
```bash
cd server
npm install
npm start
```

**Frontend (Client)**
```bash
cd client
npm install
npm start
```

## 🛠 Project Structure

```
Perfume-Shop-Website-main/
├── client/                 # React frontend
│   ├── public/
│   ├── src/
│   │   ├── components/     # Reusable components
│   │   │   ├── Navbar.js
│   │   │   ├── Banner.js
│   │   │   └── ProductCard.js
│   │   ├── pages/          # Page components
│   │   │   ├── Homepage.js
│   │   │   ├── ProductDetail.js
│   │   │   ├── About.js
│   │   │   └── Contact.js
│   │   ├── App.js
│   │   ├── App.css
│   │   └── index.css       # Main styles
│   └── package.json
├── server/                 # Node.js backend
│   ├── server.js          # Main server file
│   └── package.json
├── package.json           # Root package.json
└── README.md
```

## 🎨 Design Features

### Color Palette
- **Primary**: #2c3e50 (Dark Blue-Gray)
- **Secondary**: #e74c3c (Red)
- **Accent**: #f39c12 (Orange)
- **Background**: #f8f9fa (Light Gray)

### Typography
- **Primary Font**: Inter, Segoe UI
- **Headings**: Bold, modern typography
- **Body**: Clean, readable text

### Responsive Breakpoints
- **Mobile**: < 768px
- **Tablet**: 768px - 1024px
- **Desktop**: > 1024px

## 📱 Mobile Responsiveness

The website is fully responsive with:
- Mobile-first approach
- Touch-friendly interface
- Optimized images for different screen sizes
- Collapsible navigation menu
- Readable typography on all devices

## 🌐 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## 🔧 Development Scripts

```bash
# Install all dependencies
npm run install-all

# Start both frontend and backend
npm run dev

# Start only backend
npm run server

# Start only frontend
npm run client

# Build for production
npm run build
```

## 📊 Sample Data

The application comes with pre-loaded sample data including:
- 9 Premium perfume products
- Product descriptions and prices
- Customer reviews and ratings
- Multiple size options for each product

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 📞 Support

For support and questions:
- Email: support@perfumeshop.com
- Website: [Perfume Shop](http://localhost:3000)

## 🙏 Acknowledgments

- Images provided by [Unsplash](https://unsplash.com)
- Icons and emojis for enhanced UI
- React and Node.js communities

---

**Made with ❤️ for perfume enthusiasts**
