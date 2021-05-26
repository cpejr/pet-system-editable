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
*       - in: body
*         name: email
*         required: true
*         description: Email do administrador da loja.
*         schema:
*           type: string
*       - in: body
*         name: password
*         required: true
*         description: Senha do usuário a ser criado.
*         schema:
*           type: string
*       - in: body
*         name: cpf
*         required: true
*         description: Cpf do administrador da loja. Somente números serão guardados.
*         schema:
*           type: string
*       - in: body
*         name: birth_date
*         required: true
*         description: Data de nascimento do administrador da loja. Somente números serão guardados.
*         schema:
*           type: date
*       - in: body
*         name: first_name
*         required: true
*         description: Nome do administrador da loja.
*         schema:
*           type: string
*       - in: body
*         name: last_name
*         required: true
*         description: Sobrenomes do administrador da loja.
*         schema:
*           type: string
*       - in: body
*         name: company_name
*         required: true
*         description: Nome da loja a ser criada.
*         schema:
*           type: string
*       - in: body
*         name: telephone
*         required: true
*         description: Telefone da loja a ser criada. Somente números serão guardados.
*         schema:
*           type: integer
*       - in: body
*         name: cellphone
*         required: true
*         description: Celular da loja a ser criada. Somente números serão guardados.
*         schema:
*           type: integer
*       - in: body
*         name: cnpj
*         required: true
*         description: Cnpj da loja a ser criada. Somente números serão guardados.
*         schema:
*           type: integer
*       - in: body
*         name: cep
*         required: true
*         description: Cep da loja a ser criada. Somente números serão guardados
*         schema:
*           type: integer
*       - in: body
*         name: ie
*         required: true
*         description: Inscrição Estadual da loja. Somente números serão guardados.
*         schema:
*           type: integer
*       - in: body
*         name: ie_state
*         required: true
*         description: Estado referente à Inscrição Estadual.
*         schema:
*           type: string
*      tags: [Store]
*      description: Validação para criar uma loja através das informações passadas pelo formulário.
*      responses:
*       '200':
*        description: User and store created
*        content:
*          application/json:
*            example:
*               store_id: 9b1deb4d-3b7d-4bad-9bdd-2b0d7b3dcb6d
*               user_id: d5x3pjYJPeT8Z6GBMtSHqRKqT1C2
*               email: fernando@gmail.com
*               password: 123456
*               cpf: 12345678912
*               birth_date: 26121980
*               first_name: Giovanni
*               last_name: Martins de Sá Júnior
*               company_name: Pet Shop do Giovanni
*               telephone: 31999999999
*               cellphone: 31999999999
*               cnpj: 12345678912345
*               cep: 12345678
*               ie: 12345678
*               ie_state: MG
*               created_at: 24052021
*       '400':
*        description: No valid session provided
*       '500':
*        description: Internal server error while trying to register store
*
*/
