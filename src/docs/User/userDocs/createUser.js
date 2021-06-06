/**
* @swagger
*  /user:
*    post:
*      summary: Criação de um usuário
*      requestBody:
*        required: true
*        content:
*         application/json:
*          schema:
*            $ref: '#/components/schemas/User'
*      parameters:
*        - in: body
*          name: email
*          required: true
*          description: Email do usuário a ser criado.(STRING)
*          schema:
*        - in: body
*          name: password
*          required: true
*          description: Senha do usuário a ser criado.(STRING)
*          schema:
*        - in: body
*          name: cpf
*          required: true
*          description: Cpf do usuário a ser criado. Somente números serão guardados.(STRING)
*          schema:
*        - in: body
*          name: birth_date
*          required: true
*          description: Data de nascimento do usuário a ser criado. Somente números serão guardados.(DATE)
*          schema:
*        - in: body
*          name: first_name
*          required: true
*          description: Nome do usuário a ser criado.(STRING)
*          schema:
*        - in: body
*          name: last_name
*          required: true
*          description: Sobrenomes do usuário a ser criado.(STRING)
*          schema:
*        - in: body
*          name: telephone
*          required: true
*          description: telefone do usuário a ser criado.(INTEGER)
*          schema:
*      tags: [User]
*      description: Validação para criar usuário através das informações passadas pelo formulário.
*      responses:
*        '200':
*          description: User created
*        content:
*          application/json:
*            example:
*               firebase_id: GQ7677laMUevudWACvFRHK1Y88B3
*               email: jose@gmail.com
*               password: 123456
*               cpf: 12345678912
*               birth_date: 26121980
*               first_name: Giovanni
*               last_name: Martins de Sá Júnior
*               telephone: 31999999999
*        '400':
*          description: No valid session provided
*        '500':
*          description: Internal server error while trying to register user
*/
