/**
* @swagger
*  /product/{product_id}:
*    put:
*      summary: Atualizar as informações de um produto
*      parameters:
*       - in: query_params
*         name: product_id
*         schema:
*           type: string
*         required: true
*         description: Id do produto a ser alterado.
*       - in: body
*         name: Body
*         schema:
*           type: object
*         required: true
*         description: Campos a serem alterados
*      tags: [Product]
*      description: Validação para atualização de um determinado produto
*      responses:
*       '200':
*        description: Product updated
*        content:
*          application/json:
*            example:
*             product_id: 9b1deb4d-3b7d-4bad-9bdd-2b0d7b3dcb6d
*             product_name: Ração Pedigree
*             price: 50,00
*       '400':
*        description: No valid session provided
*       '403':
*        description: Unauthorized
*       '500':
*        description: Internal server error while trying to update product
*
*/
