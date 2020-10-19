const router = require('express').Router();
let favHotel = require('../models/fav.model');

router.route('/').get((req, res) => {
  favHotel.find()
    .then(favorites => res.json(favorites))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/add').post((req, res) => {
  const tgl = req.body.tgl;
  const gambar = req.body.gambar;
  const gambar2 = req.body.gambar2;
  const namahotel = req.body.namahotel;
  const harga = req.body.harga;

  const newfavHotel = new favHotel({
    tgl,
    gambar,
    gambar2,
    namahotel,
    harga,
  });

  newfavHotel.save()
  .then(() => res.json('Hotel added to Favorites!'))
  .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/:id').get((req, res) => {
    favHotel.findById(req.params.id)
      .then(favorites => res.json(favorites))
      .catch(err => res.status(400).json('Error: ' + err));
  });
  router.route('/:id').delete((req, res) => {
    favHotel.findByIdAndDelete(req.params.id)
      .then(() => res.json('Favorites Hotel deleted.'))
      .catch(err => res.status(400).json('Error: ' + err));
  });
  router.route('/update/:id').post((req, res) => {
    favHotel.findById(req.params.id)
      .then(favorites => {
        favorites.tgl = req.body.tgl;
        favorites.gambar = req.body.gambar;
        favorites.gambar2 = req.body.gambar2;
        favorites.namahotel = req.body.namahotel;
        favorites.harga = req.body.harga;
        favorites.save()
          .then(() => res.json('Favorites Hotel updated!'))
          .catch(err => res.status(400).json('Error: ' + err));
      })
      .catch(err => res.status(400).json('Error: ' + err));
  });

module.exports = router;