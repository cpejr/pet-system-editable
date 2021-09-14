/**
* @swagger
*  /group:
*    post:
*      summary: Criação de um grupo
*      requestBody:
*         required: true
*         content:
*          application/json:
*            schema:
*              $ref: '#/components/schemas/Group'
*      parameters:
*       - in: body
*         name: name
*         required: true
*         description: Nome do grupo.(STRING)
*         schema:
*      tags: [Group]
*      description: Validação para criar um grupo através das informações passadas pelo modal de adicionar grupo.
*      responses:
*       '200':
*        description: Group created
*        content:
*          application/json:
*            example:
*               store_id: 9b1deb4d-3b7d-4bad-9bdd-2b0d7b3dcb6d
*               name: Ração
*       '400':
*        description: No valid session provided
*       '403':
*        description: Unauthorized
*       '500':
*        description: Internal Server Error
*
*/
