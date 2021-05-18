/**
* @swagger
*  /product:
*    put:
*      summary: Atualizar produto
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
*         name: product
*         required: true
*         description: Produto com o campo a ser alterado.
*       - in: body
*         name: product_id
*         required: true
*         description: Id do produto a ser atualizado.
*      tags: [Product]
*      description: Atualizando loja
*      responses:
*       '200':
*        description: Product updated
*       '400':
*        description: err.message
*       '500':
*        description: Internal server error while trying to update product
*
*/
