/**
* @swagger
*  /session/validate/{accessToken}:
*    post:
*     summary: Validação de sessão do usuário
*     requestBody:
*       required: true
*       content:
*         application/json:
*           schema:
*           $ref: '#/components/schemas/Session'
*     parameters:
*       - in: header
*         name: Authorization
*         schema:
*           type: string
*         required: true
*         description: Autorização básica.
*       - in: body
*         name: accessToken
*         required: true
*         description: Token de acesso da sessão.
*         schema:
*           type: string
*           example:
*             accessToken: OISHdaDKALDkjlAPRWEsdakjl
*     tags: [Session]
*     description: Validação da sessão do usuário por meio do Token de acesso gerado no login.
*     responses:
*       '200':
*         description: accessToken, user
*       '400':
*         description: A sessão não foi validada
*       '500':
*         description: err.message
*/
