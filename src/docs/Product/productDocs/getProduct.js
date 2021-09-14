/**
* @swagger
*  /product/{product_id}:
*    get:
*      summary: Retorna um determinado produto
*      parameters:
*       - in: query_params
*         name: product_id
*         required: true
*         description: Id do produto a ser localizado.(STRING)
*         schema:
*      tags: [Product]
*      description: Validação para localizar um determinado produto, passando o seu ID e retornando suas informações.
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
*               img: '1586181877017.jpg'
*               created_at: 2020-12-06
*       '404':
*        description: Not Found
*       '500':
*        description: Internal Server Error
*
*/
