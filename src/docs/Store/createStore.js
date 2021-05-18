/**
* @swagger
*  /store:
*    post:
*      summary: Criar loja
*      requestBody:
*         required: true
*         content:
*          application/json:
*            schema:
*              $ref: '#/components/schemas/Store'
*      parameters:
*       - in: header
*         name: Authorization
*         schema:
*          type: string
*         required: true
*         description: Autorização básica.
*       - in: body
*         name: email
*         required: true
*         description: Email do usuário a ser criado.
*       - in: body
*         name: password
*         required: true
*         description: Senha do usuário a ser criado.
*       - in: body
*         name: cpf
*         required: true
*         description: Cpf do usuário a ser criado.
*       - in: body
*         name: birth_date
*         required: true
*         description: Data de nascimento do usuário a ser criado.
*       - in: body
*         name: first_name
*         required: true
*         description: Primeiro nome do usuário a ser criado.
*       - in: body
*         name: last_name
*         required: true
*         description: Último nome do usuário a ser criado.
*       - in: body
*         name: company_name
*         required: true
*         description: Nome da loja a ser criada.
*       - in: body
*         name: email
*         required: true
*         description: E-mail da loja a ser criada.
*       - in: body
*         name: telephone
*         required: true
*         description: Telefone da loja a ser criada.
*       - in: body
*         name: cellphone
*         required: true
*         description: Celular da loja a ser criada.
*       - in: body
*         name: cnpj
*         required: true
*         description: Cnpj da loja a ser criada.
*       - in: body
*         name: cep
*         required: true
*         description: Cep da loja a ser criada.
*       - in: body
*         name: ie
*         required: true
*         description: Ie da loja a ser criada.
*       - in: body
*         name: ie_state
*         required: true
*         description: Estado da loja a ser criada.
*       - in: body
*         name: cover_img
*         required: true
*         description: Imagem da loja a ser criada.
*       - in: body
*         name: logo_img
*         required: true
*         description: Logo da loja a ser criada.
*      tags: [Store]
*      description: Criar loja
*      responses:
*       '200':
*        description: User and store created
*       '400':
*        description: err.message
*       '500':
*        description: Internal server error while trying to register store
*
*/
