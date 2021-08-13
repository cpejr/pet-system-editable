/**
* @swagger
*  /subcategory:
*    post:
*      summary: Criação de uma subcategoria
*      requestBody:
*         required: true
*         content:
*          application/json:
*            schema:
*              $ref: '#/components/schemas/SubCategories'
*      parameters:
*       - in: body
*         name: name
*         required: true
*         description: Nome da subcategoria.(STRING)
*         schema:
*      tags: [SubCategories]
*      description: Validação para criar uma subcategoria através das informações passadas pelo formulário.
*      responses:
*       '200':
*        description: Category created
*        content:
*          application/json:
*            example:
*               subcategory_id: 9b1deb4d-3b7d-4bad-9bdd-2b0d7b3dcb6d
*               name: Casa de Cachorro
*               category_id: 9b1deb4d-3b7d-4bad-9bdd-2b0d7b3dcb6d
*       '400':
*        description: No valid session provided
*       '403':
*        description: Unauthorized
*       '500':
*        description: Internal Server Error
*
*/
