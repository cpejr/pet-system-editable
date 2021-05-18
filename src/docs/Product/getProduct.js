/**
* @swagger
*  /product:
*    get:
*      summary: Localizar um produto
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
*         name: product_id
*         required: true
*         description: Id do produto a ser localizado.
*      tags: [Product]
*      description: Localizar um produto
*      responses:
*       '200':
*        description: Product
*       '500':
*        description: Internal server error while trying to find product
*
*/
