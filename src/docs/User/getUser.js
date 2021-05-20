/**
* @swagger
*  /user:
*    get:
*      summary: Localizar usuário
*      requestBody:
*         required: true
*         content:
*          application/json:
*            schema:
*              $ref: '#/components/schemas/User'
*      parameters:
*       - in: header
*         name: Authorization
*         schema:
*           type: string
*         required: true
*         description: Autorização básica.
*       - in: body
*         name: firebase_id
*         required: true
*         description: Id do usuário a ser buscado.
*      tags: [User]
*      description: Localizar um usuário
*      responses:
*       '200':
*        description: User info
*       '500':
*        description: Internal server error while trying to find user
*/
