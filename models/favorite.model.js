const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const favoriteSchema = new Schema({
    gambar : { type: String },
    gambar2 : { type: String },
    namahotel : { type: String},
    harga : { type: String },
}, {
    timestamps: true,
});

const favoriteHotel = mongoose.model('Fav', favoriteSchema)

module.exports = favoriteHotel;