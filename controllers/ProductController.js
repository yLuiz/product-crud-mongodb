const Product = require('../models/Product');


module.exports = class ProductController {
  static async showProducts(req, res) {
    const products = await Product.findAllProducts();
    let showDeleteBox = false;
    function setShowDeleteBox() {
      showDeleteBox = !showDeleteBox;
    }

    res.render('products/all', { products, showDeleteBox, setShowDeleteBox });
  }

  static async showOneProduct(req, res) {
    const productId = req.params.id;
    const product = await Product.findOneProduct(productId);

    res.render('products/details', { product })
  }

  static createProduct(req, res) {
    res.render('products/create');
  }

  static async createProductPost(req, res) {
    const { name, price, description } = req.body;

    const product = new Product(name, price, description);

    await product.save()

    res.redirect('/products')
  }

  static async editProduct(req, res) {
    const productId = req.params.id;
    const product = await Product.findOneProduct(productId);

    res.render(`products/edit`, { product });
  }

  static async editProductPost(req, res) {
    const { name, price, description } = req.body;
    const { id } = req.params;

    const product = new Product(name, price, description);

    await product.update(id);

    res.redirect('/products')
  }

  static async removeProduct(req, res) {
    const productId = req.params.id;
    await Product.removeOneProduct(productId);

    res.redirect('/products')
  }
}