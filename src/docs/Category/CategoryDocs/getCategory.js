/**
* @swagger
*  /category/{category_id}:
*    get:
*      summary: Retorna uma determinada categoria
*      parameters:
*       - in: query_params
*         name: category_id
*         required: true
*         description: Id da categoria a ser localizado.(STRING)
*         schema:
*      tags: [Categories]
*      description: Validação para localizar uma determinado categoria, passando o seu ID e retornando suas informações.
*      responses:
*       '200':
*        description: Category
*        content:
*          application/json:
*            example:
*               category_id: 9b1deb4d-3b7d-4bad-9bdd-2b0d7b3dcb6d
*               name: Casinhas de Cachorro
*       '404':
*        description: Not Found
*       '500':
*        description: Internal server error while trying to find category
*
*/
