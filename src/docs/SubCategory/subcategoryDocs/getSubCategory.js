/**
* @swagger
*  /subcategory/{subcategory_id}:
*    get:
*      summary: Retorna uma determinada subcategoria
*      parameters:
*       - in: query_params
*         name: subcategory_id
*         required: true
*         description: Id da subcategoria a ser localizada.(STRING)
*         schema:
*      tags: [SubCategories]
*      description: Validação para localizar uma determinado subcategoria, passando o seu ID e retornando suas informações.
*      responses:
*       '200':
*        description: SubCategory
*        content:
*          application/json:
*            example:
*               subcategory_id: 9b1deb4d-3b7d-4bad-9bdd-2b0d7b3dcb6d
*               name: Casinhas de Cachorro
*               category_id: 9b1deb4d-3b7d-4bad-9bdd-2b0d7b3dcb6d
*       '404':
*        description: Not Found
*       '500':
*        description: Internal Server Error
*
*/
