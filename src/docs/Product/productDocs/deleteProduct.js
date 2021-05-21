/**
* @swagger
*  /product/{product_id}:
*    delete:
*      summary: Apaga um determinado produto
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
*         schema:
*           type: string
*           example:
*              product_id: 9b1deb4d-3b7d-4bad-9bdd-2b0d7b3dcb6d
*      tags: [Product]
*      description: Apaga um determinado produto de acordo com seu código de identificação(product_id). Produtos só podem ser apagados pelo administrador.
*      responses:
*       '200':
*        description: Product deleted
*       '400':
*        description: err.message
*       '500':
*        description: Internal server error while trying to delete product
*
*/
