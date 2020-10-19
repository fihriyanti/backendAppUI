const router = require('express').Router();
let fav2Hotel = require('../models/favorite.model');

router.route('/').get((req, res) => {
  fav2Hotel.find()
    .then(favorite => res.json(favorite))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/add').post((req, res) => {
  const gambar = req.body.gambar;
  const gambar2 = req.body.gambar2;
  const namahotel = req.body.namahotel;
  const harga = req.body.harga;

  const newfav2Hotel = new fav2Hotel({
    gambar,
    gambar2,
    namahotel,
    harga,
  });

  newfav2Hotel.save()
  .then(() => res.json('Hotel added to Favorites!'))
  .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/:id').get((req, res) => {
    fav2Hotel.findById(req.params.id)
      .then(favorite => res.json(favorite))
      .catch(err => res.status(400).json('Error: ' + err));
  });
  router.route('/:id').delete((req, res) => {
    fav2Hotel.findByIdAndDelete(req.params.id)
      .then(() => res.json('Favorites Hotel deleted.'))
      .catch(err => res.status(400).json('Error: ' + err));
  });
  router.route('/update/:id').post((req, res) => {
    fav2Hotel.findById(req.params.id)
      .then(favorite => {
        favorite.gambar = req.body.gambar;
        favorite.gambar2 = req.body.gambar2;
        favorite.namahotel = req.body.namahotel;
        favorite.harga = req.body.harga;
        favorite.save()
          .then(() => res.json('Favorites Hotel updated!'))
          .catch(err => res.status(400).json('Error: ' + err));
      })
      .catch(err => res.status(400).json('Error: ' + err));
  });

module.exports = router;