/**
* @swagger
*  /product:
*    get:
*      summary: Retorna todos os produtos cadastrados
*      parameters:
*       - in: header
*         name: Authorization
*         schema:
*          type: string
*         required: true
*         description: Autorização básica.
*      tags: [Product]
*      description: Localiza todos os produtos do banco de dados, retornando também suas respectivas informações.
*      responses:
*       '200':
*        description: Products
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
*       '500':
*        description: Internal server error while trying to find product
*
*/
