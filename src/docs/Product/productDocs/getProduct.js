/**
* @swagger
*  /product/{product_id}:
*    get:
*      summary: Retorna um determinado um produto
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
*         description: Id do produto a ser localizado..
*         schema:
*           type: string
*           example:
*              product_id: 9b1deb4d-3b7d-4bad-9bdd-2b0d7b3dcb6d
*      tags: [Product]
*      description: Localiza um determinado produto, passando o seu ID e retornando suas informações.
*      responses:
*       '200':
*        description: Product
*        content:
*          application/json:
*            example:
*               product_id: 9b1deb4d-3b7d-4bad-9bdd-2b0d7b3dcb6d
*               store_id: 9b1deb4d-3b7d-4bad-9bdd-2b0d7b3dcb6d
*               product_name: Ração de Cachorro
*               price: 25,00
*               discount: 0,00
*               description: Ração de Cachorro de 5kg para cachorros de pequeno porte.
*               img: 'produtos/rações/'
*               created_at: 2020-12-06
*       '500':
*        description: Internal server error while trying to find product
*
*/
