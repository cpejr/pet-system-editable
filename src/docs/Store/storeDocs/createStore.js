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
*       - in: Multipart form
*         name: email
*         required: true
*         description: Email do administrador da loja.(STRING)
*         schema:
*       - in: Multipart form
*         name: password
*         required: true
*         description: Senha do usuário a ser criado.(STRING)
*         schema:
*       - in: Multipart form
*         name: cpf
*         required: true
*         description: Cpf do administrador da loja. Somente números serão guardados.(STRING)
*         schema:
*       - in: Multipart form
*         name: birth_date
*         required: true
*         description: Data de nascimento do administrador da loja. Somente números serão guardados.(DATE)
*         schema:
*       - in: Multipart form
*         name: first_name
*         required: true
*         description: Nome do administrador da loja.(STRING)
*         schema:
*       - in: Multipart form
*         name: last_name
*         required: true
*         description: Sobrenomes do administrador da loja.(STRING)
*         schema:
*       - in: Multipart form
*         name: company_name
*         required: true
*         description: Nome da loja a ser criada.(STRING)
*         schema:
*       - in: Multipart form
*         name: telephone
*         required: true
*         description: Telefone da loja a ser criada. Somente números serão guardados.(INTEGER)
*         schema:
*       - in: Multipart form
*         name: cellphone
*         required: true
*         description: Celular da loja a ser criada. Somente números serão guardados.(INTEGER)
*         schema:
*       - in: Multipart form
*         name: cnpj
*         required: true
*         description: Cnpj da loja a ser criada. Somente números serão guardados.(INTEGER)
*         schema:
*       - in: Multipart form
*         name: cep
*         required: true
*         description: Cep da loja a ser criada. Somente números serão guardados.(INTEGER)
*         schema:
*       - in: Multipart form
*         name: ie
*         required: true
*         description: Inscrição Estadual da loja. Somente números serão guardados.(INTEGER)
*         schema:
*       - in: Multipart form
*         name: ie_state
*         required: true
*         description: Estado referente à Inscrição Estadual.(STRING)
*         schema:
*       - in: Multipart form
*         name: cover_img
*         required: true
*         description: Imagem da Loja.(STRING)
*         schema:
*       - in: Multipart form
*         name: logo_img
*         required: true
*         description: Logo da loja.(STRING)
*         schema:
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
*               cover_img: '1586181877017.jpg'
*               logo_img: '1586181877017.jpg'
*       '400':
*        description: No valid session provided
*       '500':
*        description: Internal server error while trying to register store
*
*/
