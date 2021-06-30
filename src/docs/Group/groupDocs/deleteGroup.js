/**
* @swagger
*  /group:
*    delete:
*      summary: Deletar um determinado grupo
*      parameters:
*       - in: body
*         name: group_id
*         required: true
*         description: Id do grupo a ser deletado.(STRING)
*         schema:
*      tags: [Group]
*      description: Validação para apagar um determinado grupo de acordo com seu código de identificação(group_id). Grupos só podem ser apagados pelo lojista.
*      responses:
*       '200':
*        description: Group deleted
*        content:
*          application/json:
*            example:
*              group_id: acab081c-04fe-491d-b289-24fafe1fb190
*       '400':
*        description: No valid session provided
*       '403':
*        description: Unauthorized
*       '404':
*        description: Not Found
*       '500':
*        description: Internal server error while trying to delete group
*
*/
