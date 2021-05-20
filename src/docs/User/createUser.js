/**
* @swagger
*  /user:
*    post:
*      summary: Criar usuário
*      requestBody:
*        required: true
*        content:
*         application/json:
*          schema:
*            $ref: '#/components/schemas/User'
*      parameters:
*        - in: header
*          name: Authorization
*          schema:
*            type: string
*          required: true
*          description: Autorização básica.
*        - in: body
*          name: email
*          required: true
*          description: Email do usuário a ser criado.
*        - in: body
*          name: password
*          required: true
*          description: Senha do usuário a ser criado.
*        - in: body
*          name: cpf
*          required: true
*          description: Cpf do usuário a ser criado.
*        - in: body
*          name: birth_date
*          required: true
*          description: Data de nascimento do usuário a ser criado.
*        - in: body
*          name: first_name
*          required: true
*          description: Primeiro nome do usuário a ser criado.
*        - in: body
*          name: last_name
*          required: true
*          description: Sobrenome do usuário a ser criado.
*        - in: body
*          name: telephone
*          required: true
*          description: telefone do usuário a ser criado.
*      tags: [User]
*      description: Criar usuário.
*      responses:
*        '200':
*          description: User created
*        '400':
*          description: err.message
*        '500':
*          description: Internal server error while trying to register user
*/
