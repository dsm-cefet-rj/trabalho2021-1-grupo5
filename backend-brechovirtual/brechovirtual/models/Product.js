const normalize = require('normalize-mongoose');
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const productSchema = new Schema({
    name: {
        type: String,
		required: true,
    },
    images: {
        type: [String],
		required: true,
    },
    description: {
        type: String,
		required: true,
    },
    price: {
        type: Schema.Types.Decimal128,
		required: true,
    },
    status: {
        type: String,
		required: true,
    },
    category: {
        type: String,
		required: true,
    },
    idSeller: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Seller",
        required: true
    }
	
});

productSchema.plugin(normalize);

var Products = mongoose.model('Product', productSchema);

module.exports = Products;