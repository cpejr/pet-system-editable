/**
* @swagger
*  /session:
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
*       - in: body
*         name: session
*         required: true
*         description: Sessão gerada pelo Token.
*       - in: body
*         name: firebase_id
*         required: true
*         description: Id do firebase do usuário.
*       - in: body
*         name: user
*         required: true
*         description: Informações do usuário logado.
*     tags: [Session]
*     description: Validação
*     responses:
*       '200':
*         description: accessToken, user
*       '400':
*         description: A sessão não foi validada
*       '500':
*         description: err.message
*/
