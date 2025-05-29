const mongoose = require('mongoose');
const Order = require('../models/Order'); // Ensure path is correct

// Connect to DB
mongoose.connect('mongodb+srv://Tumisho_Lethabo:DBD_PROJ_381@ecommerce-cluster.4nb3ndy.mongodb.net/eCommerceStore_DB?retryWrites=true&w=majority&appName=eCommerce-Cluster&tls=true', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(async () => {
  console.log('Connected to MongoDB');

  const bulkOrders = [];
  for (let i = 1; i <= 1000; i++) {
    bulkOrders.push({
      _id: `order_${i}`,
      userId: 'user_001',
      productId: 'prod_001',
      quantity: Math.floor(Math.random() * 5) + 1,
      price: 99.99,
      status: 'Pending',
      placedAt: new Date()
    });
  }

  try {
    await Order.insertMany(bulkOrders);
    console.log('Inserted 1000 test orders');
  } catch (err) {
    console.error('Error inserting orders:', err);
  } finally {
    mongoose.connection.close();
  }
}).catch(err => console.error('DB connection error:', err));

