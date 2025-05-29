require('dotenv').config();
console.log('Mongo URI:', process.env.MONGO_URI);
const express = require('express');
const mongoose = require('mongoose');

const userRoutes = require('./routes/userRoutes');
const orderRoutes = require('./routes/orderRoutes');
const productRoutes = require('./routes/productRoutes');
const paymentRoutes = require('./routes/paymentRoutes');
const shippingRoutes = require('./routes/shippingRoutes');

const app = express();
app.use(express.json());

// Routes
app.use('/api/users', userRoutes);
app.use('/api/orders', orderRoutes);
app.use('/api/products', productRoutes);
app.use('/api/payments', paymentRoutes);
app.use('/api/shipping', shippingRoutes);

// MongoDB Connection
mongoose.connect('mongodb+srv://Tumisho_Lethabo:DBD_PROJ_381@ecommerce-cluster.4nb3ndy.mongodb.net/eCommerceStore_DB?retryWrites=true&w=majority&appName=eCommerce-Cluster&tls=true')
  .then(() => {
    console.log('MongoDB connected');
    app.listen(3000, () => console.log('Server running on http://localhost:3000'));
  })
  .catch((err) => console.error('Connection error:', err));

