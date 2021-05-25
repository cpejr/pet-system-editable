/**
* @swagger
*  /admin:
*    put:
*      summary: Atualizar comissão do administrador
*      parameters:
*       - in: body
*         name: share
*         required: true
*         description: Valor da comissão
*         schema:
*           type: float
*      tags: [Admin]
*      description: Validação para atualização da comissão do administrador
*      responses:
*       '200':
*        description: Admin share uptade
*        content:
*          application/json:
*            example:
*              share: 25,00
*       '400':
*        description: No valid session provided
*       '403':
*        description: Unauthorized
*       '500':
*        description: Internal server error while trying to update commission
*
*/
