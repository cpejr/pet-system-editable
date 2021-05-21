/**
* @swagger
*  /session/login:
*    post:
*     summary: Login do usuário com email e senha
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
*         schema:
*           type: string
*           example:
*             email: lucas@gmail.com
*       - in: body
*         name: password
*         required: true
*         description: Senha do usuário para fazer login.
*         schema:
*           type: string
*           example:
*             password: 123456
*     tags: [Session]
*     description: Login do usuário com email e senha que retorna um Token para a sessão ser validada.
*     responses:
*       '200':
*         description: accessToken, user
*       '400':
*         description: Email ou senha incorreto
*       '500':
*         description: err.message
*/
