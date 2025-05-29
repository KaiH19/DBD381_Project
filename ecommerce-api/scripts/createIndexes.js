const mongoose = require('mongoose');
const Order = require('../models/Order');

mongoose.connect('mongodb+srv://Tumisho_Lethabo:DBD_PROJ_381@ecommerce-cluster.4nb3ndy.mongodb.net/eCommerceStore_DB?retryWrites=true&w=majority&appName=eCommerce-Cluster&tls=true', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(async () => {
  console.log('Connected to MongoDB');

  try {
    await Order.collection.createIndex({ userId: 1 });
    console.log('Index on userId created for Orders');
  } catch (err) {
    console.error('Failed to create index:', err);
  } finally {
    mongoose.connection.close();
  }
}).catch(err => console.error('DB connection error:', err));