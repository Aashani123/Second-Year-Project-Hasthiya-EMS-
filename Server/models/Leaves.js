const mongoose = require("mongoose");

const Schema = new mongoose.Schema({
    employee: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },
    reason: {
        type: String,        
        required: [true, "Reason cannot be empty"],
    },
    Type: {
        type: Boolean,
        required: [true, "Leave type cannot be empty"],
    },
    reportPerson:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },
    status: {
        type: Boolean,
        default: false,
    },
    canceled: {
        type: Boolean,
        default: false,
    },
    leaveFrom:{
        type: Date,
        required: [true, "Leave From cannot be empty"],
    },
    leaveTo:{
        type: Date,
        required: [true, "Leave To cannot be empty"],
    },
    isFullday: {
        type: Boolean,
        default: false,
    },
    isOneday: {
        type: Boolean,
        default: false,
    },
},{ timestamps: true });


module.exports = mongoose.model('Leaves', Schema);