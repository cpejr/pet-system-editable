/**
* @swagger
*  /product:
*    delete:
*      summary: Deletar produto
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
*         description: Id do produto a ser deletado.
*      tags: [Product]
*      description: Deletando produto
*      responses:
*       '200':
*        description: Product deleted
*       '400':
*        description: err.message
*       '500':
*        description: Internal server error while trying to delete product
*
*/
