/**
* @swagger
*  /session/logout:
*    get:
*      summary: Logout do usuário
*      parameters:
*       - in: header
*         name: Authorization
*         schema:
*           type: string
*         required: true
*         description: Autorização básica.
*      tags: [Session]
*      description: Encerramento da sessão do usuário
*      responses:
*        '200':
*          description: Logged out
*        '500':
*          description: Could not log out
*/
