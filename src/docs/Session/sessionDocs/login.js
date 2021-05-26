/**
* @swagger
*  /session/login:
*    post:
*     summary: Realizar o login do usuário com email e senha
*     requestBody:
*       required: true
*       content:
*         application/json:
*           schema:
*           $ref: '#/components/schemas/Session'
*     parameters:
*       - in: body
*         name: email
*         required: true
*         description: Email do usuário para fazer login.
*         schema:
*           type: string
*       - in: body
*         name: password
*         required: true
*         description: Senha do usuário para fazer login.
*         schema:
*           type: string
*     tags: [Session]
*     description: Validação para efetuar login do usuário com email e senha que retorna um Token para a sessão ser validada.
*     responses:
*       '200':
*        description: accessToken, user
*        content:
*          application/json:
*            example:
*              email: lucas@gmail.com
*              password: 123456
*       '400':
*        description: Email ou senha incorreto
*       '500':
*        description: err.message
*/
