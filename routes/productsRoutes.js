const express = require("express");
const router = express.Router();
const ProductController = require('../controllers/ProductController');

router.get('/create', ProductController.createProduct);
router.get('/details/:id', ProductController.showOneProduct);
router.get('/', ProductController.showProducts);
router.get('/edit/:id', ProductController.editProduct);

router.post('/create', ProductController.createProductPost);
router.post('/edit/:id', ProductController.editProductPost);
router.post('/delete/:id', ProductController.removeProduct);

module.exports = router;