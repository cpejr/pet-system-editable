/**
* @swagger
*  /admin:
*    delete:
*      summary: Deletar comissão do administrador
*      requestBody:
*         required: true
*         content:
*          application/json:
*            schema:
*              $ref: '#/components/schemas/Admin'
*      parameters:
*       - in: header
*         name: Authorization
*         schema:
*          type: string
*         required: true
*         description: Autorização básica.
*       - in: body
*         name: share
*         required: true
*         description: Comissão do administrador a ser deletada.
*      tags: [Admin]
*      description: Deletando comissão do administrador
*      responses:
*       '200':
*        description: Share deleted
*       '400':
*        description: err.message
*       '500':
*        description: Internal server error while trying to delete share
*
*/
