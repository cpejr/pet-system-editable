/**
* @swagger
*  /product/{product_id}:
*    delete:
*      summary: Deletar um determinado produto
*      parameters:
*       - in: query_params
*         name: product_id
*         required: true
*         description: Id do produto a ser deletado.
*         schema:
*           type: string
*      tags: [Product]
*      description: Validação para apagar um determinado produto de acordo com seu código de identificação(product_id). Produtos só podem ser apagados pelo administrador.
*      responses:
*       '200':
*        description: Product deleted
*        content:
*          application/json:
*            example:
*              product_id: 9b1deb4d-3b7d-4bad-9bdd-2b0d7b3dcb6d
*       '400':
*        description: No valid session provided
*       '403':
*        description: Unauthorized
*       '404':
*        description: Not Found
*       '500':
*        description: Internal server error while trying to delete product
*
*/
