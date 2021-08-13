/**
* @swagger
*  /group:
*    put:
*      summary: Atualizar o nome de um grupo
*      parameters:
*       - in: body
*         name: group_id
*         schema:
*           type: string
*         required: true
*         description: Id do grupo a ser alterado.
*       - in: body
*         name: name
*         schema:
*         required: true
*         description: Nome a ser alterado.(STRING)
*      tags: [Group]
*      description: Validação para atualização de um determinado grupo
*      responses:
*       '200':
*        description: Group updated
*        content:
*          application/json:
*            example:
*             group_id: acab081c-04fe-491d-b289-24fafe1fb190
*             name: Brinquedos
*       '400':
*        description: No valid session provided
*       '403':
*        description: Unauthorized
*       '500':
*        description: Internal Server Error
*
*/
