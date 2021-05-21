/**
* @swagger
*  /admin:
*    put:
*      summary: Atualizar comissão do administrador
*      parameters:
*       - in: header
*         name: Authorization
*         schema:
*          type: float
*         required: true
*         description: Autorização básica
*       - in: body
*         name: share
*         required: true
*         description: Valor da comissão
*         schema:
*           type: float
*           example:
*              share: 25,00
*      tags: [Admin]
*      description: Atualização da comissão do administrador
*      responses:
*       '200':
*        description: Admin share uptade
*       '400':
*        description: Err.message
*       '500':
*        description: Internal server error while trying to update commission
*
*/
