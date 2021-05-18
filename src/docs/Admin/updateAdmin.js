/**
* @swagger
*  /admin:
*    put:
*      summary: Atualizar comissão
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
*          type: float
*         required: true
*         description: Autorização básica
*       - in: body
*         name: share
*         required: true
*         description: Valor da comissão
*      tags: [Admin]
*      description: Mudar comissão
*      responses:
*       '200':
*        description: Admin share uptade
*       '400':
*        description: Err.message
*       '500':
*        description: Internal server error while trying to update commission
*
*/
