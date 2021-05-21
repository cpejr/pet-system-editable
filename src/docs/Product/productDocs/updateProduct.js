/**
* @swagger
*  /product/{product_id}:
*    put:
*      summary: Atualiza as informações de um produto
*      parameters:
*       - in: header
*         name: Authorization
*         schema:
*          type: string
*         required: true
*         description: Autorização básica.
*       - in: body
*         name: product_id
*         schema:
*           type: string
*           example:
*             product_id: 9b1deb4d-3b7d-4bad-9bdd-2b0d7b3dcb6d
*         required: true
*         description: Id do produto a ser alterado.
*       - in: body
*         name: Body
*         schema:
*           type: object
*           example:
*             product_name: Ração Pedigree
*             price: 50,00
*         required: true
*         description: Campos a serem alterados
*      tags: [Product]
*      description: Atualizando produto
*      responses:
*       '200':
*        description: Product updated
*       '400':
*        description: err.message
*       '500':
*        description: Internal server error while trying to update product
*
*/
