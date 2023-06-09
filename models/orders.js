const { type } = require('express/lib/response');
const mongoose = require('mongoose');
const { Schema } = mongoose;

const OrderSchema = new Schema({
    username: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    },
    ordereditems: [
        {
            item: {
                type: Schema.Types.ObjectId,
                ref: 'Product'
            },
            quantity: Number
        }

    ],
    paymentamount: {
        type: Number,
        required: true
    }
});


module.exports = mongoose.model('Order', OrderSchema,'Order');