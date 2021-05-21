/**
* @swagger
*  /admin:
*    delete:
*      summary: Deletar comissão do administrador
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
*         schema:
*           type: float
*           example:
*              share: 25,00
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
