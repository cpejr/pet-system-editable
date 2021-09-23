const connection = require("../database/connection");

module.exports = {
  async getProductById(id) {
    try {
      const product = await connection("Product")
        .where("product_id", id)
        .select("*")
        .first();
      return product;
    } catch (error) {
      console.error(error);
      throw new Error(error);
    }
  },
  async createNewProduct(product) {
    try {
      const product_aux = await connection("Product").insert(product);
      return product_aux;
    } catch (error) {
      console.error(error);
      throw new Error(error);
    }
  },

  async removeProduct(id) {
    try {
      const response = await connection("Product")
        .where({ product_id: id })
        .delete();
      return response;
    } catch (error) {
      console.error(error);
      throw new Error(error);
    }
  },

  async updateProduct(product, id) {
    try {
      const response = await connection("Product")
        .where({ product_id: id })
        .update(product);
      return response;
    } catch (error) {
      console.error(error);
      throw new Error(error);
    }
  },
  async getAllProducts(valor, category_id) {
    try {
      const price = valor;
      if (category_id !== undefined) {
        const products = await connection("Product")
          .select("*")
          .where("category_id", category_id)
          .where((builder) => {
            if (price > 100) {
              builder.where("price", ">", 100);
            } else if (price) {
              builder.where("price", "<=", price);
            }
          });
        return products;
      }
      const products = await connection("Product")
        .select("*")
        .where((builder) => {
          if (price > 100) {
            builder.where("price", ">", 100);
          } else if (price) {
            builder.where("price", "<=", price);
          }
        });
      return products;
    } catch (error) {
      console.error(error);
      throw new Error(error);
    }
  },
};
