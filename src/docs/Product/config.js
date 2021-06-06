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
*            description: Diretório onda a Imagem do produto ficará salva.
*/
