/**
* @swagger
*  /admin:
*    post:
*      summary: Criar comissão do administrador
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
*         description: Comissão do administrador a ser criada.
*         schema:
*           type: float
*           example:
*              share: 25,00
*      tags: [Admin]
*      description: Criar comissão para o administrador
*      responses:
*       '200':
*        description: Share created
*       '400':
*        description: err.message
*       '500':
*        description: Internal server error while trying to create admin share
*
*/
