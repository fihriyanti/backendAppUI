const router = require('express').Router();
let Hotel = require('../models/hotels.model');

router.route('/').get((req, res) => {
  Hotel.find()
    .then(hotels => res.json(hotels))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/add').post((req, res) => {
  const tgl = req.body.tgl;
  const gambar = req.body.gambar;
  const gambar2 = req.body.gambar2;
  const namahotel = req.body.namahotel;
  const harga = req.body.harga;

  const newHotel = new Hotel({
    tgl,
    gambar,
    gambar2,
    namahotel,
    harga,
  });

  newHotel.save()
  .then(() => res.json('Hotel added!'))
  .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/:id').get((req, res) => {
    Hotel.findById(req.params.id)
      .then(hotels => res.json(hotels))
      .catch(err => res.status(400).json('Error: ' + err));
  });
  router.route('/:id').delete((req, res) => {
    Hotel.findByIdAndDelete(req.params.id)
      .then(() => res.json('Hotel deleted.'))
      .catch(err => res.status(400).json('Error: ' + err));
  });
  router.route('/update/:id').post((req, res) => {
    Hotel.findById(req.params.id)
      .then(hotels => {
        hotels.tgl = req.body.tgl;
        hotels.gambar = req.body.gambar;
        hotels.gambar2 = req.body.gambar2;
        hotels.namahotel = req.body.namahotel;
        hotels.harga = req.body.harga;
        hotels.save()
          .then(() => res.json('Hotel updated!'))
          .catch(err => res.status(400).json('Error: ' + err));
      })
      .catch(err => res.status(400).json('Error: ' + err));
  });

module.exports = router;