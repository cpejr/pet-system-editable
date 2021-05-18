/**
* @swagger
*  /product:
*    post:
*      summary: Criar produto
*      requestBody:
*         required: true
*         content:
*          application/json:
*            schema:
*              $ref: '#/components/schemas/Product'
*      parameters:
*       - in: header
*         name: Authorization
*         schema:
*          type: string
*         required: true
*         description: Autorização básica.
*       - in: body
*         name: store_id
*         required: true
*         description: Id da loja em que o produto será criado.
*       - in: body
*         name: product_name
*         required: true
*         description: Nome do produto a ser criado.
*       - in: body
*         name: price
*         required: true
*         description: Preço do produto a ser criado.
*       - in: body
*         name: discount
*         required: true
*         description: Desconto do produto a ser criado.
*       - in: body
*         name: description
*         required: true
*         description: Descrição do produto a ser criado.
*       - in: body
*         name: img
*         required: true
*         description: Imagem do produto a ser criado.
*      tags: [Product]
*      description: Criar produto
*      responses:
*       '200':
*        description: Product created
*       '400':
*        description: err.message
*       '500':
*        description: Internal server error while trying to create product
*
*/
