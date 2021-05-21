/**
* @swagger
*  /store:
*    post:
*      summary: Criação de uma loja
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
*         description: Email do administrador da loja.
*         schema:
*           type: string
*           example:
*              email: fernando@gmail.com
*       - in: body
*         name: password
*         required: true
*         description: Senha do usuário a ser criado.
*         schema:
*           type: string
*           example:
*              password: 123456
*       - in: body
*         name: cpf
*         required: true
*         description: Cpf do administrador da loja. Somente números serão guardados.
*         schema:
*           type: string
*           example:
*              cpf: 12345678912
*       - in: body
*         name: birth_date
*         required: true
*         description: Data de nascimento do administrador da loja. Somente números serão guardados.
*         schema:
*           type: date
*           example:
*              birth_date: 26121980
*       - in: body
*         name: first_name
*         required: true
*         description: Nome do administrador da loja.
*         schema:
*           type: string
*           example:
*              first_name: Giovanni
*       - in: body
*         name: last_name
*         required: true
*         description: Sobrenomes do administrador da loja.
*         schema:
*           type: string
*           example:
*              last_name: Martins de Sá Júnior
*       - in: body
*         name: company_name
*         required: true
*         description: Nome da loja a ser criada.
*         schema:
*           type: string
*           example:
*              company_name: Pet Shop do Giovanni
*       - in: body
*         name: email
*         required: true
*         description: E-mail da loja a ser criada.
*         schema:
*           type: string
*           example:
*              email: nomedaloja@gmail.com
*       - in: body
*         name: telephone
*         required: true
*         description: Telefone da loja a ser criada. Somente números serão guardados.
*         schema:
*           type: integer
*           example:
*              telephone: 31999999999
*       - in: body
*         name: cellphone
*         required: true
*         description: Celular da loja a ser criada. Somente números serão guardados.
*         schema:
*           type: integer
*           example:
*              cellphone: 31999999999
*       - in: body
*         name: cnpj
*         required: true
*         description: Cnpj da loja a ser criada. Somente números serão guardados.
*         schema:
*           type: integer
*           example:
*              cnpj: 12345678912345
*       - in: body
*         name: cep
*         required: true
*         description: Cep da loja a ser criada. Somente números serão guardados
*         schema:
*           type: integer
*           example:
*              cep: 12345678
*       - in: body
*         name: ie
*         required: true
*         description: Inscrição Estadual da loja. Somente números serão guardados.
*         schema:
*           type: integer
*           example:
*              ie: 12345678
*       - in: body
*         name: ie_state
*         required: true
*         description: Estado referente à Inscrição Estadual.
*         schema:
*           type: string
*           example:
*              ie_state: MG
*      tags: [Store]
*      description: Criar uma loja através das informações passadas pelo formulário.
*      responses:
*       '200':
*        description: User and store created
*       '400':
*        description: err.message
*       '500':
*        description: Internal server error while trying to register store
*
*/
