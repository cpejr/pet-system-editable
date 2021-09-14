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
*       - in: body
*         name: share
*         required: true
*         description: Comissão do administrador a ser criada.(FLOAT)
*         schema:
*      tags: [Admin]
*      description: Validação para criar comissão para o administrador
*      responses:
*       '200':
*        description: Share created
*        content:
*          application/json:
*            example:
*              share: 25,00
*       '400':
*        description: No valid session provided
*       '403':
*        description: Unauthorized
*       '500':
*        description: Internal Server Error
*
*/
