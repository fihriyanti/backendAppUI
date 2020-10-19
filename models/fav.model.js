const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const favSchema = new Schema({
    tgl : { type: String },
    gambar : { type: String },
    gambar2 : { type: String },
    namahotel : { type: String},
    harga : { type: String },
}, {
    timestamps: true,
});

const favHotel = mongoose.model('Favorites', favSchema)

module.exports = favHotel;