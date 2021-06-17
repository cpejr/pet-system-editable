/**
* @swagger
*  /category:
*    post:
*      summary: Criação de uma categoria
*      requestBody:
*         required: true
*         content:
*          application/json:
*            schema:
*              $ref: '#/components/schemas/Categories'
*      parameters:
*       - in: body
*         name: name
*         required: true
*         description: Nome da categoria.(STRING)
*         schema:
*      tags: [Categories]
*      description: Validação para criar uma categoria através das informações passadas pelo formulário.
*      responses:
*       '200':
*        description: Category created
*        content:
*          application/json:
*            example:
*               category_id: 9b1deb4d-3b7d-4bad-9bdd-2b0d7b3dcb6d
*               name: Casa de Cachorro
*       '400':
*        description: No valid session provided
*       '403':
*        description: Unauthorized
*       '500':
*        description: Internal server error while trying to create category
*
*/
