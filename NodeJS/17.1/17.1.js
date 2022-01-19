const mongoose = require('mongoose');
const validator = require('validator')

mongoose.connect('mongodb://127.0.0.1:27017/products', {})

const Product = mongoose.model('Product', {
    name: {
        type: String,
        required: true,
        unique: true
    },
    category: {
        type: String,
        required: true,
    },
    isActive: {
        type: Boolean,
    },
    details: {
        description: {
            type: String,
            required: true,
            minLength: 10,
        },
        price: {
            type: Number,
            required: true,
            validate(value) {
                if (value < 0) {
                    throw new Error("Must be a positive number");
                }
            }
        },
        discount: {
            type: Number,
            validate(value) {
                if (value < 0) {
                    throw new Error("Must be a positive number");
                }
            }
        },
        images: {
            type: [String],
            minItems: 2,
        },
        phoneNumber: {
            type: String,
            required: true,
            minLength: 9,
            maxLength: 10,
            validate(value) {
                if (!validator.isMobilePhone(value, 'he-IL')){
                    throw new Error("Please enter a valid phone number");
                }
            }
        },
        dateAdded: {
            type: Number,
            default: new Date()
        },

    },
})

const products1 = new Product({
    name: "Chicken Breast",
    category: "Meat Products",
    isActive: true,
    details: {
        description: "Chicken Breast",
        price: 15,
        phoneNumber: '0501234567'
    }
})
const products2 = new Product({
    name: "Fire Poker",
    category: "Fireplace Accessories",
    isActive: true,
    details: {
        description: "Fire Poker",
        price: 30,
        phoneNumber: '0541234567'
    }
})
const products3 = new Product({
    name: "Electric Taser",
    category: "Self Defense",
    isActive: true,
    details: {
        description: "Electric Taser",
        price: 300,
        phoneNumber: '0521234567'
    }
})

products1.save().then(() => {
    console.log(products1);
}).catch((error) => {
    console.log('Error', error);
})
products2.save().then(() => {
    console.log(products2);
}).catch((error) => {
    console.log('Error', error);
})
products3.save().then(() => {
    console.log(products3);
}).catch((error) => {
    console.log('Error', error);
})