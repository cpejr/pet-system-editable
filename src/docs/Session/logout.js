/**
* @swagger
*  /session:
*    get:
*      summary: Logout do usuário
*      requestBody:
*         required: true
*         content:
*          application/json:
*            schema:
*              $ref: '#/components/schemas/Session'
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
*      tags: [Session]
*      description: Logout
*      responses:
*        '200':
*          description: Logged out
*        '500':
*          description: Could not log out
*/
