/**
* @swagger
* tags:
*   name: Product
*   description: Produtos da loja
*/

/**
* @swagger
* components:
*  schemas:
*    Product:
*      type: object
*      required:
*        - product_name
*        - price
*        - discount
*        - description
*        - img
*      properties:
*        product_id:
*           type: string
*           description: Campo autogerado.
*        store_id:
*           type: string
*           description: Campo autogerado.
*        product_name:
*            type: string
*            description: Nome do produto.
*        price:
*            type: float
*            description: Preço do produto.
*        discount:
*            type: float
*            description: Desconto do produto.
*        description:
*            type: string
*            description: Descrição do produto.
*        img:
*            type: string
*            description: Imagem do produto.
*        created_at:
*            type: timestamp
*            description: Data de criação do produto.
*/
