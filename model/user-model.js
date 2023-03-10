/* eslint-disable no-undef */
const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    Name: {
        type: String,
        required: true
    },
    Email: {
        type: String,
        required: true
    },
    Mobile: {
        type: String,
        required: true
    },
    Password: {
        type: String,
        required: true
    },
    block: {
        type: Boolean,
        default: false
    },
    coupon: {
        type: Array,
    },
    applyCoupon: {
        type: Boolean,
        default: false,
    },
    usedCoupon: {
        type: Array,
    },
    walletAmount: {
        type:Number,
        default:0
    },
})

module.exports = userModel = mongoose.model('userData', userSchema)