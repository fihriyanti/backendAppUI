const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const hotelSchema = new Schema({
    tgl : { type: String, required: true },
    gambar : { type: String, required: true },
    gambar2 : { type: String, required: true },
    namahotel : { type: String, required: true},
    harga : { type: String, required: true },
}, {
    timestamps: true,
});

const Hotel = mongoose.model('Hotel', hotelSchema)

module.exports = Hotel;