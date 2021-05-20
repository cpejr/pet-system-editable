/**
* @swagger
*  /session:
*    post:
*     summary: Login do usuário
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
*         name: email
*         required: true
*         description: Email do usuário para fazer login.
*       - in: body
*         name: password
*         required: true
*         description: Senha do usuário para fazer login.
*       - in: body
*         name: firebase_id
*         required: true
*         description: Id do firebase do usuário.
*       - in: body
*         name: accessToken
*         required: true
*         description: Token de acesso do usuário para fazer login.
*     tags: [Session]
*     description: Login
*     responses:
*       '200':
*         description: accessToken, user
*       '400':
*         description: Email ou senha incorreto
*       '500':
*         description: err.message
*/
