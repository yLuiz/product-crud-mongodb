const { ObjectId } = require('mongodb');
const conn = require('../db/conn');

module.exports = class Product {
  constructor(name, price, description) {
    this.name = name;
    this.price = price;
    this.description = description;
  }

  save() {
    const product = conn.db().collection('products').insertOne({
      name: this.name,
      price: this.price,
      description: this.description
    });

    return product;
  }

  update(id) {
    conn.db().collection('products').updateOne({_id: ObjectId(id)}, { $set: this });

    return;
  }

  static findAllProducts() {
    const products = conn.db().collection('products').find().toArray()    
    return products;
  }

  static findOneProduct(id) {
    const product = conn.db().collection('products').findOne({ _id: ObjectId(id) });
    return product;
  }

  static async removeOneProduct(id) {
    await conn.db().collection('products').deleteOne({_id: ObjectId(id)});
    return;
  }

}