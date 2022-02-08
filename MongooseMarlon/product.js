const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/shopApp', {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
    .then(() => {
        console.log('connection open!');
    })
    .catch(err => {
        console.log('error!');
        console.log(err);
    })

const productSchema = new mongoose.Schema({

    name: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true,
        min: 0
    },

    onSale: {
        type: Boolean,
        default: false
    },

    categories: [String]

});

const Product = mongoose.model('Product', productSchema);

const bike = new Product({
    name: 'Bike Helmet',
    price: 29.50,
    categories: ['Cycling', 'Safety']
})
bike.save()
    .then(data => {
        console.log('It worked')
        console.log(data);
    })
    .catch(err => {
        console.log('error!');
        console.log(err);
    });